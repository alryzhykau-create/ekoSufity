import { Check } from "lucide-react";

const comparisonRows = [
  [
    "Sufit napinany",
    ["Montaż w 1 dzień", "Brak kurzu i bałaganu", "Idealnie równy", "Odporny na wilgoć", "Szeroki wybór oświetlenia"],
  ],
  [
    "Płyty G-K",
    ["Kilka dni pracy", "Dużo kurzu i bałaganu", "Konieczne malowanie", "Ryzyko pęknięć", "Ograniczone możliwości"],
  ],
];

export function ComparisonSection() {
  return (
    <section className="section-pad bg-white/45">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold md:text-5xl">
          Sufit napinany vs płyty G-K
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {comparisonRows.map(([title, rows]) => (
            <div key={title as string} className="rounded-lg bg-white p-7 shadow-card">
              <h3 className="text-2xl font-extrabold">{title as string}</h3>
              <ul className="mt-6 space-y-4">
                {(rows as string[]).map((row) => (
                  <li key={row} className="flex items-center gap-3 font-bold text-muted">
                    <Check className="h-5 w-5 text-gold-dark" aria-hidden="true" />
                    {row}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

