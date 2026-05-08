import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Header } from "@/components/Header";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Polityka prywatności",
  description:
    "Polityka prywatności EkoSufity: dane kontaktowe, formularz, komunikacja, pliki cookies i prawa użytkownika.",
  path: "/polityka-prywatnosci",
});

const sections = [
  {
    title: "Administrator danych",
    content: [
      `Administratorem danych jest ${siteConfig.name}, kontakt: ${siteConfig.email}, telefon: ${siteConfig.phone}.`,
      "Dane przetwarzamy w celu obsługi zapytań, przygotowania wyceny, umówienia pomiaru i realizacji kontaktu z klientem.",
    ],
  },
  {
    title: "Jakie dane możemy przetwarzać",
    content: [
      "Możemy przetwarzać dane podane w formularzu lub wiadomości: imię, numer telefonu, adres e-mail, miejscowość, powierzchnię, rodzaj planowanego sufitu oraz treść zapytania.",
      "Jeśli klient przesyła zdjęcia pomieszczenia, wykorzystujemy je wyłącznie do oceny zakresu prac i przygotowania odpowiedzi.",
    ],
  },
  {
    title: "Podstawa i czas przetwarzania",
    content: [
      "Dane przetwarzamy na podstawie uzasadnionego interesu polegającego na obsłudze zapytań oraz na podstawie działań zmierzających do zawarcia umowy.",
      "Dane przechowujemy przez czas potrzebny do obsługi sprawy, a następnie przez okres wymagany przepisami lub zabezpieczeniem ewentualnych roszczeń.",
    ],
  },
  {
    title: "Pliki cookies",
    content: [
      "Strona może używać niezbędnych plików cookies lub podobnych technologii do prawidłowego działania serwisu i zapamiętania decyzji o banerze cookies.",
      "Jeśli w przyszłości zostaną dodane narzędzia analityczne lub marketingowe, informacja o tym powinna zostać uzupełniona w tej polityce.",
    ],
  },
  {
    title: "Udostępnianie danych",
    content: [
      "Dane mogą być przetwarzane przez dostawców narzędzi technicznych, poczty e-mail, hostingu lub komunikatorów, wyłącznie w zakresie potrzebnym do obsługi zapytania.",
      "Nie sprzedajemy danych osobowych i nie przekazujemy ich podmiotom trzecim w celach niezwiązanych z obsługą klienta.",
    ],
  },
  {
    title: "Prawa użytkownika",
    content: [
      "Masz prawo dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu oraz wniesienia skargi do właściwego organu nadzorczego.",
      `W sprawach dotyczących danych osobowych skontaktuj się z nami: ${siteConfig.email}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Breadcrumbs
          visible
          items={[
            { label: "Strona główna", href: "/" },
            { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
          ]}
        />

        <section className="pb-12 pt-10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
                Prywatność
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                Polityka prywatności
              </h1>
              <p className="mt-5 text-base leading-7 text-muted md:text-lg md:leading-8">
                Informacje o tym, jakie dane przetwarzamy przy kontakcie, wycenie, pomiarze
                oraz korzystaniu ze strony EkoSufity.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/45">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Informacje"
              title="Zasady przetwarzania danych"
              description="Poniższa treść ma charakter informacyjny i opisuje praktyczne zasady obsługi zapytań klientów."
            />
            <div className="mt-10 space-y-5">
              {sections.map((section) => (
                <article key={section.title} className="rounded-lg bg-white p-6 shadow-card md:p-8">
                  <h2 className="text-2xl font-extrabold text-ink">{section.title}</h2>
                  <div className="mt-4 space-y-4 leading-7 text-muted">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Kontakt"
          title="Masz pytanie o dane lub formularz?"
          description="Skontaktuj się z nami mailowo albo telefonicznie. Odpowiemy na pytania dotyczące kontaktu, wyceny i przetwarzania danych."
          secondaryHref="/kontakt"
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
