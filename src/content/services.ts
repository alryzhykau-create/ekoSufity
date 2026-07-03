export const services = [
  {
    slug: "folie",
    title: "Folie",
    h1: "Folie do sufitów napinanych",
    copy:
      "Producenci folii do sufitów napinanych — MSD, Bauf i Teqtum. Materiał dobieramy pod projekt, efekt i budżet.",
    href: "/rozwiazania/folie"
  },
  {
    slug: "oswietlenie-led",
    title: "Oświetlenie",
    h1: "Sufity napinane z oświetleniem LED",
    copy: "Linie, punkty i podświetlenia dopasowane do układu pomieszczenia.",
    href: "/rozwiazania/oswietlenie-led"
  },
  {
    slug: "linie-swietlne",
    title: "Linie świetlne",
    h1: "Linie świetlne w suficie napinanym",
    copy: "Nowoczesne linie LED jako element dekoracyjny i funkcjonalny.",
    href: "/rozwiazania/linie-swietlne"
  },
  {
    slug: "karnisze-sufitowe",
    title: "Ukryte karnisze",
    h1: "Ukryte karnisze w suficie napinanym",
    copy: "Czysta linia przy oknie i możliwość połączenia z oświetleniem.",
    href: "/rozwiazania/karnisze-sufitowe"
  }
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
