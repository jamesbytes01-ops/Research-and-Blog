import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { ShieldCheck, Info, ExternalLink } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'About Our Independent Webroot Knowledge Hub',
  description: 'Learn about our independent research methodology, editorial policies, and factual verification standards.',
});

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4">
        <h1 className="text-3xl sm:text-5xl font-semibold">Editorial Standards & Mission</h1>
        <p className="text-base text-slate-300 leading-relaxed">
          An independent knowledge, research, comparison, and educational resource dedicated to endpoint security and Webroot technology.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-sm text-slate-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-slate-900 border-b border-slate-100 pb-3">Our Core Principles</h2>

        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 text-base text-sky-700">1. Fact-Checked & Verified Research</h3>
            <p>We test and verify product features, operating system specifications, installation steps, and keycode activation workflows against official documentation before publishing.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 text-base text-sky-700">2. Strict Independent Boundary</h3>
            <p>This platform is independently maintained and is not owned, operated, or endorsed by Webroot Inc. or OpenText. We direct users seeking official account management or official tech support directly to official Webroot portals.</p>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 text-base text-sky-700">3. Safe & Official Direct Links</h3>
            <p>We do not host, modify, or package third-party installers. All download links direct visitors to verified official Webroot repositories and app stores.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
