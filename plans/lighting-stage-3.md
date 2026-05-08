# Dopracowanie katalogu oświetlenia do sufitów napinanych

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan follows `PLANS.md` in the repository root.

## Purpose / Big Picture

The EkoSufity site needs a dedicated lighting catalog that works like a sales and SEO section, not like a shop. After this change, a visitor can open `/rozwiazania/oswietlenie`, compare lighting options, open detail pages for each lighting type, understand planning requirements, and request a quote through WhatsApp or contact links.

## Progress

- [x] (2026-05-08) Reviewed current `lib/lighting.ts`, `components/LightingCard.tsx`, `components/LightingDetail.tsx`, and lighting route files.
- [x] (2026-05-08) Update `lib/lighting.ts` to the requested data shape and unique content for all six lighting types.
- [x] (2026-05-08) Update `LightingCard` to show image or icon, name, description, best use, benefits, price label, details link, and quote CTA.
- [x] (2026-05-08) Add a dedicated `/rozwiazania/oswietlenie` page with requested SEO, hero, catalog, planning sections, FAQ, and CTA.
- [x] (2026-05-08) Update detail pages for all lighting slugs with unique H1, metadata, sections, FAQ, CTA, breadcrumbs, and related links.
- [x] (2026-05-08) Adjust routing so `/rozwiazania/oswietlenie` is served by the dedicated page while other `/rozwiazania/[slug]` pages remain unchanged.
- [x] (2026-05-08) Run `npm run build`, fix errors, and record validation evidence.

## Surprises & Discoveries

- Observation: `/rozwiazania/oswietlenie` is currently handled by the generic `/rozwiazania/[slug]` route.
  Evidence: There is no `app/rozwiazania/oswietlenie/page.tsx`, only `app/rozwiazania/oswietlenie/[slug]/page.tsx`.
- Observation: Lighting detail pages already exist under `app/rozwiazania/oswietlenie/[slug]/page.tsx`, but their data model uses nested `seo` instead of requested top-level SEO fields.
  Evidence: `lib/lighting.ts` currently has `seo: { title; description }`.

## Decision Log

- Decision: Add `app/rozwiazania/oswietlenie/page.tsx` as a dedicated static route and exclude `oswietlenie` from the generic `/rozwiazania/[slug]` static params.
  Rationale: The requested lighting catalog needs a different page structure than other solution detail pages, and avoiding duplicate static generation keeps routing explicit.
  Date/Author: 2026-05-08 / Codex.
- Decision: Reuse `LightingCard` and `LightingDetail` rather than creating new duplicate card or detail components.
  Rationale: The project already has these components and the user explicitly asked to improve existing components where possible.
  Date/Author: 2026-05-08 / Codex.

## Outcomes & Retrospective

Stage 3 is implemented. The lighting catalog now has its own static route with SEO metadata, hero CTAs, catalog cards, planning blocks, FAQ, and CTA. All six lighting detail pages use unique data, metadata, H1 text, planning notes, price sections, related links, FAQ, and quote CTAs. `npm run build` completed successfully.

## Context and Orientation

The project uses Next.js App Router. Pages live in `app`, reusable UI components live in `components`, and content data lives in `lib`. The lighting catalog should follow the existing EkoSufity visual language: light background, premium white cards, graphite and gold accents, spacious mobile-first layout, and Polish client-facing copy.

The key files are:

- `lib/lighting.ts` for lighting data.
- `components/LightingCard.tsx` for catalog cards.
- `components/LightingDetail.tsx` for individual lighting pages.
- `app/rozwiazania/oswietlenie/page.tsx` for the new dedicated lighting catalog.
- `app/rozwiazania/oswietlenie/[slug]/page.tsx` for detail pages.
- `app/rozwiazania/[slug]/page.tsx` for generic solution pages.

## Plan of Work

First, update the lighting data model to include the requested fields and unique content. Then update the card component to expose the sales information a client needs without adding shop behavior. Next, add the dedicated lighting catalog page. Then update the lighting detail template and metadata to use the new data model. Finally, adjust generic solution routing and run the production build.

## Concrete Steps

Run commands from `/Users/al_ryzhykau/Projects_Codex/EkoSufity`.

After edits:

    npm run build

Expected result: Next.js compiles successfully, checks TypeScript, and generates static pages for `/rozwiazania/oswietlenie` and all six lighting detail routes.

## Validation and Acceptance

Acceptance is met when:

- `/rozwiazania/oswietlenie` has H1 `Oświetlenie do sufitów napinanych`.
- The catalog shows six lighting cards with quote CTAs.
- Each lighting detail page has a unique H1, title, description, FAQ, CTA, breadcrumbs, price section, and related links.
- `npm run build` exits successfully.

## Idempotence and Recovery

These are normal source edits. If a build fails, inspect the named file and TypeScript error, fix the issue, and rerun `npm run build`. Do not reset unrelated working tree changes.

## Artifacts and Notes

Build proof:

    npm run build
    ✓ Compiled successfully
    ✓ Generating static pages (52/52)

Representative browser checks passed for `/rozwiazania/oswietlenie`, `/rozwiazania/oswietlenie/linie-led`, `/rozwiazania/oswietlenie/tasmy-led`, and `/rozwiazania/oswietlenie/szyny-magnetyczne`.

Change note: Updated after implementation to mark all stage 3 work complete and record build/browser validation evidence.

## Interfaces and Dependencies

No new dependencies are required. Use existing Next.js, TypeScript, Tailwind CSS, lucide-react, and existing EkoSufity components.
