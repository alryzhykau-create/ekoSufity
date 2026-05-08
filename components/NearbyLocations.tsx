import { CardGrid } from "@/components/CardGrid";
import { LocationCard } from "@/components/LocationCard";
import { SectionHeading } from "@/components/SectionHeading";
import type { LocationItem } from "@/lib/locations";

export function NearbyLocations({ locations }: { locations: LocationItem[] }) {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Inne lokalizacje" title="Sprawdź też pobliskie lokalizacje" />
        <CardGrid className="mt-10" columns={3}>
          {locations.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
