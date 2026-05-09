"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, Clock3, MapPin, Ruler, SlidersHorizontal } from "lucide-react";
import {
  ceilingTypeFilters,
  galleryProjects,
  lightingTypeFilters,
  roomFilters,
  type GalleryFilterOption,
  type GalleryProject,
} from "@/lib/gallery";

type GalleryGridProps = {
  projects?: GalleryProject[];
  showFilters?: boolean;
};

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: GalleryFilterOption[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink">
      {label}
      <select
        className="h-12 rounded-lg border border-line bg-white px-4 text-base font-medium text-ink outline-none transition focus:border-gold"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="all">Wszystkie</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ProjectCard({ project }: { project: GalleryProject }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-card">
      <div className="aspect-[4/3] overflow-hidden bg-porcelain">
        <Image
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
          src={project.image}
          alt={`${project.title} - przykładowy efekt w pomieszczeniu typu ${project.roomLabel.toLowerCase()}`}
          width={900}
          height={675}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-gold-dark">
          <span>{project.ceilingTypeLabel}</span>
          <span aria-hidden="true">/</span>
          <span>{project.lightingTypeLabel}</span>
        </div>
        <h2 className="mt-3 text-xl font-extrabold leading-tight text-ink">{project.title}</h2>
        <p className="mt-3 leading-7 text-muted">{project.description}</p>
        <div className="mt-5 grid gap-3 text-sm font-bold text-muted sm:grid-cols-3">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold-dark" aria-hidden="true" />
            {project.city}
          </span>
          <span className="inline-flex items-center gap-2">
            <Ruler className="h-4 w-4 text-gold-dark" aria-hidden="true" />
            {project.area}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-gold-dark" aria-hidden="true" />
            {project.duration}
          </span>
        </div>
        <a
          className="mt-6 inline-flex h-11 items-center gap-2 text-base font-medium leading-none text-gold-dark transition hover:text-ink"
          href={`/lokalizacje/${project.locationSlug}`}
        >
          Zobacz lokalizację
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function GalleryGrid({ projects = galleryProjects, showFilters = true }: GalleryGridProps) {
  const [ceilingType, setCeilingType] = useState("all");
  const [lightingType, setLightingType] = useState("all");
  const [room, setRoom] = useState("all");

  const filteredProjects = useMemo(() => {
    if (!showFilters) {
      return projects;
    }

    return projects.filter((project) => {
      const matchesCeiling = ceilingType === "all" || project.ceilingType === ceilingType;
      const matchesLighting = lightingType === "all" || project.lightingType === lightingType;
      const matchesRoom = room === "all" || project.room === room;

      return matchesCeiling && matchesLighting && matchesRoom;
    });
  }, [ceilingType, lightingType, projects, room, showFilters]);

  const hasActiveFilters = ceilingType !== "all" || lightingType !== "all" || room !== "all";

  return (
    <div className="space-y-8">
      {showFilters ? (
        <div className="rounded-lg bg-white p-5 shadow-card">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-porcelain text-gold-dark">
              <SlidersHorizontal size={20} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-ink">Filtry przykładów</h2>
              <p className="mt-1 text-sm leading-6 text-muted">
                Zawęź przykłady według rodzaju sufitu, światła i pomieszczenia.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <FilterSelect
              label="Rodzaj sufitu"
              value={ceilingType}
              options={ceilingTypeFilters}
              onChange={setCeilingType}
            />
            <FilterSelect
              label="Rodzaj oświetlenia"
              value={lightingType}
              options={lightingTypeFilters}
              onChange={setLightingType}
            />
            <FilterSelect label="Pomieszczenie" value={room} options={roomFilters} onChange={setRoom} />
          </div>

          {hasActiveFilters ? (
            <button
              className="mt-5 inline-flex h-11 items-center justify-center rounded-lg border border-charcoal/20 bg-white px-5 text-base font-medium leading-none text-ink transition hover:border-gold hover:text-gold-dark"
              type="button"
              onClick={() => {
                setCeilingType("all");
                setLightingType("all");
                setRoom("all");
              }}
            >
              Wyczyść filtry
            </button>
          ) : null}
        </div>
      ) : null}

      {filteredProjects.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg bg-white p-8 text-center shadow-card">
          <h2 className="text-2xl font-extrabold text-ink">Brak przykładów dla wybranych filtrów</h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-muted">
            Zmień jeden z filtrów albo napisz do nas. Przygotujemy przykłady i wycenę pod Twoje wnętrze.
          </p>
        </div>
      )}
    </div>
  );
}
