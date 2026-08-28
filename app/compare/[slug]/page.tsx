import React from 'react';
import { notFound } from 'next/navigation';
import { COMPARISONS_DATA } from '@/data/comparisons';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SourceList from '@/components/blog/SourceList';
import { Check, Minus, ExternalLink, ArrowRight, Info } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { constructMetadata } from '@/lib/metadata';
import Link from 'next/link';

interface CompareDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPARISONS_DATA.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CompareDetailProps) {
  const { slug } = await params;
  const comp = COMPARISONS_DATA.find((c) => c.slug === slug);
  if (!comp) return {};
  return constructMetadata({
    title: comp.title,
    description: comp.subtitle,
    slug: `/compare/${comp.slug}`,
  });
}

export default async function CompareDetailPage({ params }: CompareDetailProps) {
  const { slug } = await params;
  const comp = COMPARISONS_DATA.find((c) => c.slug === slug);

  if (!comp) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Compare', href: '/compare' }, { label: comp.title }]} />

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4">
        <div className="flex justify-between items-center text-xs text-slate-400">
          <span className="uppercase font-bold tracking-wider text-sky-400">Head-to-Head Comparison</span>
          <span>Verified: {formatDate(comp.lastVerified)}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">{comp.title}</h1>
        <p className="text-base text-slate-300 max-w-3xl leading-relaxed">{comp.subtitle}</p>
      </div>

      {/* Overview Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Editorial Summary</h2>
        <p className="text-sm text-slate-700 leading-relaxed">{comp.overview}</p>

        <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl space-y-1">
          <span className="font-bold text-sky-900 text-xs uppercase tracking-wider">Independent Verdict</span>
          <p className="text-xs text-sky-900 leading-relaxed">{comp.verdict}</p>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-md">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="bg-slate-900 text-white text-sm">
              <th className="p-4 sm:p-5 w-1/3">Evaluation Metric</th>
              <th className="p-4 sm:p-5 text-center bg-sky-950 text-sky-300 font-bold">Webroot SecureAnywhere</th>
              <th className="p-4 sm:p-5 text-center font-bold">{comp.competitorName}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
            {comp.items.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
                <td className="p-4 font-semibold text-slate-900">
                  {item.featureName}
                  <div className="text-[11px] text-slate-400 font-normal">{item.category}</div>
                </td>
                <td className="p-4 text-center bg-sky-50/50 font-medium text-slate-800 border-l border-r border-slate-200">
                  {item.webrootDetails}
                </td>
                <td className="p-4 text-center font-medium text-slate-700">
                  {item.competitorDetails}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sources list */}
      <SourceList sources={comp.sources} />
    </div>
  );
}
