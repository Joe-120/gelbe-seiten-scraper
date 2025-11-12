import fs from "fs/promises";

export function normalizePhone(phone: string | null): string | null {
if (!phone) return null;
const d = phone.replace(/[^\d+]/g, "");
return d.length > 5 ? d : null;
}

export async function readSettings(filePath: string): Promise<any> {
try {
const raw = await fs.readFile(filePath, "utf-8");
return JSON.parse(raw);
} catch {
return {};
}
}