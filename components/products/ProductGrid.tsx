'use client';

import React, { useState } from 'react';
import { Product, Platform } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = products.filter((prod) => {
    const matchesPlatform =
      selectedPlatform === 'all' || prod.supportedPlatforms.includes(selectedPlatform as Platform);
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    return matchesPlatform && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        {/* Category Tabs */}
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
          <span className="text-xs font-semibold text-slate-500 mr-2">Category:</span>
          {['all', 'antivirus', 'privacy', 'utility'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Platform Dropdown */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs font-semibold text-slate-500">Platform:</span>
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="all">All Devices & Operating Systems</option>
            <option value="windows">Windows PC</option>
            <option value="mac">macOS</option>
            <option value="android">Android</option>
            <option value="ios">iOS</option>
            <option value="chromebook">Chromebook</option>
          </select>
        </div>
      </div>

      {/* Grid Container */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.slug} product={prod} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center bg-white rounded-2xl border border-slate-200 p-8 text-slate-500">
          No products match the selected filters.
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedPlatform('all');
            }}
            className="block mx-auto mt-3 text-sky-600 font-semibold text-xs hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
