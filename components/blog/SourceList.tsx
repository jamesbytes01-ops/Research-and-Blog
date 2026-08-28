import React from 'react';
import { Source } from '@/types';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface SourceListProps {
  sources: Source[];
}

export default function SourceList({ sources }: SourceListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 my-8">
      <div className="flex items-center gap-2 text-slate-900 font-bold text-sm border-b border-slate-200 pb-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        <span>Verified Technical Sources & Citation References</span>
      </div>
      <ul className="space-y-3 text-xs text-slate-600">
        {sources.map((src, idx) => (
          <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 rounded-lg bg-white border border-slate-100">
            <div>
              <span className="font-semibold text-slate-800">{src.title}</span>
              <div className="text-[11px] text-slate-400">
                Publisher: {src.publisher} • Verified: {src.accessedAt}
              </div>
            </div>
            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-600 hover:underline font-semibold shrink-0"
            >
              Link <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
