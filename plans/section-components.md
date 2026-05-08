# Split Landing Page Into Section Components

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This document follows the rules in `PLANS.md` at the repository root.

## Purpose / Big Picture

The site is currently a one-page Next.js landing page, but the product direction is to become a multi-page site. After this change, the home page will be composed from named section components such as `Hero`, `ServicesSection`, `GallerySection`, `FAQSection`, and `Footer`, making it easier to reuse, reorder, or move sections into future pages without editing one very large file. The visible design and Polish marketing copy should remain the same.

## Progress

- [x] (2026-05-08T09:43:16Z) Read the existing landing page structure and confirmed `app/page.tsx` contains most sections inline.
- [x] (2026-05-08T09:43:16Z) Created this ExecPlan before making structural edits.
- [x] (2026-05-08T09:47:19Z) Created section component files under `components/sections`.
- [x] (2026-05-08T09:47:19Z) Updated `app/page.tsx` to compose the page from section components.
- [x] (2026-05-08T09:48:48Z) Ran `npm run build`; the production build completed successfully.
- [x] (2026-05-08T09:48:48Z) Started `npm run dev` and confirmed `curl -I http://127.0.0.1:3000` returns `HTTP/1.1 200 OK`.
- [x] (2026-05-08T09:48:48Z) Updated this plan with final outcomes.

## Surprises & Discoveries

- Observation: The project already has reusable interactive components for header, calculator, contact form, FAQ accordion, WhatsApp button, and mobile bottom bar.
  Evidence: Files exist under `components/Header.tsx`, `components/PriceCalculator.tsx`, `components/ContactForm.tsx`, `components/FAQAccordion.tsx`, and `components/FloatingActions.tsx`.

- Observation: The in-app browser was blocked from opening `localhost` and `127.0.0.1` with `ERR_BLOCKED_BY_CLIENT`, so local availability was verified with `curl`.
  Evidence: `curl -I http://127.0.0.1:3000` returned `HTTP/1.1 200 OK` after `npm run dev` started.

## Decision Log

- Decision: Keep the refactor visual-only from the user's perspective and avoid changing Polish copy, routes, anchors, or styling.
  Rationale: The user asked to split the project into normal section components for a future multi-page site, not to redesign the landing page.
  Date/Author: 2026-05-08 / Codex

- Decision: Place new section components in `components/sections`.
  Rationale: This keeps existing reusable UI components at the top of `components` while creating a clear home-page section layer that can grow with future pages.
  Date/Author: 2026-05-08 / Codex

## Outcomes & Retrospective

The landing page is now composed from named section components. `app/page.tsx` imports those components and renders them in the original order. The production build succeeds, and the local dev server responds with `HTTP/1.1 200 OK`. The visible landing page behavior should remain the same because the markup, anchors, copy, and Tailwind classes were moved rather than redesigned.

## Context and Orientation

This is a Next.js 14 App Router project. `app/layout.tsx` provides root metadata and the HTML shell. `app/page.tsx` currently renders the whole landing page directly, including hero, benefits, owner/service area, pricing intro, gallery, process, reviews, comparison, FAQ, contact, footer, and floating calls to action. Existing reusable components include `Header`, `PriceCalculator`, `ContactForm`, `FAQAccordion`, `WhatsAppButton`, and `MobileBottomBar`.

The target structure for this pass is to keep `app/page.tsx` as an orchestration file. An orchestration file imports components and arranges them in order, while individual section files own their markup and local data.

## Plan of Work

Create `components/sections/Hero.tsx` for the hero and its CTA buttons. Create `components/sections/ServicesSection.tsx` for the benefits strip and Alex/service-area block because together they explain service quality, coverage, and trust. Create `components/sections/PricingSection.tsx` for the static price rows and examples, keeping the existing `PriceCalculator` separate. Create `components/sections/GallerySection.tsx` for portfolio cards. Create `components/sections/ProcessSection.tsx`, `components/sections/ReviewsSection.tsx`, `components/sections/ComparisonSection.tsx`, `components/sections/FAQSection.tsx`, `components/sections/ContactSection.tsx`, and `components/sections/Footer.tsx`.

Then update `app/page.tsx` so it imports `Header`, `PriceCalculator`, `WhatsAppButton`, `MobileBottomBar`, and the new sections. The rendered order and anchor IDs must remain unchanged: `#home`, `#alex`, `#benefits`, `#cennik`, `#realizacje`, `#opinie`, `#faq`, and `#kontakt`.

## Concrete Steps

From `/Users/al_ryzhykau/Projects_Codex/EkoSufity`, run:

    npm run build

Expected result after implementation: Next.js compiles successfully without TypeScript errors.

## Validation and Acceptance

The refactor is accepted when `npm run build` succeeds and the home page still renders the same section order with the same anchors. A human can start the site with `npm run dev`, open `http://localhost:3000`, and verify that the header, hero, services, pricing, calculator, gallery, FAQ, contact form, footer, WhatsApp button, and mobile bottom bar are still present.

## Idempotence and Recovery

The edits are additive plus a replacement of `app/page.tsx`. Re-running `npm run build` is safe. If a section import fails, inspect the named component path and export. If a visual section disappears, compare the new section component to the previous inline markup in git diff and restore the missing block without changing unrelated sections.

## Artifacts and Notes

Validation evidence:

    npm run build
    ✓ Compiled successfully
    ✓ Generating static pages (4/4)

    curl -I http://127.0.0.1:3000
    HTTP/1.1 200 OK

## Interfaces and Dependencies

No new dependencies are required. Use existing React, Next.js, TypeScript, Tailwind CSS, and `lucide-react`. Section components should be plain React function components. Client-side behavior remains only in existing client components such as `Header`, `ContactForm`, `FAQAccordion`, `PriceCalculator`, and floating actions.
