import React from 'react';
import RecommendationQuiz from '@/components/quiz/RecommendationQuiz';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Which Webroot Product Is Right for Me? - Product Recommendation Quiz',
  description: 'Interactive diagnostic tool helping you choose between Webroot AntiVirus, Internet Security Plus, Complete, and Secure VPN.',
});

export default function QuizPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Product Diagnostic Quiz' }]} />

      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Product Recommendation Diagnostic
        </h1>
        <p className="text-sm text-slate-600">
          Answer 4 quick questions about your devices, backup needs, and gaming preferences to find the best Webroot plan.
        </p>
      </div>

      <RecommendationQuiz />
    </div>
  );
}
