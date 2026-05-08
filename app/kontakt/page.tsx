import { PageBreadcrumbs } from "@/components/Breadcrumbs";
import { CardGrid } from "@/components/CardGrid";
import { ContactPageForm } from "@/components/ContactPageForm";
import { Header } from "@/components/Header";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection, type FAQItem } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { getFAQItemsByCategory } from "@/lib/faq";
import { locations } from "@/lib/locations";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Skontaktuj się z EkoSufity. Bezpłatny pomiar sufitów napinanych we Wrocławiu i okolicach do 100 km.",
  path: "/kontakt",
});

const contactCards = [
  { title: "Telefon", text: siteConfig.phone, href: siteConfig.phoneHref, icon: Phone },
  { title: "Email", text: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { title: "Adres", text: `${siteConfig.streetAddress}, ${siteConfig.postalCode} ${siteConfig.city}`, href: "#obszar", icon: MapPin },
  { title: "Godziny", text: "pon.-pt. 9:00-20:00", href: "#formularz", icon: Clock3 },
];

const serviceAreas = locations.map((location) => location.name);

const contactFaq: FAQItem[] = [
  ...getFAQItemsByCategory("cena-i-wycena").slice(1, 3),
  {
    question: "Jak szybko oddzwaniacie?",
    answer: "W godzinach pracy zwykle oddzwaniamy w ciągu 15 minut.",
  },
  {
    question: "Czy mogę wysłać zdjęcia pomieszczenia?",
    answer:
      "Tak. Najwygodniej wysłać zdjęcia przez WhatsApp razem z metrażem i lokalizacją.",
  },
  {
    question: "Jakie informacje przygotować przed rozmową?",
    answer:
      "Wystarczy orientacyjny metraż, miejscowość, rodzaj pomieszczenia i informacja, czy planujesz oświetlenie.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="kontakt" className="overflow-hidden pb-24 md:pb-0">
        <PageBreadcrumbs current="Kontakt" />

        <section className="pb-12 pt-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                Kontakt
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                Umów bezpłatny pomiar sufitu
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Napisz, zadzwoń albo wyślij formularz. Doradzimy rozwiązanie, potwierdzimy
                termin i przygotujemy dokładną wycenę po pomiarze.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 text-base font-medium leading-none text-white transition hover:-translate-y-0.5"
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Napisz na WhatsApp"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  Napisz na WhatsApp
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
                  href={siteConfig.phoneHref}
                  aria-label={`Zadzwoń pod numer ${siteConfig.phone}`}
                >
                  <Phone size={20} aria-hidden="true" />
                  Zadzwoń
                </a>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
                Szybki kontakt
              </p>
              <div className="mt-6 grid gap-4">
                {contactCards.map((item) => (
                  <a
                    key={item.title}
                    className="flex items-start gap-4 rounded-lg border border-line/80 p-4 transition hover:border-gold hover:bg-porcelain/50"
                    href={item.href}
                  >
                    <item.icon className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                    <span>
                      <span className="block font-extrabold text-ink">{item.title}</span>
                      <span className="mt-1 block leading-7 text-muted">{item.text}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="formularz" className="section-pad scroll-mt-28 bg-white/45">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:px-8">
            <SectionHeading
              eyebrow="Formularz"
              title="Opisz swój projekt"
              description="Im więcej szczegółów podasz, tym szybciej przygotujemy sensowną wstępną odpowiedź przed pomiarem."
            />
            <ContactPageForm />
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-lg bg-charcoal p-6 text-white shadow-soft md:p-9">
              <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <SectionHeading
                  eyebrow="WhatsApp"
                  title="Najprościej wysłać zdjęcia przez WhatsApp"
                  description="Możesz od razu przesłać zdjęcia sufitu, metraż, miejscowość i pytania o oświetlenie."
                  tone="dark"
                />
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 text-base font-medium leading-none text-white transition hover:-translate-y-0.5"
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Napisz na WhatsApp"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  Napisz na WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="obszar" className="section-pad scroll-mt-28 bg-white/45">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Obszar działania"
              title="Wrocław i okolice do 100 km"
              description="Pracujemy we Wrocławiu oraz w okolicznych miejscowościach. Termin i dojazd potwierdzamy przy kontakcie."
              align="center"
            />
            <CardGrid className="mt-10" columns={4}>
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-3 rounded-lg bg-white p-5 font-bold text-ink shadow-card">
                  <MapPin className="h-5 w-5 text-gold-dark" aria-hidden="true" />
                  {area}
                </div>
              ))}
            </CardGrid>
          </div>
        </section>

        <FAQSection items={contactFaq} title="FAQ kontaktowe" />
        <CTASection
          title="Gotowy na bezpłatny pomiar?"
          description="Zostaw kontakt albo napisz na WhatsApp. Oddzwonimy i ustalimy wygodny termin."
          showCalculatorLink={false}
        />
      </main>
      <Footer />
      <PhoneButton />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
