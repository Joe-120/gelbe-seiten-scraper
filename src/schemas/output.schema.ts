import { z } from "zod";
import { BookingSchema } from "./booking.schema.js";
import { ReviewSchema } from "./review.schema.js";

export const OutputRecordSchema = z.object({
id: z.string(),
memberId: z.string().nullable().optional(),
name: z.string().nullable().optional(),
logoURL: z.string().nullable().optional(),
bestIndustry: z.string().nullable().optional(),
googleMapsAddress: z.string().nullable().optional(),
address: z.string().nullable().optional(),
phone: z.string().nullable().optional(),
website: z.string().nullable().optional(),
shortDescription: z.string().nullable().optional(),
highlightLevel: z.number().int().min(0).max(5).optional().default(0),
partnerLevel: z.string().nullable().optional(),
rating: z.number().min(0).max(5).nullable().optional(),
ratingCount: z.number().int().nullable().optional(),
email: z.string().email().nullable().optional(),
openingHours: z
.array(
z.object({
day: z.string(),
hours: z.array(
z.object({
closed: z.boolean(),
from: z.string().optional(),
to: z.string().optional()
})
)
})
)
.optional()
.default([]),
additionalPhoneNumbers: z
.array(z.object({ title: z.string(), number: z.string() }))
.optional()
.default([]),
menu: z.string().nullable().optional(),
reviews: z.array(ReviewSchema).optional().default([]),
description: z.string().nullable().optional(),
acceptedPaymentMethods: z.array(z.string()).optional().default([]),
images: z.array(z.object({ src: z.string(), caption: z.string().nullable().optional() })).optional().default([]),
socialAccounts: z.array(z.object({ url: z.string(), type: z.string() })).optional().default([]),
brochure: z.string().nullable().optional(),
openPositions: z.array(z.any()).optional().default([]),
faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional().default([]),
industries: z.array(z.string()).optional().default([]),
services: z.array(z.string()).optional().default([]),
extraInfo: z.record(z.any()).optional().default({}),
bookingInfo: BookingSchema.nullable().optional().default(null),
relatedIds: z.array(z.string()).optional().default([])
});

export type OutputRecord = z.infer<typeof OutputRecordSchema>;