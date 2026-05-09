# Full Site SEO QA After Sprints 0-6

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan follows `PLANS.md`.

## Purpose / Big Picture

This audit verifies that the EkoSufity website is ready for a deployment preview after the preparation, technical SEO, content, detail page, local SEO, image, and final QA sprints. The work is intentionally conservative: it checks the whole public site, fixes only obvious safe defects, and records larger decisions as recommendations instead of changing routing, redesigning the site, or adding dependencies.

## Progress

- [x] (2026-05-09 Europe/Warsaw) Checked `git status --short`, `package.json`, lockfile, project root, App Router files, `src/`, `public/images`, `lib/`, `components/`, `next.config.mjs`, sitemap, and robots implementation.
- [x] (2026-05-09 Europe/Warsaw) Read required project guidance and content/SEO docs: `AGENTS.md`, `PLANS.md`, `src/data/ekoSufityContent.json`, `docs/content/eko_sufity_content_implementation_pack.md`, `docs/seo/SEO_IMPLEMENTATION_CHECKLIST.md`, `docs/seo/IMAGE_ASSET_PLAN.md`, and `docs/seo/NEXT_IMPLEMENTATION_NOTES.md`.
- [x] (2026-05-09 Europe/Warsaw) Reviewed existing plans in `plans/` and compared their expected outcomes with the current project.
- [x] (2026-05-09 Europe/Warsaw) Audited generated public routes, metadata, canonical URLs, Open Graph, Twitter metadata, sitemap, robots, JSON-LD, breadcrumbs, and FAQ schema.
- [x] (2026-05-09 Europe/Warsaw) Audited main pages, detail pages, local SEO pages, images, forms, calculators, filters, and public text scans.
- [x] (2026-05-09 Europe/Warsaw) Shortened the `/rozwiazania/oswietlenie` metadata title because the generated title was 78 characters.
- [x] (2026-05-09 Europe/Warsaw) Ran validation commands: `npm run lint`, `npm run build`, and `git diff --check`; all passed.
- [x] (2026-05-09 Europe/Warsaw) Re-ran generated HTML QA after the metadata fix; 49/49 expected public routes passed with 49 unique titles and 49 unique descriptions.
- [x] (2026-05-09 Europe/Warsaw) Recorded final outcome and deployment recommendation.

## Surprises & Discoveries

- Observation: The working tree already contains uncommitted source changes from earlier sprints.
  Evidence: `git status --short` shows modified image/detail/local files and untracked sprint plan files before this audit began.
- Observation: The project is a Next.js App Router application using npm.
  Evidence: public routes live under `app/`, `package-lock.json` exists, and `package.json` has Next.js scripts.
- Observation: The only production-code defect found by the audit was a long title for `/rozwiazania/oswietlenie`.
  Evidence: generated HTML QA reported title length 78 before the fix; after shortening, the max generated title length is 74 on `/rodzaje-sufitow`.
- Observation: Optional public-source scans still report `seoTitle` and `seoDescription` keys plus `undefined` and `null` in TypeScript control flow, but those are not visible content leaks.
  Evidence: generated HTML QA found no visible `undefined`, `null`, `[object Object]`, `Lorem`, technical key leaks, unsafe realization wording, or Russian UI text.
- Observation: The existing privacy route is `/polityka-prywatnosci`; there is no `/prywatnosc`.
  Evidence: `app/polityka-prywatnosci/page.tsx` exists and build output includes `/polityka-prywatnosci`.

## Decision Log

- Decision: Use generated build output as the authoritative SEO QA source.
  Rationale: Generated HTML, sitemap, and robots files reflect what deployment preview will serve after `next build`, while source-only checks can miss rendering issues.
  Date/Author: 2026-05-09 / Codex
- Decision: Do not change routing or add missing aliases during this audit.
  Rationale: The user explicitly prohibited route changes and new pages; missing optional routes should be reported, not created.
  Date/Author: 2026-05-09 / Codex
- Decision: Fix the long `/rozwiazania/oswietlenie` title in place.
  Rationale: It is a small metadata-only correction, improves snippet quality, and does not affect routing, layout, dependencies, or page structure.
  Date/Author: 2026-05-09 / Codex

## Outcomes & Retrospective

The full post-sprint audit completed without deployment blockers. The project generated 53 static pages in `next build`, including 49 expected public content routes plus framework/system outputs. The final generated HTML audit found 49/49 expected public routes, 49 unique titles, 49 unique descriptions, correct canonical URLs, `pl_PL` Open Graph locale, Twitter metadata, sitemap/robots coverage, BreadcrumbList, FAQPage where expected, and no visible placeholder or unsafe realization wording. The only production-code change made during this audit was shortening the `/rozwiazania/oswietlenie` metadata title. Deployment preview is recommended.

## Context and Orientation

The project is the EkoSufity website for Polish local service SEO around stretch ceilings in Wrocław and nearby towns. It uses Next.js App Router with route files in `app/`, shared React components in `components/`, typed data/constants in `lib/`, imported content data in `src/data/ekoSufityContent.json`, and local static images in `public/images/`. Technical SEO is implemented through `app/layout.tsx`, `lib/metadata.ts`, `components/SeoJsonLd.tsx`, `app/sitemap.ts`, and `app/robots.ts`.

## Validation and Acceptance

The audit is successful if the public route set builds, generated pages have complete and non-duplicated essential SEO metadata, sitemap and robots include only intended public URLs, schema has coherent EkoSufity business data without placeholder leaks, customer-visible text is Polish, images use `next/image` without raw `<img>`, key forms/calculators/filters/CTAs remain present, and `npm run lint`, `npm run build`, and `git diff --check` pass.

Revision note: Created during the full site SEO QA audit requested after Sprints 0-6.
