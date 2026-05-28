import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, whatsappUrl } from "@/content/site";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności EkoSufity: kontakt telefoniczny, WhatsApp, e-mail i formularz pomiaru."
};

const privacyItems = [
  {
    title: "Jakie dane podajesz?",
    copy:
      "W formularzu kontaktowym możemy poprosić o imię i nazwisko, numer telefonu, miejscowość oraz dodatkowe informacje potrzebne do kontaktu i przygotowania pomiaru."
  },
  {
    title: "Po co przetwarzamy dane?",
    copy:
      "Dane wykorzystujemy wyłącznie do odpowiedzi na zapytanie, kontaktu w sprawie pomiaru, wyceny oraz ustalenia szczegółów realizacji."
  },
  {
    title: "Jak można się skontaktować?",
    copy:
      "Możesz skontaktować się telefonicznie, przez WhatsApp, e-mail albo formularz kontaktowy na stronie."
  },
  {
    title: "Jak długo przechowujemy dane?",
    copy:
      "Dane z zapytania przechowujemy przez czas potrzebny do obsługi kontaktu i ewentualnej realizacji usługi, a następnie zgodnie z obowiązkami rozliczeniowymi lub do czasu cofnięcia zgody, jeżeli dotyczy."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Polityka prywatności", href: "/polityka-prywatnosci" }])} />

      <section className="pageHero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Polityka prywatności", href: "/polityka-prywatnosci" }]} />
          <span className="eyebrow">Dokument</span>
          <h1>Polityka prywatności</h1>
          <p className="pageLead">
            Informacje o tym, jakie dane podajesz podczas kontaktu z EkoSufity i w jakim celu są
            używane.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container privacyLayout">
          <div className="privacyContent">
            <SectionHeader title="Najważniejsze informacje" />
            <div className="grid2 sectionCards">
              {privacyItems.map((item) => (
                <article className="card miniCard" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <article className="card privacyTextCard">
              <h2>Administrator danych</h2>
              <p>
                Administratorem danych jest EkoSufity. Pełne dane firmy, w tym NIP/REGON, należy
                uzupełnić przed publikacją strony.
              </p>
              <h2>Kontakt w sprawie danych</h2>
              <p>
                W sprawach związanych z danymi możesz skontaktować się przez e-mail{" "}
                <Link href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</Link>{" "}
                albo telefonicznie pod numerem{" "}
                <Link href={siteConfig.contacts.phoneHref}>{siteConfig.contacts.phoneDisplay}</Link>.
              </p>
              <h2>Odbiorcy techniczni</h2>
              <p>
                Formularz kontaktowy może przekazywać zgłoszenie do narzędzi skonfigurowanych po
                stronie serwera, takich jak e-mail lub komunikator używany do obsługi zapytań.
              </p>
              <h2>Twoje prawa</h2>
              <p>
                Możesz poprosić o dostęp do swoich danych, ich poprawienie, usunięcie lub
                ograniczenie przetwarzania, jeżeli wynika to z obowiązujących przepisów.
              </p>
            </article>
          </div>

          <aside className="card privacyContactCard">
            <h2>Kontakt</h2>
            <p>
              <Link href={siteConfig.contacts.phoneHref}>{siteConfig.contacts.phoneDisplay}</Link>
              <br />
              <Link href={whatsappUrl()}>WhatsApp</Link>
              <br />
              <Link href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</Link>
            </p>
            <p className="footerMuted">Pracujemy 9:00-20:00.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
