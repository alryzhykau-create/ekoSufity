# ekoSufity — zasada tła sekcji (zebra)

Reguła obowiązuje na **wszystkich** stronach serwisu. Strona główna jest wzorcem.

## Zasada

Sekcje treści układają się **naprzemiennie: biała → kremowa → biała → kremowa**,
od pierwszej sekcji pod hero aż do bloku kontaktu. Dwie sąsiednie sekcje nigdy nie
mają tego samego tła.

| Rola | Kolor | Wartość |
|---|---|---|
| Sekcja jasna | biel | `#ffffff` |
| Sekcja kremowa | krem | `var(--section-alt-bg)` = `#fbfaf7` |

**Jeden krem w całym serwisie.** Nie wolno wprowadzać drugiego odcienia
(wcześniej krążyły równolegle `#f9f7f4` i `#f7f4ee` — zostały usunięte).
Różnica biel/krem jest celowo subtelna: ma dzielić sekcje, nie krzyczeć.

## Wyjątki — nie biorą udziału w zebrze

- **Hero** (`.hero`, `.pageHero`) — ma własne tło ze zdjęciem lub gradientem.
- **Ciemna karta kontaktu** (`.finalContactCard`) — ciemna z założenia.
  Uwaga: sama *sekcja* `.finalCtaSection`, która ją otacza, jest kremowa
  i zamyka rytm.
- **Pasek zaufania** (`.trustBar`) — nachodzi na hero, nie jest sekcją treści.

## Jak to zapisane w kodzie

```css
.section      { background: #fff; }              /* domyślnie biała */
.sectionAlt   { background: var(--section-alt-bg); }  /* przełącznik na krem */
```

W markupie sekcje dostają klasy naprzemiennie:

```jsx
<section className="section">…</section>
<section className="section sectionAlt">…</section>
<section className="section">…</section>
```

### Sekcje generowane w pętli

Kolejność liczymy **od końca**, nie od początku — dzięki temu ostatni blok
zawsze styka się poprawnie z FAQ i kontaktem, niezależnie od liczby bloków:

```jsx
className={(blocks.length - 1 - index) % 2 === 0 ? "section sectionAlt" : "section"}
```

### Komponenty współdzielone

Blok, który stoi w różnych miejscach zebry na różnych stronach, dostaje props
`alt` zamiast tła na sztywno — o kolorze decyduje strona:

```jsx
<GoogleReviews alt />   // strona główna: krem
<GoogleReviews />       // /kontakt: biel
```

## Reguła dla nowej strony

1. Hero — własne tło, poza rytmem.
2. Pierwsza sekcja treści — **biała**.
3. Każda kolejna — odwrotnie niż poprzednia.
4. Sekcja tuż przed blokiem kontaktu — **biała** (bo kontakt jest kremowy).
5. Jeśli po bloku kontaktu jest jeszcze sekcja (np. „Powiązane") — **biała**.

## Kontrola

Otwórz stronę i przejrzyj sekcje po kolei. Dwa te same tła obok siebie = błąd.
