# Add Solutions And Lighting Pages

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This document follows the rules in `PLANS.md` at the repository root.

## Purpose / Big Picture

EkoSufity.pl needs a dedicated solutions directory for technical and lighting options. After this change, visitors can open `/rozwiazania`, category pages such as `/rozwiazania/profile`, and detailed lighting pages such as `/rozwiazania/oswietlenie/linie-led`. Each page should explain the solution, use cases, benefits, planning requirements, FAQ, related links, and CTA in the same mobile-first premium style.

## Progress

- [x] (2026-05-08T12:10:42Z) Reviewed current routes, header links, sitemap, shared section components, and existing solution-related home sections.
- [x] (2026-05-08T12:10:42Z) Created this ExecPlan before adding the new route directory and data files.
- [x] (2026-05-08T12:21:22Z) Added requested data files: `lighting`, `solutions`, `profiles`, `ventilation`, `revisionHatches`, and `constructions`.
- [x] (2026-05-08T12:21:22Z) Added requested card/detail components for solutions, lighting, profiles, ventilation, revision hatches, and constructions.
- [x] (2026-05-08T12:21:22Z) Added `/rozwiazania`, category pages, and nested lighting detail pages.
- [x] (2026-05-08T12:21:22Z) Updated header/footer/sitemap to make `/rozwiazania` reachable and indexed.
- [x] (2026-05-08T12:21:22Z) Ran `npm run build`; the production build completed successfully with no TypeScript or Next.js errors.
- [x] (2026-05-08T12:21:22Z) Started the local app and inspected representative desktop and mobile pages.

## Surprises & Discoveries

- Observation: The header currently points `Rozwiązania` to the home-page anchor `/#rozwiazania`.
  Evidence: `components/Header.tsx` has `{ label: "Rozwiązania", href: "/#rozwiazania" }`.

- Observation: The project already has `SectionHeading`, `CardGrid`, `FAQSection`, `CTASection`, and breadcrumbs that can be reused.
  Evidence: These components exist under `components` and `components/sections`.

- Observation: Build generated all requested top-level and nested solution URLs as static pages.
  Evidence: `npm run build` listed `/rozwiazania`, `/rozwiazania/[slug]`, and `/rozwiazania/oswietlenie/[slug]` with concrete paths including `/rozwiazania/oswietlenie/linie-led`, `/rozwiazania/profile`, and `/rozwiazania/wentylacja`.

- Observation: Mobile layout for nested lighting detail pages is readable and includes required sections.
  Evidence: Browser check at 390 by 844 on `/rozwiazania/oswietlenie/szyny-magnetyczne` returned `hasHero: true`, `hasRelated: true`, and `hasPlanning: true`.

## Decision Log

- Decision: Implement category pages with a dynamic route `app/rozwiazania/[slug]/page.tsx` and lighting detail pages with `app/rozwiazania/oswietlenie/[slug]/page.tsx`.
  Rationale: The category pages share structure, and the nested lighting pages share a more specific structure. Dynamic routes create the requested static URLs without duplicated page code.
  Date/Author: 2026-05-08 / Codex

- Decision: Keep the data split into the exact files requested by the user.
  Rationale: The request explicitly names the data modules. `lib/solutions.ts` can aggregate category data, while the other modules hold category-specific content.
  Date/Author: 2026-05-08 / Codex

- Decision: Update `Rozwiązania` navigation to `/rozwiazania`.
  Rationale: The new directory is now the canonical destination for solution content; home-page anchor content remains available inside the page but is no longer the primary navigation target.
  Date/Author: 2026-05-08 / Codex

## Outcomes & Retrospective

The solutions directory is implemented. `/rozwiazania` now renders an overview with required explanatory blocks, FAQ, CTA, and links to categories. Category pages are generated from `lib/solutions.ts` for `/rozwiazania/oswietlenie`, `/rozwiazania/profile`, `/rozwiazania/wentylacja`, `/rozwiazania/luki-rewizyjne`, and `/rozwiazania/poziomy-i-konstrukcje`. Nested lighting detail pages are generated from `lib/lighting.ts` for all requested lighting URLs. Header, footer, and sitemap now include the solutions directory.

## Context and Orientation

This is a Next.js 14 App Router project using TypeScript, React, Tailwind CSS, and `lucide-react`. Existing content pages and ceiling-type pages are already route-based and data-driven. The new work should follow the same pattern: typed data in `lib`, reusable components in `components`, route files under `app`, and no new dependencies.

## Plan of Work

First, create the requested data files. Lighting data will power both `/rozwiazania/oswietlenie` and nested detail pages. Profiles, ventilation, revision hatches, and constructions will power their category pages. `lib/solutions.ts` will aggregate the top-level categories for the index and dynamic category route.

Next, add card components and a `LightingDetail` component. Use existing `FAQSection` and `CTASection` to avoid duplicating behavior.

Then add route files for `/rozwiazania`, `/rozwiazania/[slug]`, and `/rozwiazania/oswietlenie/[slug]`. Update header, footer, and sitemap.

Finally, run the build and verify representative pages locally.

## Concrete Steps

From `/Users/al_ryzhykau/Projects_Codex/EkoSufity`, run:

    npm run build

Expected result: Next.js compiles and lists `/rozwiazania`, category pages, and nested lighting detail pages.

Actual result:

    npm run build
    ✓ Compiled successfully
    ✓ Generating static pages (32/32)
    ○ /rozwiazania
    ● /rozwiazania/[slug]
      ├ /rozwiazania/oswietlenie
      ├ /rozwiazania/profile
      ├ /rozwiazania/wentylacja
      └ [+2 more paths]
    ● /rozwiazania/oswietlenie/[slug]
      ├ /rozwiazania/oswietlenie/linie-led
      ├ /rozwiazania/oswietlenie/tasmy-led
      ├ /rozwiazania/oswietlenie/punkty-swietlne
      └ [+3 more paths]

Then run:

    npm run dev

Inspect `/rozwiazania`, `/rozwiazania/profile`, and `/rozwiazania/oswietlenie/linie-led` on desktop and mobile.

Actual local verification used `http://localhost:3000`. Browser checks confirmed `/rozwiazania`, `/rozwiazania/profile`, and `/rozwiazania/oswietlenie/linie-led` have breadcrumbs, FAQ, CTA, and related links. Mobile verification on `/rozwiazania/oswietlenie/szyny-magnetyczne` confirmed the hero, breadcrumbs, planning section, related links, and bottom mobile CTA bar are usable.

## Validation and Acceptance

The work is accepted when all requested URLs render, each page includes hero, description, application/use cases, benefits, planning requirements, FAQ, CTA, breadcrumbs, and related links, and `npm run build` succeeds.

## Idempotence and Recovery

The work is additive and safe to rerun. If a route 404s, check slug values and `generateStaticParams`. If build fails, inspect typed data shapes and component imports first.

## Artifacts and Notes

Validation output will be recorded after implementation.

## Interfaces and Dependencies

No new dependencies are required. Use existing Next.js, React, TypeScript, Tailwind CSS, and `lucide-react`.
