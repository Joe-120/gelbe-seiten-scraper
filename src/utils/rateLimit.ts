import pLimit from "p-limit";

export function createLimiter(concurrency = 5) {
const limit = pLimit(concurrency);
return <T>(fn: () => Promise<T>) => limit(fn);
}