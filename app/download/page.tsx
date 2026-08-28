import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Download, ExternalLink, ShieldCheck, Laptop, Smartphone, AlertTriangle } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import PlatformLogo from '@/components/common/PlatformLogo';

export const metadata = constructMetadata({
  title: 'Download Webroot - Official Software Download Hub',
  description: 'Download Webroot SecureAnywhere installer files for Windows 11, Windows 10, Mac, Android, iOS, and Chromebook.',
});

export default function DownloadPage() {
  const platforms = [
    {
      name: 'Windows PC',
      slug: 'windows',
      fileType: 'Executable (.exe)',
      supportedOS: 'Windows 11, 10, 8.1 (32/64-bit)',
      desc: 'Standard installer for Webroot SecureAnywhere AntiVirus, Plus, Complete, and Gamers.',
      officialLink: 'https://www.webroot.com/us/en/home/products/av',
    },
    {
      name: 'Mac (macOS)',
      slug: 'mac',
      fileType: 'Disk Image (.dmg)',
      supportedOS: 'macOS 11 (Big Sur) or higher',
      desc: 'Mac edition setup file requiring Full Disk Access permissions.',
      officialLink: 'https://www.webroot.com/us/en/home/products/av',
    },
    {
      name: 'Android',
      slug: 'android',
      fileType: 'Google Play Store App',
      supportedOS: 'Android OS 8.0+',
      desc: 'Mobile security app scanning app installs, SMS links, and Wi-Fi networks.',
      officialLink: 'https://play.google.com/store/apps/details?id=com.webroot.security',
    },
    {
      name: 'iPhone / iPad (iOS)',
      slug: 'ios',
      fileType: 'Apple App Store App',
      supportedOS: 'iOS 14.0+',
      desc: 'Mobile Web Threat Shield and Secure VPN protection for iOS devices.',
      officialLink: 'https://apps.apple.com/us/app/webroot-mobile-security/id1527338573',
    },
    {
      name: 'Chromebook',
      slug: 'chromebook',
      fileType: 'Chrome Web Store / Play Store',
      supportedOS: 'ChromeOS with Play Store support',
      desc: 'Web threat filtering and extension protection for ChromeOS laptops.',
      officialLink: 'https://www.webroot.com/us/en/home/products/chromebook',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumbs items={[{ label: 'Download Center' }]} />

      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2E8740] text-white border border-[#236C33] text-xs font-semibold uppercase tracking-wider shadow-sm">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span>Official Download Center</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-semibold">Download Webroot</h1>
        <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
          Access official Webroot software downloads for all supported operating systems. Always use official Webroot destinations for file setup.
        </p>
      </div>

      {/* Security Warning Notice */}
      <div className="p-4 bg-[#EBF6EE] border border-[#C3E6CB] rounded-2xl flex items-start gap-3 text-xs text-[#1B4223]">
        <AlertTriangle className="w-5 h-5 text-[#2E8740] shrink-0 mt-0.5" />
        <div>
          <strong>Safety Notice:</strong> To protect your device, never download modified or third-party executable files from unofficial websites. This page directs you strictly to verified Webroot domains and official app stores.
        </div>
      </div>

      {/* Platform Download Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((plat) => (
          <div key={plat.slug} className="bg-white rounded-3xl border border-slate-200/80 p-7 space-y-5 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="px-3 py-1 rounded-full font-bold uppercase text-[10px] tracking-wider bg-slate-100 text-slate-700">
                  {plat.fileType}
                </span>
                <span className="text-[11px] font-mono text-slate-500">{plat.supportedOS}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                  <PlatformLogo platform={plat.slug} className="w-7 h-7" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#2E8740] transition-colors">{plat.name}</h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{plat.desc}</p>
            </div>

            <div className="pt-5 border-t border-slate-100 space-y-2.5">
              <Link
                href={`/install/${plat.slug}`}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900 hover:bg-[#2E8740] text-white font-bold text-xs transition-colors shadow-sm"
              >
                View Setup Instructions
              </Link>
              <a
                href={plat.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-colors"
              >
                Go to Official Download <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
