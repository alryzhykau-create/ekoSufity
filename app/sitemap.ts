import type { MetadataRoute } from "next";
import { ceilingTypes } from "@/lib/ceilingTypes";
import { lightingItems } from "@/lib/lighting";
import { locations } from "@/lib/locations";
import { siteConfig } from "@/lib/site";
import { solutionItems } from "@/lib/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/ceny", priority: 0.9 },
    { path: "/o-sufitach", priority: 0.85 },
    { path: "/kontakt", priority: 0.9 },
    { path: "/faq", priority: 0.82 },
    { path: "/polityka-prywatnosci", priority: 0.35 },
    { path: "/realizacje", priority: 0.86 },
    { path: "/lokalizacje", priority: 0.86 },
    { path: "/rodzaje-sufitow", priority: 0.88 },
    { path: "/rozwiazania", priority: 0.88 },
    ...ceilingTypes.map((type) => ({
      path: `/rodzaje-sufitow/${type.slug}`,
      priority: 0.78,
    })),
    ...solutionItems.map((solution) => ({
      path: `/rozwiazania/${solution.slug}`,
      priority: 0.78,
    })),
    ...lightingItems.map((item) => ({
      path: `/rozwiazania/oswietlenie/${item.slug}`,
      priority: 0.74,
    })),
    ...locations.map((location) => ({
      path: `/lokalizacje/${location.slug}`,
      priority: 0.72,
    })),
  ];

  return pages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page.priority,
  }));
}
