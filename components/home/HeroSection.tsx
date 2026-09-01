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
    <section className={`relative w-full text-white overflow-hidden border-b border-[#1c692b] bg-[#237F34] flex flex-col justify-between transition-all duration-300 ${
      showPlatformCards 
        ? 'pt-8 sm:pt-10 lg:pt-12 pb-0 min-h-[760px] sm:min-h-[820px]' 
        : 'pt-12 sm:pt-16 lg:pt-18 pb-0 min-h-[660px] sm:min-h-[720px]'
    }`}>
      {/* Soft Ambient Radial Glow - Background #237F34 untouched */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(46, 160, 68, 0.45) 0%, rgba(35, 127, 52, 0.1) 100%)'
        }} 
      />

      {/* Left Side Crisp & Glowing Vector Circuit Traces Overlay */}
      <svg className="absolute left-0 top-0 bottom-0 w-[240px] sm:w-[380px] lg:w-[460px] h-full pointer-events-none opacity-90 z-0 drop-shadow-[0_0_8px_rgba(101,196,0,0.4)]" viewBox="0 0 460 550" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 130 H120 L160 90 H280" stroke="#65C400" strokeWidth="1.8" />
        <circle cx="280" cy="90" r="4.5" fill="#7df05d" className="animate-pulse" />

        <path d="M0 210 H180 L220 240 H360" stroke="#65C400" strokeWidth="1.8" />
        <circle cx="360" cy="240" r="4.5" fill="#7df05d" />

        <path d="M0 280 H130 L160 250 H240" stroke="#65C400" strokeWidth="1.8" />
        <circle cx="240" cy="250" r="4.5" fill="#7df05d" className="animate-pulse" />

        <path d="M0 350 H190 L230 380 H370" stroke="#65C400" strokeWidth="1.8" />
        <circle cx="370" cy="380" r="4.5" fill="#7df05d" />

        <path d="M0 430 H100 L130 400 H200" stroke="#65C400" strokeWidth="1.8" />
        <circle cx="200" cy="400" r="4.5" fill="#7df05d" />
      </svg>

      {/* Right Side Crisp & Glowing Concentric Radar & Tech Arcs Overlay */}
      <svg className="absolute right-0 top-0 bottom-0 w-[240px] sm:w-[380px] lg:w-[460px] h-full pointer-events-none opacity-90 z-0 drop-shadow-[0_0_8px_rgba(101,196,0,0.4)]" viewBox="0 0 460 550" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Concentric Tech Circles */}
        <circle cx="410" cy="275" r="170" stroke="#3ebf53" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="410" cy="275" r="130" stroke="#65C400" strokeWidth="1.8" />
        <circle cx="410" cy="275" r="90" stroke="#7df05d" strokeWidth="2.2" />
        <circle cx="410" cy="275" r="50" stroke="#65C400" strokeWidth="1.8" />

        {/* Perimeter Nodes */}
        <circle cx="280" cy="275" r="4.5" fill="#7df05d" />
        <circle cx="318" cy="183" r="4.5" fill="#7df05d" className="animate-pulse" />
        <circle cx="318" cy="367" r="4.5" fill="#7df05d" />

        {/* Branching Circuit Lines */}
        <path d="M280 275 H180 L140 235 H80" stroke="#65C400" strokeWidth="1.8" />
        <circle cx="80" cy="235" r="4.5" fill="#7df05d" />

        <path d="M318 367 L265 420 H160" stroke="#65C400" strokeWidth="1.8" />
        <circle cx="160" cy="420" r="4.5" fill="#7df05d" />

        <path d="M318 183 L265 130 H130" stroke="#65C400" strokeWidth="1.8" />
        <circle cx="130" cy="130" r="4.5" fill="#7df05d" className="animate-pulse" />
      </svg>

      {/* Centered Hero Content Container */}
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-start transition-all duration-300 ${
        showPlatformCards ? 'space-y-3 sm:space-y-4 pt-2 sm:pt-4 pb-8 sm:pb-12' : 'space-y-4 sm:space-y-5 pt-6 sm:pt-10 pb-10 sm:pb-14'
      }`}>
        
        {/* Top Pill Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#071d0b]/90 text-white border border-[#65C400]/60 text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-lg shadow-black/40 backdrop-blur-md">
          <Headset className="w-4 h-4 text-[#65C400]" />
          <span className="w-2 h-2 rounded-full bg-[#65C400] animate-pulse" />
          <span className="tracking-wide">CONNECT TO SUPPORT AGENT – LIVE WEBROOT REMOTE TECHNICAL SUPPORT</span>
        </div>

        {/* Main Title & Subtitle Paragraph */}
        <div className="space-y-2 sm:space-y-3 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-md">
            Connect to <span className="text-[#65C400] drop-shadow-[0_0_15px_rgba(101,196,0,0.5)] font-bold">Support Agent</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-sm">
            Download our official Webroot remote connection software to securely share<br className="hidden sm:inline" />
            {' '}your session with a <strong className="font-bold text-white">technical support specialist</strong> for diagnostics, malware<br className="hidden sm:inline" />
            {' '}removal, and <strong className="font-bold text-white">Webroot setup.</strong>
          </p>
        </div>

        {/* Central Outer Container Box - BLACK Background with GREEN Border per user request */}
        <div className={`w-full transition-all duration-300 rounded-[20px] sm:rounded-[26px] bg-[#040e06]/95 border-2 border-[#65C400] shadow-[0_0_50px_rgba(0,0,0,0.7)] backdrop-blur-md space-y-4 sm:space-y-5 my-1 ${
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
                className="w-full py-4 px-6 rounded-2xl bg-[#65C400] hover:bg-[#58b200] active:scale-[0.99] text-white font-extrabold text-xl sm:text-2xl transition-all duration-200 shadow-xl shadow-[#65C400]/30 border border-[#7df05d]/40 flex items-center justify-center gap-3.5 cursor-pointer"
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
            /* Revealed State: 3 Platform Download Cards - GREEN Download Boxes per user request */
            <div className="space-y-4 sm:space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                {/* Windows Download Card - GREEN Box */}
                <div className="bg-[#0e441c] border border-[#34b823]/60 rounded-xl sm:rounded-2xl p-4 flex flex-col items-center justify-between space-y-4 text-center hover:border-[#65C400] transition-all duration-300 shadow-lg group">
                  <div className="space-y-2 flex flex-col items-center">
                    <PlatformLogo platform="windows" className="w-10 h-10 sm:w-11 sm:h-11 group-hover:scale-110 transition-transform duration-200 drop-shadow-md" />
                    <div className="space-y-0.5">
                      <div className="text-[11px] text-slate-200 font-medium">Download for</div>
                      <div className="text-lg sm:text-xl font-extrabold text-white">Windows</div>
                    </div>
                  </div>

                  <a
                    href={remoteSoftwareUrl}
                    download="Support_Connect.exe"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#65C400] hover:bg-[#58b200] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#65C400]/30 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Mac Download Card - GREEN Box */}
                <div className="bg-[#0e441c] border border-[#34b823]/60 rounded-xl sm:rounded-2xl p-4 flex flex-col items-center justify-between space-y-4 text-center hover:border-[#65C400] transition-all duration-300 shadow-lg group">
                  <div className="space-y-2 flex flex-col items-center">
                    <PlatformLogo platform="mac" className="w-10 h-10 sm:w-11 sm:h-11 text-white group-hover:scale-110 transition-transform duration-200 drop-shadow-md" />
                    <div className="space-y-0.5">
                      <div className="text-[11px] text-slate-200 font-medium">Download for</div>
                      <div className="text-lg sm:text-xl font-extrabold text-white">Mac</div>
                    </div>
                  </div>

                  <a
                    href={remoteSoftwareUrl}
                    download="Support_Connect.dmg"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#65C400] hover:bg-[#58b200] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#65C400]/30 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Chromebook Download Card - GREEN Box */}
                <div className="bg-[#0e441c] border border-[#34b823]/60 rounded-xl sm:rounded-2xl p-4 flex flex-col items-center justify-between space-y-4 text-center hover:border-[#65C400] transition-all duration-300 shadow-lg group">
                  <div className="space-y-2 flex flex-col items-center">
                    <PlatformLogo platform="chromebook" className="w-10 h-10 sm:w-11 sm:h-11 group-hover:scale-110 transition-transform duration-200 drop-shadow-md" />
                    <div className="space-y-0.5">
                      <div className="text-[11px] text-slate-200 font-medium">Download for</div>
                      <div className="text-lg sm:text-xl font-extrabold text-white">Chromebook</div>
                    </div>
                  </div>

                  <a
                    href={remoteSoftwareUrl}
                    download="Support_Connect.exe"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#65C400] hover:bg-[#58b200] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#65C400]/30 flex items-center justify-center gap-1.5 cursor-pointer"
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

