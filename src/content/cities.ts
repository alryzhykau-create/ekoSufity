export type City = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  priority: "P0" | "P1" | "P2";
  nearby: string[];
};

const cityNames = {
  wroclaw: "Wrocław",
  olawa: "Oława",
  olesnica: "Oleśnica",
  dlugoleka: "Długołęka",
  trzebnica: "Trzebnica",
  swidnica: "Świdnica",
  legnica: "Legnica",
  walbrzych: "Wałbrzych",
  brzeg: "Brzeg",
  swiebodzice: "Świebodzice",
  dzierzoniow: "Dzierżoniów",
  bielawa: "Bielawa",
  strzelin: "Strzelin",
  "sroda-slaska": "Środa Śląska",
  "katy-wroclawskie": "Kąty Wrocławskie"
} as const;

function city(slug: keyof typeof cityNames, priority: City["priority"], nearby: string[]): City {
  const name = cityNames[slug];

  return {
    slug,
    name,
    priority,
    nearby,
    h1:
      slug === "wroclaw"
        ? "Sufity napinane Wrocław - bezpłatny pomiar i montaż"
        : `Sufity napinane ${name} - pomiar i montaż`,
    metaTitle:
      slug === "wroclaw"
        ? "Sufity napinane Wrocław - pomiar i montaż | EkoSufity"
        : `Sufity napinane ${name} - pomiar i montaż | EkoSufity`,
    metaDescription: `Sufity napinane ${name} i okolice. Bezpłatny pomiar, dojazd gratis do 100 km od Wrocławia, cena średnio ok. 120 zł/m² dla prostego sufitu MSD.`,
    intro: `Montujemy sufity napinane w miejscowości ${name} oraz w okolicy. Przyjeżdżamy na bezpłatny pomiar, doradzamy materiał i oświetlenie, a dokładną cenę podajemy po sprawdzeniu pomieszczenia.`
  };
}

export const cities: City[] = [
  city("wroclaw", "P0", ["olawa", "olesnica", "dlugoleka", "trzebnica"]),
  city("olawa", "P1", ["wroclaw", "brzeg", "strzelin"]),
  city("olesnica", "P1", ["wroclaw", "dlugoleka", "trzebnica"]),
  city("dlugoleka", "P1", ["wroclaw", "olesnica", "trzebnica"]),
  city("trzebnica", "P1", ["wroclaw", "dlugoleka", "olesnica"]),
  city("swidnica", "P1", ["wroclaw", "walbrzych", "swiebodzice"]),
  city("legnica", "P1", ["wroclaw", "sroda-slaska", "swidnica"]),
  city("walbrzych", "P1", ["swidnica", "swiebodzice", "wroclaw"]),
  city("brzeg", "P2", ["olawa", "wroclaw", "olesnica"]),
  city("swiebodzice", "P2", ["swidnica", "walbrzych", "wroclaw"]),
  city("dzierzoniow", "P1", ["bielawa", "swidnica", "walbrzych"]),
  city("bielawa", "P2", ["dzierzoniow", "swidnica", "walbrzych"]),
  city("strzelin", "P2", ["olawa", "brzeg", "wroclaw"]),
  city("sroda-slaska", "P2", ["legnica", "wroclaw", "katy-wroclawskie"]),
  city("katy-wroclawskie", "P2", ["wroclaw", "sroda-slaska", "swidnica"])
];

export function getCity(slug: string) {
  return cities.find((cityItem) => cityItem.slug === slug);
}
