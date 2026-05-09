# Sprint 1 Technical SEO

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This repository contains `PLANS.md` at the project root. This document must be maintained in accordance with that file.

## Purpose / Big Picture

This Sprint makes every existing public page easier for search engines and social previews to understand without changing the visible design or URL structure. After the change, the site should expose unique metadata through the Next.js App Router metadata API, consistent canonical URLs, Open Graph and Twitter preview data, robots and sitemap routes, and schema.org JSON-LD for LocalBusiness, Service, BreadcrumbList, and FAQPage where FAQ content is visible. The result is verified by running the existing lint and build commands from the repository root.

## Progress

- [x] (2026-05-09T14:43Z) Read `AGENTS.md`, `PLANS.md`, listed existing App Router pages, and inspected current SEO helpers.
- [x] (2026-05-09T14:43Z) Confirmed the project uses Next.js App Router under `app/`, content data exists at `src/data/ekoSufityContent.json`, and business data is already represented in `lib/site.ts`.
- [x] (2026-05-09T14:48Z) Updated SEO helpers and site configuration so canonical, Open Graph, Twitter, robots, sitemap, and JSON-LD share one stable base URL.
- [x] (2026-05-09T14:48Z) Ensured the homepage, static pages, and dynamic pages return unique metadata with canonical, Open Graph, and Twitter fields.
- [x] (2026-05-09T14:48Z) Ensured FAQPage JSON-LD is emitted by visible FAQ sections and removed the duplicate homepage FAQPage schema from `SeoJsonLd`.
- [x] (2026-05-09T14:48Z) Ran `npm run lint` and `npm run build`; lint passed with warnings and build passed after rerunning outside the sandbox.

## Surprises & Discoveries

- Observation: The live project is broader than the compact landing described in the old root instructions. It already has static pages, dynamic location/type/solution/lighting pages, `app/sitemap.ts`, `app/robots.ts`, `lib/metadata.ts`, and JSON-LD helpers in `components/SeoJsonLd.tsx`.
  Evidence: `find app -type f -name 'page.tsx'` shows 15 page files including dynamic route files.
- Observation: A production domain is already present as `https://ekosufity.pl` in `lib/site.ts`, so Sprint 1 should keep that rather than switching to the temporary Vercel URL. The user only requested `https://eko-sufity.vercel.app` when no production domain exists.
  Evidence: `lib/site.ts` exports `domain: "ekosufity.pl"` and `url: "https://ekosufity.pl"`.
- Observation: The homepage currently emits FAQPage JSON-LD twice because `app/page.tsx` renders `SeoJsonLd`, which includes FAQPage, and `components/sections/FAQSection.tsx` also renders `FAQJsonLd`.
  Evidence: `components/SeoJsonLd.tsx` includes a `faqSchema` inside `SeoJsonLd`, while `FAQSection` emits `FAQJsonLd`.
- Observation: `next build` with Turbopack failed inside the sandbox because it tried to bind to an internal port while processing CSS.
  Evidence: The first build exited with `Operation not permitted (os error 1)` and `binding to a port`; the escalated rerun completed successfully and generated 53 static pages.

## Decision Log

- Decision: Keep `https://ekosufity.pl` as the canonical production base URL, while making the code prefer `NEXT_PUBLIC_SITE_URL` if provided.
  Rationale: The project already has a production domain and `AGENTS.md` says to prefer `NEXT_PUBLIC_SITE_URL` with fallback to the production URL already used by the project.
  Date/Author: 2026-05-09 / Codex.
- Decision: Use the existing `lib/*` typed data as the source for implemented dynamic pages, and use `src/data/ekoSufityContent.json` as the Sprint content reference where it improves metadata consistency.
  Rationale: Existing pages already render from typed `lib/ceilingTypes.ts`, `lib/solutions.ts`, `lib/lighting.ts`, `lib/locations.ts`, and `lib/faq.ts`; replacing that in Sprint 1 would be a content implementation task, not technical SEO.
  Date/Author: 2026-05-09 / Codex.
- Decision: Centralize Twitter and Open Graph defaults in `lib/metadata.ts` instead of repeating them in every page.
  Rationale: This keeps changes small, makes all current and future calls to `createPageMetadata` consistent, and preserves the current page structure.
  Date/Author: 2026-05-09 / Codex.

## Outcomes & Retrospective

Sprint 1 technical SEO changes are complete. The implementation keeps existing routes and layout intact, centralizes social metadata in `lib/metadata.ts`, adds stable business data to JSON-LD, keeps FAQPage JSON-LD aligned with visible FAQ sections, and preserves sitemap/robots generation through the existing App Router route files. `npm run lint` passed with 14 warnings that predate this Sprint style of work, mostly `@next/next/no-img-element`; `npm run build` passed after sandbox escalation.

## Context and Orientation

The project is a Next.js App Router site. Public pages live under `app/`. Static page files include `app/page.tsx`, `app/o-sufitach/page.tsx`, `app/rodzaje-sufitow/page.tsx`, `app/rozwiazania/page.tsx`, `app/rozwiazania/oswietlenie/page.tsx`, `app/ceny/page.tsx`, `app/realizacje/page.tsx`, `app/lokalizacje/page.tsx`, `app/faq/page.tsx`, `app/kontakt/page.tsx`, and `app/polityka-prywatnosci/page.tsx`. Dynamic pages include `app/rodzaje-sufitow/[slug]/page.tsx`, `app/rozwiazania/[slug]/page.tsx`, `app/rozwiazania/oswietlenie/[slug]/page.tsx`, and `app/lokalizacje/[slug]/page.tsx`.

SEO helpers are currently split across `lib/site.ts`, `lib/metadata.ts`, `components/SeoJsonLd.tsx`, `app/sitemap.ts`, and `app/robots.ts`. In Next.js, the metadata API is the exported `metadata` object or `generateMetadata` function in an App Router page. JSON-LD means a script tag with `type="application/ld+json"` containing schema.org data that search engines can parse.

The user requested no route changes, no design rewrite, and no new production dependencies. Therefore the work should be limited to existing metadata and structured data helpers plus page-level metadata declarations.

## Plan of Work

First, update `lib/site.ts` so the site URL is derived from `NEXT_PUBLIC_SITE_URL` when available and otherwise falls back to `https://ekosufity.pl`. Keep all approved business data unchanged, including phone, email, address, hours, service area, and price range.

Next, extend `lib/metadata.ts` so `createPageMetadata` always returns canonical URL, Open Graph title/description/url/site name/locale/images, and Twitter card metadata. Add a small helper for dynamic pages so pages using `generateMetadata` do not repeat inconsistent metadata.

Then, update dynamic page metadata in `app/lokalizacje/[slug]/page.tsx`, `app/rodzaje-sufitow/[slug]/page.tsx`, `app/rozwiazania/[slug]/page.tsx`, and `app/rozwiazania/oswietlenie/[slug]/page.tsx` to use the same helper. Check static pages to ensure they use `createPageMetadata` or root metadata and have unique title and description.

After that, update `components/SeoJsonLd.tsx` to centralize LocalBusiness and Service data, include opening hours, address, price range, and service area, and avoid duplicate homepage FAQPage JSON-LD. Keep BreadcrumbList via `Breadcrumbs` because it already mirrors the visible breadcrumb trail. Keep FAQPage JSON-LD in `FAQSection`, `LocalFAQSection`, and `app/faq/page.tsx`, because those pages visibly render matching FAQ content.

Finally, verify `app/robots.ts` and `app/sitemap.ts` use the same base URL and include all implemented public routes. Run `npm run lint` and `npm run build` from `/Users/al_ryzhykau/Projects_Codex/EkoSufity`.

## Concrete Steps

Run commands from `/Users/al_ryzhykau/Projects_Codex/EkoSufity`.

Inspect before editing:

    find app -type f -name 'page.tsx' | sort
    rg -n "createPageMetadata|generateMetadata|SeoJsonLd|FAQJsonLd|BreadcrumbJsonLd" app components lib

Implement changes with `apply_patch` only for manual edits.

Validate:

    npm run lint
    npm run build

Expected validation outcome is that lint exits with code 0 and build exits with code 0. The observed result was:

    npm run lint
    0 errors, 14 warnings

    npm run build
    Compiled successfully
    Generated static pages: 53/53

## Validation and Acceptance

Acceptance is met when every existing public page has a unique title and description, each metadata object includes a canonical route and social preview fields, `robots.txt` points to the same sitemap base URL, `sitemap.xml` includes all implemented static and dynamic routes, and JSON-LD exists for LocalBusiness, Service, BreadcrumbList, and FAQPage where FAQ content is rendered.

The practical verification is:

    npm run lint
    npm run build

Both must complete successfully, or any remaining failure must be documented with the exact reason.

## Idempotence and Recovery

The changes are additive or small replacements in existing SEO helper files. Re-running the implementation steps should not create duplicate routes or dependencies. If a change causes a build failure, revert only the specific hunks from this Sprint and preserve unrelated user changes and the preparation files already present in the working tree.

## Artifacts and Notes

Current package scripts are:

    lint: eslint app components lib scripts
    build: next build

The current working tree already contains preparation changes from the prior step:

    M AGENTS.md
    ?? codex_ekosufity_package/
    ?? docs/
    ?? src/

These are not Sprint 1 regressions and should not be removed.

## Interfaces and Dependencies

Use only existing dependencies: Next.js, React, TypeScript, Tailwind, and lucide-react. Do not add production packages.

At the end, `lib/metadata.ts` should expose a page metadata helper that accepts `title`, `description`, `path`, optional `image`, and optional `noIndex`, and returns a Next.js `Metadata` object with canonical, Open Graph, Twitter, and robots fields. `components/SeoJsonLd.tsx` should continue exporting `JsonLd`, `FAQJsonLd`, `LocalBusinessJsonLd`, `BreadcrumbJsonLd`, `ServiceJsonLd`, and `SeoJsonLd` so existing imports remain stable.

Plan revision note: Initial Sprint 1 plan created after inspecting the current App Router SEO architecture and before code changes, to satisfy the repository ExecPlan rule for multi-page SEO work.

Plan revision note: Updated after implementation and validation to record completed metadata, JSON-LD, lint, and build outcomes.
