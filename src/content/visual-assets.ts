export type RoomKey = "salon" | "kuchnia" | "łazienka" | "mieszkanie";
export type FinishKey = "matowy" | "satynowy" | "polysk" | "podswietlany";

export type VisualAsset = {
  src: string;
  alt: string;
  title: string;
  meta: string;
  room: RoomKey;
  // Faktura folii na obrazie — do filtrowania galerii.
  finish: FinishKey;
  label: "Tak może wyglądać Twój sufit";
};

export const visualAssets: VisualAsset[] = [
  {
    src: "/images/hero.png",
    alt: "Nowoczesny salon z kuchnią, sufitem napinanym i liniowym oświetleniem",
    title: "Salon z sufitem napinanym i linią LED",
    meta: "salon z kuchnią / LED / połysk",
    room: "salon",
    finish: "polysk",
    label: "Tak może wyglądać Twój sufit"
  },
  {
    src: "/images/kuchnia-10m2-photo.png",
    alt: "Kuchnia z sufitem napinanym",
    title: "Kuchnia z czystym wykończeniem",
    meta: "kuchnia / jasny efekt",
    room: "kuchnia",
    finish: "matowy",
    label: "Tak może wyglądać Twój sufit"
  },
  {
    src: "/images/lazienka-6m2-photo.png",
    alt: "Łazienka z sufitem napinanym",
    title: "Łazienka i strefa wilgotna",
    meta: "łazienka / pomieszczenie wilgotne",
    room: "łazienka",
    finish: "satynowy",
    label: "Tak może wyglądać Twój sufit"
  },
  {
    src: "/images/mieszkanie-45m2-led-photo.png",
    alt: "Mieszkanie z sufitem napinanym i LED",
    title: "Mieszkanie z linią LED",
    meta: "mieszkanie / LED / inspiracja",
    room: "mieszkanie",
    finish: "matowy",
    label: "Tak może wyglądać Twój sufit"
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
