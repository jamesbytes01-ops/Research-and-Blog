import React from 'react';
import Link from 'next/link';
import { ExternalLink, CheckCircle2, Info } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      {/* SHIFTED DISCLAIMER BANNER IN FOOTER */}
      <div className="bg-slate-900/90 border-b border-slate-800 py-3.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Info className="w-4 h-4 text-sky-400 shrink-0" />
            <span>
              <strong className="text-white">Independent Editorial Notice:</strong> This is an independent research & knowledge hub. Not affiliated with, endorsed by, or operated by Webroot or OpenText.
            </span>
          </div>
          <a
            href="https://www.webroot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-semibold shrink-0 transition-colors"
          >
            Official Webroot Site <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" aria-label="Webroot Hub Homepage">
              <BrandLogo showTagline={false} className="[&_span]:text-white" />
            </Link>
            <p className="text-xs leading-relaxed text-slate-400 pr-4">
              An independent research, comparison, installation, keycode activation, and cybersecurity educational platform dedicated to Webroot products and endpoint threat intelligence.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Fact-checked specifications & verified technical guides</span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Products</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products/webroot-antivirus" className="hover:text-white transition-colors">
                  Webroot SecureAnywhere AntiVirus
                </Link>
              </li>
              <li>
                <Link href="/products/webroot-internet-security-plus" className="hover:text-white transition-colors">
                  Internet Security Plus
                </Link>
              </li>
              <li>
                <Link href="/products/webroot-internet-security-complete" className="hover:text-white transition-colors">
                  Internet Security Complete
                </Link>
              </li>
              <li>
                <Link href="/products/webroot-gamers" className="hover:text-white transition-colors">
                  AntiVirus for PC Gamers
                </Link>
              </li>
              <li>
                <Link href="/products/webroot-secure-vpn" className="hover:text-white transition-colors">
                  Webroot Secure VPN
                </Link>
              </li>
              <li>
                <Link href="/products/webroot-chromebook" className="hover:text-white transition-colors">
                  Chromebook Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides & Support Column */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Guides & Support</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/download" className="hover:text-white transition-colors">
                  Download Center
                </Link>
              </li>
              <li>
                <Link href="/install/windows" className="hover:text-white transition-colors">
                  Windows 11 Setup Guide
                </Link>
              </li>
              <li>
                <Link href="/install/mac" className="hover:text-white transition-colors">
                  macOS Setup & Authorization
                </Link>
              </li>
              <li>
                <Link href="/activate" className="hover:text-white transition-colors">
                  Keycode Lookup & Activation
                </Link>
              </li>
              <li>
                <Link href="/guides/webroot-activation-troubleshooting" className="hover:text-white transition-colors">
                  Activation Error Fixes
                </Link>
              </li>
              <li>
                <Link href="/guides/how-to-uninstall-webroot-completely" className="hover:text-white transition-colors">
                  Clean Uninstallation Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform & Knowledgebase Column */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Knowledgebase</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/faq" className="hover:text-white text-sky-400 font-semibold transition-colors">
                  Frequently Asked Questions (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  Product Comparison Engine
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-white transition-colors">
                  Product Recommendation Quiz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Cybersecurity Research
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Editorial Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Editorial Team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="pt-8 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 space-y-2">
            <p className="font-semibold text-slate-200">Legal Disclaimer</p>
            <p>
              This is an independent informational and research website about Webroot products. It is not affiliated with, endorsed by, or operated by Webroot or OpenText unless explicitly stated. All trademarks, logos, and brand names are the property of their respective owners.
            </p>
            <p className="flex items-center gap-2 pt-1 text-slate-300">
              <span>Official Webroot Direct Links:</span>
              <a
                href="https://www.webroot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline flex items-center gap-1 font-medium"
              >
                webroot.com <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="https://my.webrootanywhere.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline flex items-center gap-1 font-medium"
              >
                My Account Console <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 pt-4">
            <p>© {new Date().getFullYear()} Independent Webroot Knowledge Hub. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/faq" className="hover:text-slate-300 text-sky-400 font-semibold">
                FAQ Directory
              </Link>
              <Link href="/about" className="hover:text-slate-300">
                Editorial Policy
              </Link>
              <Link href="/contact" className="hover:text-slate-300">
                Contact
              </Link>
              <a href="https://www.webroot.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
                Official Webroot Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
