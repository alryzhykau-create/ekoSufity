import { getRelatedCeilingTypes } from "@/lib/ceilingTypes";
import { ArrowRight } from "lucide-react";

export function RelatedLinks({ currentSlug }: { currentSlug: string }) {
  const relatedTypes = getRelatedCeilingTypes(currentSlug, 4);

  return (
    <aside className="rounded-lg bg-white p-6 shadow-card">
      <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">
        Powiązane typy
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {relatedTypes.map((type) => (
          <a
            key={type.slug}
            className="flex items-center justify-between gap-4 rounded-lg border border-line px-4 py-3 font-bold text-ink transition hover:border-gold hover:text-gold-dark"
            href={`/rodzaje-sufitow/${type.slug}`}
          >
            {type.name}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        ))}
      </div>
    </aside>
  );
}
