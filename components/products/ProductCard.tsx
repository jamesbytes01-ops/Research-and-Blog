import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { Shield, Check, ExternalLink, ArrowRight, Laptop, Smartphone } from 'lucide-react';
import { getPlatformBadgeColor } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {product.isPopular && (
        <div className="bg-sky-600 text-white text-[11px] font-bold uppercase tracking-wider text-center py-1 px-3">
          Most Popular Choice
        </div>
      )}

      <div className="p-6 space-y-4 flex-1">
        {/* Header Badge & Category */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
            {product.category}
          </span>
          <span className="text-xs text-slate-500 font-medium">{product.deviceLimit}</span>
        </div>

        {/* Product Title & Tagline */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">{product.tagline}</p>
        </div>

        {/* Platform Support Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {product.supportedPlatforms.map((plat) => (
            <span
              key={plat}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold capitalize border ${getPlatformBadgeColor(
                plat
              )}`}
            >
              {plat}
            </span>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          <span className="text-xs font-semibold text-slate-700">Key Features:</span>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {product.features.slice(0, 4).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 pt-0 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row gap-2 mt-4">
        <Link
          href={`/products/${product.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-700 text-white font-semibold text-xs transition-colors shadow-sm"
        >
          View Full Specs <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href={product.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors"
          title="Direct to official Webroot product page"
        >
          Official Site <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>
    </div>
  );
}
