# Sprint 3: Detail Pages for Ceiling Types, Technical Solutions, and Lighting

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. This plan follows the repository rules in `PLANS.md`.

## Purpose / Big Picture

After this change, each existing detail page for ceiling types, technical solutions, and lighting options will present clear Polish sales and educational content with unique metadata, one logical H1, useful internal links, FAQ content, and calls to action for pricing and contact. A user should be able to open any existing detail route under `/rodzaje-sufitow`, `/rozwiazania`, or `/rozwiazania/oswietlenie` and understand what the option is, where it works, what to plan, approximate price information where available, and how to request a free measurement.

The work must preserve the current Next.js App Router routes and visual system. It should update existing typed data and reuse existing components rather than adding new production dependencies or redesigning the site.

## Progress

- [x] (2026-05-09 00:00 Europe/Warsaw) Checked `git status --short`; the repository already has uncommitted changes from earlier SEO/content sprints.
- [x] (2026-05-09 00:00 Europe/Warsaw) Identified existing detail routes: `app/rodzaje-sufitow/[slug]/page.tsx`, `app/rozwiazania/[slug]/page.tsx`, and `app/rozwiazania/oswietlenie/[slug]/page.tsx`.
- [x] (2026-05-09 00:00 Europe/Warsaw) Identified existing typed constants in `lib/ceilingTypes.ts`, `lib/solutions.ts`, and `lib/lighting.ts`.
- [x] (2026-05-09 00:00 Europe/Warsaw) Confirmed existing detail components already provide the required page structure: hero, H1, lead, sections, applications, benefits, planning/limitations, price block, related links, FAQ, and CTA.
- [x] (2026-05-09 00:00 Europe/Warsaw) Updated ceiling type constants with content pack phrases, complete FAQs, unique metadata, and natural internal SEO wording.
- [x] (2026-05-09 00:00 Europe/Warsaw) Updated technical solution constants with clearer descriptions for lighting, profiles, ventilation, revision hatches, and levels/constructions.
- [x] (2026-05-09 00:00 Europe/Warsaw) Updated lighting constants with more specific planning, FAQ, metadata, and Polish copy for all existing lighting detail pages.
- [x] (2026-05-09 00:00 Europe/Warsaw) Made a minimal component copy adjustment so placeholder examples are called inspirations, not real realizations.
- [x] (2026-05-09 00:00 Europe/Warsaw) Ran `npm run lint`; it completed with 0 errors and 13 existing `<img>` warnings.
- [x] (2026-05-09 00:00 Europe/Warsaw) Ran `npm run build`; it completed successfully and generated 53 static pages.

## Surprises & Discoveries

- Observation: The site is not only a one-page landing now; it has existing App Router pages and detail routes for the Sprint 3 scope.
  Evidence: `app/rodzaje-sufitow/[slug]/page.tsx`, `app/rozwiazania/[slug]/page.tsx`, and `app/rozwiazania/oswietlenie/[slug]/page.tsx` exist.
- Observation: FAQ JSON-LD is already centralized through `FAQSection`, so updating detail page FAQ arrays keeps visible FAQ and schema aligned.
  Evidence: detail components render `<FAQSection items={...} />`.
- Observation: The detail pages already use typed constants rather than reading `src/data/ekoSufityContent.json` directly.
  Evidence: detail pages import from `lib/ceilingTypes`, `lib/solutions`, and `lib/lighting`.
- Observation: The existing CTA component already includes a visible pricing link when `showCalculatorLink` is true, so detail pages can satisfy `/ceny` and `/kontakt` CTA requirements without structural route changes.
  Evidence: `components/sections/CTASection.tsx` renders WhatsApp, a secondary contact link, and `/ceny#calculator` by default.

## Decision Log

- Decision: Keep routing unchanged and update the existing typed constants instead of wiring raw JSON directly into detail components.
  Rationale: The dynamic pages and components already depend on typed constants with fields tailored to the UI. Replacing this with JSON would add mapping risk during a content sprint. The JSON and content pack will be used as source material to align the constants.
  Date/Author: 2026-05-09 / Codex
- Decision: Avoid creating new lighting routes.
  Rationale: The project already has `/rozwiazania/oswietlenie/[slug]` routes for six lighting detail pages. The user explicitly asked not to create new routes without approval.
  Date/Author: 2026-05-09 / Codex
- Decision: Preserve existing UI components and only adjust copy, labels, and links where necessary.
  Rationale: Sprint 3 is content/detail-page implementation, not redesign. Existing components already satisfy the page structure.
  Date/Author: 2026-05-09 / Codex

## Outcomes & Retrospective

Sprint 3 updated existing typed constants for all current ceiling type, technical solution, and lighting detail pages. The work preserved routing, reused current components, kept FAQ schema behavior through `FAQSection`, and avoided new dependencies. Validation passed with `npm run lint` and `npm run build`; the only warnings are existing Next.js image warnings for `<img>` usage.

## Context and Orientation

This is a Next.js App Router project. App Router means pages are implemented as `page.tsx` files inside the `app/` directory, and dynamic route segments are represented by bracketed folder names such as `[slug]`. The detail routes in scope already exist and must not be renamed or removed.

The ceiling type detail route is `app/rodzaje-sufitow/[slug]/page.tsx`. It uses `generateStaticParams` to create pages from `ceilingTypes` in `lib/ceilingTypes.ts`, uses `generateMetadata` for unique metadata, renders breadcrumbs, and then renders `components/CeilingTypeDetail.tsx`.

The technical solution detail route is `app/rozwiazania/[slug]/page.tsx`. It uses `solutionItems` from `lib/solutions.ts`, excludes the `oswietlenie` slug because `/rozwiazania/oswietlenie` is a separate static page, and renders solution detail content directly in the page file.

The lighting detail route is `app/rozwiazania/oswietlenie/[slug]/page.tsx`. It uses `lightingItems` from `lib/lighting.ts`, unique metadata, breadcrumbs, and `components/LightingDetail.tsx`.

The content sources are `src/data/ekoSufityContent.json` and `docs/content/eko_sufity_content_implementation_pack.md`. The implementation target is the typed constants because they are already connected to the existing UI.

## Plan of Work

First, update `lib/ceilingTypes.ts` for all ten existing ceiling type slugs: `matowe`, `satynowe`, `blyszczace`, `z-oswietleniem`, `z-nadrukiem`, `translucent`, `z-perforacja`, `wielopoziomowe`, `gwiazdziste-niebo`, and `z-karniszem`. Each entry should have unique SEO metadata, a clear lead/description, benefits, applications, limitations, related technical solutions, price label where known, and FAQ items. The required phrases should appear naturally, not as repeated keyword stuffing.

Second, update `lib/solutions.ts` for existing technical solution entries: `oswietlenie`, `profile`, `wentylacja`, `luki-rewizyjne`, and `poziomy-i-konstrukcje`. These constants should mention the specific technical decisions requested in Sprint 3, including profiles, LED planning, ventilation in bathrooms and kitchens, service access, and multi-level constructions.

Third, update `lib/lighting.ts` for existing lighting detail pages: `linie-led`, `tasmy-led`, `punkty-swietlne`, `szyny-magnetyczne`, `oprawy-wpuszczane`, and `podswietlenie-obwodowe`. Each item should include practical use cases, benefits, planning notes, compatible ceilings, price labels where available, unique metadata, and FAQ.

Fourth, make minimal component edits if required. Existing detail components already include internal links to `/ceny`, `/realizacje`, and `/kontakt`, FAQ sections, and CTA blocks. The main expected component change is wording where placeholder imagery must not be described as real company work.

Finally, run validation commands from the repository root: `npm run lint` if the script exists and `npm run build`. The build must pass. Lint warnings about existing `<img>` usage are acceptable only if they remain non-blocking and are reported clearly.

## Concrete Steps

Work from `/Users/al_ryzhykau/Projects_Codex/EkoSufity`.

1. Inspect the current status:
   `git status --short`

2. Edit existing data and components:
   `lib/ceilingTypes.ts`
   `lib/solutions.ts`
   `lib/lighting.ts`
   `components/CeilingTypeDetail.tsx` if placeholder wording needs adjustment.

3. Validate:
   `npm run lint`
   `npm run build`

4. Re-check changed files:
   `git status --short`

## Validation and Acceptance

The implementation is accepted when every existing detail route in scope builds successfully and uses the existing page structure with updated Polish content. `npm run build` should complete successfully. `npm run lint` should either pass or show only known non-blocking warnings from pre-existing image usage.

Human verification after starting the app should include opening examples such as `/rodzaje-sufitow/matowe`, `/rodzaje-sufitow/z-oswietleniem`, `/rozwiazania/profile`, `/rozwiazania/wentylacja`, `/rozwiazania/oswietlenie/linie-led`, and `/rozwiazania/oswietlenie/szyny-magnetyczne`. Each page should have one visible H1, pricing/contact CTA links, related links, FAQ, and no route changes.

## Idempotence and Recovery

The edits are limited to existing source files and one plan file. Running lint and build is safe and repeatable. No destructive git commands should be used. If a validation command fails, fix the reported TypeScript, lint, or build issue locally and rerun the same command.

## Artifacts and Notes

Initial `git status --short` shows an already dirty tree from earlier work, including changes to app pages, components, metadata, docs, and `src/data`. Sprint 3 must not revert those changes.

## Interfaces and Dependencies

No new production dependencies are required. The implementation uses the existing TypeScript types:

- `CeilingType` in `lib/ceilingTypes.ts`
- `SolutionItem` in `lib/solutions.ts`
- `LightingItem` in `lib/lighting.ts`

The existing page functions `generateStaticParams` and `generateMetadata` must keep working with the same slugs. Existing FAQ schema behavior is preserved by continuing to render `FAQSection`.

Revision note: Created this plan before Sprint 3 implementation to satisfy the repository ExecPlan rule for multi-page content changes.

Revision note: Updated the plan after implementation and validation to record completed files, validation output, and the chosen constants-based integration approach.
