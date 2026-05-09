import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Header } from "@/components/Header";
import { LightingDetail } from "@/components/LightingDetail";
import { MobileBottomBar, PhoneButton, WhatsAppButton } from "@/components/FloatingActions";
import { Footer } from "@/components/sections/Footer";
import { getLightingBySlug, lightingItems } from "@/lib/lighting";

type LightingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return lightingItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: LightingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getLightingBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: { absolute: item.seoTitle },
    description: item.seoDescription,
    alternates: {
      canonical: `/rozwiazania/oswietlenie/${item.slug}`,
    },
    openGraph: {
      title: item.seoTitle,
      description: item.seoDescription,
      images: [item.image],
    },
  };
}

export default async function LightingPage({ params }: LightingPageProps) {
  const { slug } = await params;
  const item = getLightingBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden pb-24 md:pb-0">
        <Breadcrumbs
          visible
          items={[
            { label: "Strona główna", href: "/" },
            { label: "Rozwiązania", href: "/rozwiazania" },
            { label: "Oświetlenie", href: "/rozwiazania/oswietlenie" },
            { label: item.name, href: `/rozwiazania/oswietlenie/${item.slug}` },
          ]}
        />
        <LightingDetail item={item} />
      </main>
      <Footer />
      <PhoneButton />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
