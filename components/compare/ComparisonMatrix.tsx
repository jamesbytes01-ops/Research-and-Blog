'use client';

import React, { useState } from 'react';
import { PRODUCTS_DATA } from '@/data/products';
import { FEATURES_DATA } from '@/data/features';
import { Product } from '@/types';
import { Check, Minus, HelpCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ComparisonMatrix() {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([
    'webroot-antivirus',
    'webroot-internet-security-plus',
    'webroot-internet-security-complete'
  ]);

  const selectedProducts = selectedSlugs
    .map((slug) => PRODUCTS_DATA.find((p) => p.slug === slug))
    .filter(Boolean) as Product[];

  const handleToggleProduct = (slug: string) => {
    if (selectedSlugs.includes(slug)) {
      if (selectedSlugs.length > 1) {
        setSelectedSlugs(selectedSlugs.filter((s) => s !== slug));
      }
    } else {
      if (selectedSlugs.length < 4) {
        setSelectedSlugs([...selectedSlugs, slug]);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Selection Toolbar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h3 className="font-bold text-slate-900 text-base">Select Products to Compare (Up to 4)</h3>
          <span className="text-xs text-slate-500 font-medium">{selectedSlugs.length} of 4 selected</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {PRODUCTS_DATA.map((prod) => {
            const isSelected = selectedSlugs.includes(prod.slug);
            return (
              <button
                key={prod.slug}
                onClick={() => handleToggleProduct(prod.slug)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {isSelected ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <span className="w-3.5 h-3.5 rounded-full border border-slate-300" />}
                {prod.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-900 text-white border-b border-slate-800">
              <th className="p-4 sm:p-6 w-1/3 text-sm font-bold">Feature & Specifications</th>
              {selectedProducts.map((prod) => (
                <th key={prod.slug} className="p-4 sm:p-6 text-center align-top border-l border-slate-800">
                  <div className="font-bold text-base text-white">{prod.name}</div>
                  <div className="text-xs text-sky-400 font-medium mt-1">{prod.deviceLimit}</div>
                  <div className="mt-3 flex justify-center gap-2">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm">
            {/* Supported Platforms Row */}
            <tr className="bg-slate-50 font-semibold text-slate-800">
              <td className="p-4">Supported Platforms</td>
              {selectedProducts.map((prod) => (
                <td key={prod.slug} className="p-4 text-center border-l border-slate-200">
                  <div className="flex flex-wrap justify-center gap-1">
                    {prod.supportedPlatforms.map((plat) => (
                      <span key={plat} className="px-2 py-0.5 text-[10px] uppercase font-bold bg-white text-slate-700 border border-slate-300 rounded">
                        {plat}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Feature Rows */}
            {FEATURES_DATA.map((feature) => (
              <tr key={feature.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4">
                  <div className="font-semibold text-slate-900">{feature.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{feature.description}</div>
                </td>
                {selectedProducts.map((prod) => {
                  const isIncluded = feature.includedIn.includes(prod.slug);
                  return (
                    <td key={prod.slug} className="p-4 text-center align-middle border-l border-slate-200">
                      {isIncluded ? (
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200">
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Included</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-400 font-medium text-xs rounded-full border border-slate-200">
                          <Minus className="w-4 h-4 text-slate-400" />
                          <span>Not included</span>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}

            {/* Verification Footer Row */}
            <tr className="bg-slate-50 text-xs text-slate-500">
              <td className="p-4 font-semibold text-slate-700">Official Specification Link</td>
              {selectedProducts.map((prod) => (
                <td key={prod.slug} className="p-4 text-center border-l border-slate-200">
                  <a
                    href={prod.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 hover:underline font-semibold"
                  >
                    Verify on Official Site <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
