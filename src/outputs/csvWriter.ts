import fs from "fs";
import { Parser } from "json2csv";
import { ensureDir } from "../utils/dedupe.js";

export async function writeCSV(filePath: string, data: any[]) {
await ensureDir(filePath.substring(0, filePath.lastIndexOf("/")));
const flat = data.map((r) => ({
id: r.id,
name: r.name,
address: r.address,
phone: r.phone,
email: r.email,
website: r.website,
rating: r.rating,
ratingCount: r.ratingCount,
bestIndustry: r.bestIndustry,
location: r.googleMapsAddress
}));
const parser = new Parser();
const csv = parser.parse(flat);
fs.writeFileSync(filePath, csv, "utf-8");
}