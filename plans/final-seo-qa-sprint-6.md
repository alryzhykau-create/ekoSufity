# Sprint 6: Final SEO QA Before Deployment

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan follows `PLANS.md`.

## Purpose / Big Picture

This sprint is a final deployment-readiness QA pass after the technical SEO, content, detail pages, local SEO, and image performance sprints. The goal is not to add features, but to verify that public pages build, expose complete SEO metadata, have sane schema, include expected internal links, keep forms/calculators/filters visible, and do not leak placeholders or non-public helper paths.

## Progress

- [x] (2026-05-09 Europe/Warsaw) Checked `git status --short`; uncommitted Sprint 4 and Sprint 5 changes are present.
- [x] (2026-05-09 Europe/Warsaw) Reviewed route files, robots, sitemap, site config, schema helpers, image usage, and key interactive components.
- [x] (2026-05-09 Europe/Warsaw) Ran `npm run lint`; it passed with 0 errors and 0 warnings.
- [x] (2026-05-09 Europe/Warsaw) Ran `npm run build`; it passed and generated 53 static pages.
- [x] (2026-05-09 Europe/Warsaw) Ran final generated HTML QA for 49 public routes, metadata, sitemap, robots, schema, content, links, images, and forms; no issues found.
- [x] (2026-05-09 Europe/Warsaw) Ran optional placeholder/instruction scans; matches were limited to code-only conditionals, data keys, docs, and plans, not generated visible page content.
- [x] (2026-05-09 Europe/Warsaw) Ran `git diff --check`; it passed.
- [x] (2026-05-09 Europe/Warsaw) No concrete deployment blockers were found, so no code fixes were made.

## Surprises & Discoveries

- Observation: The project has `/polityka-prywatnosci`, not `/prywatnosc`.
  Evidence: `app/polityka-prywatnosci/page.tsx` exists and no `app/prywatnosc` route exists.
- Observation: Image migration remains clean.
  Evidence: source search found zero raw `<img>` tags and lint has no image warnings.
- Observation: FAQ search is present, but the user-facing label is `Wyszukiwarka pytań`, not `Szukaj`.
  Evidence: generated `/faq` HTML contains a search input with `type="search"` and placeholder text for FAQ lookup.
- Observation: The full repository still contains expected non-public matches such as `TODO` in documentation and `seoTitle` / `seoDescription` data keys.
  Evidence: optional scan found those terms in docs, plans, constants, and JSON content, while generated HTML QA found no visible placeholder leaks.

## Decision Log

- Decision: Use generated HTML and generated sitemap/robots output as the primary QA source.
  Rationale: This verifies what will be served after build, not only source intent.
  Date/Author: 2026-05-09 / Codex
- Decision: Do not create `/prywatnosc`.
  Rationale: User said “if exists”; the existing public privacy route is `/polityka-prywatnosci`, and changing routing is prohibited.
  Date/Author: 2026-05-09 / Codex

## Outcomes & Retrospective

Final SEO QA found no deployment-blocking issues. The generated site has complete metadata, sitemap, robots output, schema, internal-link markers, interactive section markers, and image checks for the public route set. Sprint 6 changed only this QA plan file; earlier uncommitted Sprint 4 and Sprint 5 source changes remain in the working tree.

## Context and Orientation

The site is a Next.js App Router project. Static route files live under `app/`. Dynamic public routes are generated from typed constants in `lib/ceilingTypes.ts`, `lib/solutions.ts`, `lib/lighting.ts`, and `lib/locations.ts`. Technical SEO helpers live in `lib/metadata.ts`, `components/SeoJsonLd.tsx`, `app/sitemap.ts`, and `app/robots.ts`.

## Validation and Acceptance

Deployment preview is acceptable if `npm run lint`, `npm run build`, and `git diff --check` pass; sitemap contains all public pages and no helper paths; robots allows public pages and points at sitemap; all generated pages have title, description, canonical, Open Graph, Twitter metadata, one H1, and no visible placeholder text; FAQ pages with visible FAQ have FAQPage JSON-LD; breadcrumbs emit BreadcrumbList; and schema company data match EkoSufity business details.

Revision note: Created during final SEO QA to document scope and findings.
