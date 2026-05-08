import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import { Calculator, CalendarCheck, MessageCircle } from "lucide-react";

export function CTASection({
  eyebrow = "Bezpłatny pomiar",
  title = "Chcesz sprawdzić, ile będzie kosztował Twój sufit?",
  description = "Napisz na WhatsApp albo zostaw kontakt. Doradzimy rozwiązanie, potwierdzimy termin pomiaru i przygotujemy dokładną wycenę.",
  primaryLabel = "Napisz na WhatsApp",
  secondaryLabel = "Umów pomiar",
  secondaryHref = "#kontakt",
  showCalculatorLink = true,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showCalculatorLink?: boolean;
}) {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-lg bg-charcoal px-6 py-9 text-white shadow-soft md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              tone="dark"
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gold px-6 text-base font-medium leading-none text-white transition hover:bg-gold-dark"
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Napisz na WhatsApp"
              >
                <MessageCircle size={20} aria-hidden="true" />
                {primaryLabel}
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
                href={secondaryHref}
                aria-label="Umów bezpłatny pomiar"
              >
                <CalendarCheck size={20} aria-hidden="true" />
                {secondaryLabel}
              </a>
              {showCalculatorLink ? (
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-6 text-base font-medium leading-none text-white transition hover:border-gold hover:text-gold"
                  href="/ceny#calculator"
                  aria-label="Sprawdź ceny"
                >
                  <Calculator size={20} aria-hidden="true" />
                  Sprawdź ceny
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
