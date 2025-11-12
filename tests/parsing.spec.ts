import { describe, it, expect } from "vitest";
import { parseListing } from "../src/pipeline/listingParser.js";
import { parseDetail } from "../src/pipeline/detailParser.js";
import { parseBooking } from "../src/pipeline/bookingParser.js";
import { parseReviews } from "../src/pipeline/reviewParser.js";
import { OutputRecordSchema } from "../src/schemas/output.schema.js";

describe("parsing pipeline", () => {
it("should transform sample listing to valid record", async () => {
const sample = {
id: "gs_987654321",
name: "Hotel Berlin Mitte",
address: "Chausseestraße 10, 10115 Berlin",
phone: "+49 30 123456",
website: "https://hotel-berlin-mitte.de",
rating: 4.4,
ratingCount: 128,
email: "info@hotel-berlin-mitte.de",
openingHours: [{ day: "Mon", hours: [{ closed: false, from: "00:00", to: "24:00" }] }],
additionalPhoneNumbers: [{ title: "Reservierung", number: "+49 30 654321" }],
description: "Komfortable Zimmer nahe Hbf, kostenloses WLAN.",
images: [{ src: "https://example.de/room.jpg", caption: "Doppelzimmer" }],
socialAccounts: [{ url: "https://www.instagram.com/hotelberlinmitte" }],
bookingInfo: { images: ["https://example.de/b1.jpg"], score: 8.7 },
reviews: [{ text: "Sehr zentral", bewertungNormiert: 4.5 }]
};

const l = await parseListing(sample);
const d = await parseDetail(l);
const b = await parseBooking(d);
const r = await parseReviews(b);

const result = OutputRecordSchema.safeParse(r);
expect(result.success).toBe(true);
if (result.success) {
expect(result.data.id).toBe("gs_987654321");
expect(result.data.email).toBe("info@hotel-berlin-mitte.de");
expect(result.data.reviews?.length).toBe(1);
}
});
});