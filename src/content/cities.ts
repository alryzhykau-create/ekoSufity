export type City = {
  slug: string;
  name: string;
  // Nazwa w miejscowniku z przyimkiem, np. "we Wrocławiu", "w Świdnicy".
  locative: string;
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

// Nazwa miasta w miejscowniku z przyimkiem (do zdań typu "umów pomiar w ...").
const cityLocatives: Record<keyof typeof cityNames, string> = {
  wroclaw: "we Wrocławiu",
  olawa: "w Oławie",
  olesnica: "w Oleśnicy",
  dlugoleka: "w Długołęce",
  trzebnica: "w Trzebnicy",
  swidnica: "w Świdnicy",
  legnica: "w Legnicy",
  walbrzych: "w Wałbrzychu",
  brzeg: "w Brzegu",
  swiebodzice: "w Świebodzicach",
  dzierzoniow: "w Dzierżoniowie",
  bielawa: "w Bielawie",
  strzelin: "w Strzelinie",
  "sroda-slaska": "w Środzie Śląskiej",
  "katy-wroclawskie": "w Kątach Wrocławskich"
};

// Unikalny wstęp dla każdego miasta — usuwa duplikaty treści (SEO).
const intros: Record<keyof typeof cityNames, string> = {
  wroclaw:
    "Wrocław to nasza baza — tu montujemy sufity napinane najczęściej i tu dojazd na pomiar jest zawsze bezpłatny. Obsługujemy mieszkania, domy, lokale usługowe i biura w całym mieście oraz na obrzeżach. Doradzamy materiał, oświetlenie i detale, a dokładną cenę podajemy po bezpłatnym pomiarze.",
  olawa:
    "Oława leży około 30 km na południowy wschód od Wrocławia — blisko, więc dojeżdżamy tu szybko i bez dodatkowych opłat. Montujemy sufity napinane z oświetleniem LED w mieszkaniach, domach i lokalach. Cenę podajemy po bezpłatnym pomiarze.",
  olesnica:
    "Oleśnica znajduje się około 32 km na północny wschód od Wrocławia. Dojeżdżamy tu na bezpłatny pomiar i montujemy sufity napinane razem z oświetleniem i detalami. Dokładną cenę ustalamy po sprawdzeniu pomieszczenia.",
  dlugoleka:
    "Długołęka leży tuż pod Wrocławiem, około 15 km na północny wschód — to jedna z najbliższych lokalizacji. Dojeżdżamy tu bardzo szybko i bez opłat, montujemy sufity napinane z oświetleniem i detalami. Cenę podajemy po bezpłatnym pomiarze.",
  trzebnica:
    "Trzebnica leży około 26 km na północ od Wrocławia — to bliska lokalizacja, dojazd na pomiar jest szybki i bezpłatny. Montujemy sufity napinane z oświetleniem w mieszkaniach, domach i lokalach. Cenę podajemy po pomiarze.",
  swidnica:
    "Świdnica leży około 58 km na południe od Wrocławia — dojeżdżamy tu regularnie, w ramach bezpłatnego dojazdu do 100 km. Montujemy sufity napinane w mieszkaniach, domach i lokalach, razem z oświetleniem LED i detalami. Pomiar jest bezpłatny, a cenę podajemy po sprawdzeniu pomieszczenia.",
  legnica:
    "Legnica znajduje się około 74 km na zachód od Wrocławia, wzdłuż trasy A4. Dojeżdżamy tu na bezpłatny pomiar i montujemy sufity napinane z oświetleniem oraz detalami. Cena zależy od pomieszczenia i zakresu — podajemy ją po pomiarze.",
  walbrzych:
    "Wałbrzych leży około 80 km na południowy zachód od Wrocławia. Dojeżdżamy tu na pomiar i montaż sufitów napinanych w mieszkaniach, domach i lokalach. Doradzamy materiał i oświetlenie, a dokładną cenę ustalamy po bezpłatnym pomiarze.",
  brzeg:
    "Brzeg znajduje się około 45 km na południowy wschód od Wrocławia, przy trasie A4. Montujemy tu sufity napinane z oświetleniem i detalami — w mieszkaniach, domach i lokalach. Pomiar i dojazd są bezpłatne, cenę podajemy po sprawdzeniu pomieszczenia.",
  swiebodzice:
    "Świebodzice znajdują się około 65 km na południowy zachód od Wrocławia, blisko Świdnicy i Wałbrzycha. Dojeżdżamy tu na bezpłatny pomiar i montaż sufitów napinanych z oświetleniem. Cena zależy od pomieszczenia — podajemy ją po sprawdzeniu.",
  dzierzoniow:
    "Dzierżoniów leży około 61 km na południe od Wrocławia. Montujemy tu sufity napinane z oświetleniem LED i detalami — w mieszkaniach, domach i lokalach. Pomiar jest bezpłatny, a cenę podajemy po jego wykonaniu.",
  bielawa:
    "Bielawa znajduje się około 68 km na południe od Wrocławia, tuż obok Dzierżoniowa. Dojeżdżamy tu na pomiar i montaż sufitów napinanych z oświetleniem. Dokładną cenę ustalamy po bezpłatnym sprawdzeniu pomieszczenia.",
  strzelin:
    "Strzelin leży około 44 km na południe od Wrocławia. Montujemy tu sufity napinane z oświetleniem i detalami — w mieszkaniach, domach i lokalach. Pomiar i dojazd są bezpłatne, cenę podajemy po sprawdzeniu pomieszczenia.",
  "sroda-slaska":
    "Środa Śląska znajduje się około 37 km na zachód od Wrocławia, przy trasie A4. Dojeżdżamy tu szybko na bezpłatny pomiar i montujemy sufity napinane z oświetleniem. Cenę podajemy po pomiarze.",
  "katy-wroclawskie":
    "Kąty Wrocławskie znajdują się około 25 km na zachód od Wrocławia, przy trasie A4. Blisko, więc dojazd na pomiar jest szybki i bezpłatny. Montujemy sufity napinane z oświetleniem LED w mieszkaniach, domach i lokalach."
};

function city(slug: keyof typeof cityNames, priority: City["priority"], nearby: string[]): City {
  const name = cityNames[slug];

  return {
    slug,
    name,
    locative: cityLocatives[slug],
    priority,
    nearby,
    h1:
      slug === "wroclaw"
        ? "Sufity napinane Wrocław - bezpłatny pomiar i montaż"
        : `Sufity napinane ${name} - pomiar i montaż`,
    // Bez "| EkoSufity" — sufiks dokleja template tytułu w root layout.
    metaTitle:
      slug === "wroclaw"
        ? "Sufity napinane Wrocław - pomiar i montaż"
        : `Sufity napinane ${name} - pomiar i montaż`,
    metaDescription: `Sufity napinane ${name} i okolice. Bezpłatny pomiar, dojazd gratis do 100 km od Wrocławia, cena średnio ok. 120 zł/m² dla prostego sufitu MSD.`,
    intro: intros[slug]
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
