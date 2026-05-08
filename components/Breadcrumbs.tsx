import { BreadcrumbJsonLd } from "@/components/SeoJsonLd";

type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({
  items = [{ label: "Strona główna", href: "/" }],
  visible = false,
}: {
  items?: BreadcrumbItem[];
  visible?: boolean;
}) {
  return (
    <>
      <BreadcrumbJsonLd items={items} />
      <nav
        className={visible ? "pt-24" : "sr-only"}
        aria-label="Ścieżka nawigacji"
      >
        <ol
          className={
            visible
              ? "mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 text-sm font-medium text-muted lg:px-8"
              : undefined
          }
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.href}-${item.label}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {isLast ? (
                  <span className={visible ? "text-ink" : undefined} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <a className={visible ? "transition hover:text-gold-dark" : undefined} href={item.href}>
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

export function PageBreadcrumbs({ current }: { current: string }) {
  return (
    <Breadcrumbs
      visible
      items={[
        { label: "Strona główna", href: "/" },
        { label: current, href: "#" },
      ]}
    />
  );
}
