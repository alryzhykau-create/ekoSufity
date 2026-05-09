export type LightingItem = {
  name: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  bestFor: string[];
  planningNotes: string[];
  compatibleCeilings: string[];
  priceLabel: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  ctaText: string;
  variants: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

const imageBase = "auto=format&fm=webp&fit=crop&w=1200&q=84";

export const lightingItems: LightingItem[] = [
  {
    name: "Linie LED",
    slug: "linie-led",
    title: "Linie LED w suficie napinanym",
    shortDescription: "Nowoczesne oświetlenie liniowe do salonu, kuchni, korytarza i biura.",
    description:
      "Linie LED w suficie napinanym pozwalają uzyskać nowoczesny, geometryczny efekt światła oraz wyraźny podział stref. We Wrocławiu często planujemy je w salonach z kuchnią, korytarzach, biurach i wnętrzach premium.",
    benefits: ["nowoczesny efekt", "czytelny podział stref", "światło robocze lub dekoracyjne", "czysta geometria sufitu"],
    bestFor: ["salon", "kuchnia", "korytarz", "biuro", "wnętrza premium"],
    planningNotes: ["przebieg linii", "moc i barwa światła", "miejsce zasilaczy", "sterowanie i ściemnianie", "dostęp serwisowy"],
    compatibleCeilings: ["sufity matowe", "sufity satynowe", "sufity wielopoziomowe", "sufity z efektem cienia"],
    priceLabel: "od 150 zł/mb",
    image: `https://images.unsplash.com/photo-1618220179428-22790b461013?${imageBase}`,
    seoTitle: "Linie LED w suficie napinanym Wrocław | EkoSufity",
    seoDescription:
      "Linie LED sufit napinany Wrocław. Nowoczesne oświetlenie liniowe do salonu, kuchni, korytarza i biura z planem zasilaczy.",
    ctaText: "Zapytaj o linie LED",
    variants: ["proste linie LED", "linie krzyżujące się", "linie dekoracyjne", "linie LED jako główne oświetlenie", "linie LED jako akcent dekoracyjny"],
    faq: [
      {
        question: "Czy linie LED mogą być głównym oświetleniem?",
        answer: "Tak, jeśli dobierzemy odpowiednią moc, długość linii, rozstaw i barwę światła.",
      },
      {
        question: "Czy linie LED można ściemniać?",
        answer: "Tak, ale trzeba wcześniej przewidzieć kompatybilne zasilacze, sterownik i sposób obsługi.",
      },
      {
        question: "Czy linie LED wymagają dostępu serwisowego?",
        answer: "Tak. Dostęp do zasilaczy i sterowników trzeba zaplanować przed montażem sufitu.",
      },
    ],
  },
  {
    name: "Taśmy LED",
    slug: "tasmy-led",
    title: "Taśmy LED w suficie napinanym",
    shortDescription: "Miękkie światło dekoracyjne do wnęk, nisz LED i podświetlenia obwodowego.",
    description:
      "Taśmy LED stosuje się najczęściej jako światło dekoracyjne, podświetlenie obwodowe lub element nastrojowego oświetlenia we wnętrzu. W suficie napinanym wymagają profilu, odprowadzenia ciepła, zasilaczy i dostępu serwisowego.",
    benefits: ["miękkie światło", "niewidoczne źródło LED", "dobry efekt wieczorem", "możliwość sterowania scenami"],
    bestFor: ["sypialnia", "salon", "korytarz", "wnęki LED", "ukryte karnisze"],
    planningNotes: ["miejsce ukrycia taśmy", "profil i odprowadzanie ciepła", "zasilacz LED", "sterowanie", "dostęp do serwisu"],
    compatibleCeilings: ["sufity z ukrytym karniszem", "sufity wielopoziomowe", "sufity translucent", "sufity matowe"],
    priceLabel: "od 120 zł/mb",
    image: `https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?${imageBase}`,
    seoTitle: "Taśmy LED w suficie napinanym Wrocław | Podświetlenie | EkoSufity",
    seoDescription:
      "Taśmy LED w suficie napinanym we Wrocławiu. Podświetlenie obwodowe, nisze LED, ukryte światło i plan zasilaczy.",
    ctaText: "Zapytaj o taśmy LED",
    variants: ["podświetlenie obwodowe", "światło pośrednie", "nisze LED", "dekoracyjne akcenty światła", "możliwość sterowania LED"],
    faq: [
      {
        question: "Czy taśma LED będzie widoczna?",
        answer: "Zwykle nie. Projektujemy ją tak, aby widoczna była poświata, a nie sama taśma.",
      },
      {
        question: "Czy taśmy LED nadają się do łazienki?",
        answer: "Tak, ale trzeba dobrać właściwe elementy i zabezpieczenia do wilgotnego środowiska.",
      },
      {
        question: "Czy taśmy LED mogą być jedynym światłem?",
        answer: "Zwykle są światłem dekoracyjnym. Do pracy warto dodać punkty, linie LED albo oprawy.",
      },
    ],
  },
  {
    name: "Punkty świetlne",
    slug: "punkty-swietlne",
    title: "Punkty świetlne w suficie napinanym",
    shortDescription: "Praktyczne punkty do łazienki, kuchni, korytarza, salonu i biura.",
    description:
      "Punkty świetlne to uniwersalne rozwiązanie do łazienki, kuchni, korytarza, salonu i biura. W suficie napinanym można je wykonać estetycznie, ale liczbę punktów, rozstaw, moc i typ opraw trzeba ustalić przed montażem.",
    benefits: ["funkcjonalne światło", "łatwe doświetlenie stref", "dobry wybór do małych pomieszczeń", "estetyczny montaż opraw"],
    bestFor: ["łazienka", "kuchnia", "korytarz", "salon", "biuro"],
    planningNotes: ["liczba punktów", "rozmieszczenie światła", "moc opraw", "typ mocowania", "kolizje z instalacjami"],
    compatibleCeilings: ["sufity matowe", "sufity satynowe", "sufity błyszczące", "sufity z oświetleniem"],
    priceLabel: "od 70 zł/szt.",
    image: `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?${imageBase}`,
    seoTitle: "Punkty świetlne w suficie napinanym Wrocław | EkoSufity",
    seoDescription:
      "Punkty świetlne w suficie napinanym we Wrocławiu. Praktyczne oprawy do łazienki, kuchni, korytarza, salonu i biura.",
    ctaText: "Zapytaj o punkty świetlne",
    variants: ["punkty w łazience", "punkty w kuchni", "punkty w korytarzu", "punkty w salonie", "rozmieszczenie światła"],
    faq: [
      {
        question: "Ile punktów świetlnych potrzeba?",
        answer: "To zależy od powierzchni, funkcji pomieszczenia, mocy opraw i oczekiwanego efektu.",
      },
      {
        question: "Czy punkty świetlne można rozmieścić symetrycznie?",
        answer: "Tak. Rozstaw ustalamy przed montażem, aby uniknąć przypadkowych odległości.",
      },
      {
        question: "Czy każda oprawa pasuje do sufitu napinanego?",
        answer: "Nie. Oprawę dobieramy do temperatury pracy, mocowania, głębokości i rodzaju membrany.",
      },
    ],
  },
  {
    name: "Szyny magnetyczne",
    slug: "szyny-magnetyczne",
    title: "Szyny magnetyczne w suficie napinanym",
    shortDescription: "System premium z reflektorami i modułami liniowymi do elastycznych scen światła.",
    description:
      "Szyny magnetyczne pozwalają elastycznie ustawiać reflektory, moduły liniowe i sceny światła. W suficie napinanym to rozwiązanie premium, które wymaga wcześniejszego planu konstrukcji, zasilania i miejsca pod system.",
    benefits: ["elastyczne ustawienie opraw", "efekt premium", "światło punktowe i liniowe", "możliwość zmiany modułów"],
    bestFor: ["salon", "kuchnia z wyspą", "biuro", "apartament", "lokal usługowy"],
    planningNotes: ["długość i przebieg szyny", "typ montażu", "zasilanie", "dobór modułów", "miejsce w konstrukcji"],
    compatibleCeilings: ["sufity matowe", "sufity satynowe", "sufity wielopoziomowe", "sufity premium z profilami"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${imageBase}`,
    seoTitle: "Szyny magnetyczne w suficie napinanym Wrocław | EkoSufity",
    seoDescription:
      "Szyny magnetyczne w suficie napinanym we Wrocławiu. Oświetlenie premium z reflektorami, modułami liniowymi i planem zasilania.",
    ctaText: "Zapytaj o szyny magnetyczne",
    variants: ["szyny magnetyczne natynkowe lub wpuszczane", "reflektory magnetyczne", "moduły liniowe", "nowoczesny efekt premium", "połączenie z sufitem napinanym"],
    faq: [
      {
        question: "Czy szyny magnetyczne pasują do sufitu napinanego?",
        answer: "Tak, jeśli projekt przewiduje odpowiednią konstrukcję, zasilanie i miejsce pod system.",
      },
      {
        question: "Czy później można zmieniać oprawy?",
        answer: "Tak. Elastyczna zmiana opraw jest jedną z głównych zalet szyn magnetycznych.",
      },
      {
        question: "Czy szyny magnetyczne są droższe od punktów?",
        answer: "Zwykle tak, bo wymagają systemu, profilu, zasilania i dokładniejszego przygotowania konstrukcji.",
      },
    ],
  },
  {
    name: "Oprawy wpuszczane",
    slug: "oprawy-wpuszczane",
    title: "Oprawy wpuszczane w suficie napinanym",
    shortDescription: "Minimalistyczne punkty LED zintegrowane z płaszczyzną sufitu.",
    description:
      "Oprawy wpuszczane są dobrym wyborem, gdy zależy Ci na minimalistycznym wyglądzie i równej płaszczyźnie sufitu. Dobór opraw zależy od konstrukcji, temperatury pracy, głębokości montażu i rodzaju membrany.",
    benefits: ["minimalistyczny wygląd", "czysta płaszczyzna sufitu", "praktyczne światło", "spójność z nowoczesnym wnętrzem"],
    bestFor: ["łazienka", "kuchnia", "salon", "hol", "apartament"],
    planningNotes: ["głębokość montażu", "typ opraw", "temperatura pracy", "rozstaw", "wymagania producenta opraw"],
    compatibleCeilings: ["sufity matowe", "sufity satynowe", "sufity z oświetleniem", "sufity w łazienkach"],
    priceLabel: "wycena indywidualna",
    image: `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?${imageBase}`,
    seoTitle: "Oprawy wpuszczane w suficie napinanym Wrocław | EkoSufity",
    seoDescription:
      "Oprawy wpuszczane w suficie napinanym we Wrocławiu. Minimalistyczne punkty LED, czysta płaszczyzna sufitu i plan montażu.",
    ctaText: "Zapytaj o oprawy wpuszczane",
    variants: ["minimalistyczne oprawy", "oprawy do łazienki", "oprawy do kuchni", "oprawy dekoracyjne", "wymagania montażowe"],
    faq: [
      {
        question: "Czy każda oprawa nadaje się do sufitu napinanego?",
        answer: "Nie. Oprawę trzeba dobrać do temperatury pracy, mocowania, konstrukcji i rodzaju sufitu.",
      },
      {
        question: "Czy oprawy wpuszczane można stosować w łazience?",
        answer: "Tak, ale trzeba dobrać oprawy przeznaczone do warunków wilgotnych i zaplanować wentylację.",
      },
      {
        question: "Czy oprawy wpuszczane nagrzewają membranę?",
        answer: "Dlatego dobieramy oprawy zgodnie z wymaganiami producenta i planujemy odpowiednią konstrukcję.",
      },
    ],
  },
  {
    name: "Podświetlenie obwodowe",
    slug: "podswietlenie-obwodowe",
    title: "Podświetlenie obwodowe sufitu napinanego",
    shortDescription: "Miękkie światło dekoracyjne przy ścianach, wnękach lub wybranej strefie.",
    description:
      "Podświetlenie obwodowe tworzy delikatny efekt światła przy ścianach, we wnękach lub wokół wybranej części sufitu. To popularne rozwiązanie do salonów, sypialni, korytarzy i sufitów z ukrytym karniszem.",
    benefits: ["miękkie światło dekoracyjne", "podkreślenie geometrii sufitu", "komfort wieczorem", "ukryte źródło światła"],
    bestFor: ["salon", "sypialnia", "korytarz", "strefa wypoczynkowa", "sufity wielopoziomowe"],
    planningNotes: ["wnęka lub profil LED", "przebieg obwodu", "barwa LED", "zasilacz", "dostęp do sterowania"],
    compatibleCeilings: ["sufity wielopoziomowe", "sufity z ukrytym karniszem", "sufity matowe", "sufity satynowe"],
    priceLabel: "od 140 zł/mb",
    image: `https://images.unsplash.com/photo-1600566752355-35792bedcfea?${imageBase}`,
    seoTitle: "Podświetlenie obwodowe sufitu napinanego Wrocław | EkoSufity",
    seoDescription:
      "Podświetlenie obwodowe sufitu napinanego we Wrocławiu. Miękkie światło LED przy ścianach, wnękach, karniszu lub strefie wypoczynku.",
    ctaText: "Zapytaj o podświetlenie obwodowe",
    variants: ["światło wokół pomieszczenia", "podświetlenie strefy wypoczynkowej", "miękkie światło dekoracyjne", "ukryte taśmy LED", "połączenie z profilami LED"],
    faq: [
      {
        question: "Czy podświetlenie obwodowe wystarczy jako główne światło?",
        answer: "Zwykle jest światłem dekoracyjnym lub pomocniczym. Do pracy warto dodać punkty albo linie LED.",
      },
      {
        question: "Czy źródło światła może być ukryte?",
        answer: "Tak. Projektujemy profil lub wnękę tak, aby widoczna była poświata, a nie taśma LED.",
      },
      {
        question: "Czy podświetlenie obwodowe wymaga konstrukcji?",
        answer: "Zwykle tak. Trzeba zaplanować profil, wnękę, zasilacz i dostęp do serwisu.",
      },
    ],
  },
];

export function getLightingBySlug(slug: string) {
  return lightingItems.find((item) => item.slug === slug);
}

export function getRelatedLighting(slug: string, limit = 4) {
  const current = getLightingBySlug(slug);

  if (!current) {
    return lightingItems.slice(0, limit);
  }

  const related = lightingItems.filter((item) => {
    if (item.slug === slug) {
      return false;
    }

    return item.bestFor.some((place) => current.bestFor.includes(place)) ||
      item.compatibleCeilings.some((ceiling) => current.compatibleCeilings.includes(ceiling));
  });

  return [...related, ...lightingItems.filter((item) => item.slug !== slug && !related.includes(item))].slice(0, limit);
}
