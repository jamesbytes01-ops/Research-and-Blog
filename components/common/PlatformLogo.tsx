'use client';

import React from 'react';

interface PlatformLogoProps {
  platform: string;
  className?: string;
}

export default function PlatformLogo({ platform, className = 'w-7 h-7' }: PlatformLogoProps) {
  const norm = platform.toLowerCase();

  // Windows PC (Official Microsoft 4-Pane Blue Logo)
  if (norm.includes('win')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3.449L9.75 2.1V11.59H0V3.449ZM9.75 12.87V22.4L0 21.05V12.87H9.75ZM11.21 1.9L24 0V11.59H11.21V1.9ZM24 12.87V24L11.21 22.25V12.87H24Z" fill="#0078D4"/>
      </svg>
    );
  }

  // Mac / macOS (Official Apple Inc Silhouette)
  if (norm.includes('mac') || norm === 'apple') {
    return (
      <svg className={`${className} text-slate-900 dark:text-white`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
      <svg className={`${className} text-slate-900 dark:text-white`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97.02c.04.53-.08 1.07-.35 1.57-.27.5-.66.91-1.15 1.18-.84.45-1.78.68-2.73.68-.04-.54.08-1.08.35-1.58.27-.5.66-.91 1.15-1.18C14.08.26 15.02.03 15.97.02z"/>
      </svg>
    );
  }

  // Chromebook (Official Google Chrome 4-Color Emblem)
  if (norm.includes('chrome')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill="#FFFFFF"/>
        <path d="M12 3C8.13 3 5 5.47 3.9 8.9L8.4 16.7L12 12H21C21 7.03 16.97 3 12 3Z" fill="#EA4335"/>
        <path d="M12 21C15.87 21 19 18.53 20.1 15.1L15.6 7.3L12 12H3C3 16.97 7.03 21 12 21Z" fill="#34A853"/>
        <path d="M3.9 8.9C3.32 10.1 3 11.45 3 12.87C3 17.84 7.03 21.87 12 21.87L15.6 15.67L8.4 15.67L3.9 8.9Z" fill="#FBBC05"/>
        <path d="M12 3C15.87 3 19 5.47 20.1 8.9L15.6 16.7L12 12V3Z" fill="#EA4335" opacity="0"/>
        <circle cx="12" cy="12" r="4.2" fill="#4285F4"/>
        <circle cx="12" cy="12" r="5" stroke="#FFFFFF" strokeWidth="1.2"/>
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
