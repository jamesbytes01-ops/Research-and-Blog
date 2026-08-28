import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SourceList from '@/components/blog/SourceList';
import { ARTICLES_DATA } from '@/data/articles';
import { Clock, Calendar, Shield, ArrowRight, User } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { constructMetadata } from '@/lib/metadata';

import CloudArchitectureSimulator from '@/components/blog/visuals/CloudArchitectureSimulator';
import RansomwareRollbackSimulator from '@/components/blog/visuals/RansomwareRollbackSimulator';
import PhishingInspectorSimulator from '@/components/blog/visuals/PhishingInspectorSimulator';
import GamerPerformanceComparator from '@/components/blog/visuals/GamerPerformanceComparator';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);
  if (!article) return {};
  return constructMetadata({
    title: article.title,
    description: article.excerpt,
    slug: `/blog/${article.slug}`,
    type: 'article',
  });
}

function renderBlogVisual(slug: string) {
  switch (slug) {
    case 'how-cloud-antivirus-architecture-works':
      return <CloudArchitectureSimulator />;
    case 'understanding-ransomware-protection-and-rollback':
      return <RansomwareRollbackSimulator />;
    case 'phishing-protection-real-time-url-filtering':
      return <PhishingInspectorSimulator />;
    case 'why-gamers-need-lightweight-antivirus':
      return <GamerPerformanceComparator />;
    default:
      return null;
  }
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: article.title }]} />

      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-sky-950 text-sky-400 border border-sky-800">
            {article.category}
          </span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readingTime}
            </span>
            <span>Published: {formatDate(article.publishedDate)}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">{article.title}</h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">{article.excerpt}</p>

        <div className="pt-5 border-t border-slate-800 flex items-center gap-3 text-xs">
          <div className="w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
            {article.author.name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-white text-sm">{article.author.name}</div>
            <div className="text-xs text-slate-400">{article.author.role}</div>
          </div>
        </div>
      </div>

      {/* Interactive Visual Component for this Blog */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Interactive Research Visual</h2>
          <span className="text-xs text-sky-600 font-semibold">100% Real-Time Simulation</span>
        </div>
        {renderBlogVisual(article.slug)}
      </div>

      {/* Article Body Content */}
      <article className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-12 space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed shadow-sm">
        <div className="prose prose-slate max-w-none space-y-6">
          {article.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('# ')) {
              return (
                <h1 key={idx} className="text-2xl sm:text-3xl font-bold text-slate-900 pt-6 pb-2 border-b border-slate-100">
                  {paragraph.replace('# ', '')}
                </h1>
              );
            }
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 pt-4 pb-1">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-lg sm:text-xl font-bold text-slate-900 pt-3">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            return <p key={idx} className="text-slate-700 leading-relaxed">{paragraph}</p>;
          })}
        </div>
      </article>

      {/* Verified Sources */}
      <SourceList sources={article.sources} />
    </div>
  );
}

