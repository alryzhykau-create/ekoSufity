# FAQ Privacy SEO ExecPlan

This ExecPlan is a living document. Keep `Progress`, `Surprises & Discoveries`,
`Decision Log`, and `Outcomes & Retrospective` current as work proceeds.

## Purpose

Add and standardize FAQ, privacy policy, metadata helpers, sitemap/robots updates, and a cookie
banner for the existing EkoSufity Next.js app. The result must keep Polish client-facing copy,
current premium light UI styling, mobile-first layouts, breadcrumbs, SEO metadata, FAQ schema, and
must pass `npm run build`.

## Project Context

The app already has `app/sitemap.ts`, `app/robots.ts`, `app/layout.tsx`, shared `Header`,
`Footer`, `PageBreadcrumbs`, `Breadcrumbs`, `FAQSection`, `FAQAccordion`, `CTASection`, and
`SeoJsonLd`. Existing pages use route-level metadata and reusable FAQ sections.

## Constraints

- Do not create a new project.
- Preserve current visual style and architecture.
- Keep all client-facing text in Polish.
- Use existing Tailwind tokens and components.
- Do not add new dependencies.
- Use `apply_patch` for manual edits.
- Run `npm run build`.

## Progress

- [x] Inspected existing layout, robots, sitemap, FAQ, and SEO JSON-LD files.
- [x] Create shared FAQ data in `lib/faq.ts`.
- [x] Add metadata helper in `lib/metadata.ts`.
- [x] Add `/faq` and `/polityka-prywatnosci` pages.
- [x] Add reusable FAQ schema JSON-LD.
- [x] Add cookie banner to root layout.
- [x] Update header/footer navigation, sitemap, and robots as needed.
- [x] Run `npm run build`.
- [x] Check representative desktop/mobile pages locally.

## Surprises & Discoveries

- `app/sitemap.ts` and `app/robots.ts` already exist and generate `/sitemap.xml` and `/robots.txt`.
- `FAQSection` currently owns its own default FAQ data, while `SeoJsonLd` imports those defaults from the component layer.
- The in-app browser blocks direct rendering of `/sitemap.xml` and `/robots.txt`, but the dev server logs confirmed both endpoints returned 200.

## Decision Log

- Use `lib/faq.ts` as the single source of FAQ categories and reusable featured FAQ items.
- Create `lib/metadata.ts` as a small utility for consistent route metadata instead of duplicating canonical/openGraph shape.
- Keep `app/sitemap.ts` and `app/robots.ts` as the Next.js-native sitemap.xml/robots.txt implementation.
- Implement the cookie banner as a small client component persisted in `localStorage`.

## Implementation Plan

1. Add `lib/faq.ts` with all requested FAQ categories and helper flattening exports.
2. Add `lib/metadata.ts` and use it in new pages.
3. Update `FAQSection` and `SeoJsonLd` to consume FAQ data from `lib/faq.ts`; add generic `FAQJsonLd`.
4. Create `/faq` with categorized FAQ, breadcrumbs, FAQ schema, internal links, and CTA.
5. Create `/polityka-prywatnosci` with privacy/cookie content, breadcrumbs, and CTA.
6. Add `CookieBanner` and render it from `app/layout.tsx`.
7. Update navigation and sitemap entries for `/faq` and `/polityka-prywatnosci`.
8. Build and browser-check key pages.

## Outcomes & Retrospective

Implemented reusable FAQ content in `lib/faq.ts`, route metadata helper in `lib/metadata.ts`,
the `/faq` page with categorized questions and FAQ schema, and `/polityka-prywatnosci` with
privacy and cookie information. Added a persistent cookie banner to the root layout and updated
header/footer navigation plus sitemap/robots entries. `npm run build` passes, and browser checks
confirmed H1s, breadcrumbs, FAQ schema script, cookie banner, and mobile menu on representative pages.
