# EkoSufity SEO implementation checklist

## Files to place

- [ ] `AGENTS.md` at repository root
- [ ] `src/data/ekoSufityContent.json`
- [ ] `docs/content/eko_sufity_content_implementation_pack.md`

## Metadata

- [ ] `/`
- [ ] `/o-sufitach`
- [ ] `/rodzaje-sufitow`
- [ ] `/rozwiazania`
- [ ] `/ceny`
- [ ] `/realizacje`
- [ ] `/lokalizacje`
- [ ] `/faq`
- [ ] `/kontakt`
- [ ] ceiling type pages
- [ ] solution pages
- [ ] lighting option pages if implemented
- [ ] location pages

For each:

- [ ] unique title
- [ ] unique description
- [ ] canonical
- [ ] Open Graph
- [ ] H1
- [ ] internal links

## Structured data

- [ ] LocalBusiness
- [ ] Service
- [ ] BreadcrumbList
- [ ] FAQPage

## Sitemap/robots

- [ ] sitemap exists
- [ ] robots exists
- [ ] robots points to sitemap
- [ ] sitemap includes all public implemented pages

## Accessibility and UX

- [ ] all images have alt
- [ ] phone is clickable
- [ ] WhatsApp is clickable
- [ ] forms have labels/placeholders
- [ ] CTA visible on mobile
- [ ] no broken links

## Final checks

- [ ] no internal notes visible
- [ ] no Russian text visible on customer pages
- [ ] no false claims about stock/AI images being real projects
- [ ] `npm run build`
- [ ] `npm run lint`
- [ ] `npm run typecheck` if available
- [ ] tests if available
