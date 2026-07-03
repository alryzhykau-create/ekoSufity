// Rodzaje faktur folii napinanej — podstrony /rozwiazania/folie/[slug].
// Teksty dostarczone przez klienta. Cen nie podajemy liczbowo.

export type FakturaCard = {
  title: string;
  desc: string;
};

export type FakturaFaq = {
  question: string;
  answer: string;
};

export type Faktura = {
  slug: string;
  name: string; // krótka nazwa do kart i przelinkowań
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  whatIs: string;
  zalety: FakturaCard[];
  warto: string; // "O czym warto wiedzieć" (minusy / niuanse)
  gdzie: string; // "Gdzie sprawdza się najlepiej"
  inneFaktury: string; // "…a inne faktury"
  faq: FakturaFaq[];
};

export const faktury: Faktura[] = [
  {
    slug: "matowy",
    name: "Matowy",
    eyebrow: "Rodzaj folii",
    h1: "Sufit matowy",
    metaTitle: "Sufit matowy — folia bez odbić | Wrocław",
    metaDescription:
      "Sufit matowy — najczęściej wybierana faktura folii napinanej: spokojny, równy efekt bez odbić i refleksów. Montaż we Wrocławiu i do 100 km.",
    heroIntro:
      "Sufit matowy to najczęściej wybierana faktura folii napinanej. Daje spokojny, klasyczny efekt idealnie równego, gładko pomalowanego sufitu — bez smug, pęknięć i rys. Montujemy go we Wrocławiu i w miejscowościach do 100 km od miasta.",
    whatIs:
      "Folia matowa ma mikrostrukturę powierzchni, która nie odbija światła. Dzięki temu sufit wygląda jak perfekcyjnie równa, pomalowana powierzchnia — tyle że idealnie płaska, bez śladów wałka, spękań i przebarwień. Efekt jest stonowany i naturalny: sufit „znika” we wnętrzu, nie przyciąga uwagi i staje się spokojnym tłem dla mebli, światła i dekoracji. To rozwiązanie dla osób, które nie chcą efektu lustra ani mocnego połysku, tylko czystej, klasycznej powierzchni. Mat to też najbezpieczniejszy wybór, gdy nie jesteśmy pewni, jaka faktura pasuje do wnętrza — sprawdza się niemal wszędzie.",
    zalety: [
      {
        title: "Klasyczny, ponadczasowy wygląd",
        desc: "Pasuje do każdego stylu, od nowoczesnego minimalizmu po wnętrza klasyczne i rustykalne. Nie wychodzi z mody."
      },
      {
        title: "Brak refleksów i odbić",
        desc: "Mat nie odbija okien ani lamp, dlatego świetnie sprawdza się przy mocnym świetle dziennym i w pomieszczeniach z dużymi oknami."
      },
      {
        title: "Idealny pod ukryte LED",
        desc: "Równomiernie rozprasza światło z taśm LED. Nie odbija źródła światła, więc poświata jest jednolita i miękka, bez widocznych punktów."
      },
      {
        title: "Maskuje niedoskonałości",
        desc: "Dobrze ukrywa nierówności stropu, pęknięcia, przebarwienia i instalacje. Po montażu widać tylko gładką taflę."
      },
      {
        title: "Uniwersalność",
        desc: "Pasuje do salonu, sypialni, kuchni czy biura, niezależnie od kolorystyki ścian i mebli."
      }
    ],
    warto:
      "Mat nie powiększa optycznie przestrzeni tak jak połysk — jeśli pomieszczenie jest małe lub ciemne i zależy na efekcie „większego wnętrza”, warto rozważyć satynę lub połysk. W wąskim, ciemnym korytarzu mat nie rozjaśni przestrzeni tak skutecznie jak faktury odbijające światło. Jest też mniej efektowny niż lustrzany połysk. To nie wada, a kwestia oczekiwań: mat wybiera się właśnie po to, żeby sufit był dyskretny.",
    gdzie:
      "Sufit matowy to naturalny wybór do salonu, sypialni i pokoju dziecięcego, gdzie liczy się spokój i przytulność. Świetnie wygląda w gabinetach i wnętrzach biurowych oraz wszędzie tam, gdzie jest dużo światła dziennego. Bardzo dobrze współpracuje z ukrytym oświetleniem LED i liniami świetlnymi, dając równą, stonowaną poświatę. To także bezpieczny wybór do klasycznych i minimalistycznych aranżacji.",
    inneFaktury:
      "W porównaniu z satyną mat jest bardziej stonowany i nie odbija światła — satyna daje delikatny, perłowy połysk. W porównaniu z połyskiem mat jest klasyczny i dyskretny, podczas gdy połysk działa jak lustro i optycznie powiększa wnętrze.",
    faq: [
      {
        question: "Czy sufit matowy wygląda jak zwykły pomalowany sufit?",
        answer:
          "Tak, ale jest idealnie równy, bez smug i spękań, i nie wymaga malowania ani odnawiania przez lata."
      },
      {
        question: "Czy mat nadaje się do łazienki i kuchni?",
        answer:
          "Tak. Folia jest odporna na wilgoć i nie chłonie wody, więc sprawdza się w pomieszczeniach wilgotnych."
      },
      {
        question: "Czy na macie widać ukryte oświetlenie LED?",
        answer:
          "Nie widać źródła światła — mat równomiernie rozprasza poświatę, dlatego jest jednym z najlepszych wyborów pod LED."
      },
      {
        question: "Czy mat jest tańszy od innych faktur?",
        answer:
          "Mat i satyna to zwykle podstawowe faktury; połysk, transparent i nadruk bywają droższe. Dokładną cenę podajemy po pomiarze."
      }
    ]
  },
  {
    slug: "satynowy",
    name: "Satynowy",
    eyebrow: "Rodzaj folii",
    h1: "Sufit satynowy",
    metaTitle: "Sufit satynowy — perłowy połysk | Wrocław",
    metaDescription:
      "Sufit satynowy — złoty środek między matem a połyskiem: delikatny, perłowy blask bez efektu lustra. Montaż we Wrocławiu i do 100 km.",
    heroIntro:
      "Sufit satynowy to złoty środek między matem a połyskiem — delikatny, perłowy blask, który dodaje wnętrzu elegancji bez efektu lustra. Montujemy go we Wrocławiu i do 100 km od miasta.",
    whatIs:
      "Folia satynowa ma gładszą powierzchnię niż mat i delikatnie odbija światło — około 15–20% padającego światła. Efekt jest subtelny i perłowy: głębszy i bardziej elegancki niż mat, ale zdecydowanie łagodniejszy niż lustrzany połysk. Satyna nie ma mikroziarnistości matu, dzięki czemu wygląda „czyściej” i gładziej. To faktura dla osób, którym mat wydaje się zbyt neutralny, a połysk zbyt mocny.",
    zalety: [
      {
        title: "Delikatny połysk i elegancja",
        desc: "Subtelny, perłowy efekt dodaje wnętrzu głębi i klasy, nie przytłaczając go."
      },
      {
        title: "Rozjaśnia i powiększa",
        desc: "Optycznie powiększa i rozjaśnia ciemniejsze pomieszczenia, odbijając część światła."
      },
      {
        title: "Łatwiejszy w czyszczeniu",
        desc: "Gładka powierzchnia bez mikroporów jest prostsza w utrzymaniu niż mat."
      },
      {
        title: "Pięknie współgra z LED",
        desc: "Świetnie wygląda z oświetleniem obwodowym, dając efektowną, miękką poświatę."
      },
      {
        title: "Efektowny wieczorem",
        desc: "Szczególnie ładnie prezentuje się przy sztucznym świetle i lampach."
      }
    ],
    warto:
      "Przy bardzo mocnym słońcu — okna od południa, świetliki dachowe — na satynie mogą pojawić się delikatne refleksy, które nie każdemu odpowiadają. W małej, niskiej sypialni subtelny połysk może optycznie „przytłaczać” — w takich wnętrzach często lepiej sprawdza się mat. Satyna to kompromis: daje więcej życia niż mat, ale mniej blasku niż połysk.",
    gdzie:
      "Satyna to uniwersalny wybór do salonów, sypialni, kuchni, pokoi dziecięcych i gabinetów. Szczególnie dobrze sprawdza się w pomieszczeniach, które chcemy delikatnie rozjaśnić i dodać im elegancji bez efektu lustra. Doskonale współpracuje z oświetleniem LED — zarówno obwodowym, jak i punktowym — tworząc miękką grę światła.",
    inneFaktury:
      "Satyna leży dokładnie pomiędzy matem a połyskiem. Od matu różni się delikatnym blaskiem i gładszą powierzchnią. Od połysku różni się subtelnością — połysk działa jak lustro, satyna daje tylko lekki refleks. Jeśli mat wydaje się zbyt zwykły, a połysk zbyt mocny — satyna jest idealnym kompromisem.",
    faq: [
      {
        question: "Czym satyna różni się od matu?",
        answer:
          "Satyna delikatnie odbija światło i ma perłowy odcień, mat jest całkowicie matowy i nie odbija światła."
      },
      {
        question: "Czy satyna nadaje się do kuchni?",
        answer: "Tak, jest odporna na wilgoć, a gładka powierzchnia jest łatwa w czyszczeniu."
      },
      {
        question: "Czy na satynie widać odbicia lamp?",
        answer:
          "Przy oświetleniu punktowym widoczny bywa delikatny efekt halo wokół punktów — to subtelny, dekoracyjny efekt."
      },
      {
        question: "Czy satyna jest droższa od matu?",
        answer:
          "Zwykle mat i satyna są w tej samej, podstawowej półce cenowej. Dokładną cenę podajemy po pomiarze."
      }
    ]
  },
  {
    slug: "polysk",
    name: "Połysk",
    eyebrow: "Rodzaj folii",
    h1: "Sufit z połyskiem",
    metaTitle: "Sufit z połyskiem — efekt lustra | Wrocław",
    metaDescription:
      "Sufit z połyskiem (lakierowany) odbija światło jak lustro i optycznie powiększa wnętrze. Najbardziej efektowna faktura. Wrocław i do 100 km.",
    heroIntro:
      "Sufit z połyskiem odbija światło niczym lustro i optycznie powiększa wnętrze. Najbardziej efektowna z klasycznych faktur. Montujemy go we Wrocławiu i do 100 km od miasta.",
    whatIs:
      "Folia z połyskiem (nazywana też lakierowaną lub lustrzaną) ma wysoki połysk i odbija światło oraz obraz jak lustro. Dzięki temu optycznie podnosi wysokość pomieszczenia i powiększa przestrzeń. To najbardziej efektowna z podstawowych faktur — od razu przyciąga uwagę i nadaje wnętrzu nowoczesny, prestiżowy charakter.",
    zalety: [
      {
        title: "Optycznie powiększa przestrzeń",
        desc: "Odbijająca powierzchnia sprawia, że małe i ciemne pomieszczenia wydają się większe i wyższe."
      },
      {
        title: "Rozjaśnia wnętrze",
        desc: "Odbija światło dzienne i sztuczne, dzięki czemu pomieszczenie jest jaśniejsze."
      },
      {
        title: "Nowoczesny, prestiżowy wygląd",
        desc: "Efekt lustra robi wrażenie i podnosi standard wnętrza."
      },
      {
        title: "Szeroka gama kolorów",
        desc: "Połysk pięknie prezentuje się także w intensywnych, głębokich barwach."
      },
      {
        title: "Efektowna gra światła",
        desc: "Świetnie współgra z oświetleniem, zwłaszcza w połączeniu z LED."
      }
    ],
    warto:
      "Na powierzchni z połyskiem bardziej widoczne bywają kurz i ślady, dlatego wymaga nieco więcej uwagi przy pielęgnacji niż mat. W pomieszczeniach o niskich sufitach mocne odbicia mogą „przytłaczać” — tam często lepiej sprawdzi się mat lub satyna. Połysk odbija całe wnętrze, więc warto pamiętać, że w lustrzanej tafli widoczne będzie to, co znajduje się poniżej.",
    gdzie:
      "Połysk to idealne rozwiązanie do małych i ciemnych pomieszczeń, które chcemy optycznie powiększyć — korytarzy, przedpokoi, łazienek i toalet. Świetnie wygląda w nowoczesnych salonach i kuchniach. W wysokich pomieszczeniach potęguje wrażenie przestrzeni. Bardzo efektownie łączy się z oświetleniem LED, które odbija się w lustrzanej tafli.",
    inneFaktury:
      "Połysk to najmocniejszy efekt z klasycznych faktur. Od matu różni się diametralnie — mat nie odbija światła, połysk działa jak lustro. Od satyny różni się intensywnością — satyna daje delikatny perłowy blask, połysk pełne, lustrzane odbicie.",
    faq: [
      {
        question: "Czy sufit z połyskiem naprawdę powiększa pomieszczenie?",
        answer:
          "Tak, odbicie światła i obrazu optycznie podnosi sufit i powiększa przestrzeń, zwłaszcza w małych wnętrzach."
      },
      {
        question: "Czy na połysku widać odbicia mebli?",
        answer: "Tak, lustrzana tafla odbija wnętrze — to naturalna cecha tej faktury."
      },
      {
        question: "Czy połysk nadaje się do niskich pomieszczeń?",
        answer:
          "Można go stosować, ale przy bardzo niskich sufitach mocne odbicia bywają przytłaczające — warto to omówić na pomiarze."
      },
      {
        question: "Czy połysk trudniej utrzymać w czystości?",
        answer:
          "Widać na nim więcej śladów i kurzu, ale gładką powierzchnię łatwo przetrzeć wodą lub łagodnym detergentem."
      }
    ]
  },
  {
    slug: "podswietlany",
    name: "Podświetlany",
    eyebrow: "Rodzaj folii",
    h1: "Sufit podświetlany (translucent)",
    metaTitle: "Sufit podświetlany (translucent) | Wrocław",
    metaDescription:
      "Sufit podświetlany świeci całą powierzchnią miękkim, równym światłem — także we wnętrzach bez okien. Folia transparentna i LED. Wrocław i do 100 km.",
    heroIntro:
      "Sufit podświetlany świeci całą powierzchnią miękkim, równym światłem — jak wielki świetlny panel. Efektowne i praktyczne rozwiązanie, także do wnętrz bez okien. Montujemy go we Wrocławiu i do 100 km od miasta.",
    whatIs:
      "Sufit podświetlany to osobna kategoria — nie mylić z matem, satyną czy połyskiem. Wykorzystuje folię transparentną (translucent) oraz taśmy LED umieszczone nad membraną. Po włączeniu światła cała powierzchnia sufitu świeci miękkim, równym blaskiem, imitując naturalne światło dzienne. Po wyłączeniu folia wraca do białej, mlecznej barwy i wygląda jak zwykły gładki sufit.",
    zalety: [
      {
        title: "Miękkie światło z całej powierzchni",
        desc: "Równomierna poświata bez widocznych punktów, przyjemna dla oka i imitująca światło dzienne."
      },
      {
        title: "Może być jedynym źródłem światła",
        desc: "Świetnie doświetla wnętrza, także te bez okien."
      },
      {
        title: "Sterowanie barwą i jasnością",
        desc: "Światło ciepłe, neutralne lub zimne, a także efekty RGB i płynne przejścia."
      },
      {
        title: "Elastyczność efektu",
        desc: "Świecić może cała powierzchnia albo wybrany fragment, na przykład po obwodzie."
      },
      {
        title: "Nowoczesny, efektowny wygląd",
        desc: "Robi wrażenie i podnosi standard wnętrza."
      }
    ],
    warto:
      "Efekt zależy nie tylko od folii, ale przede wszystkim od dobrze zaplanowanego projektu podświetlenia. Kluczowa jest odpowiednia odległość taśm LED od membrany — to ona decyduje o tym, czy światło będzie idealnie równe, bez widocznych pasów. Dlatego sufit podświetlany planujemy indywidualnie. To rozwiązanie z wyższej półki niż zwykła folia — ale efekt jest wyjątkowy.",
    gdzie:
      "Sufit podświetlany świetnie sprawdza się w łazienkach — często jako jedyne oświetlenie. Idealny do pomieszczeń bez okien, garderób i korytarzy. Doskonale wygląda w strefach relaksu, spa i przy basenach. Coraz częściej wybierany do nowoczesnych salonów oraz lokali komercyjnych — restauracji, hoteli i gabinetów.",
    inneFaktury:
      "Podświetlany to nie „kolejna faktura”, tylko osobne rozwiązanie oparte na świetle. Mat, satyna i połysk różnią się sposobem odbijania światła — sufit podświetlany sam jest jego źródłem.",
    faq: [
      {
        question: "Czy sufit podświetlany może być jedynym światłem w pomieszczeniu?",
        answer:
          "Tak, często stosuje się go jako główne oświetlenie, na przykład w łazienkach."
      },
      {
        question: "Czy po wyłączeniu światła wygląda jak zwykły sufit?",
        answer:
          "Tak, folia wraca wtedy do białej, mlecznej barwy — nie widać taśm LED ani instalacji."
      },
      {
        question: "Czy można zmieniać kolor światła?",
        answer: "Tak, dostępne jest światło ciepłe, neutralne, zimne, a także efekty RGB."
      },
      {
        question: "Czy to droższe rozwiązanie?",
        answer:
          "Tak, jest z wyższej półki niż zwykła folia. Dokładną cenę podajemy po pomiarze."
      }
    ]
  }
];

// Krótkie opisy do kart „Rodzaje faktur” (na /rozwiazania/folie i /sufity-napinane).
export const fakturaCardCopy: Record<string, string> = {
  matowy: "Klasyczny, bez odbić. Najczęściej wybierany.",
  satynowy: "Delikatny, perłowy połysk. Złoty środek.",
  polysk: "Efekt lustra, optycznie powiększa wnętrze.",
  podswietlany: "Świeci całą powierzchnią."
};

export function getFaktura(slug: string) {
  return faktury.find((item) => item.slug === slug);
}
