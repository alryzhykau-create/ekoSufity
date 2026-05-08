# Add Pricing, About Ceilings, and Contact Pages

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This document follows the rules in `PLANS.md` at the repository root.

## Purpose / Big Picture

EkoSufity.pl is becoming more than a single landing page. After this change, visitors can open dedicated pages for pricing, understanding stretch ceilings, and contacting the team. The new pages should keep the same premium light visual style, use mobile-first sections, include breadcrumbs, FAQ blocks, CTA blocks, and compile cleanly with Next.js.

## Progress

- [x] (2026-05-08T11:36:54Z) Reviewed current shared components, header links, sitemap, CTA, FAQ, and breadcrumb implementation.
- [x] (2026-05-08T11:36:54Z) Created this ExecPlan before adding multiple routes and calculator logic.
- [x] (2026-05-08T11:47:56Z) Added reusable calculator logic in `lib/calculator.ts` and `components/FullPriceCalculator.tsx`.
- [x] (2026-05-08T11:47:56Z) Added `/ceny`, `/o-sufitach`, and `/kontakt` pages with Polish content and metadata.
- [x] (2026-05-08T11:47:56Z) Extended breadcrumbs, FAQSection, CTASection, sitemap, and header links so the new pages integrate cleanly.
- [x] (2026-05-08T11:47:56Z) Added a richer contact page form with the requested fields.
- [x] (2026-05-08T11:47:56Z) Ran `npm run build`; the production build completed successfully with no TypeScript or Next.js errors.
- [x] (2026-05-08T11:47:56Z) Started the local app and inspected the new pages on desktop and mobile.

## Surprises & Discoveries

- Observation: `Breadcrumbs` currently renders a screen-reader-only single home item.
  Evidence: `components/Breadcrumbs.tsx` contains only an `sr-only` nav with one link.

- Observation: The current header menu uses hash-only links, which work on the home page but would not navigate correctly from new route pages.
  Evidence: `components/Header.tsx` contains links such as `#o-sufitach`, `#cennik`, and `#kontakt`.

- Observation: The new pages compile as static routes.
  Evidence: `npm run build` listed `/ceny`, `/kontakt`, and `/o-sufitach` as static app routes.

- Observation: Mobile menu works on route pages after converting primary navigation to route-aware links.
  Evidence: Browser check at 390 by 844 on `/kontakt` showed menu items including `Ceny` and active `Kontakt`.

## Decision Log

- Decision: Use native App Router pages under `app/ceny/page.tsx`, `app/o-sufitach/page.tsx`, and `app/kontakt/page.tsx`.
  Rationale: This matches the existing Next.js App Router project and avoids creating a new project or routing dependency.
  Date/Author: 2026-05-08 / Codex

- Decision: Keep the home-page mini calculator and add a separate full calculator for `/ceny`.
  Rationale: The user asked specifically for `FullPriceCalculator.tsx` and `lib/calculator.ts`, while the home-page mini calculator already works as a compact CTA.
  Date/Author: 2026-05-08 / Codex

- Decision: Make header links route-aware by linking dedicated pages to `/ceny`, `/o-sufitach`, and `/kontakt`, while keeping home-only sections as `/#anchor`.
  Rationale: Hash-only links would break from route pages because the target sections exist on the home page.
  Date/Author: 2026-05-08 / Codex

## Outcomes & Retrospective

The requested pages are implemented. `/ceny` includes the required H1, orientation prices, full calculator, price factors, example quotes, additional solutions, pricing FAQ, and CTA. `/o-sufitach` explains the system, components, benefits, limitations, comparison with G-K, installation, ceiling types, technical solutions, FAQ, and CTA. `/kontakt` includes a contact hero, contact details, expanded form, WhatsApp CTA, service area, contact FAQ, and CTA. Shared breadcrumbs, FAQ and CTA sections now support page-specific content.

## Context and Orientation

This is a Next.js 14 App Router project using TypeScript, React, Tailwind CSS, and `lucide-react`. Root metadata lives in `app/layout.tsx`. The current home page is `app/page.tsx` and is composed from section components. Shared components include `Header`, `Footer`, `SectionHeading`, `CardGrid`, `FAQSection`, `CTASection`, `Breadcrumbs`, and floating phone/WhatsApp actions.

Breadcrumbs are a small navigation trail, for example `Strona główna / Ceny`, that helps users and search engines understand where the page sits. A full price calculator is a larger interactive calculator with more fields than the mini calculator.

## Plan of Work

First, make shared components route-aware and reusable: expand `Breadcrumbs` to accept visible page items, extend `FAQSection` to accept custom FAQ content and headings, and let `CTASection` accept optional text. Update the header menu so route pages link to real routes while home-only sections still point to `/#anchor`.

Next, implement `lib/calculator.ts` with typed inputs, base ceiling prices, add-on prices, location adjustments, and a deterministic `calculateFullPrice` function. Build `components/FullPriceCalculator.tsx` as a client component with fields for area, rooms, ceiling type, lighting, LED, magnetic rails, profiles, ventilation, access hatches, and location.

Then add the three pages with sections requested by the user. `/ceny` must use the H1 `Cennik sufitów napinanych we Wrocławiu`. `/o-sufitach` explains the system, pros, limitations, comparison, installation, types, technical solutions, FAQ, and CTA. `/kontakt` includes a contact hero, contact data, requested form fields, WhatsApp CTA, service area, and contact FAQ.

Finally, update the sitemap and run validation.

## Concrete Steps

From `/Users/al_ryzhykau/Projects_Codex/EkoSufity`, run:

    npm run build

Expected result: Next.js compiles successfully and lists `/`, `/ceny`, `/kontakt`, `/o-sufitach`, `/robots.txt`, and `/sitemap.xml`.

Actual result:

    npm run build
    ✓ Compiled successfully
    ✓ Generating static pages (9/9)
    ○ /
    ○ /ceny
    ○ /kontakt
    ○ /o-sufitach
    ○ /robots.txt
    ○ /sitemap.xml

Then run:

    npm run dev

Open the printed local URL and inspect `/ceny`, `/o-sufitach`, and `/kontakt` on desktop and mobile.

Actual local verification used `http://localhost:3000`. Browser checks confirmed each new page has breadcrumbs, FAQ content, and CTA content. A mobile check on `/kontakt` confirmed the menu opens, route navigation is present, and the expanded form fields such as `Email` and `Miejscowość` are present.

## Validation and Acceptance

The work is accepted when the three routes exist, each page has breadcrumbs, FAQ and CTA content, `/ceny` includes `FullPriceCalculator`, `/kontakt` includes all requested form fields, header links work from route pages, and `npm run build` succeeds.

## Idempotence and Recovery

The edits are additive and can be re-run safely. If the calculator build fails, check exported types and field names in `lib/calculator.ts`. If route pages render without styles, verify Tailwind classes are literal strings. If header links break, prefer absolute internal links such as `/ceny` and `/#realizacje`.

## Artifacts and Notes

Validation output will be recorded here after implementation.

## Interfaces and Dependencies

No new dependencies are required. Use existing Next.js, React, TypeScript, Tailwind CSS, and `lucide-react`. New route pages should be server components unless they need interactivity. The full price calculator and contact page form should be client components.
