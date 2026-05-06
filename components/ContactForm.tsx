"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = encodeURIComponent(
      `Dzień dobry, proszę o kontakt w sprawie bezpłatnego pomiaru sufitu napinanego.
- Imię: ${name}
- Telefon: ${phone}`
    );
    window.open(`https://wa.me/48791085385?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="rounded-[24px] bg-white p-5 text-ink md:p-7" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold">Imię</span>
          <input
            className="mt-2 w-full rounded-2xl border border-line px-4 py-4 outline-none transition focus:border-gold"
            type="text"
            name="name"
            placeholder="Jan"
            autoComplete="given-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold">Telefon</span>
          <input
            className="mt-2 w-full rounded-2xl border border-line px-4 py-4 outline-none transition focus:border-gold"
            type="tel"
            name="phone"
            placeholder="+48 000 000 000"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </label>
      </div>
      <button
        className="mt-5 w-full rounded-xl bg-gold px-6 py-4 font-extrabold text-white transition hover:bg-gold-dark"
        type="submit"
        aria-label="Zostaw kontakt"
      >
        Zostaw kontakt
      </button>
    </form>
  );
}
