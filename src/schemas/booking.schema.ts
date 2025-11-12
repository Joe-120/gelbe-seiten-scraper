import { z } from "zod";

export const BookingSchema = z.object({
images: z.array(z.string()).optional().default([]),
score: z.number().min(0).max(10).nullable().optional().default(null),
description: z.string().nullable().optional().default(null),
services: z.array(z.string()).optional().default([]),
general: z.array(z.string()).optional().default([])
});

export type Booking = z.infer<typeof BookingSchema>;