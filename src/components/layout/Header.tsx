"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/navigation";
import { siteConfig, whatsappUrl } from "@/content/site";

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
            {isOpen ? "×" : "Menu"}
          </button>
          {isOpen ? (
            <div className="mobileMenuPanel">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link href={siteConfig.contacts.phoneHref}>{siteConfig.contacts.phoneDisplay}</Link>
              <Link href={whatsappUrl()}>WhatsApp</Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
