import * as XLSX from "xlsx";
import { ensureDir } from "../utils/dedupe.js";
import fs from "fs";

export async function writeXLSX(filePath: string, data: any[]) {
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
const ws = XLSX.utils.json_to_sheet(flat);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "data");
const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
fs.writeFileSync(filePath, buf);
}