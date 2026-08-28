import React from 'react';
import Link from 'next/link';
import { Article } from '@/types';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import ArticleVisualBanner from '@/components/common/ArticleVisualBanner';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 hover:border-sky-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      {/* Unique Article Visual Banner Header */}
      <div className="p-2">
        <ArticleVisualBanner slug={article.slug} />
      </div>

      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.readingTime}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
            <Link href={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">{article.excerpt}</p>

          {/* Visual Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-200/80 text-[11px] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
            <span>Includes Interactive Visual Simulator</span>
          </div>
        </div>

        <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xs border border-slate-200">
              {article.author.name.charAt(0)}
            </div>
            <span className="font-semibold text-slate-700">{article.author.name}</span>
          </div>
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1.5 font-bold text-sky-600 hover:text-sky-700 transition-colors"
          >
            Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}


