import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PRODUCTS_DATA } from '@/data/products';
import { GUIDES_DATA } from '@/data/guides';
import { FAQS_DATA } from '@/data/faqs';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { Shield, Check, ExternalLink, ArrowRight, Laptop, Smartphone, AlertTriangle, HelpCircle, Key, Download } from 'lucide-react';
import { getPlatformBadgeColor, formatDate } from '@/lib/utils';
import { constructMetadata } from '@/lib/metadata';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) return {};
  return constructMetadata({
    title: `${product.name} - Detailed Product Research`,
    description: product.shortDescription,
    slug: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedGuides = GUIDES_DATA.filter((g) =>
    g.relatedProductSlugs?.includes(product.slug)
  ).slice(0, 3);

  const productFaqs = FAQS_DATA.filter((f) => f.category === 'products' || f.category === 'general').slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: product.name }]} />

      {/* Hero Section */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-sky-950 text-sky-400 border border-sky-800">
            {product.category}
          </span>
          <span className="text-xs text-slate-400 font-medium">Last Verified: {formatDate(product.lastVerified)}</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-semibold text-white">{product.name}</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">{product.tagline}</p>
        </div>

        {/* Support Platform Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-semibold text-slate-400 mr-2">Supported Platforms:</span>
          {product.supportedPlatforms.map((plat) => (
            <span key={plat} className={`px-2.5 py-1 rounded text-xs font-bold capitalize border ${getPlatformBadgeColor(plat)}`}>
              {plat}
            </span>
          ))}
          <span className="text-xs text-slate-400 ml-4 font-semibold">Device Limit: {product.deviceLimit}</span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
          <a
            href={product.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl transition-colors shadow"
          >
            Visit Official Webroot Product Page <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/download"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm rounded-xl transition-colors"
          >
            Download Instructions <Download className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Grid: Overview & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Product Overview</h2>
            <p className="text-sm text-slate-700 leading-relaxed">{product.description}</p>

            <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl space-y-1">
              <span className="font-bold text-sky-900 text-xs uppercase tracking-wider">Target Audience</span>
              <p className="text-xs text-sky-800">{product.targetAudience}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Key Features & Capabilities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pros & Considerations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
              <h3 className="font-bold text-slate-900 text-base text-emerald-700 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" /> Key Strengths
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
              <h3 className="font-bold text-slate-900 text-base text-amber-700 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" /> Considerations
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.considerations.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">System Requirements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="p-4 bg-slate-50 rounded-xl space-y-1">
                <span className="font-semibold text-slate-900">Supported OS:</span>
                <p>{product.systemRequirements.os.join(' • ')}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl space-y-1">
                <span className="font-semibold text-slate-900">RAM Requirement:</span>
                <p>{product.systemRequirements.ram}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl space-y-1">
                <span className="font-semibold text-slate-900">Disk Space:</span>
                <p>{product.systemRequirements.diskSpace}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl space-y-1">
                <span className="font-semibold text-slate-900">Supported Browsers:</span>
                <p>{product.systemRequirements.browser.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Official Verification Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">Official Webroot Links</h3>
            <div className="space-y-2 text-xs">
              <a
                href={product.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold"
              >
                <span>Product Store</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href={product.supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold"
              >
                <span>Support Knowledge Base</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm">Related How-To Guides</h3>
              <div className="space-y-3">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="block p-3 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-100 transition-colors group"
                  >
                    <div className="font-semibold text-slate-900 text-xs group-hover:text-sky-600">{guide.title}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{guide.readingTime}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
