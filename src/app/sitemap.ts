import type { MetadataRoute } from "next";
import { cities } from "@/content/cities";
import { rozwiazania } from "@/content/rozwiazania";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sufity-napinane",
    "/rozwiazania",
    "/ceny",
    "/realizacje",
    "/kontakt",
    "/lokalizacje",
    "/faq",
    "/o-firmie"
  ];
  const cityRoutes = cities.map((city) => `/lokalizacje/${city.slug}`);
  const serviceRoutes = services.map((service) => service.href);
  const rozwiazaniaRoutes = rozwiazania.map((item) => `/rozwiazania/${item.slug}`);

  return [...staticRoutes, ...cityRoutes, ...serviceRoutes, ...rozwiazaniaRoutes].map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date("2026-05-24"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("wroclaw") ? 0.9 : 0.7
  }));
}
