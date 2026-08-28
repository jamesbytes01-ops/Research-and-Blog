import { getConsolidatedSearchIndex } from '@/data/searchIndex';
import { SearchResultItem } from '@/types';

export function searchSite(query: string, typeFilter?: string): SearchResultItem[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const index = getConsolidatedSearchIndex();

  let results = index.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
    const descMatch = item.description.toLowerCase().includes(normalizedQuery);
    return titleMatch || descMatch;
  });

  if (typeFilter && typeFilter !== 'all') {
    results = results.filter((item) => item.type === typeFilter);
  }

  // Sort by title match priority first
  return results.sort((a, b) => {
    const aTitleMatch = a.title.toLowerCase().includes(normalizedQuery);
    const bTitleMatch = b.title.toLowerCase().includes(normalizedQuery);
    if (aTitleMatch && !bTitleMatch) return -1;
    if (!aTitleMatch && bTitleMatch) return 1;
    return 0;
  });
}
