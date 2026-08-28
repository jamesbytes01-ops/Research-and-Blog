import React from 'react';

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function BrandLogo({ className = '', showTagline = true }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Exact Webroot Sprout 'W' Logo Mark from User Screenshot */}
      <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Left Wing Capsule */}
          <rect
            x="13"
            y="32"
            width="22"
            height="50"
            rx="11"
            transform="rotate(-42 24 57)"
            fill="#7AC128"
          />

          {/* Right Wing Capsule */}
          <rect
            x="65"
            y="32"
            width="22"
            height="50"
            rx="11"
            transform="rotate(42 76 57)"
            fill="#7AC128"
          />

          {/* Center Teardrop Node */}
          <path
            d="M50 22C42.8 22 37 27.8 37 35C37 42 45 50.5 50 55.5C55 50.5 63 42 63 35C63 27.8 57.2 22 50 22Z"
            fill="#7AC128"
          />
        </svg>
      </div>

      {/* Official Webroot Wordmark & Hub Tagline */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-[#7AC128] transition-colors font-sans">
            WEBROOT
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-[#F2FAEA] text-[#4E8215] border border-[#C8E8A2]">
            HUB
          </span>
        </div>
        {showTagline && (
          <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">
            Independent Technical Support
          </span>
        )}
      </div>
    </div>
  );
}
