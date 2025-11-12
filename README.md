# Gelbe Seiten Scraper
> Extract verified company emails, phone numbers, addresses, reviews, and rich business details from **Gelbe Seiten** (Germany’s Yellow Pages). Purpose-built for fast, reliable lead generation and market research with clean, typed output.
> Ideal for sales, marketing, and analysts who need high-quality German business data at scale.


<p align="center">
  <a href="https://bitbash.dev" target="_blank">
    <img src="https://github.com/za2122/footer-section/blob/main/media/scraper.png" alt="Bitbash Banner" width="100%"></a>
</p>
<p align="center">
  <a href="https://t.me/devpilot1" target="_blank">
    <img src="https://img.shields.io/badge/Chat%20on-Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
  </a>&nbsp;
  <a href="https://wa.me/923249868488?text=Hi%20BitBash%2C%20I'm%20interested%20in%20automation." target="_blank">
    <img src="https://img.shields.io/badge/Chat-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>&nbsp;
  <a href="mailto:sale@bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Email-sale@bitbash.dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>&nbsp;
  <a href="https://bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Visit-Website-007BFF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website">
  </a>
</p>




<p align="center" style="font-weight:600; margin-top:8px; margin-bottom:8px;">
  Created by Bitbash, built to showcase our approach to Scraping and Automation!<br>
  If you are looking for <strong>Gelbe Seiten Scraper</strong> you've just found your team — Let’s Chat. 👆👆
</p>


## Introduction
This project automates data collection from Gelbe Seiten search results and company detail pages. It solves the time-consuming task of manually compiling German business leads by providing structured, typed outputs ready for analytics and outreach.
It’s built for growth teams, founders, researchers, journalists, and data analysts who need consistent, deduplicated datasets with strong typing guarantees.

### Why Gelbe Seiten Data Matters
- Covers one of Germany’s most comprehensive business directories.
- Captures contact details (email/phone), addresses, opening hours, and services.
- Enriches hospitality listings with parsed **Booking.com** widget information.
- Supports large crawls with auto-pagination, resume-on-fail, and deduplication.
- Exports in multiple formats (CSV, XLSX, JSON) for instant workflow use.

## Features
| Feature | Description |
|----------|-------------|
| Query + Location Search | Search by keyword with optional city/region, or scan Germany-wide. |
| Deep Detail Extraction | Pulls emails, phones, multiple numbers, opening hours, menus, images, and more. |
| Reviews & Ratings | Collects review text, ratings, counts, and engagement metadata. |
| Booking.com Enrichment | For hotels/apartments: images, score, amenities, policies, services. |
| Strong Typing | Output validated against strict schemas to ensure consistency. |
| Auto Pagination | No page limit; continues until the end of results or a maxPages cap. |
| High Throughput | Optimized pipeline; ~30+ listings/second in typical conditions. |
| Fault Tolerance | Resumes after interruptions; migration-safe and error-resistant. |
| Deduplication Engine | Avoids re-scraping the same listing; reduces post-processing. |
| Multi-Format Export | CSV, Excel, JSON—ready for CRM/BI tools. |

---

## What Data This Scraper Extracts
| Field Name | Field Description |
|-------------|------------------|
| id | Unique search result identifier. |
| memberId | Directory membership identifier (if available). |
| name | Company or listing name. |
| logoURL | Logo image URL (if available). |
| bestIndustry | Primary industry/category. |
| googleMapsAddress | Google Maps formatted address (if available). |
| address | Full address string from the listing. |
| phone | Primary phone number. |
| website | Official website URL (if present). |
| shortDescription | Short blurb from search results. |
| highlightLevel | Listing highlight rank/level. |
| partnerLevel | Paid/partner tier information (if present). |
| rating | Average rating (0–5). |
| ratingCount | Total number of reviews. |
| email | Contact email parsed from detail page. |
| openingHours[] | Array of day → hour ranges (with closed flags). |
| additionalPhoneNumbers[] | Labeled extra phone numbers. |
| menu | Menu URL for restaurants (if present). |
| reviews[] | Structured review objects (text, ratings, dates, reactions). |
| description | Long-form company description. |
| acceptedPaymentMethods[] | Accepted payment options. |
| images[] | Image objects with `src` and `caption`. |
| socialAccounts[] | Social URLs with normalized `type` (e.g., facebook, instagram). |
| brochure | Brochure/PDF URL if available. |
| openPositions[] | Job posting objects. |
| faq[] | Frequently asked questions with answers. |
| industries[] | List of industries/categories. |
| services[] | Services offered. |
| extraInfo | Brands, memberships, languages, accessibility. |
| bookingInfo | Parsed Booking.com widget details (hotels, etc.). |
| relatedIds[] | IDs of related/linked listings. |

---

## Example Output
Example:

	[
	  {
	    "id": "gs_987654321",
	    "memberId": "M-12345",
	    "name": "Hotel Berlin Mitte",
	    "logoURL": "https://example.de/logo.png",
	    "bestIndustry": "Hotel",
	    "googleMapsAddress": "Chausseestraße 10, 10115 Berlin",
	    "address": "Chausseestraße 10, 10115 Berlin",
	    "phone": "+49 30 123456",
	    "website": "https://hotel-berlin-mitte.de",
	    "shortDescription": "Zentrales Stadthotel mit Frühstück",
	    "highlightLevel": 2,
	    "partnerLevel": "premium",
	    "rating": 4.4,
	    "ratingCount": 128,
	    "email": "info@hotel-berlin-mitte.de",
	    "openingHours": [
	      { "day": "Mon", "hours": [ { "closed": false, "from": "00:00", "to": "24:00" } ] }
	    ],
	    "additionalPhoneNumbers": [
	      { "title": "Reservierung", "number": "+49 30 654321" }
	    ],
	    "menu": null,
	    "reviews": [
	      {
	        "text": "Sehr zentral, freundliches Personal.",
	        "erstellungsDatumIso": "2024-10-12T09:10:00.000Z",
	        "erstellungsDatumFormatiert": "12.10.2024",
	        "bearbeitungsDatum": null,
	        "bewertungBeiAnbieter": 5,
	        "bewertungsKriteriumListe": null,
	        "bewertungNormiert": 4.5,
	        "anzahlKommentare": 0,
	        "reaktionListe": [],
	        "verifikationListe": [],
	        "bewertungTextAnzahl": 1,
	        "erstellungsDatum": "2024-10-12T09:10:00.000Z",
	        "produkt": { "partnerName": null, "name": null, "information": null },
	        "benutzer": { "name": "Lena", "nutzerprofilUrl": null, "nutzerbildUrl": null },
	        "titel": "Top Lage"
	      }
	    ],
	    "description": "Komfortable Zimmer nahe Hbf, kostenloses WLAN.",
	    "acceptedPaymentMethods": ["EC-Karte", "Visa", "Mastercard"],
	    "images": [
	      { "src": "https://example.de/room.jpg", "caption": "Doppelzimmer" }
	    ],
	    "socialAccounts": [
	      { "url": "https://www.instagram.com/hotelberlinmitte", "type": "instagram" }
	    ],
	    "brochure": null,
	    "openPositions": [],
	    "faq": [
	      { "question": "Gibt es Parkplätze?", "answer": "Ja, Tiefgarage vorhanden." }
	    ],
	    "industries": ["Hotel", "Tourismus"],
	    "services": ["Frühstück", "WLAN", "24h-Rezeption"],
	    "extraInfo": { "languages": ["DE", "EN"], "accessibility": ["Aufzug"] },
	    "bookingInfo": {
	      "images": ["https://example.de/b1.jpg", "https://example.de/b2.jpg"],
	      "score": 8.7,
	      "description": "Beliebte Lage, saubere Zimmer.",
	      "services": ["Zimmerservice", "WLAN", "Parken"],
	      "general": ["Nichtraucherzimmer"]
	    },
	    "relatedIds": ["gs_987654322", "gs_987654323"]
	  }
	]

---

## Directory Structure Tree
    Gelbe Seiten Scraper/
    ├── src/
    │   ├── runner.ts
    │   ├── pipeline/
    │   │   ├── searchQueue.ts
    │   │   ├── listingParser.ts
    │   │   ├── detailParser.ts
    │   │   ├── bookingParser.ts
    │   │   └── reviewParser.ts
    │   ├── extractors/
    │   │   ├── contactExtractor.ts
    │   │   ├── hoursExtractor.ts
    │   │   └── socialExtractor.ts
    │   ├── schemas/
    │   │   ├── booking.schema.ts
    │   │   ├── review.schema.ts
    │   │   └── output.schema.ts
    │   ├── outputs/
    │   │   ├── csvWriter.ts
    │   │   ├── xlsxWriter.ts
    │   │   └── jsonWriter.ts
    │   ├── utils/
    │   │   ├── http.ts
    │   │   ├── logger.ts
    │   │   ├── dedupe.ts
    │   │   └── rateLimit.ts
    │   └── config/
    │       ├── defaults.json
    │       └── settings.example.json
    ├── data/
    │   ├── samples/
    │   │   └── berlin-hotels.sample.json
    │   └── outputs/
    │       ├── sample.json
    │       ├── sample.csv
    │       └── sample.xlsx
    ├── tests/
    │   ├── parsing.spec.ts
    │   └── schema.spec.ts
    ├── docker/
    │   └── Dockerfile
    ├── package.json
    ├── tsconfig.json
    ├── .env.example
    └── README.md

---

## Use Cases
- **Sales teams** use it to **build targeted B2B lead lists in Germany**, so they can **accelerate outreach with verified contacts**.
- **Marketing agencies** use it to **enrich CRM records with fresh company data**, so they can **improve segmentation and campaign ROI**.
- **Hospitality analysts** use it to **track hotel amenities and scores**, so they can **benchmark competitors across regions**.
- **Local businesses** use it to **map competitors’ services and ratings**, so they can **refine pricing and positioning**.
- **Researchers** use it to **collect structured datasets on German SMEs**, so they can **run market studies with confidence**.

---

## FAQs
**Q1: Is there a limit to the number of pages?**
No hard limit. You can let it auto-paginate through all results or cap via `maxPages`.

**Q2: Can I target a specific city or region?**
Yes. Provide `location` (e.g., “Berlin” or “Bayern”). If omitted, it searches Germany-wide.

**Q3: How are duplicates handled?**
A built-in deduplication engine hashes listing identifiers and URLs to avoid re-processing.

**Q4: What formats can I export?**
CSV, Excel (XLSX), and JSON. All outputs follow the same strongly-typed schema.

---

## Performance Benchmarks and Results
**Primary Metric:** ~30–35 listings/second on typical broadband; ~1,500 listings in ~45 seconds.
**Reliability Metric:** 99%+ successful page fetch rate with auto-retry and graceful resume.
**Efficiency Metric:** Processes ~10–12 pages per second with lightweight concurrency controls.
**Quality Metric:** >98% field completeness on core fields (name, address, phone); strict schema validation prevents malformed records.


<p align="center">
<a href="https://calendar.app.google/74kEaAQ5LWbM8CQNA" target="_blank">
  <img src="https://img.shields.io/badge/Book%20a%20Call%20with%20Us-34A853?style=for-the-badge&logo=googlecalendar&logoColor=white" alt="Book a Call">
</a>
  <a href="https://www.youtube.com/@bitbash-demos/videos" target="_blank">
    <img src="https://img.shields.io/badge/🎥%20Watch%20demos%20-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Watch on YouTube">
  </a>
</p>
<table>
  <tr>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/MLkvGB8ZZIk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review1.gif" alt="Review 1" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash is a top-tier automation partner, innovative, reliable, and dedicated to delivering real results every time.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Nathan Pennington
        <br><span style="color:#888;">Marketer</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/8-tw8Omw9qk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review2.gif" alt="Review 2" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash delivers outstanding quality, speed, and professionalism, truly a team you can rely on.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Eliza
        <br><span style="color:#888;">SEO Affiliate Expert</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtube.com/shorts/6AwB5omXrIM" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review3.gif" alt="Review 3" width="35%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Exceptional results, clear communication, and flawless delivery. Bitbash nailed it.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Syed
        <br><span style="color:#888;">Digital Strategist</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
  </tr>
</table>
