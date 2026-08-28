'use client';

import React, { useState } from 'react';
import { Globe, Lock, AlertTriangle, ShieldCheck, ShieldAlert, CheckCircle2, Search, Cpu, RefreshCw, ExternalLink } from 'lucide-react';

interface PhishingScenario {
  id: string;
  name: string;
  url: string;
  isPhishing: boolean;
  domainAge: string;
  sslIssuer: string;
  domAnalysis: string;
  visualSimilarity: string;
  verdict: string;
}

const SCENARIOS: PhishingScenario[] = [
  {
    id: 'real-m365',
    name: 'Authentic Microsoft 365 Login Portal',
    url: 'https://login.microsoftonline.com/oauth2/v2.0/authorize',
    isPhishing: false,
    domainAge: '14+ Years Old (Verified)',
    sslIssuer: 'DigiCert TLS RSA SHA256 (Microsoft Corp)',
    domAnalysis: 'Authentic OAuth2 PKCE authorization form. No hidden credential POST targets.',
    visualSimilarity: '100% Match to Official Microsoft Domain Ownership.',
    verdict: 'SAFE / AUTHENTIC DOMAIN',
  },
  {
    id: 'phish-m365',
    name: 'Spoofed Phishing Portal (Clone)',
    url: 'http://login-micros0ft-verify-account-sec.com/auth/login.php',
    isPhishing: true,
    domainAge: 'Registered 3 Hours Ago',
    sslIssuer: 'Free Unverified SSL / Self-Signed',
    domAnalysis: 'ALERT: Contains hidden JavaScript credential harvester forwarding password to unauthorized IP 185.220.xx.xx.',
    visualSimilarity: '98% Visual Emulation of Microsoft Login Form (Brand Impersonation Detected).',
    verdict: 'CRITICAL PHISHING SITE BLOCKED',
  },
];

export default function PhishingInspectorSimulator() {
  const [activeTab, setActiveTab] = useState<PhishingScenario>(SCENARIOS[1]); // Default to phishing scenario to showcase power
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(true);

  const handleScan = () => {
    setIsScanning(true);
    setHasScanned(false);

    setTimeout(() => {
      setIsScanning(false);
      setHasScanned(true);
    }, 1200);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-white my-8">
      {/* Header Bar */}
      <div className="bg-slate-950 px-6 py-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base text-white">Real-Time Anti-Phishing URL Inspector</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-cyan-950 text-cyan-400 border border-cyan-800">
                Interactive Visual
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Webroot Web Threat Shield DOM structural analysis & visual similarity matching.
            </p>
          </div>
        </div>

        <button
          onClick={handleScan}
          disabled={isScanning}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-cyan-600/20"
        >
          {isScanning ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" /> Analyzing Page DOM...
            </>
          ) : (
            <>
              <Search className="w-4 h-4" /> Re-Scan URL Threat Shield
            </>
          )}
        </button>
      </div>

      {/* Simulated Web Browser Container */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Address Bar Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Test URL:</span>
          <div className="flex flex-wrap items-center gap-2">
            {SCENARIOS.map((scen) => (
              <button
                key={scen.id}
                onClick={() => {
                  setActiveTab(scen);
                  setHasScanned(true);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  activeTab.id === scen.id
                    ? scen.isPhishing
                      ? 'bg-rose-950/80 border-rose-600 text-rose-200'
                      : 'bg-emerald-950/80 border-emerald-600 text-emerald-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {scen.isPhishing ? (
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                )}
                {scen.name}
              </button>
            ))}
          </div>
        </div>

        {/* Browser Mock Navigation Bar */}
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center gap-3 font-mono text-xs">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex-1 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 flex items-center gap-2 text-slate-300 truncate">
            {activeTab.isPhishing ? (
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            ) : (
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            )}
            <span className={activeTab.isPhishing ? 'text-rose-300 font-semibold truncate' : 'text-emerald-300 truncate'}>
              {activeTab.url}
            </span>
          </div>
        </div>

        {/* Scan Results Cards */}
        {hasScanned && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Metric 1 */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-slate-300">1. SSL & Domain Age</span>
                <span className="text-[10px] font-mono text-slate-400">{activeTab.domainAge}</span>
              </div>
              <div className="text-xs text-slate-300 font-mono bg-slate-900 p-2.5 rounded-xl border border-slate-800 truncate">
                {activeTab.sslIssuer}
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-slate-300">2. DOM Source Inspection</span>
                <span className="text-[10px] font-bold text-sky-400">Deep Scan</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeTab.domAnalysis}
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-slate-300">3. Visual AI Similarity</span>
                <span className={`text-[10px] font-bold ${activeTab.isPhishing ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {activeTab.isPhishing ? 'SPOOF MATCH' : 'AUTHENTIC'}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeTab.visualSimilarity}
              </p>
            </div>
          </div>
        )}

        {/* Final Threat Verdict Box */}
        {hasScanned && (
          <div
            className={`p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              activeTab.isPhishing
                ? 'bg-rose-950/40 border-rose-600 text-rose-200'
                : 'bg-emerald-950/40 border-emerald-600 text-emerald-200'
            }`}
          >
            <div className="flex items-center gap-3">
              {activeTab.isPhishing ? (
                <ShieldAlert className="w-7 h-7 text-rose-400 shrink-0" />
              ) : (
                <ShieldCheck className="w-7 h-7 text-emerald-400 shrink-0" />
              )}
              <div>
                <div className="font-bold text-sm text-white">{activeTab.verdict}</div>
                <div className="text-xs opacity-90 mt-0.5">
                  {activeTab.isPhishing
                    ? 'Webroot Real-Time Anti-Phishing intercepts user navigation before form data submission.'
                    : 'Verified official domain with high reputation score. Safe for login input.'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
