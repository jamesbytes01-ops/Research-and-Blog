import React from 'react';
import FAQAccordion from '@/components/faq/FAQAccordion';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { FAQS_DATA } from '@/data/faqs';
import { HelpCircle } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Webroot Frequently Asked Questions & Knowledgebase',
  description: 'Searchable FAQ directory covering Webroot downloads, scan duration, keycode activation, uninstallation, and troubleshooting.',
});

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'FAQ Directory' }]} />

      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-sm text-slate-600">
          Instant answers to common questions about Webroot antivirus software, installation requirements, and keycode activation.
        </p>
      </div>

      <FAQAccordion faqs={FAQS_DATA} />
    </div>
  );
}
