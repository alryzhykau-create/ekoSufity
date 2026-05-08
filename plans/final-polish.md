# Final Polish ExecPlan

This ExecPlan is a living document. Keep `Progress`, `Surprises & Discoveries`,
`Decision Log`, and `Outcomes & Retrospective` current as work proceeds.

## Purpose

Perform a final project polish for the existing EkoSufity Next.js app: responsiveness, mobile UX,
spacing, consistency, CTA coverage, SEO metadata, breadcrumbs, lazy loading, image format/alt,
internal linking, FAQ, accessibility, TypeScript/build health, unused components, duplicate sections,
loading, layout shifts, and mobile navigation.

## Project Context

The app is a Next.js 14 App Router site with many static content routes, shared `Header`, `Footer`,
floating CTA buttons, FAQ data, sitemap and robots route handlers, and premium light Tailwind styling.
The project has a dirty worktree from previous implementation work; do not revert unrelated changes.

## Constraints

- Do not create a new project.
- Keep Polish client-facing copy.
- Keep the current visual style and architecture.
- Prefer small scoped fixes over broad refactors.
- Use existing components and Tailwind tokens.
- Do not add dependencies.
- Use `apply_patch` for manual edits.
- Run `npm run build` and browser-check representative pages.

## Progress

- [x] Inspected file structure, package scripts, Next config, current page composition, and image usage.
- [x] Audit metadata, breadcrumbs, CTA, FAQ, and internal links across routes.
- [x] Fix high-impact UX/SEO/loading issues found in the audit.
- [x] Run `npm run build`.
- [x] Check representative desktop/mobile pages in browser.
- [x] Record remaining risks and outcome.

## Surprises & Discoveries

- `next.config.mjs` is minimal; image optimization is currently handled by native `<img>` tags rather than `next/image`.
- Most remote images use Unsplash `auto=format` URLs, which can negotiate modern formats but do not explicitly request WebP.
- Some global CTA links pointed to local anchors (`#calculator`, `#kontakt`) that do not exist on every route.
- Local `sips` on this machine cannot encode WebP, so the local static map image remains JPG. Remote content images now explicitly request WebP.

## Decision Log

- Keep native `<img>` for now to avoid adding remote image config complexity late in the project.
- Improve images by making WebP explicit in image URLs and adding fixed dimensions/async decoding where applicable.
- Prioritize build-safe, layout-safe changes over large component rewrites.

## Implementation Plan

1. Inspect key shared components and route pages for coverage and consistency.
2. Add a small image URL helper or direct URL updates to request WebP where images are remote.
3. Add missing lazy/eager loading, dimensions, and decoding attributes to image elements.
4. Fix navigation/CTA/mobile issues discovered by audit.
5. Update sitemap/metadata only if gaps remain.
6. Build and browser-check home, FAQ, realizacje, location detail, and contact/ceny pages.

## Outcomes & Retrospective

Final polish completed. Remote Unsplash image URLs now explicitly request WebP, image tags have
dimensions and async decoding where relevant, gallery and detail images use lazy/eager loading
according to placement, and global CTA links no longer point to missing local anchors on inner
pages. The mobile bottom calculator CTA now points to `/ceny#calculator`, and the cookie banner is
more compact on mobile. Build passes, and browser checks confirmed representative pages load
without server errors, with H1s, CTA, FAQ, breadcrumbs, working gallery filtering, and mobile nav.
