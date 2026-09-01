'use client';

import React, { useState } from 'react';
import { Headset, ShieldCheck, Download, ArrowRight, Lock, Clock } from 'lucide-react';
import PlatformLogo from '@/components/common/PlatformLogo';

interface HeroSectionProps {
  remoteSoftwareUrl: string;
  marqueeItems: string[];
}

export default function HeroSection({ remoteSoftwareUrl, marqueeItems }: HeroSectionProps) {
  const [showPlatformCards, setShowPlatformCards] = useState(false);

  const handleDownloadNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPlatformCards(true);
  };

  return (
    <section className={`relative w-full text-white overflow-hidden border-b border-[#1c4d28] bg-[#020e06] flex flex-col justify-between transition-all duration-300 ${
      showPlatformCards 
        ? 'pt-10 sm:pt-12 lg:pt-14 pb-0 min-h-[860px] sm:min-h-[920px] lg:min-h-[960px]' 
        : 'pt-12 sm:pt-16 lg:pt-20 pb-0 min-h-[720px] sm:min-h-[780px]'
    }`}>
      {/* Ambient Radial Tech Glow */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(18, 68, 32, 0.5) 0%, rgba(2, 14, 6, 0.98) 78%)'
        }} 
      />

      {/* Left Side Circuit Traces Vector Overlay */}
      <svg className="absolute left-0 top-0 bottom-0 w-[300px] sm:w-[500px] h-full pointer-events-none opacity-70 z-0" viewBox="0 0 500 650" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 160 H140 L180 120 H300" stroke="#1c572b" strokeWidth="1.5" />
        <circle cx="300" cy="120" r="4" fill="#65C400" className="animate-pulse" />

        <path d="M0 240 H200 L240 270 H380" stroke="#1c572b" strokeWidth="1.5" />
        <circle cx="380" cy="270" r="4" fill="#65C400" />

        <path d="M0 320 H150 L180 290 H260" stroke="#1c572b" strokeWidth="1.5" />
        <circle cx="260" cy="290" r="4" fill="#65C400" />

        <path d="M0 400 H220 L260 430 H410" stroke="#1c572b" strokeWidth="1.5" />
        <circle cx="410" cy="430" r="4" fill="#65C400" className="animate-pulse" />

        <path d="M0 490 H110 L140 460 H220" stroke="#1c572b" strokeWidth="1.5" />
        <circle cx="220" cy="460" r="4" fill="#65C400" />
      </svg>

      {/* Right Side Concentric Radar & Tech Arcs Vector Overlay */}
      <svg className="absolute right-0 top-0 bottom-0 w-[300px] sm:w-[500px] h-full pointer-events-none opacity-70 z-0" viewBox="0 0 500 650" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Concentric Tech Circles */}
        <circle cx="440" cy="320" r="190" stroke="#14421e" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="440" cy="320" r="145" stroke="#1c572b" strokeWidth="1.5" />
        <circle cx="440" cy="320" r="100" stroke="#226b35" strokeWidth="2" />
        <circle cx="440" cy="320" r="55" stroke="#1c572b" strokeWidth="1.5" />

        {/* Nodes along perimeter */}
        <circle cx="295" cy="320" r="4" fill="#65C400" />
        <circle cx="335" cy="215" r="4" fill="#65C400" />
        <circle cx="335" cy="425" r="4" fill="#65C400" />

        {/* Branching Lines from Radar */}
        <path d="M295 320 H190 L150 280 H90" stroke="#1c572b" strokeWidth="1.5" />
        <circle cx="90" cy="280" r="4" fill="#65C400" className="animate-pulse" />

        <path d="M335 425 L275 485 H170" stroke="#1c572b" strokeWidth="1.5" />
        <circle cx="170" cy="485" r="4" fill="#65C400" />

        <path d="M335 215 L275 155 H130" stroke="#1c572b" strokeWidth="1.5" />
        <circle cx="130" cy="155" r="4" fill="#65C400" />
      </svg>

      {/* Centered Hero Content Container */}
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-start transition-all duration-300 ${
        showPlatformCards ? 'space-y-3 sm:space-y-4 pt-2 sm:pt-4 pb-8 sm:pb-12' : 'space-y-5 sm:space-y-6 pt-4 sm:pt-8 pb-10 sm:pb-14'
      }`}>
        
        {/* Top Pill Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#051c0e]/90 text-white border border-[#1e522b] text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-lg backdrop-blur-md">
          <Headset className="w-4 h-4 text-[#65C400]" />
          <span className="w-2 h-2 rounded-full bg-[#65C400] animate-pulse" />
          <span className="tracking-wide">CONNECT TO SUPPORT AGENT – LIVE WEBROOT REMOTE TECHNICAL SUPPORT</span>
        </div>

        {/* Main Title & Subtitle Paragraph */}
        <div className="space-y-2 sm:space-y-3 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Connect to <span className="text-[#65C400]">Support Agent</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-sm">
            Download our official Webroot remote connection software to securely share<br className="hidden sm:inline" />
            {' '}your session with a <strong className="font-bold text-white">technical support specialist</strong> for diagnostics, malware<br className="hidden sm:inline" />
            {' '}removal, and <strong className="font-bold text-white">Webroot setup.</strong>
          </p>
        </div>

        {/* Central Container Box matching clipboard-image(2).png */}
        <div className={`w-full transition-all duration-300 rounded-[20px] sm:rounded-[26px] bg-[#051c0d]/95 border border-[#1e522b] shadow-[0_0_60px_rgba(20,75,36,0.35)] backdrop-blur-md space-y-4 sm:space-y-5 my-1 ${
          showPlatformCards ? 'max-w-4xl p-4 sm:p-5' : 'max-w-xl p-5 sm:p-8 space-y-6'
        }`}>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5 text-[#65C400]" />
            <span>VERIFIED WEBROOT REMOTE SUPPORT CLIENT</span>
          </div>

          {!showPlatformCards ? (
            /* Initial State: Prominent Download Now Button */
            <div className="space-y-5">
              <button
                onClick={handleDownloadNowClick}
                className="w-full py-4 px-6 rounded-2xl bg-[#65C400] hover:bg-[#58b200] active:scale-[0.99] text-white font-extrabold text-xl sm:text-2xl transition-all duration-200 shadow-xl shadow-[#65C400]/25 flex items-center justify-center gap-3.5 cursor-pointer"
              >
                <Download className="w-6.5 h-6.5" />
                <span>Download Now</span>
                <ArrowRight className="w-6 h-6" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-300 pt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#65C400]" /> Secure Connection
                </span>
                <span className="text-white/20 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Lock className="w-4 h-4 text-[#65C400]" /> 256-Bit Encrypted
                </span>
                <span className="text-white/20 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#65C400]" /> Instant Setup
                </span>
              </div>
            </div>
          ) : (
            /* Revealed State: 3 Platform Download Cards (Exactly as shown in clipboard-image(2).png) */
            <div className="space-y-4 sm:space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                {/* Windows Download Card */}
                <div className="bg-[#092612] border border-[#1f562d] rounded-xl sm:rounded-2xl p-4 flex flex-col items-center justify-between space-y-4 text-center hover:border-[#65C400]/60 transition-all duration-300 shadow-lg group">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#0c2f18] border border-[#1e522b] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      <PlatformLogo platform="windows" className="w-7 h-7" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] text-slate-300 font-medium">Download for</div>
                      <div className="text-lg sm:text-xl font-extrabold text-white">Windows</div>
                    </div>
                  </div>

                  <a
                    href={remoteSoftwareUrl}
                    download="Support_Connect.exe"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#65C400] hover:bg-[#58b200] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#65C400]/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Mac Download Card */}
                <div className="bg-[#092612] border border-[#1f562d] rounded-xl sm:rounded-2xl p-4 flex flex-col items-center justify-between space-y-4 text-center hover:border-[#65C400]/60 transition-all duration-300 shadow-lg group">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#0c2f18] border border-[#1e522b] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      <PlatformLogo platform="mac" className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] text-slate-300 font-medium">Download for</div>
                      <div className="text-lg sm:text-xl font-extrabold text-white">Mac</div>
                    </div>
                  </div>

                  <a
                    href={remoteSoftwareUrl}
                    download="Support_Connect.dmg"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#65C400] hover:bg-[#58b200] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#65C400]/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Chromebook Download Card */}
                <div className="bg-[#092612] border border-[#1f562d] rounded-xl sm:rounded-2xl p-4 flex flex-col items-center justify-between space-y-4 text-center hover:border-[#65C400]/60 transition-all duration-300 shadow-lg group">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#0c2f18] border border-[#1e522b] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      <PlatformLogo platform="chromebook" className="w-7 h-7" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] text-slate-300 font-medium">Download for</div>
                      <div className="text-lg sm:text-xl font-extrabold text-white">Chromebook</div>
                    </div>
                  </div>

                  <a
                    href={remoteSoftwareUrl}
                    download="Support_Connect.exe"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#65C400] hover:bg-[#58b200] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#65C400]/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bottom Trust Row matching clipboard-image(2).png */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-200 pt-2.5 border-t border-[#1a4726]/60">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#65C400]" /> Secure Connection
                </span>
                <span className="text-white/20 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Lock className="w-4 h-4 text-[#65C400]" /> 256-Bit Encrypted
                </span>
                <span className="text-white/20 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#65C400]" /> Instant Setup
                </span>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Marquee Ticker Strip - Positioned Flush at the End of Hero Frame */}
      <div className="w-full bg-[#051c0e]/95 border-t border-[#1e522b] py-3.5 overflow-hidden flex items-center relative z-10 mt-auto">
        <div className="animate-marquee gap-8 items-center text-xs font-semibold text-white/90 uppercase tracking-wider my-auto">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 shrink-0">
              <span>{item}</span>
              <span className="text-[#65C400]">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

