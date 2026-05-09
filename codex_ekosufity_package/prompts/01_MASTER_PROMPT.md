# Codex task: EkoSufity SEO/content implementation

You are working in the repository of the EkoSufity website.

## Goal

Implement the prepared Polish SEO content and local SEO structure without changing the existing website structure or radically redesigning the site.

The business is a local stretch ceiling service provider in Wrocław and nearby towns. The site should rank and convert for Polish queries around:

- `sufity napinane Wrocław`
- `montaż sufitów napinanych Wrocław`
- `sufit napinany cena Wrocław`
- `sufity napinane Krzyki`
- `sufity napinane Psie Pole`
- `sufity napinane Fabryczna`
- `sufity napinane Oleśnica`
- `sufity napinane Oława`
- `sufity napinane z oświetleniem LED Wrocław`

## First: inspect the codebase

Before editing anything:

1. Detect the framework and routing system.
2. Identify whether the project uses Next.js App Router, Pages Router, React Router, Astro, Vite, or another framework.
3. Identify existing routes, components, data files, metadata handling, image components, and sitemap/robots setup.
4. Identify package scripts for build/lint/typecheck/test.
5. Summarize the current structure briefly.

## Content source

Use this prepared data as the source of truth:

```txt
src/data/ekoSufityContent.json
```

If this file does not exist, copy it from:

```txt
content/ekoSufityContent.json
```

Human-readable content brief:

```txt
docs/eko_sufity_content_implementation_pack.md
```

Do not put internal notes, citations, or Markdown task text on the public website.

## Implementation scope

Implement as much as safely possible:

### 1. Data placement

- Ensure the content JSON is available inside the source tree, preferably:

```txt
src/data/ekoSufityContent.json
```

- If the project uses TypeScript, add lightweight types for the content data.

### 2. Metadata

For every public page, use content data to set:

- unique title
- unique meta description
- canonical URL
- Open Graph title/description/image
- locale `pl_PL`

Use existing framework conventions. For Next.js App Router, prefer `export const metadata` or `generateMetadata`.

### 3. Public pages

Update existing pages using the content data:

- `/`
- `/o-sufitach`
- `/rodzaje-sufitow`
- `/rozwiazania`
- `/ceny`
- `/realizacje`
- `/lokalizacje`
- `/faq`
- `/kontakt`

### 4. Ceiling type pages

Use the `ceilingTypes` array for pages such as:

- `/rodzaje-sufitow/matowe`
- `/rodzaje-sufitow/satynowe`
- `/rodzaje-sufitow/blyszczace`
- `/rodzaje-sufitow/z-oswietleniem`
- `/rodzaje-sufitow/z-nadrukiem`
- `/rodzaje-sufitow/translucent`
- `/rodzaje-sufitow/z-perforacja`
- `/rodzaje-sufitow/wielopoziomowe`
- `/rodzaje-sufitow/gwiazdziste-niebo`
- `/rodzaje-sufitow/z-karniszem`

If existing route slugs differ, preserve existing routes and map content carefully. Do not break links.

### 5. Solution pages

Use `solutionPages` for:

- `/rozwiazania/oswietlenie`
- `/rozwiazania/profile`
- `/rozwiazania/wentylacja`
- `/rozwiazania/luki-rewizyjne`
- `/rozwiazania/poziomy-i-konstrukcje`

Use `lightingOptions` for subpages if those routes exist or are already linked:

- `/rozwiazania/oswietlenie/linie-led`
- `/rozwiazania/oswietlenie/tasmy-led`
- `/rozwiazania/oswietlenie/punkty-swietlne`
- `/rozwiazania/oswietlenie/szyny-magnetyczne`
- `/rozwiazania/oswietlenie/oprawy-wpuszczane`
- `/rozwiazania/oswietlenie/podswietlenie-obwodowe`

### 6. Location pages

Use `locations` for local landing pages. Preserve existing URL structure.

Each location page should contain:

- SEO title and description
- H1
- local lead
- badges
- popular solutions
- local FAQ
- CTA to WhatsApp/contact/prices
- internal links to prices, realizations, contact, related locations

### 7. Realizations

Use `realizations` for the gallery/cards.

Important:

- If images are placeholders/stock/AI, do not claim they are real customer projects.
- Use wording like `Przykładowe realizacje`, `Inspiracje`, or `Przykładowy efekt`, unless project images are verified real.

### 8. FAQ

Use `faqCategories` to render FAQ page sections and important FAQ blocks on related pages.

Add `FAQPage` JSON-LD only for questions that are actually visible on the page.

### 9. Structured data

Add JSON-LD helpers and include where appropriate:

- `LocalBusiness` globally or on contact/home/location pages
- `Service` on service pages
- `BreadcrumbList` on subpages
- `FAQPage` on FAQ sections

Use business data from the JSON file.

### 10. Sitemap and robots

If missing, add:

- `/sitemap.xml`
- `/robots.txt`

Sitemap should include all public pages from:

- `staticPages`
- `ceilingTypes`
- `solutionPages`
- `lightingOptions` if implemented
- `locations`

Use production site URL from env if available.

### 11. Images and accessibility

- Add meaningful Polish alt texts.
- Use dimensions or equivalent image sizing.
- Lazy-load non-hero images.
- Keep hero image optimized for LCP.
- Ensure phone and WhatsApp CTAs are accessible and clickable.

### 12. Internal linking

Ensure strong internal links:

- Home → prices, realizations, ceiling types, contact
- Ceiling type pages → prices, realizations, related types, contact
- Price page → ceiling types, solutions, contact
- Locations page → all location pages
- Location pages → prices, contact, realizations, related locations
- FAQ → relevant pages

## Constraints

- Do not change brand/contact data.
- Do not remove existing navigation items.
- Do not redesign the entire website.
- Do not add customer-facing Russian text.
- Preserve Polish diacritics.
- Do not include Markdown citations or internal notes in visible content.
- Do not create fake reviews.
- Do not claim AI/stock images are real completed projects.

## Quality checks

Run available checks, for example:

```bash
npm run lint
npm run typecheck
npm run build
npm test
```

Only run scripts that exist in the project.

## Final response required

After implementation, report:

1. Framework/routing detected.
2. Files changed.
3. Routes updated.
4. SEO metadata added.
5. Structured data added.
6. Sitemap/robots status.
7. Build/lint/test results.
8. Remaining TODOs.

Do not stop after only inspecting the project. Make the implementation changes unless a hard blocker appears.
