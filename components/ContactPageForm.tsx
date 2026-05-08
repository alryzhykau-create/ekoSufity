"use client";

import { ceilingTypeOptions, type CeilingType } from "@/lib/calculator";
import { Send } from "lucide-react";
import type { HTMLAttributes } from "react";
import { useState } from "react";

export function ContactPageForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [ceilingType, setCeilingType] = useState<CeilingType>("matowy");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selectedCeiling = ceilingTypeOptions.find((option) => option.value === ceilingType);
    const text = encodeURIComponent(
      `Dzień dobry, proszę o kontakt w sprawie sufitu napinanego.
- Imię: ${name}
- Telefon: ${phone}
- Email: ${email}
- Miejscowość: ${city}
- Powierzchnia: ${area} m²
- Rodzaj sufitu: ${selectedCeiling?.label ?? "Sufit matowy"}
- Wiadomość: ${message}`
    );

    window.open(`https://wa.me/48791085385?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="rounded-lg bg-white p-5 text-ink shadow-card md:p-7" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Imię" value={name} onChange={setName} placeholder="Jan" autoComplete="given-name" required />
        <TextField
          label="Telefon"
          type="tel"
          value={phone}
          onChange={setPhone}
          placeholder="+48 000 000 000"
          autoComplete="tel"
          required
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="jan@example.com"
          autoComplete="email"
        />
        <TextField label="Miejscowość" value={city} onChange={setCity} placeholder="Wrocław" autoComplete="address-level2" />
        <TextField label="Powierzchnia" value={area} onChange={setArea} placeholder="np. 24" inputMode="numeric" />

        <label className="block">
          <span className="text-sm font-bold">Rodzaj sufitu</span>
          <select
            className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-4 outline-none transition focus:border-gold"
            value={ceilingType}
            onChange={(event) => setCeilingType(event.target.value as CeilingType)}
          >
            {ceilingTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-bold">Wiadomość</span>
          <textarea
            className="mt-2 min-h-[140px] w-full rounded-lg border border-line px-4 py-4 outline-none transition focus:border-gold"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Napisz, jakie pomieszczenia chcesz wykończyć i czy planujesz oświetlenie."
          />
        </label>
      </div>

      <button
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 text-base font-medium leading-none text-white transition hover:bg-gold-dark"
        type="submit"
        aria-label="Wyślij formularz kontaktowy"
      >
        <Send size={20} aria-hidden="true" />
        Wyślij zapytanie
      </button>
    </form>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  required,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold">{label}</span>
      <input
        className="mt-2 w-full rounded-lg border border-line px-4 py-4 outline-none transition focus:border-gold"
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        inputMode={inputMode}
      />
    </label>
  );
}
