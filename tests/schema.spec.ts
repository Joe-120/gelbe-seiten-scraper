import { describe, it, expect } from "vitest";
import { OutputRecordSchema } from "../src/schemas/output.schema.js";

describe("Output schema", () => {
it("requires id and accepts optional fields", () => {
const parsed = OutputRecordSchema.safeParse({ id: "gs_1" });
expect(parsed.success).toBe(true);
});

it("rejects invalid rating", () => {
const parsed = OutputRecordSchema.safeParse({ id: "gs_2", rating: 7.5 });
expect(parsed.success).toBe(false);
});
});