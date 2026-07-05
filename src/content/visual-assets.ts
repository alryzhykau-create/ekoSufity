export type RoomKey = "salon" | "kuchnia" | "łazienka" | "mieszkanie";
export type FinishKey = "matowy" | "satynowy" | "polysk" | "podswietlany";

export type VisualAsset = {
  src: string;
  alt: string;
  title: string;
  meta: string;
  room: RoomKey;
  // Faktura folii na wizualizacji — do filtrowania realizacji.
  finish: FinishKey;
  label: "Wizualizacja przykładowego efektu";
};

export const visualAssets: VisualAsset[] = [
  {
    src: "/images/hero.png",
    alt: "Nowoczesny salon z kuchnią, sufitem napinanym i liniowym oświetleniem",
    title: "Salon z sufitem napinanym i linią LED",
    meta: "salon z kuchnią / LED / połysk",
    room: "salon",
    finish: "polysk",
    label: "Wizualizacja przykładowego efektu"
  },
  {
    src: "/images/kuchnia-10m2-photo.png",
    alt: "Wizualizacja kuchni z sufitem napinanym",
    title: "Kuchnia z czystym wykończeniem",
    meta: "kuchnia / jasny efekt",
    room: "kuchnia",
    finish: "matowy",
    label: "Wizualizacja przykładowego efektu"
  },
  {
    src: "/images/lazienka-6m2-photo.png",
    alt: "Wizualizacja łazienki z sufitem napinanym",
    title: "Łazienka i strefa wilgotna",
    meta: "łazienka / pomieszczenie wilgotne",
    room: "łazienka",
    finish: "satynowy",
    label: "Wizualizacja przykładowego efektu"
  },
  {
    src: "/images/mieszkanie-45m2-led-photo.png",
    alt: "Wizualizacja mieszkania z sufitem napinanym i LED",
    title: "Mieszkanie z linią LED",
    meta: "mieszkanie / LED / inspiracja",
    room: "mieszkanie",
    finish: "matowy",
    label: "Wizualizacja przykładowego efektu"
  }
];

// Etykiety do filtrów realizacji (klucz -> nazwa wyświetlana, liczba mnoga).
export const roomLabels: Record<RoomKey, string> = {
  salon: "Salony",
  kuchnia: "Kuchnie",
  łazienka: "Łazienki",
  mieszkanie: "Mieszkania"
};

export const finishLabels: Record<FinishKey, string> = {
  matowy: "Matowe",
  satynowy: "Satynowe",
  polysk: "Połysk",
  podswietlany: "Podświetlane"
};
