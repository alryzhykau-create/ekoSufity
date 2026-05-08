import { ArrowRight } from "lucide-react";

const steps = [
  ["Kontakt i pomiar", "Umawiamy termin i przyjeżdżamy na miejsce."],
  ["Wycena", "Dobieramy materiał i przedstawiamy koszt."],
  ["Montaż", "W większości przypadków wykonujemy w 1 dzień."],
  ["Gotowy efekt", "Otrzymujesz gotowy sufit i gwarancję."],
];

export function ProcessSection() {
  return (
    <section className="section-pad bg-white/45">
      <div className="mx-auto w-full max-w-[90rem] px-5 lg:px-8">
        <p className="px-5 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-muted lg:px-8">
          Jak wygląda współpraca
        </p>
        <div className="mt-8 rounded-[28px] border border-line/70 bg-white px-4 py-6 shadow-card md:px-6 md:py-8 lg:px-7">
          <div className="grid gap-6 md:grid-cols-4 md:gap-0">
            {steps.map(([title, text], index) => (
              <div key={title} className="relative flex items-start gap-4 md:px-5 lg:px-7">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 text-2xl font-black text-ink">
                  {index + 1}
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="text-xl font-extrabold leading-tight">{title}</h3>
                  <p className="mt-2 max-w-[18rem] leading-7 text-muted">{text}</p>
                </div>
                {index < steps.length - 1 ? (
                  <>
                    <div className="absolute -bottom-3 left-0 right-0 h-px bg-line md:hidden" />
                    <ArrowRight
                      className="absolute right-0 top-6 hidden h-8 w-8 translate-x-1/2 text-charcoal/45 md:block"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

