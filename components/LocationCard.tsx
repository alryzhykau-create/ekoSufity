import { ArrowRight, MapPin } from "lucide-react";
import type { LocationItem } from "@/lib/locations";

export function LocationCard({ location }: { location: LocationItem }) {
  const distanceLabel =
    location.distanceFromWroclawKm === 0
      ? "Wrocław"
      : `${location.distanceFromWroclawKm} km od Wrocławia`;

  return (
    <article className="flex h-full flex-col rounded-lg bg-white p-6 shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-porcelain text-gold-dark">
        <MapPin size={22} aria-hidden="true" />
      </div>
      <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.16em] text-gold-dark">
        {location.type === "district" || location.type === "neighborhood" ? "Wrocław" : distanceLabel}
      </p>
      <h2 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{location.name}</h2>
      <p className="mt-3 line-clamp-4 leading-7 text-muted">{location.introText}</p>
      <div className="mt-5 rounded-lg bg-porcelain p-4">
        <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
          Popularne
        </p>
        <p className="mt-2 font-bold leading-7 text-ink">
          {location.popularSolutions.slice(0, 3).join(", ")}
        </p>
      </div>
      <a
        className="mt-auto inline-flex h-11 items-center gap-2 pt-6 text-base font-medium leading-none text-gold-dark transition hover:text-ink"
        href={`/lokalizacje/${location.slug}`}
      >
        Zobacz ofertę lokalną
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </article>
  );
}
