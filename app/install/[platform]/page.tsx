import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { GUIDES_DATA } from '@/data/guides';
import { Check, ArrowRight, ExternalLink, AlertCircle } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';

interface PlatformInstallProps {
  params: Promise<{ platform: string }>;
}

export async function generateStaticParams() {
  return [
    { platform: 'windows' },
    { platform: 'mac' },
    { platform: 'android' },
    { platform: 'ios' },
    { platform: 'chromebook' },
  ];
}

export async function generateMetadata({ params }: PlatformInstallProps) {
  const { platform } = await params;
  return constructMetadata({
    title: `How to Install Webroot on ${platform.toUpperCase()}`,
    description: `Complete step-by-step installation instructions for Webroot SecureAnywhere on ${platform}.`,
    slug: `/install/${platform}`,
  });
}

export default async function PlatformInstallPage({ params }: PlatformInstallProps) {
  const { platform } = await params;
  const guide = GUIDES_DATA.find((g) => g.platform === platform && g.category === 'installation');

  if (!guide) {
    // If specific platform guide not matched, fallback to general install
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-center">
        <Breadcrumbs items={[{ label: 'Install', href: '/install' }, { label: platform }]} />
        <h1 className="text-3xl font-semibold text-slate-900">Install Webroot on {platform.toUpperCase()}</h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm">
          Detailed installation guide for {platform} is available in our knowledge base.
        </p>
        <Link href="/download" className="inline-block px-6 py-3 bg-sky-600 text-white font-bold text-sm rounded-xl">
          Go to Download Center
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Install', href: '/install' }, { label: guide.title }]} />

      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-3">
        <span className="px-3 py-1 rounded text-xs font-bold uppercase bg-sky-950 text-sky-400 border border-sky-800">
          {platform} Setup Guide
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold">{guide.title}</h1>
        <p className="text-sm text-slate-300">{guide.description}</p>
      </div>

      {/* Prerequisites */}
      {guide.prerequisites && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h2 className="font-bold text-slate-900 text-base">Before You Begin (Prerequisites)</h2>
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
        <h2 className="text-xl font-bold text-slate-900">Step-by-Step Installation Steps</h2>
        {guide.steps.map((step) => (
          <div key={step.stepNumber} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center">
                {step.stepNumber}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{step.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-11">{step.description}</p>
            {step.codeOrKeyLocation && (
              <div className="ml-11 p-3 bg-slate-900 text-sky-300 font-mono text-xs rounded-xl">
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

      {/* Action Next Step */}
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-bold text-slate-900 text-sm">Need help entering your keycode?</div>
          <div className="text-xs text-slate-500">Read our keycode lookup and troubleshooting tutorial.</div>
        </div>
        <Link
          href="/activate"
          className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-colors shrink-0"
        >
          Activation Guide →
        </Link>
      </div>
    </div>
  );
}
