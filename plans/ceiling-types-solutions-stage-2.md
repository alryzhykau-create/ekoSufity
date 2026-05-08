# Dopracowanie katalogów rodzajów sufitów i rozwiązań

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan follows `PLANS.md` in the repository root.

## Purpose / Big Picture

The EkoSufity site already has pages for ceiling types and technical solutions, but stage 2 needs those pages to work better as SEO and sales pages. After this change, a visitor can open `/rodzaje-sufitow`, choose a ceiling type, open an individual detail page, compare benefits and limitations, then move to prices, realizations, WhatsApp, or contact. The same should be true for `/rozwiazania` and the detail pages for profiles, ventilation, revision hatches, and constructions.

## Progress

- [x] (2026-05-08) Reviewed existing files in `app/rodzaje-sufitow`, `app/rozwiazania`, `components`, and `lib`.
- [x] (2026-05-08) Update `lib/ceilingTypes.ts` so each item has the requested fields and richer unique content.
- [x] (2026-05-08) Update the `/rodzaje-sufitow` index page to match required SEO, H1, sections, cards, comparison, FAQ, and CTA.
- [x] (2026-05-08) Update the ceiling type detail template and cards without duplicating existing components.
- [x] (2026-05-08) Update `lib/solutions.ts`, `lib/profiles.ts`, `lib/ventilation.ts`, `lib/revisionHatches.ts`, and `lib/constructions.ts`.
- [x] (2026-05-08) Update `/rozwiazania` and solution detail pages to match required SEO and section structure.
- [x] (2026-05-08) Run `npm run build`, fix TypeScript or Next.js errors, and record final outcome.

## Surprises & Discoveries

- Observation: Most required routes and components already exist.
  Evidence: `rg --files app components lib` shows `app/rodzaje-sufitow/page.tsx`, `app/rodzaje-sufitow/[slug]/page.tsx`, `app/rozwiazania/page.tsx`, `app/rozwiazania/[slug]/page.tsx`, and the requested card components.
- Observation: `lib/ceilingTypes.ts` has a nested `seo` object, but the user requested top-level `seoTitle` and `seoDescription`.
  Evidence: The current type contains `seo: { title; description }`.
- Observation: Browser text-role matching reported two matches for `Rodzaje sufitów napinanych`, but source search showed only one `<h1>` in each relevant page template.
  Evidence: `rg "<h1" app/rodzaje-sufitow app/rozwiazania components/CeilingTypeDetail.tsx` returns one `<h1>` per template.

## Decision Log

- Decision: Reuse existing components and dynamic route templates instead of creating separate static files for each slug.
  Rationale: The project already uses Next.js App Router dynamic routes with `generateStaticParams`, which creates the required pages while keeping the implementation maintainable.
  Date/Author: 2026-05-08 / Codex.
- Decision: Keep remote WebP-capable Unsplash URLs for now and list real project photos as manual follow-up.
  Rationale: The site already uses this image model and the user asked not to change global design or add a new image system in this stage.
  Date/Author: 2026-05-08 / Codex.

## Outcomes & Retrospective

Stage 2 is implemented. The ceiling type catalog, ceiling type detail template, solutions catalog, and solution detail template now use richer data, requested SEO text, FAQ, CTA, internal links, and premium card layouts. `npm run build` completed successfully and generated all existing static routes.

## Context and Orientation

This project is a Next.js App Router site. Page files live in `app`. Reusable UI lives in `components`. Content data lives in `lib`. The current design uses light backgrounds, premium white cards, graphite/black text, gold accents, `rounded-lg`, `shadow-card`, and spacious mobile-first layouts. Client-facing copy must be Polish.

The key files for this stage are:

- `lib/ceilingTypes.ts` for ceiling type data.
- `app/rodzaje-sufitow/page.tsx` for the ceiling type catalog page.
- `app/rodzaje-sufitow/[slug]/page.tsx` and `components/CeilingTypeDetail.tsx` for detail pages.
- `lib/solutions.ts`, `lib/profiles.ts`, `lib/ventilation.ts`, `lib/revisionHatches.ts`, and `lib/constructions.ts` for solution data.
- `app/rozwiazania/page.tsx` and `app/rozwiazania/[slug]/page.tsx` for solution pages.
- `components/CeilingTypeCard.tsx`, `components/SolutionCard.tsx`, and the existing detail cards for repeated card UI.

## Plan of Work

First, update content data so the pages have the exact slugs, titles, descriptions, FAQ, pricing labels, and SEO text requested. Then update the index pages to match the required section order and H1/metadata. Next, update detail templates so each page has one H1, breadcrumbs, FAQ, CTA, price/context sections, internal links, and related links. Finally, run `npm run build` and, if practical, check representative pages in the browser.

## Concrete Steps

Run commands from `/Users/al_ryzhykau/Projects_Codex/EkoSufity`.

After edits:

    npm run build

Expected result: Next.js compiles successfully, checks TypeScript, and generates static pages for `/rodzaje-sufitow`, all ceiling type slugs, `/rozwiazania`, and all solution slugs.

## Validation and Acceptance

Acceptance is met when:

- `/rodzaje-sufitow` has exactly one H1: `Rodzaje sufitów napinanych`.
- `/rozwiazania` has exactly one H1: `Rozwiązania do sufitów napinanych`.
- The dynamic detail pages generate for all requested ceiling type slugs and solution slugs.
- Metadata exists for index and detail pages.
- Cards include names, descriptions, best uses or applications, `Zobacz więcej`, and `Zapytaj o wycenę`.
- FAQ and CTA sections are present on catalog and detail pages.
- `npm run build` exits successfully.

## Idempotence and Recovery

The changes are normal source edits and can be repeated. If a build fails, inspect the TypeScript error, fix the named file, and rerun `npm run build`. Do not delete unrelated working tree changes or reset the repository.

## Artifacts and Notes

Build proof:

    npm run build
    ✓ Compiled successfully
    ✓ Generating static pages (52/52)

Representative browser checks passed for `/rodzaje-sufitow`, `/rodzaje-sufitow/matowe`, `/rozwiazania`, `/rozwiazania/profile`, `/rozwiazania/wentylacja`, `/rozwiazania/luki-rewizyjne`, and `/rozwiazania/poziomy-i-konstrukcje`.

Change note: Updated after implementation to mark all planned stage 2 work complete and record build/browser validation evidence.

## Interfaces and Dependencies

No new dependencies are required. The implementation should use the existing Next.js, TypeScript, Tailwind CSS, and lucide-react setup. Existing components should be extended rather than duplicated.
