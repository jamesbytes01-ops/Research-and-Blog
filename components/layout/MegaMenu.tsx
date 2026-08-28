import React from 'react';
import Link from 'next/link';
import { Shield, Smartphone, Key, Download, HelpCircle, Laptop, Wrench, Lock, Cpu } from 'lucide-react';

export default function MegaMenu({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-xl shadow-xl p-6 text-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Products Column */}
      <div>
        <div className="flex items-center gap-2 font-bold text-slate-900 border-b border-slate-100 pb-2 mb-3">
          <Shield className="w-4 h-4 text-sky-600" />
          <span>Antivirus & Security Plans</span>
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/products/webroot-antivirus"
              onClick={closeMenu}
              className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 transition-colors"
            >
              <div className="font-medium text-slate-900">Webroot Essentials (AntiVirus)</div>
              <div className="text-xs text-slate-500">Fast 20-sec scans for 1 PC or Mac</div>
            </Link>
          </li>
          <li>
            <Link
              href="/products/webroot-internet-security-plus"
              onClick={closeMenu}
              className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 transition-colors"
            >
              <div className="font-medium text-slate-900">Internet Security Plus</div>
              <div className="text-xs text-slate-500">Multi-device coverage + Password Manager</div>
            </Link>
          </li>
          <li>
            <Link
              href="/products/webroot-internet-security-complete"
              onClick={closeMenu}
              className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 transition-colors"
            >
              <div className="font-medium text-slate-900">Internet Security Complete</div>
              <div className="text-xs text-slate-500">Includes PC Optimizer & 25GB Cloud Backup</div>
            </Link>
          </li>
          <li>
            <Link
              href="/products/webroot-gamers"
              onClick={closeMenu}
              className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 transition-colors"
            >
              <div className="font-medium text-slate-900">AntiVirus for PC Gamers</div>
              <div className="text-xs text-slate-500">Zero-lag background protection</div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Getting Started & Installation Column */}
      <div>
        <div className="flex items-center gap-2 font-bold text-slate-900 border-b border-slate-100 pb-2 mb-3">
          <Download className="w-4 h-4 text-emerald-600" />
          <span>Download & Installation</span>
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/download"
              onClick={closeMenu}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 font-medium transition-colors"
            >
              <Download className="w-4 h-4 text-slate-400" />
              Download Center
            </Link>
          </li>
          <li>
            <Link
              href="/install/windows"
              onClick={closeMenu}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 transition-colors"
            >
              <Laptop className="w-4 h-4 text-slate-400" />
              Install on Windows 11 & 10
            </Link>
          </li>
          <li>
            <Link
              href="/install/mac"
              onClick={closeMenu}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 transition-colors"
            >
              <Laptop className="w-4 h-4 text-slate-400" />
              Install on macOS
            </Link>
          </li>
          <li>
            <Link
              href="/activate"
              onClick={closeMenu}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 transition-colors"
            >
              <Key className="w-4 h-4 text-amber-500" />
              Keycode Lookup & Activation
            </Link>
          </li>
        </ul>
      </div>

      {/* Tools & Features Column */}
      <div>
        <div className="flex items-center gap-2 font-bold text-slate-900 border-b border-slate-100 pb-2 mb-3">
          <Lock className="w-4 h-4 text-indigo-600" />
          <span>Privacy & Troubleshooting</span>
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/products/webroot-secure-vpn"
              onClick={closeMenu}
              className="block p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 transition-colors"
            >
              <div className="font-medium text-slate-900">Webroot Secure VPN</div>
              <div className="text-xs text-slate-500">Encrypted public Wi-Fi security</div>
            </Link>
          </li>
          <li>
            <Link
              href="/guides/webroot-activation-troubleshooting"
              onClick={closeMenu}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-slate-400" />
              Activation Fixes
            </Link>
          </li>
          <li>
            <Link
              href="/guides/how-to-uninstall-webroot-completely"
              onClick={closeMenu}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-sky-700 transition-colors"
            >
              <Wrench className="w-4 h-4 text-slate-400" />
              Clean Uninstallation
            </Link>
          </li>
          <li>
            <Link
              href="/quiz"
              onClick={closeMenu}
              className="block mt-2 p-3 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100 transition-colors text-center text-sky-800 font-semibold text-xs"
            >
              Product Recommendation Quiz →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
