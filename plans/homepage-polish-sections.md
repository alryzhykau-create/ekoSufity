# Dopracuj Stronę Główną I Sekcje Oferty

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This document follows the rules in `PLANS.md` at the repository root.

## Purpose / Big Picture

The EkoSufity home page should remain the same premium, light, mobile-first landing page, but it needs clearer navigation and more complete Polish offer sections. After this change, visitors can move from the header to information about stretch ceilings, ceiling types, technical solutions, lighting, prices, projects, locations, FAQ, and contact. The review section stays on the home page but no longer appears in the header menu.

## Progress

- [x] (2026-05-08T11:12:19Z) Reviewed the current page composition, header menu, reusable sections, calculator, footer, and floating actions.
- [x] (2026-05-08T11:12:19Z) Created this ExecPlan before making multi-section UI edits.
- [x] (2026-05-08T11:22:27Z) Added reusable `SectionHeading`, `CardGrid`, `PhoneButton`, and a clearer `MobileMenu` boundary.
- [x] (2026-05-08T11:22:27Z) Updated the header menu labels and anchors, removing `Opinie` from the menu while keeping the reviews section.
- [x] (2026-05-08T11:22:27Z) Added sections for ceiling types, solutions, lighting, locations, and final CTA using the existing card style.
- [x] (2026-05-08T11:22:27Z) Updated page order so the home page covers all requested sections without removing existing content.
- [x] (2026-05-08T11:22:27Z) Ran `npm run build`; the production build completed successfully with no TypeScript or Next.js errors.
- [x] (2026-05-08T11:22:27Z) Started the local app and inspected desktop plus mobile states for header, hero, menu, sticky actions, new card sections, footer, and CTA behavior.

## Surprises & Discoveries

- Observation: The current home page is already split into section components under `components/sections`.
  Evidence: `app/page.tsx` imports `Hero`, `ServicesSection`, `PricingSection`, `GallerySection`, `ProcessSection`, `ReviewsSection`, `ComparisonSection`, `FAQSection`, `ContactSection`, and `Footer`.

- Observation: The existing `ServicesSection` already contains trust badges and the Alex block.
  Evidence: `components/sections/ServicesSection.tsx` renders a benefits strip and a section with `id="alex"`.

- Observation: Wide floating desktop phone and WhatsApp buttons could cover card text at common desktop heights.
  Evidence: Browser screenshots at `1280x720` showed the first implementation overlapping content in the trust/gallery areas.

- Observation: Compact circular desktop sticky actions avoid covering important copy while preserving quick phone and WhatsApp access.
  Evidence: Follow-up browser screenshot showed small circular buttons on the right side without obscuring card text.

## Decision Log

- Decision: Keep existing section components and add missing offer sections rather than rewriting the page.
  Rationale: The user explicitly asked not to recreate the page from scratch and to preserve the current visual style.
  Date/Author: 2026-05-08 / Codex

- Decision: Keep old anchors such as `#benefits`, `#alex`, and `#cennik` available where practical while adding new navigation anchors such as `#o-sufitach`, `#rodzaje-sufitow`, `#rozwiazania`, and `#lokalizacje`.
  Rationale: Prior project instructions warn not to break existing anchor navigation, while the new menu needs clearer labels.
  Date/Author: 2026-05-08 / Codex

- Decision: Make desktop sticky phone and WhatsApp actions compact icon buttons while keeping text CTAs in the header, hero, footer, final CTA, contact form, and mobile bottom bar.
  Rationale: This satisfies sticky access without covering content on card-heavy sections.
  Date/Author: 2026-05-08 / Codex

## Outcomes & Retrospective

The home page now has the requested navigation and added Polish offer sections without a full rewrite. The header menu contains `Strona główna`, `O sufitach`, `Rodzaje sufitów`, `Rozwiązania`, `Ceny`, `Realizacje`, `Lokalizacje`, `FAQ`, and `Kontakt`; `Opinie` is removed from the menu while the review section remains in the page. New premium card sections cover ceiling types, solutions, lighting, locations, and an additional final CTA. The production build succeeds, and browser checks covered desktop plus mobile menu behavior.

## Context and Orientation

This is a Next.js 14 App Router project using TypeScript, React, Tailwind CSS, and `lucide-react`. The main page is composed in `app/page.tsx`. Shared UI components live in `components`, and home-page sections live in `components/sections`. The project uses light backgrounds, premium white cards, black and beige/gold accents, and restrained rounded corners. Customer-facing text must be Polish.

The header is fixed at the top and changes from transparent to a translucent white background after scrolling. This behavior lives in `components/Header.tsx` and must remain intact. The mobile bottom bar and floating WhatsApp button live in `components/FloatingActions.tsx`.

## Plan of Work

First, add small reusable UI helpers: `SectionHeading` for consistent section titles and `CardGrid` for premium card layouts. Keep them simple and Tailwind-based. Add a dedicated `MobileMenu` component boundary in the header so the updated navigation is easier to maintain without changing the fixed header behavior.

Next, update `navItems` in `components/Header.tsx` to exactly show: `Strona główna`, `O sufitach`, `Rodzaje sufitów`, `Rozwiązania`, `Ceny`, `Realizacje`, `Lokalizacje`, `FAQ`, and `Kontakt`. Do not include `Opinie` in the menu. Keep the reviews section rendered in the page.

Then add new section components for `Rodzaje sufitów`, `Rozwiązania`, `Oświetlenie`, and `Lokalizacje`. Use short Polish customer-facing descriptions, existing color tokens, `lucide-react` icons, and responsive grids. Add a final CTA section before the footer/contact close, preserving the existing contact section as the form-based final conversion point.

Finally, update `app/page.tsx` ordering so all requested sections appear. Run the production build, then start the site locally and check mobile and desktop.

## Concrete Steps

From `/Users/al_ryzhykau/Projects_Codex/EkoSufity`, run:

    npm run build

Expected result after implementation: Next.js compiles successfully without TypeScript errors.

Actual result:

    npm run build
    ✓ Compiled successfully
    ✓ Generating static pages (6/6)

Then run:

    npm run dev

Open the local URL printed by Next.js. Verify that the header menu contains the requested labels, the mobile menu opens and closes, sticky WhatsApp and phone actions are available, the new offer sections render as premium cards, and the footer remains coherent.

Actual local verification used `http://localhost:3000`. Desktop browser inspection confirmed the header menu fits and no longer includes `Opinie`. Mobile viewport testing at 390 by 844 confirmed the menu opens, includes `Lokalizacje`, does not include `Opinie`, and the hero plus mobile bottom bar remain usable.

## Validation and Acceptance

The work is accepted when `npm run build` succeeds and the home page includes, in a coherent order, Header, Hero, trust badges, Alex block, prices, mini-calculator, ceiling types, solutions, lighting, projects, process, reviews, comparison, locations, FAQ, final CTA, and Footer. Header menu must not include `Opinie`. Customer-facing copy must be Polish.

## Idempotence and Recovery

The edits are additive and local. Re-running `npm run build` and `npm run dev` is safe. If a new section causes a TypeScript error, check icon imports and component prop types first. If spacing breaks on mobile, reduce grid columns and card padding rather than changing the whole page rhythm.

## Artifacts and Notes

Validation output and any local-browser findings will be recorded here after implementation.

## Interfaces and Dependencies

No new dependencies are required. Use existing React, Next.js, Tailwind CSS, TypeScript, and `lucide-react`. New reusable helpers should be plain React function components. New sections should live under `components/sections`.
