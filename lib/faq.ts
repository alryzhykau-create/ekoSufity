export type FAQPageKey =
  | "home"
  | "faq"
  | "ceny"
  | "o-sufitach"
  | "rodzaje-sufitow"
  | "rozwiazania"
  | "oswietlenie"
  | "profile"
  | "wentylacja"
  | "luki-rewizyjne"
  | "lokalizacje"
  | "kontakt";

export type BasicFAQItem = {
  question: string;
  answer: string;
};

export type FAQItem = BasicFAQItem & {
  id: string;
  category: string;
  pages: FAQPageKey[];
  relatedLinks: string[];
};

export type FAQCategory = {
  title: string;
  slug: string;
  description: string;
  items: FAQItem[];
};

type FAQEntry = {
  id: string;
  question: string;
  answer: string;
  pages?: FAQPageKey[];
  relatedLinks?: string[];
};

const categoryMeta = [
  {
    title: "Cena i wycena",
    slug: "cena-i-wycena",
    description: "Najważniejsze informacje o orientacyjnych cenach, kalkulatorze i przygotowaniu dokładnej wyceny.",
  },
  {
    title: "Montaż",
    slug: "montaz",
    description: "Przebieg montażu, przygotowanie pomieszczenia, czas prac i wpływ na codzienne użytkowanie.",
  },
  {
    title: "Rodzaje sufitów",
    slug: "rodzaje-sufitow",
    description: "Różnice między sufitami matowymi, satynowymi, błyszczącymi, dekoracyjnymi i technicznymi.",
  },
  {
    title: "Oświetlenie",
    slug: "oswietlenie",
    description: "LED, punkty świetlne, linie LED, taśmy, szyny magnetyczne, oprawy i zasilacze.",
  },
  {
    title: "Profile i konstrukcje",
    slug: "profile-i-konstrukcje",
    description: "Profile montażowe, połączenia, ukryte karnisze, poziomy, nisze LED i nietypowe kształty.",
  },
  {
    title: "Wentylacja",
    slug: "wentylacja",
    description: "Kratki, kanały wentylacyjne, łazienki, kuchnie i planowanie przepływu powietrza.",
  },
  {
    title: "Luki rewizyjne",
    slug: "luki-rewizyjne",
    description: "Dostęp techniczny do poddasza, instalacji, wentylacji, dachu i zasilaczy LED.",
  },
  {
    title: "Pielęgnacja",
    slug: "pielegnacja",
    description: "Czyszczenie, mycie, codzienne użytkowanie i trwałość wizualna membrany.",
  },
  {
    title: "Bezpieczeństwo",
    slug: "bezpieczenstwo",
    description: "Wilgoć, kuchnia, łazienka, zalanie, zapach, czujniki i bezpieczeństwo użytkowania.",
  },
  {
    title: "Gwarancja",
    slug: "gwarancja",
    description: "Zakres gwarancji, montaż, oświetlenie, serwis i postępowanie po montażu.",
  },
  {
    title: "Płatność i dokumenty",
    slug: "platnosc-i-dokumenty",
    description: "Formy płatności, zaliczka, umowa, faktura i rozliczenie większych zleceń.",
  },
  {
    title: "Lokalizacje",
    slug: "lokalizacje",
    description: "Wrocław, okolice do około 100 km, pomiary poza Wrocławiem i lokalne wyceny.",
  },
] as const;

function entry(
  id: string,
  question: string,
  answer: string,
  pages: FAQPageKey[] = ["faq"],
  relatedLinks: string[] = []
): FAQEntry {
  return { id, question, answer, pages, relatedLinks };
}

const faqEntries: Record<string, FAQEntry[]> = {
  "Cena i wycena": [
    entry("ile-kosztuje-sufit-napinany", "Ile kosztuje sufit napinany?", "Cena zależy od powierzchni, materiału, profili, oświetlenia i szczegółów montażu. Orientacyjny zakres sprawdzisz w kalkulatorze, a dokładną wycenę przygotowujemy po pomiarze lub po otrzymaniu zdjęć i wymiarów.", ["faq", "ceny", "lokalizacje"], ["/ceny", "/kontakt"]),
    entry("ile-kosztuje-m2-sufitu-napinanego", "Ile kosztuje m² sufitu napinanego?", "Cena za m² zależy od rodzaju membrany i zakresu prac. Prosty sufit zwykle wycenia się inaczej niż sufit z LED, profilami specjalnymi lub nietypową konstrukcją.", ["faq", "ceny"], ["/ceny"]),
    entry("od-czego-zalezy-cena", "Od czego zależy cena sufitu napinanego?", "Na cenę wpływa metraż, liczba narożników, rodzaj sufitu, profile, oświetlenie, wentylacja, luki rewizyjne i warunki montażowe.", ["faq", "ceny"], ["/ceny"]),
    entry("cena-a-pomieszczenie", "Dlaczego cena różni się w zależności od pomieszczenia?", "Łazienka, kuchnia, salon i korytarz mają inne wymagania dotyczące wentylacji, opraw, profili i dostępu do instalacji. Dlatego sama powierzchnia nie wystarcza do dokładnej wyceny.", ["faq", "ceny"], ["/ceny"]),
    entry("wiekszy-metraz-nizsza-cena", "Czy cena za m² jest niższa przy większym metrażu?", "Czasem większy metraż pozwala lepiej rozłożyć koszty przygotowania i dojazdu, ale ostateczna cena zależy od całego zakresu prac.", ["faq", "ceny"], ["/ceny"]),
    entry("male-pomieszczenie-drozej", "Czy małe pomieszczenie może kosztować proporcjonalnie więcej?", "Tak. W małych pomieszczeniach koszt przygotowania, profili, dojazdu i montażu może mieć większy udział niż sama powierzchnia.", ["faq", "ceny"], ["/ceny"]),
    entry("minimalna-kwota-zamowienia", "Czy jest minimalna kwota zamówienia?", "Przy małych realizacjach może pojawić się minimalny koszt organizacji prac. Informujemy o tym przed potwierdzeniem pomiaru lub wyceny.", ["faq", "ceny"], ["/kontakt"]),
    entry("czy-pomiar-jest-bezplatny", "Czy pomiar jest bezpłatny?", "Pomiar i konsultację ustalamy po krótkiej rozmowie o lokalizacji, metrażu i zakresie prac. Standardowo dla obsługiwanego obszaru traktujemy go jako element przygotowania wyceny.", ["faq", "ceny", "kontakt"], ["/kontakt"]),
    entry("czy-wycena-jest-bezplatna", "Czy wycena jest bezpłatna?", "Wstępna wycena jest bezpłatna. Dokładną kwotę podajemy po pomiarze lub po otrzymaniu wystarczających zdjęć, wymiarów i informacji o oświetleniu.", ["faq", "ceny", "kontakt"], ["/kontakt"]),
    entry("kolor-folii-a-cena", "Czy kolor folii wpływa na cenę?", "Może wpływać, zwłaszcza przy mniej typowych kolorach lub materiałach. Przy standardowych wariantach różnice zwykle omawiamy podczas wyceny.", ["faq", "ceny", "rodzaje-sufitow"], ["/rodzaje-sufitow"]),
    entry("polysk-a-mat-cena", "Czy sufit błyszczący kosztuje inaczej niż matowy?", "Tak, rodzaj membrany może wpływać na cenę. Mat, satyna i połysk mają inne właściwości oraz inną dostępność materiałów.", ["faq", "ceny", "rodzaje-sufitow"], ["/rodzaje-sufitow"]),
    entry("nadruk-drozej", "Czy sufit z nadrukiem jest droższy?", "Zwykle tak, ponieważ wymaga przygotowania grafiki, druku i indywidualnej wyceny pod konkretną powierzchnię.", ["faq", "ceny", "rodzaje-sufitow"], ["/rodzaje-sufitow/z-nadrukiem"]),
    entry("led-liczone-osobno", "Czy oświetlenie LED jest liczone osobno?", "Tak. LED, punkty świetlne, szyny, zasilacze i sterowanie zwykle wyceniamy jako osobny zakres techniczny.", ["faq", "ceny", "oswietlenie"], ["/rozwiazania/oswietlenie", "/ceny"]),
    entry("profile-dodatkowo-platne", "Czy profile specjalne są dodatkowo płatne?", "Profile cieniowe, LED, szczelinowe, pod ukryty karnisz lub kilka poziomów mogą zwiększyć koszt realizacji.", ["faq", "ceny", "profile"], ["/rozwiazania/profile"]),
    entry("wentylacja-luki-a-cena", "Czy wentylacja i luki rewizyjne wpływają na cenę?", "Tak. Kratki, dostęp techniczny i luki rewizyjne wymagają dodatkowego planowania oraz elementów montażowych.", ["faq", "ceny", "wentylacja", "luki-rewizyjne"], ["/rozwiazania/wentylacja", "/rozwiazania/luki-rewizyjne"]),
    entry("dojazd-poza-wroclaw-platny", "Czy dojazd poza Wrocław jest płatny?", "Dojazd uwzględniamy indywidualnie w zależności od lokalizacji i zakresu prac. Obsługujemy Wrocław i okolice do około 100 km.", ["faq", "ceny", "lokalizacje"], ["/lokalizacje"]),
    entry("wycena-przez-whatsapp", "Czy można dostać orientacyjną wycenę przez WhatsApp?", "Tak. Wyślij lokalizację, zdjęcia, orientacyjny metraż i informację o oświetleniu. Na tej podstawie przygotujemy wstępną odpowiedź.", ["faq", "ceny", "kontakt"], ["/kontakt"]),
  ],
  "Montaż": [
    entry("jak-wyglada-montaz", "Jak wygląda montaż sufitu napinanego?", "Najpierw montujemy profile, przygotowujemy elementy techniczne, a następnie napinamy membranę. Przy oświetleniu wcześniej planujemy oprawy i zasilanie.", ["faq", "o-sufitach"], ["/o-sufitach"]),
    entry("ile-trwa-montaz", "Ile trwa montaż sufitu napinanego?", "Proste pomieszczenie często można wykonać w jeden dzień. Większe realizacje, kilka pomieszczeń lub rozbudowane LED wymagają więcej czasu.", ["faq", "o-sufitach"], ["/o-sufitach"]),
    entry("czy-montaz-kurzy", "Czy montaż powoduje dużo kurzu?", "Montaż jest czystszy niż klasyczne szpachlowanie i malowanie. Pył może pojawić się głównie przy wierceniu pod profile.", ["faq", "o-sufitach"], ["/o-sufitach"]),
    entry("czy-wynosic-meble", "Czy trzeba wynosić meble przed montażem?", "Nie zawsze. Najważniejszy jest dostęp do ścian, narożników i miejsc montażu. Szczegóły ustalamy przed pracami.", ["faq", "o-sufitach"]),
    entry("przygotowanie-pomieszczenia", "Czy trzeba przygotować pomieszczenie przed montażem?", "Warto odsunąć meble od ścian, zabezpieczyć delikatne elementy i zapewnić dostęp do prądu oraz miejsc montażowych.", ["faq", "o-sufitach"]),
    entry("montaz-w-zamieszkanym-mieszkaniu", "Czy można montować sufit w zamieszkanym mieszkaniu?", "Tak. To jedna z zalet sufitów napinanych, bo montaż jest stosunkowo czysty i szybki.", ["faq", "o-sufitach"]),
    entry("montaz-po-remoncie", "Czy można montować sufit po remoncie?", "Tak, ale trzeba chronić gotowe wykończenia i dobrze zaplanować wiercenie oraz oświetlenie.", ["faq", "o-sufitach"]),
    entry("montaz-wiercenie", "Czy montaż wymaga wiercenia w ścianach?", "Najczęściej tak, ponieważ profile mocuje się do ścian lub konstrukcji. Zakres wiercenia zależy od systemu i pomieszczenia.", ["faq", "o-sufitach"]),
    entry("montaz-lazienka", "Czy sufit napinany można zamontować w łazience?", "Tak, pod warunkiem dobrego zaplanowania wentylacji, opraw i materiałów odpowiednich do wilgotnego pomieszczenia.", ["faq", "o-sufitach", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("montaz-kuchnia", "Czy sufit napinany można zamontować w kuchni?", "Tak. W kuchni warto uwzględnić wentylację, oświetlenie robocze i sposób czyszczenia powierzchni.", ["faq", "o-sufitach", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("ukrycie-starego-sufitu", "Czy można ukryć nierówny stary sufit?", "Tak. Sufit napinany pozwala zasłonić nierówności, pęknięcia i stare wykończenie bez ciężkiego remontu.", ["faq", "o-sufitach"]),
    entry("ukrycie-rur-przewodow", "Czy można ukryć rury, przewody lub instalacje?", "Tak, jeśli pozwala na to wysokość i konstrukcja. Dostęp do ważnych elementów technicznych warto zaplanować wcześniej.", ["faq", "o-sufitach", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("czy-sufit-obniza-pomieszczenie", "Czy sufit napinany obniża pomieszczenie?", "Tak, ale zwykle mniej niż rozbudowana zabudowa. Dokładne obniżenie zależy od profili, opraw, instalacji i konstrukcji.", ["faq", "o-sufitach"]),
    entry("o-ile-obniza-sie-sufit", "O ile obniża się sufit napinany?", "Minimalne obniżenie ustalamy po pomiarze. Przy prostym suficie może być niewielkie, a przy LED lub szynach potrzebne jest więcej miejsca.", ["faq", "o-sufitach", "oswietlenie"], ["/rozwiazania/oswietlenie"]),
  ],
  "Rodzaje sufitów": [
    entry("jakie-sa-rodzaje-sufitow", "Jakie są rodzaje sufitów napinanych?", "Najczęściej wybierane są sufity matowe, satynowe, błyszczące, z oświetleniem, nadrukiem, translucent, perforacją, wielopoziomowe i z ukrytym karniszem.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow"]),
    entry("matowy-a-satynowy", "Czym różni się sufit matowy od satynowego?", "Mat jest spokojny i nie odbija mocno światła. Satyna daje delikatny połysk i bardziej elegancki efekt.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow/matowe", "/rodzaje-sufitow/satynowe"]),
    entry("satynowy-a-blyszczacy", "Czym różni się sufit satynowy od błyszczącego?", "Satyna odbija światło subtelnie, a sufit błyszczący tworzy mocniejsze odbicia i efekt głębi.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow/satynowe", "/rodzaje-sufitow/blyszczace"]),
    entry("polysk-powieksza", "Czy sufit błyszczący powiększa optycznie pomieszczenie?", "Tak. Odbicia światła i wnętrza mogą dawać wrażenie większej wysokości oraz przestrzeni.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow/blyszczace"]),
    entry("gdzie-matowy", "Do jakich wnętrz pasuje sufit matowy?", "Mat pasuje do większości mieszkań, domów, biur, sypialni i salonów, gdy efekt ma być spokojny.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow/matowe"]),
    entry("gdzie-satynowy", "Do jakich wnętrz pasuje sufit satynowy?", "Satyna dobrze wygląda w jasnych salonach, apartamentach, garderobach i wnętrzach o bardziej eleganckim charakterze.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow/satynowe"]),
    entry("gdzie-blyszczacy", "Do jakich wnętrz pasuje sufit błyszczący?", "Połysk sprawdza się w łazienkach, korytarzach, małych pomieszczeniach i lokalach, gdzie oczekiwany jest mocniejszy efekt.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow/blyszczace"]),
    entry("co-to-translucent", "Co to jest sufit translucent?", "To półprzepuszczalna membrana, za którą można zaplanować LED i uzyskać równomiernie świecącą powierzchnię.", ["faq", "rodzaje-sufitow", "oswietlenie"], ["/rodzaje-sufitow/translucent"]),
    entry("co-to-perforacja", "Co to jest sufit z perforacją?", "To membrana z otworami lub wzorem, stosowana dla efektu dekoracyjnego, technicznego albo akustycznego.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow/z-perforacja"]),
    entry("sufit-z-nadrukiem", "Czy można zrobić sufit z nadrukiem?", "Tak. Wymaga to przygotowania grafiki dobrej jakości i indywidualnej wyceny.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow/z-nadrukiem"]),
    entry("nadruk-wlasne-zdjecie", "Czy nadruk może być z własnego zdjęcia?", "Tak, jeśli zdjęcie ma odpowiednią rozdzielczość i proporcje do planowanej powierzchni.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow/z-nadrukiem"]),
    entry("gwiazdziste-niebo", "Czy można zrobić sufit z efektem gwiaździstego nieba?", "Tak. To rozwiązanie dekoracyjne z punktami światła, najczęściej do sypialni, pokoju dziecka lub stref relaksu.", ["faq", "rodzaje-sufitow", "oswietlenie"], ["/rodzaje-sufitow/gwiazdziste-niebo"]),
    entry("sufit-wielopoziomowy", "Czy można zrobić sufit wielopoziomowy?", "Tak, jeśli pozwala na to wysokość i konstrukcja. Taki sufit wymaga dokładniejszego projektu.", ["faq", "rodzaje-sufitow", "profile"], ["/rodzaje-sufitow/wielopoziomowe"]),
    entry("sufit-z-karniszem", "Czy można zrobić sufit z ukrytym karniszem?", "Tak. Wnękę pod karnisz trzeba zaplanować przed montażem sufitu.", ["faq", "rodzaje-sufitow", "profile"], ["/rodzaje-sufitow/z-karniszem"]),
    entry("laczenie-rodzajow", "Czy można połączyć różne rodzaje sufitów w jednym mieszkaniu?", "Tak. W różnych pomieszczeniach można zastosować inne membrany, światło i profile, jeśli projekt jest spójnie zaplanowany.", ["faq", "rodzaje-sufitow"], ["/rodzaje-sufitow"]),
  ],
  "Oświetlenie": [
    entry("oswietlenie-w-suficie", "Czy w suficie napinanym można zamontować oświetlenie?", "Tak. Oświetlenie trzeba zaplanować przed montażem, aby przygotować profile, mocowania, zasilanie i dostęp serwisowy.", ["faq", "oswietlenie"], ["/rozwiazania/oswietlenie"]),
    entry("jakie-oswietlenie", "Jakie oświetlenie można zamontować w suficie napinanym?", "Można wykonać punkty świetlne, linie LED, taśmy LED, szyny magnetyczne, oprawy wpuszczane i podświetlenie obwodowe.", ["faq", "oswietlenie"], ["/rozwiazania/oswietlenie"]),
    entry("punkty-swietlne", "Czy można zamontować punkty świetlne?", "Tak. Punkty świetlne są jednym z najczęstszych rozwiązań do kuchni, łazienki, korytarza i salonu.", ["faq", "oswietlenie"], ["/rozwiazania/oswietlenie/punkty-swietlne"]),
    entry("linie-led", "Czy można zamontować linie LED?", "Tak. Linie LED dają nowoczesny efekt i mogą być światłem głównym albo dekoracyjnym.", ["faq", "oswietlenie"], ["/rozwiazania/oswietlenie/linie-led"]),
    entry("tasmy-led", "Czy można zamontować taśmy LED?", "Tak. Taśmy LED stosuje się głównie do światła pośredniego, nisz i podświetlenia obwodowego.", ["faq", "oswietlenie"], ["/rozwiazania/oswietlenie/tasmy-led"]),
    entry("szyny-magnetyczne", "Czy można zamontować szyny magnetyczne?", "Tak, jeśli konstrukcja i zasilanie zostaną zaplanowane przed montażem membrany.", ["faq", "oswietlenie"], ["/rozwiazania/oswietlenie/szyny-magnetyczne"]),
    entry("oprawy-wpuszczane", "Czy można zamontować oprawy wpuszczane?", "Tak, ale oprawy muszą być dobrane do konstrukcji, temperatury pracy i rodzaju sufitu.", ["faq", "oswietlenie"], ["/rozwiazania/oswietlenie/oprawy-wpuszczane"]),
    entry("podswietlenie-obwodowe", "Czy można zrobić podświetlenie obwodowe?", "Tak. To popularne światło dekoracyjne przy ścianach, wnękach lub wybranej strefie sufitu.", ["faq", "oswietlenie"], ["/rozwiazania/oswietlenie/podswietlenie-obwodowe"]),
    entry("oswietlenie-przed-montazem", "Czy oświetlenie trzeba zaplanować przed montażem?", "Tak. Po naciągnięciu membrany zmiany są trudniejsze, dlatego wcześniej ustalamy rozmieszczenie, mocowanie i zasilacze.", ["faq", "oswietlenie"], ["/rozwiazania/oswietlenie"]),
    entry("gdzie-zasilacze-led", "Gdzie montuje się zasilacze LED?", "Zasilacze powinny być w miejscu z dostępem serwisowym, na przykład w luku rewizyjnym, zabudowie albo szafce technicznej.", ["faq", "oswietlenie", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("dostep-do-zasilaczy", "Czy będzie dostęp do zasilaczy po montażu?", "Powinien być zaplanowany. Bez dostępu serwisowego późniejsza wymiana zasilacza może być problematyczna.", ["faq", "oswietlenie", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("wymiana-lampy-po-montazu", "Czy można wymienić lampę po montażu sufitu?", "W wielu przypadkach tak, jeśli oprawy i dostęp techniczny zostały poprawnie zaplanowane.", ["faq", "oswietlenie"]),
    entry("led-nagrzewa-sufit", "Czy oświetlenie LED nagrzewa sufit?", "LED generuje mniej ciepła niż tradycyjne źródła, ale nadal trzeba dobrać oprawy i profile odpowiednie do sufitu.", ["faq", "oswietlenie"]),
    entry("kazde-oswietlenie", "Czy każde oświetlenie nadaje się do sufitu napinanego?", "Nie. Dobór zależy od temperatury pracy, mocowania, zasilania i wymagań producenta opraw.", ["faq", "oswietlenie"]),
    entry("sterowanie-pilot-aplikacja", "Czy można sterować oświetleniem pilotem lub aplikacją?", "Tak, jeśli wcześniej dobierzemy odpowiedni sterownik, zasilacz i sposób komunikacji.", ["faq", "oswietlenie"], ["/rozwiazania/oswietlenie"]),
  ],
  "Profile i konstrukcje": [
    entry("jakie-profile", "Jakie profile stosuje się do sufitów napinanych?", "Stosuje się między innymi profile ścienne, sufitowe, szczelinowe, cieniowe, LED i profile do kilku poziomów.", ["faq", "profile"], ["/rozwiazania/profile"]),
    entry("profil-scienny-sufitowy", "Czym różni się profil ścienny od sufitowego?", "Profil ścienny mocuje się do ściany, a sufitowy do sufitu lub konstrukcji. Wybór zależy od warunków montażu.", ["faq", "profile"], ["/rozwiazania/profile"]),
    entry("profil-szczelinowy", "Co to jest profil szczelinowy?", "To profil, który pozwala uzyskać czystą szczelinę lub specjalne przejście między powierzchniami.", ["faq", "profile"], ["/rozwiazania/profile"]),
    entry("profil-cieniowy", "Co to jest profil cieniowy?", "Profil cieniowy tworzy delikatny cień przy ścianie i nowoczesne odcięcie sufitu od ściany.", ["faq", "profile"], ["/rozwiazania/profile"]),
    entry("cien-przy-scianie", "Czy można zrobić sufit z cieniem przy ścianie?", "Tak. Wymaga to odpowiedniego profilu i dokładnego pomiaru ścian.", ["faq", "profile"], ["/rozwiazania/profile"]),
    entry("ukryty-karnisz", "Czy można zrobić ukryty karnisz?", "Tak. Wnękę pod karnisz warto zaplanować razem z sufitem i ewentualnym LED.", ["faq", "profile", "rodzaje-sufitow"], ["/rodzaje-sufitow/z-karniszem"]),
    entry("polaczenie-z-plytkami", "Czy można połączyć sufit z płytkami?", "Tak. W łazienkach i kuchniach dobieramy profil do płytek oraz planujemy estetyczne przejście.", ["faq", "profile"], ["/rozwiazania/profile"]),
    entry("polaczenie-z-szafa", "Czy można połączyć sufit z szafą na wymiar?", "Tak, ale zabudowę i sufit trzeba zaplanować wspólnie, aby uniknąć kolizji.", ["faq", "profile"], ["/rozwiazania/profile"]),
    entry("kilka-poziomow", "Czy można zrobić kilka poziomów sufitu?", "Tak. Konstrukcje wielopoziomowe wymagają więcej planowania i indywidualnej wyceny.", ["faq", "profile", "rodzaje-sufitow"], ["/rozwiazania/poziomy-i-konstrukcje"]),
    entry("przejscie-miedzy-poziomami", "Czy można zrobić przejście między poziomami?", "Tak. Przejście projektuje się z odpowiednimi profilami i często łączy z oświetleniem LED.", ["faq", "profile"], ["/rozwiazania/poziomy-i-konstrukcje"]),
    entry("nisza-led", "Czy można zrobić niszę LED?", "Tak. Nisza LED wymaga profilu, miejsca na taśmę, zasilanie i dostęp serwisowy.", ["faq", "profile", "oswietlenie"], ["/rozwiazania/oswietlenie/tasmy-led"]),
    entry("ominiecie-rur-belek", "Czy można ominąć rury lub belki?", "Tak, jeśli projekt i wysokość pomieszczenia na to pozwalają. Takie detale wymagają pomiaru.", ["faq", "profile"], ["/rozwiazania/poziomy-i-konstrukcje"]),
    entry("nietypowy-ksztalt", "Czy można zrobić nietypowy kształt sufitu?", "Tak. Nietypowe kształty wyceniamy indywidualnie po sprawdzeniu pomieszczenia.", ["faq", "profile"], ["/rozwiazania/poziomy-i-konstrukcje"]),
  ],
  "Wentylacja": [
    entry("wentylacja-w-suficie", "Czy można zrobić wentylację w suficie napinanym?", "Tak. Kratki i kanały trzeba zaplanować przed montażem, aby zachować przepływ powietrza.", ["faq", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("ukryta-kratka", "Czy kratka wentylacyjna może być ukryta?", "W niektórych projektach można zastosować bardziej dyskretne kratki, ale funkcja wentylacji jest ważniejsza niż pełne ukrycie.", ["faq", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("magnetyczna-kratka", "Czy można zamontować magnetyczną kratkę wentylacyjną?", "Tak, jeśli pasuje do instalacji i miejsca montażu. Dobór potwierdzamy podczas pomiaru.", ["faq", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("wentylacja-lazienka", "Czy wentylacja w łazience będzie działać po montażu sufitu?", "Tak, jeśli kratka, kanał i oprawy zostaną poprawnie zaplanowane.", ["faq", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("wentylacja-kuchnia", "Czy wentylacja w kuchni będzie działać po montażu sufitu?", "Tak, pod warunkiem zachowania kanałów i właściwego rozmieszczenia elementów wentylacyjnych.", ["faq", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("dostep-do-kanalu", "Czy trzeba zostawić dostęp do kanału wentylacyjnego?", "Jeśli kanał lub elementy instalacji mogą wymagać serwisu, dostęp warto przewidzieć przed montażem.", ["faq", "wentylacja", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("kratka-przed-montazem", "Czy kratkę wentylacyjną trzeba zaplanować przed montażem?", "Tak. Po montażu sufitu zmiana lokalizacji kratki jest znacznie trudniejsza.", ["faq", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("wentylacja-z-oswietleniem", "Czy można połączyć wentylację z oświetleniem?", "Tak, ale trzeba uniknąć kolizji między oprawami, kanałami, profilami i zasilaniem.", ["faq", "wentylacja", "oswietlenie"], ["/rozwiazania/oswietlenie"]),
  ],
  "Luki rewizyjne": [
    entry("luk-rewizyjny", "Czy można zrobić luk rewizyjny w suficie napinanym?", "Tak. Luk rewizyjny planujemy indywidualnie pod miejsce, rozmiar i funkcję dostępu.", ["faq", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("dostep-do-poddasza", "Czy można zrobić dostęp do poddasza?", "Tak, jeśli pozwala na to konstrukcja. Wymaga to wcześniejszego projektu i ustalenia wymiarów.", ["faq", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("wlaz-na-strych", "Czy można zrobić właz na strych?", "Tak, ale taki dostęp trzeba zaplanować przed montażem i dopasować do sposobu użytkowania.", ["faq", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("dostep-do-dachu", "Czy można zrobić dostęp do dachu?", "W niektórych projektach tak. Wymaga to indywidualnego sprawdzenia konstrukcji i możliwości montażowych.", ["faq", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("dostep-elektryka", "Czy można zrobić dostęp do instalacji elektrycznej?", "Tak. Dostęp techniczny warto przewidzieć przy przewodach, sterownikach i połączeniach.", ["faq", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("dostep-wentylacja", "Czy można zrobić dostęp do wentylacji?", "Tak. Dostęp do kanałów lub kratek planujemy przed montażem sufitu.", ["faq", "luki-rewizyjne", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("dostep-zasilacze-led", "Czy można zrobić dostęp do zasilaczy LED?", "Tak. To zalecane rozwiązanie, ponieważ zasilacze mogą wymagać serwisu lub wymiany.", ["faq", "luki-rewizyjne", "oswietlenie"], ["/rozwiazania/oswietlenie"]),
    entry("czy-luk-widoczny", "Czy luk rewizyjny będzie widoczny?", "Może być dyskretny, ale jego widoczność zależy od miejsca, rozmiaru i funkcji.", ["faq", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("dostep-przed-montazem", "Czy taki dostęp trzeba zaplanować przed montażem?", "Tak. To najlepszy moment na ustalenie lokalizacji, wymiaru i sposobu wykonania.", ["faq", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
    entry("dodanie-luku-po-montazu", "Czy można dodać luk rewizyjny po montażu sufitu?", "Czasem jest to możliwe, ale zwykle trudniejsze i mniej korzystne niż zaplanowanie dostępu wcześniej.", ["faq", "luki-rewizyjne"], ["/rozwiazania/luki-rewizyjne"]),
  ],
  "Pielęgnacja": [
    entry("jak-dbac", "Jak dbać o sufit napinany?", "Wystarczy delikatne czyszczenie miękką ściereczką i unikanie ostrych narzędzi.", ["faq", "o-sufitach"], ["/o-sufitach"]),
    entry("czy-mozna-myc", "Czy sufit napinany można myć?", "Tak, ale trzeba robić to delikatnie i bez agresywnych środków.", ["faq", "o-sufitach"]),
    entry("czym-czyscic", "Czym czyścić sufit napinany?", "Najlepiej miękką ściereczką i łagodnym środkiem dobranym do rodzaju powierzchni.", ["faq", "o-sufitach"]),
    entry("detergenty", "Czy można używać detergentów?", "Można używać tylko łagodnych środków. Agresywne detergenty i rozpuszczalniki mogą uszkodzić powierzchnię.", ["faq", "o-sufitach"]),
    entry("czy-zolknie", "Czy sufit napinany żółknie?", "Dobra membrana jest trwała kolorystycznie, ale dym, tłuszcz i słaba wentylacja mogą wpływać na wygląd.", ["faq", "o-sufitach"]),
    entry("pochlania-zapachy", "Czy sufit napinany pochłania zapachy?", "Membrana nie powinna łatwo pochłaniać zapachów, ale w kuchni ważna jest wentylacja i regularne czyszczenie.", ["faq", "o-sufitach", "wentylacja"], ["/rozwiazania/wentylacja"]),
  ],
  "Bezpieczeństwo": [
    entry("kuchnia-bezpieczenstwo", "Czy sufit napinany nadaje się do kuchni?", "Tak, jeśli uwzględnimy wentylację, oświetlenie i sposób czyszczenia.", ["faq", "o-sufitach"]),
    entry("lazienka-bezpieczenstwo", "Czy sufit napinany nadaje się do łazienki?", "Tak. Trzeba dobrać odpowiednie oprawy, zachować wentylację i zaplanować montaż pod wilgoć.", ["faq", "o-sufitach", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("para-wodna", "Czy para wodna szkodzi sufitowi napinanemu?", "Sama para nie musi być problemem, ale pomieszczenie powinno mieć sprawną wentylację.", ["faq", "o-sufitach", "wentylacja"], ["/rozwiazania/wentylacja"]),
    entry("czy-peknie", "Czy sufit napinany może pęknąć?", "Przy normalnym użytkowaniu sufit jest stabilny. Uszkodzenia mogą powstać od ostrych narzędzi lub niewłaściwej ingerencji.", ["faq", "o-sufitach"]),
    entry("czy-odklei-sie", "Czy sufit napinany może się odkleić?", "Przy poprawnym montażu nie powinien. Trwałość zależy od profili, podłoża i wykonania.", ["faq", "o-sufitach"]),
    entry("odpornosc-wilgoc", "Czy sufit napinany jest odporny na wilgoć?", "Tak, dlatego często stosuje się go w łazienkach i kuchniach, przy zachowaniu wentylacji.", ["faq", "o-sufitach"]),
    entry("zalanie", "Czy sufit napinany zatrzyma wodę po zalaniu?", "Membrana może zatrzymać część wody, ale każdą sytuację po zalaniu trzeba ocenić indywidualnie i bezpiecznie usunąć wodę.", ["faq", "o-sufitach"]),
    entry("bezpieczny", "Czy sufit napinany jest bezpieczny?", "Tak, jeśli jest poprawnie zamontowany i dobrany do pomieszczenia oraz instalacji.", ["faq", "o-sufitach"]),
    entry("trudnopalnosc", "Czy materiał jest trudnopalny?", "Dostępne materiały mają określone klasy i parametry. Dobór materiału omawiamy przy wycenie.", ["faq", "o-sufitach"]),
    entry("zapach-po-montazu", "Czy sufit napinany ma zapach po montażu?", "Krótko po montażu może być wyczuwalny zapach materiału, który zwykle wietrzeje po przewietrzeniu pomieszczenia.", ["faq", "o-sufitach"]),
    entry("pokoj-dzieciecy", "Czy sufit napinany nadaje się do pokoju dziecięcego?", "Tak, jeśli materiał i oświetlenie są dobrane rozsądnie, a montaż wykonany poprawnie.", ["faq", "o-sufitach", "rodzaje-sufitow"]),
    entry("czujnik-dymu-ruchu", "Czy można zamontować czujnik dymu lub czujnik ruchu?", "Tak, ale miejsce, mocowanie i przewody trzeba zaplanować przed montażem.", ["faq", "o-sufitach", "oswietlenie"], ["/rozwiazania/oswietlenie"]),
  ],
  "Gwarancja": [
    entry("czy-gwarancja", "Czy na sufit napinany jest gwarancja?", "Tak. Warunki gwarancji zależą od zakresu realizacji, materiałów i uzgodnień przy wycenie.", ["faq", "ceny", "kontakt"]),
    entry("co-obejmuje-gwarancja", "Co obejmuje gwarancja?", "Zakres gwarancji omawiamy przy realizacji. Zwykle dotyczy uzgodnionego montażu i zastosowanych elementów.", ["faq", "kontakt"]),
    entry("czego-nie-obejmuje", "Czego gwarancja nie obejmuje?", "Gwarancja nie obejmuje zwykle uszkodzeń mechanicznych, samodzielnych przeróbek ani niewłaściwego użytkowania.", ["faq", "kontakt"]),
    entry("gwarancja-oswietlenie", "Czy gwarancja obejmuje oświetlenie?", "To zależy od zastosowanych elementów i producenta. Szczegóły potwierdzamy przy wycenie.", ["faq", "oswietlenie", "kontakt"]),
    entry("gwarancja-montaz", "Czy gwarancja obejmuje montaż?", "Tak, w zakresie uzgodnionych prac i prawidłowego użytkowania sufitu.", ["faq", "kontakt"]),
    entry("problem-po-montazu", "Co zrobić, jeśli po montażu pojawi się problem?", "Najlepiej skontaktować się telefonicznie lub przez WhatsApp, opisać sytuację i przesłać zdjęcia.", ["faq", "kontakt"], ["/kontakt"]),
    entry("serwis-po-montazu", "Czy oferujecie serwis po montażu?", "W razie potrzeby ustalamy dalsze kroki indywidualnie po opisie sytuacji i zdjęciach.", ["faq", "kontakt"], ["/kontakt"]),
    entry("dokument-gwarancyjny", "Czy klient otrzymuje dokument gwarancyjny?", "Dokumenty i warunki potwierdzamy przy finalnym zakresie prac oraz rozliczeniu.", ["faq", "kontakt"]),
  ],
  "Płatność i dokumenty": [
    entry("formy-platnosci", "Jakie formy płatności są dostępne?", "Formę płatności ustalamy przy wycenie i potwierdzeniu realizacji.", ["faq", "ceny", "kontakt"]),
    entry("gotowka", "Czy można zapłacić gotówką?", "Możliwość płatności gotówką potwierdzamy indywidualnie przy ustalaniu zlecenia.", ["faq", "kontakt"]),
    entry("przelew", "Czy można zapłacić przelewem?", "Tak, jeśli taka forma zostanie ustalona przed realizacją.", ["faq", "kontakt"]),
    entry("zaliczka", "Czy pobierana jest zaliczka?", "Przy większych lub indywidualnych realizacjach zaliczka może być wymagana na materiały.", ["faq", "ceny", "kontakt"]),
    entry("ile-zaliczka", "Ile wynosi zaliczka?", "Wysokość zaliczki zależy od zakresu prac i materiałów. Informujemy o niej przed potwierdzeniem zlecenia.", ["faq", "kontakt"]),
    entry("reszta-kwoty", "Kiedy płaci się resztę kwoty?", "Termin płatności końcowej ustalamy przy potwierdzeniu realizacji.", ["faq", "kontakt"]),
    entry("umowa", "Czy wystawiacie umowę?", "Przy większych zleceniach lub na życzenie klienta zakres formalności ustalamy indywidualnie.", ["faq", "kontakt"]),
    entry("faktura", "Czy wystawiacie fakturę?", "Możliwość i dane do dokumentu najlepiej przekazać przed realizacją.", ["faq", "kontakt"]),
    entry("rozliczenie-etapami", "Czy można rozliczyć większe zlecenie etapami?", "Przy większych zakresach jest to możliwe po indywidualnym ustaleniu harmonogramu.", ["faq", "kontakt"]),
  ],
  "Lokalizacje": [
    entry("tylko-wroclaw", "Czy montujecie sufity tylko we Wrocławiu?", "Nie. Obsługujemy Wrocław i miejscowości w promieniu do około 100 km.", ["faq", "lokalizacje"], ["/lokalizacje"]),
    entry("dojazd-poza-wroclaw", "Czy dojeżdżacie poza Wrocław?", "Tak. Dojazd ustalamy po podaniu miejscowości, metrażu i planowanego zakresu prac.", ["faq", "lokalizacje"], ["/lokalizacje"]),
    entry("jakie-miejscowosci", "Jakie miejscowości obsługujecie?", "Obsługujemy między innymi Wrocław, Leśnicę, Krzyki, Oleśnicę, Oławę, Świdnicę, Dzierżoniów, Bielawę i inne lokalizacje z listy.", ["faq", "lokalizacje"], ["/lokalizacje"]),
    entry("do-100-km", "Czy obsługujecie lokalizacje do 100 km od Wrocławia?", "Tak, to podstawowy obszar działania. Dalsze lokalizacje wyceniamy indywidualnie.", ["faq", "lokalizacje"], ["/lokalizacje"]),
    entry("swidnica", "Czy montujecie sufity w Świdnicy?", "Tak. Wykonujemy pomiar i montaż sufitów napinanych w Świdnicy oraz okolicach.", ["faq", "lokalizacje"], ["/lokalizacje/swidnica"]),
    entry("olawa", "Czy montujecie sufity w Oławie?", "Tak. Obsługujemy Oławę i okolice po wcześniejszym ustaleniu zakresu prac.", ["faq", "lokalizacje"], ["/lokalizacje/olawa"]),
    entry("olesnica", "Czy montujecie sufity w Oleśnicy?", "Tak. W Oleśnicy wykonujemy pomiary, wyceny i montaże sufitów napinanych.", ["faq", "lokalizacje"], ["/lokalizacje/olesnica"]),
    entry("dzierzoniow", "Czy montujecie sufity w Dzierżoniowie?", "Tak. Dzierżoniów znajduje się w obsługiwanym obszarze po ustaleniu terminu i zakresu.", ["faq", "lokalizacje"], ["/lokalizacje/dzierzoniow"]),
    entry("bielawa", "Czy montujecie sufity w Bielawie?", "Tak. Obsługujemy Bielawę i okoliczne miejscowości po wcześniejszym kontakcie.", ["faq", "lokalizacje"], ["/lokalizacje/bielawa"]),
    entry("trzebnica", "Czy montujecie sufity w Trzebnicy?", "Tak. W Trzebnicy wykonujemy sufity napinane w domach, mieszkaniach i lokalach.", ["faq", "lokalizacje"], ["/lokalizacje/trzebnica"]),
    entry("poza-dolnym-slaskiem", "Czy można zamówić pomiar poza Dolnym Śląskiem?", "Można zapytać o taką możliwość. Dalsze lokalizacje ustalamy indywidualnie.", ["faq", "lokalizacje"], ["/kontakt"]),
    entry("lokalizacje-dojazd-platny", "Czy dojazd jest dodatkowo płatny?", "Dojazd uwzględniamy indywidualnie w wycenie, zależnie od lokalizacji i zakresu prac.", ["faq", "lokalizacje", "ceny"], ["/lokalizacje", "/ceny"]),
  ],
};

function makeItem(category: string, item: FAQEntry): FAQItem {
  return {
    id: item.id,
    question: item.question,
    answer: item.answer,
    category,
    pages: item.pages ?? ["faq"],
    relatedLinks: item.relatedLinks ?? [],
  };
}

export const faqCategories: FAQCategory[] = categoryMeta.map((category) => ({
  ...category,
  items: (faqEntries[category.title] ?? []).map((item) => makeItem(category.title, item)),
}));

export const allFAQItems = faqCategories.flatMap((category) => category.items);

export const featuredFAQItems: FAQItem[] = [
  allFAQItems.find((item) => item.id === "ile-kosztuje-sufit-napinany"),
  allFAQItems.find((item) => item.id === "ile-trwa-montaz"),
  allFAQItems.find((item) => item.id === "oswietlenie-w-suficie"),
  allFAQItems.find((item) => item.id === "jakie-sa-rodzaje-sufitow"),
  allFAQItems.find((item) => item.id === "dojazd-poza-wroclaw"),
].filter((item): item is FAQItem => Boolean(item));

export function getFAQCategoryBySlug(slug: string) {
  const normalized = slug.toLowerCase();

  return faqCategories.find(
    (category) => category.slug === normalized || category.title.toLowerCase() === normalized
  );
}

export function getFAQItemsByCategory(slug: string) {
  return getFAQCategoryBySlug(slug)?.items ?? [];
}

export function getFAQItemsByPage(page: FAQPageKey, limit?: number) {
  const items =
    page === "faq" ? allFAQItems : allFAQItems.filter((item) => item.pages.includes(page));
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getFAQItemsByCategories(slugs: string[], limit?: number) {
  const seen = new Set<string>();
  const items = slugs.flatMap((slug) => getFAQItemsByCategory(slug)).filter((item) => {
    if (seen.has(item.id)) {
      return false;
    }

    seen.add(item.id);
    return true;
  });

  return typeof limit === "number" ? items.slice(0, limit) : items;
}
