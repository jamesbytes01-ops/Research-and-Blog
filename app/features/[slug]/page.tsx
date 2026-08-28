import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { FEATURES_DATA } from '@/data/features';
import { PRODUCTS_DATA } from '@/data/products';
import { Zap, Check, ArrowRight, Shield } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';

interface FeatureDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FEATURES_DATA.map((f) => ({ slug: f.id }));
}

export async function generateMetadata({ params }: FeatureDetailProps) {
  const { slug } = await params;
  const feature = FEATURES_DATA.find((f) => f.id === slug);
  if (!feature) return {};
  return constructMetadata({
    title: `${feature.name} - Webroot Security Feature Breakdown`,
    description: feature.description,
    slug: `/features/${feature.id}`,
  });
}

export default async function FeatureDetailPage({ params }: FeatureDetailProps) {
  const { slug } = await params;
  const feature = FEATURES_DATA.find((f) => f.id === slug);

  if (!feature) {
    notFound();
  }

  const includedProducts = PRODUCTS_DATA.filter((p) => feature.includedIn.includes(p.slug));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Features', href: '/features' }, { label: feature.name }]} />

      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4">
        <span className="px-3 py-1 rounded text-xs font-bold uppercase bg-sky-950 text-sky-400 border border-sky-800">
          {feature.category} Technology
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">{feature.name}</h1>
        <p className="text-base text-slate-300 leading-relaxed">{feature.description}</p>
      </div>

      {/* Product Availability Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <Shield className="w-5 h-5 text-sky-600" /> Products That Include This Feature
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {includedProducts.map((product) => (
            <div key={product.slug} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 flex flex-col justify-between">
              <div>
                <div className="font-bold text-slate-900 text-sm">{product.name}</div>
                <div className="text-xs text-slate-500 mt-1">{product.shortDescription}</div>
              </div>
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:underline pt-2"
              >
                View Product <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
