---
name: poland-service-site-master
description: Use when designing, auditing, improving, or implementing a multi-page service-business website for the Polish market, especially local services, renovations, home improvement, stretch ceilings, city landing pages, multilingual PL/UA/RU content, SEO, UI/UX, trust, and conversion strategy.
metadata:
  short-description: Polish service-site UX, SEO, and CRO
---

# Poland Service Site Master

Use this skill to plan, critique, or build a high-converting multi-page service website for the Polish market. Default example niche: selling and installing stretch ceiling systems (`sufity napinane`) for private customers in Poland.

The audience may include:

- Polish customers.
- Ukrainians living in Poland.
- Belarusians living in Poland.

Default business goal: increase qualified leads through phone calls, WhatsApp/Telegram messages, contact forms, and measurement/quote requests while building trust without fake claims.

## Before You Start

If the user did not provide details, infer conservatively and state assumptions. Ask only for missing facts that materially affect the result.

Establish:

1. Service category and actual offer.
2. Target city/region in Poland.
3. Main conversion action: phone, form, WhatsApp, Telegram, booking, quote.
4. Available proof: real photos, reviews, NIP/REGON/KRS, Google Business Profile, certificates, guarantees.
5. Required languages: Polish only, or Polish + Ukrainian + Russian.
6. Whether the task is strategy, Figma/wireframe, code implementation, SEO plan, or audit.

## Core Principle

A Polish local service website should not be only a visual brochure. It should be a trust and decision system:

- clearly say what is offered and where;
- show real work;
- explain the buying/installation process;
- reduce price uncertainty;
- make contact easy on mobile;
- connect pages for SEO and user flow;
- avoid fake reviews, fake guarantees, fake prices, and generic city-page duplication.

## Load The Reference When Needed

For detailed page templates, research notes, Polish copy examples, local-page patterns, SEO checklist, and the full master prompt, read:

`references/poland-service-site-guide.md`

Load it when the user asks for:

- complete site architecture;
- homepage block-by-block strategy;
- service page or city-page templates;
- PL/UA/RU multilingual strategy;
- SEO rules, schema, URL structure, internal linking;
- conversion and trust checklist;
- a full audit or full design brief.

For small questions, use the condensed rules below without loading the full reference.

## Recommended Architecture

Default multi-page structure:

```text
/
/uslugi
/uslugi/sufity-napinane
/uslugi/oswietlenie-led
/rodzaje-sufitow
/rodzaje-sufitow/matowe
/rodzaje-sufitow/polysk
/rodzaje-sufitow/satynowe
/rodzaje-sufitow/podswietlane
/ceny
/realizacje
/realizacje/[slug]
/lokalizacje
/lokalizacje/warszawa
/lokalizacje/wroclaw
/lokalizacje/krakow
/faq
/o-firmie
/kontakt
/poradnik
/poradnik/[slug]
/uk/...
/ru/...
```

Every important page should have:

- page goal;
- search intent;
- unique H1;
- clear first-screen value proposition;
- relevant proof;
- CTA;
- internal links;
- SEO metadata;
- mobile-friendly contact path.

## Homepage Rules

Homepage should include:

1. Hero: service + location/area + result + CTA.
2. Fast proof: real realizations, reviews, business details, experience only if true.
3. Service/category overview.
4. Real portfolio previews.
5. Process explanation.
6. Price explanation through factors, not invented prices.
7. Trust block.
8. FAQ.
9. Final CTA.
10. Contact block.

Polish CTA examples:

```text
Umow bezplatny pomiar
Popros o wycene
Wyslij zdjecie pomieszczenia
Zadzwon i zapytaj o termin
Sprawdz, jaki sufit pasuje do Twojego wnetrza
```

Use `bezplatny` only if the action is truly free.

## Service Page Template

For a service page, include:

- metadata: title and description with service + location if relevant;
- H1: concrete service phrase;
- lead: what the service is, for whom, where;
- main CTA above the fold;
- benefits translated into customer outcomes;
- real photos or relevant visuals;
- process;
- materials/options;
- price factors or quote logic;
- FAQ;
- local relevance;
- internal links to realizations, prices, city page, contact, related services.

Example Polish lead:

```text
Montujemy sufity napinane w mieszkaniach, domach i lokalach we Wroclawiu oraz okolicach. Pomagamy dobrac material, profil i oswietlenie tak, aby sufit pasowal do ukladu pomieszczenia i budzetu.
```

## Local Page Rules

Use for queries like:

```text
Sufity napinane Warszawa
Sufity napinane Wroclaw
Sufity napinane Krakow
```

City pages must be useful, not doorway pages. Add unique local value:

- local hero and CTA;
- actual service availability;
- district/service-area notes where real;
- local realizations or honest substitute: "Zobacz podobne realizacje";
- local FAQ;
- logistical details;
- link to services, prices, realizations, contact.

Avoid pages that only swap city names.

## Conversion Rules

Prioritize:

- clear first screen;
- phone and CTA visible on mobile;
- short form: name, phone, city, message, optional photo;
- WhatsApp/Telegram only if actually monitored;
- real photos;
- transparent process;
- price factors;
- trust details;
- fast page load;
- one primary CTA per page.

Track events where possible:

- phone clicks;
- WhatsApp/Telegram clicks;
- form submissions;
- quote button clicks;
- portfolio interactions.

## Trust Rules

Use only real trust signals:

- company data: name, phone, email, NIP/REGON/KRS if available;
- Google Reviews with a source link if available;
- real realizations;
- before/after photos;
- process photos;
- guarantee terms if documented;
- certificates if real;
- team photos;
- clear terms of cooperation.

Never invent:

- reviews;
- ratings;
- number of projects;
- years of experience;
- guarantees;
- prices;
- certificates;
- partner logos;
- deadlines.

## UI/UX Rules

Use a clean, technical-premium visual style for renovation/home-improvement services:

- real product imagery;
- restrained palette;
- strong CTA contrast;
- readable typography;
- mobile-first layout;
- stable component dimensions;
- accessible contrast;
- sticky mobile contact CTA when useful.

Avoid:

- hero carousels as the main offer;
- stock photos as portfolio;
- instant popups;
- chat widgets that hide CTA;
- heavy animations;
- scroll hijacking;
- vague slogans;
- fake urgency counters.

## Multilingual Rules

Default structure:

```text
/          Polish
/uk/...    Ukrainian
/ru/...    Russian
```

Use separate URLs and hreflang for translated pages. Do not mix languages on one page and do not auto-redirect by IP.

Translate first:

1. Home.
2. Contact.
3. Prices.
4. Services.
5. Top city pages.
6. FAQ.
7. Best poradnik articles.

Use culturally adapted copy, not mechanical translation. Do not use Russian as a substitute for Ukrainian.

## SEO Rules

Implement or recommend:

- simple URLs;
- unique title, description, H1;
- H2/H3 structure by section;
- `LocalBusiness` schema where appropriate;
- `FAQPage` only for visible FAQ;
- `BreadcrumbList`;
- image alt text describing visible content;
- sitemap, robots, canonical;
- Core Web Vitals attention;
- internal linking between home, services, prices, realizations, locations, blog.

Good URL examples:

```text
/uslugi/sufity-napinane
/uslugi/oswietlenie-led
/lokalizacje/wroclaw
/ceny
/poradnik/jaki-sufit-napinany-do-lazienki
```

## Output Format

When the user asks for a plan, audit, or design strategy, respond with:

1. Short conclusion.
2. Audience and objections.
3. Site map.
4. Page-by-page structure.
5. CTA and forms.
6. Trust blocks.
7. SEO: URLs, title/H1 ideas, schema, internal linking.
8. UI/UX: mobile, menu, gallery, forms.
9. Missing client content.
10. Checklist before Figma/code.

Use Russian for explanations unless the user requests another language. Give website copy examples in Polish.

## Final Check

Before finalizing, verify:

- each page has a purpose;
- hero says what, where, and for whom;
- CTA is concrete;
- the form is simple;
- trust signals are real or marked as needed;
- no prices, reviews, guarantees, or claims are fabricated;
- local pages are not duplicates;
- mobile is prioritized;
- SEO matches search intent;
- multilingual pages use separate URLs and hreflang.
