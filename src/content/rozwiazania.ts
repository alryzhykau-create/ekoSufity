import { services } from "@/content/services";

export type ImageSlot = {
  // Ścieżka placeholdera — realne zdjęcia podmieniamy tu, w danych.
  src: string;
  alt: string;
  caption?: string;
};

export type Card = {
  title: string;
  desc: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ProblemSolution = {
  problem: string;
  solution: string;
};

export type Comparison = {
  title?: string;
  aHead: string;
  bHead: string;
  rows: { feature: string; a: string; b: string }[];
};

export type Rozwiazanie = {
  slug: string;
  eyebrow: string;
  shortTitle: string;
  h1: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  heroImage: ImageSlot;
  whatIs: string;
  // Opcjonalny blok "Problem i rozwiązanie" (dla rozwiązań technicznych).
  problemSolution?: ProblemSolution;
  // Nagłówek sekcji z kartami planCards (różny w zależności od rozwiązania).
  planTitle?: string;
  planCards: Card[];
  // Opcjonalne bloki tekstowe (proza) renderowane po kartach planCards.
  textBlocks?: { eyebrow?: string; title: string; body: string }[];
  // Opcjonalny blok "Gdzie się sprawdza / Kiedy ma sens".
  whereFits?: Card[];
  whereFitsTitle?: string;
  // Wariant "Gdzie się sprawdza" jako proza zamiast kart.
  whereFitsText?: string;
  // Opcjonalna tabela porównawcza.
  comparison?: Comparison;
  whyCards: Card[];
  // Opcjonalny blok "Na co zwrócić uwagę".
  notes?: string[];
  priceCopy: string;
  priceFactors?: string[];
  // Ukryj sekcję ceny (gdy strona nie ma mówić o cenie).
  hidePrice?: boolean;
  // Opcjonalny odnośnik-mostek do powiązanej strony.
  bridge?: { text: string; href: string };
  faq: Faq[];
  related: string[];
};

// Wspólny blok "Proces" — 5 kroków.
export const processSteps = ["Kontakt", "Pomiar", "Projekt i wycena", "Montaż", "Odbiór"];

// Wspólny finalny CTA (bezosobowo — bez zwrotu do czytelnika).
export const finalCta = {
  text: "Które rozwiązanie pasuje do konkretnego wnętrza, najłatwiej sprawdzić na bezpłatnym pomiarze."
};

export const rozwiazania: Rozwiazanie[] = [
  {
    slug: "wentylacja",
    eyebrow: "Wentylacja",
    shortTitle: "Wentylacja",
    h1: "Wentylacja w suficie napinanym",
    cardDescription: "Wentylacja ukryta nad membraną — czysta linia zamiast widocznych kratek.",
    metaTitle: "Wentylacja w suficie napinanym — Wrocław",
    metaDescription:
      "Wentylacja ukryta w suficie napinanym — kanały nad membraną, na widoku czysta linia lub dyskretna kratka. Bezpłatny pomiar, Wrocław i do 100 km.",
    heroSubtitle:
      "Wentylacja, której nie widać. Kanały chowamy nad membraną, a w pomieszczeniu zostaje czysta linia lub dyskretna kratka. Od premium liniowych dyfuzorów po niewidoczne kratki punktowe.",
    heroImage: {
      src: "/images/rozwiazania/wentylacja/hero.jpg",
      alt: "Sufit napinany z ukrytą wentylacją — przykładowy efekt"
    },
    whatIs:
      "Ukryta wentylacja pozwala zachować czystą linię sufitu — zamiast widocznych kratek stosujemy wąskie, liniowe nawiewy wtopione w membranę. Elementy takie jak Airpipe Pro (nawiew w suficie) i Airwall (na styku sufitu i ściany) znikają w powierzchni sufitu. To rozwiązanie premium, którego nie ma w standardowych montażach. Wentylację planujemy razem z sufitem, na etapie pomiaru.",
    problemSolution: {
      problem:
        "W szczelnym pomieszczeniu bez zaplanowanego nawiewu łatwiej o wilgoć, zaparowane lustra i osad na ścianach — szczególnie w łazience i kuchni. Standardowe kratki psują przy tym czystą linię sufitu.",
      solution:
        "Kanały nawiewu i wyciągu prowadzimy nad membraną, a na widoku zostaje wąska szczelina lub dyskretna kratka. Powietrze krąży swobodnie, a sufit zachowuje jednolitą, nowoczesną powierzchnię."
    },
    planTitle: "Elementy, które planujemy",
    notes: [
      "Wentylację najlepiej zaplanować razem z sufitem — przed montażem membrany.",
      "Dyfuzory liniowe wymagają miejsca nad sufitem na poprowadzenie kanału.",
      "Wersje magnetyczne zdejmuje się do czyszczenia i obsługi."
    ],
    planCards: [
      {
        title: "Airpipe Pro",
        desc: "Wąski, liniowy nawiew wtopiony w sufit napinany — zamiast widocznej kratki."
      },
      {
        title: "Airwall",
        desc: "Liniowy element wentylacyjny na styku sufitu i ściany, ukryty w cieniu."
      },
      {
        title: "Ukryte kratki",
        desc: "Punktowe rozwiązania nawiewne, które znikają w membranie."
      },
      {
        title: "Wentylacja + sufit w jednym",
        desc: "Elementy planujemy tak, żeby nie psuły czystej linii sufitu."
      }
    ],
    whyCards: [
      {
        title: "Czysta linia zamiast kratek",
        desc: "Nawiew jest ukryty — sufit wygląda jednolicie i nowocześnie."
      },
      {
        title: "Rozwiązanie premium",
        desc: "Ukryta wentylacja to detal, którego nie ma w standardowych montażach."
      },
      {
        title: "Planowane z sufitem",
        desc: "Elementy wentylacyjne uwzględniamy na etapie pomiaru i montażu."
      }
    ],
    priceCopy:
      "Koszt zależy od wybranego rozwiązania, długości linii nawiewu i liczby punktów. Dokładną wycenę przygotowujemy po pomiarze.",
    priceFactors: [
      "rodzaj dyfuzora (liniowy / punktowy)",
      "długość",
      "liczba wprowadzeń kanału",
      "integracja z oświetleniem"
    ],
    faq: [
      {
        question: "Czy wentylację można połączyć z istniejącą instalacją / rekuperacją?",
        answer: "Tak, dyfuzory podłączamy do standardowych kanałów wentylacyjnych."
      },
      {
        question: "Czy dyfuzory liniowe są widoczne?",
        answer: "Zostaje wąska szczelina lub cienka linia; instalacja pozostaje ukryta nad sufitem."
      },
      {
        question: "Czy kratki da się czyścić?",
        answer: "Wersje magnetyczne są zdejmowane, co ułatwia czyszczenie i obsługę."
      },
      {
        question: "Czy montaż jest możliwy w gotowym suficie?",
        answer: "Rozwiązanie planujemy razem z sufitem; szczegóły ustalamy na pomiarze."
      }
    ],
    related: ["system-magnetyczny", "linie-swietlne", "folie"]
  },
  {
    slug: "system-magnetyczny",
    eyebrow: "System magnetyczny",
    shortTitle: "System magnetyczny",
    h1: "System magnetyczny 48 V w suficie napinanym",
    cardDescription: "Ukryta szyna 48 V i lampy, które można dowolnie przestawiać.",
    metaTitle: "System magnetyczny 48 V w suficie napinanym — Wrocław",
    metaDescription:
      "Magnetyczny system 48 V w suficie napinanym: ukryta szyna, lampy punktowe, liniowe i wiszące do przestawiania. Bezpłatny pomiar, Wrocław i do 100 km.",
    heroSubtitle:
      "Ukryta szyna wtopiona w sufit i lampy, które można dowolnie przestawiać. Jedna linia, w której łączymy światło punktowe, liniowe, wiszące, a nawet głośnik.",
    heroImage: {
      src: "/images/rozwiazania/system-magnetyczny/hero.jpg",
      alt: "Magnetyczna szyna oświetlenia w suficie napinanym — przykładowy efekt"
    },
    whatIs:
      "System magnetyczny to ukryta szyna 48 V wtopiona w sufit napinany, na której lampy trzymają się na magnes. Oprawy liniowe, spoty i lampy wiszące można dowolnie przestawiać, dokładać i zmieniać — nawet po montażu, bez ingerencji w sufit. To elastyczne, nowoczesne rozwiązanie zamiast wielu osobnych opraw z osobnymi wypustami. Cały układ działa na jednym zasilaniu, dobranym pod pomieszczenie.",
    planTitle: "Rodzaje opraw na jednej szynie",
    comparison: {
      title: "System magnetyczny a tradycyjne oprawy",
      aHead: "System magnetyczny",
      bHead: "Tradycyjne oprawy",
      rows: [
        {
          feature: "Zmiana ustawienia",
          a: "Lampy przestawiane na magnes w każdej chwili",
          b: "Pozycja ustalona na stałe wypustem"
        },
        {
          feature: "Wygląd",
          a: "Jedna ukryta szyna, czysta linia światła",
          b: "Wiele osobnych opraw i wypustów"
        },
        {
          feature: "Rozbudowa",
          a: "Moduły dokładane bez ingerencji w sufit",
          b: "Nowa oprawa wymaga nowego wypustu"
        },
        { feature: "Napięcie", a: "Niskie, bezpieczne 48 V", b: "230 V przy każdej oprawie" }
      ]
    },
    planCards: [
      {
        title: "Szyna magnetyczna 48 V",
        desc: "Ukryta szyna wtopiona w sufit. Lampy trzymają się na magnes i można je dowolnie przestawiać."
      },
      {
        title: "Lampy liniowe i spoty",
        desc: "Moduły liniowe do równego światła i punktowe spoty do akcentów — na jednej szynie."
      },
      {
        title: "Lampy wiszące",
        desc: "Zwieszane oprawy na tej samej szynie, bez osobnych wypustów w suficie."
      },
      {
        title: "Elastyczny układ",
        desc: "Lampy dokładamy, przesuwamy i zmieniamy nawet po montażu — bez ingerencji w sufit."
      }
    ],
    whyCards: [
      {
        title: "Pełna elastyczność",
        desc: "Ustawienie światła można zmienić w każdej chwili, dopasowując je do mebli i potrzeb."
      },
      {
        title: "Minimalistyczny wygląd",
        desc: "Ukryta szyna daje czysty, nowoczesny efekt zamiast wielu osobnych opraw."
      },
      {
        title: "Jeden spójny system",
        desc: "Wszystkie lampy działają na jednym zasilaniu 48 V, dobranym pod pomieszczenie."
      }
    ],
    priceCopy:
      "Koszt zależy od długości szyny, liczby i rodzaju opraw oraz sposobu montażu. Wycenę przygotowujemy po pomiarze.",
    priceFactors: ["długość szyny", "liczba opraw", "typy lamp", "liczba zakrętów i łączników"],
    faq: [
      {
        question: "Czy lampy można później przestawić lub dołożyć?",
        answer: "Tak, oprawy trzymają się na magnes i można je dowolnie przesuwać i wymieniać."
      },
      {
        question: "Czy szynę widać w suficie?",
        answer: "Prowadzimy ją podtynkowo lub w cieniu; na widoku zostaje samo światło."
      },
      { question: "Czy to bezpieczne?", answer: "Szyna pracuje na niskim napięciu 48 V." },
      {
        question: "Czy da się połączyć z wentylacją?",
        answer: "Tak, w tę samą linię można wpiąć moduł wentylacyjny (Air Track)."
      }
    ],
    related: ["wentylacja", "linie-swietlne", "oswietlenie-led"]
  },
  {
    slug: "gwiazdne-niebo",
    eyebrow: "Gwiazdne niebo",
    shortTitle: "Gwiazdne niebo",
    h1: "Sufit „gwiaździste niebo”",
    cardDescription: "Setki świetlnych punktów wtopionych w sufit napinany.",
    metaTitle: "Sufit „gwiaździste niebo” — Wrocław",
    metaDescription:
      "Sufit „gwiaździste niebo” — setki świetlnych punktów w suficie napinanym, od delikatnej poświaty po migoczące konstelacje. Wrocław i do 100 km.",
    heroSubtitle:
      "Efekt rozgwieżdżonego nieba nad głową. Setki świetlnych punktów wtopionych w sufit napinany — od delikatnej poświaty po migoczące konstelacje.",
    heroImage: {
      src: "/images/rozwiazania/gwiazdne-niebo/hero.jpg",
      alt: "Sufit napinany z efektem gwiaździstego nieba — przykładowy efekt"
    },
    whatIs:
      "Gwiazdne niebo to setki świetlnych punktów wtopionych w membranę sufitu — efekt rozgwieżdżonego nieba nad głową. Wykonujemy je na światłowodach albo na punktach LED, z możliwością migotania i zmiany jasności. Rozmieszczenie i gęstość gwiazd projektujemy indywidualnie — od delikatnych akcentów po gęste niebo. Sprawdza się w sypialni, pokoju dziecka, kinie domowym i strefie relaksu.",
    planTitle: "Warianty i efekty",
    whereFits: [
      { title: "Sypialnia", desc: "Miękka poświata do zasypiania i wieczornego relaksu." },
      { title: "Pokój dziecka", desc: "Bajkowy efekt nieba nad łóżkiem." },
      { title: "Kino domowe", desc: "Nastrojowe tło do wieczornych seansów." },
      { title: "Strefa relaksu", desc: "Spokojne światło w domowym SPA lub czytelni." }
    ],
    planCards: [
      {
        title: "Światłowody",
        desc: "Setki punktów świetlnych wtopionych w membranę, jak rozgwieżdżone niebo."
      },
      {
        title: "Punkty LED",
        desc: "Świecące punkty z efektem migotania i zmiany jasności."
      },
      {
        title: "Efekt migotania",
        desc: "Sterowanie daje wrażenie mrugających gwiazd i spokojnej, zmiennej poświaty."
      },
      {
        title: "Układ na zamówienie",
        desc: "Rozmieszczenie punktów projektujemy pod pomieszczenie — od pojedynczych akcentów po gęste niebo."
      }
    ],
    whyCards: [
      {
        title: "Wyjątkowy nastrój",
        desc: "Efekt sprawdza się w sypialni, pokoju dziecka, kinie domowym i strefie relaksu."
      },
      {
        title: "Efekt planowany z sufitem",
        desc: "Światłowody i okablowanie chowamy pod membraną na etapie montażu."
      },
      {
        title: "Rozwiązanie na zamówienie",
        desc: "Gęstość i układ gwiazd dobieramy indywidualnie do wnętrza."
      }
    ],
    priceCopy:
      "Koszt zależy od powierzchni, liczby punktów świetlnych oraz wybranego efektu. Wycenę przygotowujemy po pomiarze.",
    faq: [
      {
        question: "Czy nadaje się do sypialni i pokoju dziecka?",
        answer: "Tak, to jedno z najczęstszych zastosowań; światło jest miękkie i regulowane."
      },
      {
        question: "Czy punkty świetlne się nagrzewają?",
        answer: "Źródło światła jest ukryte poza płótnem, sam sufit pozostaje bezpieczny."
      },
      {
        question: "Czy można wybrać migotanie lub zmianę koloru?",
        answer: "Tak, efekt planujemy indywidualnie."
      },
      {
        question: "Czy zużywa dużo energii?",
        answer: "To oświetlenie LED o niskim poborze mocy."
      }
    ],
    related: ["sufit-podswietlany", "oswietlenie-led", "folie"]
  },
  {
    slug: "sufity-wielopoziomowe",
    eyebrow: "Sufity wielopoziomowe",
    shortTitle: "Sufity wielopoziomowe",
    h1: "Sufity wielopoziomowe i pływające",
    cardDescription: "Poziomy, uskoki i efekt „pływającego” sufitu z podświetleniem.",
    metaTitle: "Sufity wielopoziomowe i pływające — Wrocław",
    metaDescription:
      "Sufity wielopoziomowe i pływające z podświetleniem po obwodzie — głębia i efekt wyższego wnętrza. Bezpłatny pomiar, Wrocław i do 100 km.",
    heroSubtitle:
      "Sufit, który zyskuje głębię. Poziomy, uskoki i efekt „pływającego” sufitu z podświetleniem po obwodzie — pomieszczenie wygląda na wyższe i bardziej wykończone.",
    heroImage: {
      src: "/images/rozwiazania/sufity-wielopoziomowe/hero.jpg",
      alt: "Sufit wielopoziomowy z podświetleniem obwodowym — przykładowy efekt"
    },
    whatIs:
      "Sufit wielopoziomowy to konstrukcja z uskokami i różnymi wysokościami, która dodaje wnętrzu głębi i charakteru. Poziomy można podświetlić taśmą LED, uzyskując efekt „pływającego” sufitu oderwanego od reszty powierzchni. Wielopoziomowość pozwala też ukryć belki, instalacje i nierówności stropu. Formę i podświetlenie planujemy razem, żeby efekt był spójny.",
    planTitle: "Rodzaje form",
    whereFits: [
      { title: "Strefowanie wnętrza", desc: "Wydzielenie jadalni, salonu albo wyspy kuchennej." },
      { title: "Ukrycie instalacji", desc: "Zamaskowanie belek, rur i nierówności stropu." },
      { title: "Wyższe wnętrze", desc: "Podświetlony poziom optycznie podnosi sufit." },
      { title: "Reprezentacyjny efekt", desc: "Efektowny salon albo lokal usługowy." }
    ],
    whereFitsTitle: "Kiedy ma sens",
    planCards: [
      {
        title: "Dwa i więcej poziomów",
        desc: "Sufit z uskokami i różnymi wysokościami — bardziej przestrzenny efekt."
      },
      {
        title: "Efekt „pływający”",
        desc: "Poziom wizualnie oderwany od reszty sufitu dzięki podświetleniu."
      },
      {
        title: "Podświetlenie między poziomami",
        desc: "Taśma LED w uskoku daje miękką poświatę i podkreśla formę."
      },
      {
        title: "Formy na zamówienie",
        desc: "Fale, ramki i geometryczne układy dopasowane do wnętrza."
      }
    ],
    whyCards: [
      {
        title: "Efektowny, przestrzenny sufit",
        desc: "Poziomy dodają wnętrzu głębi i charakteru."
      },
      {
        title: "Ukrycie różnic sufitu",
        desc: "Wielopoziomowość maskuje belki, instalacje i nierówności stropu."
      },
      {
        title: "Podświetlenie w jednym projekcie",
        desc: "Poziomy i światło planujemy razem, żeby efekt był spójny."
      }
    ],
    priceCopy:
      "Koszt zależy od liczby poziomów, powierzchni i zakresu podświetlenia. Wycenę przygotowujemy po pomiarze.",
    faq: [
      {
        question: "Czy obniża pomieszczenie?",
        answer:
          "Konstrukcja zabiera trochę wysokości, ale dzięki podświetleniu sufit optycznie wydaje się wyższy."
      },
      {
        question: "Czy można podświetlić tylko obwód?",
        answer: "Tak, to właśnie efekt „pływający”."
      },
      {
        question: "Czy łączy się z innymi rozwiązaniami?",
        answer: "Tak, z liniami świetlnymi, szczeliną cienia i punktami LED."
      }
    ],
    related: ["linie-swietlne", "szczelina-cienia", "oswietlenie-led"]
  },
  {
    slug: "szczelina-cienia",
    eyebrow: "Szczelina cienia",
    shortTitle: "Szczelina cienia",
    h1: "Szczelina cienia — sufit bez widocznej ramki",
    cardDescription: "Wąska, cienista szczelina zamiast listwy — sufit „odrywa się” od ściany.",
    metaTitle: "Szczelina cienia — sufit bez widocznej ramki — Wrocław",
    metaDescription:
      "Szczelina cienia zamiast listwy maskującej — sufit napinany „odrywa się” od ściany. Czysty, nowoczesny detal. Wrocław i do 100 km.",
    heroSubtitle:
      "Zamiast listwy maskującej — wąska, cienista szczelina między sufitem a ścianą. Sufit wygląda, jakby „odrywał się” od ściany — czysto i nowocześnie.",
    heroImage: {
      src: "/images/rozwiazania/szczelina-cienia/hero.jpg",
      alt: "Szczelina cienia między sufitem napinanym a ścianą — przykładowy efekt"
    },
    whatIs:
      "Szczelina cienia to wąska, cienista przerwa 5–10 mm między sufitem a ścianą, zamiast klasycznej listwy. Sufit wizualnie „odrywa się” od ściany — to bardzo nowoczesny, minimalistyczny detal, który wygląda drogo. Przejście sufit–ściana jest czyste, bez widocznych maskownic i profili. Efekt wymaga precyzyjnego pomiaru i równych ścian, dlatego ustalamy go przed montażem.",
    comparison: {
      title: "Szczelina cienia a zwykła listwa",
      aHead: "Szczelina cienia",
      bHead: "Zwykła listwa",
      rows: [
        {
          feature: "Przejście sufit–ściana",
          a: "Cienisty rowek, bez widocznych profili",
          b: "Widoczna listwa maskująca"
        },
        { feature: "Efekt", a: "Sufit „odrywa się” od ściany", b: "Sufit dosunięty do ściany" },
        { feature: "Styl", a: "Minimalistyczny, „drogi” detal", b: "Standardowe wykończenie" },
        { feature: "Wymagania", a: "Precyzyjny pomiar i równe ściany", b: "Mniej wymagająca" }
      ]
    },
    notes: [
      "Efekt wymaga równych ścian i dokładnego pomiaru.",
      "Szczelinę ustalamy przed montażem — trudno dodać ją później.",
      "Można ją połączyć z delikatnym podświetleniem obwodowym."
    ],
    planCards: [
      {
        title: "Szczelina 5–10 mm",
        desc: "Wąska, cienista przerwa między sufitem a ścianą zamiast listwy."
      },
      {
        title: "Efekt „oderwanego” sufitu",
        desc: "Sufit wizualnie unosi się i odrywa od ściany — bardzo nowoczesny detal."
      },
      {
        title: "Bez listew",
        desc: "Czyste przejście sufit–ściana bez maskownic i profili przyściennych."
      },
      {
        title: "Połączenie z LED",
        desc: "Szczelinę można połączyć z delikatnym podświetleniem obwodowym."
      }
    ],
    whyCards: [
      {
        title: "Minimalistyczny, nowoczesny efekt",
        desc: "Cienista linia wygląda drogo i porządkuje wnętrze."
      },
      {
        title: "Czyste wykończenie",
        desc: "Brak widocznych listew i profili — sam czysty detal."
      },
      {
        title: "Precyzyjny montaż",
        desc: "Efekt wymaga dokładnego pomiaru i równych ścian, dlatego ustalamy go przed montażem."
      }
    ],
    priceCopy:
      "Koszt zależy od obwodu pomieszczenia i wybranego wariantu. Wycenę przygotowujemy po pomiarze.",
    faq: [
      {
        question: "Czym różni się od zwykłego wykończenia?",
        answer: "Nie ma widocznej listwy — zostaje sam cienisty rowek."
      },
      {
        question: "Czy zbiera kurz?",
        answer: "Szczelina jest wąska; utrzymanie jest proste."
      },
      { question: "Czy można połączyć z LED?", answer: "Tak, szczelinę można podświetlić." }
    ],
    related: ["sufity-wielopoziomowe", "linie-swietlne", "folie"]
  },
  {
    slug: "sufit-z-nadrukiem",
    eyebrow: "Sufit z nadrukiem",
    shortTitle: "Sufit z nadrukiem",
    h1: "Sufit z nadrukiem (fotodruk)",
    cardDescription: "Dowolna grafika na membranie w wysokiej rozdzielczości.",
    metaTitle: "Sufit z nadrukiem (fotodruk) — Wrocław",
    metaDescription:
      "Sufit napinany z nadrukiem (fotodruk) — dowolna grafika na membranie w wysokiej rozdzielczości. Bezpłatny pomiar, Wrocław i do 100 km.",
    heroSubtitle:
      "Dowolna grafika na suficie — od nieba i motywów natury po wzory pod projekt wnętrza. Nadruk wykonujemy na membranie w wysokiej rozdzielczości.",
    heroImage: {
      src: "/images/rozwiazania/sufit-z-nadrukiem/hero.jpg",
      alt: "Sufit napinany z nadrukiem wielkoformatowym — przykładowy efekt"
    },
    whatIs:
      "Sufit z nadrukiem to dowolna grafika — zdjęcie, wzór albo własny motyw — wydrukowana na membranie w wysokiej rozdzielczości. Stosujemy trwały druk UV odporny na blaknięcie, na macie, satynie albo połysku. W wariancie Double Vision nadruk wygląda inaczej przy świetle wyłączonym i włączonym. Sufit staje się wtedy elementem wystroju wnętrza, a nie tylko powierzchnią.",
    planTitle: "Warianty nadruku",
    whereFits: [
      { title: "Pokój dziecka", desc: "Niebo, mapa albo motyw z ulubionej bajki." },
      { title: "Sypialnia", desc: "Spokojny motyw natury nad łóżkiem." },
      { title: "Salon", desc: "Grafika dopasowana do stylu wnętrza." },
      { title: "Lokal usługowy", desc: "Sufit z logo albo motywem marki." }
    ],
    notes: [
      "Własne zdjęcie musi mieć wysoką rozdzielczość do druku wielkoformatowego.",
      "Motyw i kolory dobieramy do oświetlenia pomieszczenia.",
      "W wariancie Double Vision grafika zmienia się po włączeniu światła."
    ],
    planCards: [
      {
        title: "Dowolna grafika",
        desc: "Zdjęcie, wzór albo motyw wydrukowany na membranie w wysokiej rozdzielczości."
      },
      {
        title: "Nadruk UV",
        desc: "Trwały druk odporny na blaknięcie, na macie, satynie albo połysku."
      },
      {
        title: "Double Vision",
        desc: "Nadruk widoczny inaczej przy świetle wyłączonym i włączonym (podświetlany)."
      },
      {
        title: "Motyw na zamówienie",
        desc: "Niebo, wzory dekoracyjne albo własna grafika klienta."
      }
    ],
    whyCards: [
      {
        title: "Sufit jak element wystroju",
        desc: "Nadruk zamienia sufit w ozdobę wnętrza, a nie tylko powierzchnię."
      },
      {
        title: "Sprawdza się w wielu wnętrzach",
        desc: "Pokój dziecka, sypialnia, salon, lokal usługowy."
      },
      {
        title: "Jakość druku",
        desc: "Wysoka rozdzielczość i trwały nadruk UV — bez pikseli i blaknięcia."
      }
    ],
    priceCopy:
      "Koszt zależy od powierzchni nadruku, wybranej grafiki i podświetlenia. Wycenę przygotowujemy po pomiarze.",
    faq: [
      {
        question: "Czy można użyć własnego zdjęcia?",
        answer: "Tak, jeśli ma odpowiednią jakość do druku wielkoformatowego."
      },
      {
        question: "Czy nadruk blaknie?",
        answer: "Stosujemy druk trwały, odporny na warunki w pomieszczeniu."
      },
      {
        question: "Czy da się podświetlić grafikę?",
        answer: "Tak, w połączeniu z membraną translucentną."
      }
    ],
    related: ["sufit-podswietlany", "gwiazdne-niebo", "folie"]
  },
  {
    slug: "sufit-podswietlany",
    eyebrow: "Sufit podświetlany",
    shortTitle: "Sufit podświetlany",
    h1: "Sufit podświetlany",
    cardDescription: "Cała powierzchnia świeci miękkim, równomiernym światłem.",
    metaTitle: "Sufit podświetlany — Wrocław i do 100 km",
    metaDescription:
      "Sufit podświetlany — świecący sufit po obwodzie lub całą powierzchnią, także jako główne źródło światła. Projekt i montaż we Wrocławiu i do 100 km.",
    heroSubtitle:
      "Sufit, który świeci — miękko po obwodzie albo całą powierzchnią. Projektujemy i montujemy podświetlenie pod indywidualne wnętrze, we Wrocławiu i do 100 km od miasta.",
    heroImage: {
      src: "/images/rozwiazania/sufit-podswietlany/hero.jpg",
      alt: "Podświetlany sufit napinany świecący równomiernie — przykładowy efekt"
    },
    whatIs:
      "Sufit podświetlany to gotowe rozwiązanie oparte na folii translucent i oświetleniu LED. Światło umieszczone nad membraną prześwituje przez nią, dając efekt świecącej płaszczyzny. To nie tylko dekoracja — taki sufit może pełnić funkcję głównego źródła światła w pomieszczeniu.",
    bridge: { text: "Materiał: folia translucent", href: "/rozwiazania/folie/podswietlany" },
    planTitle: "Warianty podświetlenia",
    planCards: [
      {
        title: "Podświetlenie całej powierzchni",
        desc: "Cały sufit świeci równym światłem, jak wielki świetlny panel. Może być jedynym źródłem światła."
      },
      {
        title: "Podświetlenie obwodowe",
        desc: "Świeci obrys sufitu, tworząc miękką ramę światła i efekt „unoszącej się” płaszczyzny."
      },
      {
        title: "Sterowanie barwą",
        desc: "Światło ciepłe, neutralne, zimne, a także efekty RGB i płynne przejścia."
      }
    ],
    textBlocks: [
      {
        title: "Konstrukcja dwuwarstwowa",
        body: "W sufitach podświetlanych stosujemy dwie membrany. Dolna to folia translucent, przez którą prześwituje światło. Górna pełni funkcję ochronną — zatrzymuje kurz, drobinki i zabrudzenia opadające z bazowego stropu, żeby nie osiadały na membranie podświetlanej. Ma to znaczenie, bo przy włączonym świetle nawet drobny okruch na świecącej folii byłby widoczny na prześwicie. Dzięki górnej membranie efekt świetlny pozostaje idealnie czysty i równomierny."
      },
      {
        title: "Podświetlany nadruk — także do reklamy",
        body: "Na folii translucent można wykonać nadruk, który po podświetleniu staje się świecącą grafiką. To rozwiązanie sprawdza się nie tylko w domach, ale i w przestrzeniach komercyjnych — jako podświetlane logo, grafika czy element reklamowy w lokalu, salonie lub witrynie."
      }
    ],
    whereFitsText:
      "Łazienki (często jako jedyne oświetlenie), wnętrza bez okien, strefy relaksu i spa, baseny, nowoczesne salony oraz lokale komercyjne — restauracje, hotele, sklepy, gabinety.",
    whyCards: [
      {
        title: "Światło i dekoracja w jednym",
        desc: "Efektowne światło i pełnowartościowe źródło oświetlenia w jednym."
      },
      {
        title: "Podświetlana reklama",
        desc: "Możliwość podświetlanej reklamy w lokalach komercyjnych."
      },
      {
        title: "Trwała konstrukcja",
        desc: "Trwała, dwuwarstwowa konstrukcja z warstwą ochronną."
      }
    ],
    hidePrice: true,
    priceCopy:
      "Koszt zależy od powierzchni świecącej, rodzaju podświetlenia i sterowania. Wycenę przygotowujemy po pomiarze.",
    faq: [
      {
        question: "Czy światło jest równomierne?",
        answer: "Tak, membrana rozprasza je bez widocznych punktów."
      },
      {
        question: "Czy można regulować barwę i jasność?",
        answer: "Tak, w zależności od wybranego sterowania."
      },
      {
        question: "Gdzie się sprawdza?",
        answer: "W kuchni, łazience, gabinecie i wszędzie, gdzie brakuje światła dziennego."
      }
    ],
    related: ["sufit-z-nadrukiem", "gwiazdne-niebo", "oswietlenie-led"]
  }
];

export function getRozwiazanie(slug: string) {
  return rozwiazania.find((item) => item.slug === slug);
}

// Rekomendowana kolejność wszystkich rozwiązań (istniejące usługi + nowe).
export const solutionCardOrder = [
  "folie",
  "oswietlenie-led",
  "linie-swietlne",
  "system-magnetyczny",
  "sufity-wielopoziomowe",
  "szczelina-cienia",
  "sufit-podswietlany",
  "gwiazdne-niebo",
  "sufit-z-nadrukiem",
  "wentylacja",
  "karnisze-sufitowe"
];

export type SolutionCard = {
  slug: string;
  title: string;
  copy: string;
  href: string;
  isNew: boolean;
};

// Łączy istniejące usługi i nowe rozwiązania w jedną listę kart (w rekomendowanej kolejności).
export function getSolutionCards(): SolutionCard[] {
  return solutionCardOrder
    .map((slug) => {
      const service = services.find((item) => item.slug === slug);
      if (service) {
        return { slug, title: service.title, copy: service.copy, href: service.href, isNew: false };
      }
      const item = getRozwiazanie(slug);
      if (item) {
        return {
          slug,
          title: item.shortTitle,
          copy: item.cardDescription,
          href: `/rozwiazania/${item.slug}`,
          isNew: true
        };
      }
      return null;
    })
    .filter((card): card is SolutionCard => card !== null);
}

// Rozwiązuje slug (usługa lub nowe rozwiązanie) na tytuł + link — do bloku "Powiązane rozwiązania".
export function getSolutionLink(slug: string): { title: string; href: string } | null {
  const service = services.find((item) => item.slug === slug);
  if (service) {
    return { title: service.title, href: service.href };
  }
  const item = getRozwiazanie(slug);
  if (item) {
    return { title: item.shortTitle, href: `/rozwiazania/${item.slug}` };
  }
  return null;
}
