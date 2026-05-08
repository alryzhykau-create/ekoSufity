import { Clock3, MapPin, Ruler, ShieldCheck, Wrench } from "lucide-react";

const alexImage =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fm=webp&fit=crop&w=900&q=85";

const benefits = [
  {
    title: "Bezpłatny pomiar",
    text: "Przyjeżdżamy na miejsce, wykonujemy pomiar i doradzamy najlepsze rozwiązanie.",
    icon: Ruler,
  },
  {
    title: "Montaż w 1 dzień",
    text: "90% standardowych realizacji wykonujemy w ciągu jednego dnia.",
    icon: Clock3,
  },
  {
    title: "Bez kurzu i remontu",
    text: "Montaż bez szpachlowania, malowania i bałaganu. Czysto, szybko i wygodnie.",
    icon: Wrench,
  },
  {
    title: "Gwarancja jakości",
    text: "Stosujemy sprawdzone materiały i dajemy pisemną gwarancję na nasze usługi.",
    icon: ShieldCheck,
  },
];

export function ServicesSection() {
  return (
    <>
      <section id="o-sufitach" className="scroll-mt-28 lg:relative lg:z-20 lg:-mt-20">
        <span id="benefits" className="sr-only scroll-mt-28">
          Dlaczego warto wybrać sufity napinane
        </span>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-[1216px] overflow-hidden rounded-lg bg-white shadow-[0_14px_34px_rgba(17,24,39,0.06),0_2px_8px_rgba(17,24,39,0.03)] lg:grid lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="relative flex items-start gap-4 border-b border-line px-6 py-3.5 last:border-b-0 lg:min-h-[104px] lg:border-b-0 lg:px-7 lg:py-4"
              >
                <benefit.icon
                  className="mt-0.5 h-11 w-11 shrink-0 text-gold-dark lg:h-12 lg:w-12"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-[15px] font-extrabold leading-[1.2] text-ink lg:text-[16px]">
                    {benefit.title}
                  </h2>
                  <p className="mt-2 max-w-[220px] text-[12px] leading-[1.65] text-muted">
                    {benefit.text}
                  </p>
                </div>
                {index < benefits.length - 1 ? (
                  <span
                    className="pointer-events-none absolute right-0 top-1/2 hidden h-[72px] w-px -translate-y-1/2 bg-line lg:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="alex" className="scroll-mt-28 pb-12 pt-4 lg:pb-16 lg:pt-6">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="w-full overflow-hidden rounded-lg bg-white shadow-[0_14px_34px_rgba(17,24,39,0.055),0_2px_8px_rgba(17,24,39,0.035)]">
            <div className="grid lg:grid-cols-[0.52fr_0.48fr]">
              <div className="grid border-b border-line/70 p-3 lg:grid-cols-[248px_1fr] lg:border-b-0 lg:border-r">
                <div className="overflow-hidden rounded-lg">
                  <img
                    className="aspect-square w-full rounded-lg object-cover object-center"
                    src={alexImage}
                    alt="Alex, specjalista od sufitów napinanych"
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={900}
                  />
                </div>

                <div className="flex h-full flex-col justify-center px-6 py-4 lg:px-8 lg:py-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
                    Kto odpowiada za jakość?
                  </p>
                  <h2 className="mt-3 text-[1.55rem] font-extrabold leading-[1.14] text-ink md:text-[1.65rem]">
                    Nazywam się Alex i zajmuję się sufitami napinanymi.
                  </h2>
                  <p className="mt-5 text-[13px] leading-6 text-muted">
                    Osobiście nadzoruję realizacje, pomagam dobrać najlepsze rozwiązanie i dbam
                    o każdy detal wykonania. Dla mnie najważniejszy jest efekt końcowy i
                    zadowolenie klienta.
                  </p>
                  <div className="mt-5">
                    <p className="text-[2.7rem] italic leading-none text-gold-dark [font-family:'Snell_Roundhand',cursive]">
                      Alex
                    </p>
                    <p className="mt-1.5 text-[13px] font-semibold text-muted">
                      Specjalista od sufitów napinanych
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-[0.96fr_1.04fr]">
                <div className="flex h-full flex-col justify-center border-b border-line/70 px-7 py-6 lg:border-b-0 lg:px-9 lg:py-7">
                  <p className="text-[13px] font-extrabold uppercase leading-5 tracking-[0.08em] text-ink">
                    Działamy we Wrocławiu i w promieniu do 100 km
                  </p>
                  <p className="mt-5 text-[13px] leading-6 text-muted">
                    Obsługujemy Wrocław oraz okoliczne miasta: Legnica, Wałbrzych, Świdnica,
                    Oława, Oleśnica, Lubin, Brzeg, Dzierżoniów i inne.
                  </p>
                  <p className="mt-3 text-[13px] font-bold leading-6 text-ink">
                    Dojazd do 100 km - bez dodatkowych kosztów.
                  </p>
                  <a
                    className="mt-7 inline-flex h-11 w-full max-w-[220px] items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-[13px] font-semibold leading-none text-ink transition hover:border-gold hover:text-gold-dark"
                    href="#kontakt"
                    aria-label="Sprawdź dostępność"
                  >
                    Sprawdź dostępność
                  </a>
                </div>

                <div className="relative flex items-center justify-center overflow-hidden px-5 py-5 lg:px-6">
                  <img
                    className="aspect-square w-full max-w-[250px] object-contain opacity-95 mix-blend-multiply"
                    src="/images/wroclaw-radius-map.jpg"
                    alt="Mapa Wrocławia i promienia dojazdu 100 km"
                    loading="lazy"
                    decoding="async"
                    width={420}
                    height={420}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
