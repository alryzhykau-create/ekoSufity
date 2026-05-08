import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { BadgeCheck, Layers3, Lightbulb, ScanLine, SquareStack, Wind } from "lucide-react";

const solutions = [
  {
    title: "Oświetlenie",
    text: "Plan światła dobieramy razem z sufitem, aby uniknąć przypadkowych punktów i kabli.",
    icon: Lightbulb,
  },
  {
    title: "Profile i połączenia",
    text: "Dobieramy profile pod ściany, wnęki, zabudowy i przejścia między materiałami.",
    icon: SquareStack,
  },
  {
    title: "Wentylacja",
    text: "Uwzględniamy kratki, nawiewy i elementy techniczne bez psucia estetyki sufitu.",
    icon: Wind,
  },
  {
    title: "Luki rewizyjne",
    text: "Projektujemy dostęp do instalacji tam, gdzie trzeba zachować serwisowalność.",
    icon: ScanLine,
  },
  {
    title: "Poziomy i konstrukcje",
    text: "Tworzymy proste podziały, obniżenia i wielopoziomowe kompozycje ze światłem.",
    icon: Layers3,
  },
];

export function SolutionsSection() {
  return (
    <section id="rozwiazania" className="section-pad scroll-mt-28 bg-white/45">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Rozwiązania"
              title="Techniczne detale, które robią różnicę"
              description="Sufit napinany to nie tylko membrana. Ważne są profile, dostęp do instalacji, wentylacja, światło i sposób połączenia z resztą wnętrza."
            />
            <a
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black"
              href="#kontakt"
              aria-label="Zamów konsultację techniczną"
            >
              <BadgeCheck size={19} aria-hidden="true" />
              Zamów konsultację
            </a>
          </div>
          <CardGrid columns={2}>
            {solutions.map((item) => (
              <article key={item.title} className="rounded-lg bg-white p-6 shadow-card">
                <item.icon className="h-10 w-10 text-gold-dark" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-extrabold leading-tight text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </CardGrid>
        </div>
      </div>
    </section>
  );
}
