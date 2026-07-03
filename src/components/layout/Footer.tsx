import Link from "next/link";
import { cities } from "@/content/cities";
import { siteConfig, socialLinks } from "@/content/site";

const offerLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/sufity-napinane", label: "Oferta" },
  { href: "/realizacje", label: "Realizacje" },
  { href: siteConfig.contacts.googleBusinessProfileHref, label: "Opinie", external: true },
  { href: "/kontakt", label: "Kontakt" }
];

const serviceLinks = [
  { href: "/rozwiazania/folie", label: "Folie" },
  { href: "/rozwiazania/oswietlenie-led", label: "Sufity podświetlane LED" },
  { href: "/sufity-napinane", label: "Sufity matowe" },
  { href: "/sufity-napinane", label: "Sufity błyszczące" },
  { href: "/sufity-napinane", label: "Sufity z nadrukiem" }
];

const footerSocialOrder = ["Facebook", "Instagram", "TikTok", "YouTube"] as const;
const footerSocialLinks = footerSocialOrder
  .map((label) => socialLinks.find((item) => item.label === label))
  .filter((item): item is (typeof socialLinks)[number] => Boolean(item));

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerShell">
        <div className="footerPanel">
          <div className="footerBrandColumn">
            <Link className="footerBrand" href="/">
              <span className="footerBrandName">
                ek<span>o</span>Sufity
              </span>
              <span className="footerBrandSub">Napinane</span>
            </Link>
            <p className="footerMuted">
              Nowoczesne sufity napinane dopasowane do Twojego wnętrza. Działamy we Wrocławiu i
              okolicach.
            </p>
          </div>

          <nav className="footerColumn" aria-label="Nawigacja w stopce">
            <h3>Nawigacja</h3>
            <ul>
              {offerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footerColumn" aria-label="Usługi">
            <h3>Usługi</h3>
            <ul>
              {serviceLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="footerColumn footerContactColumn">
            <h3>Kontakt</h3>
            <Link href={siteConfig.contacts.phoneHref}>
              <span aria-hidden="true">☎</span>
              {siteConfig.contacts.phoneDisplay}
            </Link>
            <Link href={`mailto:${siteConfig.contacts.email}`}>
              <span aria-hidden="true">@</span>
              {siteConfig.contacts.email}
            </Link>
            <span className="footerContactText">
              <span aria-hidden="true">⌖</span>
              Wrocław i okolice
            </span>
            <span className="footerContactNote">Do 100 km dojazd gratis</span>
          </address>

          <div className="footerColumn footerSocialColumn">
            <div className="footerSocialList">
              {footerSocialLinks.map((item) => (
                <Link
                  key={item.href}
                  className="footerSocialLink"
                  href={item.href}
                  aria-label={`${item.label} ekoSufity`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="footerSocialIcon" aria-hidden="true">
                    <img src={item.iconSrc} alt="" />
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="footerCities"
            style={{
              gridColumn: "1 / -1",
              borderTop: "1px solid var(--footer-divider)",
              paddingTop: 14
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: 6,
                color: "var(--footer-muted)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.02em"
              }}
            >
              Działamy w miastach:
            </span>
            <p
              style={{
                margin: 0,
                color: "var(--footer-muted)",
                fontSize: "0.78rem",
                lineHeight: 1.7
              }}
            >
              {cities.map((cityItem, index) => (
                <span key={cityItem.slug}>
                  {index > 0 ? <span aria-hidden="true"> · </span> : null}
                  <Link href={`/lokalizacje/${cityItem.slug}`}>{cityItem.name}</Link>
                </span>
              ))}
            </p>
          </div>

          <div className="footerBottom">
            <span>© 2025 ekoSufity. Wszystkie prawa zastrzeżone.</span>
            <div className="footerLegalLinks">
              <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
