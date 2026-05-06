import {
  ArrowRight,
  BadgeCheck,
  Bath,
  CalendarCheck,
  Check,
  Clock3,
  Home,
  LampDesk,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Wrench,
} from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { MobileBottomBar, WhatsAppButton } from "@/components/FloatingActions";
import { PriceCalculator } from "@/components/PriceCalculator";

const heroImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85";
const alexImage =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85";

const benefits = [
  {
    title: "Bezpłatny pomiar",
    text: "Przyjeżdżamy na miejsce, wykonujemy pomiar i doradzamy najlepsze rozwiązanie.",
    icon: Ruler,
  },
  {
    title: "Montaż w 1 dzień",
    text: "90% standardowych realizacji wykonujemy w ciągu jednego dnia.",
    icon: Clock3,
  },
  {
    title: "Bez kurzu i remontu",
    text: "Montaż bez szpachlowania, malowania i bałaganu. Czysto, szybko i wygodnie.",
    icon: Wrench,
  },
  {
    title: "Gwarancja jakości",
    text: "Stosujemy sprawdzone materiały i dajemy pisemną gwarancję na nasze usługi.",
    icon: ShieldCheck,
  },
];

const heroFeatures = [
  { lines: ["Dojazd do", "100 km gratis"], icon: MapPin },
  { lines: ["Montaż nawet", "w 1 dzień"], icon: Timer },
  { lines: ["Bez kurzu", "i remontu"], icon: Wrench },
  { lines: ["Ceny od", "120 zł/m²"], icon: BadgeCheck },
];

const priceRows = [
  ["Sufit matowy", "od 120 zł/m²"],
  ["Sufit satynowy", "od 140 zł/m²"],
  ["Sufit z linią LED", "od 170 zł/m²"],
  ["Sufity niestandardowe", "wycena indywidualna"],
];

const priceExamples = [
  { title: "Łazienka 6 m²", price: "od 900 zł", icon: Bath },
  { title: "Kuchnia 10 m²", price: "od 1400 zł", icon: Home },
  { title: "Salon 20 m²", price: "od 2600 zł", icon: Sparkles },
  { title: "Salon z linią LED 20 m²", price: "od 3600 zł", icon: LampDesk },
];

const projects = [
  {
    location: "Wrocław, Krzyki",
    title: "Sufit matowy + linia LED",
    meta: "18 m² | Montaż 1 dzień",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=82",
  },
  {
    location: "Wrocław, Psie Pole",
    title: "Sufit satynowy",
    meta: "14 m² | Montaż 1 dzień",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=82",
  },
  {
    location: "Wrocław, Śródmieście",
    title: "Sufit matowy + LED",
    meta: "22 m² | Montaż 1 dzień",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=82",
  },
  {
    location: "Wrocław, Fabryczna",
    title: "Sufit z linią LED",
    meta: "16 m² | Montaż 1 dzień",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=82",
  },
];

const steps = [
  ["Kontakt i pomiar", "Umawiamy termin i przyjeżdżamy na miejsce."],
  ["Wycena", "Dobieramy materiał i przedstawiamy koszt."],
  ["Montaż", "W większości przypadków wykonujemy w 1 dzień."],
  ["Gotowy efekt", "Otrzymujesz gotowy sufit i gwarancję."],
];

const reviews = [
  [
    "Pan Alex doradził najlepsze rozwiązanie. Montaż wykonany szybko i bardzo dokładnie. Polecam każdemu!",
    "Michał, Wrocław",
  ],
  [
    "Sufit wygląda świetnie! Czysto, estetycznie i w jeden dzień. Świetny kontakt i pełen profesjonalizm.",
    "Kasia, Oława",
  ],
  [
    "Zdecydowanie polecam EkoSufity. Jakość na najwyższym poziomie, a cena uczciwa.",
    "Tomasz, Świdnica",
  ],
];

const faqItems = [
  {
    question: "Ile trwa montaż sufitu napinanego?",
    answer:
      "W większości przypadków montaż trwa 1 dzień. Małe pomieszczenie można wykonać w kilka godzin, a bardziej rozbudowane projekty mogą zająć 2-3 dni.",
  },
  {
    question: "Czy pomiar jest płatny?",
    answer: "Nie. Pomiar i konsultacja są bezpłatne w promieniu do 100 km od Wrocławia.",
  },
  {
    question: "Czy montaż powoduje dużo kurzu?",
    answer:
      "Nie. Montaż sufitu napinanego jest znacznie czystszy niż tradycyjny remont. Nie ma szpachlowania ani malowania.",
  },
  {
    question: "Czy montujecie oświetlenie LED?",
    answer: "Tak. Wykonujemy linie LED, ukryte oświetlenie, szyny magnetyczne i punkty świetlne.",
  },
  {
    question: "Czy sufit napinany nadaje się do łazienki?",
    answer:
      "Tak. Sufit napinany dobrze sprawdza się w łazienkach, ponieważ jest odporny na wilgoć i łatwy w utrzymaniu czystości.",
  },
  {
    question: "Czy działacie poza Wrocławiem?",
    answer: "Tak. Pracujemy we Wrocławiu oraz w promieniu do 100 km.",
  },
];

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałbym zapytać o sufit napinany i umówić bezpłatny pomiar."
);

function CtaButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        className="inline-flex h-[52px] w-[240px] items-center justify-center gap-2 rounded-xl bg-charcoal px-4 text-[14px] font-semibold leading-none text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black"
        href="#kontakt"
        aria-label="Umów bezpłatny pomiar"
      >
        <CalendarCheck size={20} aria-hidden="true" />
        Umów bezpłatny pomiar
      </a>
      <a
        className="inline-flex items-center justify-center rounded-xl border border-charcoal/20 bg-white px-6 py-4 text-base font-extrabold text-ink transition hover:border-gold hover:text-gold-dark"
        href="#cennik"
        aria-label="Zobacz ceny"
      >
        Zobacz ceny
      </a>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="home" className="overflow-hidden pb-24 md:pb-0">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[620px] lg:block">
            <div className="relative mx-auto h-full max-w-7xl px-8">
              <div className="absolute -top-20 bottom-0 left-[40%] right-0 overflow-hidden rounded-bl-[42px]">
                <img
                  className="h-full w-full object-cover object-[center_24%]"
                  src={heroImage}
                  alt="Nowoczesny salon z sufitem napinanym i linią LED"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFEFD_0%,rgba(255,254,253,0.95)_7%,rgba(255,254,253,0.52)_15%,rgba(255,254,253,0)_26%)]" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fbfaf7]/55 to-transparent" />
                <div className="absolute bottom-8 left-[21%] inline-flex rounded-2xl bg-charcoal/72 px-5 py-3.5 text-[15px] font-extrabold leading-[1.35] text-white shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-md">
                  Wrocław, sufit matowy + linia LED, montaż 1 dzień
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 pb-8 pt-24 lg:min-h-[620px] lg:grid-cols-[0.4fr_0.6fr] lg:px-8 lg:pb-10 lg:pt-24">
            <div className="relative z-10">
              <h1 className="max-w-[570px] [font-family:Montserrat,Inter,ui-sans-serif,system-ui,sans-serif] text-[2.25rem] font-bold leading-[1.06] tracking-normal text-[#111111] sm:text-5xl lg:text-[52px] lg:leading-[58px]">
                <span className="block">Sufity napinane</span>
                <span className="block">we Wrocławiu</span>
                <span className="block text-gold-dark">i okolicach do 100 km</span>
              </h1>
              <p className="mt-5 max-w-[560px] [font-family:Inter,ui-sans-serif,system-ui,sans-serif] text-[17px] leading-[26px] text-[#333333]">
                <span className="block">Bezpłatny pomiar, uczciwa wycena i montaż bez kurzu.</span>
                <span className="block">Większość realizacji wykonujemy w ciągu 1 dnia.</span>
              </p>

              <div className="mt-7 grid max-w-[560px] grid-cols-2 gap-4 [font-family:Inter,ui-sans-serif,system-ui,sans-serif] text-[12px] font-semibold leading-[16px] sm:grid-cols-4">
                {heroFeatures.map(({ lines, icon: Icon }) => (
                  <div key={lines.join(" ")} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-white text-gold-dark">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span className="leading-[16px]">
                      {lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <CtaButtons />
                <p className="mt-4 flex items-center gap-2 [font-family:Inter,ui-sans-serif,system-ui,sans-serif] text-[14px] font-semibold leading-none text-[#B47A3C]">
                  <Clock3 size={16} className="text-[#B47A3C]" aria-hidden="true" />
                  Oddzwonimy w ciągu 15 minut.
                </p>
              </div>
            </div>

            <div className="relative lg:hidden">
              <div className="absolute -left-14 top-16 hidden h-72 w-72 rounded-full bg-white/70 blur-3xl lg:block" />
              <div className="relative overflow-hidden rounded-[28px] bg-white shadow-soft">
                <img
                  className="h-[400px] w-full object-cover md:h-[500px]"
                  src={heroImage}
                  alt="Nowoczesny salon z sufitem napinanym i linią LED"
                />
                <div className="absolute bottom-5 left-5 inline-flex max-w-[calc(100%-2.5rem)] rounded-2xl bg-charcoal/78 px-5 py-3.5 text-[15px] font-extrabold leading-[1.35] text-white shadow-[0_12px_34px_rgba(0,0,0,0.24)] backdrop-blur-md">
                  Wrocław, sufit matowy + linia LED, montaż 1 dzień
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="scroll-mt-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-4 rounded-[24px] bg-white p-4 shadow-soft md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-[22px] p-5 transition hover:bg-porcelain">
                  <benefit.icon className="mb-5 h-9 w-9 text-gold-dark" aria-hidden="true" />
                  <h2 className="text-lg font-extrabold">{benefit.title}</h2>
                  <p className="mt-3 leading-7 text-muted">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="alex" className="section-pad scroll-mt-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
            <div className="overflow-hidden rounded-[24px] bg-white shadow-card">
              <img
                className="h-full min-h-[360px] w-full object-cover"
                src={alexImage}
                alt="Alex, specjalista od sufitów napinanych"
              />
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center rounded-[24px] bg-white p-7 shadow-card md:p-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                  Kto odpowiada za jakość?
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Nazywam się Alex i zajmuję się sufitami napinanymi.
                </h2>
                <p className="mt-5 leading-8 text-muted">
                  Osobiście nadzoruję realizacje, pomagam dobrać najlepsze rozwiązanie i dbam
                  o każdy detal wykonania. Dla mnie najważniejszy jest efekt końcowy i
                  zadowolenie klienta.
                </p>
                <div className="mt-7">
                  <p className="text-4xl font-black italic text-gold-dark">Alex</p>
                  <p className="mt-1 text-sm font-bold text-muted">Specjalista od sufitów napinanych</p>
                </div>
              </div>

              <div className="flex flex-col justify-center rounded-[24px] border border-line bg-white/70 p-7 md:p-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                  Działamy we Wrocławiu i w promieniu do 100 km
                </p>
                <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">
                  Wrocław oraz okoliczne miasta bez dodatkowych kosztów dojazdu.
                </h2>
                <p className="mt-5 leading-8 text-muted">
                  Obsługujemy Wrocław oraz okoliczne miasta: Legnica, Wałbrzych, Świdnica,
                  Oława, Oleśnica, Lubin, Brzeg, Dzierżoniów i inne.
                </p>
                <p className="mt-3 font-extrabold text-gold-dark">
                  Dojazd do 100 km - bez dodatkowych kosztów.
                </p>
                <div className="relative mx-auto mt-8 flex aspect-square w-full max-w-[300px] items-center justify-center rounded-full border border-dashed border-gold-dark/60 bg-white">
                  <div className="absolute h-[72%] w-[72%] rounded-full border border-line" />
                  <div className="text-center">
                    <MapPin className="mx-auto h-9 w-9 text-gold-dark" aria-hidden="true" />
                    <p className="mt-2 font-extrabold">Wrocław</p>
                    <p className="mt-8 text-sm font-bold text-gold-dark">100 km</p>
                  </div>
                </div>
                <a
                  className="mt-8 inline-flex items-center justify-center rounded-xl border border-charcoal/20 bg-white px-5 py-4 font-extrabold transition hover:border-gold hover:text-gold-dark"
                  href="#kontakt"
                  aria-label="Sprawdź dostępność"
                >
                  Sprawdź dostępność
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="cennik" className="section-pad scroll-mt-28 bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                  Cennik
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                  Ile kosztuje sufit napinany?
                </h2>
                <p className="mt-5 max-w-xl leading-8 text-muted">
                  Cena zależy od powierzchni, rodzaju materiału, liczby narożników,
                  oświetlenia i rodzaju profilu.
                </p>
                <div className="mt-8 overflow-hidden rounded-[24px] bg-white shadow-card">
                  {priceRows.map(([name, price]) => (
                    <div key={name} className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 last:border-b-0">
                      <span className="font-bold">{name}</span>
                      <span className="text-right font-extrabold">{price}</span>
                    </div>
                  ))}
                </div>
                <a
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-charcoal px-6 py-4 font-extrabold text-white transition hover:bg-black"
                  href="#kontakt"
                  aria-label="Poproś o dokładną wycenę"
                >
                  Poproś o dokładną wycenę
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {priceExamples.map((item) => (
                  <div key={item.title} className="rounded-[24px] bg-white p-6 shadow-card">
                    <item.icon className="h-10 w-10 text-gold-dark" aria-hidden="true" />
                    <h3 className="mt-6 font-extrabold">{item.title}</h3>
                    <p className="mt-2 text-lg font-black">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PriceCalculator />

        <section id="realizacje" className="section-pad scroll-mt-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                  Portfolio
                </p>
                <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Nasze realizacje</h2>
              </div>
              <a
                className="inline-flex items-center gap-2 font-extrabold text-gold-dark transition hover:text-ink"
                href="#kontakt"
                aria-label="Zobacz więcej realizacji"
              >
                Zobacz więcej realizacji
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {projects.map((project) => (
                <article key={project.location} className="overflow-hidden rounded-[24px] bg-white shadow-card">
                  <img className="h-56 w-full object-cover" src={project.image} alt={project.title} />
                  <div className="p-5">
                    <h3 className="font-extrabold">{project.location}</h3>
                    <p className="mt-2 text-muted">{project.title}</p>
                    <p className="mt-2 text-sm font-bold">{project.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-center text-sm font-extrabold uppercase tracking-[0.18em] text-muted">
              Jak wygląda współpraca
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {steps.map(([title, text], index) => (
                <div key={title} className="relative rounded-[24px] bg-white p-6 shadow-card">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-xl font-black">
                    {index + 1}
                  </div>
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-3 leading-7 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="opinie" className="section-pad scroll-mt-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-3xl font-extrabold md:text-5xl">Opinie klientów</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {reviews.map(([text, author]) => (
                <figure key={author} className="rounded-[24px] bg-white p-6 shadow-card">
                  <div className="flex gap-1 text-gold-dark" aria-label="Ocena pięć gwiazdek">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-5 leading-8 text-muted">"{text}"</blockquote>
                  <figcaption className="mt-5 font-extrabold">- {author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold md:text-5xl">
              Sufit napinany vs płyty G-K
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                ["Sufit napinany", ["Montaż w 1 dzień", "Brak kurzu i bałaganu", "Idealnie równy", "Odporny na wilgoć", "Szeroki wybór oświetlenia"]],
                ["Płyty G-K", ["Kilka dni pracy", "Dużo kurzu i bałaganu", "Konieczne malowanie", "Ryzyko pęknięć", "Ograniczone możliwości"]],
              ].map(([title, rows]) => (
                <div key={title as string} className="rounded-[24px] bg-white p-7 shadow-card">
                  <h3 className="text-2xl font-extrabold">{title as string}</h3>
                  <ul className="mt-6 space-y-4">
                    {(rows as string[]).map((row) => (
                      <li key={row} className="flex items-center gap-3 font-bold text-muted">
                        <Check className="h-5 w-5 text-gold-dark" aria-hidden="true" />
                        {row}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-pad scroll-mt-28">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Najczęstsze pytania</h2>
            </div>
            <FAQAccordion items={faqItems} />
          </div>
        </section>

        <section id="kontakt" className="section-pad scroll-mt-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 rounded-[28px] bg-charcoal p-6 text-white shadow-soft md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">
                  Kontakt
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                  Umów bezpłatny pomiar sufitu
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
                  Zostaw kontakt - oddzwonimy, doradzimy rozwiązanie i przygotujemy dokładną wycenę.
                </p>
                <p className="mt-5 flex items-center gap-2 text-sm text-white/70">
                  <Clock3 size={16} className="text-gold" aria-hidden="true" />
                  Oddzwonimy w ciągu 15 minut.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white pb-28 pt-10 md:pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.15fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-gold text-lg font-black text-gold-dark">
                E
              </span>
              <span className="text-xl font-extrabold">EkoSufity</span>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-muted">
              Sufity napinane premium we Wrocławiu i okolicach do 100 km.
            </p>
          </div>
          <div className="space-y-3 text-muted">
            <p className="flex gap-3"><MapPin className="h-5 w-5 text-gold-dark" aria-hidden="true" />Strzegomska 204, 53-611 Wrocław</p>
            <p className="flex gap-3"><Mail className="h-5 w-5 text-gold-dark" aria-hidden="true" />ekosufity@gmail.com</p>
            <p className="flex gap-3"><Phone className="h-5 w-5 text-gold-dark" aria-hidden="true" />+48 791 085 385</p>
            <p className="flex gap-3"><Clock3 className="h-5 w-5 text-gold-dark" aria-hidden="true" />pon.-pt. 9:00-20:00</p>
          </div>
          <nav className="grid grid-cols-2 gap-3 font-bold text-muted" aria-label="Linki w stopce">
            <a className="transition hover:text-gold-dark" href="#cennik">Cennik</a>
            <a className="transition hover:text-gold-dark" href="#realizacje">Realizacje</a>
            <a className="transition hover:text-gold-dark" href="#faq">FAQ</a>
            <a className="transition hover:text-gold-dark" href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </footer>

      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
