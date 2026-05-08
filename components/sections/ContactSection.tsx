import { ContactForm } from "@/components/ContactForm";
import { Clock3 } from "lucide-react";

export function ContactSection() {
  return (
    <section id="kontakt" className="section-pad scroll-mt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 rounded-lg bg-charcoal p-6 text-white shadow-soft md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">
              Kontakt
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Umów bezpłatny pomiar sufitu
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Zostaw kontakt - oddzwonimy, doradzimy rozwiązanie i przygotujemy dokładną wycenę.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-white/70">
              <Clock3 size={16} className="text-gold" aria-hidden="true" />
              Oddzwonimy w ciągu 15 minut.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

