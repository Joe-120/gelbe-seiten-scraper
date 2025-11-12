import { ReviewSchema } from "../schemas/review.schema.js";
import { ensureArray } from "../utils/dedupe.js";

export async function parseReviews(input: any) {
const reviews = ensureArray(input.reviews || []);
const valid = [];
for (const r of reviews) {
const parsed = ReviewSchema.safeParse(r);
if (parsed.success) valid.push(parsed.data);
}
return { ...input, reviews: valid };
}