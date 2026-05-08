"use client";

import { FAQAccordion } from "@/components/FAQAccordion";
import type { FAQCategory, FAQItem } from "@/lib/faq";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export function FAQExplorer({ categories }: { categories: FAQCategory[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return categories
      .filter((category) => activeCategory === "all" || category.slug === activeCategory)
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => matchesQuery(item, normalizedQuery)),
      }))
      .filter((category) => category.items.length > 0);
  }, [activeCategory, categories, query]);

  const totalItems = filteredCategories.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <section className="section-pad bg-white/45">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-lg bg-white p-5 shadow-card md:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <label className="block">
              <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-gold-dark">
                Wyszukiwarka pytań
              </span>
              <span className="mt-3 flex min-h-14 items-center gap-3 rounded-lg border border-line bg-white px-4 transition focus-within:border-gold">
                <Search className="h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                <input
                  className="h-12 w-full bg-transparent text-base font-medium text-ink outline-none placeholder:text-muted"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Wpisz np. cena, LED, wentylacja..."
                  type="search"
                />
              </span>
            </label>
            <p className="rounded-lg bg-porcelain px-4 py-3 text-sm font-bold text-ink">
              Wyniki: {totalItems}
            </p>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            <button
              className={filterClassName(activeCategory === "all")}
              type="button"
              onClick={() => setActiveCategory("all")}
            >
              Wszystkie
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                className={filterClassName(activeCategory === category.slug)}
                type="button"
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <article
                key={category.slug}
                id={category.slug}
                className="scroll-mt-28 rounded-lg bg-white p-5 shadow-card md:p-8"
              >
                <div className="mb-6">
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-gold-dark">
                    {category.title}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold text-ink md:text-3xl">{category.title}</h2>
                  <p className="mt-3 max-w-3xl leading-7 text-muted">{category.description}</p>
                </div>
                <FAQAccordion items={category.items} />
              </article>
            ))
          ) : (
            <div className="rounded-lg bg-white p-6 text-center shadow-card">
              <h2 className="text-2xl font-extrabold text-ink">Brak wyników</h2>
              <p className="mt-3 leading-7 text-muted">
                Spróbuj wpisać krótsze hasło albo wybierz inną kategorię.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 rounded-lg border border-gold/30 bg-white p-5 text-center shadow-sm">
          <p className="font-bold text-ink">Nie znalazłeś odpowiedzi?</p>
          <a
            className="mt-3 inline-flex h-11 items-center justify-center rounded-lg bg-charcoal px-5 text-sm font-bold leading-none text-white transition hover:bg-black"
            href="https://wa.me/48791085385?text=Dzie%C5%84%20dobry%2C%20mam%20pytanie%20o%20sufit%20napinany."
            target="_blank"
            rel="noreferrer"
          >
            Napisz do nas na WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function matchesQuery(item: FAQItem, query: string) {
  if (!query) {
    return true;
  }

  return `${item.question} ${item.answer} ${item.category}`.toLowerCase().includes(query);
}

function filterClassName(active: boolean) {
  return [
    "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition",
    active
      ? "border-charcoal bg-charcoal text-white"
      : "border-line bg-white text-ink hover:border-gold hover:text-gold-dark",
  ].join(" ");
}
