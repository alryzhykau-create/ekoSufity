# Aktualna architektura strony EkoSufity

Ten dokument opisuje roboczą strukturę strony po rozdzieleniu menu na strony informacyjne, rozwiązania, ceny, realizacje i kontakt.

## Główne strony w menu

| Menu | URL | Rola strony | Główny intent | Status |
| --- | --- | --- | --- | --- |
| Strona główna | `/` | Szybkie zrozumienie oferty, obszaru działania i kontaktu | `sufity napinane Wrocław` | gotowe |
| Sufity napinane | `/sufity-napinane` | Edukacja + rodzaje sufitów + wejście do rozwiązań | `sufity napinane`, `rodzaje sufitów napinanych` | gotowe |
| Rozwiązania | `/rozwiazania` | Hub dla sufitu, LED, linii świetlnych i karniszy | `sufit napinany z LED`, `linie świetlne`, `ukryty karnisz` | gotowe |
| Ceny | `/ceny` | Wyjaśnienie ceny i czynników kosztu | `sufity napinane cena` | gotowe |
| Realizacje | `/realizacje` | Inspiracje i wizualne potwierdzenie efektów | `sufity napinane realizacje` | gotowe, wymaga realnych zdjęć |
| FAQ | `/faq` | Redukcja obiekcji przed kontaktem | pytania o cenę, pomiar, LED, gwarancję | gotowe |
| Kontakt | `/kontakt` | Telefon, WhatsApp, e-mail, miasta i obszar 100 km | kontakt / pomiar / dojazd | gotowe |

## Strony rozwiązań

| Strona | URL | Co pokazuje | CTA |
| --- | --- | --- | --- |
| Sufity napinane z montażem | `/rozwiazania/sufity-napinane` | bazowy sufit, materiały, koszt, proces | `Zadzwoń i umów pomiar`, `Napisz na WhatsApp` |
| Oświetlenie LED | `/rozwiazania/oswietlenie-led` | punkty, światło obwodowe, zasilacze, zakres dodatkowy | `Napisz na WhatsApp` |
| Linie świetlne | `/rozwiazania/linie-swietlne` | typy linii, efekt wizualny, wycena po długości | `Zapytaj o linie świetlne` |
| Ukryte karnisze | `/rozwiazania/karnisze-sufitowe` | nisza, karnisz, połączenie z LED | `Zapytaj o karnisz` |

## Struktura strony typu `Rozwiązanie`

1. Hero: nazwa rozwiązania, krótki opis, telefon + WhatsApp, wizualizacja.
2. Możliwości: warianty danego rozwiązania jako krótkie karty.
3. Cena: co jest bazą, co jest dodatkiem, jakie czynniki wpływają na koszt.
4. Korzyści: dlaczego warto planować to razem z sufitem.
5. FAQ: pytania przed pomiarem.
6. CTA: kontakt przez telefon albo WhatsApp.

## Zasada cen

Nie używamy `od ok. 120 zł/m²` jako obietnicy najniższej ceny. Po analizie tabeli `KALKULACJA CENOWA - Sufity Napinane` przyjmujemy komunikat:

`średnio ok. 120 zł/m² dla prostego sufitu MSD`

Dokładna cena zawsze po pomiarze i ustaleniu materiału, narożników, LED, profili oraz dodatków.

## URL i kompatybilność

Nowa struktura używa `/rozwiazania`. Stare adresy `/uslugi` i `/uslugi/[slug]` zostają jako redirect do nowych stron, żeby nie łamać linków.
