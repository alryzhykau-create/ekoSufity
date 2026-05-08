export type LocationType = "city" | "district" | "neighborhood";

export type LocationItem = {
  name: string;
  slug: string;
  title: string;
  type: LocationType;
  priority: number;
  distanceFromWroclawKm: number;
  withinServiceArea: boolean;
  seoTitle: string;
  seoDescription: string;
  introText: string;
  localBenefits: string[];
  popularSolutions: string[];
  nearbyAreas: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
};

const solutionSets = {
  classic: ["Sufity matowe", "Sufity satynowe", "Punkty świetlne", "Linie LED", "Wentylacja"],
  premium: ["Sufity satynowe", "Sufity błyszczące", "Linie LED", "Szyny magnetyczne", "Ukryty karnisz"],
  technical: ["Sufity matowe", "Sufity z oświetleniem LED", "Punkty świetlne", "Wentylacja", "Luki rewizyjne"],
  compact: ["Sufity matowe", "Sufity błyszczące", "Punkty świetlne", "Oprawy wpuszczane"],
  led: ["Sufity z oświetleniem LED", "Linie LED", "Taśmy LED", "Podświetlenie obwodowe", "Szyny magnetyczne"],
};

function localFaq(name: string) {
  return [
    {
      question: `Czy montujecie sufity napinane w lokalizacji ${name}?`,
      answer:
        "Tak. Obsługujemy tę lokalizację w ramach obszaru działania EkoSufity po wcześniejszym ustaleniu zakresu prac i terminu pomiaru.",
    },
    {
      question: `Czy można zamówić pomiar w lokalizacji ${name}?`,
      answer:
        "Tak. Pomiar umawiamy po krótkiej rozmowie o metrażu, typie pomieszczenia, rodzaju sufitu i planowanym oświetleniu.",
    },
    {
      question: `Ile kosztuje sufit napinany w lokalizacji ${name}?`,
      answer:
        "Cena zależy od powierzchni, materiału, profili, oświetlenia i warunków montażu. Orientacyjne zakresy znajdziesz w cenniku i kalkulatorze.",
    },
    {
      question: `Czy wykonujecie sufity z oświetleniem LED w lokalizacji ${name}?`,
      answer:
        "Tak. Wykonujemy punkty świetlne, linie LED, taśmy LED, szyny magnetyczne i podświetlenie obwodowe, jeśli projekt pozwala na takie rozwiązania.",
    },
    {
      question: "Czy można wysłać zdjęcia i wymiary przez WhatsApp?",
      answer:
        "Tak. Zdjęcia, wymiary i krótki opis pomieszczenia pomagają przygotować wstępną rozmowę oraz zaplanować pomiar.",
    },
  ];
}

export const locations: LocationItem[] = [
  {
    name: "Wrocław",
    slug: "wroclaw",
    title: "Sufity napinane Wrocław",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 0,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Wrocław | Montaż i wycena | EkoSufity",
    seoDescription:
      "Sufity napinane we Wrocławiu. Montaż w mieszkaniach, domach, biurach i lokalach usługowych. Mat, LED, profile i bezpłatny pomiar.",
    introText:
      "We Wrocławiu wykonujemy sufity napinane do mieszkań, domów, biur i lokali usługowych. Pomagamy dobrać materiał, oświetlenie, profile i rozwiązania techniczne tak, aby sufit pasował do konkretnego wnętrza i budżetu.",
    localBenefits: ["Pomiar na terenie Wrocławia", "Sufity do mieszkań, domów i lokali", "Pełny zakres rozwiązań LED"],
    popularSolutions: solutionSets.premium,
    nearbyAreas: ["lesnica", "wroclaw-krzyki", "wroclaw-fabryczna", "wroclaw-psie-pole", "wroclaw-stare-miasto", "wroclaw-srodmiescie"],
    faq: localFaq("Wrocław"),
    ctaText: "Zapytaj o sufit napinany we Wrocławiu",
  },
  {
    name: "Leśnica",
    slug: "lesnica",
    title: "Sufity napinane Leśnica",
    type: "neighborhood",
    priority: 1,
    distanceFromWroclawKm: 12,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Leśnica | Montaż Wrocław zachód | EkoSufity",
    seoDescription:
      "Montaż sufitów napinanych na Leśnicy i w zachodniej części Wrocławia. Sufity matowe, LED, profile i indywidualna wycena.",
    introText:
      "Montujemy sufity napinane na Leśnicy i w zachodniej części Wrocławia. To dobre rozwiązanie do mieszkań, domów i lokali, w których liczy się szybki montaż, estetyczne wykończenie i możliwość połączenia sufitu z oświetleniem LED.",
    localBenefits: ["Obsługa zachodniej części Wrocławia", "Szybki pomiar po kontakcie", "LED i ukryte karnisze przy oknach"],
    popularSolutions: ["Sufity matowe", "Sufity z oświetleniem LED", "Linie LED", "Ukryty karnisz", "Punkty świetlne"],
    nearbyAreas: ["wroclaw", "wroclaw-fabryczna", "sroda-slaska", "katy-wroclawskie"],
    faq: localFaq("Leśnica"),
    ctaText: "Zapytaj o sufit napinany na Leśnicy",
  },
  {
    name: "Wrocław Krzyki",
    slug: "wroclaw-krzyki",
    title: "Sufity napinane Wrocław Krzyki",
    type: "district",
    priority: 1,
    distanceFromWroclawKm: 6,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Wrocław Krzyki | Montaż i LED | EkoSufity",
    seoDescription:
      "Sufity napinane na Krzykach we Wrocławiu. Montaż w mieszkaniach, apartamentach i lokalach. Mat, satyna, LED i profile.",
    introText:
      "Na Krzykach często pracujemy przy mieszkaniach, apartamentach i lokalach usługowych, gdzie ważne są czyste detale oraz dobre oświetlenie. Dobieramy sufit do wysokości pomieszczenia, zabudowy i planowanego stylu wnętrza.",
    localBenefits: ["Rozwiązania do apartamentów", "Profile przy zabudowie i płytkach", "Linie LED oraz punkty świetlne"],
    popularSolutions: solutionSets.premium,
    nearbyAreas: ["wroclaw", "wroclaw-srodmiescie", "wroclaw-stare-miasto", "siechnice"],
    faq: localFaq("Wrocław Krzyki"),
    ctaText: "Zapytaj o sufit napinany na Krzykach",
  },
  {
    name: "Wrocław Fabryczna",
    slug: "wroclaw-fabryczna",
    title: "Sufity napinane Wrocław Fabryczna",
    type: "district",
    priority: 1,
    distanceFromWroclawKm: 8,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Wrocław Fabryczna | EkoSufity",
    seoDescription:
      "Montaż sufitów napinanych na Fabrycznej we Wrocławiu. Sufity matowe, LED, ukryte karnisze, pomiar i wycena.",
    introText:
      "W dzielnicy Fabryczna realizujemy sufity napinane zarówno w nowych mieszkaniach, jak i remontowanych wnętrzach. Przy pomiarze zwracamy uwagę na profile, oświetlenie i połączenia z zabudową meblową.",
    localBenefits: ["Pomiar w dużej dzielnicy Wrocławia", "Sufity do mieszkań i domów", "Ukryte karnisze i LED"],
    popularSolutions: ["Sufity matowe", "Sufity satynowe", "Linie LED", "Ukryty karnisz", "Luki rewizyjne"],
    nearbyAreas: ["wroclaw", "lesnica", "wroclaw-stare-miasto", "katy-wroclawskie"],
    faq: localFaq("Wrocław Fabryczna"),
    ctaText: "Zapytaj o sufit napinany na Fabrycznej",
  },
  {
    name: "Wrocław Psie Pole",
    slug: "wroclaw-psie-pole",
    title: "Sufity napinane Wrocław Psie Pole",
    type: "district",
    priority: 1,
    distanceFromWroclawKm: 9,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Wrocław Psie Pole | Montaż i wycena | EkoSufity",
    seoDescription:
      "Sufity napinane na Psim Polu we Wrocławiu. Sufity do domów, mieszkań i lokali, LED, wentylacja i bezpłatny pomiar.",
    introText:
      "Na Psim Polu wykonujemy sufity napinane w domach, mieszkaniach i lokalach, gdzie często potrzebne są praktyczne rozwiązania: matowe wykończenie, punkty świetlne, wentylacja i szybki montaż.",
    localBenefits: ["Dobre rozwiązania do domów", "Punkty świetlne i wentylacja", "Indywidualna wycena po pomiarze"],
    popularSolutions: solutionSets.technical,
    nearbyAreas: ["wroclaw", "olesnica", "trzebnica", "wroclaw-srodmiescie"],
    faq: localFaq("Wrocław Psie Pole"),
    ctaText: "Zapytaj o sufit napinany na Psim Polu",
  },
  {
    name: "Wrocław Stare Miasto",
    slug: "wroclaw-stare-miasto",
    title: "Sufity napinane Wrocław Stare Miasto",
    type: "district",
    priority: 1,
    distanceFromWroclawKm: 2,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Wrocław Stare Miasto | EkoSufity",
    seoDescription:
      "Sufity napinane na Starym Mieście we Wrocławiu. Estetyczne wykończenie mieszkań, apartamentów, biur i lokali.",
    introText:
      "Na Starym Mieście we Wrocławiu liczą się detale, estetyka i dobra organizacja prac. Sufit napinany pozwala szybko uzyskać równą powierzchnię, a przy odpowiednim planie także czyste linie światła.",
    localBenefits: ["Montaż w mieszkaniach i lokalach", "Estetyczne profile przy ścianach", "Opcje LED do wnętrz premium"],
    popularSolutions: ["Sufity satynowe", "Sufity błyszczące", "Linie LED", "Szyny magnetyczne", "Ukryty karnisz"],
    nearbyAreas: ["wroclaw", "wroclaw-srodmiescie", "wroclaw-krzyki", "wroclaw-fabryczna"],
    faq: localFaq("Wrocław Stare Miasto"),
    ctaText: "Zapytaj o sufit napinany na Starym Mieście",
  },
  {
    name: "Wrocław Śródmieście",
    slug: "wroclaw-srodmiescie",
    title: "Sufity napinane Wrocław Śródmieście",
    type: "district",
    priority: 1,
    distanceFromWroclawKm: 3,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Wrocław Śródmieście | EkoSufity",
    seoDescription:
      "Montaż sufitów napinanych w Śródmieściu Wrocławia. Sufity do mieszkań, biur i lokali z LED oraz profilami.",
    introText:
      "W Śródmieściu Wrocławia wykonujemy sufity napinane w mieszkaniach, biurach i lokalach, gdzie często trzeba połączyć szybki montaż z dopracowanym światłem i dostępem technicznym.",
    localBenefits: ["Sufity do mieszkań i biur", "LED oraz oprawy wpuszczane", "Planowanie dostępu do instalacji"],
    popularSolutions: solutionSets.led,
    nearbyAreas: ["wroclaw", "wroclaw-stare-miasto", "wroclaw-krzyki", "wroclaw-psie-pole"],
    faq: localFaq("Wrocław Śródmieście"),
    ctaText: "Zapytaj o sufit napinany w Śródmieściu",
  },
  {
    name: "Oleśnica",
    slug: "olesnica",
    title: "Sufity napinane Oleśnica",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 35,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Oleśnica | Montaż i wycena | EkoSufity",
    seoDescription:
      "Montaż sufitów napinanych w Oleśnicy i okolicach. Sufity matowe, LED, profile, punkty świetlne i nowoczesne wykończenia.",
    introText:
      "W Oleśnicy wykonujemy sufity napinane do mieszkań, domów i lokali. Najczęściej planujemy proste sufity matowe, satynowe oraz układy z punktami świetlnymi lub liniami LED.",
    localBenefits: ["Pomiar w Oleśnicy", "Szybki montaż bez klasycznego remontu", "Warianty do łazienek i kuchni"],
    popularSolutions: solutionSets.classic,
    nearbyAreas: ["wroclaw-psie-pole", "wroclaw", "trzebnica", "jelcz-laskowice"],
    faq: localFaq("Oleśnica"),
    ctaText: "Zapytaj o sufit napinany w Oleśnicy",
  },
  {
    name: "Oława",
    slug: "olawa",
    title: "Sufity napinane Oława",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 30,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Oława | Montaż i wycena | EkoSufity",
    seoDescription:
      "Sufity napinane w Oławie i okolicach. Matowe, satynowe, błyszczące, punkty świetlne, linie LED i indywidualna wycena.",
    introText:
      "Realizujemy sufity napinane w Oławie i okolicach. W zależności od projektu możemy wykonać sufit matowy, satynowy, błyszczący, z punktami świetlnymi, liniami LED lub innymi rozwiązaniami technicznymi.",
    localBenefits: ["Sufity do mieszkań i domów", "Punkty świetlne w kuchni i łazience", "Wycena po ustaleniu zakresu"],
    popularSolutions: ["Sufity matowe", "Sufity błyszczące", "Punkty świetlne", "Linie LED", "Wentylacja"],
    nearbyAreas: ["jelcz-laskowice", "siechnice", "wroclaw-krzyki", "swidnica"],
    faq: localFaq("Oława"),
    ctaText: "Zapytaj o sufit napinany w Oławie",
  },
  {
    name: "Świdnica",
    slug: "swidnica",
    title: "Sufity napinane Świdnica",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 55,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Świdnica | Montaż i wycena | EkoSufity",
    seoDescription:
      "Montaż sufitów napinanych w Świdnicy i okolicach. Sufity matowe, LED, profile, szyny magnetyczne i nowoczesne rozwiązania.",
    introText:
      "Wykonujemy pomiar i montaż sufitów napinanych w Świdnicy oraz okolicach. Dojeżdżamy z Wrocławia, przygotowujemy indywidualną wycenę i pomagamy dobrać sufit, oświetlenie oraz profile montażowe do konkretnego wnętrza.",
    localBenefits: ["Pomiar i doradztwo", "Montaż z oświetleniem LED", "Indywidualna wycena"],
    popularSolutions: ["Sufity matowe", "Sufity satynowe", "Linie LED", "Punkty świetlne", "Szyny magnetyczne"],
    nearbyAreas: ["dzierzoniow", "bielawa", "wroclaw", "olawa"],
    faq: localFaq("Świdnica"),
    ctaText: "Zapytaj o sufit napinany w Świdnicy",
  },
  {
    name: "Dzierżoniów",
    slug: "dzierzoniow",
    title: "Sufity napinane Dzierżoniów",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 65,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Dzierżoniów | Montaż i wycena | EkoSufity",
    seoDescription:
      "Sufity napinane w Dzierżoniowie. Montaż, pomiar, sufity matowe, LED, profile i wycena dla domów oraz mieszkań.",
    introText:
      "W Dzierżoniowie sufity napinane sprawdzają się przy szybkiej metamorfozie wnętrz bez klasycznego remontu. Przy pomiarze dobieramy powierzchnię, profile i ewentualne oświetlenie do istniejącego układu pomieszczenia.",
    localBenefits: ["Szybkie odświeżenie wnętrz", "Sufity matowe i satynowe", "Pomiar z indywidualną wyceną"],
    popularSolutions: solutionSets.classic,
    nearbyAreas: ["bielawa", "swidnica", "wroclaw", "strzelin"],
    faq: localFaq("Dzierżoniów"),
    ctaText: "Zapytaj o sufit napinany w Dzierżoniowie",
  },
  {
    name: "Bielawa",
    slug: "bielawa",
    title: "Sufity napinane Bielawa",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 75,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Bielawa | Montaż i wycena | EkoSufity",
    seoDescription:
      "Montaż sufitów napinanych w Bielawie. Sufity z LED, matowe, satynowe, szyny magnetyczne i indywidualne wyceny.",
    introText:
      "W Bielawie realizujemy zarówno proste sufity napinane, jak i rozwiązania z oświetleniem do mieszkań oraz lokali usługowych. Pomiar pozwala ustalić metraż, instalacje i finalny zakres prac.",
    localBenefits: ["Rozwiązania do lokali usługowych", "LED i szyny magnetyczne", "Estetyczne profile przy ścianach"],
    popularSolutions: ["Sufity matowe", "Sufity z oświetleniem LED", "Szyny magnetyczne", "Linie LED", "Luki rewizyjne"],
    nearbyAreas: ["dzierzoniow", "swidnica", "wroclaw", "strzelin"],
    faq: localFaq("Bielawa"),
    ctaText: "Zapytaj o sufit napinany w Bielawie",
  },
  {
    name: "Trzebnica",
    slug: "trzebnica",
    title: "Sufity napinane Trzebnica",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 30,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Trzebnica | Montaż i wycena | EkoSufity",
    seoDescription:
      "Sufity napinane w Trzebnicy i okolicach. Pomiar, montaż, sufity matowe, LED, profile i kalkulator wyceny.",
    introText:
      "W Trzebnicy wykonujemy sufity napinane do domów i mieszkań. Przy projektach z kuchnią, salonem i korytarzem często proponujemy proste matowe wykończenie oraz linie LED albo punkty świetlne.",
    localBenefits: ["Pomiar w Trzebnicy", "Sufity do kuchni i salonu", "LED planowany przed montażem"],
    popularSolutions: ["Sufity matowe", "Linie LED", "Punkty świetlne", "Ukryty karnisz", "Wentylacja"],
    nearbyAreas: ["wroclaw-psie-pole", "wroclaw", "olesnica", "sroda-slaska"],
    faq: localFaq("Trzebnica"),
    ctaText: "Zapytaj o sufit napinany w Trzebnicy",
  },
  {
    name: "Siechnice",
    slug: "siechnice",
    title: "Sufity napinane Siechnice",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 15,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Siechnice | Montaż blisko Wrocławia | EkoSufity",
    seoDescription:
      "Montaż sufitów napinanych w Siechnicach. Sufity matowe, LED, punkty świetlne, wentylacja i wycena po pomiarze.",
    introText:
      "W Siechnicach obsługujemy realizacje blisko Wrocławia, szczególnie w nowych mieszkaniach i domach. Dobieramy sufit do pomieszczenia, instalacji i planowanego oświetlenia.",
    localBenefits: ["Blisko Wrocławia", "Sufity do nowych mieszkań", "Punkty świetlne i wentylacja"],
    popularSolutions: solutionSets.technical,
    nearbyAreas: ["wroclaw-krzyki", "olawa", "wroclaw", "jelcz-laskowice"],
    faq: localFaq("Siechnice"),
    ctaText: "Zapytaj o sufit napinany w Siechnicach",
  },
  {
    name: "Kąty Wrocławskie",
    slug: "katy-wroclawskie",
    title: "Sufity napinane Kąty Wrocławskie",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 25,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Kąty Wrocławskie | Montaż i wycena | EkoSufity",
    seoDescription:
      "Sufity napinane w Kątach Wrocławskich. Montaż w domach i mieszkaniach, sufity matowe, satynowe, LED i ukryte karnisze.",
    introText:
      "W Kątach Wrocławskich realizujemy sufity napinane w domach i mieszkaniach, gdzie często ważne są ukryte karnisze, światło pośrednie oraz estetyczne połączenia przy ścianach.",
    localBenefits: ["Realizacje w domach pod Wrocławiem", "Ukryte karnisze i LED", "Wycena po pomiarze"],
    popularSolutions: ["Sufity satynowe", "Sufity matowe", "Ukryty karnisz", "Podświetlenie obwodowe", "Linie LED"],
    nearbyAreas: ["wroclaw-fabryczna", "wroclaw", "lesnica", "sroda-slaska"],
    faq: localFaq("Kąty Wrocławskie"),
    ctaText: "Zapytaj o sufit napinany w Kątach Wrocławskich",
  },
  {
    name: "Jelcz-Laskowice",
    slug: "jelcz-laskowice",
    title: "Sufity napinane Jelcz-Laskowice",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 30,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Jelcz-Laskowice | EkoSufity",
    seoDescription:
      "Montaż sufitów napinanych w Jelczu-Laskowicach. Sufity matowe, LED, punkty świetlne, wentylacja i indywidualna wycena.",
    introText:
      "W Jelczu-Laskowicach montujemy sufity napinane w mieszkaniach, domach i lokalach, gdzie liczy się praktyczne wykończenie, dobre światło oraz możliwość czystego montażu bez długiego remontu.",
    localBenefits: ["Sufity do domów i lokali", "Oświetlenie punktowe i LED", "Wentylacja planowana przed montażem"],
    popularSolutions: solutionSets.technical,
    nearbyAreas: ["olawa", "siechnice", "olesnica", "wroclaw"],
    faq: localFaq("Jelcz-Laskowice"),
    ctaText: "Zapytaj o sufit napinany w Jelczu-Laskowicach",
  },
  {
    name: "Środa Śląska",
    slug: "sroda-slaska",
    title: "Sufity napinane Środa Śląska",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 35,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Środa Śląska | Montaż i wycena | EkoSufity",
    seoDescription:
      "Sufity napinane w Środzie Śląskiej. Pomiar, wycena, montaż, profile, LED i rozwiązania do mieszkań oraz domów.",
    introText:
      "W Środzie Śląskiej wykonujemy sufity napinane do nowych i remontowanych wnętrz. Podczas pomiaru sprawdzamy ściany, instalacje i możliwości montażu profili oraz oświetlenia.",
    localBenefits: ["Pomiar z dojazdem", "Profile i LED", "Sufity do nowych oraz remontowanych wnętrz"],
    popularSolutions: ["Sufity satynowe", "Sufity matowe", "Linie LED", "Punkty świetlne", "Luki rewizyjne"],
    nearbyAreas: ["lesnica", "wroclaw-fabryczna", "katy-wroclawskie", "wroclaw"],
    faq: localFaq("Środa Śląska"),
    ctaText: "Zapytaj o sufit napinany w Środzie Śląskiej",
  },
  {
    name: "Strzelin",
    slug: "strzelin",
    title: "Sufity napinane Strzelin",
    type: "city",
    priority: 1,
    distanceFromWroclawKm: 40,
    withinServiceArea: true,
    seoTitle: "Sufity napinane Strzelin | Montaż i wycena | EkoSufity",
    seoDescription:
      "Sufity napinane w Strzelinie. Montaż, pomiar i wycena sufitów do mieszkań, domów, łazienek i kuchni.",
    introText:
      "W Strzelinie obsługujemy montaże sufitów napinanych z naciskiem na szybki efekt i czystość prac. Dobieramy wariant do pomieszczenia, wilgotności i planowanego światła.",
    localBenefits: ["Sufity do łazienek i kuchni", "Punkty świetlne", "Dobór do wilgotnych pomieszczeń"],
    popularSolutions: ["Sufity matowe", "Sufity błyszczące", "Punkty świetlne", "Wentylacja", "Oprawy wpuszczane"],
    nearbyAreas: ["wroclaw-krzyki", "olawa", "dzierzoniow", "swidnica"],
    faq: localFaq("Strzelin"),
    ctaText: "Zapytaj o sufit napinany w Strzelinie",
  },
];

export const locationFilterOptions = [
  { label: "Wszystkie", value: "all" },
  { label: "Wrocław", value: "wroclaw" },
  { label: "Okolice Wrocławia", value: "outside-wroclaw" },
  { label: "Do 30 km", value: "to-30" },
  { label: "Do 50 km", value: "to-50" },
  { label: "Do 100 km", value: "to-100" },
] as const;

export type LocationFilterValue = (typeof locationFilterOptions)[number]["value"];

export function filterLocations(filter: LocationFilterValue) {
  if (filter === "wroclaw") {
    return locations.filter((location) => location.distanceFromWroclawKm <= 12);
  }

  if (filter === "outside-wroclaw") {
    return locations.filter((location) => location.distanceFromWroclawKm > 12);
  }

  if (filter === "to-30") {
    return locations.filter((location) => location.distanceFromWroclawKm <= 30);
  }

  if (filter === "to-50") {
    return locations.filter((location) => location.distanceFromWroclawKm <= 50);
  }

  if (filter === "to-100") {
    return locations.filter((location) => location.distanceFromWroclawKm <= 100);
  }

  return locations;
}

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function getRelatedLocations(slug: string, limit = 6) {
  const current = getLocationBySlug(slug);

  if (!current) {
    return locations.slice(0, limit);
  }

  const nearby = current.nearbyAreas
    .map((nearbySlug) => getLocationBySlug(nearbySlug))
    .filter((location): location is LocationItem => Boolean(location));
  const fallback = locations.filter((location) => location.slug !== slug && !nearby.includes(location));

  return [...nearby, ...fallback].slice(0, limit);
}
