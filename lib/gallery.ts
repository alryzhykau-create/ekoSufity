export type GalleryFilterOption = {
  value: string;
  label: string;
};

export type GalleryProject = {
  id: string;
  title: string;
  city: string;
  locationSlug: string;
  ceilingType: string;
  ceilingTypeLabel: string;
  lightingType: string;
  lightingTypeLabel: string;
  room: string;
  roomLabel: string;
  area: string;
  duration: string;
  description: string;
  image: string;
};

export const ceilingTypeFilters: GalleryFilterOption[] = [
  { value: "matowy", label: "Matowy" },
  { value: "satynowy", label: "Satynowy" },
  { value: "blyszczacy", label: "Błyszczący" },
  { value: "z-oswietleniem", label: "Z oświetleniem" },
  { value: "wielopoziomowy", label: "Wielopoziomowy" },
  { value: "z-karniszem", label: "Z karniszem" },
];

export const lightingTypeFilters: GalleryFilterOption[] = [
  { value: "linie-led", label: "Linie LED" },
  { value: "punkty-swietlne", label: "Punkty świetlne" },
  { value: "szyny-magnetyczne", label: "Szyny magnetyczne" },
  { value: "podswietlenie-obwodowe", label: "Podświetlenie obwodowe" },
  { value: "bez-oswietlenia", label: "Bez oświetlenia" },
];

export const roomFilters: GalleryFilterOption[] = [
  { value: "salon", label: "Salon" },
  { value: "kuchnia", label: "Kuchnia" },
  { value: "lazienka", label: "Łazienka" },
  { value: "sypialnia", label: "Sypialnia" },
  { value: "korytarz", label: "Korytarz" },
  { value: "lokal-uslugowy", label: "Lokal usługowy" },
];

export const galleryProjects: GalleryProject[] = [
  {
    id: "wroclaw-salon-led",
    title: "Matowy sufit z liniami LED w salonie",
    city: "Wrocław",
    locationSlug: "wroclaw",
    ceilingType: "matowy",
    ceilingTypeLabel: "Matowy",
    lightingType: "linie-led",
    lightingTypeLabel: "Linie LED",
    room: "salon",
    roomLabel: "Salon",
    area: "28 m²",
    duration: "1 dzień",
    description: "Gładka matowa powierzchnia, ukryte zasilanie LED i czyste połączenie ze ścianami.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "olesnica-kuchnia-satyna",
    title: "Satynowy sufit w kuchni z punktami świetlnymi",
    city: "Oleśnica",
    locationSlug: "olesnica",
    ceilingType: "satynowy",
    ceilingTypeLabel: "Satynowy",
    lightingType: "punkty-swietlne",
    lightingTypeLabel: "Punkty świetlne",
    room: "kuchnia",
    roomLabel: "Kuchnia",
    area: "16 m²",
    duration: "1 dzień",
    description: "Delikatny połysk satyny i równomierne oświetlenie strefy roboczej.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "olawa-lazienka-blysk",
    title: "Błyszczący sufit w łazience",
    city: "Oława",
    locationSlug: "olawa",
    ceilingType: "blyszczacy",
    ceilingTypeLabel: "Błyszczący",
    lightingType: "punkty-swietlne",
    lightingTypeLabel: "Punkty świetlne",
    room: "lazienka",
    roomLabel: "Łazienka",
    area: "7 m²",
    duration: "1 dzień",
    description: "Efekt optycznego powiększenia łazienki i łatwa w utrzymaniu powierzchnia.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "swidnica-sypialnia-obwod",
    title: "Sypialnia z podświetleniem obwodowym",
    city: "Świdnica",
    locationSlug: "swidnica",
    ceilingType: "z-oswietleniem",
    ceilingTypeLabel: "Z oświetleniem",
    lightingType: "podswietlenie-obwodowe",
    lightingTypeLabel: "Podświetlenie obwodowe",
    room: "sypialnia",
    roomLabel: "Sypialnia",
    area: "18 m²",
    duration: "1 dzień",
    description: "Miękkie światło przy ścianach i spokojny efekt w strefie wypoczynku.",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "dzierzoniow-korytarz-mat",
    title: "Matowy sufit w korytarzu",
    city: "Dzierżoniów",
    locationSlug: "dzierzoniow",
    ceilingType: "matowy",
    ceilingTypeLabel: "Matowy",
    lightingType: "bez-oswietlenia",
    lightingTypeLabel: "Bez oświetlenia",
    room: "korytarz",
    roomLabel: "Korytarz",
    area: "11 m²",
    duration: "1 dzień",
    description: "Szybkie odświeżenie korytarza bez pyłu i mokrych prac wykończeniowych.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "bielawa-lokal-szyny",
    title: "Sufit z szynami magnetycznymi w lokalu",
    city: "Bielawa",
    locationSlug: "bielawa",
    ceilingType: "z-oswietleniem",
    ceilingTypeLabel: "Z oświetleniem",
    lightingType: "szyny-magnetyczne",
    lightingTypeLabel: "Szyny magnetyczne",
    room: "lokal-uslugowy",
    roomLabel: "Lokal usługowy",
    area: "42 m²",
    duration: "2 dni",
    description: "Elastyczny układ światła do ekspozycji i czysta powierzchnia sufitu.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "sroda-slaska-salon-karnisz",
    title: "Sufit z ukrytym karniszem",
    city: "Środa Śląska",
    locationSlug: "sroda-slaska",
    ceilingType: "z-karniszem",
    ceilingTypeLabel: "Z karniszem",
    lightingType: "podswietlenie-obwodowe",
    lightingTypeLabel: "Podświetlenie obwodowe",
    room: "salon",
    roomLabel: "Salon",
    area: "31 m²",
    duration: "2 dni",
    description: "Wnęka pod karnisz, subtelne światło i minimalistyczne wykończenie salonu.",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "wroclaw-fabryczna-apartament-poziomy",
    title: "Wielopoziomowy sufit w apartamencie",
    city: "Wrocław Fabryczna",
    locationSlug: "wroclaw-fabryczna",
    ceilingType: "wielopoziomowy",
    ceilingTypeLabel: "Wielopoziomowy",
    lightingType: "linie-led",
    lightingTypeLabel: "Linie LED",
    room: "salon",
    roomLabel: "Salon",
    area: "36 m²",
    duration: "2 dni",
    description: "Podział stref, konstrukcja pod LED i elegancki efekt architektoniczny.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "trzebnica-kuchnia-led",
    title: "Kuchnia z linią LED nad blatem",
    city: "Trzebnica",
    locationSlug: "trzebnica",
    ceilingType: "z-oswietleniem",
    ceilingTypeLabel: "Z oświetleniem",
    lightingType: "linie-led",
    lightingTypeLabel: "Linie LED",
    room: "kuchnia",
    roomLabel: "Kuchnia",
    area: "14 m²",
    duration: "1 dzień",
    description: "Praktyczne światło robocze i jednolita powierzchnia sufitu nad zabudową.",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "katy-wroclawskie-lazienka-satyna",
    title: "Satynowy sufit do małej łazienki",
    city: "Kąty Wrocławskie",
    locationSlug: "katy-wroclawskie",
    ceilingType: "satynowy",
    ceilingTypeLabel: "Satynowy",
    lightingType: "punkty-swietlne",
    lightingTypeLabel: "Punkty świetlne",
    room: "lazienka",
    roomLabel: "Łazienka",
    area: "6 m²",
    duration: "1 dzień",
    description: "Odporna powierzchnia, estetyczne oprawy i szybki montaż w gotowym mieszkaniu.",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "siechnice-sypialnia-mat",
    title: "Matowy sufit w sypialni",
    city: "Siechnice",
    locationSlug: "siechnice",
    ceilingType: "matowy",
    ceilingTypeLabel: "Matowy",
    lightingType: "bez-oswietlenia",
    lightingTypeLabel: "Bez oświetlenia",
    room: "sypialnia",
    roomLabel: "Sypialnia",
    area: "17 m²",
    duration: "1 dzień",
    description: "Spokojne wykończenie bez refleksów i bez ciężkich prac remontowych.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
  {
    id: "jelcz-laskowice-lokal-blysk",
    title: "Błyszczący sufit w lokalu usługowym",
    city: "Jelcz-Laskowice",
    locationSlug: "jelcz-laskowice",
    ceilingType: "blyszczacy",
    ceilingTypeLabel: "Błyszczący",
    lightingType: "szyny-magnetyczne",
    lightingTypeLabel: "Szyny magnetyczne",
    room: "lokal-uslugowy",
    roomLabel: "Lokal usługowy",
    area: "38 m²",
    duration: "2 dni",
    description: "Dekoracyjny połysk, wygodne sterowanie światłem i efekt gotowy do odbioru klientów.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fm=webp&fit=crop&w=1200&q=84",
  },
];

export function getProjectsByLocationSlug(slug: string, limit = 3) {
  return galleryProjects.filter((project) => project.locationSlug === slug).slice(0, limit);
}

export function getFallbackProjects(limit = 3) {
  return galleryProjects.slice(0, limit);
}
