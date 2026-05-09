# Codex sprint 2: Content implementation

Use `src/data/ekoSufityContent.json` as the source of truth and implement the Polish content across the current EkoSufity site.

## Scope

Update visible content for:

- `/`
- `/o-sufitach`
- `/rodzaje-sufitow`
- all existing ceiling type pages
- `/rozwiazania`
- all existing solution pages
- `/ceny`
- `/realizacje`
- `/lokalizacje`
- all existing location pages
- `/faq`
- `/kontakt`

## Rules

- Do not redesign components unless necessary.
- Reuse existing UI patterns.
- Keep headings logical.
- Use Polish copy from JSON.
- Preserve contact data.
- Add internal links where natural.
- Avoid keyword stuffing.

## Acceptance criteria

- All main pages render new Polish copy.
- All cards use correct titles/leads/prices/CTAs.
- FAQ categories render correctly.
- No Markdown task content appears on the website.
- Build/lint pass or failures are documented.
