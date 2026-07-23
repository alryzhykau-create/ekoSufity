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

  return (
    <svg {...iconProps} className="ctaIconOutline" viewBox="0 0 28 28" fill="none">
      <path d="M14 4.8a9 9 0 0 0-7.6 13.8l-1 4 4.1-1A9 9 0 1 0 14 4.8Z" />
      <path d="M10.6 10.3c.2-.4.5-.5.8-.5h.5c.3 0 .5.2.6.4l.8 1.8c.1.3.1.6-.1.8l-.5.5c.7 1.4 1.8 2.4 3.2 3.2l.6-.6c.2-.2.5-.2.8-.1l1.7.8c.3.1.5.4.5.7v.5c0 .4-.2.7-.5.9-1 .8-2.6.6-4.4-.3a10.9 10.9 0 0 1-5-5c-.8-1.8-1-3.3-.3-4.3.2-.4.5-.6.9-.8Z" />
    </svg>
  );
}
