import fs from "fs/promises";
import path from "path";

export async function ensureDir(dir: string) {
await fs.mkdir(dir, { recursive: true });
}

export function ensureArray<T>(val: T[] | T | null | undefined): T[] {
if (!val) return [];
return Array.isArray(val) ? val : [val];
}

export function makeHashKey(input: { id?: string; website?: string }): string {
return (input.id || input.website || Math.random().toString(36).slice(2)).toString();
}

export async function writeIfNotExists(filePath: string, content: string) {
try {
await fs.access(filePath);
} catch {
await ensureDir(path.dirname(filePath));
await fs.writeFile(filePath, content, "utf-8");
}
}