'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Shield, FileText, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { searchSite } from '@/lib/search';
import { SearchResultItem } from '@/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via document event or custom handler
          const searchBtn = document.querySelector('button[aria-label="Search site"]') as HTMLButtonElement;
          if (searchBtn) searchBtn.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const found = searchSite(query);
      setResults(found.slice(0, 8));
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'product':
        return <Shield className="w-4 h-4 text-sky-600" />;
      case 'guide':
        return <FileText className="w-4 h-4 text-emerald-600" />;
      case 'article':
        return <FileText className="w-4 h-4 text-indigo-600" />;
      case 'comparison':
        return <Layers className="w-4 h-4 text-amber-600" />;
      default:
        return <HelpCircle className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, guides, activation keycode, error fixes..."
            className="w-full text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none bg-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 text-xs px-2 py-1 rounded bg-slate-100"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Quick Suggestions if empty */}
        {query.trim().length === 0 && (
          <div className="p-6 space-y-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Popular Topics</span>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Download Webroot', href: '/download' },
                { label: 'Keycode Activation', href: '/activate' },
                { label: 'Install Windows 11', href: '/install/windows' },
                { label: 'Webroot vs Norton', href: '/compare/webroot-vs-norton-360' },
                { label: 'Uninstall Guide', href: '/guides/how-to-uninstall-webroot-completely' }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 rounded-full border border-slate-200 transition-colors"
                >
                  {item.label}
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        {query.trim().length > 0 && (
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
            {results.length > 0 ? (
              results.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={onClose}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white shrink-0 mt-0.5">
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-900 text-sm group-hover:text-sky-600 truncate">
                        {item.title}
                      </span>
                      {item.badgeText && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                          {item.badgeText}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.description}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="py-12 text-center text-slate-500 text-sm">
                No matching products, guides, or articles found for &quot;{query}&quot;.
                <div className="mt-3">
                  <Link
                    href={`/search?q=${encodeURIComponent(query)}`}
                    onClick={onClose}
                    className="text-sky-600 font-semibold hover:underline"
                  >
                    Search across full database →
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
          <span>
            Press <kbd className="px-1 py-0.5 bg-white border rounded">ESC</kbd> to close
          </span>
          <Link href="/search" onClick={onClose} className="hover:text-slate-600 font-medium">
            Advanced Search Page
          </Link>
        </div>
      </div>
    </div>
  );
}
