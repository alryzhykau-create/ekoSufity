export const services = [
  {
    slug: "sufity-napinane",
    title: "Sufity napinane",
    h1: "Sufity napinane z montażem",
    copy:
      "Montaż sufitów napinanych dowolnej złożoności - od prostych sufitów z LED i dodatkowymi detalami.",
    href: "/rozwiazania/sufity-napinane"
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
