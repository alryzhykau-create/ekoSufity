// Stawki za m² dla folii poszczególnych producentów — jedno miejsce dla
// kalkulatora i kart producentów na /ceny, żeby kwoty nie rozjechały się
// między stroną a wyliczeniem.
export type FoliaCena = {
  id: "msd" | "bauf" | "teqtum";
  nazwa: string;
  cenaM2: number;
  /* Jedno zdanie, po co ta folia — podpowiedź w kalkulatorze. */
  opis: string;
};

export const folieCeny: FoliaCena[] = [
  {
    id: "msd",
    nazwa: "MSD",
    cenaM2: 120,
    opis: "najlepszy stosunek jakości do ceny"
  },
  {
    id: "bauf",
    nazwa: "Bauf",
    cenaM2: 135,
    opis: "niemiecka technologia, normy europejskie"
  },
  {
    id: "teqtum",
    nazwa: "Teqtum",
    cenaM2: 170,
    opis: "segment premium"
  }
];

export function znajdzFolie(id: string): FoliaCena {
  return folieCeny.find((folia) => folia.id === id) ?? folieCeny[0];
}
