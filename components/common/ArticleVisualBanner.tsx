'use client';

import React from 'react';

interface ArticleVisualBannerProps {
  slug: string;
}

export default function ArticleVisualBanner({ slug }: ArticleVisualBannerProps) {
  const getArticleImage = (articleSlug: string) => {
    switch (articleSlug) {
      case 'how-cloud-antivirus-architecture-works':
        return {
          src: '/images/articles/how-cloud-antivirus-architecture-works.png',
          alt: 'Cloud Antivirus Threat Intelligence Architecture',
          tag: 'Cloud Architecture',
          badge: '12ms Telemetry',
        };
      case 'understanding-ransomware-protection-and-rollback':
        return {
          src: '/images/articles/understanding-ransomware-protection-and-rollback.png',
          alt: 'Ransomware Defense & System RAM Rollback Journal',
          tag: 'Ransomware Rollback',
          badge: '100% Data Restore',
        };
      case 'phishing-protection-real-time-url-filtering':
        return {
          src: '/images/articles/phishing-protection-real-time-url-filtering.png',
          alt: 'Real-Time Anti-Phishing Web Threat Shield',
          tag: 'Phishing Shield',
          badge: 'DOM Inspection',
        };
      case 'why-gamers-need-lightweight-antivirus':
        return {
          src: '/images/articles/why-gamers-need-lightweight-antivirus.png',
          alt: 'Lightweight Antivirus FPS & RAM Benchmark for Gamers',
          tag: 'PC Gamers Mode',
          badge: '240 FPS Steady',
        };
      default:
        return {
          src: '/images/articles/how-cloud-antivirus-architecture-works.png',
          alt: 'Webroot Cybersecurity Editorial Research',
          tag: 'Research Whitepaper',
          badge: 'Verified Analysis',
        };
    }
  };

  const imgInfo = getArticleImage(slug);

  return (
    <div className="w-full h-48 rounded-2xl overflow-hidden relative group border border-slate-200/80 shadow-inner bg-slate-950">
      {/* Background Generated Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgInfo.src}
        alt={imgInfo.alt}
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
      />

      {/* Subtle Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40" />

      {/* Top Floating Badges */}
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
