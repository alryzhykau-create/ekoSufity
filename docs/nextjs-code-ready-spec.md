# EkoSufity: Next.js code-ready spec

Data: 2026-05-24  
Cel: przygotować implementację P0 stron w Next.js na podstawie strategii, copy i Figma-ready briefu

## 1. Założenie techniczne

Rekomendowany stack:

| Obszar | Decyzja |
|---|---|
| Framework | Next.js App Router |
| Język | TypeScript |
| Styling | Tailwind CSS albo CSS Modules z tokenami z `design-concept.md` |
| Routing | statyczne + dynamiczne routes |
| Content | data-driven pliki w `content/` |
| Images | `next/image` |
| Analytics | GA4 / custom events |
| SEO | `generateMetadata`, JSON-LD, sitemap, robots |

## 2. MVP scope

Pierwszy kodowany zakres:

| URL | Priorytet | Źródło copy |
|---|---:|---|
| `/` | P0 | `homepage-copy-pl.md` |
| `/lokalizacje/wroclaw` | P0 | `p0-pages-copy-pl.md` |
| `/ceny` | P0 | `p0-pages-copy-pl.md` |
| `/realizacje` | P0/P1 | `p0-pages-copy-pl.md` |
| `/kontakt` | P0 | `p0-pages-copy-pl.md` |
| `/uslugi/sufity-napinane` | P1 | `content-model.md` + later copy |
| `/uslugi/oswietlenie-led` | P1 | `content-model.md` + later copy |

Nie kodować jeszcze pełnego bloga i wszystkich miast, dopóki P0 template nie jest sprawdzony.

## 3. Struktura projektu

```text
app/
  layout.tsx
  page.tsx
  globals.css
  ceny/
    page.tsx
  kontakt/
    page.tsx
  realizacje/
    page.tsx
  lokalizacje/
    page.tsx
    [city]/
      page.tsx
  uslugi/
    page.tsx
    [slug]/
      page.tsx
  faq/
    page.tsx
  o-firmie/
    page.tsx
  sitemap.ts
  robots.ts

components/
  layout/
    Header.tsx
    Footer.tsx
    MobileStickyCta.tsx
  sections/
    Hero.tsx
    TrustBar.tsx
    PriceIntro.tsx
    AudienceSegments.tsx
    VisualGallery.tsx
    ProcessSteps.tsx
    ServicesGrid.tsx
    OwnerTrust.tsx
    GoogleReviewsPlaceholder.tsx
    FaqSection.tsx
    FinalCta.tsx
  ui/
    Button.tsx
    Card.tsx
    Section.tsx
    Badge.tsx
    Accordion.tsx
    Icon.tsx
  seo/
    JsonLd.tsx
    Breadcrumbs.tsx

content/
  site.ts
  navigation.ts
  cities.ts
  services.ts
  ceiling-types.ts
  faqs.ts
  visual-assets.ts

lib/
  seo/
    metadata.ts
    schema.ts
    sitemap.ts
  analytics/
    events.ts
  utils/
    urls.ts
```

## 4. Content files

### `content/site.ts`

Musi zawierać:

| Pole | Status |
|---|---|
| brand | gotowe |
| serviceLanguages | PL/BY/RU/UA |
| serviceArea | Wrocław + 100 km |
| cta | telefon + WhatsApp |
| offerFacts | pomiar gratis, dojazd gratis, 120 zł/m² warunek MSD |
| warranty | 15/5/2 |
| owner | Białorusin we Wrocławiu |
| contacts | do uzupełnienia |

### `content/cities.ts`

Start:

```text
wroclaw
olawa
olesnica
dlugoleka
trzebnica
swidnica
legnica
walbrzych
```

W MVP kodować dynamic route, ale publikować tylko miasta z gotowym copy/intro.

### `content/visual-assets.ts`

Każdy obraz z `img_arch` musi mieć:

| Pole | Wymagane |
|---|---|
| src | tak |
| alt | tak |
| type | `visualization` |
| label | `Wizualizacja przykładowego efektu` |
| room | jeśli wiadomo |

Nie używać `type: "realization"` bez realnego zdjęcia pracy.

## 5. Global layout

### `app/layout.tsx`

Wymagane:

| Element | Decyzja |
|---|---|
| html lang | `pl` |
| metadataBase | `https://ekosufity.pl` po deployu |
| fonts | Playfair Display + Montserrat |
| body | Header, main, Footer, MobileStickyCta |
| analytics | po dodaniu GA4 |

### Header

Desktop:

```text
Logo
Usługi
Ceny
Realizacje
Lokalizacje
FAQ
Kontakt
Telefon
WhatsApp
```

Mobile:

```text
Logo
Menu icon
Sticky bottom: Zadzwoń + WhatsApp
```

## 6. Page implementation

### Homepage `/`

Sections in order:

```text
Hero
TrustBar
PriceIntro
AudienceSegments
VisualGallery
ProcessSteps
ServicesGrid
OwnerTrust
GoogleReviewsPlaceholder
FaqSection
FinalCta
```

Content source:

```text
docs/homepage-copy-pl.md
```

Important:

| Rule | Status |
|---|---|
| H1 exact from copy | required |
| Hero image labeled as visualization | required |
| No fake reviews | required |
| Warranty 15/5/2 | required |
| Mobile sticky CTA | required |

### City page `/lokalizacje/[city]`

Template sections:

```text
LocalHero
LocalTrust
LocalPrice
PopularSolutions
VisualGallery
LocalProcess
LocalFaq
NearbyCities
FinalCta
```

Implementation:

| Function | Purpose |
|---|---|
| `generateStaticParams()` | from `cities.ts` |
| `generateMetadata()` | city title/description |
| `notFound()` | unknown city |
| JSON-LD | LocalBusiness + Service + BreadcrumbList |

### Ceny `/ceny`

Sections:

```text
PriceHero
BasePriceExplanation
PriceFactors
EstimateCta
WhyMeasurement
PriceFaq
FinalCta
```

Important:

```text
120 zł/m² = sufit MSD, prostokąt, 4 narożniki, bez dodatków.
```

### Realizacje `/realizacje`

Sections:

```text
GalleryHero
VisualizationNotice
GalleryFilters
VisualGrid
RealizationCaseTemplateInfo
FinalCta
```

Important:

| Rule | Decyzja |
|---|---|
| `img_arch` | only visualization |
| no real city/metraż claims | until confirmed |
| label every image | required |

### Kontakt `/kontakt`

Sections:

```text
ContactHero
ContactCards
ServiceArea
Languages
CompanyData
ContactFaq
FinalCta
```

Contacts currently blocked by missing:

```text
phone
WhatsApp
email
NIP/REGON
Google Business Profile URL
```

Use placeholders only in code comments/content data, not visible fake values.

## 7. Components API

### `Button`

```ts
type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  eventName?: string;
  eventParams?: Record<string, string>;
};
```

### `Hero`

```ts
type HeroProps = {
  eyebrow?: string;
  title: string;
  lead: string;
  facts?: string[];
  primaryCta: Cta;
  secondaryCta?: Cta;
  image?: VisualAsset;
};
```

### `FaqSection`

```ts
type FaqSectionProps = {
  items: FaqItem[];
  schema?: boolean;
};
```

### `VisualGallery`

```ts
type VisualGalleryProps = {
  items: VisualAsset[];
  showFilters?: boolean;
};
```

## 8. Styling implementation

### CSS variables

```css
:root {
  --color-bg: #FAF8F4;
  --color-bg-alt: #F1EEE8;
  --color-surface: #FFFFFF;
  --color-text: #171717;
  --color-muted: #625D55;
  --color-border: #DDD7CE;
  --color-gold: #CDA14A;
  --color-gold-dark: #A97924;
  --color-black: #1E1E1E;
  --color-success: #4F7A5A;
  --radius-card: 8px;
  --container: 1200px;
}
```

### Layout rules

| Element | Rule |
|---|---|
| sections | responsive padding |
| cards | radius 8px |
| images | fixed aspect-ratio |
| buttons | min-height 44px |
| mobile bottom CTA | body padding-bottom to avoid overlap |

## 9. SEO implementation

### Metadata

Use:

```ts
generateMetadata()
```

For:

| Page type | Source |
|---|---|
| home | static |
| city | `cities.ts` |
| service | `services.ts` |
| prices/contact/realizacje | static content |

### JSON-LD

Use helpers:

```text
buildLocalBusinessSchema()
buildServiceSchema()
buildBreadcrumbSchema()
buildFaqSchema()
```

FAQ schema only if FAQ is visible on page.

### Sitemap

Generate from:

```text
static routes
cities
services
ceilingTypes
future articles
```

## 10. Analytics implementation

Events:

| Event | Trigger |
|---|---|
| `click_phone` | every `tel:` click |
| `click_whatsapp` | every WhatsApp click |
| `click_email` | every mailto click |
| `start_price_estimate` | calculator interaction |
| `click_google_reviews` | Google reviews link |

Recommended helper:

```ts
trackEvent(name, params)
```

Buttons should accept event props.

## 11. Accessibility

| Check | Requirement |
|---|---|
| Buttons | accessible labels |
| Contrast | gold on white/dark must pass |
| Focus states | visible |
| Images | alt text |
| Accordions | keyboard accessible |
| Sticky CTA | not covering content |
| H1 | one per page |

## 12. Performance

| Area | Requirement |
|---|---|
| Hero image | optimized, priority only for LCP |
| Gallery | lazy load |
| Fonts | no layout shift |
| JS | client components only where needed |
| Animations | subtle, no scroll hijacking |
| CSS | avoid heavy effects |

## 13. Data blockers before production

| Data | Blocks |
|---|---|
| Phone | CTA, schema, contact |
| WhatsApp link | CTA, analytics, social/mobile flow |
| Email | contact, schema |
| Google Business Profile URL | reviews block |
| NIP/REGON/company data | footer, LocalBusiness |
| Real work photos | realizacje proof |

## 14. Development order

| Step | Task |
|---:|---|
| 1 | Scaffold Next.js if missing |
| 2 | Add design tokens, fonts, global layout |
| 3 | Add content files |
| 4 | Build shared UI components |
| 5 | Build homepage |
| 6 | Build `/ceny`, `/kontakt`, `/realizacje` |
| 7 | Build dynamic city page and `/lokalizacje/wroclaw` |
| 8 | Add metadata and schema |
| 9 | Add sitemap and robots |
| 10 | Add analytics events |
| 11 | Browser QA desktop/mobile |
| 12 | Prepare redirects/migration |

## 15. Acceptance checklist

| Check | Required |
|---|---|
| Home loads fast and first screen is clear | yes |
| CTA phone + WhatsApp visible desktop/mobile | yes |
| No fake contact values | yes |
| No fake reviews | yes |
| `img_arch` labeled as visualization | yes |
| Price condition visible near 120 zł/m² | yes |
| Warranty 15/5/2 everywhere | yes |
| H1/metadata unique | yes |
| Mobile sticky CTA does not overlap content | yes |
| Lighthouse/basic browser QA | yes |

