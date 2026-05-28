import Link from "next/link";
import { cities } from "@/content/cities";
import { siteConfig, whatsappUrl } from "@/content/site";
import { services } from "@/content/services";

const majorCitySlugs = [
  "wroclaw",
  "olawa",
  "olesnica",
  "swidnica",
  "legnica",
  "walbrzych",
  "lubin",
  "glogow",
  "jelenia-gora",
  "brzeg"
];

export function Footer() {
  const footerCities = cities.filter((city) => majorCitySlugs.includes(city.slug));
  const clientLinks = [
    { href: "/ceny", label: "Ceny" },
    { href: "/realizacje", label: "Realizacje" },
    { href: "/faq", label: "FAQ" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/polityka-prywatnosci", label: "Polityka prywatności" }
  ];

  return (
    <footer className="footer">
      <div className="container footerShell">
        <div className="footerContactStrip" aria-label="Szybki kontakt">
          <Link className="footerContactItem" href={siteConfig.contacts.phoneHref}>
            <span aria-hidden="true">Tel</span>
            <strong>{siteConfig.contacts.phoneDisplay}</strong>
          </Link>
          <Link className="footerContactItem" href={whatsappUrl()}>
            <span aria-hidden="true">WA</span>
            <strong>WhatsApp</strong>
          </Link>
          <Link className="footerContactItem" href={`mailto:${siteConfig.contacts.email}`}>
            <span aria-hidden="true">@</span>
            <strong>{siteConfig.contacts.email}</strong>
          </Link>
        </div>

        <div className="footerDirectory">
          <div className="footerBrandColumn">
            <Link className="brand" href="/">
              <span className="brandName">ekoSufity</span>
              <span className="brandSub">Sufity napinane</span>
            </Link>
            <p className="footerMuted">
              Sufity napinane we Wrocławiu i okolicy do 100 km. Telefon i WhatsApp jako
              najszybszy kontakt.
            </p>
          </div>

          <div>
            <h3>Rozwiązania</h3>
            <p className="footerMuted">
              {services.map((service) => (
                <span key={service.href}>
                  <Link href={service.href}>{service.title}</Link>
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3>Dla klienta</h3>
            <p className="footerMuted">
              {clientLinks.map((item) => (
                <span key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3>Duże miasta</h3>
            <p className="footerMuted">
              {footerCities.map((city) => (
                <span key={city.slug}>
                  <Link href={`/lokalizacje/${city.slug}`}>{city.name}</Link>
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3>Informacje</h3>
            <p className="footerMuted">
              Pracujemy 9:00-20:00.
              <br />
              Pomiar i dojazd do 100 km od Wrocławia.
              <br />
              NIP/REGON: do uzupełnienia przed publikacją.
            </p>
          </div>
        </div>

        <div className="footerBottom">
          <span>© {new Date().getFullYear()} EkoSufity</span>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
        </div>
      </div>
    </footer>
  );
}
