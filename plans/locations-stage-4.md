# Dopracowanie lokalizacji i lokalnych stron SEO

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan follows `PLANS.md` in the repository root.

## Purpose / Big Picture

The EkoSufity site needs a stronger local SEO section for Wrocław and nearby areas. After this change, visitors can open `/lokalizacje`, filter service areas, open a local page such as `/lokalizacje/swidnica`, read unique local copy, see relevant ceiling and lighting solutions, check pricing guidance, and request a quote.

## Progress

- [x] (2026-05-08) Reviewed existing `lib/locations.ts`, `/lokalizacje`, `/lokalizacje/[slug]`, and `LocationCard`.
- [x] (2026-05-08) Replace `lib/locations.ts` with the requested data shape and priority 1 locations.
- [x] (2026-05-08) Add or update location components without duplicating existing shared UI.
- [x] (2026-05-08) Update `/lokalizacje` SEO, hero, service area, location filters, solution blocks, FAQ, and CTA.
- [x] (2026-05-08) Update `/lokalizacje/[slug]` as a single local SEO template with unique metadata and local content.
- [x] (2026-05-08) Run `npm run build`, fix errors, and validate representative pages.

## Surprises & Discoveries

- Observation: The existing location data uses `city`, `distanceLabel`, and nested `seo`, while the requested structure uses `name`, `title`, `type`, `distanceFromWroclawKm`, top-level SEO fields, and local SEO content arrays.
  Evidence: `lib/locations.ts` currently defines `LocationItem` with `city`, `region`, `distanceLabel`, `description`, `localDescription`, `nearby`, `highlights`, and `seo`.
- Observation: The current data includes some locations not in the priority 1 list and misses Leśnica and Wrocław district pages.
  Evidence: Existing entries include Legnica, Lubin, Brzeg, Wołów, Jawor, Kłodzko, and Nysa, but not `lesnica`, `wroclaw-krzyki`, `wroclaw-fabryczna`, `wroclaw-psie-pole`, `wroclaw-stare-miasto`, or `wroclaw-srodmiescie`.

## Decision Log

- Decision: Replace the location data with the exact priority 1 set from the user request.
  Rationale: The task is explicitly focused on Wrocław, Wrocław districts, and selected nearby towns for SEO.
  Date/Author: 2026-05-08 / Codex.
- Decision: Use a single dynamic template for all local pages.
  Rationale: The user asked not to create 18 copied manual pages, and the project already uses App Router dynamic routes.
  Date/Author: 2026-05-08 / Codex.

## Outcomes & Retrospective

Stage 4 is implemented. The location catalog now uses the requested SEO copy, service-area explanation, mobile-friendly filters, all 18 priority locations, FAQ, CTA, and internal links. Local pages are generated from one dynamic template with unique metadata and local data. `npm run build` completed successfully.

## Context and Orientation

The project is a Next.js App Router site. Routes live in `app`, reusable UI lives in `components`, and content data lives in `lib`. The current design language is light, premium, spacious, mobile-first, with white cards, graphite text, beige/gold accents, and sticky phone/WhatsApp buttons from `FloatingActions`.

The key files for this stage are:

- `lib/locations.ts` for all local SEO data.
- `components/LocationCard.tsx` for cards on `/lokalizacje` and related-location blocks.
- New local components may be added under `components` if they are genuinely reused.
- `app/lokalizacje/page.tsx` for the locations catalog page.
- `app/lokalizacje/[slug]/page.tsx` for local SEO detail pages.

## Plan of Work

First, update `lib/locations.ts` to the requested data shape and 18 priority locations. Then add a client-side filter component for `/lokalizacje`. Next, update the location card to use the new fields. Then rebuild the catalog page and local page template around the requested sections. Finally, run the build and browser-check representative local pages.

## Concrete Steps

Run commands from `/Users/al_ryzhykau/Projects_Codex/EkoSufity`.

After edits:

    npm run build

Expected result: Next.js compiles successfully, checks TypeScript, and generates all local pages from `lib/locations.ts`.

## Validation and Acceptance

Acceptance is met when:

- `/lokalizacje` has H1 `Sufity napinane we Wrocławiu i okolicach`.
- `/lokalizacje` links to all 18 priority local pages.
- Filters are usable on mobile through horizontal controls or a select.
- Each local page has one H1, metadata, breadcrumbs, local FAQ, CTA, pricing block, related links, and nearby locations.
- `npm run build` exits successfully.

## Idempotence and Recovery

These are source edits. If a build fails, read the TypeScript or Next.js error, fix the named file, and rerun `npm run build`. Do not reset unrelated working tree changes.

## Artifacts and Notes

Build proof:

    npm run build
    ✓ Compiled successfully
    ✓ Generating static pages (54/54)

Representative browser checks passed for `/lokalizacje`, `/lokalizacje/wroclaw`, `/lokalizacje/lesnica`, `/lokalizacje/swidnica`, and `/lokalizacje/olawa`. Source search confirms only one `<h1>` in the location catalog page and one `<h1>` in the reusable local hero template.

Change note: Updated after implementation to mark all stage 4 work complete and record build/browser validation evidence.

## Interfaces and Dependencies

No new dependencies are required. Use existing Next.js, TypeScript, Tailwind CSS, lucide-react, and existing shared components.
