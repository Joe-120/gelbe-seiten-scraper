import fs from "fs/promises";

type QueueInit = {
query: string;
location: string;
maxPages: number;
samplePath: string;
};

type SampleRecord = {
id: string;
name: string;
address?: string | null;
phone?: string | null;
website?: string | null;
rating?: number | null;
ratingCount?: number | null;
email?: string | null;
openingHours?: any[] | null;
additionalPhoneNumbers?: { title: string; number: string }[];
description?: string | null;
images?: { src: string; caption?: string | null }[];
socialAccounts?: { url: string; type?: string }[];
bookingInfo?: any | null;
reviews?: any[] | null;
industries?: string[];
services?: string[];
};

export async function* createSearchQueue(init: QueueInit) {
const raw = await fs.readFile(init.samplePath, "utf-8");
const sample: SampleRecord[] = JSON.parse(raw);

// Simulate pagination by slicing
const pageSize = 25;
const totalPages = Math.min(
Math.ceil(sample.length / pageSize),
Math.max(1, init.maxPages)
);

for (let page = 0; page < totalPages; page++) {
const start = page * pageSize;
const end = start + pageSize;
const slice = sample.slice(start, end);
for (const record of slice) {
// Emit each "search result" item
yield { ...record };
}
}
}