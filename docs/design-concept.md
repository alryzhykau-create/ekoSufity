# EkoSufity: design concept i visual system

Data: 2026-05-24  
Podstawa: `business-facts.md`, `audience-analysis.md`, `site-and-page-structure.md`, `ux-scenarios.md`, `homepage-copy-pl.md`, `p0-pages-copy-pl.md`, `img_arch`

## 1. Cel designu

Strona ma wyglądać jak nowoczesny premium service business dla wnętrz, a nie jak agresywna firma remontowa.

Design powinien komunikować:

| Cecha | Jak ma się objawiać |
|---|---|
| Spokój | dużo światła, jasna hierarchia, brak krzykliwych efektów |
| Precyzja | równe siatki, techniczne detale, konkretne dane |
| Zaufanie | właściciel, gwarancja, opinie, czytelne warunki |
| Premium | dobre zdjęcia/wizualizacje, spokojna typografia, kontrolowany akcent |
| Lokalność | Wrocław + 100 km, city pages, telefon i WhatsApp |
| Mobilność | szybki kontakt na dole ekranu, krótkie sekcje |

## 2. Kierunek wizualny

Rekomendowany styl:

```text
calm technical premium
```

Nie:

```text
tania firma remontowa
ciemny luksusowy showroom
agresywna reklama promocji
stockowy katalog wnętrz
```

## 3. Wnioski z `img_arch`

| Asset / typ | Wniosek |
|---|---|
| `a_clean_modern_website_homepage_mockup_landing.png` | Dobre kierunki: duży visual, jasna struktura, hero + trust + cena + proces + CTA. Do poprawy: nie używać niepotwierdzonych liczb i fikcyjnych opinii. |
| `ekosufity_visualization_structure.png` | Trafna logika bloków: hero, trust, kalkulator, realizacje/inspiracje, proces, rozwiązania, właściciel, FAQ, CTA. |
| `salon/kuchnia/lazienka/mieszkanie * photo` | Dobre jako inspiracje: ciepłe wnętrza, LED jako subtelny efekt, nie agresywna dekoracja. |
| `* pencil` | Dobre do pokazania koncepcji, procesu, kalkulatora albo wariantów, ale nie jako główne portfolio. |

Zasada: wszystkie obrazy z `img_arch` oznaczamy jako `wizualizacja` albo `inspiracja`, nie jako `realizacja`.

## 3A. Brandbook direction

Uzytkownik dostarczyl brandbook z kierunkiem: czarne tlo, zloty znak, typografia Playfair Display + Montserrat, premium signage i pattern z sygnetem.

Wniosek: brandbook jest dobrym kierunkiem dla identyfikacji marki, ale strona internetowa nie powinna byc w 100% czarno-zlota. Dla SEO/service website lepiej uzyc tego stylu jako warstwy markowej, a glowny interfejs utrzymac jasny, czytelny i wnętrzarski.

| Element brandbooka | Decyzja dla strony |
|---|---|
| Logo czarno-zlote | Uzyc w headerze, stopce, favicon, social preview |
| Ciemne tlo | Uzyc selektywnie: final CTA, stopka, wybrane brand sections |
| Zloty akcent | Uzyc dla CTA, ikon, separatorow, highlightow |
| Playfair Display | Uzyc dla logo/brand display i wybranych H1/H2 |
| Montserrat | Uzyc dla body, UI, buttonow, nawigacji |
| Pattern z sygnetem | Uzyc bardzo subtelnie w brand sections albo materialach offline; nie jako mocne tlo calej strony |
| Tablica / oznakowanie | Dobry styl dla offline i social assets, nie kopiowac 1:1 jako web hero |
| `Gwarancja do 10 lat` z brandbooka | Nie uzywac. W biezacym brifie potwierdzone jest `15 lat na płótno, 5 lat na montaż, 2 lata na LED`. |

## 4. Paleta kolorów

Paleta ma być neutralna, wnętrzarska, z jednym mocnym akcentem CTA.

| Rola | Kolor | Hex | Użycie |
|---|---|---|---|
| Background main | Warm white | `#FAF8F4` | tło strony |
| Background alternate | Soft stone | `#F1EEE8` | pasy sekcji |
| Surface | White | `#FFFFFF` | karty, formularze |
| Text primary | Near black | `#171717` | nagłówki, body |
| Text secondary | Warm gray | `#625D55` | leady, opisy |
| Border | Light warm gray | `#DDD7CE` | separatory, karty |
| Brand gold | Gold | `#CDA14A` | logo, akcenty, ikony, wybrane CTA |
| Brand cream | Cream | `#F4ECDD` | jasne brand surfaces |
| Brand black | Black | `#1E1E1E` | stopka, final CTA, ciemne brand sections |
| CTA primary | Brand gold | `#CDA14A` | przyciski główne |
| CTA hover | Dark gold | `#A97924` | hover |
| Dark section | Brand black | `#1E1E1E` | final CTA, kontrastowe pasy |
| Success/check | Muted green | `#4F7A5A` | check marks, pozytywne punkty |

### Czego unikać

| Problem | Decyzja |
|---|---|
| Zbyt beżowy monokolor | Dodać grafit, biel i zielony akcent pomocniczy |
| Złote gradienty | Nie używać |
| Ciemne hero | Nie, produkt musi być widoczny |
| Jaskrawe LED/neon jako styl strony | LED pokazujemy w zdjęciach, nie w UI |
| Gradient orbs / dekoracyjne plamy | Nie używać |

## 5. Typografia

Rekomendacja zgodna z brandbookiem: Playfair Display dla warstwy brand/display, Montserrat dla czytelnego UI i tekstu podstawowego.

| Rola | Font | Rozmiar desktop | Rozmiar mobile | Waga |
|---|---|---:|---:|---:|
| Logo / brand wordmark | Playfair Display | wg logo | wg logo | 500-700 |
| H1 | Playfair Display lub Montserrat | 52-64 px | 34-40 px | 650-700 |
| H2 | Playfair Display lub Montserrat | 34-42 px | 28-32 px | 600-700 |
| H3 | Montserrat | 22-26 px | 20-22 px | 650 |
| Body | Montserrat | 16-18 px | 16 px | 400 |
| Small | Montserrat | 13-14 px | 13 px | 400/500 |
| Button | Montserrat | 15-16 px | 15-16 px | 650 |

Zasady:

| Zasada | Decyzja |
|---|---|
| Letter spacing | 0 |
| Text alignment | left, z wyjątkiem małych elementów statystycznych |
| Hero text | mocny, ale nie marketingowy |
| Długie teksty | dzielić na krótkie sekcje i FAQ |
| Playfair usage | nie uzywac do dlugich akapitow ani malych UI labeli |

## 6. Layout i grid

| Obszar | Desktop | Tablet | Mobile |
|---|---|---|---|
| Max width content | 1180-1240 px | 90-94% | 100% z paddingiem |
| Padding sekcji | 72-96 px | 56-72 px | 44-56 px |
| Grid homepage | 12 kolumn | 8 kolumn | 1 kolumna |
| Card gap | 20-24 px | 18-20 px | 14-16 px |
| Border radius | max 8 px | max 8 px | max 8 px |

Nie używać kart w kartach. Sekcje powinny być pełnymi pasami albo prostym layoutem, a karty tylko dla powtarzalnych elementów: usługi, FAQ, segmenty, galeria.

## 7. Header

### Desktop

| Element | Zasada |
|---|---|
| Logo | lewa strona |
| Nawigacja | środek albo lewa po logo |
| Telefon | widoczny jako tekst/link |
| WhatsApp | przycisk akcentowy |
| Sticky header | tak, ale niski i spokojny |

### Mobile

| Element | Zasada |
|---|---|
| Logo | top left |
| Menu | ikona |
| Sticky bottom CTA | `Zadzwoń` + `WhatsApp` |
| Header height | kompaktowy |

## 8. Buttons

| Typ | Styl | Użycie |
|---|---|---|
| Primary | brand gold background, dark text albo white text po tescie kontrastu | telefon / główne CTA |
| Secondary | white/transparent, dark text, border | WhatsApp lub drugi CTA |
| Dark section primary | copper on dark | final CTA |
| Icon button | ikona + label | phone, WhatsApp, gallery actions |

Zasady:

| Zasada | Decyzja |
|---|---|
| Minimum height | 44 px mobile, 48 px desktop |
| Radius | 8 px |
| CTA count | maksymalnie 2 obok siebie |
| Copy | konkretne: `Zadzwoń`, `Napisz na WhatsApp`, nie `Dowiedz się więcej` jako główne CTA |

## 9. Cards

| Card type | Zawartość | Zasada |
|---|---|---|
| Trust card | ikona, krótki tytuł, 1 zdanie | bez długiego tekstu |
| Service card | tytuł, 2-3 linie, link | może mieć subtelny border |
| Segment card | mieszkania/domy/lokale | prosta karta, bez ciężkiego cienia |
| Gallery card | image, label, title, meta, CTA | zawsze etykieta `wizualizacja`/`realizacja` |
| FAQ item | accordion | mobile-first |

Cienie:

```text
subtelne albo brak; unikać dużych miękkich cieni jak w szablonach SaaS
```

## 10. Homepage visual order

| Blok | Design |
|---|---|
| Hero | split layout: copy + duże zdjęcie/wizualizacja wnętrza, ale bez cardowego hero; brandbook black/gold jako akcent, nie pelne ciemne tlo |
| Trust bar | 4 zwarte elementy pod hero |
| Cena/kalkulator | jasna sekcja z jednym wyróżnionym zakresem ceny |
| Dla kogo | karty 2x3 lub poziome segmenty |
| Inspiracje | grid obrazów z etykietą |
| Proces | poziomy stepper desktop, vertical mobile |
| Usługi | 4 karty |
| O właścicielu | realne zdjęcie właściciela, jeśli dostępne; inaczej bez fake portrait |
| Opinie | po podaniu GBP linku |
| FAQ | 2 kolumny desktop / accordion mobile |
| Final CTA | ciemny pas w stylu brandbooka, telefon + WhatsApp |

## 11. Visuals i zdjęcia

### Typy materiałów

| Typ | Status | Jak używać |
|---|---|---|
| `img_arch` wizualizacje | dostępne | inspiracje, social, hero jeśli oznaczone poprawnie |
| realne zdjęcia prac | do dostarczenia | portfolio, realizacje, proof |
| zdjęcie właściciela | rekomendowane | blok `O właścicielu`, final CTA |
| Google reviews screenshot | nie rekomendowane | lepiej link i komponent opinii |
| brandbook assets | do eksportu z plikow zrodlowych | logo, favicon, pattern, social/offline assets |

### Etykiety obrazów

| Typ | Label |
|---|---|
| Wizualizacja | `Wizualizacja przykładowego efektu` |
| Inspiracja | `Inspiracja do projektu` |
| Realizacja | `Realizacja EkoSufity` |

### Alt text

Przykłady:

```text
Wizualizacja sufitu napinanego z linią LED w salonie
Wizualizacja sufitu napinanego w kuchni z oświetleniem obwodowym
Realizacja sufitu napinanego matowego we Wrocławiu
```

## 12. Mobile UX

Mobile jest krytyczny dla Google, Facebook i WhatsApp.

| Element | Decyzja |
|---|---|
| Sticky bottom CTA | zawsze: `Zadzwoń` + `WhatsApp` |
| Hero | max 1 mocny H1, lead do 3 linii, 2 CTA |
| Cena | widoczna przed długą galerią |
| Galeria | szybki grid lub slider bez ciężkiej karuzeli |
| FAQ | accordion |
| Formularz | jeśli będzie, maksymalnie krótki |
| Touch targets | min 44 px |
| Długie sekcje | dzielić na krótkie bloki |

## 13. Social traffic design

Facebook / Instagram potrzebują szybkiego visual hook.

| Element | Decyzja |
|---|---|
| Pierwszy visual | jasny efekt sufitu/LED; czarno-zlota marka moze byc w overlayu/CTA, nie zamiast produktu |
| Copy | krótko: pomiar gratis, dojazd gratis, cena od 120 zł/m² |
| CTA | WhatsApp wyżej niż formularz |
| Landing | MVP: homepage i `/ceny` muszą działać dla social |
| Retargeting | można kierować do `/ceny` albo `/realizacje` |

## 14. Figma requirements

### Makiety do przygotowania

| Template | Priorytet |
|---|---:|
| Homepage desktop | P0 |
| Homepage mobile | P0 |
| City page desktop/mobile | P0 |
| Ceny desktop/mobile | P0 |
| Realizacje desktop/mobile | P1 |
| Kontakt desktop/mobile | P1 |
| Service page | P1 |

### Komponenty

| Komponent | Warianty |
|---|---|
| Button | primary, secondary, dark, icon |
| Header | desktop, mobile |
| Sticky CTA | mobile |
| Logo | dark, light, monochrome, favicon |
| Trust item | default |
| Price factor card | default |
| Service card | default |
| Gallery card | visualization, realization |
| FAQ accordion | closed, open |
| CTA band | light, dark |

## 15. Implementation notes dla Next.js

| Obszar | Decyzja |
|---|---|
| Images | `next/image`, stałe aspect-ratio |
| Hero image | preload/priority tylko dla LCP |
| Fonts | lokalne lub Next font, bez layout shift |
| Animations | subtelne: fade/slide 150-250 ms, bez scroll hijacking |
| Components | reusable sections, data-driven |
| Accessibility | kontrast, focus states, aria labels |
| Analytics | eventy dla CTA |

## 16. Design anti-patterns

| Nie robić | Dlaczego |
|---|---|
| Hero carousel | rozprasza i pogarsza LCP |
| Stockowe zdjęcia jako realizacje | niszczy zaufanie |
| Wizualizacje jako realne prace | nieuczciwe i ryzykowne |
| Pop-up od razu po wejściu | obniża zaufanie |
| Krzykliwe promocje | nie pasuje do premium service |
| Cale UI czarne ze zlotem | zbyt ciezkie dla lokalnego service website i mniej czytelne na mobile |
| Za dużo ikon bez tekstu | nie odpowiada na obiekcje |
| Beżowy monochrom | strona stanie się mdła |
| Ciemny luksus wszędzie | produkt będzie mniej czytelny |

## 17. Final direction

Najlepszy kierunek dla EkoSufity:

```text
jasny, spokojny, wnętrzarski serwis premium
z mocnym CTA telefon + WhatsApp
z transparentną ceną bazową
z właścicielem jako realnym trust-faktorem
z wizualizacjami jasno opisanymi jako inspiracje
z brandbookiem czarno-zlotym jako akcentem marki, nie dominujacym tlem calego serwisu
```
