import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { CircleDot, Lightbulb, Minus, Orbit, PanelTop, Rows3 } from "lucide-react";

const lightingOptions = [
  {
    title: "Linie LED",
    text: "Równe linie świetlne w suficie, przy ścianie lub jako główny akcent wnętrza.",
    icon: Minus,
  },
  {
    title: "Punkty świetlne",
    text: "Praktyczne światło punktowe do kuchni, łazienki, korytarza i garderoby.",
    icon: CircleDot,
  },
  {
    title: "Szyny magnetyczne",
    text: "Nowoczesny system oświetlenia z możliwością zmiany położenia opraw.",
    icon: Rows3,
  },
  {
    title: "Taśmy LED",
    text: "Dyskretne podświetlenie wnęk, krawędzi, poziomów i elementów dekoracyjnych.",
    icon: Lightbulb,
  },
  {
    title: "Oprawy wpuszczane",
    text: "Czysty, minimalistyczny efekt bez widocznych przewodów i przypadkowych ramek.",
    icon: PanelTop,
  },
  {
    title: "Podświetlenie obwodowe",
    text: "Miękkie światło przy ścianach, które podkreśla geometrię pomieszczenia.",
    icon: Orbit,
  },
];

export function LightingSection() {
  return (
    <section id="oswietlenie" className="section-pad scroll-mt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Oświetlenie"
          title="Światło zaplanowane razem z sufitem"
          description="Dobieramy oświetlenie tak, aby było praktyczne na co dzień i spójne z charakterem wnętrza. Bez nadmiaru efektów, za to z czystym montażem."
          align="center"
        />
        <CardGrid className="mt-10" columns={3}>
          {lightingOptions.map((item) => (
            <article key={item.title} className="rounded-lg border border-line/70 bg-white p-6 shadow-card">
              <item.icon className="h-10 w-10 text-gold-dark" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-extrabold leading-tight text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
