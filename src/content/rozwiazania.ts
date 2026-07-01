import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

export type RozwiazanieType = "A" | "B";

export type ImageSlot = {
  // Ścieżka placeholdera — realne zdjęcia podmieniamy tu, w danych.
  src: string;
  alt: string;
  caption?: string;
};

export type ComponentItem = {
  name: string;
  desc?: string;
};

export type ComponentGroup = {
  title?: string;
  image?: ImageSlot;
  items: ComponentItem[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type Rozwiazanie = {
  slug: string;
  type: RozwiazanieType;
  eyebrow: string;
  shortTitle: string;
  h1: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  heroImage: ImageSlot;
  whatIs: string;
  // Typ A — blok centralny "Co można zamontować"
  centralTitle?: string;
  componentGroups?: ComponentGroup[];
  howItLooks?: ImageSlot[];
  // Typ B — blok centralny "Jak to wygląda"
  gallery?: ImageSlot[];
  variants?: string[];
  priceCopy: string;
  priceFactors?: string[];
  faq: Faq[];
  related: string[];
};

// Wspólny blok "Dlaczego EkoSufity" — jedno miejsce dla wszystkich stron.
export const whyEkoSufity = {
  eyebrow: "Dlaczego EkoSufity",
  title: "Dlaczego EkoSufity",
  points: [
    "15 lat gwarancji na membranę, 5 lat na montaż, 2 lata na oświetlenie LED",
    "Bezpłatny pomiar z dojazdem do 100 km od Wrocławia",
    "Czysty montaż — bez kucia i pyłu",
    "Na rynku od 2020 roku"
  ],
  links: [
    { label: "Realne realizacje", href: "/realizacje", external: false },
    { label: "Opinie w Google", href: siteConfig.contacts.googleBusinessProfileHref, external: true }
  ]
};

// Wspólny blok "Proces" — 5 kroków.
export const processSteps = ["Kontakt", "Pomiar", "Projekt i wycena", "Montaż", "Odbiór"];

// Wspólny finalny CTA (bezosobowo — bez zwrotu do czytelnika).
export const finalCta = {
  text: "Które rozwiązanie pasuje do konkretnego wnętrza, najłatwiej sprawdzić na bezpłatnym pomiarze."
};

// Buduje sloty galerii z listy podpisów (każdy slot = placeholder "przykładowy efekt").
function gallerySlots(slug: string, labels: string[]): ImageSlot[] {
  return labels.map((label, index) => ({
    src: `/images/rozwiazania/${slug}/galeria-${index + 1}.jpg`,
    alt: label
  }));
}

export const rozwiazania: Rozwiazanie[] = [
  {
    slug: "wentylacja",
    type: "A",
    eyebrow: "Wentylacja",
    shortTitle: "Wentylacja",
    h1: "Wentylacja w suficie napinanym — Wrocław i do 100 km",
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
      "Standardowe kratki wentylacyjne i zewnętrzne elementy instalacji potrafią zepsuć efekt nowoczesnego wnętrza. W suficie napinanym prowadzimy wentylację inaczej — kanały i osprzęt chowamy nad membraną, a na widoku zostaje tylko wąska szczelina, cienka linia lub kratka wtopiona w płótno. Efekt jest czysty i minimalistyczny, a nawiew pozostaje w pełni funkcjonalny.",
    centralTitle: "Co można zamontować",
    componentGroups: [
      {
        title: "Premium — dyfuzory liniowe",
        image: {
          src: "/images/rozwiazania/wentylacja/dyfuzory-liniowe.jpg",
          alt: "Liniowy dyfuzor nawiewu w suficie napinanym — przykładowy efekt"
        },
        items: [
          {
            name: "Airpipe Pro",
            desc: "sufitowy dyfuzor szczelinowy (26 mm), niemal niewidoczna linia nawiewu."
          },
          {
            name: "Airwall",
            desc: "dyfuzor przyścienny w formie szczeliny cienia po obwodzie pomieszczenia."
          },
          {
            name: "Air Track Module",
            desc: "wentylacja zintegrowana z magnetyczną szyną oświetlenia: światło i powietrze w jednej linii."
          }
        ]
      },
      {
        title: "Kratki ukryte i cieniowe",
        image: {
          src: "/images/rozwiazania/wentylacja/kratki-cieniowe.jpg",
          alt: "Kratka cieniowa wpuszczona równo z sufitem — przykładowy efekt"
        },
        items: [
          {
            name: "Kratki cieniowe (100 / 125 mm)",
            desc: "wpuszczone równo z sufitem, praktycznie niewidoczne."
          },
          {
            name: "Kratki magnetyczne",
            desc: "zdejmowane na magnes, łatwe w czyszczeniu i obsłudze."
          }
        ]
      },
      {
        title: "Podstawowe kratki okrągłe",
        image: {
          src: "/images/rozwiazania/wentylacja/kratki-okragle.jpg",
          alt: "Okrągła kratka wentylacyjna z pierścieniem — przykładowy efekt"
        },
        items: [
          {
            name: "Kratki okrągłe",
            desc: "klasyczne rozwiązanie z pierścieniem ochronnym, gdy liczy się prostota i budżet."
          }
        ]
      }
    ],
    howItLooks: [
      {
        src: "/images/rozwiazania/wentylacja/wnetrze-1.jpg",
        alt: "Sufit z niewidoczną wentylacją w salonie — przykładowy efekt"
      },
      {
        src: "/images/rozwiazania/wentylacja/wnetrze-2.jpg",
        alt: "Liniowy nawiew wtopiony w sufit napinany — przykładowy efekt"
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
    related: ["system-magnetyczny", "linie-swietlne", "sufity-napinane"]
  },
  {
    slug: "system-magnetyczny",
    type: "A",
    eyebrow: "System magnetyczny",
    shortTitle: "System magnetyczny",
    h1: "System magnetyczny 48 V w suficie napinanym — Wrocław i do 100 km",
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
      "System magnetyczny to ukryta w suficie szyna 48 V, do której lampy mocuje się na magnes. Oprawy można przesuwać, dokładać i wymieniać bez przeróbek — oświetlenie dopasowuje się do wnętrza, a nie odwrotnie. Szynę prowadzimy w cieniu lub równo z płótnem, więc na widoku zostaje samo światło.",
    centralTitle: "Co można zamontować w szynie",
    componentGroups: [
      {
        image: {
          src: "/images/rozwiazania/system-magnetyczny/elementy.jpg",
          alt: "Elementy systemu magnetycznego 48 V — przykładowy efekt"
        },
        items: [
          {
            name: "Szyna",
            desc: "montaż podtynkowy, w tym wersje do płyt GK; prosto lub z zakrętami."
          },
          { name: "Lampy liniowe", desc: "równomierne, rozproszone światło wzdłuż szyny." },
          { name: "Reflektory (spoty)", desc: "kierunkowe światło akcentujące." },
          { name: "Lampy wiszące", desc: "nad stołem, wyspą, barem." },
          { name: "Głośnik magnetyczny", desc: "Sound Bar wpinany w tę samą szynę." },
          {
            name: "Zasilanie i łączniki",
            desc: "kompaktowy zasilacz ukryty w konstrukcji; łączniki proste i kątowe (L) pozwalają poprowadzić szynę pod kształt pomieszczenia."
          }
        ]
      }
    ],
    howItLooks: [
      {
        src: "/images/rozwiazania/system-magnetyczny/wnetrze-1.jpg",
        alt: "Lampy wiszące na szynie magnetycznej nad stołem — przykładowy efekt"
      },
      {
        src: "/images/rozwiazania/system-magnetyczny/wnetrze-2.jpg",
        alt: "Reflektory i lampa liniowa w jednej szynie — przykładowy efekt"
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
    type: "B",
    eyebrow: "Gwiazdne niebo",
    shortTitle: "Gwiazdne niebo",
    h1: "Sufit „gwiaździste niebo” — Wrocław i do 100 km",
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
      "Gwiaździste niebo to efekt świetlny wbudowany w sufit napinany. Punkty świetlne rozprowadzamy w membranie i podłączamy do źródła ukrytego nad płótnem, dzięki czemu w pomieszczeniu widać samą „gwiezdną” poświatę. Efekt można zaplanować jako spokojne, równomierne rozsypanie gwiazd albo jako wyraziste konstelacje z migotaniem.",
    gallery: gallerySlots("gwiazdne-niebo", [
      "Rozproszone gwiazdy",
      "Efekt drogi mlecznej",
      "Konstelacje",
      "Migotanie i zmiana barwy",
      "Połączenie z podświetleniem obwodowym"
    ]),
    variants: [
      "Gęstość i układ punktów — od subtelnej poświaty po gęste niebo",
      "Efekt statyczny lub z migotaniem",
      "Sterowanie pilotem / zmiana barwy"
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
    related: ["sufit-podswietlany", "oswietlenie-led", "sufity-napinane"]
  },
  {
    slug: "sufity-wielopoziomowe",
    type: "B",
    eyebrow: "Sufity wielopoziomowe",
    shortTitle: "Sufity wielopoziomowe",
    h1: "Sufity wielopoziomowe i pływające — Wrocław i do 100 km",
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
      "Sufit wielopoziomowy to konstrukcja z dwóch lub więcej płaszczyzn na różnych wysokościach — pozwala wydzielić strefy, ukryć instalacje i nadać wnętrzu głębię. Wariant „pływający” to sufit z podświetleniem po obwodzie, który sprawia wrażenie, jakby unosił się nad ścianami. Efekt planujemy razem z oświetleniem i wykończeniem krawędzi.",
    gallery: gallerySlots("sufity-wielopoziomowe", [
      "Sufit dwupoziomowy",
      "Sufit pływający z podświetleniem obwodowym",
      "Uskok z linią LED",
      "Wydzielenie strefy (salon / kuchnia)",
      "Podświetlenie ciepłe vs zimne"
    ]),
    variants: [
      "Dwa i więcej poziomów",
      "Efekt pływający (podświetlenie po obwodzie)",
      "Integracja z liniami świetlnymi i szczeliną cienia"
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
    type: "B",
    eyebrow: "Szczelina cienia",
    shortTitle: "Szczelina cienia",
    h1: "Szczelina cienia — sufit bez widocznej ramki — Wrocław i do 100 km",
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
      "Szczelina cienia to sposób wykończenia krawędzi sufitu bez widocznej listwy. Zamiast standardowego styku ze ścianą powstaje wąski, cienisty rowek (ok. 5–10 mm), który daje efekt lekkości i porządku. To detal ceniony w nowoczesnych, minimalistycznych wnętrzach.",
    gallery: gallerySlots("szczelina-cienia", [
      "Szczelina przyścienna po obwodzie",
      "Połączenie z sufitem pływającym",
      "Szczelina + linia świetlna",
      "Zbliżenie detalu"
    ]),
    variants: [
      "Szerokość szczeliny (ok. 5–10 mm)",
      "Wersje przyścienne i sufitowe",
      "Możliwość połączenia z podświetleniem"
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
    related: ["sufity-wielopoziomowe", "linie-swietlne", "sufity-napinane"]
  },
  {
    slug: "sufit-z-nadrukiem",
    type: "B",
    eyebrow: "Sufit z nadrukiem",
    shortTitle: "Sufit z nadrukiem",
    h1: "Sufit z nadrukiem (fotodruk) — Wrocław i do 100 km",
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
      "Sufit z nadrukiem to membrana z nadrukowaną grafiką. Nadruk wykonujemy w wysokiej rozdzielczości na całej powierzchni lub na wybranym fragmencie. Motyw dobieramy pod wnętrze — od zdjęć i wzorów po delikatne tła; grafikę można też połączyć z podświetleniem.",
    gallery: gallerySlots("sufit-z-nadrukiem", [
      "Niebo z chmurami",
      "Motyw natury / las",
      "Wzór dekoracyjny",
      "Nadruk podświetlany od tyłu",
      "Pokój dziecięcy"
    ]),
    variants: [
      "Nadruk na całości lub fragmencie",
      "Dobór grafiki pod projekt",
      "Możliwość podświetlenia (efekt świetlistego obrazu)"
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
    related: ["sufit-podswietlany", "gwiazdne-niebo", "sufity-napinane"]
  },
  {
    slug: "sufit-podswietlany",
    type: "B",
    eyebrow: "Sufit podświetlany",
    shortTitle: "Sufit podświetlany",
    h1: "Sufit podświetlany (translucent) — Wrocław i do 100 km",
    cardDescription: "Cała powierzchnia świeci miękkim, równomiernym światłem.",
    metaTitle: "Sufit podświetlany (translucent) — Wrocław",
    metaDescription:
      "Sufit podświetlany (translucent) — cała powierzchnia świeci równomiernym światłem bez widocznych punktów. Wrocław i do 100 km.",
    heroSubtitle:
      "Cała powierzchnia sufitu świeci miękkim, równomiernym światłem. Półprzezroczysta membrana podświetlona od wewnątrz — bez widocznych punktów i źródeł.",
    heroImage: {
      src: "/images/rozwiazania/sufit-podswietlany/hero.jpg",
      alt: "Podświetlany sufit napinany świecący równomiernie — przykładowy efekt"
    },
    whatIs:
      "Sufit podświetlany to półprzezroczysta membrana z ukrytym za nią oświetleniem LED. Światło rozkłada się równomiernie na całej powierzchni — bez widocznych punktów — dając efekt świetlistego sufitu jak świetlik dzienny. Można podświetlić cały sufit, jego fragment lub wydzielony kształt, także z regulacją barwy.",
    gallery: gallerySlots("sufit-podswietlany", [
      "Cały sufit świecący",
      "Świetlny fragment / wyspa",
      "Kształt geometryczny",
      "Ciepła vs zimna barwa",
      "Łazienka / kuchnia"
    ]),
    variants: [
      "Cała powierzchnia",
      "Fragment lub kształt",
      "Regulacja barwy i jasności",
      "Połączenie z nadrukiem (świetlisty obraz)"
    ],
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
  "sufity-napinane",
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
