import { CardGrid } from "@/components/CardGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { Image, Layers3, Lightbulb, PanelTop, Sparkles, Waves } from "lucide-react";

const ceilingTypes = [
  {
    title: "Sufity matowe",
    text: "Najbardziej uniwersalne wykończenie do mieszkań, domów i lokali usługowych.",
    icon: PanelTop,
  },
  {
    title: "Sufity satynowe",
    text: "Delikatny połysk i miękkie odbicie światła bez efektu lustra.",
    icon: Waves,
  },
  {
    title: "Sufity błyszczące",
    text: "Efekt głębi, który optycznie powiększa pomieszczenie.",
    icon: Sparkles,
  },
  {
    title: "Sufity z oświetleniem",
    text: "Linie LED, punkty świetlne i podświetlenie dopasowane do układu wnętrza.",
    icon: Lightbulb,
  },
  {
    title: "Sufity z nadrukiem",
    text: "Indywidualny nadruk do łazienki, pokoju dziecka, lokalu lub strefy relaksu.",
    icon: Image,
  },
  {
    title: "Sufity wielopoziomowe",
    text: "Nowoczesne konstrukcje z poziomami, światłem i wyraźnym podziałem stref.",
    icon: Layers3,
  },
];

export function CeilingTypesSection() {
  return (
    <section id="rodzaje-sufitow" className="section-pad scroll-mt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Rodzaje sufitów"
          title="Dobierz sufit do stylu wnętrza"
          description="Pracujemy z różnymi wykończeniami i konstrukcjami, dlatego możemy dopasować efekt do salonu, kuchni, łazienki, biura lub lokalu usługowego."
        />
        <CardGrid className="mt-10" columns={3}>
          {ceilingTypes.map((item) => (
            <article key={item.title} className="rounded-lg bg-white p-6 shadow-card">
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
