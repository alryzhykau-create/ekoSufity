# EkoSufity: SEO logic, metadata, schema i analityka

Data: 2026-05-24  
Podstawa: `business-facts.md`, `audience-analysis.md`, `site-and-page-structure.md`, `content-model.md`

## 1. Cel SEO

SEO ma wspierać sprzedaż, nie tylko ruch. Priorytetem są zapytania z intencją kontaktu:

```text
sufity napinane + miasto
sufity napinane + cena
montaż sufitów napinanych + miasto
sufit napinany z LED + miasto
```

Główne konwersje:

| Konwersja | Priorytet | Event |
|---|---:|---|
| Klik telefonu | P0 | `click_phone` |
| Klik WhatsApp | P0 | `click_whatsapp` |
| Klik e-mail | P1 | `click_email` |
| Wysłanie formularza, jeśli będzie | P1 | `submit_lead_form` |
| Klik kalkulatora / wyceny | P1 | `start_price_estimate` |

## 2. URL strategy

| Typ strony | Pattern | Przykład |
|---|---|---|
| Home | `/` | `/` |
| Ceny | `/ceny` | `/ceny` |
| Kontakt | `/kontakt` | `/kontakt` |
| FAQ | `/faq` | `/faq` |
| O firmie | `/o-firmie` | `/o-firmie` |
| Realizacje | `/realizacje` | `/realizacje` |
| Usługi | `/uslugi/[slug]` | `/uslugi/sufity-napinane` |
| Rodzaje sufitów | `/rodzaje-sufitow/[slug]` | `/rodzaje-sufitow/matowe` |
| Lokalizacje | `/lokalizacje/[city]` | `/lokalizacje/wroclaw` |
| Poradnik | `/poradnik/[slug]` | `/poradnik/sufity-napinane-cena` |

Zasady:

| Zasada | Decyzja |
|---|---|
| Małe litery | Tak |
| Polskie znaki w URL | Nie, używać transliteracji |
| Separator | Myślnik |
| Końcówki `.html` | Nie |
| Slash końcowy | Jeden standard w Next.js, najlepiej bez wymuszania trailing slash |
| Kanoniczne URL | Jeden canonical na każdej stronie |

## 3. Metadata patterns

### Homepage

```ts
title: "Sufity napinane Wrocław i do 100 km | EkoSufity"
description: "Sufity napinane z montażem we Wrocławiu i do 100 km od miasta. Bezpłatny pomiar, dojazd gratis, cena od ok. 120 zł/m² dla prostego sufitu MSD."
```

### City page

```ts
title: "Sufity napinane [Miasto] - pomiar i montaż | EkoSufity"
description: "Montaż sufitów napinanych w [Miasto] i okolicy. Bezpłatny pomiar, dojazd gratis do 100 km od Wrocławia, wycena po pomiarze, telefon i WhatsApp."
```

### Service page

```ts
title: "[Usługa] Wrocław i okolice | EkoSufity"
description: "[Usługa] z montażem we Wrocławiu i do 100 km od miasta. Bezpłatny pomiar, dojazd gratis, gwarancja 15/5/2."
```

### Price page

```ts
title: "Sufity napinane cena - od czego zależy koszt? | EkoSufity"
description: "Cena sufitu napinanego od ok. 120 zł/m² dla prostego sufitu MSD: prostokąt, 4 narożniki, bez dodatków. Dokładna wycena po bezpłatnym pomiarze."
```

### Realization / inspiration page

```ts
title: "Realizacje i inspiracje sufitów napinanych | EkoSufity"
description: "Zobacz inspiracje i docelowo realne realizacje sufitów napinanych: mieszkania, domy, lokale, restauracje i pomieszczenia wilgotne."
```

## 4. H1 strategy

| Typ strony | H1 |
|---|---|
| Home | `Sufity napinane z montażem we Wrocławiu i do 100 km od miasta` |
| City | `Sufity napinane [Miasto] - bezpłatny pomiar i montaż` |
| Ceny | `Sufity napinane cena - od czego zależy koszt?` |
| Usługa | `[Nazwa usługi]` |
| Rodzaj sufitu | `[Rodzaj sufitu]` |
| FAQ | `Najczęstsze pytania o sufity napinane` |
| Kontakt | `Kontakt - bezpłatny pomiar i wycena` |

Zasada: jedna strona = jeden główny H1. Nie powtarzać identycznego H1 między miastami bez nazwy miasta.

## 5. Keyword mapping

| URL | Primary keyword | Secondary keywords |
|---|---|---|
| `/` | `sufity napinane Wrocław` | `sufity napinane Dolny Śląsk`, `montaż sufitów napinanych`, `sufit napinany cena` |
| `/lokalizacje/wroclaw` | `sufity napinane Wrocław` | `sufit napinany Wrocław cena`, `montaż sufitów napinanych Wrocław` |
| `/lokalizacje/olawa` | `sufity napinane Oława` | `montaż sufitu napinanego Oława`, `sufit napinany Oława` |
| `/lokalizacje/olesnica` | `sufity napinane Oleśnica` | `sufit napinany Oleśnica`, `montaż sufitów Oleśnica` |
| `/lokalizacje/dlugoleka` | `sufity napinane Długołęka` | `sufit napinany Długołęka`, `sufity napinane okolice Wrocławia` |
| `/ceny` | `sufity napinane cena` | `sufit napinany cena za m2`, `sufity napinane cennik` |
| `/uslugi/sufity-napinane` | `sufity napinane z montażem` | `montaż sufitów napinanych Wrocław`, `sufity napinane Dolny Śląsk` |
| `/uslugi/oswietlenie-led` | `sufit napinany z LED` | `linie świetlne sufit napinany`, `oświetlenie LED sufit napinany` |
| `/uslugi/linie-swietlne` | `linie świetlne w suficie` | `linie LED sufit napinany`, `sufit napinany LED Wrocław` |
| `/rodzaje-sufitow/matowe` | `sufit napinany matowy` | `matowe sufity napinane`, `sufit matowy Wrocław` |
| `/poradnik/sufit-napinany-czy-plyty-gk` | `sufit napinany czy płyty g-k` | `sufit napinany vs karton gips`, `sufit napinany opinie` |

## 6. Schema.org

### Global schema

| Schema | Gdzie | Uwagi |
|---|---|---|
| `LocalBusiness` | Home, kontakt, city pages | Dane NIP/REGON/telefon/e-mail po uzupełnieniu |
| `Service` | Usługi i city pages | `areaServed`, `provider`, `serviceType` |
| `BreadcrumbList` | Wszystkie podstrony poza home | Generowany z URL |
| `FAQPage` | Strony z widocznym FAQ | Tylko pytania faktycznie pokazane na stronie |
| `Article` | Poradnik | Autor, data publikacji, data aktualizacji |
| `ImageObject` | Realizacje | Tylko dla realnych zdjęć lub jasno oznaczonych wizualizacji |

### LocalBusiness fields

```ts
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EkoSufity",
  "areaServed": [
    "Wrocław",
    "Dolnośląskie"
  ],
  "availableLanguage": ["pl", "be", "ru", "uk"],
  "url": "https://ekosufity.pl",
  "telephone": "DO_UZUPELNIENIA",
  "email": "DO_UZUPELNIENIA",
  "priceRange": "od ok. 120 zł/m²"
}
```

Nie dodawać:

| Pole | Dlaczego |
|---|---|
| `aggregateRating` | Dopiero po pewnym i zgodnym z zasadami źródle opinii |
| Fikcyjne `review` | Nie wolno generować opinii |
| Niepotwierdzony adres | Jeśli firma działa jako service-area business, adres musi być zgodny z realnymi danymi |

## 7. Canonical strategy

| Typ strony | Canonical |
|---|---|
| Home | `https://ekosufity.pl/` |
| City | `https://ekosufity.pl/lokalizacje/[city]` |
| Service | `https://ekosufity.pl/uslugi/[slug]` |
| Price | `https://ekosufity.pl/ceny` |
| FAQ | `https://ekosufity.pl/faq` |
| Blog | `https://ekosufity.pl/poradnik/[slug]` |

Zasada: nie używać canonical do ukrywania thin content. Jeśli strona miasta jest słaba, nie publikować jej jeszcze.

## 8. Sitemap strategy

Generować automatycznie z:

| Źródło danych | Strony |
|---|---|
| `site static routes` | `/`, `/ceny`, `/kontakt`, `/faq`, `/realizacje`, `/o-firmie` |
| `cities.ts` | `/lokalizacje/[city]` |
| `services.ts` | `/uslugi/[slug]` |
| `ceiling-types.ts` | `/rodzaje-sufitow/[slug]` |
| `articles.ts` w przyszłości | `/poradnik/[slug]` |

Priorytety sitemap:

| Typ | Priority | Changefreq |
|---|---:|---|
| Home | 1.0 | weekly |
| Wrocław city page | 0.9 | monthly |
| Ceny | 0.9 | monthly |
| Usługi P0/P1 | 0.8 | monthly |
| City P1 | 0.7 | monthly |
| City P2 | 0.6 | monthly |
| Poradnik | 0.5 | monthly |

## 9. Robots strategy

Publiczne:

```text
/
/ceny
/realizacje
/kontakt
/faq
/o-firmie
/uslugi/*
/lokalizacje/*
/rodzaje-sufitow/*
/poradnik/*
```

Nie indeksować:

| URL / typ | Powód |
|---|---|
| preview / draft pages | Niepełne treści |
| search/filter query URLs | Duplikacja |
| admin / API | Techniczne |
| test landing pages | Ryzyko duplicate/thin content |

## 10. Redirect strategy ze starego serwisu

Przed migracją trzeba zebrać realne URL starego serwisu. Minimalne założenia:

| Stary URL | Nowy URL |
|---|---|
| `/` | `/` |
| `/cennik` albo podobne | `/ceny` |
| `/realizacje` | `/realizacje` |
| `/kontakt` | `/kontakt` |
| `/faq` | `/faq` |
| stare strony ofertowe | `/uslugi/sufity-napinane` albo konkretna usługa |

Zasady:

| Zasada | Decyzja |
|---|---|
| Typ redirectu | 301 |
| Redirect chains | Unikać |
| 404 | Tylko dla stron bez odpowiednika |
| Parametry kampanii | Nie przekierowywać osobno, zachować działanie UTM |

## 11. Internal linking

### Najważniejsze anchor texts

| Anchor | Docelowy URL |
|---|---|
| `sufity napinane we Wrocławiu` | `/lokalizacje/wroclaw` |
| `cena sufitu napinanego` | `/ceny` |
| `sufity napinane z LED` | `/uslugi/oswietlenie-led` |
| `linie świetlne` | `/uslugi/linie-swietlne` |
| `bezpłatny pomiar` | `/kontakt` |
| `realizacje sufitów napinanych` | `/realizacje` |

### Link flow

```text
Home
-> Ceny
-> Wrocław
-> Usługi
-> Realizacje
-> Kontakt

City page
-> Ceny
-> Usługi
-> Nearby cities
-> Kontakt

Service page
-> Ceny
-> Realizacje
-> City pages
-> Kontakt
```

## 12. Thin content prevention

Każda strona miasta musi mieć:

| Element | Wymagane |
|---|---|
| Unikalny H1/title/description | Tak |
| Lokalny intro tekst | Tak |
| Informacja o dojeździe | Tak |
| Cena z warunkiem MSD | Tak |
| FAQ lokalne | Tak |
| Linki do pobliskich miast | Tak |
| Unikalne zdjęcia/realizacje | Jeśli są; jeśli nie, oznaczyć wizualizacje jako inspiracje |
| CTA telefon + WhatsApp | Tak |

Nie publikować city page, jeśli zawiera tylko podmienioną nazwę miasta.

## 13. Multilingual SEO

Na start główna strona jest po polsku. Obsługa językowa PL/BY/RU/UA jest trust-faktorem.

Rekomendowana kolejność:

| Etap | Decyzja |
|---|---|
| MVP | Strona PL + informacja o obsłudze PL/BY/RU/UA |
| Etap 2 | Dodać `/uk` i `/ru`, jeśli ruch i obsługa to uzasadnią |
| Etap 3 | Rozważyć `/be`, jeśli ma realny sens biznesowy i contentowy |

Jeśli powstaną wersje językowe:

| Element | Wymagane |
|---|---|
| Osobne URL | Tak |
| `hreflang` | Tak |
| Tłumaczenia adaptowane | Tak |
| Automatyczne redirecty po IP | Nie |
| Mieszanie języków na jednej stronie | Nie, poza krótką informacją o obsłudze językowej |

## 14. Analytics events

| Event | Trigger | Parametry |
|---|---|---|
| `click_phone` | Klik `tel:` | page, location, component |
| `click_whatsapp` | Klik WhatsApp | page, location, component |
| `click_email` | Klik e-mail | page, component |
| `start_price_estimate` | Start kalkulatora | page, city |
| `complete_price_estimate` | Koniec kalkulatora | page, city, has_led |
| `click_google_reviews` | Klik opinii Google | page |
| `view_city_page` | Wejście na city page | city |
| `view_service_page` | Wejście na service page | service |

### Najważniejsze komponenty do trackingu

| Komponent | Event |
|---|---|
| Header phone | `click_phone` |
| Header WhatsApp | `click_whatsapp` |
| Mobile sticky phone | `click_phone` |
| Mobile sticky WhatsApp | `click_whatsapp` |
| Hero CTA | `click_phone` albo `click_whatsapp` |
| Final CTA | `click_phone` albo `click_whatsapp` |
| Price calculator | `start_price_estimate`, `complete_price_estimate` |

## 15. Open Graph

| Typ strony | OG title | OG image |
|---|---|---|
| Home | `Sufity napinane Wrocław i okolice | EkoSufity` | premium visualization / future real photo |
| City | `Sufity napinane [Miasto] | EkoSufity` | visualization oznaczona jako inspiracja |
| Ceny | `Ile kosztuje sufit napinany? | EkoSufity` | simple price/ceiling visual |
| Service | `[Usługa] | EkoSufity` | relevant visual |

Ważne: jeśli OG używa wizualizacji, nie podpisywać jej jako realnej realizacji.

## 16. SEO launch checklist

| Check | Status |
|---|---|
| Każda strona ma unikalny title | Do wdrożenia |
| Każda strona ma unikalny description | Do wdrożenia |
| Każda strona ma jeden H1 | Do wdrożenia |
| Canonical działa | Do wdrożenia |
| Sitemap generuje wszystkie publiczne strony | Do wdrożenia |
| Robots nie blokuje publicznych stron | Do wdrożenia |
| LocalBusiness schema ma realne dane | Czeka na telefon/e-mail/NIP/REGON |
| FAQPage schema tylko przy widocznym FAQ | Do wdrożenia |
| Redirecty ze starego serwisu | Czeka na listę URL |
| GA4 / events | Do wdrożenia |
| Google Search Console | Po deployu |

