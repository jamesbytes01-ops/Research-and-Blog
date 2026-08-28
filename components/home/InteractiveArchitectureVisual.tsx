'use client';

import React, { useState } from 'react';
import { Cpu, ShieldCheck, Activity, RotateCcw, Zap, CheckCircle2, Lock, ArrowRight, Play, RefreshCw } from 'lucide-react';

export default function InteractiveArchitectureVisual() {
  const [activeTab, setActiveTab] = useState<'cloud' | 'rollback'>('cloud');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setActiveStep(1);
    const timer1 = setTimeout(() => setActiveStep(2), 900);
    const timer2 = setTimeout(() => setActiveStep(3), 1800);
    const timer3 = setTimeout(() => {
      setIsSimulating(false);
    }, 2700);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-white">
      {/* Visual Header Toolbar */}
      <div className="bg-slate-950 p-4 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 border border-sky-800 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white">Security Architecture Breakdown</h3>
            <p className="text-xs text-slate-400">Technical workflow diagram illustrating Webroot threat intelligence and rollback engines.</p>
          </div>
        </div>

        {/* Tab Selection Switches */}
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => {
              setActiveTab('cloud');
              setActiveStep(1);
            }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'cloud'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" /> Cloud Telemetry Flow
          </button>
          <button
            onClick={() => {
              setActiveTab('rollback');
              setActiveStep(1);
            }}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'rollback'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" /> Ransomware Rollback
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Step Breakdown & Mechanics (6 cols) */}
        <div className="lg:col-span-6 space-y-5">
          {activeTab === 'cloud' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-950 text-sky-400 border border-sky-800 text-xs font-bold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5" /> BrightCloud® Architecture
                </div>
                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Highlighting Steps...
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" /> Highlight Process Sequence
                    </>
                  )}
                </button>
              </div>

              <h4 className="text-2xl font-bold text-white">How Micro-Second Cloud Lookup Operates</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                When an executable launches on your computer, Webroot calculates a behavioral hash and queries the cloud threat database in under 20 milliseconds without daily signature file downloads.
              </p>

              <div className="space-y-2.5 pt-2">
                <div
                  className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    activeStep === 1
                      ? 'bg-sky-950/80 border-sky-500 shadow-md ring-1 ring-sky-500/50'
                      : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-sky-900 text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-200">Local Telemetry Hash Generation</div>
                    <div className="text-[11px] text-slate-400">Tiny 5MB agent calculates MD5/SHA256 hash of executing process.</div>
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    activeStep === 2
                      ? 'bg-sky-950/80 border-sky-500 shadow-md ring-1 ring-sky-500/50'
                      : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-sky-900 text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-200">Encrypted Cloud Threat Query</div>
                    <div className="text-[11px] text-slate-400">Encrypted cloud lookup compares hash against BrightCloud global threat database.</div>
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    activeStep === 3
                      ? 'bg-emerald-950/80 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                      : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-200">Instant Execution Verdict</div>
                    <div className="text-[11px] text-slate-400">Clean executable proceeds with zero system lag; badware is immediately terminated.</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <RotateCcw className="w-3.5 h-3.5" /> Rollback Mechanics
                </div>
                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Highlighting Steps...
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" /> Highlight Process Sequence
                    </>
                  )}
                </button>
              </div>

              <h4 className="text-2xl font-bold text-white">How Ransomware Rollback Restores Encrypted Files</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                If an unknown zero-day file attempts to execute, Webroot places the process in a sandbox and journals system changes to automatically revert files if malicious encryption occurs.
              </p>

              <div className="space-y-2.5 pt-2">
                <div
                  className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    activeStep === 1
                      ? 'bg-emerald-950/80 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                      : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-200">Unknown Process Sandbox Isolation</div>
                    <div className="text-[11px] text-slate-400">Unknown executable is executed in an isolated behavioral containment sandbox.</div>
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    activeStep === 2
                      ? 'bg-emerald-950/80 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                      : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-200">System File Journaling</div>
                    <div className="text-[11px] text-slate-400">Records disk modifications and preserves unencrypted file copies in memory.</div>
                  </div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    activeStep === 3
                      ? 'bg-emerald-950/80 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                      : 'bg-slate-950/80 border-slate-800'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-900 text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-200">Automatic Unencrypted File Restoration</div>
                    <div className="text-[11px] text-slate-400">Malicious process is terminated and journaled files automatically revert to clean state.</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Edge-to-Edge Widescreen Visual (6 cols) */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
            <img
              src={activeTab === 'cloud' ? '/images/cloud_architecture.png' : '/images/ransomware_rollback.png'}
              alt={activeTab === 'cloud' ? 'Webroot Cloud Security Architecture Diagram' : 'Webroot Ransomware Rollback Diagram'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
