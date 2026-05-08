import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { LocationPageTemplate } from "@/components/LocationPageTemplate";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { Footer } from "@/components/sections/Footer";
import { getLocationBySlug, locations } from "@/lib/locations";

type LocationPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }: LocationPageProps): Metadata {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    return {};
  }

  return {
    title: { absolute: location.seoTitle },
    description: location.seoDescription,
    alternates: {
      canonical: `/lokalizacje/${location.slug}`,
    },
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
    },
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = getLocationBySlug(params.slug);

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
