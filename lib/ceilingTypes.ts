export type CeilingType = {
  name: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  bestFor: string[];
  limitations: string[];
  compatibleSolutions: string[];
  priceLabel: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  ctaText: string;
  faq: {
    question: string;
    answer: string;
  }[];
};

const imageBase = "auto=format&fm=webp&fit=crop&w=1200&q=84";

export const ceilingTypes: CeilingType[] = [
  {
    name: "Sufity matowe",
    slug: "matowe",
    title: "Sufity napinane matowe",
    shortDescription: "Najbardziej uniwersalny, spokojny efekt bez odbić światła.",
    description:
      "Matowy sufit napinany daje spokojny, elegancki efekt i dobrze sprawdza się w mieszkaniach, domach, biurach oraz wnętrzach, gdzie zależy Ci na klasycznym wykończeniu bez odbić światła.",
    benefits: ["neutralny wygląd", "dobrze ukrywa nierówności", "pasuje do większości aranżacji", "łatwy w utrzymaniu"],
    bestFor: ["salon", "sypialnia", "kuchnia", "biuro", "korytarz"],
    limitations: ["nie daje efektu lustra", "wymaga dobrego planu oświetlenia", "jest spokojniejszy niż sufity dekoracyjne"],
    compatibleSolutions: ["linie LED", "punkty świetlne", "szyny magnetyczne", "wentylacja", "luki rewizyjne"],
    priceLabel: "od 120 zł/m²",
    image: `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?${imageBase}`,
    seoTitle: "Sufity napinane matowe Wrocław | EkoSufity",
    seoDescription:
      "Sufity napinane matowe we Wrocławiu. Elegancki efekt bez połysku, szybki montaż, LED i wycena po bezpłatnym pomiarze.",
    ctaText: "Zapytaj o sufit matowy",
    faq: [
      {
        question: "Czy sufit matowy wygląda jak tradycyjny gładki sufit?",
        answer: "Tak. Matowa membrana daje najbardziej klasyczny efekt i nie tworzy widocznych odbić światła.",
      },
      {
        question: "Czy sufit matowy można połączyć z LED?",
        answer: "Tak. Mat bardzo dobrze współpracuje z liniami LED, punktami świetlnymi i podświetleniem obwodowym.",
      },
    ],
  },
  {
    name: "Sufity satynowe",
    slug: "satynowe",
    title: "Sufity napinane satynowe",
    shortDescription: "Subtelny połysk i miękkie odbicie światła bez efektu lustra.",
    description:
      "Satynowy sufit napinany jest kompromisem między spokojnym matem a mocniejszym połyskiem. Delikatnie odbija światło, dzięki czemu wnętrze wygląda jaśniej i bardziej elegancko.",
    benefits: ["miękki efekt premium", "subtelnie rozświetla wnętrze", "pasuje do jasnych aranżacji", "dobrze wygląda z oprawami wpuszczanymi"],
    bestFor: ["salon", "jadalnia", "garderoba", "gabinet", "apartament"],
    limitations: ["odbija więcej światła niż mat", "wymaga starannego doboru opraw", "nie zawsze pasuje do bardzo surowych wnętrz"],
    compatibleSolutions: ["oprawy wpuszczane", "linie LED", "podświetlenie obwodowe", "profile cieniowe"],
    priceLabel: "od 140 zł/m²",
    image: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${imageBase}`,
    seoTitle: "Sufity napinane satynowe Wrocław | EkoSufity",
    seoDescription:
      "Satynowe sufity napinane we Wrocławiu. Delikatny połysk, eleganckie wykończenie i rozwiązania LED do mieszkań oraz apartamentów.",
    ctaText: "Zapytaj o sufit satynowy",
    faq: [
      {
        question: "Czym sufit satynowy różni się od matowego?",
        answer: "Satyna delikatnie odbija światło, a mat pozostaje bardziej neutralny i spokojny wizualnie.",
      },
      {
        question: "Czy satyna nadaje się do małego pokoju?",
        answer: "Tak, zwłaszcza gdy chcesz lekko rozświetlić wnętrze bez mocnego efektu lustra.",
      },
    ],
  },
  {
    name: "Sufity błyszczące",
    slug: "blyszczace",
    title: "Sufity napinane błyszczące",
    shortDescription: "Efekt głębi i optycznego powiększenia pomieszczenia.",
    description:
      "Błyszczący sufit napinany mocno pracuje ze światłem i odbiciami. Najlepiej sprawdza się tam, gdzie chcesz uzyskać efekt głębi, nowoczesny charakter lub optycznie podnieść pomieszczenie.",
    benefits: ["optycznie powiększa wnętrze", "daje mocny efekt dekoracyjny", "dobrze odbija światło", "sprawdza się w małych pomieszczeniach"],
    bestFor: ["łazienka", "korytarz", "lokal usługowy", "strefa wejściowa", "mały salon"],
    limitations: ["odbicia są widoczne", "nie pasuje do każdego stylu", "wymaga uporządkowanego oświetlenia i aranżacji"],
    compatibleSolutions: ["punkty świetlne", "taśmy LED", "profile standardowe", "wentylacja"],
    priceLabel: "od 150 zł/m²",
    image: `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?${imageBase}`,
    seoTitle: "Sufity napinane błyszczące Wrocław | EkoSufity",
    seoDescription:
      "Błyszczące sufity napinane we Wrocławiu. Efekt lustra, optyczne powiększenie wnętrza, LED i szybki montaż.",
    ctaText: "Zapytaj o sufit błyszczący",
    faq: [
      {
        question: "Czy błyszczący sufit powiększa pomieszczenie?",
        answer: "Optycznie tak. Odbicie daje wrażenie większej wysokości i głębi.",
      },
      {
        question: "Czy błyszczący sufit nadaje się do łazienki?",
        answer: "Tak. To popularny wybór do łazienek, szczególnie gdy wnętrze jest niewielkie.",
      },
    ],
  },
  {
    name: "Sufity z oświetleniem",
    slug: "z-oswietleniem",
    title: "Sufity napinane z oświetleniem",
    shortDescription: "Sufit i światło zaplanowane jako jeden spójny system.",
    description:
      "Sufit napinany z oświetleniem pozwala połączyć membranę, profile i źródła światła w czysty układ. Można zastosować punkty, linie LED, taśmy, szyny magnetyczne lub podświetlenie obwodowe.",
    benefits: ["czysty montaż światła", "wygodne strefy oświetlenia", "dużo efektów aranżacyjnych", "ukryte przewody i zasilacze"],
    bestFor: ["salon", "kuchnia", "łazienka", "korytarz", "lokal usługowy"],
    limitations: ["wymaga planu elektryki", "koszt zależy od liczby punktów", "dostęp do zasilaczy trzeba zaplanować przed montażem"],
    compatibleSolutions: ["linie LED", "punkty świetlne", "szyny magnetyczne", "oprawy wpuszczane", "luki rewizyjne"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1618220179428-22790b461013?${imageBase}`,
    seoTitle: "Sufity napinane z oświetleniem Wrocław | LED | EkoSufity",
    seoDescription:
      "Sufity napinane z oświetleniem LED we Wrocławiu. Linie LED, punkty, taśmy, szyny magnetyczne i podświetlenie obwodowe.",
    ctaText: "Zapytaj o sufit z LED",
    faq: [
      {
        question: "Czy oświetlenie trzeba zaplanować przed montażem?",
        answer: "Tak. Miejsca opraw, profile, zasilacze i sterowanie trzeba ustalić przed naciągnięciem membrany.",
      },
      {
        question: "Czy można połączyć kilka typów światła?",
        answer: "Tak. Często łączymy punkty, linie LED i podświetlenie obwodowe w jednym projekcie.",
      },
    ],
  },
  {
    name: "Sufity z nadrukiem",
    slug: "z-nadrukiem",
    title: "Sufity napinane z nadrukiem",
    shortDescription: "Indywidualny wzór, grafika lub motyw dopasowany do wnętrza.",
    description:
      "Sufit napinany z nadrukiem pozwala wykorzystać grafikę, zdjęcie, motyw dekoracyjny albo element identyfikacji marki. Najlepiej sprawdza się w projektach, w których sufit ma być mocnym akcentem.",
    benefits: ["indywidualny projekt", "mocny efekt dekoracyjny", "możliwość pracy z motywem marki", "dobre rozwiązanie do lokali usługowych"],
    bestFor: ["pokój dziecka", "łazienka", "recepcja", "salon kosmetyczny", "restauracja"],
    limitations: ["wymaga pliku dobrej jakości", "mniej uniwersalny niż mat", "w małych wnętrzach lepiej unikać ciężkich wzorów"],
    compatibleSolutions: ["podświetlenie obwodowe", "punkty świetlne", "profile premium", "wentylacja"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1615529162924-f8605388461d?${imageBase}`,
    seoTitle: "Sufity napinane z nadrukiem Wrocław | EkoSufity",
    seoDescription:
      "Sufity napinane z nadrukiem we Wrocławiu. Indywidualny wzór, grafika, dekoracja do domu lub lokalu usługowego.",
    ctaText: "Zapytaj o nadruk",
    faq: [
      {
        question: "Czy mogę użyć własnego zdjęcia?",
        answer: "Tak, jeśli plik ma odpowiednią rozdzielczość i proporcje do planowanej powierzchni sufitu.",
      },
      {
        question: "Czy nadruk można połączyć z podświetleniem?",
        answer: "Tak, ale układ światła trzeba zaplanować tak, aby nie zniekształcał grafiki.",
      },
    ],
  },
  {
    name: "Sufity translucent",
    slug: "translucent",
    title: "Sufity napinane translucent",
    shortDescription: "Półprzepuszczalna membrana do równomiernego efektu światła.",
    description:
      "Sufit translucent wykorzystuje membranę przepuszczającą światło. Po odpowiednim zaplanowaniu LED można uzyskać równomiernie świecącą powierzchnię lub subtelne podświetlenie wybranej strefy.",
    benefits: ["równomierna tafla światła", "efekt premium", "możliwość dużych świecących pól", "dobry efekt w strefach relaksu"],
    bestFor: ["łazienka", "recepcja", "salon", "lokal usługowy", "strefa wellness"],
    limitations: ["wymaga miejsca na źródła światła", "potrzebny jest precyzyjny projekt LED", "cena zależy od konstrukcji i mocy światła"],
    compatibleSolutions: ["taśmy LED", "podświetlenie obwodowe", "profile premium", "konstrukcje wielopoziomowe"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?${imageBase}`,
    seoTitle: "Sufity napinane translucent Wrocław | EkoSufity",
    seoDescription:
      "Sufity translucent we Wrocławiu. Półprzepuszczalna membrana, równomierne podświetlenie LED i efekt premium.",
    ctaText: "Zapytaj o translucent",
    faq: [
      {
        question: "Co oznacza sufit translucent?",
        answer: "To sufit z membrany przepuszczającej światło, za którą montuje się odpowiednio rozmieszczone LED.",
      },
      {
        question: "Czy sufit translucent może świecić całą powierzchnią?",
        answer: "Tak, ale wymaga odpowiedniej odległości, mocy i gęstości źródeł światła.",
      },
    ],
  },
  {
    name: "Sufity z perforacją",
    slug: "z-perforacja",
    title: "Sufity napinane z perforacją",
    shortDescription: "Dekoracyjne otwory, wzory i techniczne efekty w membranie.",
    description:
      "Sufit napinany z perforacją daje możliwość wykonania wzoru, efektu akustycznego albo technicznego przejścia powietrza. To rozwiązanie dla projektów, w których detal ma znaczenie.",
    benefits: ["indywidualny detal", "możliwość efektów akustycznych", "nowoczesny wygląd", "łączenie estetyki z funkcją"],
    bestFor: ["biuro", "lokal usługowy", "restauracja", "sala spotkań", "wnętrze premium"],
    limitations: ["wymaga projektu wzoru", "nie zawsze jest potrzebny w mieszkaniach", "wycena zależy od stopnia skomplikowania"],
    compatibleSolutions: ["podświetlenie", "profile premium", "wentylacja", "konstrukcje wielopoziomowe"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1604014237800-1c9102c219da?${imageBase}`,
    seoTitle: "Sufity napinane z perforacją Wrocław | EkoSufity",
    seoDescription:
      "Sufity napinane z perforacją we Wrocławiu. Dekoracyjne wzory, efekty techniczne, akustyczne i rozwiązania premium.",
    ctaText: "Zapytaj o perforację",
    faq: [
      {
        question: "Czy perforacja jest widoczna z daleka?",
        answer: "To zależy od wzoru, średnicy otworów, koloru membrany i sposobu oświetlenia.",
      },
      {
        question: "Czy perforacja może wspierać wentylację?",
        answer: "W niektórych projektach tak, ale układ otworów i przepływ powietrza trzeba zaplanować indywidualnie.",
      },
    ],
  },
  {
    name: "Sufity wielopoziomowe",
    slug: "wielopoziomowe",
    title: "Sufity napinane wielopoziomowe",
    shortDescription: "Kilka poziomów, podział stref i architektoniczny efekt sufitu.",
    description:
      "Sufit wielopoziomowy pozwala budować geometrię wnętrza, ukrywać instalacje i prowadzić światło między poziomami. To dobry wybór do większych pomieszczeń oraz projektów z wyraźnym podziałem stref.",
    benefits: ["wyraźny podział stref", "efekt architektoniczny", "łatwiejsze ukrycie instalacji", "duże możliwości oświetlenia"],
    bestFor: ["salon z kuchnią", "apartament", "recepcja", "lokal usługowy", "duże pomieszczenie"],
    limitations: ["wymaga więcej planowania", "koszt jest wyższy niż przy prostym suficie", "nie zawsze pasuje do niskich pomieszczeń"],
    compatibleSolutions: ["linie LED", "szyny magnetyczne", "podświetlenie obwodowe", "profile cieniowe"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?${imageBase}`,
    seoTitle: "Sufity napinane wielopoziomowe Wrocław | EkoSufity",
    seoDescription:
      "Sufity napinane wielopoziomowe we Wrocławiu. Konstrukcje, poziomy, nisze LED, ukryte karnisze i podział stref.",
    ctaText: "Zapytaj o kilka poziomów",
    faq: [
      {
        question: "Czy sufit wielopoziomowy mocno obniża pomieszczenie?",
        answer: "Obniżenie zależy od projektu. Przy pomiarze sprawdzamy wysokość i dobieramy możliwie oszczędną konstrukcję.",
      },
      {
        question: "Czy można połączyć kilka typów membran?",
        answer: "Tak. W projektach wielopoziomowych często łączy się mat, satynę, LED i profile specjalne.",
      },
    ],
  },
  {
    name: "Gwiaździste niebo",
    slug: "gwiazdziste-niebo",
    title: "Sufit napinany gwiaździste niebo",
    shortDescription: "Dekoracyjny efekt świetlny do sypialni, pokoju dziecka i spa.",
    description:
      "Gwiaździste niebo to dekoracyjny sufit napinany z punktami światła przypominającymi nocne niebo. Najlepiej działa jako klimatyczne światło wieczorne lub akcent w strefie relaksu.",
    benefits: ["wyjątkowy efekt wieczorem", "indywidualny układ punktów", "klimatyczne światło", "dobry efekt w strefach relaksu"],
    bestFor: ["sypialnia", "pokój dziecka", "łazienka", "kino domowe", "strefa spa"],
    limitations: ["wymaga projektu punktów", "większy koszt instalacji", "najlepiej wygląda przy przygaszonym świetle"],
    compatibleSolutions: ["światłowody", "LED", "matowa membrana", "translucent", "podświetlenie obwodowe"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?${imageBase}`,
    seoTitle: "Sufit napinany gwiaździste niebo Wrocław | EkoSufity",
    seoDescription:
      "Sufit napinany gwiaździste niebo we Wrocławiu. Dekoracyjny efekt świetlny do sypialni, pokoju dziecka i stref spa.",
    ctaText: "Zapytaj o gwiaździste niebo",
    faq: [
      {
        question: "Czy gwiaździste niebo może być głównym światłem?",
        answer: "Zwykle pełni funkcję dekoracyjną. Do codziennego światła warto dodać punkty lub linię LED.",
      },
      {
        question: "Czy układ gwiazd można zaprojektować indywidualnie?",
        answer: "Tak. Liczbę i rozmieszczenie punktów ustalamy przed montażem.",
      },
    ],
  },
  {
    name: "Sufity z ukrytym karniszem",
    slug: "z-karniszem",
    title: "Sufity napinane z ukrytym karniszem",
    shortDescription: "Czysta linia przy oknie i estetycznie ukryte prowadnice zasłon.",
    description:
      "Sufit napinany z ukrytym karniszem pozwala schować prowadnice zasłon w eleganckiej wnęce. Efekt jest czysty, nowoczesny i często łączony z delikatnym podświetleniem przy oknie.",
    benefits: ["ukryta prowadnica zasłon", "czysta linia przy oknie", "możliwość LED przy karniszu", "elegancki efekt hotelowy"],
    bestFor: ["salon", "sypialnia", "apartament", "pokój dzienny", "wnętrza z dużymi przeszkleniami"],
    limitations: ["wnękę trzeba zaplanować przed montażem", "wymaga dokładnych wymiarów zasłon", "nie każdy układ okna daje taki sam efekt"],
    compatibleSolutions: ["podświetlenie obwodowe", "linie LED", "profile premium", "konstrukcje wielopoziomowe"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1600566752355-35792bedcfea?${imageBase}`,
    seoTitle: "Sufity napinane z ukrytym karniszem Wrocław | EkoSufity",
    seoDescription:
      "Sufity napinane z ukrytym karniszem we Wrocławiu. Wnęki pod zasłony, profile, LED i czyste wykończenie przy oknach.",
    ctaText: "Zapytaj o ukryty karnisz",
    faq: [
      {
        question: "Czy karnisz może być całkowicie ukryty?",
        answer: "Tak, jeśli zaplanujemy odpowiednią wnękę i zachowamy dostęp do prowadnicy.",
      },
      {
        question: "Czy można dodać LED przy zasłonach?",
        answer: "Tak. Podświetlenie przy karniszu daje miękki, elegancki efekt.",
      },
    ],
  },
];

export function getCeilingTypeBySlug(slug: string) {
  return ceilingTypes.find((type) => type.slug === slug);
}

export function getRelatedCeilingTypes(slug: string, limit = 4) {
  const current = getCeilingTypeBySlug(slug);

  if (!current) {
    return ceilingTypes.slice(0, limit);
  }

  const related = ceilingTypes.filter((type) => {
    if (type.slug === slug) {
      return false;
    }

    return type.bestFor.some((item) => current.bestFor.includes(item)) ||
      type.compatibleSolutions.some((item) => current.compatibleSolutions.includes(item));
  });

  return [...related, ...ceilingTypes.filter((type) => type.slug !== slug && !related.includes(type))].slice(0, limit);
}
