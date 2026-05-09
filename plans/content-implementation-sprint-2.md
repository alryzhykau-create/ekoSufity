# Sprint 2 Content Implementation for Main Pages

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This repository contains `PLANS.md` at the project root. This document must be maintained in accordance with that file.

## Purpose / Big Picture

This Sprint updates the visible Polish content on the main EkoSufity pages without changing routing or radically redesigning the site. After the change, a visitor should see clear sales and informational copy for the homepage, about page, ceiling type overview, solutions overview, pricing, gallery/inspirations, locations, FAQ, and contact pages. The implementation must preserve calculators, filters, forms, CTAs, mobile layout, SEO helpers from Sprint 1, and the current App Router structure.

## Progress

- [x] (2026-05-09T14:54Z) Checked `git status --short`; the working tree already includes preparation and Sprint 1 changes.
- [x] (2026-05-09T14:54Z) Identified page files for `/`, `/o-sufitach`, `/rodzaje-sufitow`, `/rozwiazania`, `/ceny`, `/realizacje`, `/lokalizacje`, `/faq`, and `/kontakt`.
- [x] (2026-05-09T14:54Z) Confirmed existing components for sections, cards, FAQ, CTA, filters, calculators, and forms.
- [x] (2026-05-09T14:54Z) Read `AGENTS.md`, `src/data/ekoSufityContent.json`, and `docs/content/eko_sufity_content_implementation_pack.md`.
- [x] (2026-05-09T15:06Z) Added `lib/content.ts` for reading static page content and FAQ snippets from `src/data/ekoSufityContent.json`.
- [x] (2026-05-09T15:06Z) Updated visible copy on the main pages and existing section components with final Polish content while keeping layout intact.
- [x] (2026-05-09T15:06Z) Kept FAQPage JSON-LD aligned with visible FAQ blocks by feeding FAQ sections from mapped content data or existing `lib/faq.ts`.
- [x] (2026-05-09T15:06Z) Ran `npm run build` and `npm run lint`; build passed, lint passed with warnings.

## Surprises & Discoveries

- Observation: The current project already has substantial Polish content and typed data in `lib/faq.ts`, `lib/ceilingTypes.ts`, `lib/solutions.ts`, `lib/lighting.ts`, `lib/locations.ts`, and `lib/gallery.ts`.
  Evidence: `lib/faq.ts` already contains 12 FAQ categories including price, montage, ceiling types, lighting, profiles, ventilation, revision hatches, care, safety, warranty, payment, and locations.
- Observation: The JSON package contains the final copy for the nine static pages, but the app currently renders most sections through existing hardcoded components.
  Evidence: `src/data/ekoSufityContent.json` has `staticPages` entries for `/`, `/o-sufitach`, `/rodzaje-sufitow`, `/rozwiazania`, `/ceny`, `/realizacje`, `/lokalizacje`, `/faq`, and `/kontakt`.
- Observation: TypeScript infers `faq`, `badges`, and some section properties in the JSON-derived union as optional.
  Evidence: The first escalated build failed on `pageContent.faq` and then `homeContent.badges` before adding fallbacks and a small `HomeSection` type.
- Observation: The gallery used external Unsplash images and several sample location slugs that do not exist as implemented location pages.
  Evidence: `lib/gallery.ts` included `legnica`, `lubin`, `klodzko`, `nysa`, and `brzeg`, while implemented location pages come from `lib/locations.ts`; these sample locations were changed to implemented slugs.

## Decision Log

- Decision: Use `src/data/ekoSufityContent.json` through a small helper for static page copy, but keep existing typed `lib/*` constants for cards, dynamic pages, FAQ explorer, locations, filters, and calculators.
  Rationale: This satisfies the source-of-truth requirement without destabilizing existing component props and dynamic routes.
  Date/Author: 2026-05-09 / Codex.
- Decision: Preserve the existing section components and update copy in place instead of replacing page layouts.
  Rationale: The user explicitly requested no radical redesign and no removal of existing functions.
  Date/Author: 2026-05-09 / Codex.

## Outcomes & Retrospective

Sprint 2 is complete. The main pages now pull metadata and key visible page copy from `src/data/ekoSufityContent.json` through `lib/content.ts`, while card/catalog data remains in existing typed `lib/*` constants. The homepage hero, benefit/Alex/area block, pricing snapshot, realization wording, main static page headings/leads, page FAQ snippets, and gallery sample locations were updated. The visible UI structure, routes, forms, filters, calculators, and CTA components were preserved.

## Context and Orientation

The project uses Next.js App Router. The homepage is `app/page.tsx` and is assembled from section components in `components/sections`. Static pages live in `app/*/page.tsx`. Dynamic route pages for detail content live under `app/rodzaje-sufitow/[slug]`, `app/rozwiazania/[slug]`, `app/rozwiazania/oswietlenie/[slug]`, and `app/lokalizacje/[slug]`.

Existing reusable components include `FAQSection`, `FAQExplorer`, `CTASection`, `FullPriceCalculator`, `PriceCalculator`, `GalleryGrid`, `LocationFilters`, and card components for ceiling types, solutions, lighting, profiles, ventilation, revision hatches, and locations.

The main content package lives at `src/data/ekoSufityContent.json`. It contains final text for static pages, ceiling types, solution pages, lighting options, locations, realizations, and FAQ categories. The app also has typed runtime data in `lib/*`; these are already integrated into cards and dynamic route generation.

## Plan of Work

First, add `lib/content.ts` to expose helpers such as `getStaticPageContent(path)` and `mapContentFaqItems(items)`. The helper imports the JSON and converts package FAQ shape `{ q, a }` into the app FAQ shape `{ question, answer }`.

Next, update the homepage section components that carry final static copy: `Hero.tsx` for H1/lead/badges/CTA/microcopy and `ServicesSection.tsx` for the benefit cards, Alex block, and service area text. Keep image structure and classes intact.

Then update each main page file only where the requested final text differs from the existing copy. Use existing arrays, cards, and sections rather than replacing the page. Pages in scope are `app/o-sufitach/page.tsx`, `app/rodzaje-sufitow/page.tsx`, `app/rozwiazania/page.tsx`, `app/ceny/page.tsx`, `app/realizacje/page.tsx`, `app/lokalizacje/page.tsx`, `app/faq/page.tsx`, and `app/kontakt/page.tsx`.

Finally, validate with lint and build. Do not commit.

## Concrete Steps

Run commands from `/Users/al_ryzhykau/Projects_Codex/EkoSufity`.

Inspect:

    git status --short
    find app -type f -name 'page.tsx' | sort
    find components -maxdepth 2 -type f | sort

Implement edits with `apply_patch`.

Validate:

    npm run lint
    npm run build

Observed validation:

    npm run build
    Compiled successfully
    Generated static pages: 53/53

    npm run lint
    0 errors, 13 warnings

The warnings are existing `@next/next/no-img-element` warnings on current image rendering.

## Validation and Acceptance

Acceptance is met when the nine main pages show clear final Polish content from the package or from aligned existing typed constants, no routing changes are introduced, existing calculators/forms/filters remain, FAQ JSON-LD remains generated by visible FAQ sections, and lint/build complete successfully or failures are explicitly documented.

## Idempotence and Recovery

The changes are ordinary TypeScript/TSX text and data edits. Re-running validation is safe. If a build failure appears, inspect the exact TypeScript or Next.js error and revert only the Sprint 2 hunk that caused it; do not revert preparation or Sprint 1 changes.

## Artifacts and Notes

Current working tree before Sprint 2 already includes modified files from preparation and Sprint 1:

    M AGENTS.md
    M app/* selected SEO files
    M components/Breadcrumbs.tsx
    M components/SeoJsonLd.tsx
    M lib/metadata.ts
    M lib/site.ts
    ?? codex_ekosufity_package/
    ?? docs/
    ?? plans/technical-seo-sprint-1.md
    ?? src/

## Interfaces and Dependencies

No new production dependencies are allowed. Use the existing Next.js, React, TypeScript, Tailwind, and lucide-react setup. Keep `src/data/ekoSufityContent.json` as the package content source and `lib/*` constants as the current typed runtime data layer.

Plan revision note: Initial Sprint 2 plan created after inspecting current status, pages, components, `AGENTS.md`, JSON content, and the content implementation pack.

Plan revision note: Updated after implementation and validation to record completed content integration, TypeScript fixes, lint/build results, and gallery route cleanup.
