import { Calculator, MessageCircle, Phone } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałbym zapytać o sufit napinany i umówić bezpłatny pomiar."
);

export function WhatsAppButton() {
  return (
    <a
      className="fixed bottom-7 right-7 z-40 hidden items-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg md:flex"
      href={`https://wa.me/48791085385?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Napisz do EkoSufity na WhatsApp"
    >
      <MessageCircle size={22} aria-hidden="true" />
      WhatsApp
    </a>
  );
}

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-white/95 px-3 pb-3 pt-2 shadow-[0_-12px_30px_rgba(13,13,13,0.08)] backdrop-blur-xl md:hidden">
      <a
        className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-xs font-extrabold text-ink"
        href="tel:+48791085385"
        aria-label="Zadzwoń do EkoSufity"
      >
        <Phone size={19} aria-hidden="true" />
        Zadzwoń
      </a>
      <a
        className="flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-xs font-extrabold text-ink"
        href={`https://wa.me/48791085385?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Napisz na WhatsApp"
      >
        <MessageCircle size={19} aria-hidden="true" />
        WhatsApp
      </a>
      <a
        className="flex flex-col items-center justify-center gap-1 rounded-xl bg-charcoal px-2 py-2 text-xs font-extrabold text-white"
        href="#calculator"
        aria-label="Przejdź do kalkulatora wyceny"
      >
        <Calculator size={19} aria-hidden="true" />
        Wycena
      </a>
    </div>
  );
}
