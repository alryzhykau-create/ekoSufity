# EkoSufity: content model dla Next.js i SEO

Data: 2026-05-24  
Podstawa: `business-facts.md`, `audience-analysis.md`, `site-and-page-structure.md`

## 1. Cel content modelu

Content model zamienia strategię i strukturę strony w dane, które można wykorzystać w Next.js.

Dzięki temu:

| Korzyść | Co to daje |
|---|---|
| Jedno źródło prawdy | Cena, gwarancja, CTA i obszar działania nie są kopiowane ręcznie w 20 miejscach |
| Skalowanie local SEO | Strony miast powstają z jednego szablonu i danych `cities` |
| Spójność copy | CTA, trust-faktory i FAQ mają jedną logikę |
| Łatwiejsze SEO | Metadata, schema i sitemap można generować z danych |
| Mniej thin content | Każde miasto/usługa ma pola wymagające unikalnej treści |

## 2. Proponowana struktura plików

```text
content/
  site.ts
  cities.ts
  services.ts
  ceiling-types.ts
  faqs.ts
  audience.ts
  visual-assets.ts
  internal-links.ts
  navigation.ts
```

## 3. `site.ts`

Globalne fakty firmy i komunikaty używane w całym serwisie.

```ts
export const site = {
  brand: "EkoSufity",
  primaryLanguage: "pl",
  serviceLanguages: ["pl", "be", "ru", "uk"],
  serviceArea: {
    baseCity: "Wrocław",
    radiusKm: 100,
    region: "Dolnośląskie",
  },
  cta: {
    primary: "Zadzwoń i umów bezpłatny pomiar",
    secondary: "Napisz na WhatsApp",
  },
  offerFacts: {
    freeMeasurement: true,
    freeTravelRadiusKm: 100,
    basePriceLabel: "od ok. 120 zł/m²",
    basePriceCondition:
      "dla sufitu MSD w prostym prostokątnym pomieszczeniu z 4 narożnikami, bez dodatkowych elementów",
  },
  warranty: {
    canvasYears: 15,
    installationYears: 5,
    ledYears: 2,
  },
  owner: {
    origin: "Białoruś",
    trustCopy:
      "Jestem Białorusinem mieszkającym i pracującym we Wrocławiu. Osobiście odpowiadam za pomiar, doradztwo i jakość montażu.",
  },
  contacts: {
    phone: null,
    whatsapp: null,
    email: null,
    googleBusinessProfileUrl: null,
    nip: null,
    regon: null,
  },
} as const;
```

### Pola do uzupełnienia

| Pole | Status |
|---|---|
| `contacts.phone` | do uzupełnienia |
| `contacts.whatsapp` | do uzupełnienia |
| `contacts.email` | do uzupełnienia |
| `contacts.googleBusinessProfileUrl` | do uzupełnienia |
| `contacts.nip` | do uzupełnienia |
| `contacts.regon` | do uzupełnienia |

## 4. `cities.ts`

Model dla stron `/lokalizacje/[city]`.

```ts
export type City = {
  slug: string;
  name: string;
  priority: "P0" | "P1" | "P2";
  h1: string;
  title: string;
  description: string;
  intro: string;
  nearbyCities: string[];
  localFaq: string[];
  recommendedServices: string[];
};
```

### Startowy zestaw miast

```ts
export const cities: City[] = [
  {
    slug: "wroclaw",
    name: "Wrocław",
    priority: "P0",
    h1: "Sufity napinane Wrocław - bezpłatny pomiar i montaż",
    title: "Sufity napinane Wrocław - pomiar i montaż | EkoSufity",
    description:
      "Sufity napinane we Wrocławiu: bezpłatny pomiar, dojazd gratis, cena od ok. 120 zł/m² dla prostego sufitu MSD. Telefon i WhatsApp.",
    intro:
      "Montujemy sufity napinane we Wrocławiu i okolicach. Pomiar jest bezpłatny, a dokładną cenę podajemy po ustaleniu zakresu prac.",
    nearbyCities: ["olawa", "olesnica", "dlugoleka", "trzebnica"],
    localFaq: ["measurement", "travel", "base-price", "warranty", "whatsapp"],
    recommendedServices: ["sufity-napinane", "oswietlenie-led", "linie-swietlne"],
  },
  {
    slug: "olawa",
    name: "Oława",
    priority: "P1",
    h1: "Sufity napinane Oława - pomiar i montaż",
    title: "Sufity napinane Oława - bezpłatny pomiar | EkoSufity",
    description:
      "Montaż sufitów napinanych w Oławie i okolicy. Bezpłatny pomiar, dojazd gratis do 100 km od Wrocławia, kontakt telefoniczny i WhatsApp.",
    intro:
      "Obsługujemy Oławę i okolice w ramach dojazdu do 100 km od Wrocławia. Pomagamy dobrać sufit, profil i oświetlenie do pomieszczenia.",
    nearbyCities: ["wroclaw", "olesnica", "brzeg"],
    localFaq: ["measurement", "travel", "base-price", "timeline"],
    recommendedServices: ["sufity-napinane", "oswietlenie-led"],
  },
  {
    slug: "olesnica",
    name: "Oleśnica",
    priority: "P1",
    h1: "Sufity napinane Oleśnica - pomiar i montaż",
    title: "Sufity napinane Oleśnica - montaż i wycena | EkoSufity",
    description:
      "Sufity napinane w Oleśnicy: bezpłatny pomiar, dojazd gratis, wycena po pomiarze i montaż z gwarancją.",
    intro:
      "Wykonujemy sufity napinane w Oleśnicy, mieszkaniach, domach i lokalach. Dojeżdżamy bezpłatnie w promieniu 100 km od Wrocławia.",
    nearbyCities: ["wroclaw", "dlugoleka", "trzebnica"],
    localFaq: ["measurement", "travel", "base-price", "warranty"],
    recommendedServices: ["sufity-napinane", "oswietlenie-led"],
  },
  {
    slug: "dlugoleka",
    name: "Długołęka",
    priority: "P1",
    h1: "Sufity napinane Długołęka - pomiar i montaż",
    title: "Sufity napinane Długołęka - bezpłatny pomiar | EkoSufity",
    description:
      "Montaż sufitów napinanych w Długołęce. Bezpłatny pomiar, dojazd gratis i wycena po ustaleniu zakresu prac.",
    intro:
      "Obsługujemy Długołękę i okolice Wrocławia. To dobry wybór dla mieszkań, domów i nowych nieruchomości w trakcie wykończenia.",
    nearbyCities: ["wroclaw", "olesnica", "trzebnica"],
    localFaq: ["measurement", "travel", "base-price", "whatsapp"],
    recommendedServices: ["sufity-napinane", "oswietlenie-led"],
  },
  {
    slug: "trzebnica",
    name: "Trzebnica",
    priority: "P1",
    h1: "Sufity napinane Trzebnica - pomiar i montaż",
    title: "Sufity napinane Trzebnica - montaż | EkoSufity",
    description:
      "Sufity napinane w Trzebnicy i okolicy. Dojazd gratis do 100 km, bezpłatny pomiar, gwarancja 15/5/2.",
    intro:
      "Montujemy sufity napinane w Trzebnicy i okolicznych miejscowościach. Doradzamy materiał, profil i oświetlenie.",
    nearbyCities: ["wroclaw", "olesnica", "dlugoleka"],
    localFaq: ["measurement", "travel", "base-price"],
    recommendedServices: ["sufity-napinane", "oswietlenie-led"],
  },
  {
    slug: "swidnica",
    name: "Świdnica",
    priority: "P1",
    h1: "Sufity napinane Świdnica - pomiar i montaż",
    title: "Sufity napinane Świdnica - wycena i montaż | EkoSufity",
    description:
      "Montaż sufitów napinanych w Świdnicy. Bezpłatny pomiar, dojazd gratis do 100 km od Wrocławia, telefon i WhatsApp.",
    intro:
      "W Świdnicy wykonujemy sufity napinane do mieszkań, domów i lokali komercyjnych. Dokładną cenę podajemy po pomiarze.",
    nearbyCities: ["walbrzych", "swiebodzice", "wroclaw"],
    localFaq: ["measurement", "travel", "base-price", "warranty"],
    recommendedServices: ["sufity-napinane", "oswietlenie-led", "linie-swietlne"],
  },
  {
    slug: "legnica",
    name: "Legnica",
    priority: "P1",
    h1: "Sufity napinane Legnica - pomiar i montaż",
    title: "Sufity napinane Legnica - montaż i wycena | EkoSufity",
    description:
      "Sufity napinane w Legnicy: pomiar, wycena, montaż, LED i gwarancja. Dojazd gratis w promieniu 100 km od Wrocławia.",
    intro:
      "Obsługujemy Legnicę w ramach obszaru do 100 km od Wrocławia. Montujemy proste sufity MSD i bardziej złożone projekty.",
    nearbyCities: ["wroclaw", "lubin", "glogow"],
    localFaq: ["measurement", "travel", "base-price", "warranty"],
    recommendedServices: ["sufity-napinane", "oswietlenie-led"],
  },
  {
    slug: "walbrzych",
    name: "Wałbrzych",
    priority: "P1",
    h1: "Sufity napinane Wałbrzych - pomiar i montaż",
    title: "Sufity napinane Wałbrzych - montaż | EkoSufity",
    description:
      "Montaż sufitów napinanych w Wałbrzychu. Bezpłatny pomiar, dojazd gratis, wycena po pomiarze i gwarancja.",
    intro:
      "Wykonujemy sufity napinane w Wałbrzychu i okolicy: mieszkania, domy, lokale oraz pomieszczenia z oświetleniem LED.",
    nearbyCities: ["swidnica", "swiebodzice", "wroclaw"],
    localFaq: ["measurement", "travel", "base-price", "led"],
    recommendedServices: ["sufity-napinane", "oswietlenie-led", "linie-swietlne"],
  },
];
```

### Miasta P2 do dodania w kolejnym pakiecie

| Slug | Miasto |
|---|---|
| `lubin` | Lubin |
| `glogow` | Głogów |
| `jelenia-gora` | Jelenia Góra |
| `brzeg` | Brzeg |
| `swiebodzice` | Świebodzice |

## 5. `services.ts`

Model dla stron `/uslugi/[slug]`.

```ts
export type Service = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  priority: "P0" | "P1" | "P2";
  summary: string;
  benefits: string[];
  targetSegments: string[];
  relatedServices: string[];
  faq: string[];
};
```

```ts
export const services: Service[] = [
  {
    slug: "sufity-napinane",
    name: "Sufity napinane",
    h1: "Sufity napinane z montażem",
    title: "Sufity napinane z montażem Wrocław | EkoSufity",
    description:
      "Montaż sufitów napinanych we Wrocławiu i do 100 km od miasta. Bezpłatny pomiar, dojazd gratis, gwarancja 15/5/2.",
    priority: "P0",
    summary:
      "Montujemy sufity napinane dowolnej złożoności - od prostych sufitów MSD po projekty z LED, liniami świetlnymi i dodatkowymi detalami.",
    benefits: ["Równa powierzchnia", "Czysty montaż", "Możliwość LED", "Gwarancja 15/5/2"],
    targetSegments: ["mieszkania", "domy", "remont", "lokale", "restauracje", "baseny"],
    relatedServices: ["oswietlenie-led", "linie-swietlne", "karnisze-sufitowe"],
    faq: ["base-price", "measurement", "travel", "warranty", "wet-rooms"],
  },
  {
    slug: "oswietlenie-led",
    name: "Oświetlenie LED",
    h1: "Sufity napinane z oświetleniem LED",
    title: "Sufity napinane z LED Wrocław | EkoSufity",
    description:
      "Oświetlenie LED do sufitów napinanych: linie świetlne, światło obwodowe, punkty i efekty translucent. Gwarancja 2 lata na LED.",
    priority: "P1",
    summary:
      "Dobieramy oświetlenie LED do układu pomieszczenia, efektu wizualnego i budżetu.",
    benefits: ["Efekt premium", "Lepszy klimat wnętrza", "Możliwość ukrycia światła", "2 lata gwarancji na LED"],
    targetSegments: ["mieszkania", "domy", "restauracje", "baseny", "lokale"],
    relatedServices: ["linie-swietlne", "sufity-napinane", "karnisze-sufitowe"],
    faq: ["led-warranty", "led-price", "led-service", "whatsapp"],
  },
  {
    slug: "linie-swietlne",
    name: "Linie świetlne",
    h1: "Linie świetlne w suficie napinanym",
    title: "Linie świetlne w suficie napinanym | EkoSufity",
    description:
      "Projekt i montaż linii świetlnych w sufitach napinanych. Wycena po pomiarze, kontakt telefoniczny i WhatsApp.",
    priority: "P1",
    summary:
      "Linie świetlne pozwalają połączyć sufit napinany z dekoracyjnym i funkcjonalnym światłem.",
    benefits: ["Nowoczesny efekt", "Możliwość strefowania światła", "Dobre do salonu i lokali", "Projekt dopasowany do wnętrza"],
    targetSegments: ["mieszkania", "domy", "restauracje", "lokale"],
    relatedServices: ["oswietlenie-led", "sufity-napinane"],
    faq: ["led-price", "led-service", "base-price"],
  },
  {
    slug: "karnisze-sufitowe",
    name: "Ukryte karnisze",
    h1: "Ukryte karnisze w suficie napinanym",
    title: "Ukryte karnisze w suficie napinanym | EkoSufity",
    description:
      "Ukryte karnisze i detale przy suficie napinanym. Rozwiązania do mieszkań, domów i lokali.",
    priority: "P1",
    summary:
      "Ukryty karnisz porządkuje linię okna i pozwala uzyskać czysty, nowoczesny efekt.",
    benefits: ["Czysta linia przy oknie", "Efekt premium", "Dobre do salonu i sypialni", "Możliwość połączenia z LED"],
    targetSegments: ["mieszkania", "domy", "remont"],
    relatedServices: ["sufity-napinane", "oswietlenie-led"],
    faq: ["base-price", "measurement", "whatsapp"],
  },
];
```

## 6. `ceiling-types.ts`

Model dla `/rodzaje-sufitow/[slug]`.

```ts
export const ceilingTypes = [
  {
    slug: "matowe",
    name: "Matowe",
    h1: "Sufity napinane matowe",
    summary: "Spokojny, uniwersalny efekt podobny do klasycznego równego sufitu.",
    bestFor: ["mieszkania", "domy", "salony", "sypialnie"],
  },
  {
    slug: "satynowe",
    name: "Satynowe",
    h1: "Sufity napinane satynowe",
    summary: "Delikatny połysk między matem a mocnym odbiciem.",
    bestFor: ["mieszkania", "domy", "nowoczesne wnętrza"],
  },
  {
    slug: "blyszczace",
    name: "Błyszczące",
    h1: "Sufity napinane błyszczące",
    summary: "Efekt odbicia i optycznego powiększenia przestrzeni.",
    bestFor: ["mniejsze pomieszczenia", "łazienki", "wnętrza dekoracyjne"],
  },
  {
    slug: "translucent",
    name: "Translucent",
    h1: "Sufity napinane translucent",
    summary: "Podświetlany sufit jako efekt świetlny i dekoracyjny.",
    bestFor: ["restauracje", "salony", "baseny", "lokale"],
  },
  {
    slug: "gwiazdziste-niebo",
    name: "Gwiaździste niebo",
    h1: "Sufit napinany gwiaździste niebo",
    summary: "Dekoracyjny efekt świetlny do wybranych pomieszczeń.",
    bestFor: ["sypialnie", "pokoje dziecięce", "strefy relaksu"],
  },
];
```

## 7. `faqs.ts`

FAQ jako dane wielokrotnego użytku.

```ts
export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  appliesTo: Array<"home" | "city" | "prices" | "service" | "led" | "contact">;
};
```

```ts
export const faqs: FaqItem[] = [
  {
    id: "measurement",
    question: "Czy pomiar jest bezpłatny?",
    answer: "Tak. Pomiar jest bezpłatny, bez dodatkowych opłat.",
    appliesTo: ["home", "city", "prices", "contact"],
  },
  {
    id: "travel",
    question: "Czy dojazd jest płatny?",
    answer: "Dojazd jest gratis do 100 km od Wrocławia.",
    appliesTo: ["home", "city", "contact"],
  },
  {
    id: "base-price",
    question: "Od czego zależy cena sufitu napinanego?",
    answer:
      "Cena bazowa od ok. 120 zł/m² dotyczy sufitu MSD w prostym prostokątnym pomieszczeniu z 4 narożnikami, bez dodatkowych elementów. Końcowa cena zależy od metrażu, liczby narożników, oświetlenia LED, kształtu pomieszczenia i zakresu prac.",
    appliesTo: ["home", "city", "prices", "service"],
  },
  {
    id: "warranty",
    question: "Jaką gwarancję daje EkoSufity?",
    answer:
      "Gwarancja wynosi 15 lat na płótno, 5 lat na montaż i 2 lata na oświetlenie LED.",
    appliesTo: ["home", "city", "service", "contact"],
  },
  {
    id: "whatsapp",
    question: "Czy można wysłać zdjęcia przez WhatsApp?",
    answer:
      "Tak. WhatsApp jest jednym z głównych kanałów kontaktu. Możesz wysłać zdjęcie pomieszczenia, wymiary i pytania do wstępnej konsultacji.",
    appliesTo: ["home", "city", "prices", "contact", "led"],
  },
  {
    id: "led-warranty",
    question: "Jaka jest gwarancja na oświetlenie LED?",
    answer: "Na oświetlenie LED udzielamy 2 lata gwarancji.",
    appliesTo: ["led", "service", "home"],
  },
  {
    id: "wet-rooms",
    question: "Czy sufit napinany nadaje się do łazienki lub basenu?",
    answer:
      "Sufity napinane są często wybierane do pomieszczeń wilgotnych, ale dobór rozwiązania powinien zostać potwierdzony po ocenie warunków i zakresu prac.",
    appliesTo: ["service", "home", "city"],
  },
];
```

## 8. `visual-assets.ts`

Ważne: `img_arch` to wizualizacje, nie realne realizacje.

```ts
export type VisualAsset = {
  id: string;
  src: string;
  alt: string;
  type: "visualization" | "realization";
  room?: "salon" | "kuchnia" | "lazienka" | "mieszkanie" | "lokal" | "basen";
  label: string;
};
```

Zasada:

| Typ | Jak pokazywać |
|---|---|
| `visualization` | `Wizualizacja przykładowego efektu`, `Inspiracja do projektu` |
| `realization` | Tylko po dostarczeniu realnych zdjęć prac |

## 9. `navigation.ts`

```ts
export const mainNavigation = [
  { label: "Usługi", href: "/uslugi" },
  { label: "Ceny", href: "/ceny" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Lokalizacje", href: "/lokalizacje" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export const mobileCta = [
  { label: "Zadzwoń", type: "phone" },
  { label: "WhatsApp", type: "whatsapp" },
];
```

## 10. Internal linking rules

| Strona | Linkuje do |
|---|---|
| `/` | `/ceny`, `/realizacje`, `/lokalizacje/wroclaw`, `/uslugi/sufity-napinane`, `/uslugi/oswietlenie-led`, `/kontakt` |
| `/ceny` | `/kontakt`, `/uslugi/sufity-napinane`, `/uslugi/oswietlenie-led`, top city pages |
| `/lokalizacje/[city]` | `/ceny`, `/kontakt`, `/uslugi/sufity-napinane`, `/uslugi/oswietlenie-led`, nearby cities |
| `/uslugi/sufity-napinane` | `/ceny`, `/realizacje`, `/lokalizacje/wroclaw`, LED, rodzaje sufitow |
| `/uslugi/oswietlenie-led` | `/ceny`, `/realizacje`, `/kontakt`, linie swietlne |
| `/realizacje` | uslugi, miasta, kontakt |
| `/o-firmie` | kontakt, opinie, gwarancja, homepage |

## 11. Minimalny MVP danych do kodu

Do pierwszego wdrożenia wystarczy:

| Plik | Minimalna zawartość |
|---|---|
| `site.ts` | brand, CTA, cena, gwarancja, obszar, kontakty |
| `cities.ts` | Wrocław + 7 miast P1 |
| `services.ts` | sufity napinane, LED, linie świetlne, karnisze |
| `faqs.ts` | 7 pytań z tego dokumentu |
| `visual-assets.ts` | wizualizacje z `img_arch` oznaczone jako `visualization` |
| `navigation.ts` | header + mobile CTA |

