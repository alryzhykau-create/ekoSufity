"use client";

import type { BasicFAQItem } from "@/lib/faq";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQAccordion({ items }: { items: BasicFAQItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="overflow-hidden rounded-lg border border-line bg-white">
            <button
              className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium leading-6 text-ink transition hover:bg-porcelain/70 md:px-7"
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              {item.question}
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {isOpen ? (
              <div id={`faq-answer-${index}`} className="px-5 pb-6 text-muted md:px-7">
                <p className="max-w-3xl leading-7">{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
