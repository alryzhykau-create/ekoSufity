"use client";

import { CardGrid } from "@/components/CardGrid";
import { LocationCard } from "@/components/LocationCard";
import { filterLocations, locationFilterOptions, type LocationFilterValue, type LocationItem } from "@/lib/locations";
import { useMemo, useState } from "react";

export function LocationFilters({ locations }: { locations: LocationItem[] }) {
  const [filter, setFilter] = useState<LocationFilterValue>("all");
  const filteredLocations = useMemo(() => filterLocations(filter), [filter]);

  return (
    <div>
      <div className="md:hidden">
        <label className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted" htmlFor="location-filter">
          Filtr lokalizacji
        </label>
        <select
          id="location-filter"
          className="mt-3 h-12 w-full rounded-lg border border-line bg-white px-4 font-bold text-ink outline-none transition focus:border-gold"
          value={filter}
          onChange={(event) => setFilter(event.target.value as LocationFilterValue)}
        >
          {locationFilterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="-mx-5 mt-6 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-0 md:overflow-visible md:px-0">
        <div className="hidden min-w-max gap-2 md:flex md:flex-wrap">
          {locationFilterOptions.map((option) => {
            const active = filter === option.value;

            return (
              <button
                key={option.value}
                className={`h-11 rounded-lg border px-4 text-sm font-bold transition ${
                  active
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-line bg-white text-ink hover:border-gold hover:text-gold-dark"
                }`}
                type="button"
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-5 text-sm font-bold text-muted">
        Pokazujemy {filteredLocations.length} z {locations.length} lokalizacji.
      </p>

      <CardGrid className="mt-8" columns={3}>
        {filteredLocations.map((location) => (
          <LocationCard key={location.slug} location={location} />
        ))}
      </CardGrid>
    </div>
  );
}
