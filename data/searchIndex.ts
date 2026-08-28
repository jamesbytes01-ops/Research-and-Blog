import { PRODUCTS_DATA } from './products';
import { GUIDES_DATA } from './guides';
import { ARTICLES_DATA } from './articles';
import { COMPARISONS_DATA } from './comparisons';
import { FEATURES_DATA } from './features';
import { FAQS_DATA } from './faqs';
import { SearchResultItem } from '@/types';

export function getConsolidatedSearchIndex(): SearchResultItem[] {
  const index: SearchResultItem[] = [];

  // Products
  PRODUCTS_DATA.forEach((product) => {
    index.push({
      id: `product-${product.slug}`,
      title: product.name,
      description: product.shortDescription,
      type: 'product',
      url: `/products/${product.slug}`,
      badgeText: product.category.toUpperCase()
    });
  });

  // Guides
  GUIDES_DATA.forEach((guide) => {
    index.push({
      id: `guide-${guide.slug}`,
      title: guide.title,
      description: guide.description,
      type: 'guide',
      url: `/guides/${guide.slug}`,
      badgeText: guide.category.replace('-', ' ').toUpperCase()
    });
  });

  // Articles
  ARTICLES_DATA.forEach((article) => {
    index.push({
      id: `article-${article.slug}`,
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `/blog/${article.slug}`,
      badgeText: article.category.toUpperCase()
    });
  });

  // Comparisons
  COMPARISONS_DATA.forEach((comp) => {
    index.push({
      id: `comp-${comp.slug}`,
      title: comp.title,
      description: comp.subtitle,
      type: 'comparison',
      url: `/compare/${comp.slug}`,
      badgeText: 'VS COMPARISON'
    });
  });

  // Features
  FEATURES_DATA.forEach((feat) => {
    index.push({
      id: `feature-${feat.id}`,
      title: feat.name,
      description: feat.description,
      type: 'feature',
      url: `/features/${feat.id}`,
      badgeText: feat.category.toUpperCase()
    });
  });

  // FAQs
  FAQS_DATA.forEach((faq) => {
    index.push({
      id: `faq-${faq.id}`,
      title: faq.question,
      description: faq.answer,
      type: 'faq',
      url: `/faq#${faq.id}`,
      badgeText: 'FAQ'
    });
  });

  return index;
}
