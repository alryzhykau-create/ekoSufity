import { constructionItems } from "@/lib/constructions";
import { lightingItems } from "@/lib/lighting";
import { profileConnectionItems, profileItems } from "@/lib/profiles";
import { revisionHatchItems } from "@/lib/revisionHatches";
import { ventilationItems } from "@/lib/ventilation";

export type SolutionItem = {
  title: string;
  slug: string;
  h1: string;
  shortDescription: string;
  description: string;
  applications: string[];
  benefits: string[];
  planning: string[];
  image: string;
  related: string[];
  seoTitle: string;
  seoDescription: string;
  ctaText: string;
  detailSections: {
    eyebrow: string;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  items: {
    title: string;
    description: string;
  }[];
  extraItems?: string[];
};

const imageBase = "auto=format&fm=webp&fit=crop&w=1200&q=84";

export const solutionItems: SolutionItem[] = [
  {
    title: "Oświetlenie",
    slug: "oswietlenie",
    h1: "Oświetlenie do sufitów napinanych",
    shortDescription: "LED, punkty, szyny i podświetlenie zaplanowane razem z sufitem.",
    description:
      "Oświetlenie w suficie napinanym warto zaplanować przed montażem. Dzięki temu linie LED, punkty, taśmy, szyny magnetyczne i podświetlenie obwodowe tworzą spójny układ.",
    applications: ["salon", "kuchnia", "łazienka", "korytarz", "lokal usługowy"],
    benefits: ["spójny projekt światła", "czysty montaż", "praktyczne strefy", "nowoczesny efekt"],
    planning: ["zasilanie", "barwa i moc światła", "sterowanie", "dostęp do zasilaczy"],
    image: `https://images.unsplash.com/photo-1618220179428-22790b461013?${imageBase}`,
    related: ["profile", "poziomy-i-konstrukcje", "luki-rewizyjne"],
    seoTitle: "Oświetlenie do sufitów napinanych Wrocław | EkoSufity",
    seoDescription:
      "Oświetlenie w sufitach napinanych: linie LED, taśmy LED, punkty świetlne, szyny magnetyczne i podświetlenie obwodowe.",
    ctaText: "Zapytaj o oświetlenie",
    detailSections: [
      {
        eyebrow: "Opis rozwiązania",
        title: "Jak działa oświetlenie w suficie napinanym?",
        description:
          "Źródła światła, profile i zasilacze planujemy przed naciągnięciem membrany. Pozwala to uniknąć przypadkowych przewodów i uzyskać czysty efekt.",
      },
      {
        eyebrow: "Co trzeba zaplanować",
        title: "Elektryka, sterowanie i dostęp serwisowy",
        description:
          "Przed montażem warto ustalić liczbę punktów, przebieg linii LED, barwę światła, sposób sterowania oraz dostęp do zasilaczy.",
      },
    ],
    faq: [
      {
        question: "Czy oświetlenie trzeba zaplanować przed montażem?",
        answer: "Tak. Miejsca opraw, zasilacze i sterowanie trzeba przewidzieć przed naciągnięciem sufitu.",
      },
      {
        question: "Czy można połączyć kilka typów światła?",
        answer: "Tak. Często łączymy linie LED, punkty i podświetlenie obwodowe.",
      },
    ],
    items: lightingItems.map((item) => ({
      title: item.title,
      description: item.description,
    })),
  },
  {
    title: "Profile i połączenia",
    slug: "profile",
    h1: "Profile i połączenia do sufitów napinanych",
    shortDescription: "Profile ścienne, sufitowe, LED, cieniowe i przejścia między materiałami.",
    description:
      "Profile decydują o sposobie montażu, krawędziach, połączeniach ze ścianą, cieniach, LED i detalach przy płytkach, szafach oraz karniszach.",
    applications: ["każdy sufit napinany", "wnęki", "karnisze", "linie LED", "połączenia z zabudową"],
    benefits: ["stabilny montaż", "estetyczne krawędzie", "możliwość efektów LED", "dopasowanie do wnętrza"],
    planning: ["rodzaj ścian", "wysokość sufitu", "miejsca LED", "połączenia z meblami i zabudową"],
    image: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${imageBase}`,
    related: ["oswietlenie", "poziomy-i-konstrukcje", "luki-rewizyjne"],
    seoTitle: "Profile do sufitów napinanych | Połączenia, cienie, LED | EkoSufity",
    seoDescription:
      "Zobacz profile i połączenia do sufitów napinanych: profile ścienne, sufitowe, szczelinowe, cieniowe, LED, ukryte karnisze i przejścia między poziomami.",
    ctaText: "Zapytaj o profile",
    detailSections: [
      {
        eyebrow: "Dlaczego profile są ważne",
        title: "Profil decyduje o krawędzi i trwałości sufitu",
        description:
          "Dobór profilu wpływa na wysokość montażu, estetykę przy ścianie, możliwość wykonania cienia, LED, ukrytego karnisza i połączeń z zabudową.",
      },
      {
        eyebrow: "Rodzaje połączeń",
        title: "Połączenia ze ścianą, płytkami, szafą i poziomami",
        description:
          "Przed montażem ustalamy, gdzie sufit styka się z płytkami, meblami, wnękami, oknem lub drugim poziomem konstrukcji.",
      },
      {
        eyebrow: "Profile do oświetlenia",
        title: "LED, linie świetlne i nisze",
        description:
          "Profile pod światło wymagają wcześniejszego planu elektryki, barwy światła, zasilaczy i dostępu serwisowego.",
      },
      {
        eyebrow: "Co wpływa na cenę",
        title: "Im więcej detali, tym ważniejszy pomiar",
        description:
          "Na koszt wpływa długość profili, liczba narożników, typ połączenia, LED, ukryty karnisz i przejścia między poziomami.",
      },
    ],
    faq: [
      {
        question: "Czy profil będzie widoczny po montażu?",
        answer: "To zależy od systemu i oczekiwanego efektu. Dobieramy profil do ścian, wysokości sufitu, światła i wykończenia wnętrza.",
      },
      {
        question: "Czy profile wpływają na cenę?",
        answer: "Tak. Profile specjalne, cieniowe, LED i elementy pod kilka poziomów są droższe niż standardowe rozwiązania.",
      },
    ],
    items: profileItems,
    extraItems: profileConnectionItems,
  },
  {
    title: "Wentylacja",
    slug: "wentylacja",
    h1: "Wentylacja w suficie napinanym",
    shortDescription: "Kratki, ukryta wentylacja i dostęp do kanałów wentylacyjnych.",
    description:
      "Wentylację w suficie napinanym można wykonać estetycznie, jeśli kratki, kanały i kolizje ze światłem zostaną zaplanowane przed montażem.",
    applications: ["łazienka", "kuchnia", "pomieszczenia techniczne", "lokale usługowe", "biura"],
    benefits: ["zachowany przepływ powietrza", "estetyczne kratki", "integracja z instalacją", "bez przypadkowych otworów"],
    planning: ["lokalizację kanałów", "typ kratek", "dostęp serwisowy", "kolizje z oświetleniem"],
    image: `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?${imageBase}`,
    related: ["luki-rewizyjne", "profile", "oswietlenie"],
    seoTitle: "Wentylacja w suficie napinanym | Kratki, ukryta wentylacja | EkoSufity",
    seoDescription:
      "Zobacz, jak można wykonać wentylację w suficie napinanym: klasyczne kratki, ukryta wentylacja, kratki magnetyczne i dostęp do kanałów wentylacyjnych.",
    ctaText: "Zapytaj o wentylację",
    detailSections: [
      {
        eyebrow: "Czy wentylacja jest możliwa",
        title: "Sufit napinany nie musi blokować przepływu powietrza",
        description:
          "Warunkiem jest wcześniejsze zaplanowanie kratek, kanałów i miejsc, w których membrana ma współpracować z instalacją.",
      },
      {
        eyebrow: "Łazienka i kuchnia",
        title: "Wilgoć, para i przepływ powietrza",
        description:
          "W łazience i kuchni szczególnie ważne jest zachowanie wywiewu oraz dobranie opraw i kratek do warunków użytkowania.",
      },
      {
        eyebrow: "Ukryte i magnetyczne kratki",
        title: "Estetyka bez utraty funkcji",
        description:
          "Tam, gdzie to możliwe, dobieramy kratki mniej widoczne lub magnetyczne, ale priorytetem pozostaje poprawna praca wentylacji.",
      },
    ],
    faq: [
      {
        question: "Czy sufit napinany blokuje wentylację?",
        answer: "Nie, jeśli wentylacja jest poprawnie zaplanowana. Montujemy odpowiednie kratki, nawiewy lub przejścia techniczne.",
      },
      {
        question: "Czy wentylację trzeba zgłosić przed wyceną?",
        answer: "Tak. Informacja o kratkach, kanałach i rekuperacji pomaga przygotować realną wycenę oraz uniknąć kolizji z oświetleniem.",
      },
    ],
    items: ventilationItems,
  },
  {
    title: "Luki rewizyjne",
    slug: "luki-rewizyjne",
    h1: "Luki rewizyjne i dostęp techniczny w suficie napinanym",
    shortDescription: "Dostęp do poddasza, wentylacji, elektryki, dachu i zasilaczy LED.",
    description:
      "Luki rewizyjne i dostęp techniczny wykonujemy po indywidualnym uzgodnieniu projektu i możliwości montażowych. To ważne przy instalacjach ukrytych nad sufitem.",
    applications: ["poddasze", "zasilacze LED", "wentylacja", "instalacja elektryczna", "dostęp serwisowy"],
    benefits: ["łatwiejszy serwis", "mniej ryzyka przy awarii", "estetyczny dostęp", "lepsze planowanie instalacji"],
    planning: ["co musi być dostępne", "rozmiar luku", "miejsce montażu", "sposób maskowania"],
    image: `https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?${imageBase}`,
    related: ["oswietlenie", "wentylacja", "profile"],
    seoTitle: "Luki rewizyjne w suficie napinanym | Dostęp techniczny | EkoSufity",
    seoDescription:
      "Wykonujemy luki rewizyjne i dostęp techniczny w sufitach napinanych: dostęp do poddasza, dachu, wentylacji, instalacji elektrycznej i zasilaczy LED.",
    ctaText: "Zapytaj o luk rewizyjny",
    detailSections: [
      {
        eyebrow: "Kiedy potrzebny jest luk rewizyjny",
        title: "Dostęp warto zaplanować przed montażem",
        description:
          "Luk jest potrzebny, gdy nad sufitem znajdują się zasilacze, sterowniki, zawory, kanały wentylacyjne lub wejście na poddasze.",
      },
      {
        eyebrow: "Dostęp do poddasza i dachu",
        title: "Większe otwory wymagają indywidualnego projektu",
        description:
          "Dostęp do strychu, dachu lub poddasza ustalamy osobno, ponieważ zależy od konstrukcji, wymiarów i sposobu użytkowania.",
      },
      {
        eyebrow: "Instalacje i zasilacze LED",
        title: "Serwis bez demontażu całego sufitu",
        description:
          "Dostęp do zasilaczy i sterowników LED zmniejsza ryzyko problemów serwisowych po zakończeniu montażu.",
      },
    ],
    faq: [
      {
        question: "Kiedy potrzebny jest luk rewizyjny?",
        answer: "Gdy nad sufitem znajdują się elementy, które mogą wymagać kontroli, serwisu lub wymiany.",
      },
      {
        question: "Czy luk rewizyjny będzie widoczny?",
        answer: "Może być dyskretny, ale jego wygląd zależy od miejsca, rozmiaru i funkcji.",
      },
    ],
    items: revisionHatchItems,
  },
  {
    title: "Poziomy i konstrukcje",
    slug: "poziomy-i-konstrukcje",
    h1: "Poziomy i konstrukcje w sufitach napinanych",
    shortDescription: "Sufity wielopoziomowe, nisze LED, ukryte karnisze i nietypowe obejścia.",
    description:
      "Konstrukcje pozwalają wykonać sufity jednopoziomowe i wielopoziomowe, przejścia między poziomami, nisze LED, ukryte karnisze oraz obejścia rur i szaf.",
    applications: ["salon z kuchnią", "apartament", "lokal usługowy", "wnęki", "ukryte karnisze"],
    benefits: ["architektoniczny efekt", "podział stref", "ukrycie instalacji", "więcej możliwości oświetlenia"],
    planning: ["wysokość pomieszczenia", "przebieg instalacji", "konstrukcję pod LED", "połączenia z zabudową"],
    image: `https://images.unsplash.com/photo-1604014237800-1c9102c219da?${imageBase}`,
    related: ["profile", "oswietlenie", "luki-rewizyjne"],
    seoTitle: "Sufity napinane wielopoziomowe | Konstrukcje i nisze LED | EkoSufity",
    seoDescription:
      "Zobacz możliwości sufitów napinanych: sufity wielopoziomowe, przejścia między poziomami, nisze LED, ukryte karnisze, obejścia rur i nietypowe konstrukcje.",
    ctaText: "Zapytaj o konstrukcję",
    detailSections: [
      {
        eyebrow: "Jakie konstrukcje można wykonać",
        title: "Od prostego poziomu po złożone przejścia",
        description:
          "Zakres zależy od wysokości pomieszczenia, instalacji, oświetlenia i efektu, który chcesz uzyskać.",
      },
      {
        eyebrow: "Poziomy i przejścia",
        title: "Sufity jednopoziomowe i wielopoziomowe",
        description:
          "Kilka poziomów pomaga wydzielić strefy, ukryć instalacje i wprowadzić światło pośrednie.",
      },
      {
        eyebrow: "Nisze i obejścia",
        title: "LED, karnisze, rury i szafy",
        description:
          "Nietypowe elementy stałe trzeba uwzględnić przed wyceną, ponieważ wpływają na profil, konstrukcję i czas montażu.",
      },
      {
        eyebrow: "Cena i czas",
        title: "Więcej detali oznacza dokładniejszy projekt",
        description:
          "Na koszt i termin wpływa liczba poziomów, długość profili, LED, narożniki, obejścia i przygotowanie pod zabudowę.",
      },
    ],
    faq: [
      {
        question: "Czy konstrukcja mocno obniża pomieszczenie?",
        answer: "To zależy od projektu. Przy pomiarze sprawdzamy wysokość i dobieramy minimalne potrzebne obniżenie.",
      },
      {
        question: "Czy można ukryć karnisz w konstrukcji?",
        answer: "Tak. Wnęka pod karnisz to jedno z popularnych rozwiązań przy sufitach napinanych.",
      },
    ],
    items: constructionItems,
  },
];

export function getSolutionBySlug(slug: string) {
  return solutionItems.find((item) => item.slug === slug);
}

export function getRelatedSolutions(slugs: string[]) {
  return solutionItems.filter((item) => slugs.includes(item.slug));
}
