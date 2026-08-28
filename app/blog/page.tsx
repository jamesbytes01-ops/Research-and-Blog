import React from 'react';
import ArticleCard from '@/components/blog/ArticleCard';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { ARTICLES_DATA } from '@/data/articles';
import { Sparkles } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Webroot Research & Cybersecurity Editorial Blog',
  description: 'In-depth research articles on Webroot cloud architecture, ransomware defense, phishing protection, keylogger tactics, and gaming performance.',
});

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <Breadcrumbs items={[{ label: 'Research Blog' }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Interactive Editorial Visuals Included</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Cybersecurity & Webroot Research Platform
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Technical editorial articles, malware research, cloud threat intelligence whitepapers, and interactive endpoint security analyses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES_DATA.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

