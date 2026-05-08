import type { SolutionItem } from "@/lib/solutions";
import { ArrowRight, MessageCircle, PanelsTopLeft } from "lucide-react";

export function SolutionCard({ solution }: { solution: SolutionItem }) {
  const whatsappText = encodeURIComponent(
    `Dzień dobry, proszę o wycenę rozwiązania: ${solution.title}.`
  );

  return (
    <article className="flex h-full flex-col rounded-lg bg-white p-6 shadow-card">
      <PanelsTopLeft className="h-10 w-10 text-gold-dark" aria-hidden="true" />
      <h2 className="mt-6 text-2xl font-extrabold leading-tight text-ink">{solution.title}</h2>
      <p className="mt-3 leading-7 text-muted">{solution.shortDescription}</p>
      <div className="mt-5 rounded-lg bg-porcelain p-4">
        <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted">Zastosowania</p>
        <ul className="mt-3 space-y-2 text-sm font-bold leading-6 text-ink">
          {solution.applications.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
        <a
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-charcoal px-4 text-sm font-medium leading-none text-white transition hover:bg-black"
          href={`/rozwiazania/${solution.slug}`}
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
    </article>
  );
}
