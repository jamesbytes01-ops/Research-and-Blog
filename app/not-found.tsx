import React from 'react';
import Link from 'next/link';
import { ShieldAlert, Home, Search, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
        <ShieldAlert className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold text-slate-900">404 - Page Not Found</h1>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          The Webroot guide, product specification, or research article you were looking for does not exist or has been moved.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-sky-700 text-white font-bold text-xs rounded-xl transition-colors shadow"
        >
          <Home className="w-4 h-4" /> Return to Home Page
        </Link>
        <Link
          href="/search"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs rounded-xl transition-colors"
        >
          <Search className="w-4 h-4" /> Search Knowledgebase
        </Link>
      </div>

      <div className="pt-8 border-t border-slate-200 text-xs text-slate-500 space-y-2">
        <span className="font-semibold text-slate-700">Popular Destinations:</span>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/products" className="hover:text-sky-600 underline">Product Catalog</Link>
          <Link href="/download" className="hover:text-sky-600 underline">Download Center</Link>
          <Link href="/activate" className="hover:text-sky-600 underline">Keycode Activation</Link>
          <Link href="/compare" className="hover:text-sky-600 underline">Comparison Matrix</Link>
        </div>
      </div>
    </div>
  );
}
