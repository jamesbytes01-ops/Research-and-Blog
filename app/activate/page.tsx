import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Key, HelpCircle, CheckCircle2, AlertTriangle, ExternalLink, ArrowRight } from 'lucide-react';
import { GUIDES_DATA } from '@/data/guides';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Webroot Keycode Lookup & Product Activation Center',
  description: 'Learn where to find your 20-character Webroot keycode, how to activate your license key, and troubleshoot activation errors.',
});

export default function ActivatePage() {
  const activationGuides = GUIDES_DATA.filter((g) => g.category === 'activation' || g.category === 'troubleshooting');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Activation Center' }]} />

      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2E8740] text-white border border-[#236C33] text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Key className="w-4 h-4 text-white" />
          <span>Keycode & Subscription Activation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-semibold">Webroot Keycode & Activation Hub</h1>
        <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
          Detailed guide on locating your 20-character alphanumeric keycode, entering product keys into the software console, and resolving activation errors.
        </p>
      </div>

      {/* Keycode Format Breakdown */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">What is a Webroot Keycode?</h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          A Webroot Keycode is a unique 20-character product key formatted in 5 groups of 4 characters. It validates your software license subscription and grants access to real-time cloud threat intelligence.
        </p>

        <div className="p-4 bg-slate-900 text-sky-400 font-mono text-center text-base sm:text-lg rounded-xl tracking-widest font-bold">
          XXXX - XXXX - XXXX - XXXX - XXXX
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
          <strong className="block text-amber-950 font-bold">Keycode Entry Rules:</strong>
          <ul className="list-disc pl-4 space-y-1 text-amber-900">
            <li>Webroot keycodes NEVER contain the letters &quot;O&quot; or &quot;I&quot; (they use zero &apos;0&apos; and one &apos;1&apos; to prevent character confusion).</li>
            <li>Dashes are automatically added or optional depending on desktop console version.</li>
            <li>Ensure no extra trailing spaces are included when copy-pasting from email receipts.</li>
          </ul>
        </div>
      </div>

      {/* Where to Find Keycode */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Where to Find Your Keycode</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
            <div className="font-bold text-slate-900">1. Confirmation Email</div>
            <p>Search email inbox for &quot;Webroot Order&quot;, &quot;Keycode&quot;, or &quot;Purchase Confirmation&quot; from Webroot or authorized retailers.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
            <div className="font-bold text-slate-900">2. Retail Box Package</div>
            <p>Look at the white sticker on the back of the card enclosed inside the physical retail box.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
            <div className="font-bold text-slate-900">3. Installed Webroot Console</div>
            <p>Open Webroot on an active computer, click My Account to display active product key details.</p>
          </div>
        </div>
      </div>

      {/* Troubleshooting Activation Errors */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Activation Troubleshooting & Fixes</h2>
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-xl space-y-1">
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm text-sky-700">Invalid Keycode Error</h3>
            <p className="text-xs text-slate-600">Re-check typed characters. Ensure &quot;8&quot; is not typed as &quot;B&quot;, or &quot;0&quot; as &quot;O&quot;. Clear browser cache or copy-paste directly without spaces.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl space-y-1">
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm text-sky-700">Activation Server Connection Failed</h3>
            <p className="text-xs text-slate-600">Verify active internet connection and system date/time. System clock drift breaks SSL handshake with cloud activation servers.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl space-y-1">
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm text-sky-700">Subscription Expired / Renewing</h3>
            <p className="text-xs text-slate-600">If your keycode is expired, enter a new keycode in My Account console or log in to my.webrootanywhere.com to manage active billing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
