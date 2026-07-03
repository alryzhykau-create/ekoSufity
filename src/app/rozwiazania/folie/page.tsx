import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo/metadata";
import { FolieDetail } from "@/components/rozwiazania/FolieDetail";

export const metadata: Metadata = {
  title: "Folie do sufitów napinanych - producenci i faktury - Wrocław",
  description:
    "Folie do sufitów napinanych: producenci MSD, Bauf i Teqtum oraz faktury — mat, satyna, połysk i sufit podświetlany. Bezpłatny pomiar, Wrocław i do 100 km.",
  ...seoMeta("/rozwiazania/folie")
};

export default function FoliePage() {
  return <FolieDetail />;
}
