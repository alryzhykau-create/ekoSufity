# Dopracowanie FAQ, SEO technicznego i schema.org

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan follows `PLANS.md` in the repository root.

## Purpose / Big Picture

The EkoSufity site needs a stronger global FAQ and technical SEO layer. After this change, visitors can search FAQ questions, filter them by category, follow internal links from answers, and Google can read consistent FAQPage, LocalBusiness, Service, and breadcrumb structured data.

## Progress

- [x] (2026-05-08) Reviewed current FAQ data, FAQ page, FAQ components, metadata helpers, schema component, sitemap, robots, and privacy page.
- [x] (2026-05-08) Expanded `lib/faq.ts` to the requested item shape and broad category coverage.
- [x] (2026-05-08) Fixed compatibility between strict global FAQ items and local page-specific FAQ objects.
- [x] (2026-05-08) Added an interactive FAQ explorer for `/faq` with search and category filtering.
- [x] (2026-05-08) Updated FAQ section/schema behavior so pages with FAQ emit FAQPage schema through the shared section.
- [x] (2026-05-08) Improved schema helpers, breadcrumb schema, global LocalBusiness schema, and metadata title handling.
- [x] (2026-05-08) Checked privacy policy content; no invented company data was added.
- [x] (2026-05-08) Ran `npm run build`; Next.js generated 54 static pages successfully.

## Surprises & Discoveries

- Observation: Existing FAQ data only stores `question` and `answer`, while the requested shape needs `id`, `category`, `pages`, and `relatedLinks`.
  Evidence: `lib/faq.ts` defines `FAQItem = { question; answer }`.
- Observation: Existing `FAQSection` is already reused across many pages, so adding schema support there can improve many pages without duplicating code.
  Evidence: Many page files import `FAQSection` from `components/sections/FAQSection`.
- Observation: The production build currently fails because several pages type local `{ question, answer }` FAQ additions as the stricter global `FAQItem`.
  Evidence: `npm run build` reported `app/ceny/page.tsx` local FAQ entries missing `id`, `category`, `pages`, and `relatedLinks`.
- Observation: Titles that already included `EkoSufity` were duplicated by the root metadata template.
  Evidence: Browser title for `/faq` initially rendered as `FAQ — sufity napinane | Pytania i odpowiedzi | EkoSufity | EkoSufity`.

## Decision Log

- Decision: Extend FAQ item types instead of replacing helper names.
  Rationale: Existing pages call `getFAQItemsByCategory`, `allFAQItems`, and `featuredFAQItems`; preserving these exports reduces risk.
  Date/Author: 2026-05-08 / Codex.
- Decision: Add a dedicated client component for `/faq` search and category filtering.
  Rationale: The FAQ page needs interactivity, while FAQ blocks on other pages should stay compact and simple.
  Date/Author: 2026-05-08 / Codex.
- Decision: Keep local page-specific FAQ objects as lightweight `{ question, answer }` records and make display/schema components accept both local and global FAQ shapes.
  Rationale: The user requested global FAQ items to have rich metadata, but forcing every local supplemental answer to duplicate SEO metadata adds noise and caused the current build failure.
  Date/Author: 2026-05-08 / Codex.
- Decision: Use absolute metadata titles only when a page title already contains the site name.
  Rationale: This preserves the global title template for short titles such as `Kontakt`, while preventing duplicated `EkoSufity` on SEO titles supplied by page data.
  Date/Author: 2026-05-08 / Codex.

## Outcomes & Retrospective

Implemented the global FAQ and technical SEO pass. `/faq` now has the requested H1, search, category filters, related links, CTA, and FAQPage schema. Shared FAQ blocks now emit FAQPage schema, breadcrumbs emit BreadcrumbList schema, LocalBusiness schema is present globally, and metadata title duplication is fixed. `npm run build` passes and generates 54 static pages.

## Context and Orientation

The site uses Next.js App Router. Pages live in `app`, reusable components live in `components`, and data lives in `lib`. FAQ answers and page content must be in Polish. The visual design should remain light, premium, card-based, and mobile-first.

Key files:

- `lib/faq.ts` for global FAQ data.
- `app/faq/page.tsx` for the FAQ page.
- `components/FAQAccordion.tsx` and `components/sections/FAQSection.tsx` for FAQ UI.
- `components/SeoJsonLd.tsx` for structured data.
- `app/sitemap.ts` and `app/robots.ts` for technical SEO.
- `app/polityka-prywatnosci/page.tsx` for privacy content.

## Plan of Work

First, update FAQ data and helpers. Then create an FAQ search/filter UI and update `/faq`. Next, add schema support to FAQ sections and breadcrumb rendering. Then verify metadata, sitemap, robots, and privacy content. Finally, run the production build and browser-check key behavior.

## Concrete Steps

Run commands from `/Users/al_ryzhykau/Projects_Codex/EkoSufity`.

After edits:

    npm run build

Expected result: Next.js compiles successfully and generates all static pages.

## Validation and Acceptance

Acceptance is met when:

- `/faq` has H1 `FAQ — sufity napinane`.
- FAQ search and category filtering work in the browser.
- FAQ items expose `id`, `question`, `answer`, `category`, `pages`, and `relatedLinks`.
- Pages using `FAQSection` emit FAQPage schema.
- sitemap includes all important public routes and robots points to sitemap.
- `npm run build` exits successfully.

## Idempotence and Recovery

These edits are safe to rerun. If a build fails, read the TypeScript or Next.js error, fix the named file, and rerun `npm run build`. Do not reset unrelated working tree changes.

## Artifacts and Notes

Build output:

    npm run build
    ✓ Compiled successfully
    ✓ Generating static pages (54/54)
    ○ /faq
    ○ /sitemap.xml
    ○ /robots.txt

Browser validation:

    /faq title: FAQ — sufity napinane | Pytania i odpowiedzi | EkoSufity
    /faq search field: present
    Search query "wentylacja": returns matching FAQ results
    /lokalizacje/wroclaw title: Sufity napinane Wrocław | Montaż i wycena | EkoSufity

## Interfaces and Dependencies

No new dependencies are required. Use existing Next.js, TypeScript, Tailwind CSS, lucide-react, and current components.
