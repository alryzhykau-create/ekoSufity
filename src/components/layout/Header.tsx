"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/navigation";
import { siteConfig, socialLinks, whatsappUrl } from "@/content/site";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 401.998 401.998" focusable="false">
      <path
        d="M401.129,311.475c-1.137-3.426-8.371-8.473-21.697-15.129c-3.61-2.098-8.754-4.949-15.41-8.566c-6.662-3.617-12.709-6.95-18.13-9.996c-5.432-3.045-10.521-5.995-15.276-8.846c-0.76-0.571-3.139-2.234-7.136-5c-4.001-2.758-7.375-4.805-10.14-6.14c-2.759-1.327-5.473-1.995-8.138-1.995c-3.806,0-8.56,2.714-14.268,8.135c-5.708,5.428-10.944,11.324-15.7,17.706c-4.757,6.379-9.802,12.275-15.126,17.7c-5.332,5.427-9.713,8.138-13.135,8.138c-1.718,0-3.86-0.479-6.427-1.424c-2.566-0.951-4.518-1.766-5.858-2.423c-1.328-0.671-3.607-1.999-6.845-4.004c-3.244-1.999-5.048-3.094-5.428-3.285c-26.075-14.469-48.438-31.029-67.093-49.676c-18.649-18.658-35.211-41.019-49.676-67.097c-0.19-0.381-1.287-2.19-3.284-5.424c-2-3.237-3.333-5.518-3.999-6.854c-0.666-1.331-1.475-3.283-2.425-5.852s-1.427-4.709-1.427-6.424c0-3.424,2.713-7.804,8.138-13.134c5.424-5.327,11.326-10.373,17.7-15.128c6.379-4.755,12.275-9.991,17.701-15.699c5.424-5.711,8.136-10.467,8.136-14.273c0-2.663-0.666-5.378-1.997-8.137c-1.332-2.765-3.378-6.139-6.139-10.138c-2.762-3.997-4.427-6.374-4.999-7.139c-2.852-4.755-5.799-9.846-8.848-15.271c-3.049-5.424-6.377-11.47-9.995-18.131c-3.615-6.658-6.468-11.799-8.564-15.415C98.986,9.233,93.943,1.997,90.516,0.859C89.183,0.288,87.183,0,84.521,0c-5.142,0-11.85,0.95-20.129,2.856c-8.282,1.903-14.799,3.899-19.558,5.996c-9.517,3.995-19.604,15.605-30.264,34.826C4.863,61.566,0.01,79.271,0.01,96.78c0,5.135,0.333,10.131,0.999,14.989c0.666,4.853,1.856,10.326,3.571,16.418c1.712,6.09,3.093,10.614,4.137,13.56c1.045,2.948,2.996,8.229,5.852,15.845c2.852,7.614,4.567,12.275,5.138,13.988c6.661,18.654,14.56,35.307,23.695,49.964c15.03,24.362,35.541,49.539,61.521,75.521c25.981,25.98,51.153,46.49,75.517,61.526c14.655,9.134,31.314,17.032,49.965,23.698c1.714,0.568,6.375,2.279,13.986,5.141c7.614,2.854,12.897,4.805,15.845,5.852c2.949,1.048,7.474,2.43,13.559,4.145c6.098,1.715,11.566,2.905,16.419,3.576c4.856,0.657,9.853,0.996,14.989,0.996c17.508,0,35.214-4.856,53.105-14.562c19.219-10.656,30.826-20.745,34.823-30.269c2.102-4.754,4.093-11.273,5.996-19.555c1.909-8.278,2.857-14.985,2.857-20.126C401.99,314.814,401.703,312.819,401.129,311.475z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 28" focusable="false">
      <path d="M14 4.8a9 9 0 0 0-7.6 13.8l-1 4 4.1-1A9 9 0 1 0 14 4.8Z" />
      <path d="M10.6 10.3c.2-.4.5-.5.8-.5h.5c.3 0 .5.2.6.4l.8 1.8c.1.3.1.6-.1.8l-.5.5c.7 1.4 1.8 2.4 3.2 3.2l.6-.6c.2-.2.5-.2.8-.1l1.7.8c.3.1.5.4.5.7v.5c0 .4-.2.7-.5.9-1 .8-2.6.6-4.4-.3a10.9 10.9 0 0 1-5-5c-.8-1.8-1-3.3-.3-4.3.2-.4.5-.6.9-.8Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="m3.5 11 8.5-7 8.5 7" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M9.5 20v-5.5h5V20" />
    </svg>
  );
}

function OfferIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M6.5 5.5h11l2 4.2V18a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V9.7l2-4.2Z" />
      <path d="M4.5 9.7h15" />
      <path d="M9 13.5h6" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M5 7.5h14a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12" />
      <path d="M16.5 14h4.5" />
      <path d="M7 11h5" />
    </svg>
  );
}

function RealizationsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
      <path d="m7 16 3.2-3.2 2.1 2.1 2.6-2.6L18 16" />
      <path d="M8.5 9.5h.01" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M7 5.5h4l1 4-2.1 1.3a10.5 10.5 0 0 0 4.3 4.3L15.5 13l4 1v4a2 2 0 0 1-2.2 2A15.3 15.3 0 0 1 4 6.7a2 2 0 0 1 2-2.2h1Z" />
    </svg>
  );
}

function SolutionsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M4.5 4.5h6v6h-6zM13.5 4.5h6v6h-6zM4.5 13.5h6v6h-6zM13.5 13.5h6v6h-6z" />
    </svg>
  );
}

function FaqIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H9l-4 3v-3H5a1.5 1.5 0 0 1-1.5-1.5V7A1.5 1.5 0 0 1 5 5.5Z" />
      <path d="M9.7 9.6a2.3 2.3 0 0 1 3.8 1.7c0 1.4-1.8 1.6-1.8 2.8" />
      <path d="M11.6 16h.01" />
    </svg>
  );
}

// Mobilne menu używa tych samych pozycji co desktop (navigation),
// dokłada tylko ikonę dopasowaną po href — dzięki temu pozycje się nie rozjeżdżają.
const navIcons: Record<string, ReactNode> = {
  "/": <HomeIcon />,
  "/sufity-napinane": <OfferIcon />,
  "/rozwiazania": <SolutionsIcon />,
  "/ceny": <PriceIcon />,
  "/realizacje": <RealizationsIcon />,
  "/faq": <FaqIcon />,
  "/kontakt": <ContactIcon />
};

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    const animationFrame = window.requestAnimationFrame(onScroll);
    const restoreCheck = window.setTimeout(onScroll, 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pageshow", onScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(restoreCheck);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pageshow", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header className={`header ${isScrolled ? "headerScrolled" : ""}`}>
      <div className="container headerInner">
        <Link className="brand" href="/" aria-label="EkoSufity - strona główna">
          <span className="brandMark" aria-hidden="true">
            E
          </span>
          <span className="brandText">
            <span className="brandName">ekoSufity</span>
            <span className="brandSub">Sufity napinane</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Główna nawigacja">
          {navigation
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                className={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "navActive" : ""}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="headerActions">
          <Link className="phoneTop" href={siteConfig.contacts.phoneHref} aria-label="Zadzwoń do EkoSufity">
            <span className="phoneGlyph" aria-hidden="true">
              <PhoneIcon />
            </span>
            {siteConfig.contacts.phoneDisplay}
          </Link>
          <Link className="whatsappTop" href={whatsappUrl()} aria-label="Napisz do EkoSufity na WhatsApp">
            <span className="waRing" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none">
                <circle
                  cx="50"
                  cy="50"
                  r="43.5"
                  pathLength="100"
                  stroke="#128C4A"
                  strokeWidth="3"
                  strokeDasharray="18.333 15"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="waCore" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="#fff">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.01c-.24.68-1.42 1.31-1.96 1.36-.5.05-1.14.07-1.84-.12-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.23-5-4.43-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .39 0 .57.01.18.01.43-.07.67.51.24.59.83 2.04.9 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.07 1.31 2.37 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.73-.17 1.41z" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="mobileMenu">
          <Link className="mobilePhone" href={siteConfig.contacts.phoneHref} aria-label="Zadzwoń">
            <PhoneIcon />
          </Link>
          <button
            className="mobileMenuButton"
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          {isOpen ? (
            <>
              <button
                className="mobileMenuScrim"
                type="button"
                aria-label="Zamknij menu"
                onClick={() => setIsOpen(false)}
              />
              <div className="mobileMenuPanel" role="dialog" aria-modal="true" aria-label="Menu mobilne">
                <div className="mobileMenuPanelTop">
                  <Link className="mobileMenuBrand" href="/" onClick={() => setIsOpen(false)}>
                    <span className="mobileMenuBrandName">
                      ek<span>o</span>Sufity
                    </span>
                    <span className="mobileMenuBrandSub">Napinane</span>
                  </Link>
                  <button
                    className="mobileMenuClose"
                    type="button"
                    aria-label="Zamknij menu"
                    onClick={() => setIsOpen(false)}
                  >
                    <CloseIcon />
                  </button>
                </div>

                <nav className="mobileMenuNav" aria-label="Nawigacja mobilna">
                  {navigation.map((item) => {
                    const isActive =
                      pathname === item.href || pathname.startsWith(`${item.href}/`);

                    return (
                      <Link
                        key={item.href}
                        className={isActive ? "mobileMenuNavActive" : undefined}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="mobileMenuNavIcon">{navIcons[item.href]}</span>
                        <span>{item.href === "/" ? "Główna" : item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mobileMenuContact">
                  <Link
                    className="mobileMenuPhoneLink"
                    href={siteConfig.contacts.phoneHref}
                    onClick={() => setIsOpen(false)}
                  >
                    <PhoneIcon />
                    <span>{siteConfig.contacts.phoneDisplay}</span>
                  </Link>
                  <Link className="mobileMenuWhatsappLink" href={whatsappUrl()} onClick={() => setIsOpen(false)}>
                    <WhatsAppIcon />
                    <span>Napisz na WhatsApp</span>
                  </Link>
                </div>

                <div className="mobileMenuSocial">
                  <p>Znajdź nas w social media</p>
                  <div className="mobileMenuSocialList">
                    {socialLinks.map((item) => (
                      <Link
                        key={item.href}
                        className="mobileMenuSocialLink"
                        href={item.href}
                        aria-label={`${item.label} ekoSufity`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                      >
                        <img src={item.iconSrc} alt="" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
