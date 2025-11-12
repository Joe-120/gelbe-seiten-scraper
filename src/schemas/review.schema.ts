import { z } from "zod";

export const ReviewSchema = z.object({
text: z.string().min(1),
erstellungsDatumIso: z.string().nullable().optional(),
erstellungsDatumFormatiert: z.string().nullable().optional(),
bearbeitungsDatum: z.string().nullable().optional(),
bewertungBeiAnbieter: z.number().nullable().optional(),
bewertungsKriteriumListe: z.any().nullable().optional(),
bewertungNormiert: z.number().nullable().optional(),
anzahlKommentare: z.number().nullable().optional(),
reaktionListe: z.array(z.any()).optional().default([]),
verifikationListe: z.array(z.any()).optional().default([]),
bewertungTextAnzahl: z.number().nullable().optional(),
erstellungsDatum: z.string().nullable().optional(),
produkt: z.object({
partnerName: z.string().nullable().optional(),
name: z.string().nullable().optional(),
information: z.string().nullable().optional()
}).optional().default({}),
benutzer: z.object({
name: z.string().nullable().optional(),
nutzerprofilUrl: z.string().nullable().optional(),
nutzerbildUrl: z.string().nullable().optional()
}).optional().default({}),
titel: z.string().nullable().optional()
});

export type Review = import("zod").infer<typeof ReviewSchema>;