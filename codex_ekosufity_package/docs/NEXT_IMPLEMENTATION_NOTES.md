# Next.js implementation notes for EkoSufity

These notes are optional. Use them only if the project uses Next.js.

## App Router metadata example

```ts
import content from '@/data/ekoSufityContent.json';

export const metadata = {
  title: content.staticPages.find((p) => p.path === '/')?.seoTitle,
  description: content.staticPages.find((p) => p.path === '/')?.seoDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    title: content.staticPages.find((p) => p.path === '/')?.seoTitle,
    description: content.staticPages.find((p) => p.path === '/')?.seoDescription,
  },
};
```

## Dynamic page example

```ts
export function generateStaticParams() {
  return content.ceilingTypes.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const page = content.ceilingTypes.find((item) => item.slug === params.slug);
  return {
    title: page?.seoTitle,
    description: page?.seoDescription,
    alternates: { canonical: page?.path },
  };
}
```

## JSON-LD example

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

## Sitemap example

Use all implemented paths from content data:

- `staticPages[].path`
- `ceilingTypes[].path`
- `solutionPages[].path`
- `lightingOptions[].path` if pages exist
- `locations[].path`
