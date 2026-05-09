# Codex sprint 1: Technical SEO foundation

Implement technical SEO foundations for EkoSufity.

## Scope

1. Inspect project structure and routing.
2. Add or verify:
   - page metadata
   - canonical URLs
   - Open Graph metadata
   - `pl_PL` locale
   - `robots.txt`
   - `sitemap.xml`
   - JSON-LD helpers
3. Add JSON-LD:
   - `LocalBusiness`
   - `BreadcrumbList`
   - `FAQPage` where visible FAQ exists
   - `Service` where service pages exist
4. Use business data from `src/data/ekoSufityContent.json`.
5. Preserve current routes and design.

## Acceptance criteria

- All main public pages have unique titles and descriptions.
- Sitemap includes all implemented public routes.
- Robots file points to sitemap.
- FAQPage schema matches visible FAQ content.
- No customer-facing Russian/internal notes appear.
- Build/lint pass or failures are documented.
