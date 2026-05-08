import type { CeilingType } from "@/lib/ceilingTypes";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CeilingTypeCard({ type }: { type: CeilingType }) {
  const whatsappText = encodeURIComponent(
    `Dzień dobry, proszę o wycenę: ${type.name}. Interesuje mnie montaż sufitu napinanego.`
  );

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-card">
      <img
        className="h-52 w-full object-cover"
        src={type.image}
        alt={type.name}
        loading="lazy"
        decoding="async"
        width={900}
        height={520}
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold-dark">
          {type.priceLabel}
        </p>
        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-ink">{type.name}</h2>
        <p className="mt-3 line-clamp-3 leading-7 text-muted">{type.shortDescription}</p>
        <div className="mt-5 rounded-lg bg-porcelain p-4">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
            Najlepsze zastosowanie
          </p>
          <p className="mt-2 font-bold leading-7 text-ink">{type.bestFor.slice(0, 3).join(", ")}</p>
        </div>
        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <a
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-charcoal px-4 text-sm font-medium leading-none text-white transition hover:bg-black"
            href={`/rodzaje-sufitow/${type.slug}`}
            aria-label={`Zobacz więcej: ${type.name}`}
          >
            Zobacz więcej
            <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 text-sm font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
            href={`https://wa.me/48791085385?text=${whatsappText}`}
          >
            <MessageCircle size={17} aria-hidden="true" />
            Zapytaj o wycenę
          </a>
        </div>
      </div>
    </article>
  );
}
