# Codex sprint 4: Local SEO pages and internal linking

Implement and strengthen local landing pages for EkoSufity.

## Scope

Use the `locations` array from `src/data/ekoSufityContent.json`.

For each implemented location page:

- SEO title/description
- H1 and local lead
- badges
- popular solutions
- price link
- contact/WhatsApp CTA
- local FAQ
- links to nearby locations
- BreadcrumbList schema
- LocalBusiness/Service structured data where appropriate

## Location routes in content data

- `/lokalizacje/wroclaw`
- `/lokalizacje/lesnica`
- `/lokalizacje/wroclaw-krzyki`
- `/lokalizacje/wroclaw-fabryczna`
- `/lokalizacje/wroclaw-psie-pole`
- `/lokalizacje/wroclaw-stare-miasto`
- `/lokalizacje/wroclaw-srodmiescie`
- `/lokalizacje/olesnica`
- `/lokalizacje/olawa`
- `/lokalizacje/swidnica`
- `/lokalizacje/dzierzoniow`
- `/lokalizacje/bielawa`
- `/lokalizacje/trzebnica`
- `/lokalizacje/siechnice`
- `/lokalizacje/katy-wroclawskie`
- `/lokalizacje/jelcz-laskowice`
- `/lokalizacje/sroda-slaska`
- `/lokalizacje/strzelin`

If current route format differs, preserve current route format and map content carefully.

## Acceptance criteria

- Location index links to all location pages.
- Each location page has unique copy and metadata.
- Pages do not contain duplicated generic text only.
- Internal links are useful and not excessive.
- Sitemap includes implemented local pages.
- Build/lint pass or failures are documented.
