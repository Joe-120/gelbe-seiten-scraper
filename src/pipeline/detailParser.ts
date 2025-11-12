import { extractContacts } from "../extractors/contactExtractor.js";
import { ensureArray } from "../utils/dedupe.js";

type DetailIn = any;

export async function parseDetail(listing: DetailIn) {
const { email, phones } = extractContacts({
email: listing.email,
phone: listing.phone,
additionalPhoneNumbers: listing.additionalPhoneNumbers
});

return {
...listing,
email,
openingHours: ensureArray(listing.openingHours || []),
additionalPhoneNumbers: phones,
menu: listing.menu ?? null,
description: listing.description ?? null,
acceptedPaymentMethods: ensureArray(listing.acceptedPaymentMethods || []),
images: ensureArray(listing.images || []),
socialAccounts: ensureArray(listing.socialAccounts || []),
brochure: listing.brochure ?? null,
openPositions: ensureArray(listing.openPositions || []),
faq: ensureArray(listing.faq || []),
industries: ensureArray(listing.industries || []),
services: ensureArray(listing.services || []),
extraInfo: listing.extraInfo ?? {}
};
}