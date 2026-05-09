import Image from "next/image";
import type { LightingItem } from "@/lib/lighting";
import { ArrowRight, Lightbulb, MessageCircle } from "lucide-react";

export function LightingCard({ item }: { item: LightingItem }) {
  const whatsappText = encodeURIComponent(
    `Dzień dobry, proszę o wycenę oświetlenia: ${item.name}.`
  );

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-card">
      <Image
        className="h-48 w-full object-cover"
        src={item.image}
        alt={`${item.name} w suficie napinanym - przykładowy efekt oświetlenia`}
        width={900}
        height={520}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-4">
          <Lightbulb className="h-9 w-9 text-gold-dark" aria-hidden="true" />
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold-dark">
            {item.priceLabel}
          </p>
        </div>
        <h2 className="mt-5 text-2xl font-extrabold leading-tight text-ink">{item.name}</h2>
        <p className="mt-3 line-clamp-3 leading-7 text-muted">{item.shortDescription}</p>
        <div className="mt-5 rounded-lg bg-porcelain p-4">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
            Gdzie pasuje
          </p>
          <p className="mt-2 font-bold leading-7 text-ink">{item.bestFor.slice(0, 3).join(", ")}</p>
        </div>
        <ul className="mt-5 space-y-2 text-sm font-bold leading-6 text-muted">
          {item.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <a
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-charcoal px-4 text-sm font-medium leading-none text-white transition hover:bg-black"
            href={`/rozwiazania/oswietlenie/${item.slug}`}
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
