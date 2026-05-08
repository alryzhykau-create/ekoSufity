import { SectionHeading } from "@/components/SectionHeading";
import { MapPin } from "lucide-react";

const locations = [
  "Wrocław",
  "Leśnica",
  "Krzyki",
  "Fabryczna",
  "Psie Pole",
  "Oleśnica",
  "Oława",
  "Świdnica",
  "Dzierżoniów",
  "Bielawa",
];

export function LocationsSection() {
  return (
    <section id="lokalizacje" className="section-pad scroll-mt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 rounded-lg bg-white p-6 shadow-card md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Lokalizacje"
              title="Montaż we Wrocławiu i okolicach"
              description="Dojeżdżamy do klientów we Wrocławiu oraz pobliskich miejscowościach. Przy wycenie potwierdzamy termin, zakres i dostępność ekipy."
            />
            <a
              className="mt-7 inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
              href="#kontakt"
              aria-label="Sprawdź termin w swojej lokalizacji"
            >
              Sprawdź termin
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {locations.map((location) => (
              <div
                key={location}
                className="flex items-center gap-3 rounded-lg border border-line/80 bg-porcelain/45 px-4 py-3 font-bold text-ink"
              >
                <MapPin className="h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                {location}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
