type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={[
            "text-sm font-extrabold uppercase tracking-[0.18em]",
            isDark ? "text-gold" : "text-gold-dark",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={[
          "mt-4 text-3xl font-extrabold leading-tight md:text-5xl",
          isDark ? "text-white" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-5 text-base leading-7 md:text-lg md:leading-8",
            isDark ? "text-white/70" : "text-muted",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
