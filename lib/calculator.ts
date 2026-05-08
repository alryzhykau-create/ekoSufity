export type RoomType =
  | "salon"
  | "kuchnia"
  | "lazienka"
  | "sypialnia"
  | "korytarz"
  | "lokal-uslugowy"
  | "inne";

export type CeilingType =
  | "msd-premium"
  | "bauf"
  | "teqtum"
  | "matowy"
  | "satynowy"
  | "blyszczacy"
  | "translucent"
  | "z-nadrukiem"
  | "wielopoziomowy";

export type LightingType =
  | "brak"
  | "punkty-swietlne"
  | "linie-led"
  | "tasmy-led"
  | "szyny-magnetyczne"
  | "podswietlenie-obwodowe";

export type AdditionalSolution =
  | "ukryty-karnisz"
  | "wentylacja"
  | "luki-rewizyjne"
  | "profile-specjalne"
  | "efekt-cienia";

export type LocationType =
  | "wroclaw"
  | "olesnica"
  | "olawa"
  | "swidnica"
  | "dzierzoniow"
  | "bielawa"
  | "legnica"
  | "lubin"
  | "brzeg"
  | "trzebnica"
  | "wolow"
  | "sroda-slaska"
  | "jawor"
  | "strzelin"
  | "klodzko"
  | "nysa";

export type PriceCalculatorInput = {
  area: number;
  roomType: RoomType;
  location: LocationType;
  ceilingType: CeilingType;
  lighting: LightingType;
  additionalSolutions: AdditionalSolution[];
};

export type PriceBreakdownItem = {
  label: string;
  minValue: number;
  maxValue: number;
};

export type PriceRangeCalculation = {
  minTotal: number;
  maxTotal: number;
  breakdown: PriceBreakdownItem[];
};

type Option<T extends string> = {
  label: string;
  value: T;
};

type PriceOption<T extends string> = Option<T> & {
  price: number;
};

export const roomTypeOptions: Option<RoomType>[] = [
  { label: "Salon", value: "salon" },
  { label: "Kuchnia", value: "kuchnia" },
  { label: "Łazienka", value: "lazienka" },
  { label: "Sypialnia", value: "sypialnia" },
  { label: "Korytarz", value: "korytarz" },
  { label: "Lokal usługowy", value: "lokal-uslugowy" },
  { label: "Inne pomieszczenie", value: "inne" },
];

export const ceilingTypeOptions: PriceOption<CeilingType>[] = [
  { label: "MSD Premium", value: "msd-premium", price: 120 },
  { label: "Bauf", value: "bauf", price: 140 },
  { label: "Teqtum", value: "teqtum", price: 170 },
  { label: "Matowy", value: "matowy", price: 120 },
  { label: "Satynowy", value: "satynowy", price: 140 },
  { label: "Błyszczący", value: "blyszczacy", price: 150 },
  { label: "Translucent", value: "translucent", price: 190 },
  { label: "Z nadrukiem", value: "z-nadrukiem", price: 210 },
  { label: "Wielopoziomowy", value: "wielopoziomowy", price: 220 },
];

export const lightingOptions: Option<LightingType>[] = [
  { label: "Bez oświetlenia", value: "brak" },
  { label: "Punkty świetlne", value: "punkty-swietlne" },
  { label: "Linie LED", value: "linie-led" },
  { label: "Taśmy LED", value: "tasmy-led" },
  { label: "Szyny magnetyczne", value: "szyny-magnetyczne" },
  { label: "Podświetlenie obwodowe", value: "podswietlenie-obwodowe" },
];

export const additionalSolutionOptions: Option<AdditionalSolution>[] = [
  { label: "Ukryty karnisz", value: "ukryty-karnisz" },
  { label: "Wentylacja", value: "wentylacja" },
  { label: "Luki rewizyjne", value: "luki-rewizyjne" },
  { label: "Profile specjalne", value: "profile-specjalne" },
  { label: "Efekt cienia", value: "efekt-cienia" },
];

export const locationOptions: Option<LocationType>[] = [
  { label: "Wrocław", value: "wroclaw" },
  { label: "Oleśnica", value: "olesnica" },
  { label: "Oława", value: "olawa" },
  { label: "Świdnica", value: "swidnica" },
  { label: "Dzierżoniów", value: "dzierzoniow" },
  { label: "Bielawa", value: "bielawa" },
  { label: "Legnica", value: "legnica" },
  { label: "Lubin", value: "lubin" },
  { label: "Brzeg", value: "brzeg" },
  { label: "Trzebnica", value: "trzebnica" },
  { label: "Wołów", value: "wolow" },
  { label: "Środa Śląska", value: "sroda-slaska" },
  { label: "Jawor", value: "jawor" },
  { label: "Strzelin", value: "strzelin" },
  { label: "Kłodzko", value: "klodzko" },
  { label: "Nysa", value: "nysa" },
];

const roomMultipliers: Record<RoomType, number> = {
  salon: 1,
  kuchnia: 1.04,
  lazienka: 1.08,
  sypialnia: 1,
  korytarz: 1.05,
  "lokal-uslugowy": 1.12,
  inne: 1.04,
};

const lightingBasePrices: Record<LightingType, number> = {
  brak: 0,
  "punkty-swietlne": 450,
  "linie-led": 900,
  "tasmy-led": 750,
  "szyny-magnetyczne": 1400,
  "podswietlenie-obwodowe": 1100,
};

const lightingAreaPrices: Record<LightingType, number> = {
  brak: 0,
  "punkty-swietlne": 10,
  "linie-led": 25,
  "tasmy-led": 22,
  "szyny-magnetyczne": 35,
  "podswietlenie-obwodowe": 28,
};

const additionalSolutionPrices: Record<AdditionalSolution, { base: number; perMeter: number }> = {
  "ukryty-karnisz": { base: 700, perMeter: 14 },
  wentylacja: { base: 250, perMeter: 4 },
  "luki-rewizyjne": { base: 350, perMeter: 3 },
  "profile-specjalne": { base: 450, perMeter: 18 },
  "efekt-cienia": { base: 500, perMeter: 16 },
};

const locationSurcharges: Record<LocationType, number> = {
  wroclaw: 0,
  olesnica: 120,
  olawa: 120,
  swidnica: 180,
  dzierzoniow: 220,
  bielawa: 240,
  legnica: 240,
  lubin: 280,
  brzeg: 180,
  trzebnica: 120,
  wolow: 160,
  "sroda-slaska": 140,
  jawor: 220,
  strzelin: 160,
  klodzko: 300,
  nysa: 300,
};

const clampNumber = (value: number, min: number, max: number) =>
  Math.min(Math.max(Number.isFinite(value) ? value : min, min), max);

const roundDownToHundreds = (value: number) => Math.floor(value / 100) * 100;
const roundUpToHundreds = (value: number) => Math.ceil(value / 100) * 100;

function getOptionLabel<T extends string>(options: Option<T>[], value: T) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function calculatePriceRange(input: PriceCalculatorInput): PriceRangeCalculation {
  const area = clampNumber(input.area, 5, 180);
  const ceiling = ceilingTypeOptions.find((option) => option.value === input.ceilingType) ?? ceilingTypeOptions[0];
  const roomMultiplier = roomMultipliers[input.roomType] ?? 1;
  const base = area * ceiling.price * roomMultiplier;
  const lighting =
    lightingBasePrices[input.lighting] + area * lightingAreaPrices[input.lighting];
  const additional = input.additionalSolutions.reduce((sum, solution) => {
    const price = additionalSolutionPrices[solution];
    return sum + price.base + area * price.perMeter;
  }, 0);
  const location = locationSurcharges[input.location] ?? 0;
  const subtotal = Math.max(base + lighting + additional + location, 1200);
  const minTotal = roundDownToHundreds(subtotal * 0.9);
  const maxTotal = roundUpToHundreds(subtotal * 1.2);

  return {
    minTotal,
    maxTotal,
    breakdown: [
      {
        label: `Sufit: ${getOptionLabel(ceilingTypeOptions, input.ceilingType)}`,
        minValue: roundDownToHundreds(base * 0.9),
        maxValue: roundUpToHundreds(base * 1.15),
      },
      {
        label: `Oświetlenie: ${getOptionLabel(lightingOptions, input.lighting)}`,
        minValue: roundDownToHundreds(lighting * 0.9),
        maxValue: roundUpToHundreds(lighting * 1.2),
      },
      {
        label: "Dodatkowe rozwiązania",
        minValue: roundDownToHundreds(additional * 0.9),
        maxValue: roundUpToHundreds(additional * 1.2),
      },
      {
        label: `Lokalizacja: ${getOptionLabel(locationOptions, input.location)}`,
        minValue: roundDownToHundreds(location * 0.9),
        maxValue: roundUpToHundreds(location * 1.2),
      },
    ].filter((item) => item.maxValue > 0),
  };
}

export const formatCalculatorPrice = (value: number) =>
  new Intl.NumberFormat("pl-PL").format(Math.round(value));

export const formatPriceRange = ({ minTotal, maxTotal }: PriceRangeCalculation) =>
  `od ${formatCalculatorPrice(minTotal)} zł do ${formatCalculatorPrice(maxTotal)} zł`;
