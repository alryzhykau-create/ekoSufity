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
      "Sufity napinane matowe dają klasyczną, spokojną powierzchnię bez odbić. To dobry wybór do mieszkań, domów i biur we Wrocławiu, gdy zależy Ci na równym suficie, szybkim montażu i neutralnym efekcie.",
    benefits: ["klasyczny wygląd bez połysku", "dobrze ukrywa nierówności", "pasuje do większości aranżacji", "łatwy w utrzymaniu"],
    bestFor: ["salon", "sypialnia", "kuchnia", "biuro", "korytarz"],
    limitations: ["nie daje efektu lustra", "wymaga dobrego planu oświetlenia", "jest spokojniejszy niż sufity dekoracyjne"],
    compatibleSolutions: ["linie LED", "punkty świetlne", "szyny magnetyczne", "wentylacja", "luki rewizyjne"],
    priceLabel: "od 120 zł/m²",
    image: `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?${imageBase}`,
    seoTitle: "Sufity napinane matowe Wrocław | Klasyczny sufit matowy | EkoSufity",
    seoDescription:
      "Sufity napinane matowe we Wrocławiu. Klasyczny matowy sufit napinany, cena od 120 zł/m², szybki montaż i bezpłatny pomiar.",
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
      {
        question: "Czy sufit matowy nadaje się do kuchni?",
        answer: "Tak, pod warunkiem zaplanowania wentylacji i dobrania oświetlenia do strefy roboczej.",
      },
    ],
  },
  {
    name: "Sufity satynowe",
    slug: "satynowe",
    title: "Sufity napinane satynowe",
    shortDescription: "Subtelny połysk i miękkie odbicie światła bez efektu lustra.",
    description:
      "Sufity napinane satynowe są kompromisem między spokojnym matem a mocnym połyskiem. Satynowy sufit napinany delikatnie odbija światło, dlatego wnętrze wygląda jaśniej i bardziej elegancko bez efektu lustra.",
    benefits: ["miękki efekt premium", "subtelnie rozświetla wnętrze", "pasuje do jasnych aranżacji", "dobrze wygląda z oprawami wpuszczanymi"],
    bestFor: ["salon", "jadalnia", "garderoba", "gabinet", "apartament"],
    limitations: ["odbija więcej światła niż mat", "wymaga starannego doboru opraw", "nie zawsze pasuje do bardzo surowych wnętrz"],
    compatibleSolutions: ["oprawy wpuszczane", "linie LED", "podświetlenie obwodowe", "profile cieniowe"],
    priceLabel: "od 140 zł/m²",
    image: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${imageBase}`,
    seoTitle: "Sufity napinane satynowe Wrocław | Subtelny połysk | EkoSufity",
    seoDescription:
      "Sufit satynowy we Wrocławiu z delikatnym połyskiem. Elegancki satynowy sufit napinany, LED, bezpłatny pomiar i wycena.",
    ctaText: "Zapytaj o sufit satynowy",
    faq: [
      {
        question: "Czym sufit satynowy różni się od matowego?",
        answer: "Satyna delikatnie odbija światło, a mat pozostaje bardziej neutralny i spokojny wizualnie.",
      },
      {
        question: "Czy satyna nadaje się do małego pokoju?",
        answer: "Tak. Subtelny połysk może optycznie rozjaśnić i lekko powiększyć wnętrze.",
      },
      {
        question: "Czy sufit satynowy pasuje do LED?",
        answer: "Tak, ale rozmieszczenie światła warto zaplanować przed montażem, aby uniknąć przypadkowych odbić.",
      },
    ],
  },
  {
    name: "Sufity błyszczące",
    slug: "blyszczace",
    title: "Sufity napinane błyszczące",
    shortDescription: "Efekt głębi i optycznego powiększenia pomieszczenia.",
    description:
      "Sufity napinane błyszczące dają efekt lustra i mocno pracują ze światłem. Lustrzany sufit napinany sprawdza się tam, gdzie chcesz optycznie powiększyć wnętrze, dodać głębi i uzyskać nowoczesny charakter.",
    benefits: ["optycznie powiększa wnętrze", "daje mocny efekt dekoracyjny", "dobrze odbija światło", "sprawdza się w małych pomieszczeniach"],
    bestFor: ["łazienka", "korytarz", "lokal usługowy", "strefa wejściowa", "mały salon"],
    limitations: ["odbicia są widoczne", "nie pasuje do każdego stylu", "wymaga uporządkowanego oświetlenia i aranżacji"],
    compatibleSolutions: ["punkty świetlne", "taśmy LED", "profile standardowe", "wentylacja"],
    priceLabel: "od 150 zł/m²",
    image: `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?${imageBase}`,
    seoTitle: "Sufity napinane błyszczące Wrocław | Efekt lustra | EkoSufity",
    seoDescription:
      "Sufit błyszczący we Wrocławiu z efektem lustra. Lustrzany sufit napinany optycznie powiększa wnętrze i dobrze współpracuje z LED.",
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
      {
        question: "Czy połysk pasuje do każdego wnętrza?",
        answer: "Nie zawsze. Przy bardzo dekoracyjnych aranżacjach lepiej najpierw sprawdzić próbkę i plan oświetlenia.",
      },
    ],
  },
  {
    name: "Sufity z oświetleniem",
    slug: "z-oswietleniem",
    title: "Sufity napinane z oświetleniem",
    shortDescription: "Sufit i światło zaplanowane jako jeden spójny system.",
    description:
      "Sufit napinany z oświetleniem LED pozwala połączyć membranę, profile i źródła światła w jeden czysty system. W zależności od projektu stosujemy linie LED, taśmy, punkty świetlne, szyny magnetyczne lub podświetlenie obwodowe.",
    benefits: ["czysty montaż światła", "wygodne strefy oświetlenia", "dużo efektów aranżacyjnych", "ukryte przewody i zasilacze"],
    bestFor: ["salon", "kuchnia", "łazienka", "korytarz", "lokal usługowy"],
    limitations: ["wymaga planu elektryki", "koszt zależy od liczby punktów", "dostęp do zasilaczy trzeba zaplanować przed montażem"],
    compatibleSolutions: ["linie LED", "punkty świetlne", "szyny magnetyczne", "oprawy wpuszczane", "luki rewizyjne"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1618220179428-22790b461013?${imageBase}`,
    seoTitle: "Sufit napinany z oświetleniem LED Wrocław | EkoSufity",
    seoDescription:
      "Montaż sufitu z LED we Wrocławiu. Linie LED w suficie napinanym, punkty, taśmy, szyny magnetyczne i podświetlenie obwodowe.",
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
      {
        question: "Czy zasilacze będą dostępne po montażu?",
        answer: "Powinny być. Dostęp do zasilaczy i sterowników ustalamy przed montażem, często przez luk rewizyjny lub zabudowę.",
      },
    ],
  },
  {
    name: "Sufity z nadrukiem",
    slug: "z-nadrukiem",
    title: "Sufity napinane z nadrukiem",
    shortDescription: "Indywidualny wzór, grafika lub motyw dopasowany do wnętrza.",
    description:
      "Sufit napinany z nadrukiem pozwala wykorzystać indywidualną grafikę, motyw dekoracyjny, logo albo własne zdjęcie. To rozwiązanie dla wnętrz, w których sufit ma być wyraźnym akcentem, a nie tylko neutralnym tłem.",
    benefits: ["indywidualny projekt", "mocny efekt dekoracyjny", "możliwość pracy z motywem marki", "dobre rozwiązanie do lokali usługowych"],
    bestFor: ["pokój dziecka", "łazienka", "recepcja", "salon kosmetyczny", "restauracja"],
    limitations: ["wymaga pliku dobrej jakości", "mniej uniwersalny niż mat", "w małych wnętrzach lepiej unikać ciężkich wzorów"],
    compatibleSolutions: ["podświetlenie obwodowe", "punkty świetlne", "profile premium", "wentylacja"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1615529162924-f8605388461d?${imageBase}`,
    seoTitle: "Sufit napinany z nadrukiem Wrocław | Sufit z grafiką | EkoSufity",
    seoDescription:
      "Sufit napinany z nadrukiem, grafiką lub własnym zdjęciem. Dekoracyjne sufity do domów, pokoi dziecięcych i lokali we Wrocławiu.",
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
      {
        question: "Czy nadruk pasuje do każdego pomieszczenia?",
        answer: "Najlepiej sprawdza się jako akcent. W małych wnętrzach warto wybierać spokojniejsze grafiki.",
      },
    ],
  },
  {
    name: "Sufity translucent",
    slug: "translucent",
    title: "Sufity napinane translucent",
    shortDescription: "Półprzepuszczalna membrana do równomiernego efektu światła.",
    description:
      "Sufit napinany translucent wykorzystuje półprzezroczystą membranę, która równomiernie rozprasza światło. Po właściwym zaplanowaniu LED powstaje podświetlany sufit napinany albo większy sufit świetlny LED.",
    benefits: ["równomierna tafla światła", "efekt premium", "możliwość dużych świecących pól", "dobry efekt w strefach relaksu"],
    bestFor: ["łazienka", "recepcja", "salon", "lokal usługowy", "strefa wellness"],
    limitations: ["wymaga miejsca na źródła światła", "potrzebny jest precyzyjny projekt LED", "cena zależy od konstrukcji i mocy światła"],
    compatibleSolutions: ["taśmy LED", "podświetlenie obwodowe", "profile premium", "konstrukcje wielopoziomowe"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?${imageBase}`,
    seoTitle: "Sufit napinany translucent Wrocław | Podświetlany sufit LED | EkoSufity",
    seoDescription:
      "Sufit napinany translucent we Wrocławiu. Podświetlany sufit napinany i sufit świetlny LED z równomiernym światłem.",
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
      {
        question: "Czy sufit translucent obniża pomieszczenie?",
        answer: "Zwykle wymaga większego miejsca technicznego niż prosty sufit, ponieważ nad membraną montuje się oświetlenie.",
      },
    ],
  },
  {
    name: "Sufity z perforacją",
    slug: "z-perforacja",
    title: "Sufity napinane z perforacją",
    shortDescription: "Dekoracyjne otwory, wzory i techniczne efekty w membranie.",
    description:
      "Sufit napinany perforowany pozwala wykonać dekoracyjny wzór, efekt świetlny, przejście powietrza albo wsparcie akustyki. To rozwiązanie dla projektów, w których detal techniczny i wygląd sufitu mają podobne znaczenie.",
    benefits: ["indywidualny detal", "możliwość efektów akustycznych", "nowoczesny wygląd", "łączenie estetyki z funkcją"],
    bestFor: ["biuro", "lokal usługowy", "restauracja", "sala spotkań", "wnętrze premium"],
    limitations: ["wymaga projektu wzoru", "nie zawsze jest potrzebny w mieszkaniach", "wycena zależy od stopnia skomplikowania"],
    compatibleSolutions: ["podświetlenie", "profile premium", "wentylacja", "konstrukcje wielopoziomowe"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1604014237800-1c9102c219da?${imageBase}`,
    seoTitle: "Sufit napinany perforowany Wrocław | Wzory i akustyka | EkoSufity",
    seoDescription:
      "Perforowany sufit napinany we Wrocławiu. Dekoracyjne wzory, sufit akustyczny napinany, efekty świetlne i rozwiązania premium.",
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
      {
        question: "Gdzie najlepiej sprawdza się sufit perforowany?",
        answer: "Najczęściej w lokalach usługowych, biurach, restauracjach i przestrzeniach reprezentacyjnych.",
      },
    ],
  },
  {
    name: "Sufity wielopoziomowe",
    slug: "wielopoziomowe",
    title: "Sufity napinane wielopoziomowe",
    shortDescription: "Kilka poziomów, podział stref i architektoniczny efekt sufitu.",
    description:
      "Sufit napinany wielopoziomowy pozwala budować geometrię wnętrza, ukrywać instalacje i prowadzić światło między poziomami. To dobry wybór do większych pomieszczeń, salonów z kuchnią i projektów z wyraźnym podziałem stref.",
    benefits: ["wyraźny podział stref", "efekt architektoniczny", "łatwiejsze ukrycie instalacji", "duże możliwości oświetlenia"],
    bestFor: ["salon z kuchnią", "apartament", "recepcja", "lokal usługowy", "duże pomieszczenie"],
    limitations: ["wymaga więcej planowania", "koszt jest wyższy niż przy prostym suficie", "nie zawsze pasuje do niskich pomieszczeń"],
    compatibleSolutions: ["linie LED", "szyny magnetyczne", "podświetlenie obwodowe", "profile cieniowe"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?${imageBase}`,
    seoTitle: "Sufit napinany wielopoziomowy Wrocław | Poziomy i LED | EkoSufity",
    seoDescription:
      "Sufit wielopoziomowy we Wrocławiu. Sufit napinany z poziomami, LED, ukrytym karniszem, konstrukcją i podziałem stref.",
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
      {
        question: "Czy sufit wielopoziomowy można połączyć z ukrytym karniszem?",
        answer: "Tak. Wnęka pod karnisz i światło pośrednie często są częścią projektu wielopoziomowego.",
      },
    ],
  },
  {
    name: "Gwiaździste niebo",
    slug: "gwiazdziste-niebo",
    title: "Sufit napinany gwiaździste niebo",
    shortDescription: "Dekoracyjny efekt świetlny do sypialni, pokoju dziecka i spa.",
    description:
      "Sufit gwiaździste niebo to dekoracyjny sufit napinany z punktami światła przypominającymi nocne niebo. Najlepiej działa jako klimatyczne światło wieczorne w sypialni, pokoju dziecka, kinie domowym albo strefie spa.",
    benefits: ["wyjątkowy efekt wieczorem", "indywidualny układ punktów", "klimatyczne światło", "dobry efekt w strefach relaksu"],
    bestFor: ["sypialnia", "pokój dziecka", "łazienka", "kino domowe", "strefa spa"],
    limitations: ["wymaga projektu punktów", "większy koszt instalacji", "najlepiej wygląda przy przygaszonym świetle"],
    compatibleSolutions: ["światłowody", "LED", "matowa membrana", "translucent", "podświetlenie obwodowe"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?${imageBase}`,
    seoTitle: "Sufit gwiaździste niebo Wrocław | Efekt nieba | EkoSufity",
    seoDescription:
      "Gwiaździste niebo w suficie napinanym we Wrocławiu. Sufit z efektem nieba do sypialni, pokoju dziecka, spa i kina domowego.",
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
      {
        question: "Czy efekt gwiaździstego nieba działa w dzień?",
        answer: "Najlepiej wygląda przy przygaszonym świetle, dlatego zwykle traktujemy go jako efekt wieczorny.",
      },
    ],
  },
  {
    name: "Sufity z ukrytym karniszem",
    slug: "z-karniszem",
    title: "Sufity napinane z ukrytym karniszem",
    shortDescription: "Czysta linia przy oknie i estetycznie ukryte prowadnice zasłon.",
    description:
      "Sufit napinany z ukrytym karniszem pozwala schować prowadnicę zasłon w eleganckiej wnęce. Efekt jest czysty, nowoczesny i często łączony z delikatnym LED przy oknie lub podświetleniem obwodowym.",
    benefits: ["ukryta prowadnica zasłon", "czysta linia przy oknie", "możliwość LED przy karniszu", "elegancki efekt hotelowy"],
    bestFor: ["salon", "sypialnia", "apartament", "pokój dzienny", "wnętrza z dużymi przeszkleniami"],
    limitations: ["wnękę trzeba zaplanować przed montażem", "wymaga dokładnych wymiarów zasłon", "nie każdy układ okna daje taki sam efekt"],
    compatibleSolutions: ["podświetlenie obwodowe", "linie LED", "profile premium", "konstrukcje wielopoziomowe"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1600566752355-35792bedcfea?${imageBase}`,
    seoTitle: "Sufit napinany z ukrytym karniszem Wrocław | EkoSufity",
    seoDescription:
      "Ukryty karnisz we Wrocławiu w suficie napinanym. Sufit z wnęką na zasłony, profile, LED i czyste wykończenie przy oknach.",
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
      {
        question: "Czy ukryty karnisz trzeba zaplanować przed montażem?",
        answer: "Tak. Wnęka, profil i długość prowadnicy powinny być ustalone podczas pomiaru.",
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
