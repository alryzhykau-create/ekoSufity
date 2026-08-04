// Poradnik — teksty artykułów leżą w plikach .md obok (src/content/poradnik/*.md)
// i są renderowane w czasie budowania. Tutaj trzymamy tylko metadane: adresy,
// zdjęcia, opisy do listy i daty.

export type Artykul = {
  slug: string;
  /* Nazwa pliku .md w src/content/poradnik. */
  plik: string;
  metaTitle: string;
  metaDescription: string;
  /* Krótszy tytuł na kartę w hubie i w „Przeczytaj też". */
  cardTitle: string;
  cardCopy: string;
  imageSrc: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
};

export const artykuly: Artykul[] = [
  {
    slug: "ile-kosztuje-sufit-napinany",
    plik: "ile-kosztuje-sufit-napinany.md",
    metaTitle: "Ile kosztuje sufit napinany? Ceny 2026 — Wrocław",
    metaDescription:
      "Prosty sufit napinany to średnio ok. 120 zł/m² razem z materiałem i montażem. Pełny cennik, przykłady wycen i to, co podnosi cenę. Wrocław i do 100 km.",
    cardTitle: "Ile kosztuje sufit napinany?",
    cardCopy:
      "Stawki na 2026 rok, pełny cennik dodatków i cztery przykłady realnych wycen — od łazienki po całe mieszkanie.",
    imageSrc: "/images/pomiar-rzut-mieszkania.jpg",
    imageAlt: "Rzut mieszkania z pomiarami do wyceny sufitu napinanego",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04"
  },
  {
    slug: "minusy-sufitow-napinanych",
    plik: "minusy-sufitow-napinanych.md",
    metaTitle: "Jakie są minusy sufitów napinanych? Szczera odpowiedź",
    metaDescription:
      "Cztery realne wady sufitu napinanego: ostre przedmioty, ok. 3 cm wysokości, wymiana całego płótna i brak montażu we własnym zakresie. Reszta to mity.",
    cardTitle: "Jakie są minusy sufitów napinanych?",
    cardCopy:
      "Cztery realne wady bez owijania w bawełnę — i lista rzeczy, które wadami nie są, choć często się o nich pisze.",
    imageSrc: "/images/mieszkanie-45m2-led-photo.png",
    imageAlt: "Mieszkanie z sufitem napinanym i linią LED",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04"
  },
  {
    slug: "matowy-satynowy-czy-polysk",
    plik: "matowy-satynowy-czy-polysk.md",
    metaTitle: "Matowy, satynowy czy połysk? Jak wybrać fakturę sufitu",
    metaDescription:
      "Mat, satyna i połysk — czym się różnią, gdzie się sprawdzają i co potrafi przeszkadzać. Porównanie w tabeli i trzy pytania, które ułatwiają wybór.",
    cardTitle: "Matowy, satynowy czy połysk?",
    cardCopy:
      "Każda faktura z jej mocną stroną i wadą, tabela porównawcza i trzy pytania, po których decyzja zajmuje pięć minut.",
    imageSrc: "/images/faktura-satynowy.jpg",
    imageAlt: "Próbka folii satynowej do sufitu napinanego",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04"
  },
  {
    slug: "czy-montaz-sufitu-brudzi",
    plik: "czy-montaz-sufitu-brudzi.md",
    metaTitle: "Czy montaż sufitu napinanego brudzi? Ile trwa",
    metaDescription:
      "Montaż sufitu napinanego to nie remont: bez skuwania, bez gruzu, zwykle bez wynoszenia mebli, najczęściej 1–2 dni. Krok po kroku i co przygotować.",
    cardTitle: "Czy montaż sufitu brudzi?",
    cardCopy:
      "Przebieg montażu krok po kroku, ile realnie trwa, co przygotować i dlaczego meble lepiej wnieść przed montażem.",
    imageSrc: "/images/hero.png",
    imageAlt: "Salon z kuchnią po montażu sufitu napinanego",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04"
  }
];

export function znajdzArtykul(slug: string): Artykul | undefined {
  return artykuly.find((artykul) => artykul.slug === slug);
}
