"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Strona główna", href: "#home" },
  { label: "O nas", href: "#alex" },
  { label: "Rodzaje sufitów", href: "#benefits" },
  { label: "Cennik", href: "#cennik" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Opinie", href: "#opinie" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
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
          ? "border-b border-white/20 bg-white/20 shadow-[0_4px_18px_rgba(15,15,15,0.04)] backdrop-blur-sm"
          : "bg-transparent shadow-none backdrop-blur-none",
      ].join(" ")}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a className="flex items-center gap-3" href="#home" aria-label="EkoSufity strona główna">
          <span
            className={[
              "flex h-9 w-9 items-center justify-center rounded-xl border-2 border-gold text-lg font-black text-gold-dark shadow-sm transition duration-300",
              isScrolled ? "bg-white/62 backdrop-blur-sm" : "bg-white/62 backdrop-blur-sm",
            ].join(" ")}
          >
            E
          </span>
          <span
            className="text-xl font-extrabold tracking-tight text-[#161616]"
          >
            EkoSufity
          </span>
        </a>

        <nav className="hidden items-center gap-4 text-sm font-bold lg:flex xl:gap-7" aria-label="Główna nawigacja">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-[#161616] transition hover:text-gold-dark"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className={[
              "hidden items-center gap-2 rounded-lg border border-gold/35 px-5 py-3 font-extrabold shadow-sm transition duration-300 hover:border-gold hover:bg-porcelain md:flex",
              isScrolled ? "bg-white/88 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm",
            ].join(" ")}
            href="tel:+48791085385"
            aria-label="Zadzwoń pod numer +48 791 085 385"
          >
            <Phone size={18} className="text-red-500" aria-hidden="true" />
            +48 791 085 385
          </a>
          <a
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white text-ink md:hidden"
            href="tel:+48791085385"
            aria-label="Zadzwoń"
          >
            <Phone size={19} className="text-red-500" aria-hidden="true" />
          </a>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-ink lg:hidden"
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
        <nav className="border-t border-line bg-white px-5 py-4 lg:hidden" aria-label="Menu mobilne">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="rounded-xl px-4 py-3 font-bold transition hover:bg-porcelain"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
