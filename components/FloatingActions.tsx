import { Calculator, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałbym zapytać o sufit napinany i umówić bezpłatny pomiar."
);

export function WhatsAppButton() {
  return (
    <a
      className="fixed right-7 top-[calc(50%+0.5rem)] z-40 hidden h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg md:flex"
      href={`https://wa.me/48791085385?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Napisz do EkoSufity na WhatsApp"
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}

export function PhoneButton() {
  return (
    <a
      className="fixed right-7 top-[calc(50%-3.25rem)] z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-white/95 text-ink shadow-soft backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-gold hover:text-gold-dark md:flex"
      href={siteConfig.phoneHref}
      aria-label={`Zadzwoń pod numer ${siteConfig.phone}`}
    >
      <Phone size={20} className="fill-current text-gold-dark" fill="currentColor" aria-hidden="true" />
      <span className="sr-only">{siteConfig.phone}</span>
    </a>
  );
}

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-white/95 px-3 pb-3 pt-2 shadow-[0_-12px_30px_rgba(13,13,13,0.08)] backdrop-blur-xl md:hidden">
      <a
        className="flex h-12 flex-col items-center justify-center gap-1 rounded-lg px-2 text-base font-medium leading-none text-ink"
        href="tel:+48791085385"
        aria-label="Zadzwoń do EkoSufity"
      >
        <Phone size={19} aria-hidden="true" />
        Zadzwoń
      </a>
      <a
        className="flex h-12 flex-col items-center justify-center gap-1 rounded-lg px-2 text-base font-medium leading-none text-ink"
        href={`https://wa.me/48791085385?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Napisz na WhatsApp"
      >
        <MessageCircle size={19} aria-hidden="true" />
        WhatsApp
      </a>
      <a
        className="flex h-12 flex-col items-center justify-center gap-1 rounded-lg bg-charcoal px-2 text-base font-medium leading-none text-white"
        href="/ceny#calculator"
        aria-label="Przejdź do kalkulatora wyceny"
      >
        <Calculator size={19} aria-hidden="true" />
        Wycena
      </a>
    </div>
  );
}
