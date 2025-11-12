import { normalizePhone } from "../utils/http.js";

type ListingIn = any;

export async function parseListing(listing: ListingIn) {
// Minimal normalization at search stage
const id =
listing.id ||
`gs_${Buffer.from((listing.name || "unknown") + Math.random())
.toString("base64")
.slice(0, 9)}`;

const bestIndustry =
listing.bestIndustry ||
(Array.isArray(listing.industries) ? listing.industries[0] : undefined) ||
null;

return {
id,
memberId: listing.memberId ?? null,
name: listing.name ?? null,
logoURL: listing.logoURL ?? null,
bestIndustry,
googleMapsAddress: listing.googleMapsAddress ?? null,
address: listing.address ?? null,
phone: normalizePhone(listing.phone ?? null),
website: listing.website ?? null,
shortDescription: listing.shortDescription ?? null,
highlightLevel: typeof listing.highlightLevel === "number" ? listing.highlightLevel : 0,
partnerLevel: listing.partnerLevel ?? null,
rating: typeof listing.rating === "number" ? listing.rating : null,
ratingCount: typeof listing.ratingCount === "number" ? listing.ratingCount : null
};
}