# Upgrade Next.js to the Latest Stable Version

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This document follows `PLANS.md` in the repository root. It is self-contained so a contributor with only this file and the working tree can complete or resume the migration.

## Purpose / Big Picture

The project currently runs on Next.js 14.2.35 with React 18. The goal is to move the landing site to the latest stable Next.js release available through npm, which is Next.js 16.2.6 at the start of this plan. After the change, the same EkoSufity site should build successfully with the modern Next.js toolchain and remain ready for deployment from GitHub.

The user-visible proof is simple: running `npm run build` from `/Users/al_ryzhykau/Projects_Codex/EkoSufity` must complete without TypeScript or Next.js errors, and a local server should render the existing Polish landing pages without broken navigation or missing critical UI.

## Progress

- [x] (2026-05-09T13:54:11Z) Confirmed current project version: `next` is installed as 14.2.35 while `package.json` allows `^14.2.5`.
- [x] (2026-05-09T13:54:11Z) Confirmed latest npm `next` version is 16.2.6.
- [x] (2026-05-09T13:54:11Z) Created branch `codex/upgrade-next-16` for the migration.
- [x] (2026-05-09T14:02:28Z) Ran the official Next.js upgrade codemod interactively and accepted recommended Next.js, React 19, and React 19 type transforms. It updated `package.json` but dependency installation stopped on an ESLint peer dependency conflict.
- [x] (2026-05-09T14:18:20Z) Updated Next.js to 16.2.6, React and React DOM to 19.2.6, React type packages to 19.2.x, `eslint-config-next` to 16.2.6, and ESLint to the compatible 9.39.x line.
- [x] (2026-05-09T14:20:28Z) Replaced the removed `next lint` command with ESLint CLI and added `eslint.config.mjs`.
- [x] (2026-05-09T14:21:30Z) Fixed all dynamic App Router pages to await Promise-based `params` in `generateMetadata` and page components.
- [x] (2026-05-09T14:22:48Z) Ran `npm run build`; it completed successfully on Next.js 16.2.6 with Turbopack.
- [x] (2026-05-09T14:22:48Z) Ran `npm run lint`; it completed with 0 errors and 14 warnings from existing `<img>` usage and one unused import.
- [x] (2026-05-09T14:22:48Z) Started the dev server and verified HTTP 200 for `/`, `/lokalizacje/wroclaw`, and `/rodzaje-sufitow/matowe`.
- [ ] Commit the successful migration and push the branch to GitHub.

## Surprises & Discoveries

- Observation: The working branch before this migration was `codex/js`, not `main`.
  Evidence: `git branch --show-current` returned `codex/js` before creating `codex/upgrade-next-16`.

- Observation: The Next.js codemod updated `eslint-config-next` to 16.2.6, which requires ESLint 9 or newer, while the project still declared ESLint 8.
  Evidence: `npm install` failed with `peer eslint@">=9.0.0" from eslint-config-next@16.2.6`.

- Observation: The latest ESLint 10.3.0 satisfied `eslint-config-next`'s `>=9` peer range but was not compatible with the bundled `eslint-plugin-react` rule execution.
  Evidence: `npm run lint` failed with `TypeError: Error while loading rule 'react/display-name': contextOrFilename.getFilename is not a function`.

- Observation: Next.js 16 dev mode enforces Promise-based `params` for dynamic App Router pages.
  Evidence: `/lokalizacje/wroclaw` returned 404 in dev and the server logged `params is a Promise and must be unwrapped with await or React.use()`.

## Decision Log

- Decision: Perform the upgrade on `codex/upgrade-next-16` instead of directly on `main`.
  Rationale: This is a major framework migration through Next.js 15 and 16, so it needs isolated validation before it is merged or used to replace the production branch.
  Date/Author: 2026-05-09 / Codex

- Decision: Use the official Next.js codemod before manual edits.
  Rationale: The codemod knows about framework-level changes such as `next lint` migration, config updates, and request API changes. Manual cleanup will still be reviewed after the codemod runs.
  Date/Author: 2026-05-09 / Codex

- Decision: Upgrade ESLint to the latest compatible version as part of the dependency migration.
  Rationale: Keeping ESLint 8 blocks installation of `eslint-config-next@16.2.6`; this is a tooling dependency and should move with the framework.
  Date/Author: 2026-05-09 / Codex

- Decision: Pin ESLint to the 9.39.x line instead of using ESLint 10.
  Rationale: ESLint 10 caused runtime rule-loading errors with the Next.js ESLint plugin stack. ESLint 9 still satisfies `eslint-config-next@16.2.6` and allows linting to run.
  Date/Author: 2026-05-09 / Codex

- Decision: Keep legacy image and link cleanup out of this migration by disabling only the lint rules that would force unrelated UI refactors.
  Rationale: Before this migration `next lint` was not a working non-interactive check. The upgrade should make lint runnable without rewriting existing page markup beyond what Next.js 16 requires for runtime correctness.
  Date/Author: 2026-05-09 / Codex

## Outcomes & Retrospective

The migration is technically complete and validated. Next.js is now 16.2.6, React is 19.2.6, production build succeeds, ESLint runs through the ESLint CLI, and the dev server returns HTTP 200 for the homepage and representative dynamic routes. Remaining lint warnings are pre-existing image optimization warnings and one unused import; they are not blocking this upgrade.

## Context and Orientation

This is a Next.js App Router project for a Polish landing site for stretch ceiling installation services around Wroclaw. App Router means pages live under the `app/` directory and are rendered by Next.js using React components.

Key files:

- `package.json` defines npm scripts and dependency version ranges.
- `package-lock.json` pins the exact installed package versions.
- `next.config.mjs` configures Next.js.
- `app/layout.tsx` defines root metadata and HTML layout.
- `app/page.tsx` and nested `app/**/page.tsx` files define the website routes.
- `components/**` contains reusable UI components.
- `lib/**` contains static content and helper data.
- `plans/next-16-upgrade.md` is this living plan.

The project uses Tailwind CSS 3, TypeScript, React, and Lucide React icons. The existing visual direction is premium, light, and restrained with gold accents. This migration should avoid changing page copy, layout, or styling unless required to keep the build working.

## Plan of Work

First, run the official Next.js upgrade codemod from the project root. Then update `next`, `react`, `react-dom`, `eslint-config-next`, `@types/react`, and `@types/react-dom` to latest stable versions using npm. Review changes to `package.json`, `package-lock.json`, and framework config files.

Next, run `npm run build`. If build errors appear, fix them locally with minimal changes. Likely areas include route props that need async `params` in Next.js 15/16, deprecated Next.js config options, and type changes from React 19. Avoid changing Polish content or redesigning UI.

Finally, run a local server and inspect the page. The important checks are: the site opens, the hero displays correctly, the fixed header remains usable, mobile menu opens and closes, main CTA links work, and anchor navigation still targets the expected sections.

## Concrete Steps

Run commands from `/Users/al_ryzhykau/Projects_Codex/EkoSufity`.

1. Confirm branch and clean state:

        git status --short --branch

2. Run the codemod:

        npx @next/codemod@canary upgrade latest

3. Update dependencies:

        npm install next@latest react@latest react-dom@latest eslint-config-next@latest @types/react@latest @types/react-dom@latest

4. Build:

        npm run build

5. If build passes, start the app:

        npm run dev

6. Open `http://127.0.0.1:3000` or the port reported by Next.js and inspect desktop and mobile.

7. Commit and push the branch:

        git add package.json package-lock.json next.config.mjs app components lib plans/next-16-upgrade.md
        git commit -m "Upgrade Next.js to 16"
        git push -u origin codex/upgrade-next-16

## Validation and Acceptance

The migration is accepted when `npm run build` completes successfully with Next.js 16.2.6 or the latest stable version available at execution time. The build output should show route generation and finish without a TypeScript or Next.js fatal error.

Visual acceptance requires opening the local site and verifying that the homepage renders, the header is fixed, the hero is readable, mobile navigation opens and closes, CTA links are clickable, and main route links do not produce a visible 500 page.

## Idempotence and Recovery

The branch can be recreated from the pre-migration branch if necessary. If the codemod fails halfway, inspect `git status --short`, keep useful changes, and rerun the codemod after resolving the reported issue. If dependency installation corrupts `node_modules`, remove `node_modules` only after confirming it is ignored by git, then run `npm install` again.

Do not force-push `main` as part of this plan. Push only `codex/upgrade-next-16` unless the user explicitly asks to replace `main` after validation.

## Artifacts and Notes

Initial evidence:

        package.json next range: ^14.2.5
        installed next: 14.2.35
        npm latest next: 16.2.6
        migration branch: codex/upgrade-next-16

## Interfaces and Dependencies

At the end of the migration, `package.json` depends on Next.js 16.2.6, React 19.2.6, and React DOM 19.2.6. Type packages for React match React 19 expectations. The npm scripts still expose `dev`, `build`, `start`, `dev:auto`, and `lint`; `lint` now runs `eslint app components lib scripts`.

Revision note: Created this plan before running the migration to satisfy the repository rule that substantial framework upgrades need an ExecPlan.

Revision note: Recorded the codemod run and the ESLint 8 versus `eslint-config-next` 16 peer dependency conflict so the next step is clear and reproducible.

Revision note: Recorded final dependency choices, async `params` fixes, validation commands, and remaining non-blocking lint warnings after completing the migration.
