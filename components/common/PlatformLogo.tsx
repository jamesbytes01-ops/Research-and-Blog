'use client';

import React from 'react';

interface PlatformLogoProps {
  platform: string;
  className?: string;
}

export default function PlatformLogo({ platform, className = 'w-7 h-7' }: PlatformLogoProps) {
  const norm = platform.toLowerCase();

  // Windows PC (Official Microsoft 4-Pane Color Logo)
  if (norm.includes('win')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="9.5" height="9.5" rx="0.5" fill="#F25022" />
        <rect x="12.5" y="2" width="9.5" height="9.5" rx="0.5" fill="#7FBA00" />
        <rect x="2" y="12.5" width="9.5" height="9.5" rx="0.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="0.5" fill="#FFB900" />
      </svg>
    );
  }

  // Mac / macOS (Official Apple Inc Silhouette)
  if (norm.includes('mac') || norm === 'apple') {
    return (
      <svg className={`${className} text-white`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97.02c.04.53-.08 1.07-.35 1.57-.27.5-.66.91-1.15 1.18-.84.45-1.78.68-2.73.68-.04-.54.08-1.08.35-1.58.27-.5.66-.91 1.15-1.18C14.08.26 15.02.03 15.97.02z"/>
      </svg>
    );
  }

  // Android (Official Google Bugdroid)
  if (norm.includes('android')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1V9H6v9zm-1.5-9C3.67 9 3 9.67 3 10.5v6c0 .83.67 1.5 1.5 1.5S6 17.33 6 16.5v-6C6 9.67 5.33 9 4.5 9zm15 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.51 1.23 12.3 1 11 1c-1.3 0-2.51.23-3.64.63L5.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C4.58 3.55 3.32 5.6 3.09 8h15.82c-.23-2.4-1.49-4.45-3.38-5.84zM7.5 5.5C7.22 5.5 7 5.28 7 5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm7 0c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z" fill="#3DDC84"/>
      </svg>
    );
  }

  // iOS / iPhone (Official Apple Logo)
  if (norm.includes('ios') || norm.includes('iphone') || norm.includes('ipad')) {
    return (
      <svg className={`${className} text-white`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97.02c.04.53-.08 1.07-.35 1.57-.27.5-.66.91-1.15 1.18-.84.45-1.78.68-2.73.68-.04-.54.08-1.08.35-1.58.27-.5.66-.91 1.15-1.18C14.08.26 15.02.03 15.97.02z"/>
      </svg>
    );
  }

  // Chromebook (Official Google Chrome 4-Color Emblem - Perfectly Balanced Sectors)
  if (norm.includes('chrome')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9.6" fill="#FFFFFF"/>
        <g clipPath="url(#chrome-logo-clip)">
          {/* Top Red Slice (120 Degree Arc) */}
          <path d="M12 2.4C7.2 2.4 3.2 5.8 2.3 10.4L12 12L21.7 10.4C20.8 5.8 16.8 2.4 12 2.4Z" fill="#EA4335"/>
          {/* Bottom-Left Green Slice (120 Degree Arc) */}
          <path d="M2.3 10.4C1.4 12.5 1.2 14.8 1.8 17.1C2.5 19.8 4.5 21.9 7.2 22.7L12 12L2.3 10.4Z" fill="#34A853"/>
          <path d="M2.3 10.4L12 12V21.6C6.7 21.6 2.4 17.3 2.3 10.4Z" fill="#34A853"/>
          {/* Bottom-Right Yellow Slice (120 Degree Arc - Strictly Confined to x>=12, y>=7.2) */}
          <path d="M12 21.6C17.3 21.6 21.6 17.3 21.7 12C21.7 11.4 21.6 10.9 21.5 10.4L12 12V21.6Z" fill="#FBBC05"/>
        </g>
        <defs>
          <clipPath id="chrome-logo-clip">
            <circle cx="12" cy="12" r="9.6" />
          </clipPath>
        </defs>
        {/* White Inner Ring */}
        <circle cx="12" cy="12" r="4.2" fill="#FFFFFF"/>
        {/* Blue Core Center */}
        <circle cx="12" cy="12" r="3.2" fill="#4285F4"/>
      </svg>
    );
  }

  // Fallback PC icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}
