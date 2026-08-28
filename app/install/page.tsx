import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { GUIDES_DATA } from '@/data/guides';
import { Laptop, Smartphone, Key, CheckCircle2, ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Webroot Installation Center - Windows, Mac, Android & iOS Setup Guides',
  description: 'Detailed step-by-step installation guides for Webroot SecureAnywhere on Windows 11, Windows 10, macOS, Android, and Chromebooks.',
});

export default function InstallHubPage() {
  const installGuides = GUIDES_DATA.filter((g) => g.category === 'installation');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Installation Center' }]} />

      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2E8740] text-white border border-[#236C33] text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Laptop className="w-4 h-4 text-white" />
          <span>Official Installation Center</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-semibold">Webroot Installation Center</h1>
        <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
          Step-by-step visual installation walkthroughs for all supported operating systems. Learn how to configure your security software correctly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {installGuides.map((guide) => (
          <div key={guide.slug} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between hover:shadow-lg transition-all">
            <div className="space-y-3">
              <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
                {guide.platform || 'General'}
              </span>
              <h2 className="text-lg font-bold text-slate-900">{guide.title}</h2>
              <p className="text-xs text-slate-600 line-clamp-3">{guide.description}</p>
            </div>

            <Link
              href={`/guides/${guide.slug}`}
              className="inline-flex items-center gap-1.5 font-bold text-xs text-sky-600 hover:text-sky-700 pt-2"
            >
              Read Step-by-Step Tutorial <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
