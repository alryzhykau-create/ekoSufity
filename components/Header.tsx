"use client";

import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Strona główna", href: "/", activePath: "/" },
  { label: "O sufitach", href: "/o-sufitach", activePath: "/o-sufitach" },
  { label: "Rodzaje sufitów", href: "/rodzaje-sufitow", activePath: "/rodzaje-sufitow" },
  { label: "Rozwiązania", href: "/rozwiazania", activePath: "/rozwiazania" },
  { label: "Ceny", href: "/ceny", activePath: "/ceny" },
  { label: "Realizacje", href: "/realizacje", activePath: "/realizacje" },
  { label: "Lokalizacje", href: "/lokalizacje", activePath: "/lokalizacje" },
  { label: "FAQ", href: "/faq", activePath: "/faq" },
  { label: "Kontakt", href: "/kontakt", activePath: "/kontakt" },
];

export function MobileMenu({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) {
  return (
    <nav className="border-t border-line bg-white px-5 py-4 lg:hidden" aria-label="Menu mobilne">
      <div className="mx-auto grid max-w-7xl gap-2">
        {navItems.map((item) => {
          const isActive = item.activePath ? pathname === item.activePath || pathname.startsWith(`${item.activePath}/`) : false;

          return (
            <a
              key={item.href}
              className={[
                "rounded-lg px-4 py-3 font-medium transition hover:bg-porcelain",
                isActive ? "bg-porcelain text-gold-dark" : "text-ink",
              ].join(" ")}
              href={item.href}
              onClick={onClose}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        isScrolled
          ? "border-b border-white/20 bg-white/85 shadow-[0_4px_18px_rgba(15,15,15,0.04)] backdrop-blur-sm"
          : "bg-transparent shadow-none backdrop-blur-none",
      ].join(" ")}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:pr-8 lg:pl-0">
        <a className="flex items-center gap-3" href="/" aria-label="EkoSufity strona główna">
          <span
            className={[
              "flex h-9 w-9 items-center justify-center rounded-lg border-2 border-gold text-lg font-bold text-gold-dark shadow-sm transition duration-300",
              isScrolled ? "bg-white/62 backdrop-blur-sm" : "bg-white/62 backdrop-blur-sm",
            ].join(" ")}
          >
            E
          </span>
          <span
            className="text-xl font-semibold tracking-tight text-[#161616]"
          >
            EkoSufity
          </span>
        </a>

        <nav
          className="hidden items-center gap-3 text-[13px] font-semibold leading-none lg:flex xl:gap-5"
          aria-label="Główna nawigacja"
        >
          {navItems.map((item) => {
            const isActive = item.activePath ? pathname === item.activePath || pathname.startsWith(`${item.activePath}/`) : false;

            return (
              <a
                key={item.href}
                className={[
                  "transition",
                  isActive ? "text-gold-dark" : "text-[#161616] hover:text-gold-dark",
                ].join(" ")}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className={[
              "hidden h-12 items-center gap-2 rounded-lg border border-gold/35 px-5 text-base font-medium leading-none shadow-sm transition duration-300 hover:border-gold hover:bg-porcelain md:flex",
              isScrolled ? "bg-white/88 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm",
            ].join(" ")}
            href="tel:+48791085385"
            aria-label="Zadzwoń pod numer +48 791 085 385"
          >
            <Phone
              size={18}
              className="fill-current text-gold-dark"
              fill="currentColor"
              aria-hidden="true"
            />
            +48 791 085 385
          </a>
          <a
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-white text-ink md:hidden"
            href="tel:+48791085385"
            aria-label="Zadzwoń"
          >
            <Phone
              size={19}
              className="fill-current text-gold-dark"
              fill="currentColor"
              aria-hidden="true"
            />
          </a>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-white text-ink lg:hidden"
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <MobileMenu pathname={pathname} onClose={() => setIsOpen(false)} />
      ) : null}
    </header>
  );
}
