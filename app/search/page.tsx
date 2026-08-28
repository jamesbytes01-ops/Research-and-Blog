'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { searchSite } from '@/lib/search';
import { SearchResultItem } from '@/types';
import { Search, Shield, FileText, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [typeFilter, setTypeFilter] = useState('all');
  const [results, setResults] = useState<SearchResultItem[]>([]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const found = searchSite(query, typeFilter);
      setResults(found);
    } else {
      setResults([]);
    }
  }, [query, typeFilter]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'product':
        return <Shield className="w-4 h-4 text-sky-600" />;
      case 'guide':
        return <FileText className="w-4 h-4 text-emerald-600" />;
      case 'article':
        return <FileText className="w-4 h-4 text-indigo-600" />;
      case 'comparison':
        return <Layers className="w-4 h-4 text-amber-600" />;
      default:
        return <HelpCircle className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">Site-Wide Knowledge Base Search</h1>

        {/* Input & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, guides, activation errors, VPN..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="flex items-center flex-wrap gap-2 text-xs">
            <span className="font-semibold text-slate-500 mr-2">Filter Type:</span>
            {['all', 'product', 'guide', 'article', 'comparison', 'faq'].map((filter) => (
              <button
                key={filter}
                onClick={() => setTypeFilter(filter)}
                className={`px-3 py-1.5 rounded-lg font-semibold uppercase tracking-wider transition-colors ${
                  typeFilter === filter
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Listing */}
      <div className="space-y-3">
        {results.length > 0 ? (
          results.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="block p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-sky-50 transition-colors shrink-0">
                  {getTypeIcon(item.type)}
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-bold text-slate-900 text-base group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h2>
                    {item.badgeText && (
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                        {item.badgeText}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Link>
          ))
        ) : query.trim().length > 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 p-8 text-slate-500 space-y-3">
            <p className="text-base font-semibold text-slate-800">No results found matching &quot;{query}&quot;</p>
            <p className="text-xs text-slate-500">Try searching for keywords like &quot;activation&quot;, &quot;windows&quot;, &quot;vpn&quot;, or &quot;install&quot;.</p>
          </div>
        ) : (
          <div className="py-12 text-center text-slate-400 text-xs">
            Enter a search term above to scan all products, guides, research articles, and FAQs.
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Search Results' }]} />
      <Suspense fallback={<div className="py-12 text-center text-slate-500 text-sm">Loading search...</div>}>
        <SearchContent />
      </Suspense>
    </div>
  );
}
