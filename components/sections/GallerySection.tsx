import { ArrowRight } from "lucide-react";

const projects = [
  {
    location: "Wrocław, Krzyki",
    title: "Sufit matowy + linia LED",
    meta: "18 m² | Montaż 1 dzień",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fm=webp&fit=crop&w=900&q=82",
  },
  {
    location: "Wrocław, Psie Pole",
    title: "Sufit satynowy",
    meta: "14 m² | Montaż 1 dzień",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fm=webp&fit=crop&w=900&q=82",
  },
  {
    location: "Wrocław, Śródmieście",
    title: "Sufit matowy + LED",
    meta: "22 m² | Montaż 1 dzień",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fm=webp&fit=crop&w=900&q=82",
  },
  {
    location: "Wrocław, Fabryczna",
    title: "Sufit z linią LED",
    meta: "16 m² | Montaż 1 dzień",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fm=webp&fit=crop&w=900&q=82",
  },
];

export function GallerySection() {
  return (
    <section id="realizacje" className="section-pad scroll-mt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-dark">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Przykładowe realizacje i inspiracje</h2>
          </div>
          <a
            className="inline-flex h-12 items-center gap-2 rounded-lg px-4 text-base font-medium leading-none text-gold-dark transition hover:text-ink"
            href="/realizacje"
            aria-label="Zobacz więcej przykładów realizacji"
          >
            Zobacz więcej przykładów
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article key={project.location} className="overflow-hidden rounded-lg bg-white shadow-card">
              <img
                className="h-56 w-full object-cover"
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                width={900}
                height={560}
              />
              <div className="p-5">
                <h3 className="font-extrabold">{project.location}</h3>
                <p className="mt-2 text-muted">{project.title}</p>
                <p className="mt-2 text-sm font-bold">Przykładowy efekt | {project.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
