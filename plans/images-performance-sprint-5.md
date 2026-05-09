# Sprint 5: Images, next/image, Alt Text, and Performance

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan follows `PLANS.md`.

## Purpose / Big Picture

After this sprint, image usage should be safer for performance and SEO. The project should use Next.js `Image` where it is low-risk, preserve existing layout and routing, reduce lint warnings from raw `<img>` tags, keep gallery filters and cards intact, and use Polish alt text that describes images naturally without claiming unverified company realizations.

## Progress

- [x] (2026-05-09 Europe/Warsaw) Checked `git status --short`; Sprint 4 changes are still uncommitted.
- [x] (2026-05-09 Europe/Warsaw) Counted 13 raw `<img>` tags before Sprint 5.
- [x] (2026-05-09 Europe/Warsaw) Confirmed the project did not yet import `next/image`.
- [x] (2026-05-09 Europe/Warsaw) Found local image assets under `public/images` and external images from `images.unsplash.com`.
- [x] (2026-05-09 Europe/Warsaw) Added safe `next/image` migration for hero, cards, gallery, detail pages, and local images.
- [x] (2026-05-09 Europe/Warsaw) Added `images.unsplash.com` to Next image remote patterns because existing image data uses that host.
- [x] (2026-05-09 Europe/Warsaw) Improved alt text where existing values were too generic.
- [x] (2026-05-09 Europe/Warsaw) Ran lint/build and confirmed raw `<img>` warnings are gone.

## Surprises & Discoveries

- Observation: The 13 lint warnings correspond exactly to 13 raw `<img>` tags in source files.
  Evidence: `rg -n "<img\\b" app components lib` returned 13 matches.
- Observation: Existing Open Graph image points to `/images/wroclaw-radius-map.jpg`, which exists in `public/images`.
  Evidence: `lib/site.ts` sets `defaultImage` to `/images/wroclaw-radius-map.jpg` and the file exists.
- Observation: After migration, source search found zero raw `<img>` tags.
  Evidence: `rg -n "<img\\b" app components lib` returned no matches.

## Decision Log

- Decision: Migrate all 13 raw `<img>` tags to `next/image`.
  Rationale: Each current image has explicit dimensions and class-based sizing, so migration is low-risk and should remove all lint warnings without redesign.
  Date/Author: 2026-05-09 / Codex
- Decision: Add a narrow remote pattern for `https://images.unsplash.com/**`.
  Rationale: Existing data sources use Unsplash URLs. Next Image requires remote configuration for optimized external images.
  Date/Author: 2026-05-09 / Codex
- Decision: Do not rename files or generate new image assets in this sprint.
  Rationale: Current local assets are already referenced by code. Renaming would risk broken imports and does not improve runtime performance by itself.
  Date/Author: 2026-05-09 / Codex

## Outcomes & Retrospective

Sprint 5 migrated all 13 source `<img>` tags to Next.js `Image`, added the required Unsplash remote image configuration, improved alt text in hero, cards, galleries, and detail pages, and preserved existing layout and routes. `npm run lint` passed with no warnings, `npm run build` passed with 53 static pages, and source search confirms 0 raw `<img>` tags remain.

## Context and Orientation

This project uses Next.js App Router. Images currently appear in homepage hero sections, service/map sections, galleries, ceiling cards, lighting cards, ceiling detail pages, lighting detail pages, and solution detail pages. Local files live in `public/images`; many content images are remote Unsplash URLs stored in typed constants and component-local arrays.

The main files expected to change are `next.config.mjs`, `components/sections/Hero.tsx`, `components/sections/ServicesSection.tsx`, `components/sections/GallerySection.tsx`, `components/GalleryGrid.tsx`, `components/CeilingTypeCard.tsx`, `components/LightingCard.tsx`, `components/CeilingTypeDetail.tsx`, `components/LightingDetail.tsx`, and `app/rozwiazania/[slug]/page.tsx`.

## Plan of Work

First, configure `next.config.mjs` with a narrow `remotePatterns` entry for Unsplash. Second, import `Image` from `next/image` in each component with raw `<img>`, keeping current class names, width, height, and layout rhythm. The main homepage hero image should use `priority`; images below the fold should remain lazy/default. Third, improve alt text in generic places such as cards and gallery examples. Finally, run lint and build.

## Validation and Acceptance

Acceptance requires `npm run lint` to report no `<img>` warnings, `npm run build` to pass, and `rg -n "<img\\b" app components lib` to return zero matches. The public OG image must still exist.

## Idempotence and Recovery

All changes are local source edits and can be safely rerun. No route changes, dependency additions, or destructive git commands are required.

Revision note: Created before Sprint 5 implementation to satisfy the repository ExecPlan rule.

Revision note: Updated after implementation and validation with lint/build results and final image count.
