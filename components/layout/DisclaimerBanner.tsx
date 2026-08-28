import React from 'react';
import { Info, ExternalLink } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Info className="w-4 h-4 text-sky-400 shrink-0" />
          <span>
            <strong>Independent Editorial Notice:</strong> This is an independent research & knowledge hub. Not affiliated with, endorsed by, or operated by Webroot or OpenText.
          </span>
        </div>
        <a
          href="https://www.webroot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium underline underline-offset-2 shrink-0 transition-colors"
        >
          Official Webroot Site <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
