# EkoSufity: Figma-ready brief

Data: 2026-05-24  
Cel: przygotowanie makiet P0/P1 dla nowego serwisu EkoSufity  
Podstawa: `business-facts.md`, `homepage-copy-pl.md`, `p0-pages-copy-pl.md`, `design-concept.md`

## 1. Cel makiet

Makiety w Figma mają sprawdzić:

| Cel | Co musi być widoczne |
|---|---|
| Czy użytkownik rozumie usługę | `sufity napinane z montażem` w pierwszym ekranie |
| Czy rozumie lokalność | Wrocław + do 100 km |
| Czy zna cenę bazową | od ok. 120 zł/m² dla prostego sufitu MSD |
| Czy widzi łatwy kontakt | telefon + WhatsApp |
| Czy ufa firmie | gwarancja 15/5/2, właściciel, Google opinie po uzupełnieniu |
| Czy social traffic działa | mocny visual + szybkie fakty + WhatsApp |

## 2. Źródło prawdy

| Źródło | Rola |
|---|---|
| `business-facts.md` | fakty biznesowe, cena, gwarancja, języki, CTA |
| Brandbook | kierunek wizualny: black/gold, logo, Playfair/Montserrat |
| `homepage-copy-pl.md` | finalny copy homepage |
| `p0-pages-copy-pl.md` | finalny copy P0 |
| `design-concept.md` | visual system i komponenty |

Jeśli brandbook zawiera inne liczby niż bриф, wygrywa brief. Nie używać `gwarancja do 10 lat`; używać `15 lat na płótno, 5 lat na montaż, 2 lata na LED`.

## 3. Ekrany do zaprojektowania

### P0

| Ekran | Desktop | Mobile | Priorytet |
|---|---|---|---:|
| Homepage `/` | tak | tak | P0 |
| Wrocław `/lokalizacje/wroclaw` | tak | tak | P0 |
| Ceny `/ceny` | tak | tak | P0 |
| Kontakt `/kontakt` | tak | tak | P0 |

### P1

| Ekran | Desktop | Mobile | Priorytet |
|---|---|---|---:|
| Realizacje `/realizacje` | tak | tak | P1 |
| Service `/uslugi/sufity-napinane` | opcjonalnie | opcjonalnie | P1 |
| LED `/uslugi/oswietlenie-led` | opcjonalnie | opcjonalnie | P1 |

Rekomendacja: zacząć od homepage desktop + mobile. Po zatwierdzeniu przenieść system na pozostałe ekrany.

## 4. Brand style

| Element | Decyzja |
|---|---|
| Logo | użyć black/gold z brandbooka |
| Kolor marki | `#CDA14A` |
| Ciemne sekcje | final CTA, footer, wybrane brand sections |
| Główne tło strony | jasne, nie czarne |
| Font display | Playfair Display |
| Font UI/body | Montserrat |
| Pattern sygnetu | subtelnie, nie jako ciężkie tło całego serwisu |
| Ikony | line icons w złotym/ciemnym stylu |

## 5. Design tokens

| Token | Wartość |
|---|---|
| Background main | `#FAF8F4` |
| Background alternate | `#F1EEE8` |
| Surface | `#FFFFFF` |
| Text primary | `#171717` |
| Text secondary | `#625D55` |
| Border | `#DDD7CE` |
| Brand gold | `#CDA14A` |
| Brand black | `#1E1E1E` |
| Success/check | `#4F7A5A` |
| Radius | 8 px |
| Desktop max width | 1180-1240 px |
| Mobile padding | 20 px |

## 6. Global components

| Komponent | Warianty | Uwagi |
|---|---|---|
| Header | desktop, mobile | logo, nav, phone, WhatsApp |
| Button | primary, secondary, dark, icon | min 44 px mobile |
| Sticky mobile CTA | phone + WhatsApp | fixed bottom |
| Trust item | icon + title + short text | bez długiego copy |
| Price card | base price + condition | mocno czytelne |
| Service card | title + short copy + link | 4 główne usługi |
| Segment card | mieszkania/domy/lokale/etc | 2x3 desktop |
| Gallery card | visualization / realization | obowiązkowa etykieta |
| FAQ accordion | closed/open | mobile-first |
| CTA band | light/dark | final sections |
| Owner block | photo/placeholder + copy | nie używać fake portrait |

## 7. Homepage desktop layout

### 7.1 Header

Content:

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

Design:

| Element | Zasada |
|---|---|
| Header | sticky, niski, jasny lub transparent over light hero |
| Logo | czarno-złote albo dark version |
| WhatsApp | button secondary/outlined |
| Telefon | widoczny tekstowo |

### 7.2 Hero

H1:

```text
Sufity napinane z montażem we Wrocławiu i do 100 km od miasta
```

Lead:

```text
Montujemy sufity napinane w mieszkaniach, domach, lokalach, restauracjach i pomieszczeniach wilgotnych. Bezpłatny pomiar, dojazd gratis do 100 km i wycena po ustaleniu zakresu prac.
```

Quick facts:

```text
Cena od ok. 120 zł/m² dla prostego sufitu MSD
15 lat gwarancji na płótno
Telefon i WhatsApp
Obsługa po polsku, białorusku, rosyjsku i ukraińsku
```

CTA:

```text
Zadzwoń i umów bezpłatny pomiar
Napisz na WhatsApp
```

Visual:

| Element | Zasada |
|---|---|
| Image | jasna wizualizacja wnętrza z `img_arch` |
| Label | `Wizualizacja przykładowego efektu` |
| Hero background | jasne, brand gold jako akcent |
| Nie robić | pełnego czarnego hero, który zasłania produkt |

### 7.3 Trust bar

4 elementy:

```text
Bezpłatny pomiar
Dojazd gratis
Gwarancja 15/5/2
Kontakt bez bariery językowej
```

Design:

| Element | Zasada |
|---|---|
| Icons | line icons gold/dark |
| Layout | 4 columns desktop |
| Copy | maks. 1 krótkie zdanie |

### 7.4 Cena / kalkulator

Nagłówek:

```text
Ile kosztuje sufit napinany?
```

Main copy:

```text
Cena zaczyna się od ok. 120 zł/m² dla sufitu MSD w prostym prostokątnym pomieszczeniu z 4 narożnikami, bez dodatkowych elementów. Dokładną cenę podajemy po pomiarze i ustaleniu szczegółów.
```

Design:

| Element | Zasada |
|---|---|
| Price highlight | duże `od ok. 120 zł/m²` |
| Condition | mały, ale czytelny tekst |
| Factors | 4 krótkie karty |
| CTA | `Wyślij wymiary lub zdjęcie na WhatsApp` |

### 7.5 Dla kogo

Nagłówek:

```text
Dobieramy sufit do mieszkania, domu i lokalu
```

Cards:

```text
Mieszkania
Domy
Remonty
Lokale komercyjne
Restauracje
Baseny i strefy wilgotne
```

Design:

| Element | Zasada |
|---|---|
| Layout | 2x3 cards |
| Style | white cards on warm background |
| Icons | simple line icons |

### 7.6 Inspiracje / wizualizacje

Nagłówek:

```text
Zobacz, jaki efekt można uzyskać
```

Lead:

```text
Poniższe materiały pokazują przykładowe efekty i kierunki projektowe. Wizualizacje traktujemy jako inspirację - realne realizacje oznaczamy oddzielnie.
```

Design:

| Element | Zasada |
|---|---|
| Grid | 3-4 images desktop |
| Labels | zawsze `Wizualizacja przykładowego efektu` |
| CTA | `Chcę podobny efekt` |

### 7.7 Proces

Nagłówek:

```text
Jak wygląda współpraca?
```

Steps:

```text
Kontakt
Bezpłatny pomiar
Wycena
Montaż
Odbiór
```

Design:

| Element | Desktop |
|---|---|
| Stepper | horizontal |
| Number style | gold outline or gold fill |
| Copy | 1-2 lines per step |

### 7.8 Usługi

Nagłówek:

```text
Sufit, światło i detale w jednym projekcie
```

Cards:

```text
Sufity napinane
Oświetlenie LED
Linie świetlne
Ukryte karnisze
```

Design:

| Element | Zasada |
|---|---|
| Layout | 4 cards desktop |
| Link | subtle text link |
| Hover | border/gold accent |

### 7.9 O właścicielu

Nagłówek:

```text
Za pomiar i jakość odpowiada konkretna osoba
```

Copy:

```text
Jestem Białorusinem mieszkającym i pracującym we Wrocławiu. W EkoSufity stawiam na spokojne doradztwo, dokładny pomiar i montaż zgodny z ustaleniami. Rozmawiam z klientami po polsku, białorusku, rosyjsku i ukraińsku.
```

Design:

| Element | Zasada |
|---|---|
| Photo | real photo only; if missing, use no portrait |
| Layout | text + image/brand block |
| Tone | osobisty, ale spokojny |

### 7.10 Opinie Google

Before GBP link:

```text
Opinie klientów pokazujemy wyłącznie ze źródłem. Po dodaniu linku do Google Business Profile w tym miejscu pojawi się blok opinii Google.
```

Design:

| Element | Zasada |
|---|---|
| No fake reviews | obowiązkowo |
| Placeholder | neutralny, bez ocen/liczb |

### 7.11 FAQ

Use FAQ from `homepage-copy-pl.md`.

Design:

| Element | Zasada |
|---|---|
| Desktop | 2 columns or wide accordion |
| Mobile | accordion |
| First questions | pomiar, dojazd, cena, gwarancja |

### 7.12 Final CTA

Nagłówek:

```text
Umów bezpłatny pomiar sufitu
```

Lead:

```text
Zadzwoń albo napisz na WhatsApp. Ustalimy miasto, rodzaj pomieszczenia, orientacyjny metraż i doradzimy, co będzie potrzebne do dokładnej wyceny.
```

Design:

| Element | Zasada |
|---|---|
| Background | brand black |
| Accent | gold |
| CTA | phone + WhatsApp |
| Trust line | `Bezpłatny pomiar, dojazd do 100 km gratis, gwarancja 15/5/2.` |

## 8. Homepage mobile layout

Order:

```text
Header
Hero
Trust mini-bar
Cena od + warunek
WhatsApp CTA
Dla kogo
Inspiracje
Proces
Usługi
O właścicielu
FAQ
Final CTA
Sticky bottom CTA
```

Mobile rules:

| Element | Zasada |
|---|---|
| H1 | 34-40 px |
| Lead | max 3-4 lines before CTA |
| CTA | full-width stacked buttons |
| Sticky bottom | always visible after first scroll |
| Cards | 1 column |
| Gallery | 1 large + small thumbnails or 2-column grid |
| FAQ | accordion |

## 9. City page Figma rules

Template: `/lokalizacje/wroclaw`, later reused for cities.

Sections:

```text
Local hero
Local trust
Cena lokalna
Najczęściej wybierane rozwiązania
Inspiracje / realizacje z okolicy
Proces lokalny
FAQ lokalne
Nearby cities
Final CTA
```

Wrocław H1:

```text
Sufity napinane Wrocław - bezpłatny pomiar i montaż
```

Design:

| Element | Zasada |
|---|---|
| Local badge | `Wrocław + okolice` |
| Price | same visual pattern as `/ceny` |
| Nearby | small city link chips |
| CTA | phone + WhatsApp |

## 10. Ceny page Figma rules

Sections:

```text
Hero ceny
Co obejmuje cena bazowa
Co zwiększa cenę
Kalkulator / szybka wycena
Dlaczego wycena po pomiarze
FAQ ceny
Final CTA
```

Key design:

| Element | Zasada |
|---|---|
| Price block | centralny, bardzo czytelny |
| Warning/condition | not a warning red; use calm note style |
| Calculator | form-like block, not heavy app |
| CTA | WhatsApp prominent |

## 11. Kontakt page Figma rules

Sections:

```text
Hero kontakt
Contact cards
Obszar działania
Języki
Dane firmy
FAQ kontakt
Final CTA
```

Design:

| Element | Zasada |
|---|---|
| Contact cards | phone, WhatsApp, email |
| WhatsApp | visually strong |
| Map | optional abstract 100 km radius, not mandatory |
| Missing data | no fake values |

## 12. Realizacje page Figma rules

Sections:

```text
Hero
Important note about visualizations
Filters
Grid
Case template preview
Final CTA
```

Design:

| Element | Zasada |
|---|---|
| Label | required on every image |
| Filters | chips: salon, kuchnia, łazienka, LED, lokale, baseny |
| No fake case | do not show city/metraż as real unless confirmed |
| CTA | `Chcę podobny efekt` |

## 13. What not to design

| Nie projektować | Powód |
|---|---|
| Fake reviews | brak źródła |
| Fake realizacje | `img_arch` to wizualizacje |
| `Gwarancja do 10 lat` | sprzeczne z brifem |
| `90% montaży w 1 dzień` | brak potwierdzenia |
| `300+ realizacji` | brak potwierdzenia |
| Full black homepage | mniej czytelne i za ciężkie dla SEO/service |
| Hero carousel | gorszy UX i LCP |
| Popup na start | zbyt agresywne |

## 14. Figma acceptance checklist

| Check | Wymagane |
|---|---|
| Pierwszy ekran mówi co, gdzie i jak się skontaktować | Tak |
| Telefon i WhatsApp są widoczne na desktop | Tak |
| Sticky phone + WhatsApp działa w mobile layout | Tak |
| Cena 120 zł/m² ma warunek MSD/4 narożniki | Tak |
| Gwarancja jest 15/5/2, nie 10 lat | Tak |
| Wizualizacje są oznaczone jako wizualizacje | Tak |
| Brak fikcyjnych opinii i liczb | Tak |
| Brandbook black/gold jest obecny, ale nie dominuje całego UI | Tak |
| Mobile nie ma ścian tekstu | Tak |
| CTA nie konkuruje z 5 innymi akcjami | Tak |
| Layout wygląda premium, ale nie jak showroom bez treści | Tak |

## 15. Deliverables

Figma powinno zawierać:

| Deliverable | Zakres |
|---|---|
| Design system page | kolory, typografia, buttons, cards, labels |
| Components page | header, sticky CTA, cards, FAQ, CTA bands |
| Homepage desktop | pełny ekran |
| Homepage mobile | pełny ekran |
| Wrocław page | desktop + mobile |
| Ceny page | desktop + mobile |
| Kontakt page | desktop + mobile |
| Realizacje page | desktop + mobile |

