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
  localDescription: string[];
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
    localDescription: [
      "Wrocław to główny obszar działania EkoSufity. Obsługujemy zarówno mieszkania w blokach i apartamentowcach, jak i domy, biura oraz lokale usługowe, gdzie ważny jest szybki montaż sufitów napinanych bez długiego remontu.",
      "Przy projektach we Wrocławiu często łączymy matowe lub satynowe wykończenie z oświetleniem LED, punktami świetlnymi, profilami cieniowymi i dostępem do instalacji. Podczas pomiaru sprawdzamy wysokość, ściany, wentylację i planowane oprawy.",
      "Jeśli interesuje Cię sufit napinany cena Wrocław, najlepiej zacząć od zdjęć, wymiarów i bezpłatnego pomiaru. Wycena zależy od metrażu, materiału, profili, światła i warunków montażu.",
    ],
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
    localDescription: [
      "Leśnica i zachodnia część Wrocławia to lokalizacje, w których często planuje się sufity do domów, mieszkań i wnętrz po remoncie. Najczęściej sprawdzają się spokojne sufity matowe, proste linie LED i praktyczne punkty świetlne.",
      "Podczas pomiaru zwracamy uwagę na ściany, okna, karnisze oraz możliwość ukrycia przewodów i zasilaczy. Jeśli przy oknie ma być zasłona, warto od razu przewidzieć ukryty karnisz albo delikatne światło pośrednie.",
      "Dojazd i termin pomiaru ustalamy indywidualnie po kontakcie. Wstępnie możesz wysłać zdjęcia i wymiary przez WhatsApp, żeby szybciej określić zakres prac.",
    ],
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
    localDescription: [
      "Sufity napinane Krzyki najczęściej wybierane są do nowych mieszkań, apartamentów i wnętrz, w których liczy się elegancki detal. Dobrze sprawdzają się satynowe powierzchnie, linie LED, szyny magnetyczne i ukryte karnisze.",
      "Przy pomiarze na Krzykach dokładnie sprawdzamy połączenia z zabudową, płytkami, szafami i oprawami. Dzięki temu sufit wygląda czysto, a oświetlenie nie jest przypadkowo rozmieszczone.",
      "Jeżeli planujesz montaż sufitów napinanych Wrocław Krzyki, przygotuj informację o metrażu, rodzaju pomieszczeń i planowanym świetle. To pozwala szybciej przygotować realną wycenę.",
    ],
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
    localDescription: [
      "Sufity napinane Fabryczna sprawdzają się w nowych i remontowanych wnętrzach, gdzie trzeba szybko uzyskać równą powierzchnię bez klasycznego szpachlowania i malowania. Często dobieramy tu praktyczne profile, matowe wykończenie i LED.",
      "W tej części Wrocławia ważne są połączenia z zabudową meblową, szafami, kuchnią i istniejącymi instalacjami. Przy pomiarze ustalamy, gdzie potrzebny jest dostęp techniczny, wentylacja albo luk rewizyjny.",
      "Dla mieszkań i domów na Fabrycznej przygotowujemy wycenę po sprawdzeniu metrażu, liczby narożników, profili i planowanego oświetlenia.",
    ],
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
    localDescription: [
      "Sufity napinane Wrocław Psie Pole to często praktyczne projekty do domów i mieszkań: spokojny mat, punkty LED, wentylacja w kuchni lub łazience oraz czysty montaż bez długich prac wykończeniowych.",
      "Przy pomiarze sprawdzamy, czy sufit ma ukryć nierówności, poprowadzić oświetlenie albo zachować dostęp do instalacji. W pomieszczeniach technicznych i wilgotnych szczególnie ważne jest zaplanowanie kratek i przepływu powietrza.",
      "Dla Psiego Pola wycena zależy głównie od metrażu, liczby pomieszczeń, opraw i profili. Wstępne zdjęcia pomagają przygotować rozmowę przed pomiarem.",
    ],
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
    localDescription: [
      "Na Starym Mieście lokalne warunki często wymagają dobrej organizacji: dojazdu, wniesienia materiałów, godzin prac i ochrony istniejącego wykończenia. Dlatego zakres montażu ustalamy wcześniej i dopasowujemy go do konkretnego budynku.",
      "W mieszkaniach, apartamentach, biurach i lokalach usługowych dobrze sprawdzają się sufity satynowe, błyszczące, linie LED i szyny magnetyczne. Pozwalają uzyskać estetyczny efekt bez ciężkiej ingerencji w wnętrze.",
      "Nie deklarujemy lokalnych realizacji bez potwierdzonych zdjęć. Na stronie pokazujemy inspiracje i rozwiązania, które można dopasować do podobnych wnętrz w centrum Wrocławia.",
    ],
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
    localDescription: [
      "We Wrocławiu Śródmieściu często pracujemy z mieszkaniami, biurami i lokalami, gdzie liczy się szybki montaż oraz porządek na miejscu. Sufit napinany pozwala skrócić etap wykończenia i od razu zaplanować światło.",
      "Popularne są tu sufity napinane z oświetleniem LED, oprawy wpuszczane, szyny magnetyczne oraz luki rewizyjne przy zasilaczach. Takie elementy warto zaplanować przed montażem membrany.",
      "Pomiar w Śródmieściu obejmuje sprawdzenie wysokości, instalacji, ścian i miejsc serwisowych. Na tej podstawie dobieramy materiał, profile i układ światła.",
    ],
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
    localDescription: [
      "Sufity napinane Oleśnica najczęściej wybierane są do mieszkań i domów, gdzie potrzebne jest równe, spokojne wykończenie bez długiego remontu. Mat i satyna dobrze sprawdzają się w salonach, korytarzach, kuchniach i sypialniach.",
      "W projektach z punktami świetlnymi ustalamy rozmieszczenie opraw, zasilanie i ewentualny dostęp serwisowy. Przy większych pomieszczeniach można połączyć punkty z liniami LED albo podświetleniem obwodowym.",
      "Do Oleśnicy dojeżdżamy po wcześniejszym ustaleniu terminu i zakresu. Zdjęcia oraz wymiary pomagają przygotować wstępny plan przed pomiarem.",
    ],
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
    localDescription: [
      "Sufity napinane Oława dobrze sprawdzają się w mieszkaniach, łazienkach i kuchniach, gdzie ważna jest odporna, równa powierzchnia i szybki efekt wizualny. W mniejszych pomieszczeniach często rozważany jest połysk albo punkty LED.",
      "Przy łazienkach i kuchniach kluczowe są wentylacja, oprawy odpowiednie do warunków oraz estetyczne połączenie sufitu z płytkami. Te elementy najlepiej ustalić jeszcze przed wyceną.",
      "Cena w Oławie zależy od metrażu, materiału, profili, liczby punktów świetlnych i warunków montażu. Dokładną wycenę przygotowujemy po pomiarze lub po analizie zdjęć i wymiarów.",
    ],
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
    localDescription: [
      "Sufity napinane Świdnica realizujemy po indywidualnym ustaleniu zakresu i terminu dojazdu z Wrocławia. To dobre rozwiązanie do mieszkań, domów i lokali, w których potrzebne jest szybkie, czyste wykończenie sufitu.",
      "Najczęściej dobieramy mat, satynę albo układ z LED, zależnie od stylu wnętrza i wysokości pomieszczenia. Przy bardziej rozbudowanych projektach planujemy profile, szyny magnetyczne i dostęp do zasilaczy.",
      "Wycena w Świdnicy uwzględnia lokalizację, metraż, materiał i dodatkowe rozwiązania. Przed pomiarem warto wysłać zdjęcia oraz krótki opis planowanego efektu.",
    ],
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
    localDescription: [
      "Sufity napinane Dzierżoniów są dobrym wyborem, gdy wnętrze ma szybko zyskać równą i estetyczną powierzchnię bez pyłu, szlifowania i wielodniowego malowania. To praktyczne rozwiązanie przy mieszkaniach po remoncie i pomieszczeniach wymagających odświeżenia.",
      "W zależności od efektu proponujemy matowe lub satynowe wykończenie, punkty świetlne, linie LED albo proste profile przy ścianach. Przy pomiarze sprawdzamy także instalacje i miejsca, które mogą wymagać dostępu technicznego.",
      "Dokładna cena zależy od zakresu prac i dojazdu. Najbezpieczniej zacząć od kontaktu, zdjęć i wymiarów, a następnie ustalić termin pomiaru.",
    ],
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
    localDescription: [
      "Sufity napinane Bielawa można dopasować do mieszkań, domów i lokali usługowych, w których ważne są estetyczne wykończenie oraz światło. W projektach premium dobrze sprawdzają się linie LED i szyny magnetyczne.",
      "Przy lokalach warto wcześniej zaplanować strefy światła, dostęp do zasilaczy i ewentualne luki rewizyjne. W mieszkaniach częściej wybierany jest mat, satyna albo spokojne oświetlenie punktowe.",
      "Pomiar pozwala ocenić, czy potrzebne są profile specjalne, dodatkowy dostęp techniczny lub mocniejsze oświetlenie. Na tej podstawie przygotowujemy indywidualną wycenę.",
    ],
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
    localDescription: [
      "Sufity napinane Trzebnica najczęściej planujemy do domów i mieszkań, szczególnie w układach salon plus kuchnia, korytarz albo łazienka. Matowe wykończenie daje spokojny efekt, a LED pomaga wydzielić strefy.",
      "W kuchni i łazience sprawdzamy wentylację, wilgoć i rozmieszczenie opraw. W salonie częściej rozważamy linie LED, podświetlenie obwodowe albo ukryty karnisz przy zasłonach.",
      "Termin pomiaru w Trzebnicy ustalamy po kontakcie. Warto przygotować metraż, zdjęcia sufitu i informację, czy planowane jest nowe oświetlenie.",
    ],
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
    localDescription: [
      "Sufity napinane Siechnice często dotyczą nowych osiedli, domów i mieszkań blisko Wrocławia. W takich wnętrzach można od razu zaplanować sufit, oświetlenie i dostęp techniczny przed finalnym wykończeniem.",
      "Popularne są sufity matowe, punkty świetlne, wentylacja w kuchni lub łazience oraz proste linie LED. Przy pomiarze sprawdzamy, czy instalacje są gotowe i gdzie najlepiej umieścić zasilacze.",
      "Szybki pomiar w Siechnicach ułatwia przygotowanie konkretnej wyceny i uniknięcie zmian już po montażu membrany.",
    ],
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
    localDescription: [
      "Sufity napinane Kąty Wrocławskie dobrze pasują do domów i apartamentów, gdzie inwestorzy często chcą czystej linii przy oknach, ukrytego karnisza i miękkiego światła pośredniego.",
      "Podczas pomiaru ustalamy długość prowadnic, miejsce zasłon, wysokość sufitu i przebieg LED. Dzięki temu wnęka pod karnisz oraz profile są dopasowane do realnych wymiarów pomieszczenia.",
      "Wycena zależy od metrażu, liczby detali i rodzaju oświetlenia. Przed wizytą możesz wysłać zdjęcia okien, ścian i planowanego układu zasłon.",
    ],
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
    localDescription: [
      "Sufity napinane Jelcz-Laskowice to praktyczne rozwiązanie do mieszkań, domów i lokali, gdzie ważne są czystość prac, szybki efekt i łatwiejsze ukrycie nierówności sufitu.",
      "Najczęściej sprawdzają się matowe membrany, punkty świetlne, wentylacja i proste układy LED. Przy pomiarze oceniamy instalacje, wysokość pomieszczeń i możliwość wykonania dostępu do zasilaczy.",
      "Dojazd oraz termin ustalamy indywidualnie. Wstępne zdjęcia sufitu i informacja o metrażu pomagają szybciej dobrać zakres prac.",
    ],
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
    localDescription: [
      "Sufity napinane Środa Śląska dobrze sprawdzają się w nowych i remontowanych wnętrzach, gdzie trzeba szybko uporządkować płaszczyznę sufitu i zaplanować światło bez ciężkiego remontu.",
      "W tej lokalizacji często ważne są profile przy ścianach, połączenia z zabudową oraz linie LED lub punkty świetlne. Wszystkie takie elementy warto przewidzieć przed montażem.",
      "Podczas pomiaru sprawdzamy warunki montażu, metraż, liczbę narożników i przebieg instalacji. Dopiero wtedy można przygotować realną wycenę.",
    ],
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
    localDescription: [
      "Sufity napinane Strzelin są dobrym wyborem, gdy zależy Ci na szybkim efekcie, czystym montażu i ograniczeniu klasycznych prac wykończeniowych. W mieszkaniach często wybierany jest mat, błysk lub punkty LED.",
      "W łazienkach i kuchniach sprawdzamy wentylację, wilgotność, oprawy oraz połączenia z płytkami. W pokojach i korytarzach można postawić na spokojny mat albo mocniejszy efekt błyszczącej membrany.",
      "Cena zależy od powierzchni, materiału, oświetlenia i dojazdu. Po otrzymaniu zdjęć oraz wymiarów możemy przygotować rozmowę przed pomiarem.",
    ],
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
