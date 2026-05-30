"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/navigation";
import { siteConfig, socialLinks, whatsappUrl } from "@/content/site";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M7.04 3.65 9.2 2.56c1.05-.52 2.34-.1 2.86.95l1.18 2.36c.4.81.25 1.78-.39 2.42l-.98.98a10.02 10.02 0 0 0 3.86 3.86l.98-.98c.64-.64 1.61-.8 2.42-.39l2.36 1.18c1.05.52 1.47 1.81.95 2.86l-1.09 2.16c-.58 1.16-1.85 1.82-3.13 1.58C10.92 18.18 5.82 13.08 4.46 5.78 4.22 4.5 4.88 3.23 6.04 2.65Z"
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

function ReviewsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M12 4.5 14.2 9l4.9.7-3.6 3.5.9 4.9-4.4-2.3-4.4 2.3.9-4.9L4.9 9.7 9.8 9 12 4.5Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M5 20a7 7 0 0 1 14 0" />
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

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="m8 10 4 4 4-4" />
    </svg>
  );
}

type MobileNavigationItem = {
  label: string;
  href: string;
  icon: ReactNode;
  hasChevron?: boolean;
  external?: boolean;
};

const mobileNavigation: MobileNavigationItem[] = [
  { label: "Strona główna", href: "/", icon: <HomeIcon /> },
  { label: "Oferta", href: "/sufity-napinane", icon: <OfferIcon />, hasChevron: true },
  { label: "Ceny", href: "/ceny", icon: <PriceIcon /> },
  { label: "Realizacje", href: "/realizacje", icon: <RealizationsIcon /> },
  {
    label: "Opinie",
    href: siteConfig.contacts.googleBusinessProfileHref,
    icon: <ReviewsIcon />,
    external: true
  },
  { label: "O nas", href: "/o-firmie", icon: <UserIcon /> },
  { label: "Kontakt", href: "/kontakt", icon: <ContactIcon /> }
];

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
          {navigation.map((item) => (
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
            <WhatsAppIcon />
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
                  {mobileNavigation.map((item) => {
                    const isActive =
                      !item.external && (pathname === item.href || pathname.startsWith(`${item.href}/`));

                    return (
                      <Link
                        key={item.href}
                        className={isActive ? "mobileMenuNavActive" : undefined}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="mobileMenuNavIcon">{item.icon}</span>
                        <span>{item.label}</span>
                        {item.hasChevron ? (
                          <span className="mobileMenuChevron">
                            <ChevronIcon />
                          </span>
                        ) : null}
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
