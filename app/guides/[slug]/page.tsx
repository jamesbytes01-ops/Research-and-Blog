import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SourceList from '@/components/blog/SourceList';
import { GUIDES_DATA } from '@/data/guides';
import { Check, Clock, Calendar, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { constructMetadata } from '@/lib/metadata';

interface GuideDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDES_DATA.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: GuideDetailProps) {
  const { slug } = await params;
  const guide = GUIDES_DATA.find((g) => g.slug === slug);
  if (!guide) return {};
  return constructMetadata({
    title: guide.title,
    description: guide.description,
    slug: `/guides/${guide.slug}`,
  });
}

export default async function GuideDetailPage({ params }: GuideDetailProps) {
  const { slug } = await params;
  const guide = GUIDES_DATA.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: guide.title }]} />

      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <span className="px-3 py-1 rounded text-[10px] font-bold uppercase bg-sky-950 text-sky-400 border border-sky-800">
            {guide.category.replace('-', ' ')}
          </span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> {guide.readingTime}
            </span>
            <span>Verified: {formatDate(guide.lastVerified)}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-white">{guide.title}</h1>
        <p className="text-base text-slate-300 leading-relaxed">{guide.description}</p>
      </div>

      {/* Prerequisites */}
      {guide.prerequisites && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h2 className="font-bold text-slate-900 text-base">Requirements & Prerequisites</h2>
          <ul className="space-y-2 text-xs text-slate-700">
            {guide.prerequisites.map((req, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Steps List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Step-by-Step Instructions</h2>
        {guide.steps.map((step) => (
          <div key={step.stepNumber} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                {step.stepNumber}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{step.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-11">{step.description}</p>

            {step.codeOrKeyLocation && (
              <div className="ml-11 p-3 bg-slate-900 text-sky-300 font-mono text-xs rounded-xl overflow-x-auto">
                {step.codeOrKeyLocation}
              </div>
            )}

            {step.warningOrNote && (
              <div className="ml-11 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                {step.warningOrNote}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Common Troubleshooting Solutions */}
      {guide.commonTroubleshooting && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-sky-600" /> Common Troubleshooting Scenarios
          </h2>
          <div className="space-y-4">
            {guide.commonTroubleshooting.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl space-y-1">
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm text-sky-700">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Verified Sources */}
      <SourceList sources={guide.sources} />
    </div>
  );
}
