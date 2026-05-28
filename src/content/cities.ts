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
  lubin: "Lubin",
  glogow: "Głogów",
  "jelenia-gora": "Jelenia Góra",
  brzeg: "Brzeg",
  swiebodzice: "Świebodzice"
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
  city("olawa", "P1", ["wroclaw", "brzeg", "swidnica"]),
  city("olesnica", "P1", ["wroclaw", "dlugoleka", "trzebnica"]),
  city("dlugoleka", "P1", ["wroclaw", "olesnica", "trzebnica"]),
  city("trzebnica", "P1", ["wroclaw", "dlugoleka", "olesnica"]),
  city("swidnica", "P1", ["wroclaw", "walbrzych", "swiebodzice"]),
  city("legnica", "P1", ["wroclaw", "lubin", "glogow"]),
  city("walbrzych", "P1", ["swidnica", "swiebodzice", "wroclaw"]),
  city("lubin", "P2", ["legnica", "glogow", "wroclaw"]),
  city("glogow", "P2", ["lubin", "legnica", "wroclaw"]),
  city("jelenia-gora", "P2", ["walbrzych", "swidnica", "wroclaw"]),
  city("brzeg", "P2", ["olawa", "wroclaw", "olesnica"]),
  city("swiebodzice", "P2", ["swidnica", "walbrzych", "wroclaw"])
];

export function getCity(slug: string) {
  return cities.find((cityItem) => cityItem.slug === slug);
}
