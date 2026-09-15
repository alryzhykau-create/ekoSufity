"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/* Czy rząd przycisków hero („Zadzwoń / WhatsApp") wyjechał z ekranu.
   Na tym sygnale pasek szybkiego kontaktu i baner cookies decydują, kiedy
   się pokazać — żeby na pierwszym ekranie nie zasłaniać tych przycisków.
   Strona bez przycisków hero (artykuł, polityka) od razu zwraca true.
   Do momentu zamontowania zwraca false — decyzja zapada po stronie klienta. */
export function useHeroCtaOffscreen() {
  const pathname = usePathname();
  const [offscreen, setOffscreen] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector("main .heroPrimaryCta");
    const row = heroCta?.closest(".buttonRow") ?? heroCta;

    if (!row || typeof IntersectionObserver === "undefined") {
      setOffscreen(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setOffscreen(!entry.isIntersecting));
    observer.observe(row);
    return () => observer.disconnect();
  }, [pathname]);

  return offscreen;
}
