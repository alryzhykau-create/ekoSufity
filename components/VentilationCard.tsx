import { Wind } from "lucide-react";

export function VentilationCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-lg bg-white p-6 shadow-card">
      <Wind className="h-10 w-10 text-gold-dark" aria-hidden="true" />
      <h2 className="mt-6 text-xl font-extrabold text-ink">{title}</h2>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </article>
  );
}
