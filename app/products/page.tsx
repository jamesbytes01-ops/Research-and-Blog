import React from 'react';
import ProductGrid from '@/components/products/ProductGrid';
import { PRODUCTS_DATA } from '@/data/products';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Webroot Products & Security Plans Research',
  description: 'Explore the full range of Webroot products including Essentials AntiVirus, Internet Security Plus, Complete, Gamers, VPN, and PC Optimizer.',
});

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Products' }]} />

      <div className="space-y-2 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Webroot Product Catalog & Security Plans
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Comprehensive breakdown of Webroot SecureAnywhere antivirus solutions, device compatibility, key features, system requirements, and platform availability.
        </p>
      </div>

      <ProductGrid products={PRODUCTS_DATA} />
    </div>
  );
}
