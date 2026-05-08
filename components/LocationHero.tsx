import type { LocationItem } from "@/lib/locations";
import { MapPin, MessageCircle } from "lucide-react";

export function LocationHero({ location }: { location: LocationItem }) {
  const whatsappText = encodeURIComponent(
    `Dzień dobry, proszę o wycenę sufitu napinanego w lokalizacji ${location.name}.`
  );

  return (
    <section className="pb-12 pt-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
            Lokalizacja
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
            {location.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{location.introText}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center rounded-lg bg-charcoal px-6 text-base font-medium leading-none text-white transition hover:bg-black"
              href="/kontakt"
            >
              Zapytaj o wycenę
            </a>
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
              href={`https://wa.me/48791085385?text=${whatsappText}`}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Napisz na WhatsApp
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-6 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
              href="/ceny"
            >
              Sprawdź ceny
            </a>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-card md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-porcelain text-gold-dark">
              <MapPin size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-gold-dark">
                Obszar działania
              </p>
              <p className="mt-1 text-xl font-extrabold text-ink">
                {location.distanceFromWroclawKm === 0
                  ? "Wrocław"
                  : `${location.distanceFromWroclawKm} km od Wrocławia`}
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            {location.localBenefits.map((benefit) => (
              <p key={benefit} className="leading-7 text-muted">
                {benefit}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
