import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { GUIDES_DATA } from '@/data/guides';
import { FileText, ArrowRight, Filter } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Webroot How-To Guides & Troubleshooting Knowledgebase',
  description: 'Step-by-step technical guides for Webroot downloads, installation, activation, clean uninstallation, scan fixes, and website unblocking.',
});

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Guides' }]} />

      <div className="space-y-2 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Webroot Knowledgebase & Technical Guides
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Comprehensive step-by-step guides covering software setup, keycode activation, error troubleshooting, and complete clean uninstallation routines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GUIDES_DATA.map((guide) => (
          <div key={guide.slug} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between hover:shadow-lg transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
                  {guide.category.replace('-', ' ')}
                </span>
                <span>{guide.readingTime}</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 line-clamp-2">{guide.title}</h2>
              <p className="text-xs text-slate-600 line-clamp-3">{guide.description}</p>
            </div>

            <Link
              href={`/guides/${guide.slug}`}
              className="inline-flex items-center gap-1.5 font-bold text-xs text-sky-600 hover:text-sky-700 pt-2"
            >
              Read Guide <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
