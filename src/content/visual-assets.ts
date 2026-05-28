export type VisualAsset = {
  src: string;
  alt: string;
  title: string;
  meta: string;
  room: "salon" | "kuchnia" | "łazienka" | "mieszkanie";
  label: "Wizualizacja przykładowego efektu";
};

export const visualAssets: VisualAsset[] = [
  {
    src: "/images/hero.png",
    alt: "Nowoczesny salon z kuchnią, sufitem napinanym i liniowym oświetleniem",
    title: "Salon z sufitem napinanym i linią LED",
    meta: "salon z kuchnią / LED / połysk",
    room: "salon",
    label: "Wizualizacja przykładowego efektu"
  },
  {
    src: "/images/kuchnia-10m2-photo.png",
    alt: "Wizualizacja kuchni z sufitem napinanym",
    title: "Kuchnia z czystym wykończeniem",
    meta: "kuchnia / jasny efekt",
    room: "kuchnia",
    label: "Wizualizacja przykładowego efektu"
  },
  {
    src: "/images/lazienka-6m2-photo.png",
    alt: "Wizualizacja łazienki z sufitem napinanym",
    title: "Łazienka i strefa wilgotna",
    meta: "łazienka / pomieszczenie wilgotne",
    room: "łazienka",
    label: "Wizualizacja przykładowego efektu"
  },
  {
    src: "/images/mieszkanie-45m2-led-photo.png",
    alt: "Wizualizacja mieszkania z sufitem napinanym i LED",
    title: "Mieszkanie z linią LED",
    meta: "mieszkanie / LED / inspiracja",
    room: "mieszkanie",
    label: "Wizualizacja przykładowego efektu"
  }
];
