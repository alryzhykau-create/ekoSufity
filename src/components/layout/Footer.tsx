import Link from "next/link";
import { cities } from "@/content/cities";
import { siteConfig, socialLinks } from "@/content/site";

const offerLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/sufity-napinane", label: "Sufity napinane" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/o-firmie", label: "O firmie" },
  { href: siteConfig.contacts.googleBusinessProfileHref, label: "Opinie", external: true },
  { href: "/kontakt", label: "Kontakt" }
];

const serviceLinks = [
  { href: "/rozwiazania/folie", label: "Folie" },
  { href: "/rozwiazania/oswietlenie-led", label: "Sufity podświetlane LED" },
  { href: "/rozwiazania/folie/matowy", label: "Sufity matowe" },
  { href: "/rozwiazania/folie/polysk", label: "Sufity błyszczące" },
  { href: "/rozwiazania/sufit-z-nadrukiem", label: "Sufity z nadrukiem" }
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
            <div className="footerSocialList">
              {footerSocialLinks.map((item) => (
                <Link
                  key={item.href}
                  className={`footerSocialLink footerSocial--${item.label.toLowerCase()}`}
                  href={item.href}
                  aria-label={`${item.label} ekoSufity`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="footerSocialIcon" aria-hidden="true">
                    {item.label === "YouTube" ? (
                      // Inline SVG, żeby hover mógł osobno przemalować prostokąt i trójkąt.
                      <svg className="footerYtIcon" width="22" height="22" viewBox="0 0 24 24">
                        <rect x="2" y="5.7" width="20" height="12.6" rx="3.8" />
                        <path d="M10 9.15 15.1 12 10 14.85z" />
                      </svg>
                    ) : (
                      <img src={item.iconSrc} alt="" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
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
              <span className="footerPhoneGlyph" aria-hidden="true">
                <svg viewBox="0 0 401.998 401.998" fill="currentColor" width="14" height="14">
                  <path d="M401.129,311.475c-1.137-3.426-8.371-8.473-21.697-15.129c-3.61-2.098-8.754-4.949-15.41-8.566c-6.662-3.617-12.709-6.95-18.13-9.996c-5.432-3.045-10.521-5.995-15.276-8.846c-0.76-0.571-3.139-2.234-7.136-5c-4.001-2.758-7.375-4.805-10.14-6.14c-2.759-1.327-5.473-1.995-8.138-1.995c-3.806,0-8.56,2.714-14.268,8.135c-5.708,5.428-10.944,11.324-15.7,17.706c-4.757,6.379-9.802,12.275-15.126,17.7c-5.332,5.427-9.713,8.138-13.135,8.138c-1.718,0-3.86-0.479-6.427-1.424c-2.566-0.951-4.518-1.766-5.858-2.423c-1.328-0.671-3.607-1.999-6.845-4.004c-3.244-1.999-5.048-3.094-5.428-3.285c-26.075-14.469-48.438-31.029-67.093-49.676c-18.649-18.658-35.211-41.019-49.676-67.097c-0.19-0.381-1.287-2.19-3.284-5.424c-2-3.237-3.333-5.518-3.999-6.854c-0.666-1.331-1.475-3.283-2.425-5.852s-1.427-4.709-1.427-6.424c0-3.424,2.713-7.804,8.138-13.134c5.424-5.327,11.326-10.373,17.7-15.128c6.379-4.755,12.275-9.991,17.701-15.699c5.424-5.711,8.136-10.467,8.136-14.273c0-2.663-0.666-5.378-1.997-8.137c-1.332-2.765-3.378-6.139-6.139-10.138c-2.762-3.997-4.427-6.374-4.999-7.139c-2.852-4.755-5.799-9.846-8.848-15.271c-3.049-5.424-6.377-11.47-9.995-18.131c-3.615-6.658-6.468-11.799-8.564-15.415C98.986,9.233,93.943,1.997,90.516,0.859C89.183,0.288,87.183,0,84.521,0c-5.142,0-11.85,0.95-20.129,2.856c-8.282,1.903-14.799,3.899-19.558,5.996c-9.517,3.995-19.604,15.605-30.264,34.826C4.863,61.566,0.01,79.271,0.01,96.78c0,5.135,0.333,10.131,0.999,14.989c0.666,4.853,1.856,10.326,3.571,16.418c1.712,6.09,3.093,10.614,4.137,13.56c1.045,2.948,2.996,8.229,5.852,15.845c2.852,7.614,4.567,12.275,5.138,13.988c6.661,18.654,14.56,35.307,23.695,49.964c15.03,24.362,35.541,49.539,61.521,75.521c25.981,25.98,51.153,46.49,75.517,61.526c14.655,9.134,31.314,17.032,49.965,23.698c1.714,0.568,6.375,2.279,13.986,5.141c7.614,2.854,12.897,4.805,15.845,5.852c2.949,1.048,7.474,2.43,13.559,4.145c6.098,1.715,11.566,2.905,16.419,3.576c4.856,0.657,9.853,0.996,14.989,0.996c17.508,0,35.214-4.856,53.105-14.562c19.219-10.656,30.826-20.745,34.823-30.269c2.102-4.754,4.093-11.273,5.996-19.555c1.909-8.278,2.857-14.985,2.857-20.126C401.99,314.814,401.703,312.819,401.129,311.475z" />
                </svg>
              </span>
              {siteConfig.contacts.phoneDisplay}
            </Link>
            <Link href={`mailto:${siteConfig.contacts.email}`}>
              <span className="footerPhoneGlyph" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M2 6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6Zm2.4.4L12 11.6l7.6-5.2H4.4ZM20 8.9l-7.5 5.1a1 1 0 0 1-1 0L4 8.9V18h16V8.9Z" />
                </svg>
              </span>
              {siteConfig.contacts.email}
            </Link>
            <span className="footerContactText">
              <span className="footerPhoneGlyph" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="currentColor" width="14" height="14">
                  <path d="M16,2c-5.51,0-10,4.49-10,10,0,1.55.35,3.04,1.05,4.45.01.02.02.04.03.06.24.46,6.24,10.08,8.07,13.02.18.29.5.47.85.47s.67-.18.85-.47c1.83-2.94,7.83-12.55,8.02-12.93l.04-.07c.04-.07.08-.14.1-.21.66-1.37.99-2.82.99-4.32,0-5.51-4.49-10-10-10ZM16,16c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z" />
                </svg>
              </span>
              Wrocław i okolice
            </span>
            <span className="footerContactNote">Do 100 km dojazd gratis</span>
          </address>

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
            <span>© {new Date().getFullYear()} ekoSufity. Wszystkie prawa zastrzeżone.</span>
            <div className="footerLegalLinks">
              <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
