import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { FEATURES_DATA } from '@/data/features';
import { ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import FeatureVisualBanner from '@/components/common/FeatureVisualBanner';

export const metadata = constructMetadata({
  title: 'Webroot Security Features & Technology Deep Dives',
  description: 'Explore Webroot features: Real-Time Cloud Security, Ransomware Rollback Shield, Web Threat Shield, Keylogger Protection, and System Optimizer.',
});

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <Breadcrumbs items={[{ label: 'Features' }]} />

      <div className="space-y-3 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Webroot Security Technology & Features
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Technical breakdown of core Webroot endpoint protection engines, real-time threat intelligence lookup, and identity shielding capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES_DATA.map((feature) => (
          <div key={feature.id} className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="p-2">
              <FeatureVisualBanner featureId={feature.id} />
            </div>

            <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                  {feature.category}
                </span>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{feature.name}</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>

              <Link
                href={`/features/${feature.id}`}
                className="inline-flex items-center gap-1.5 font-bold text-xs text-sky-600 hover:text-sky-700 transition-colors pt-2"
              >
                Feature Details & Specs <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

