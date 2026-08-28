import { MetadataRoute } from 'next';
import { PRODUCTS_DATA } from '@/data/products';
import { GUIDES_DATA } from '@/data/guides';
import { ARTICLES_DATA } from '@/data/articles';
import { COMPARISONS_DATA } from '@/data/comparisons';
import { FEATURES_DATA } from '@/data/features';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webroot-hub-research.example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/products',
    '/compare',
    '/quiz',
    '/download',
    '/install',
    '/activate',
    '/guides',
    '/features',
    '/blog',
    '/faq',
    '/search',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = PRODUCTS_DATA.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: new Date(p.lastVerified),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const guideRoutes = GUIDES_DATA.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.updatedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const articleRoutes = ARTICLES_DATA.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.updatedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const comparisonRoutes = COMPARISONS_DATA.map((c) => ({
    url: `${BASE_URL}/compare/${c.slug}`,
    lastModified: new Date(c.lastVerified),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...routes, ...productRoutes, ...guideRoutes, ...articleRoutes, ...comparisonRoutes];
}
