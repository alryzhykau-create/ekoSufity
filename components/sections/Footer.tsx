import { CalendarCheck, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-28 pt-10 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.15fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-gold text-lg font-black text-gold-dark">
              E
            </span>
            <span className="text-xl font-extrabold">EkoSufity</span>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-muted">
            Sufity napinane premium we Wrocławiu i okolicach do 100 km.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-charcoal px-5 text-base font-medium leading-none text-white transition hover:bg-black"
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Napisz do EkoSufity na WhatsApp"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Napisz na WhatsApp
            </a>
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-charcoal/20 bg-white px-5 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
              href="/kontakt"
              aria-label="Umów bezpłatny pomiar"
            >
              <CalendarCheck size={19} aria-hidden="true" />
              Bezpłatny pomiar
            </a>
          </div>
        </div>
        <div className="space-y-3 text-muted">
          <p className="flex gap-3">
            <MapPin className="h-5 w-5 text-gold-dark" aria-hidden="true" />
            {siteConfig.streetAddress}, {siteConfig.postalCode} {siteConfig.city}
          </p>
          <p className="flex gap-3">
            <Mail className="h-5 w-5 text-gold-dark" aria-hidden="true" />
            {siteConfig.email}
          </p>
          <p className="flex gap-3">
            <Phone className="h-5 w-5 text-gold-dark" aria-hidden="true" />
            {siteConfig.phone}
          </p>
          <p className="flex gap-3">
            <Clock3 className="h-5 w-5 text-gold-dark" aria-hidden="true" />
            pon.-pt. 9:00-20:00
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 font-bold text-muted" aria-label="Linki w stopce">
          <a className="transition hover:text-gold-dark" href="/o-sufitach">O sufitach</a>
          <a className="transition hover:text-gold-dark" href="/rodzaje-sufitow">Rodzaje</a>
          <a className="transition hover:text-gold-dark" href="/rozwiazania">Rozwiązania</a>
          <a className="transition hover:text-gold-dark" href="/ceny">Ceny</a>
          <a className="transition hover:text-gold-dark" href="/realizacje">Realizacje</a>
          <a className="transition hover:text-gold-dark" href="/lokalizacje">Lokalizacje</a>
          <a className="transition hover:text-gold-dark" href="/faq">FAQ</a>
          <a className="transition hover:text-gold-dark" href="/kontakt">Kontakt</a>
          <a className="transition hover:text-gold-dark" href="/polityka-prywatnosci">Prywatność</a>
        </nav>
      </div>
    </footer>
  );
}
