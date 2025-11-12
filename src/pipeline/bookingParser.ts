import { BookingSchema } from "../schemas/booking.schema.js";

export async function parseBooking(input: any) {
const booking = input.bookingInfo ?? null;
if (!booking) {
return { ...input, bookingInfo: null };
}
const parsed = BookingSchema.safeParse(booking);
if (!parsed.success) {
return { ...input, bookingInfo: null };
}
return { ...input, bookingInfo: parsed.data };
}