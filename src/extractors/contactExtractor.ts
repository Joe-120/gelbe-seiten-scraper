import { normalizePhone } from "../utils/http.js";

type ExtractIn = {
email?: string | null;
phone?: string | null;
additionalPhoneNumbers?: { title?: string; number: string }[] | null;
};

const EMAIL_RE =
/([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

export function extractContacts(input: ExtractIn) {
const email =
typeof input.email === "string" && EMAIL_RE.test(input.email)
? input.email.toLowerCase()
: null;

const phones: { title: string; number: string }[] = [];
const main = normalizePhone(input.phone || null);
if (main) phones.push({ title: "Hauptnummer", number: main });

if (Array.isArray(input.additionalPhoneNumbers)) {
for (const p of input.additionalPhoneNumbers) {
const n = normalizePhone(p?.number || "");
if (n) phones.push({ title: p?.title || "Kontakt", number: n });
}
}

// Dedupe by number
const seen = new Set<string>();
const unique = phones.filter((p) => {
if (seen.has(p.number)) return false;
seen.add(p.number);
return true;
});

return { email, phones: unique };
}