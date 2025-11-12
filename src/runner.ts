import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { createLogger } from "./utils/logger.js";
import { readSettings } from "./utils/http.js";
import { createSearchQueue } from "./pipeline/searchQueue.js";
import { parseListing } from "./pipeline/listingParser.js";
import { parseDetail } from "./pipeline/detailParser.js";
import { parseBooking } from "./pipeline/bookingParser.js";
import { parseReviews } from "./pipeline/reviewParser.js";
import { OutputRecordSchema } from "./schemas/output.schema.js";
import { writeJSON } from "./outputs/jsonWriter.js";
import { writeCSV } from "./outputs/csvWriter.js";
import { writeXLSX } from "./outputs/xlsxWriter.js";
import { ensureDir } from "./utils/dedupe.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
const logger = createLogger(process.env.LOG_LEVEL || "info");

const settings = await readSettings(
path.resolve(__dirname, "config", "defaults.json")
);

const query = process.env.QUERY || settings.query || "hotel";
const location = process.env.LOCATION || settings.location || "Berlin";
const maxPages =
Number(process.env.MAX_PAGES || settings.maxPages || 2) || 2;
const outputDir =
process.env.OUTPUT_DIR || settings.outputDir || "./data/outputs";
const formats =
(process.env.OUTPUT_FORMATS || settings.outputFormats || "json,csv")
.split(",")
.map((s) => s.trim().toLowerCase())
.filter(Boolean);

await ensureDir(outputDir);

logger.info(
{ query, location, maxPages, outputDir, formats },
"Starting Gelbe Seiten pipeline"
);

// In this reference implementation we operate over the sample dataset.
const samplePath = path.resolve(
__dirname,
"..",
"data",
"samples",
"berlin-hotels.sample.json"
);
if (!fs.existsSync(samplePath)) {
logger.error({ samplePath }, "Sample input not found");
process.exit(1);
}

const queue = await createSearchQueue({
query,
location,
maxPages,
samplePath
});

const results: any[] = [];
let processed = 0;

for await (const item of queue) {
const listing = await parseListing(item);
const detailed = await parseDetail(listing);
const withBooking = await parseBooking(detailed);
const withReviews = await parseReviews(withBooking);

const parsed = OutputRecordSchema.safeParse(withReviews);
if (!parsed.success) {
const issues = parsed.error.issues.map((i) => ({
path: i.path.join("."),
message: i.message
}));
logger.warn({ id: listing.id, issues }, "Validation failed; skipping");
continue;
}

results.push(parsed.data);
processed += 1;
if (processed % 5 === 0) {
logger.info({ processed }, "Progress");
}
}

logger.info({ processed, valid: results.length }, "Pipeline complete");

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const base = `gelbe-seiten_${query}_${location}_${timestamp}`;

if (formats.includes("json")) {
const jsonPath = path.join(outputDir, `${base}.json`);
await writeJSON(jsonPath, results);
logger.info({ jsonPath }, "Wrote JSON");
}
if (formats.includes("csv")) {
const csvPath = path.join(outputDir, `${base}.csv`);
await writeCSV(csvPath, results);
logger.info({ csvPath }, "Wrote CSV");
}
if (formats.includes("xlsx")) {
const xlsxPath = path.join(outputDir, `${base}.xlsx`);
await writeXLSX(xlsxPath, results);
logger.info({ xlsxPath }, "Wrote XLSX");
}

logger.info("Done.");
}

main().catch((err) => {
const logger = createLogger("error");
logger.error({ err }, "Fatal error");
process.exit(1);
});