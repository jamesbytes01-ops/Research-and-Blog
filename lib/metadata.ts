import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webroot-hub-research.example.com';
const SITE_NAME = 'Webroot Knowledge & Research Hub';

interface GenerateMetadataProps {
  title: string;
  description: string;
  slug?: string;
  type?: 'website' | 'article';
}

export function constructMetadata({
  title,
  description,
  slug = '',
  type = 'website',
}: GenerateMetadataProps): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = `${BASE_URL}${slug}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStructuredDataJSON(schemaData: object) {
  return JSON.stringify(schemaData);
}
