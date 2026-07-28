"use client";

import { useEffect, useState } from "react";

export type PrivacyTocItem = {
  id: string;
  label: string;
};

type PrivacyTocProps = {
  items: ReadonlyArray<PrivacyTocItem>;
};

// Podświetla w spisie treści sekcję, której nagłówek minął górną krawędź
// widoku (ten sam próg co przewijanie do kotwicy — patrz scroll-margin-top
// sekcji w globals.css).
export function PrivacyToc({ items }: PrivacyTocProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) {
      return;
    }

    const onScroll = () => {
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 140) {
          current = section.id;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <nav className="privacyToc" aria-label="Spis treści">
      <span className="privacyTocLabel">Spis treści</span>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`privacyTocLink${activeId === item.id ? " is-active" : ""}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
