'use client';

import React, { useState } from 'react';
import { Gamepad2, Cpu, Zap, Activity, BellOff, ShieldAlert, CheckCircle2, Play, RefreshCw } from 'lucide-react';

export default function GamerPerformanceComparator() {
  const [mode, setMode] = useState<'legacy' | 'webroot'>('webroot');
  const [isSimulatingScan, setIsSimulatingScan] = useState(false);

  const handleTriggerScan = () => {
    setIsSimulatingScan(true);
    setTimeout(() => {
      setIsSimulatingScan(false);
    }, 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-white my-8">
      {/* Header Bar */}
      <div className="bg-slate-950 px-6 py-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center font-bold">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base text-white">PC Gamer Benchmark Comparator</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-indigo-950 text-indigo-400 border border-indigo-800">
                Interactive Visual
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Comparing gameplay framerates, RAM usage, and CPU scan impact in real-time.
            </p>
          </div>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs font-bold">
          <button
            onClick={() => setMode('legacy')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              mode === 'legacy' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Legacy Heavy Antivirus
          </button>
          <button
            onClick={() => setMode('webroot')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              mode === 'webroot' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Webroot Gamers Edition
          </button>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-slate-300">Active Game Session:</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 font-mono text-indigo-300">
              Cyberpunk / Counter-Strike 2 (4K Ultra Settings)
            </span>
          </div>

          <button
            onClick={handleTriggerScan}
            disabled={isSimulatingScan}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-all"
          >
            {isSimulatingScan ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" /> Simulating Background Scan...
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-slate-300" /> Test Background Scan Event
              </>
            )}
          </button>
        </div>

        {/* Live Gauges & Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Stat 1: FPS */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-slate-300">Framerate (FPS)</span>
              <Gamepad2 className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`text-3xl font-extrabold font-mono ${mode === 'webroot' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {mode === 'webroot' ? (isSimulatingScan ? '238 FPS' : '240 FPS') : isSimulatingScan ? '108 FPS' : '142 FPS'}
              </span>
              <span className="text-xs text-slate-400">FPS</span>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              {mode === 'webroot' ? '0% Framerate stutter or GPU bottleneck.' : 'Significant FPS drops during signature updates.'}
            </p>
          </div>

          {/* Stat 2: RAM */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-slate-300">RAM Footprint</span>
              <Cpu className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`text-3xl font-extrabold font-mono ${mode === 'webroot' ? 'text-emerald-400' : 'text-amber-400'}`}>
                {mode === 'webroot' ? '12.4 MB' : '485.0 MB'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              {mode === 'webroot' ? 'Lightest client footprint on Windows.' : 'Consumes gigabytes with heavy daily DAT signatures.'}
            </p>
          </div>

          {/* Stat 3: CPU Scan Spike */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-slate-300">CPU Scan Utilization</span>
              <Activity className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`text-3xl font-extrabold font-mono ${mode === 'webroot' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {mode === 'webroot' ? '0.2%' : isSimulatingScan ? '42.0%' : '18.5%'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              {mode === 'webroot' ? 'Micro-second cloud query leaves CPU free.' : 'Heavy local disk scanning causes CPU spikes.'}
            </p>
          </div>

          {/* Stat 4: Silent Gaming Mode */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-slate-300">Notification Mode</span>
              <BellOff className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span
                className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                  mode === 'webroot'
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                    : 'bg-rose-950 text-rose-400 border border-rose-800'
                }`}
              >
                {mode === 'webroot' ? 'SILENT MODE ACTIVE' : 'INTRUSIVE POP-UPS'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              {mode === 'webroot'
                ? 'All pop-ups and scans automatically silenced in full-screen.'
                : 'Pops up update reminders, minimizing full-screen games.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
