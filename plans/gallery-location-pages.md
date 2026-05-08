# Gallery And Location Pages ExecPlan

This ExecPlan is a living document. Keep `Progress`, `Surprises & Discoveries`,
`Decision Log`, and `Outcomes & Retrospective` current as work proceeds.

## Purpose

Create the public `/realizacje`, `/lokalizacje`, and `/lokalizacje/[slug]` pages for the
existing EkoSufity Next.js app without changing the project architecture or visual style.
The pages must use Polish client-facing copy, existing premium light UI patterns, mobile-first
layouts, breadcrumbs, internal linking, SEO metadata, FAQ sections, CTA sections, and must pass
`npm run build`.

## Project Context

The project uses Next.js 14 App Router, TypeScript, Tailwind CSS, and lucide-react. Existing shared
patterns include `Header`, `Footer`, `PageBreadcrumbs`, `SectionHeading`, `CardGrid`, `FAQSection`,
`CTASection`, and floating CTA buttons. Existing content pages already follow this composition:
route page renders `Header`, `main`, breadcrumbs, hero/section content, FAQ, CTA, then `Footer`
and floating actions.

The current header still links `Realizacje` and `Lokalizacje` to home anchors. This task requires
dedicated routes, so those navigation links and sitemap entries must be updated.

## Constraints

- Do not create a new project.
- Do not rewrite the app from scratch.
- Preserve the current light premium style with black, beige, and gold accents.
- Keep client-facing text in Polish.
- Use existing Tailwind tokens and reusable components where practical.
- Do not add Docker, CMS, shop/cart/payments, or login.
- Do not use old Tilda URLs.
- Use `apply_patch` for manual edits.
- Run `npm run build` after implementation.

## Progress

- [x] Inspected existing route and component structure.
- [x] Confirmed `Footer` lives in `components/sections/Footer.tsx`.
- [x] Add gallery data and filtering component.
- [x] Add location data and location card component.
- [x] Create `/realizacje`, `/lokalizacje`, and `/lokalizacje/[slug]` pages.
- [x] Update header/footer navigation and sitemap.
- [x] Run `npm run build`.
- [x] Check representative desktop/mobile pages locally.

## Surprises & Discoveries

- `components/Footer.tsx` does not exist; the shared footer is `components/sections/Footer.tsx`.
- Existing `Header` has dedicated top-level menu items but `Realizacje` and `Lokalizacje` still point to home anchors.
- Running `next build` while `next dev` was active caused stale `.next` chunks and temporary 500/404 responses; stopping dev, moving the stale `.next` to an ignored `.next-broken-*` folder, rebuilding, and restarting dev fixed it.

## Decision Log

- Use static content modules (`lib/gallery.ts`, `lib/locations.ts`) instead of adding a CMS or external data source.
- Implement filtering as a small client component (`GalleryGrid`) so the route pages can remain simple server components with metadata.
- Use route-level dynamic metadata for `/lokalizacje/[slug]` and static params for all configured cities.

## Implementation Plan

1. Add `lib/gallery.ts` with gallery projects, filter option lists, and helper functions for location-based project subsets.
2. Add `lib/locations.ts` with all requested cities, local descriptions, SEO metadata, FAQs, and related-location helpers.
3. Add `GalleryGrid` for filterable gallery cards and `LocationCard` for city cards.
4. Add `/realizacje` page with breadcrumbs, hero, filters, gallery grid, FAQ, and CTA.
5. Add `/lokalizacje` index page with city cards, service-area content, FAQ, and CTA.
6. Add `/lokalizacje/[slug]` page with dynamic SEO, local H1, local description, solution links, local/fallback realizations, FAQ, related links, and CTA.
7. Update `Header`, `Footer`, and `app/sitemap.ts` for the new routes.
8. Run build and verify representative pages visually.

## Outcomes & Retrospective

Implemented static gallery and location content, filterable gallery cards, location cards,
`/realizacje`, `/lokalizacje`, and all `/lokalizacje/[slug]` pages for the requested cities.
Updated header/footer navigation and sitemap to use the new routes. `npm run build` passes and
browser checks confirm H1s, breadcrumbs, FAQ, CTA, gallery filtering, and mobile header/bottom CTA
on representative pages.
