# EkoSufity: badanie rynku, SEO, UX/CRO i architektura serwisu

Data: 2026-05-24  
Rynek: `sufity napinane`, Wroclaw + miasta do ok. 100 km  
Cel: skalowalny serwis SEO + lead generation + premium service business

## 1. Executive Summary

### Najwazniejszy wniosek

Rynek `sufity napinane Wroclaw / Dolny Slask` jest konkurencyjny w samym Wroclawiu i znacznie slabszy w miastach satelitarnych. Najwieksza szansa dla EkoSufity to nie pojedynczy landing, ale wielostronicowy system: strona glowna + miasto + typ sufitu + oswietlenie LED + cennik + realizacje + poradnik + FAQ + kalkulator.

### Fakty z aktualnego researchu

| Obszar | Potwierdzone obserwacje |
|---|---|
| SERP Wroclaw | Widoczne sa lokalne i regionalne strony: EkoSufity, PawBud, Brilliance, Dynara Arc, VDL Service, Napinamy Sufity, Burela, SufitON, katalogi typu Oferteo/Fixly. |
| Typowe oferty | `bezplatny pomiar`, `wycena`, `montaz`, `LED`, `linie swietlne`, `gwarancja`, `cennik`, `realizacje`. |
| Cena | Konkurenci najczesciej pokazuja widełki albo ceny "od"; dokladna cena jest przenoszona do wyceny po pomiarze. |
| Strony lokalne | Dla Wroclawia konkurencja ma strony dedykowane. Dla Dlugoleki, Olesnicy, Trzebnicy, Oławy, Brzegu i Swiebodzic widoczna jest luka na dobre lokalne podstrony. |
| Stary site EkoSufity | Ma realny asset: brand, oferta, miasto, realizacje/portfolio, cennik, FAQ, kontakt. Jednoczesnie wyglada jak prosty szablon, ma slaba architekture SEO i wiele elementow do weryfikacji. |
| Nowy Vercel site | Ma zdecydowanie lepsza logike CRO: hero, trust bar, ceny, realizacje, proces, FAQ, final CTA. Ryzyko: demo-dane typu opinie, liczby i ceny nie moga byc publikowane bez potwierdzenia. |

### Hipotezy strategiczne

| Hipoteza | Dlaczego ma sens | Jak zweryfikowac |
|---|---|---|
| EkoSufity moze szybciej pozyskac leady z lokalnych miast niz z samego Wroclawia | Mniejsza liczba dedykowanych landingow dla miast satelitarnych | Search Console po 60-90 dniach: impresje/clicks dla `sufity napinane [miasto]` |
| Najlepszy money-cluster to `sufity napinane + miasto + cena/montaz/LED` | Intencja jest komercyjna i blisko kontaktu | Test landingow + call tracking |
| Premium pozycjonowanie bedzie skuteczniejsze niz agresywne "tanio/najtaniej" | Produkt jest wizualny, zwiazany z remontem i zaufaniem do wykonawcy | A/B test hero: `dokladna wycena i estetyczny montaz` vs `najlepsza cena` |

### Priorytety wdrozenia

| Priorytet | Co zrobic | Efekt |
|---|---|---|
| P0 | Zweryfikowac realne dane: ceny, gwarancja, dojazd, czas montazu, opinie, liczby realizacji, obszar dzialania | Brak ryzyka falszywych claimow |
| P0 | Zbudowac finalna strone glowna i `/lokalizacje/wroclaw` | Najszybszy efekt SEO + CRO |
| P1 | Uruchomic `/ceny`, `/realizacje`, `/uslugi/sufity-napinane`, `/uslugi/oswietlenie-led` | Odpowiedzi na glowne obiekcje |
| P1 | Stworzyc 10-15 lokalnych stron miast z unikalnym kontekstem | Skalowanie organiczne |
| P2 | Rozbudowac poradnik i FAQ pod topical authority | Dlugoterminowy ruch informacyjny |

## 2. Market Research

### Mapa miast i potencjalu

Legenda konkurencji: `wysoka` = wiele firm/landingow, `srednia` = kilku widocznych graczy, `niska` = glownie agregatory albo strony z innych miast.

| Miasto | Konkurencja | Glowni widoczni konkurenci / typy wynikow | Typowe offer/CTA | Najczesciej rankujace strony | Luka dla EkoSufity | Money keywords |
|---|---:|---|---|---|---|---|
| Wroclaw | wysoka | EkoSufity, PawBud, Brilliance, Dynara Arc, VDL Service, Napinamy Sufity, Burela, SufitON, Oferteo/Fixly | `Bezpłatny pomiar`, `Poproś o wycenę`, `Zadzwoń`, `Sprawdź cenę` | homepage, lokalne strony Wroclaw, cennik, realizacje | Premium UX + realne realizacje + lepsze lokalne SEO dzielnic | `sufity napinane Wrocław`, `sufit napinany Wrocław cena`, `montaż sufitów napinanych Wrocław` |
| Dlugoleka | niska | wyniki z Wroclawia, katalogi, firmy regionalne | `wycena`, `kontakt`, `dojazd` | strony Wroclaw / ogolne uslugi | Dedykowana strona z logistyka dojazdu i realizacjami okolicznymi | `sufity napinane Długołęka`, `sufit napinany Długołęka` |
| Olesnica | niska-srednia | regionalni wykonawcy z Wroclawia, katalogi | `bezpłatna wycena`, `pomiar` | ogolne strony uslug, katalogi | Strona lokalna z jasnym obszarem pracy Wroclaw-Olesnica | `sufity napinane Oleśnica`, `montaż sufitu napinanego Oleśnica` |
| Legnica | srednia | EkoSufity lokalnie, Brilliance, PawBud/strony regionalne, agregatory | `wycena`, `cennik`, `realizacje` | lokalne landingi i cenniki | Dobra podstrona z casami/zdjeciami moze konkurowac | `sufity napinane Legnica`, `sufity napinane cena Legnica` |
| Walbrzych | srednia | Brilliance, PawBud/regionalni, EkoSufity, agregatory | `pomiar`, `wycena`, `LED` | landing lokalny, homepage regionalny | Premium lokalna strona + FAQ o dojezdzie i terminach | `sufity napinane Wałbrzych`, `sufity napinane LED Wałbrzych` |
| Swidnica | srednia | Brilliance, Mar-Wil, EkoSufity, regionalni | `montaż`, `bezpłatny pomiar`, `cena od` | lokalne strony, portfolio | Mozna przebic slabe UX przez lepsze realizacje i kalkulator | `sufity napinane Świdnica`, `sufit napinany Świdnica cena` |
| Lubin | niska-srednia | Brilliance/regionalni, katalogi, wyniki Legnica/Wroclaw | `wycena`, `kontakt` | agregatory i strony regionalne | Lokalny landing ma duzy sens, jesli firma realnie obsluguje Lubin | `sufity napinane Lubin`, `montaż sufitów Lubin` |
| Glogow | niska-srednia | wyniki regionalne, Brilliance, katalogi | `cena`, `pomiar`, `kontakt` | strony regionalne, katalogi | Szansa na top przez dedykowana strone + FAQ | `sufity napinane Głogów`, `sufit napinany cena Głogów` |
| Opole | srednia-wysoka | SUFITY.NET, TK Sufity, Finish Design, DPS/DOM, Altodesign, firmy z Brzegu/Opola | `wycena`, `cennik`, `montaż`, `LED` | lokalne strony i strony firmowe | Opole wymaga silniejszej lokalizacji i proof, bo to oddzielny rynek | `sufity napinane Opole`, `sufity napinane Opole cena` |
| Jelenia Gora | niska-srednia | Brilliance/regionalni, katalogi | `pomiar`, `wycena`, `gwarancja` | agregatory i strony regionalne | Warto tylko jesli EkoSufity realnie obsluguje dojazdowo | `sufity napinane Jelenia Góra`, `sufity napinane Karkonosze` |
| Trzebnica | niska | SufitON, Sufitowski, katalogi, firmy z Wroclawia | `wycena`, `kontakt`, `dojazd` | katalogi i strony okoliczne | Bardzo dobra luka dla lokalnej strony | `sufity napinane Trzebnica`, `montaż sufitów Trzebnica` |
| Olawa | niska-srednia | JK Home, firmy z Wroclawia, agregatory | `remonty`, `wycena`, `kontakt` | strony uslug remontowych i regionalnych | Dobre miejsce na lokalny landing `Wrocław + Oława` | `sufity napinane Oława`, `sufit napinany Oława` |
| Brzeg | niska-srednia | M2/Brzeg, SUFITY.NET/Opole, katalogi | `wycena`, `cena`, `kontakt` | katalogi, strony Opole/Brzeg | Jesli obslugiwany, strona lokalna moze przejac long-tail | `sufity napinane Brzeg`, `montaż sufitu napinanego Brzeg` |
| Swiebodzice | niska-srednia | EkoSufity, Brilliance/regionalni, katalogi | `wycena`, `montaż`, `LED` | strony regionalne | Strona powinna byc polaczona z Walbrzych/Swidnica | `sufity napinane Świebodzice`, `sufity napinane okolice Wałbrzycha` |
| Dzierzoniow / Bielawa | niska | regionalni, katalogi | `wycena`, `kontakt` | agregatory | Dobry long-tail, jesli dojazd realny | `sufity napinane Dzierżoniów`, `sufity napinane Bielawa` |
| Siechnice / Katy Wroclawskie / Sroda Slaska | niska | firmy z Wroclawia, katalogi | `dojazd`, `pomiar`, `wycena` | Wroclaw pages | Najlatwiejsze lokalne extension Wroclawia | `sufity napinane Siechnice`, `sufity napinane Kąty Wrocławskie`, `sufity napinane Środa Śląska` |

### Co konkurenci najczesciej obiecuja

| Offer | Status w SERP | Jak EkoSufity powinno to uzyc |
|---|---|---|
| `Bezpłatny pomiar` | Bardzo czeste | Uzyc tylko jesli rzeczywiscie bezplatny; inaczej `Pomiar i dokładna wycena` |
| `Montaż w 1 dzień` | Czeste | Bezpieczniej: `Wiele standardowych realizacji wykonujemy w 1 dzień` tylko jesli prawda |
| `Cena od ... zł/m²` | Czeste | Pokazac widełki lub scenariusze, ale z dopiskiem `po pomiarze` |
| `Gwarancja` | Czeste | Podac konkret: na co, ile lat, dokument, warunki |
| `LED / linie świetlne` | Bardzo czeste | Traktowac jako osobny upsell i osobna strona SEO |
| `Realizacje` | Czeste, ale czesto slabo opisane | Dac opisy: miasto, pomieszczenie, metraz, typ, oswietlenie |
| `Kalkulator` | Wystepuje u czesci graczy | Dac orientacyjny kalkulator + kontakt do dokladnej wyceny |

### Slabe miejsca konkurencji

| Problem | Co widac na rynku | Jak wykorzystac |
|---|---|---|
| Szablonowe strony | Duze hero, ogolne claimy, malo realnych danych | Premium layout, spokojny ton, konkretne bloki decyzyjne |
| Brak opisanych realizacji | Galerie bez kontekstu | Case cards z `miasto / pomieszczenie / typ / LED / zakres` |
| Slaba lokalnosc | Miasta czesto tylko w title/H1 | Dedykowane lokalne FAQ, dojazd, okolice, podobne realizacje |
| Niejasne ceny | Albo brak cen, albo agresywne `od` | Wyjasnic czynniki ceny i pokazac scenariusze bez obietnic |
| Zbyt agresywne CTA | `Zamów teraz`, `promocja`, presja | Spokojne CTA: `Poproś o wycenę`, `Umów pomiar`, `Wyślij zdjęcie` |
| Slaby mobile | Telefon/formularz bywa schowany | Sticky mobile contact bar + krotki formularz |
| Brak trust details | Opinie bez zrodla, brak danych firmy | Link do Google Reviews, NIP/REGON, realne zdjecia, osoba odpowiedzialna |

## 3. Competitor Analysis

### Glowni konkurenci i ich patterny

| Konkurent / typ | Potwierdzone elementy | Silne strony | Slabe punkty / szansa |
|---|---|---|---|
| EkoSufity old site | Wroclaw, realizacje, cennik od 120 zl/m², FAQ, kontakt, Trustindex, oferta LED i fototapety | Brand juz istnieje, ma lokalny kontekst | Wyglad szablonowy, slabiej premium, architektura SEO ograniczona |
| EkoSufity Vercel | Hero, trust bar, cennik, realizacje, proces, kalkulator CTA, opinie, FAQ, final form | Bardzo dobra logika CRO i premium kierunek | Dane demo musza byc zweryfikowane; ryzyko nieprawdziwych claimow |
| PawBud | Landing Wroclaw, oferta: sufity napinane, LED, cennik, darmowa wycena | Dedykowana lokalna strona, mocne SEO text blocks | Visual/service premium mozna zrobic lepiej |
| Brilliance | Sufity napinane, sufity LED, wiele miast, cennik i poradnik | Szeroka regionalna obecność, SEO content | Potencjalnie bardziej katalogowo; luka na spokojny premium UX |
| Dynara Arc / VDL / Napinamy / Burela | Wroclaw i Dolny Slask, oferta montazu, LED, realizacje | Lokalne relevance | Czesto brakuje kompletnego decision flow i opisanych case studies |
| SUFITY.NET / TK Sufity / Finish Design Opole | Opole i okolice, cennik/oferta/realizacje | Silni w Opolu | EkoSufity musi miec mocny proof dla Opola, inaczej bedzie zbyt dojazdowe |
| Katalogi: Oferteo, Fixly, Favore | Rankuja na lokalne frazy | Widocznosc SEO i opinie | Uzytkownik nadal potrzebuje wyboru firmy; EkoSufity moze przechwycic ruch przez lepszy landing |

### CTA, ktore warto stosowac po polsku

| Sytuacja | CTA glowne | CTA drugie |
|---|---|---|
| Strona glowna | `Umów pomiar i wycenę` | `Zobacz realizacje` |
| Miasto | `Poproś o wycenę w [miasto]` | `Sprawdź realizacje w okolicy` |
| Cennik | `Wyślij wymiary do wyceny` | `Sprawdź, co wpływa na cenę` |
| Realizacje | `Chcę podobny efekt` | `Zobacz więcej realizacji` |
| LED | `Dobierz oświetlenie do sufitu` | `Zobacz scenariusze LED` |
| Mobile sticky | `Zadzwoń` / `Wycena` | `WhatsApp` tylko jesli realnie obslugiwany |

### Audyt starego i nowego serwisu EkoSufity

#### SWOT

| Obszar | Old: ekosufity.pl | New: eko-sufity-4bzd.vercel.app |
|---|---|---|
| Strengths | Istniejacy brand, strona indeksowana, kontakt, cennik, portfolio, FAQ | Lepszy UX, premium layout, mocny hero, proces, trust bar, final CTA |
| Weaknesses | Szablonowy wyglad, slaba informacyjna architektura, malo city-page systemu, ryzyko powtarzalnych blokow | Demo claimy/opinie/ceny moga byc niezweryfikowane, brak pelnego SEO clusteru |
| Opportunities | Przeniesc realne tresci i proof do nowej architektury | Stac sie skalowalnym serwisem SEO dla Dolnego Slaska |
| Threats | Utrata brand equity przy zbyt duzej zmianie bez przekierowan | Publikacja fake/demo danych obnizy zaufanie i moze zaszkodzic prawnie/SEO |

#### Co zostawic

| Element | Dzialanie |
|---|---|
| Nazwa EkoSufity i domena | Zachowac, wzmocnic branding i spojnosc logo |
| Oferta `sufity napinane`, `LED`, `fototapety / nadruk` jesli realne | Rozdzielic na strony uslug/typow |
| Kontakt i obszar Wroclaw | Uczytelnic w hero i stopce |
| FAQ ze starej strony | Przepisac po polsku naturalnie, przypisac do intencji |
| Realizacje | Opisac i przypisac do typow pomieszczen/miast |

#### Co usunac albo naprawic

| Problem | Rekomendacja |
|---|---|
| Niepotwierdzone opinie, liczby, ceny, gwarancje | Zostawic tylko potwierdzone. Reszte oznaczyc jako `do weryfikacji` przed publikacja. |
| Zbyt ogolne slogany | Zamienic na konkret: `sufity napinane z montażem we Wrocławiu i okolicach` |
| Miasta jako prosta podmiana nazwy | Dodac lokalny kontekst, FAQ, dojazd, podobne realizacje |
| Social icons bez realnych profili | Usunac albo podlaczyc do aktywnych profili |
| Cennik bez kontekstu | Wyjasnic czynniki: metraz, liczba narozy, LED, profil, material, dostep do pomieszczenia |

## 4. SEO Strategy

### SEO silo: rekomendowana struktura

```text
/
/ceny
/realizacje
/realizacje/[slug]
/kontakt
/faq
/o-firmie

/uslugi
/uslugi/sufity-napinane
/uslugi/montaz-sufitow-napinanych
/uslugi/oswietlenie-led
/uslugi/linie-swietlne
/uslugi/karnisze-sufitowe
/uslugi/sufity-dwupoziomowe

/rodzaje-sufitow
/rodzaje-sufitow/matowe
/rodzaje-sufitow/satynowe
/rodzaje-sufitow/blyszczace
/rodzaje-sufitow/podswietlane
/rodzaje-sufitow/translucent
/rodzaje-sufitow/gwiazdziste-niebo
/rodzaje-sufitow/perforowane
/rodzaje-sufitow/akustyczne

/lokalizacje
/lokalizacje/wroclaw
/lokalizacje/dlugoleka
/lokalizacje/olesnica
/lokalizacje/legnica
/lokalizacje/walbrzych
/lokalizacje/swidnica
/lokalizacje/lubin
/lokalizacje/glogow
/lokalizacje/opole
/lokalizacje/jelenia-gora
/lokalizacje/trzebnica
/lokalizacje/olawa
/lokalizacje/brzeg
/lokalizacje/swiebodzice

/poradnik
/poradnik/sufity-napinane-cena
/poradnik/sufit-napinany-czy-plyty-gk
/poradnik/jaki-sufit-napinany-do-lazienki
/poradnik/sufit-napinany-z-led
/poradnik/jak-przygotowac-pomieszczenie-do-montazu
```

### Money keywords

| Priorytet | Fraza | Intencja | Docelowa strona |
|---:|---|---|---|
| P0 | `sufity napinane Wrocław` | lokalna komercyjna | `/lokalizacje/wroclaw` |
| P0 | `sufity napinane cena` | cena / komercyjna | `/ceny` |
| P0 | `sufit napinany cena za m2` | cena | `/ceny` |
| P0 | `montaż sufitów napinanych Wrocław` | wykonawca | `/uslugi/montaz-sufitow-napinanych` + city |
| P0 | `sufit napinany z LED Wrocław` | upsell / design | `/uslugi/oswietlenie-led` + city |
| P1 | `sufity napinane Dolny Śląsk` | regionalna | `/lokalizacje` |
| P1 | `sufity napinane Legnica` | lokalna | `/lokalizacje/legnica` |
| P1 | `sufity napinane Wałbrzych` | lokalna | `/lokalizacje/walbrzych` |
| P1 | `sufity napinane Świdnica` | lokalna | `/lokalizacje/swidnica` |
| P1 | `sufity napinane Opole` | lokalna | `/lokalizacje/opole` |

### Secondary keywords

| Cluster | Frazy |
|---|---|
| Typy | `sufit napinany matowy`, `sufit napinany satynowy`, `sufit napinany połysk`, `sufit napinany podświetlany`, `sufit translucent`, `sufit gwiaździste niebo` |
| LED | `linie świetlne w suficie`, `oświetlenie LED sufit napinany`, `profile LED`, `taśmy LED`, `punkty świetlne`, `szyny magnetyczne` |
| Pomieszczenia | `sufit napinany w łazience`, `sufit napinany w kuchni`, `sufit napinany w salonie`, `sufit napinany w korytarzu` |
| Obiekcje | `czy sufit napinany jest trwały`, `sufit napinany a wilgoć`, `sufit napinany opinie`, `sufit napinany wady i zalety` |
| Porownania | `sufit napinany czy płyty g-k`, `sufit napinany czy podwieszany`, `sufit napinany vs karton gips` |

### Related entities i NLP

| Entity | Slowa i zwiazki semantyczne |
|---|---|
| Material | `membrana PVC`, `tkanina poliestrowa`, `powłoka matowa`, `połysk`, `satyna`, `translucent` |
| Montaz | `profil`, `bagietka`, `narożniki`, `pomiar`, `napinanie`, `opalarka/nagrzewnica`, `wycena`, `odbiór` |
| Swiatlo | `LED`, `linie świetlne`, `taśmy LED`, `zasilacz`, `ściemniacz`, `temperatura barwowa`, `CRI`, `punkty świetlne` |
| Efekt | `optyczne powiększenie`, `równa powierzchnia`, `ukrycie instalacji`, `bez szpachlowania`, `bez malowania` |
| Zaufanie | `gwarancja`, `umowa`, `realizacje`, `opinie Google`, `NIP`, `REGON`, `serwis`, `doradztwo` |
| Lokalnosc | `Wrocław`, `Dolny Śląsk`, `pomiar na miejscu`, `dojazd`, `okolice Wrocławia` |

### Intenty uzytkownikow

| Intent | Co chce wiedziec uzytkownik | Strona/blok |
|---|---|---|
| Cena | Ile zaplace i co zmienia koszt | `/ceny`, kalkulator, price factors |
| Czas | Ile trwa montaz i kiedy termin | proces, FAQ, formularz |
| Porownanie | Czy lepiej niz plyty g-k | poradnik + blok porownawczy |
| Design | Jaki efekt pasuje do mieszkania | typy, galeria, realizacje |
| Montaz | Czy bedzie kurz, halas, zniszczenia | proces, FAQ, zdjecia z montazu |
| Gwarancja | Co jesli cos sie stanie | trust block, regulamin gwarancji |
| Bezpieczenstwo | Materialy, wilgoc, temperatura | FAQ techniczne |
| LED | Jakie linie, barwa, sterowanie | `/uslugi/oswietlenie-led` |
| Przestrzen | Czy sufit powiekszy optycznie pokoj | typy: polysk, LED, jasne kolory |

### Obowiazkowe strony

| Priorytet | URL | H1 po polsku |
|---:|---|---|
| P0 | `/` | `Sufity napinane we Wrocławiu i okolicach` |
| P0 | `/lokalizacje/wroclaw` | `Sufity napinane Wrocław - pomiar, wycena i montaż` |
| P0 | `/ceny` | `Ile kosztuje sufit napinany? Cena i czynniki wyceny` |
| P0 | `/realizacje` | `Realizacje sufitów napinanych` |
| P1 | `/uslugi/sufity-napinane` | `Sufity napinane z montażem` |
| P1 | `/uslugi/oswietlenie-led` | `Sufity napinane z oświetleniem LED` |
| P1 | `/rodzaje-sufitow` | `Rodzaje sufitów napinanych` |
| P1 | `/faq` | `Najczęstsze pytania o sufity napinane` |
| P1 | `/kontakt` | `Kontakt i wycena` |
| P2 | `/poradnik` | `Poradnik: sufity napinane, ceny, montaż i inspiracje` |

## 5. UX/CRO

### Jak powinien wygladac nowoczesny site w Polsce

Kierunek: `spokojny premium service`, nie agresywna firma remontowa. Pierwszy ekran ma pokazac realny efekt we wnetrzu, jasny obszar dzialania i kontakt. Uzytkownik nie powinien musiec czytac 10 sekcji, zeby zrozumiec, czy firma robi sufit w jego miescie.

### Struktura homepage

| Kolejnosc | Blok | Cel CRO | Uwagi |
|---:|---|---|---|
| 1 | Hero | Co, gdzie, dla kogo, CTA | H1 + realne zdjecie + telefon |
| 2 | Trust bar | Zmniejszyc ryzyko | Tylko realne fakty |
| 3 | Kalkulator / szybka wycena | Przelamac obiekcje ceny | Orientacyjnie, bez udawania dokladnosci |
| 4 | Realizacje | Proof wizualny | Opisane case cards |
| 5 | Proces | Uspokoic przed montazem | `pomiar -> wycena -> montaż -> odbiór` |
| 6 | Rozwiazania | Pokazac typy i upsell | Mat, LED, karnisz, lazienka, kuchnia |
| 7 | Osoba/firma | Human trust | Zdjecie realnej osoby, jesli mozliwe |
| 8 | Opinie Google | Social proof | Link do zrodla, bez fake |
| 9 | FAQ | Usunac obiekcje | Widoczne pytania |
| 10 | Final CTA | Kontakt | Formularz 3-4 pola |

### Kalkulator

| Pole | Typ | Dlaczego |
|---|---|---|
| `Miasto` | select/input | Lokalnosc i logistyka |
| `Pomieszczenie` | segment | Kuchnia/lazienka/salon zmienia intent |
| `Metraż` | input/slider | Glowny czynnik ceny |
| `Liczba narożników` | stepper | Czesto wplywa na koszt |
| `Oświetlenie` | checkboxy | LED, linie, punkty, karnisz |
| `Zdjęcie` | optional upload | Przyspiesza wstepna wycene |
| Wynik | zakres / `orientacyjnie` | Nie udawac dokladnej ceny |
| CTA | `Wyślij do dokładnej wyceny` | Lead capture |

### Formularz

Minimalny formularz:

```text
Imię
Telefon
Miasto
Krótko: metraż / pomieszczenie / LED
Opcjonalnie: zdjęcie
```

Mikrocopy:

```text
Oddzwonimy z pytaniami technicznymi i podamy, co jest potrzebne do dokładnej wyceny.
```

### Co buduje zaufanie

| Trust-factor | Jak pokazac |
|---|---|
| Google Reviews | Ocena + liczba opinii + link do profilu, jesli istnieje |
| Realizacje | Zdjecia bez stockowego wygladu, opisy techniczne |
| Dane firmy | Nazwa, NIP/REGON, email, telefon, obszar |
| Gwarancja | Konkretne warunki, nie tylko ikona |
| Proces | Krok po kroku, co robi klient i wykonawca |
| Osoba odpowiedzialna | Realne zdjecie, imie, rola |
| Materialy | Marki/certyfikaty tylko potwierdzone |

### Co obniza konwersje

| Element | Dlaczego szkodzi |
|---|---|
| Fake opinie i placeholdery | Klient szybko wyczuwa brak autentycznosci |
| Zbyt duzo animacji | Slabszy mobile i mniej skupienia na kontakcie |
| Brak telefonu na mobile | Utrata najbardziej gotowych leadow |
| Ogolne galerie | Uzytkownik nie widzi, czy to pasuje do jego mieszkania |
| Ceny bez wyjasnienia | `od 120 zł` bez kontekstu moze tworzyc falszywe oczekiwania |
| Zbyt "remontowy" design | Obniza premium perception |

## 6. Content Architecture

### Content map

| Typ strony | Liczba startowa | Cel | Priorytet |
|---|---:|---|---:|
| Homepage | 1 | Brand + lead | P0 |
| City pages | 14-20 | Lokalne SEO | P0/P1 |
| Service pages | 5-8 | Komercyjne uslugi | P1 |
| Type pages | 8-10 | Topical authority + design intent | P1/P2 |
| Realizacje | 12-30 case studies | Trust + SEO image | P1 |
| Cennik | 1 glowna + sekcje | Cena + lead | P0 |
| FAQ | 1 hub + FAQ na stronach | Obiekcje | P1 |
| Blog/poradnik | 20-40 artykulow | Long-tail | P2 |

### Strony, ktore najszybciej dadza leady

1. `/lokalizacje/wroclaw`
2. `/ceny`
3. `/uslugi/sufity-napinane`
4. `/uslugi/oswietlenie-led`
5. `/realizacje`
6. `/lokalizacje/olesnica`
7. `/lokalizacje/olawa`
8. `/lokalizacje/trzebnica`
9. `/lokalizacje/legnica`
10. `/lokalizacje/swidnica`

### Blog topics dla topical authority

| Priorytet | Temat | Intent |
|---:|---|---|
| P1 | `Sufit napinany cena - od czego zależy koszt?` | cena |
| P1 | `Sufit napinany czy płyty g-k: co wybrać?` | porownanie |
| P1 | `Sufit napinany w łazience - czy to dobre rozwiązanie?` | bezpieczeństwo/wilgoc |
| P1 | `Sufit napinany z LED - rodzaje linii świetlnych i efekty` | design/upsell |
| P2 | `Jak przygotować mieszkanie do montażu sufitu napinanego?` | montaz |
| P2 | `Matowy, satynowy czy błyszczący - jaki sufit wybrać?` | wybor |
| P2 | `Sufit podświetlany translucent - kiedy ma sens?` | inspiracja |
| P2 | `Najczęstsze błędy przy projektowaniu oświetlenia LED w suficie` | edukacja |
| P2 | `Sufit napinany w kuchni: para, tłuszcz i czyszczenie` | obiekcje |
| P2 | `Jak ukryć karnisz i instalacje w suficie napinanym?` | rozwiazania |

### Lokalna strona miasta: template bez thin content

```text
H1: Sufity napinane [Miasto] - pomiar, wycena i montaż

1. Hero: usluga + miasto + CTA
2. Czy obslugujemy [Miasto] i okolice: konkretne miejscowosci/dzielnice
3. Jak wyglada pomiar i montaz w [Miasto]
4. Realizacje w [Miasto] albo "podobne realizacje z okolicy"
5. Najczesciej wybierane rozwiazania w mieszkaniach/domach: mat, LED, karnisz, lazienka
6. Cena: czynniki + link do /ceny
7. FAQ lokalne: dojazd, termin, czy pomiar jest platny, czy mozna wyslac zdjecia
8. CTA finalne: Poproś o wycenę w [Miasto]
9. Linki: Wroclaw, pobliskie miasta, LED, realizacje, cennik
```

Unikalnosc dla kazdego miasta:

| Element | Co zmieniac realnie |
|---|---|
| Obszar | Dzielnice, pobliskie miejscowosci, dojazd |
| Realizacje | Case z miasta lub uczciwie `z okolicy` |
| FAQ | Pytania o logistyke i termin |
| Copy | Nie tylko podmieniac miasto; odnosic sie do typu zabudowy i lokalizacji |
| Internal links | Linkowac do najblizszych miast i realizacji |

## 7. Technical Architecture

### Next.js structure

Rekomendacja: Next.js App Router z data-driven routingiem.

```text
app/
  (site)/
    page.tsx
    ceny/page.tsx
    kontakt/page.tsx
    faq/page.tsx
    realizacje/page.tsx
    realizacje/[slug]/page.tsx
    uslugi/page.tsx
    uslugi/[slug]/page.tsx
    rodzaje-sufitow/page.tsx
    rodzaje-sufitow/[slug]/page.tsx
    lokalizacje/page.tsx
    lokalizacje/[city]/page.tsx
    poradnik/page.tsx
    poradnik/[slug]/page.tsx
  sitemap.ts
  robots.ts
components/
  sections/
  seo/
  forms/
  gallery/
  ui/
content/
  cities.ts
  services.ts
  ceiling-types.ts
  realizations.ts
  faqs.ts
  internal-links.ts
lib/
  seo/
  schema/
  analytics/
```

### Dynamic city pages

| Mechanizm | Uzycie |
|---|---|
| `generateStaticParams` | statyczne wygenerowanie stron miast |
| `generateMetadata` | title/description/canonical per city |
| `cities.ts` | dane miasta: nazwa, slug, intro, okolice, FAQ, nearby cities |
| `notFound()` | tylko dla zaakceptowanych miast |
| `sitemap.ts` | automatycznie dodaje miasta/uslugi/poradnik |

### Metadata strategy

| Page type | Title pattern | Description pattern |
|---|---|---|
| Home | `Sufity napinane Wrocław i okolice | EkoSufity` | `Pomiar, wycena i montaż sufitów napinanych...` |
| City | `Sufity napinane [Miasto] - montaż i wycena | EkoSufity` | `Montujemy sufity napinane w [Miasto] i okolicy...` |
| Service | `[Usługa] Wrocław - montaż i doradztwo | EkoSufity` | `Sprawdź możliwości, proces i wycenę...` |
| Prices | `Sufity napinane cena - od czego zależy koszt? | EkoSufity` | `Zobacz czynniki ceny i poproś o dokładną wycenę...` |
| Realization | `[Pomieszczenie], [Miasto] - sufit [typ] | EkoSufity` | `Realizacja sufitu napinanego: typ, oświetlenie, zakres...` |

### Schema.org

| Schema | Gdzie | Uwagi |
|---|---|---|
| `LocalBusiness` / subtype service business | home, contact, city pages | Dane musza byc zgodne z realnym NAP |
| `Service` | uslugi, city pages | `areaServed`, `provider`, `serviceType` |
| `BreadcrumbList` | wszystkie strony poza home | Widoczne breadcrumbs |
| `FAQPage` | tylko strony z widocznym FAQ | Google ogranicza rich results, ale struktura nadal pomaga porzadkowac dane |
| `ImageObject` | realizacje | Alt/title opisuje realne pomieszczenie |
| `Article` | poradnik | Autor/data/aktualizacja |
| `Review` | tylko jesli realne i zgodne z zasadami Google | Nie oznaczac fake/test opinii |

### Internal linking

| Zrodlo | Linkuje do |
|---|---|
| Home | Wroclaw, ceny, realizacje, LED, rodzaje, kontakt |
| City page | ceny, realizacje w okolicy, LED, pobliskie miasta, kontakt |
| Realization | miasto, typ sufitu, LED, podobne realizacje |
| Blog | service/city/ceny zależnie od intentu |
| Cennik | kalkulator, uslugi, FAQ, kontakt |
| Footer | top miasta, top uslugi, dane firmy, social/profile |

### Image optimization

| Zasada | Implementacja |
|---|---|
| LCP hero | `next/image`, preloaded/priority tylko dla hero, konkretne `sizes` |
| Galerie | WebP/AVIF, lazy loading, blur placeholder |
| Alt text | `Sufit napinany matowy z linią LED w salonie, Wrocław` |
| Realizacje | osobne miniatury i wersje detail |
| AI visuals | Nie udawac realizacji. Oznaczac jako wizualizacja/inspiracja |

### Core Web Vitals

| Metryka | Ryzyko | Rekomendacja |
|---|---|---|
| LCP | ciezki hero image | zoptymalizowany obraz, server components, minimal JS |
| CLS | galerie/karty bez rozmiarow | stale aspect-ratio i wymiary |
| INP | kalkulator i galerie z nadmiarem JS | male komponenty client-side tylko tam, gdzie trzeba |
| TTFB | dynamiczne dane | statyczne generowanie stron SEO |

### Programmatic SEO bez doorway pages

| Warunek | Co oznacza praktycznie |
|---|---|
| Kazde miasto ma unikalny sens | Lokalna logistyka, okolice, FAQ, realizacje |
| Dane sa jawne | `cities.ts` z polami wymaganymi i optional |
| Brak sztucznych claimow | Jesli brak realizacji: `Zobacz podobne realizacje z okolicy` |
| Kontrola jakosci | checklist przed publikacja miasta |
| Skalowanie PL | Mozna dodac miasta Polski, ale tylko przy realnym obszarze obslugi |

## 8. Visual Direction

### Wnioski z `img_arch`

| Asset | Wniosek |
|---|---|
| `a_clean_modern_website_homepage_mockup_landing.png` | Kierunek premium/service jest dobry: duzy realny visual, spokojna typografia, jasny flow CRO |
| `ekosufity_visualization_structure.png` | Struktura strony jest trafna: hero -> trust -> kalkulator -> realizacje -> proces -> rozwiazania -> opinie -> FAQ -> kontakt |
| `*-photo.png` | Wnetrza sa cieple, mieszkaniowe, premium, z LED jako efektem, nie jako agresywna ozdoba |
| `*-pencil.png` | Mozna uzyc do kalkulatora/procesu jako `projekt / koncepcja`, ale nie jako glowne proof |

### Rekomendowany styl

| Element | Rekomendacja |
|---|---|
| Ton | `calm technical premium`: spokojnie, rzeczowo, bez krzyku |
| Kolory | biel/off-white, grafit, cieply brass/copper CTA, neutralne szarosci, lekki akcent sage/blue-gray dla balansu |
| Czego unikac | dominacji bezu/piasku, zlotych gradientow, czarnych luksusowych kart wszedzie, agresywnego orange |
| Typography | czytelny sans, mocne H1, male naglowki w panelach; bez ciasnego letter-spacing |
| Karty | radius do 8px, nie zagniezdzac kart w kartach |
| Foto | realne realizacje, duze, jasne, ostre, bez stockowego blur |
| Premium signal | porzadek, przestrzen, szczegol, opis procesu, brak przesady |

### Jak pokazywac realizacje

| Poziom | Content |
|---|---|
| Card | zdjecie, miasto, pomieszczenie, typ sufitu, LED, metraz jesli znany |
| Detail page | problem, rozwiazanie, zakres, material, oswietlenie, czas, galeria |
| Filters | `salon`, `kuchnia`, `łazienka`, `LED`, `mat`, `połysk`, `karnisz`, `lokal usługowy` |
| Before/after | slider tylko jesli sa realne zdjecia przed i po |

### LED scenarios

| Scenariusz | Jak pokazac |
|---|---|
| Linia przy scianie | zdjecie + opis efektu `delikatne światło obwodowe` |
| Linia geometryczna | plan/rysunek + foto |
| Translucent | oznaczyc jako efekt dekoracyjny i swietlny |
| Karnisz ukryty | przed/po + detal profilu |
| Lazienka | bezpieczne oswietlenie, wilgoc, czyszczenie |

### Najczestsze bledy wizualne konkurencji

| Blad | Skutek |
|---|---|
| Stockowe/AI zdjecia jako realizacje | Spadek zaufania |
| Zbyt ciemny hero | Trudno ocenic produkt |
| Kolorowe LED jako glowne portfolio | Wyglada tanio, mniej premium |
| Ikony bez tresci | Nie odpowiadaja na obiekcje |
| Ciezkie karuzele | Slabszy mobile i CWV |
| Brak opisow zdjec | Slabsze SEO i mniej decyzji |

## TOP-10 najwazniejszych usprawnien

1. Zweryfikowac i oznaczyc wszystkie realne dane: ceny, gwarancje, opinie, liczby, czas montazu.
2. Zbudowac finalna homepage z realnym hero i jednym glownym CTA: `Umów pomiar i wycenę`.
3. Stworzyc `/lokalizacje/wroclaw` jako najmocniejsza lokalna strone.
4. Uruchomic `/ceny` z czynnikami ceny, scenariuszami i formularzem.
5. Opisac realizacje jako case studies, nie zwykla galerie.
6. Zrobic city pages dla Oławy, Olesnicy, Trzebnicy, Swidnicy, Legnicy, Walbrzycha.
7. Rozdzielic LED/linie swietlne/karnisze jako osobne uslugi i upsell.
8. Dodac sticky mobile contact bar: `Zadzwoń`, `Wycena`, ewentualnie `WhatsApp`.
9. Wdrozyc schema: LocalBusiness, Service, BreadcrumbList, FAQPage, Article.
10. Zbudowac poradnik pod cena, porownania, lazienke, LED i przygotowanie do montazu.

## Najsilniejsze przewagi konkurencyjne dla EkoSufity

| Przewaga | Warunek |
|---|---|
| Lokalny fokus Wroclaw + 100 km | Trzeba jasno pokazac obslugiwane miasta |
| Premium, spokojny UX | Bez agresywnych claimow i fake proof |
| Kalkulator / szybka wycena | Wynik jako orientacyjny, lead do dokladnej wyceny |
| Realizacje jako proof | Potrzebne prawdziwe zdjecia i opisy |
| LED jako specjalizacja | Osobna strona, galerie, scenariusze |
| Wielostronicowa architektura SEO | Systematyczne city/service/type/blog pages |
| Transparentna cena | Nie najtaniej, tylko jasno i uczciwie |

## Bledy, ktorych trzeba uniknac

| Blad | Ryzyko |
|---|---|
| Publikowanie demo opinii i fikcyjnych liczb | Utrata zaufania, ryzyko prawne, slabosc marki |
| Thin city pages | Slabe SEO, doorway-page risk |
| Kopiowanie konkurencji tekst po tekscie | Brak roznicy i ryzyko duplicate content |
| Hero bez produktu | Uzytkownik nie rozumie efektu |
| Brak cen lub agresywne `od` bez wyjasnienia | Zle leady i frustracja |
| Zbyt duzo dekoracji UI | Spadek premium i mobile UX |
| Brak przekierowan przy migracji starego site | Utrata istniejacej widocznosci |

## Zrodla i materialy wykorzystane

| Typ | Zrodlo |
|---|---|
| Stary site | https://ekosufity.pl/ |
| Nowy site | https://eko-sufity-4bzd.vercel.app/ |
| Konkurent | https://sufity-pawbud.pl/catalog/sufity-napinane-wroclaw.html |
| Konkurent / lokalny wynik | https://jk-home.pl/remonty/sufity-napinane |
| SERP obserwacje | zapytania: `sufity napinane Wrocław`, `sufity napinane Dolny Śląsk`, `sufity napinane Legnica`, `sufity napinane Wałbrzych`, `sufity napinane Oleśnica`, `sufity napinane Długołęka`, `sufity napinane Świdnica`, `sufity napinane Lubin`, `sufity napinane Głogów`, `sufity napinane Opole`, `sufity napinane Jelenia Góra`, `sufity napinane Oława`, `sufity napinane Trzebnica`, `sufity napinane Brzeg`, `sufity napinane Świebodzice` |
| Google Search Central | https://developers.google.com/search/docs |
| Local business structured data | https://developers.google.com/search/docs/appearance/structured-data/local-business |
| FAQ structured data | https://developers.google.com/search/docs/appearance/structured-data/faqpage |
| Hreflang | https://developers.google.com/search/docs/specialty/international/localized-versions |
| Google Business Profile | https://support.google.com/business |
| Core Web Vitals | https://web.dev/vitals/ |
| Next.js metadata | https://nextjs.org/docs/app/api-reference/functions/generate-metadata |
| Next.js dynamic routes | https://nextjs.org/docs/app/api-reference/functions/generate-static-params |
| Next.js JSON-LD | https://nextjs.org/docs/app/guides/json-ld |
| Lokalny skill | `/Users/al_ryzhykau/Projects_Codex/ekoSufity v3.0/SKILL.md` |
| Visual references | `/Users/al_ryzhykau/Projects_Codex/ekoSufity v3.0/img_arch` |

