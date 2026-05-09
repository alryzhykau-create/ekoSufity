import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { LocationPageTemplate } from "@/components/LocationPageTemplate";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { Footer } from "@/components/sections/Footer";
import { getLocationBySlug, locations } from "@/lib/locations";
import { createPageMetadata } from "@/lib/metadata";

type LocationPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {};
  }

  return createPageMetadata({
    title: location.seoTitle,
    description: location.seoDescription,
    path: `/lokalizacje/${location.slug}`,
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <LocationPageTemplate location={location} />
      </main>
      <Footer />
      <PhoneButton />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
