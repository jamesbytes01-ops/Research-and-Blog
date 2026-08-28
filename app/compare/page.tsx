import React from 'react';
import ComparisonMatrix from '@/components/compare/ComparisonMatrix';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { COMPARISONS_DATA } from '@/data/comparisons';
import { Layers, ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Webroot Product Comparison Engine & Versus Competitors',
  description: 'Interactive feature comparison tool for Webroot SecureAnywhere plans and head-to-head comparisons against Norton, Bitdefender, and Microsoft Defender.',
});

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Compare' }]} />

      <div className="space-y-2 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Webroot Product & Competitor Comparison Matrix
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Select up to 4 Webroot plans side by side to compare cloud antivirus protection, ransomware defense, phishing shields, password managers, and cloud backup tools.
        </p>
      </div>

      {/* Comparison Engine Component */}
      <ComparisonMatrix />

      {/* Head to Head Comparison Articles */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Head-to-Head Antivirus Comparisons</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Detailed independent technical breakdowns comparing Webroot against top antivirus providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPARISONS_DATA.map((comp) => (
            <div key={comp.slug} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                  {comp.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{comp.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-3">{comp.subtitle}</p>
              </div>

              <Link
                href={`/compare/${comp.slug}`}
                className="inline-flex items-center gap-1.5 font-semibold text-xs text-sky-600 hover:text-sky-700 pt-2"
              >
                Read Full Breakdown <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
