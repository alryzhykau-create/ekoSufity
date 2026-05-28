# EkoSufity: UX scenarios i ścieżki konwersji

Data: 2026-05-24  
Podstawa: `business-facts.md`, `audience-analysis.md`, `site-and-page-structure.md`, `seo-logic.md`

## 1. Cel UX

UX ma prowadzić użytkownika do jednej z dwóch głównych akcji:

| Akcja | Priorytet | Kiedy |
|---|---:|---|
| Telefon | P0 | Użytkownik chce szybko ustalić termin, cenę, dostępność |
| WhatsApp | P0 | Użytkownik chce wysłać zdjęcie, wymiary, zapytać bez rozmowy |

Formularz może być dodatkiem, ale nie powinien być główną ścieżką w MVP, jeśli główne CTA to telefon i WhatsApp.

## 2. Źródła ruchu

| Źródło | Stan użytkownika | Najlepsza strona wejścia | Główna potrzeba |
|---|---|---|---|
| Google organic | Aktywnie szuka rozwiązania | city page, ceny, usługa | Cena, lokalność, wykonawca |
| Google Ads | Ma intencję komercyjną | dedykowany landing / city / ceny | Szybka odpowiedź i CTA |
| Facebook / social media | Często reaguje na obraz, inspirację lub rekomendację | landing social, home, inspiracje | Zobaczyć efekt i szybko napisać |
| Polecenie | Już częściowo ufa | home / kontakt / realizacje | Potwierdzić wiarygodność |
| Direct / brand | Zna nazwę EkoSufity | home | Kontakt i potwierdzenie faktów |
| Google Business Profile | Szuka lokalnej firmy | kontakt / city / home | Telefon, opinie, dojazd |

## 3. Główna ścieżka Google: `sufity napinane Wrocław`

```text
Google
-> /lokalizacje/wroclaw
-> Local hero: usługa + Wrocław + pomiar gratis + dojazd gratis
-> Cena: od ok. 120 zł/m² z warunkiem MSD
-> Trust: gwarancja 15/5/2 + opinie Google
-> Proces
-> FAQ
-> Telefon / WhatsApp
```

| Moment | Ryzyko | Odpowiedź UX |
|---|---|---|
| Pierwszy ekran | Użytkownik nie rozumie, czy firma działa we Wrocławiu | H1 z Wrocławiem, CTA, dojazd/pomiar |
| Cena | Obawa, że cena jest ukryta | Jasna cena bazowa + warunki |
| Zaufanie | Nie zna firmy | Opinie Google, gwarancja, właściciel |
| Decyzja | Nie chce formularza | Telefon + WhatsApp zawsze widoczne |

## 4. Ścieżka Google: `sufity napinane cena`

```text
Google
-> /ceny
-> Hero ceny
-> Co obejmuje 120 zł/m²
-> Co zwiększa cenę
-> Kalkulator / orientacyjna wycena
-> Wyślij zdjęcie na WhatsApp
-> FAQ ceny
-> Telefon / WhatsApp
```

| Moment | Ryzyko | Odpowiedź UX |
|---|---|---|
| Użytkownik chce konkretną cenę | Zbyt ogólna odpowiedź | Wyjaśnić `120 zł/m² = MSD, prostokąt, 4 narożniki, bez dodatków` |
| Cena rośnie przez dodatki | Frustracja | Pokazać czynniki ceny przed kontaktem |
| Nie zna metrażu | Porzuca stronę | CTA: `Wyślij zdjęcie lub wymiary na WhatsApp` |

## 5. Ścieżka Facebook / social media

Social traffic różni się od Google: użytkownik często nie szukał aktywnie, tylko zobaczył efekt, zdjęcie, film, post albo reklamę.

### Najlepszy flow

```text
Facebook / Instagram
-> landing lub home z mocnym visualem
-> inspiracja / wizualizacja / krótki efekt
-> szybkie fakty: pomiar gratis, dojazd gratis, cena od ok. 120 zł/m²
-> WhatsApp jako najłatwiejsza akcja
-> telefon jako drugi wybór
```

### Co musi być wyżej na stronie dla social traffic

| Element | Dlaczego |
|---|---|
| Duży visual | Social sprzedaje pierwszym wrażeniem |
| Krótki opis efektu | Użytkownik nie chce od razu czytać SEO tekstu |
| CTA WhatsApp | Najniższy próg kontaktu |
| Cena bazowa | Szybko filtruje zainteresowanych |
| Dla kogo | Mieszkanie, dom, restauracja, basen |
| Języki PL/BY/RU/UA | Dla części social traffic może być mocnym trust-faktorem |

### Social landing pattern

Można użyć home albo dedykowanego landingu:

```text
/lp/sufity-napinane-wroclaw
/lp/sufity-led-wroclaw
/lp/sufity-napinane-cena
```

Rekomendacja MVP: najpierw nie tworzyć osobnych landingów. Użyć homepage i `/ceny`, ale sekcje ustawić tak, żeby dobrze działały z social.

## 6. Ścieżka WhatsApp-first

```text
Użytkownik klika WhatsApp
-> wiadomość prefill
-> wysyła zdjęcie / metraż / miasto
-> otrzymuje pytania doprecyzowujące
-> umawia bezpłatny pomiar
```

### Rekomendowany prefill WhatsApp

```text
Dzień dobry, interesuje mnie sufit napinany. Miasto: [miasto]. Chciałbym/chciałabym zapytać o bezpłatny pomiar i orientacyjną wycenę.
```

### CTA zależnie od kontekstu

| Miejsce | CTA |
|---|---|
| Hero | `Napisz na WhatsApp` |
| Ceny | `Wyślij wymiary na WhatsApp` |
| Inspiracje | `Chcę podobny efekt` |
| City page | `Zapytaj o pomiar w [Miasto]` |
| LED | `Dobierz LED przez WhatsApp` |

## 7. Ścieżka mobile

Większość lokalnych usług ma dużą część ruchu mobilnego. Mobile musi mieć krótszą drogę do kontaktu niż desktop.

### Mobile must-have

| Element | Decyzja |
|---|---|
| Sticky bottom bar | `Zadzwoń` + `WhatsApp` |
| Hero CTA | Dwa przyciski, bez przeładowania |
| Długi tekst | Dzielenie na krótkie sekcje |
| Cena | Widoczna szybko, ale z warunkiem |
| FAQ | Accordion |
| Menu | Proste, bez zbyt wielu poziomów |
| Galeria | Szybka, lekka, bez ciężkich karuzel |

### Mobile order dla homepage

```text
Hero
Trust mini-bar
Cena od + warunek
WhatsApp CTA
Inspiracje
Proces
FAQ
Final CTA
```

Na mobile część bloków można skrócić, ale nie usuwać trust-faktów.

## 8. Ścieżka polecenia

```text
Klient dostał nazwę EkoSufity od znajomego
-> wchodzi na stronę
-> sprawdza, czy firma wygląda realnie
-> szuka opinii, zdjęć, gwarancji, kontaktu
-> dzwoni albo pisze
```

| Potrzeba | Element strony |
|---|---|
| Potwierdzić firmę | O firmie, dane, Google Business Profile |
| Zobaczyć prace | Realizacje / inspiracje z jasnym oznaczeniem |
| Szybko znaleźć kontakt | Header, sticky mobile, kontakt |
| Zrozumieć gwarancję | Trust bar, FAQ |

## 9. Ścieżka Google Business Profile

```text
Google Maps / Google Business Profile
-> strona / kontakt
-> użytkownik porównuje firmę z opiniami
-> sprawdza obszar i telefon
-> kontakt
```

Wymagane:

| Element | Dlaczego |
|---|---|
| Ten sam NAP | Spójność SEO lokalnego |
| Link do opinii Google | Kontynuacja zaufania |
| Telefon widoczny od razu | Użytkownik z map często chce dzwonić |
| Obsługiwany obszar | Wrocław + 100 km |

## 10. UX dla wizualizacji vs realizacji

Ponieważ `img_arch` to wizualizacje, nie można ich prezentować jako realne prace.

| Typ obrazu | Etykieta | Gdzie |
|---|---|---|
| Wizualizacja | `Wizualizacja przykładowego efektu` | Home, inspiracje, LED |
| Inspiracja | `Inspiracja do projektu` | Social, galeria inspiracji |
| Realizacja | `Realizacja EkoSufity` | Dopiero przy realnych zdjęciach |

UX-zasada: użytkownik nie może mieć wątpliwości, czy patrzy na zdjęcie wykonanej pracy, czy na wizualizację.

## 11. Najważniejsze punkty decyzyjne

| Punkt decyzyjny | Co musi zobaczyć użytkownik |
|---|---|
| Czy firma działa u mnie? | Wrocław + do 100 km, city page |
| Ile to kosztuje? | od ok. 120 zł/m² + warunek MSD |
| Czy pierwszy kontakt jest ryzykowny? | Bezpłatny pomiar i dojazd gratis |
| Czy mogę zaufać? | Gwarancja, opinie Google, właściciel |
| Czy dogadam się językowo? | PL/BY/RU/UA |
| Jak szybko zapytać? | Telefon + WhatsApp |

## 12. Blokady konwersji

| Problem | Co zrobić |
|---|---|
| Brak numeru telefonu | Nie można finalizować CTA |
| Brak linku WhatsApp | Nie można wdrożyć głównej ścieżki social/mobile |
| Brak Google Business Profile URL | Opinie nie powinny być pokazane jako niezweryfikowane |
| Brak realnych zdjęć | Nie budować sekcji `realizacje` jako real portfolio |
| Za długie teksty na mobile | Dzielić na krótkie sekcje i FAQ |
| Zbyt dużo CTA | Telefon + WhatsApp jako stały duet |

## 13. Tracking UX

| Scenariusz | Eventy |
|---|---|
| Google -> city -> phone | `view_city_page`, `click_phone` |
| Google -> ceny -> WhatsApp | `start_price_estimate`, `click_whatsapp` |
| Facebook -> home -> WhatsApp | `click_whatsapp` z parametrem `source=social` jeśli możliwe |
| GBP -> kontakt -> phone | `click_phone` |
| LED page -> WhatsApp | `view_service_page`, `click_whatsapp` |

## 14. Wniosek dla projektu

Strona musi mieć dwie równoległe logiki:

| Logika | Dla kogo | Jak działa |
|---|---|---|
| SEO / Google | Użytkownik z konkretnym zapytaniem | Dostaje lokalną stronę, cenę, FAQ, kontakt |
| Social / visual | Użytkownik reaguje na obraz | Dostaje efekt, szybkie fakty, WhatsApp |

Dlatego homepage i `/ceny` muszą być jednocześnie:

1. czytelne dla Google;
2. szybkie i wizualne dla social traffic;
3. mobilne i kontaktowe dla WhatsApp-first users.

