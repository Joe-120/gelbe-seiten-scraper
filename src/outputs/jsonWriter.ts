import fs from "fs/promises";
import { ensureDir } from "../utils/dedupe.js";

export async function writeJSON(filePath: string, data: unknown) {
await ensureDir(new URL("file://" + filePath).pathname.replace(/\\/g, "/").split("/").slice(0, -1).join("/"));
await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}