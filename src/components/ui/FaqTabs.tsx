"use client";

import { useState } from "react";

export type FaqTabItem = {
  question: string;
  answer: string;
  category: string;
};

type FaqTabsProps = {
  items: ReadonlyArray<FaqTabItem>;
  categories: ReadonlyArray<{ key: string; label: string }>;
};

const ALL = "all";

/* Zakładki filtrują pytania tylko wizualnie — wszystkie 13 pozycji zostają
   w DOM (chowamy je klasą), więc widoczna treść nadal odpowiada FAQPage
   w danych strukturalnych. */
export function FaqTabs({ items, categories }: FaqTabsProps) {
  const [active, setActive] = useState<string>(ALL);

  const tabs = [
    { key: ALL, label: "Wszystkie", count: items.length },
    ...categories.map((c) => ({
      key: c.key,
      label: c.label,
      count: items.filter((i) => i.category === c.key).length
    }))
  ];

  return (
    <>
      <div className="faqTabs" role="group" aria-label="Kategorie pytań">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.key}
            className={`faqTab${active === tab.key ? " is-active" : ""}`}
            onClick={() => setActive(tab.key)}
            aria-pressed={active === tab.key}
          >
            {tab.label} <span className="faqTabCount">{tab.count}</span>
          </button>
        ))}
      </div>

      <div className="faqList faqListSingle faqListNarrow">
        {items.map((item) => {
          const visible = active === ALL || item.category === active;
          return (
            <details
              className={`faqItem${visible ? "" : " is-filtered"}`}
              key={item.question}
            >
              <summary>
                <span>{item.question}</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          );
        })}
      </div>
    </>
  );
}
