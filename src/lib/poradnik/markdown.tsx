import Link from "next/link";
import type { ReactNode } from "react";

// Minimalny renderer markdown pod teksty poradnika. Obsługuje dokładnie to,
// co występuje w plikach .md: nagłówki, akapity, pogrubienia, kursywę, linki,
// listy punktowane, tabele i poziome kreski. Świadomie nie sięgamy po
// zewnętrzną bibliotekę — zakres składni jest zamknięty i znany.

export type TocItem = {
  id: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Blok = {
  node: ReactNode;
  /* Wypełnione tylko dla nagłówków H2 — po nich wstawiamy planszę CTA. */
  h2Id?: string;
};

export type ParsedArticle = {
  /* Nagłówek z pierwszej linii pliku (# ...). */
  title: string;
  /* Akapit „Krótko: …" — na stronie wyróżniony w osobnej karcie. */
  shortAnswer: ReactNode;
  /* Reszta treści, już jako gotowe węzły. */
  body: Blok[];
  toc: TocItem[];
  faq: FaqItem[];
  /* Szacowany czas czytania w minutach. */
  readingMinutes: number;
};

const POLSKIE: Record<string, string> = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z"
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (znak) => POLSKIE[znak] ?? znak)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Zamienia **pogrubienie**, *kursywę* i [tekst](adres) na węzły Reacta.
function inline(text: string, klucz: string): ReactNode[] {
  const wzor = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  const czesci = text.split(wzor).filter((czesc) => czesc !== "");

  return czesci.map((czesc, i) => {
    const id = `${klucz}-${i}`;

    if (czesc.startsWith("**") && czesc.endsWith("**")) {
      return <strong key={id}>{czesc.slice(2, -2)}</strong>;
    }

    if (czesc.startsWith("*") && czesc.endsWith("*")) {
      return <em key={id}>{czesc.slice(1, -1)}</em>;
    }

    const link = czesc.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, etykieta, adres] = link;
      const wewnetrzny = adres.startsWith("/");
      return wewnetrzny ? (
        <Link className="inlineLink" href={adres} key={id}>
          {etykieta}
        </Link>
      ) : (
        <a className="inlineLink" href={adres} key={id} rel="noopener noreferrer" target="_blank">
          {etykieta}
        </a>
      );
    }

    return <span key={id}>{czesc}</span>;
  });
}

// Akapit bywa wielolinijkowy („**1. Krok.**\nOpis") — miękkie łamanie zostaje.
function akapit(blok: string, klucz: string): ReactNode {
  const linie = blok.split("\n");
  return (
    <p key={klucz}>
      {linie.map((linia, i) => (
        <span key={`${klucz}-l-${i}`}>
          {i > 0 ? <br /> : null}
          {inline(linia, `${klucz}-${i}`)}
        </span>
      ))}
    </p>
  );
}

function lista(blok: string, klucz: string): ReactNode {
  const pozycje = blok
    .split("\n")
    .filter((linia) => linia.startsWith("- "))
    .map((linia) => linia.slice(2));

  return (
    <ul className="artykulList" key={klucz}>
      {pozycje.map((pozycja, i) => (
        <li key={`${klucz}-i-${i}`}>{inline(pozycja, `${klucz}-${i}`)}</li>
      ))}
    </ul>
  );
}

function komorki(linia: string): string[] {
  return linia
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((komorka) => komorka.trim());
}

// Cennik (dwie kolumny: pozycja i kwota) czyta się lepiej jako lista par
// z kropkowanym łącznikiem niż jako tabela — wzrok biegnie prosto do kwoty.
function cennik(wiersze: string[][], naglowki: string[], klucz: string): ReactNode {
  return (
    <dl className="artykulCennik" key={klucz}>
      {wiersze.map((wiersz, i) => (
        <div key={`${klucz}-r-${i}`}>
          <dt>{inline(wiersz[0], `${klucz}-n-${i}`)}</dt>
          <span aria-hidden="true" />
          <dd aria-label={naglowki[1] || undefined}>{inline(wiersz[1], `${klucz}-c-${i}`)}</dd>
        </div>
      ))}
    </dl>
  );
}

// Szersze zestawienia zostają tabelą w stylu porównania z /ceny.
function tabela(blok: string, klucz: string): ReactNode {
  const linie = blok.split("\n").filter(Boolean);
  const naglowki = komorki(linie[0]);
  const wiersze = linie.slice(2).map(komorki);
  const pustyNaglowek = naglowki.every((komorka) => komorka === "");

  if (naglowki.length === 2) {
    return cennik(wiersze, naglowki, klucz);
  }

  return (
    <div className="comparisonScroll artykulTable" key={klucz}>
      <table className="comparisonTable">
        {pustyNaglowek ? null : (
          <thead>
            <tr>
              {naglowki.map((komorka, i) => (
                <th key={`${klucz}-h-${i}`}>{inline(komorka, `${klucz}-h-${i}`)}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {wiersze.map((wiersz, r) => (
            <tr key={`${klucz}-r-${r}`}>
              {wiersz.map((komorka, c) =>
                c === 0 ? (
                  <th key={`${klucz}-r-${r}-${c}`} scope="row">
                    {inline(komorka, `${klucz}-${r}-${c}`)}
                  </th>
                ) : (
                  <td data-label={naglowki[c]} key={`${klucz}-r-${r}-${c}`}>
                    {inline(komorka, `${klucz}-${r}-${c}`)}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// „**Pytanie?**\nOdpowiedź" w sekcji FAQ — do rozbicia na dane strukturalne.
function czyPytanie(blok: string): FaqItem | null {
  const linie = blok.split("\n");
  const pytanie = linie[0].match(/^\*\*(.+)\*\*$/);
  if (!pytanie || linie.length < 2) {
    return null;
  }
  return { question: pytanie[1], answer: linie.slice(1).join(" ").trim() };
}

export function parseArticle(markdown: string): ParsedArticle {
  const bloki = markdown
    .trim()
    .split(/\n{2,}/)
    .map((blok) => blok.trim())
    .filter(Boolean);

  const title = bloki[0].replace(/^#\s+/, "");
  const shortAnswer = akapit(bloki[1], "short");

  const toc: TocItem[] = [];
  const faq: FaqItem[] = [];
  const body: Blok[] = [];
  let wSekcjiFaq = false;

  bloki.slice(2).forEach((blok, i) => {
    const klucz = `b-${i}`;

    if (blok === "---") {
      return;
    }

    // Podpis „*Autor: Aleks…*" powtarza kartę autora pod artykułem.
    if (/^\*Autor:.*\*$/.test(blok)) {
      return;
    }

    // Wiersz „📞 numer — Aleks, EkoSufity" powtarza kartę autora i stopkę
    // kontaktową pod artykułem, więc go nie renderujemy.
    if (blok.startsWith("📞")) {
      return;
    }

    if (blok.startsWith("## ")) {
      const etykieta = blok.slice(3);
      const id = slugify(etykieta);
      wSekcjiFaq = etykieta.toLowerCase().startsWith("najczęstsze pytania");
      toc.push({ id, label: etykieta });
      body.push({
        h2Id: id,
        node: (
          <h2 id={id} key={klucz}>
            {inline(etykieta, klucz)}
          </h2>
        )
      });
      return;
    }

    if (blok.startsWith("### ")) {
      body.push({ node: <h3 key={klucz}>{inline(blok.slice(4), klucz)}</h3> });
      return;
    }

    if (blok.startsWith("|")) {
      body.push({ node: tabela(blok, klucz) });
      return;
    }

    // Blok bywa mieszany: zdanie wprowadzające, a pod nim punkty listy.
    const pierwszyPunkt = blok.split("\n").findIndex((linia) => linia.startsWith("- "));
    if (pierwszyPunkt !== -1) {
      const linie = blok.split("\n");
      if (pierwszyPunkt > 0) {
        body.push({ node: akapit(linie.slice(0, pierwszyPunkt).join("\n"), `${klucz}-p`) });
      }
      body.push({ node: lista(linie.slice(pierwszyPunkt).join("\n"), klucz) });
      return;
    }

    if (wSekcjiFaq) {
      const pytanie = czyPytanie(blok);
      if (pytanie) {
        faq.push(pytanie);
      }
    }

    body.push({ node: akapit(blok, klucz) });
  });

  const slowa = markdown.split(/\s+/).filter(Boolean).length;

  return {
    title,
    shortAnswer,
    body,
    toc,
    faq,
    readingMinutes: Math.max(1, Math.round(slowa / 200))
  };
}
