'use client';

import React from 'react';

interface FeatureVisualBannerProps {
  featureId: string;
}

export default function FeatureVisualBanner({ featureId }: FeatureVisualBannerProps) {
  const getFeatureImage = (id: string) => {
    switch (id) {
      case 'cloud-antivirus':
        return {
          src: '/images/features/cloud-antivirus.png',
          alt: 'Real-Time Cloud Security Intelligence Network',
          tag: 'Cloud Intelligence',
          badge: '11ms Latency',
        };
      case 'web-threat-shield':
        return {
          src: '/images/features/web-threat-shield.png',
          alt: 'Web Threat Shield Real-Time URL Protection',
          tag: 'URL Protection',
          badge: 'Firewall Active',
        };
      case 'anti-phishing':
        return {
          src: '/images/features/anti-phishing.png',
          alt: 'Real-Time Anti-Phishing Brand Spoofing Intercept',
          tag: 'Anti-Phishing',
          badge: 'Spoof Intercept',
        };
      case 'identity-shield':
        return {
          src: '/images/features/identity-shield.png',
          alt: 'Identity and Keylogger Encryption Vault Shield',
          tag: 'Keylogger Vault',
          badge: 'RAM Encrypted',
        };
      default:
        return {
          src: '/images/features/cloud-antivirus.png',
          alt: 'Webroot Endpoint Shield',
          tag: 'Security Shield',
          badge: 'Active Protection',
        };
    }
  };

  const imgInfo = getFeatureImage(featureId);

  return (
    <div className="w-full h-44 rounded-2xl overflow-hidden relative group border border-slate-200/80 shadow-inner bg-slate-950">
      {/* Background Generated Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgInfo.src}
        alt={imgInfo.alt}
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
      />

      {/* Subtle Gradient Overlays for High Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40" />

      {/* Top Floating Chips */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900/90 text-sky-400 border border-sky-800/80 shadow-md backdrop-blur">
          {imgInfo.tag}
        </span>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/90 border border-emerald-800/80 shadow-md backdrop-blur">
          {imgInfo.badge}
        </span>
      </div>

      {/* Bottom Subtitle Caption */}
      <div className="absolute bottom-3 left-3 right-3 text-[11px] font-medium text-slate-200 truncate drop-shadow">
        {imgInfo.alt}
      </div>
    </div>
  );
}
