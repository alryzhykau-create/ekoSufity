// Konturowe znaki do przycisków CTA — rysowane obrysem z reguły .btn svg,
// kolor nadaje CSS przycisku.
export function CtaIcon({ name }: { name: "phone" | "whatsapp" }) {
  const iconProps = {
    width: 28,
    height: 28,
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true
  } as const;

  if (name === "phone") {
    return (
      <svg {...iconProps} className="ctaIconOutline" viewBox="0 0 28 28" fill="none">
        <path d="M9.3 6.4 7.1 8.6c-.5.5-.6 1.2-.4 1.8 1.4 5 5.8 9.4 10.9 10.9.6.2 1.3 0 1.8-.4l2.2-2.2-3.8-3-1.7 1.7c-2.2-1.1-4.2-3.1-5.3-5.3l1.7-1.7-3.2-4Z" />
      </svg>
    );
  }

  // WhatsApp: pełny znak (jak w bloku procesu), kolor nadaje CSS przycisku.
  return (
    <svg {...iconProps} className="ctaIconWa" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.01c-.24.68-1.42 1.31-1.96 1.36-.5.05-1.14.07-1.84-.12-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.23-5-4.43-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .39 0 .57.01.18.01.43-.07.67.51.24.59.83 2.04.9 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.07 1.31 2.37 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.34.07.13.07.73-.17 1.41z"
      />
    </svg>
  );
}
