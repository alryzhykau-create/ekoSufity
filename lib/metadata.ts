import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

function resolveImage(image?: string) {
  return image ?? siteConfig.defaultImage;
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const resolvedTitle = title.includes(siteConfig.name) ? { absolute: title } : title;
  const ogImage = resolveImage(image);
  const url = `${siteConfig.url}${path}`;

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}
