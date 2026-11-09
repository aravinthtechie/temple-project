# Temple Buddy

An Angular travel and visitor guide for temple journeys in the Cauvery Delta.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`. Run `npm test` for unit tests and `npm run build` for a production build.

## Site structure

- The home page describes the travel packages, Navagraha circuit, pariharam visits, heritage tours, weddings, vehicles, enquiry steps and partner information.
- `/tours/navagraha` presents the sample three-day itinerary and links to each temple detail.
- `/navagraha` and `/navagraha/:slug` provide the temple gallery and individual temple details.
- Centralized temple data, multilingual home and package copy, and business-contact configuration live in `src/app/data/`.
- The site supports English, Tamil, Hindi and French.
- Temple photographs are local, distinct WebP images. Each image's Wikimedia Commons source, creator and license are recorded with the temple data. `fallback.svg` is an abstract unavailable-image placeholder, not a temple photograph.
- The homepage features a Vaitheeswaran Koil photograph supplied for this site. Its attribution is identified as supplied by Temple Buddy; no external source or license is claimed.
- Five color themes (Temple, Forest, Sunrise, Ocean and Night) can be selected from the header and are available in all supported languages.

## Details to supply before taking bookings

The supplied brief contains placeholders, not actual business details. The supplied phone number and office location are set in `SITE_CONTACT` in `src/app/data/site-content.ts`; add a verified email and WhatsApp number there if available. Package prices and group-sizeng basis, hotel category, booking/payment integration, advance and balance terms, cancellation/refund policy, wedding/vehicle availability, and customer reviews with permission to publish remain pending. The site deliberately does not invent these details, display sample testimonials, or claim to accept bookings or payments.

Temple opening hours remain unverified until a current temple-issued schedule, verification date and source URL are entered in `src/app/data/navagraha-temples.ts`.
