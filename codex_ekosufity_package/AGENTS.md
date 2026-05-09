# AGENTS.md — EkoSufity SEO/content implementation guidance

## Project context

This repository is the website for **EkoSufity**, a Polish-language local service business offering stretch ceilings (`sufity napinane`) in Wrocław and nearby towns.

The primary SEO market is Poland, especially:

- Wrocław
- Wrocław Krzyki
- Wrocław Fabryczna
- Wrocław Psie Pole
- Wrocław Stare Miasto
- Wrocław Śródmieście
- Leśnica
- Oleśnica
- Oława
- Świdnica
- Dzierżoniów
- Bielawa
- Trzebnica
- Siechnice
- Kąty Wrocławskie
- Jelcz-Laskowice
- Środa Śląska
- Strzelin

Customer-facing content must be in **Polish** with correct Polish diacritics. Internal comments may be English.

## Business data — do not change without explicit approval

- Brand: `EkoSufity`
- Phone: `+48 791 085 385`
- Email: `ekosufity@gmail.com`
- Address: `Strzegomska 204, 53-611 Wrocław`
- Hours: `pon.-pt. 9:00-20:00`
- Main promise: `Sufity napinane premium we Wrocławiu i okolicach do 100 km`
- Price range: `od 120 zł/m²`

## Content source of truth

Use this file as the main content source:

```txt
src/data/ekoSufityContent.json
```

If the file is not yet present, copy it from:

```txt
content/ekoSufityContent.json
```

Human-readable content brief:

```txt
docs/eko_sufity_content_implementation_pack.md
```

Do **not** display Markdown citations, internal notes, or task descriptions on the public website.

## Core implementation rules

1. Keep the current site structure and URL structure as much as possible.
2. Do not radically redesign the website.
3. Improve SEO, accessibility, content quality, internal linking, structured data, image handling, and small UX details.
4. Do not remove existing important CTAs: phone, WhatsApp, free measurement, price page.
5. Keep pages statically renderable where possible.
6. Do not claim that stock/AI images are real customer realizations. If images are not verified real projects, label them as examples/inspirations or use neutral wording.
7. Preserve all routes already used by navigation and internal links.
8. If a route listed in the content data does not exist, either create it using the existing page pattern or document it as a TODO if creation would change the agreed structure.
9. Prefer typed data structures where the project uses TypeScript.
10. Run project checks before finishing: build, lint, typecheck, tests if available.

## SEO rules

Every public page should have:

- unique `title`
- unique `description`
- canonical URL
- Open Graph title/description/image
- meaningful H1
- logical H2/H3 hierarchy
- internal links to related pages
- Polish copy written for humans, not keyword stuffing

Add JSON-LD where appropriate:

- `LocalBusiness`
- `Service`
- `BreadcrumbList`
- `FAQPage`

Use a stable site URL. Prefer `NEXT_PUBLIC_SITE_URL`; fallback to the production URL already used by the project.

## Image rules

- Put website images in `public/images/...`.
- Use descriptive filenames, for example:
  - `sufit-napinany-salon-wroclaw.webp`
  - `sufit-napinany-matowy-led.webp`
  - `oswietlenie-led-sufit-napinany.webp`
- Every meaningful image needs an `alt` in Polish.
- Use width/height or an equivalent layout strategy to avoid layout shifts.
- Use lazy loading for non-hero images.
- Hero/LCP image may use priority/eager loading if the framework supports it.
- Avoid enormous image files.

## Copy style

Tone: clear, premium, practical, trustworthy.

Use:

- `bezpłatny pomiar`
- `uczciwa wycena`
- `montaż bez kurzu`
- `większość standardowych realizacji w 1 dzień`
- `Wrocław i okolice do 100 km`
- `orientacyjnie od ... zł/m²`

Avoid exaggerated unverifiable claims such as:

- `najlepsi w Polsce`
- `najtańsi`
- `gwarantowany top Google`
- `zawsze w 1 dzień`

Use cautious language for prices and timing:

- `orientacyjnie`
- `zależnie od metrażu`
- `po pomiarze`
- `większość standardowych realizacji`

## Review guidelines

When reviewing changes, check:

- No customer-facing Russian text remains on Polish pages.
- No broken links.
- No duplicate H1 per page.
- Metadata matches page intent.
- FAQ visible content matches FAQPage JSON-LD.
- Contact data is consistent everywhere.
- No raw Markdown, citations, or internal task notes appear on the website.
- No false claim that placeholder/AI/stock images are real realizations.
- Build/lint/typecheck pass or failures are clearly explained.
