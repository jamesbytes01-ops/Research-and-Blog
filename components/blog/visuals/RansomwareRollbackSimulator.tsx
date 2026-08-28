'use client';

import React, { useState } from 'react';
import { RotateCcw, AlertTriangle, ShieldCheck, FileText, Lock, CheckCircle2, Play, RefreshCw, Layers } from 'lucide-react';

interface MockFile {
  id: string;
  name: string;
  size: string;
  isEncrypted: boolean;
  restored: boolean;
}

export default function RansomwareRollbackSimulator() {
  const [phase, setPhase] = useState<'idle' | 'attacking' | 'encrypted' | 'restoring' | 'restored'>('idle');
  const [files, setFiles] = useState<MockFile[]>([
    { id: '1', name: 'Tax_Return_2025.pdf', size: '2.4 MB', isEncrypted: false, restored: false },
    { id: '2', name: 'Family_Photos_Archive.zip', size: '142.8 MB', isEncrypted: false, restored: false },
    { id: '3', name: 'Company_Financial_Ledger.xlsx', size: '1.1 MB', isEncrypted: false, restored: false },
    { id: '4', name: 'Q4_Business_Strategy.docx', size: '850 KB', isEncrypted: false, restored: false },
  ]);

  const handleSimulateAttack = () => {
    setPhase('attacking');

    setTimeout(() => {
      setFiles((prev) =>
        prev.map((f) => ({ ...f, isEncrypted: true, restored: false }))
      );
      setPhase('encrypted');
    }, 1200);
  };

  const handleTriggerRollback = () => {
    setPhase('restoring');

    setTimeout(() => {
      setFiles((prev) =>
        prev.map((f) => ({ ...f, isEncrypted: false, restored: true }))
      );
      setPhase('restored');
    }, 1500);
  };

  const handleReset = () => {
    setPhase('idle');
    setFiles([
      { id: '1', name: 'Tax_Return_2025.pdf', size: '2.4 MB', isEncrypted: false, restored: false },
      { id: '2', name: 'Family_Photos_Archive.zip', size: '142.8 MB', isEncrypted: false, restored: false },
      { id: '3', name: 'Company_Financial_Ledger.xlsx', size: '1.1 MB', isEncrypted: false, restored: false },
      { id: '4', name: 'Q4_Business_Strategy.docx', size: '850 KB', isEncrypted: false, restored: false },
    ]);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-white my-8">
      {/* Visual Header */}
      <div className="bg-slate-950 px-6 py-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center font-bold">
            <RotateCcw className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base text-white">Ransomware Rollback Simulator</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800">
                Interactive Visual
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Demonstrating Webroot shadow journaling and instant 1-click unencrypted file restoration.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {phase === 'idle' && (
            <button
              onClick={handleSimulateAttack}
              className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-rose-600/20"
            >
              <AlertTriangle className="w-4 h-4" /> Simulate Ransomware Attack
            </button>
          )}

          {phase === 'encrypted' && (
            <button
              onClick={handleTriggerRollback}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-emerald-600/20 animate-pulse"
            >
              <RotateCcw className="w-4 h-4" /> Execute Webroot 1-Click Rollback
            </button>
          )}

          {(phase === 'restored' || phase === 'attacking' || phase === 'restoring') && (
            <button
              onClick={handleReset}
              disabled={phase === 'attacking' || phase === 'restoring'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-all"
            >
              <RefreshCw className="w-4 h-4" /> Reset Simulation
            </button>
          )}
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Status Alert Banner */}
        {phase === 'idle' && (
          <div className="p-4 rounded-2xl bg-sky-950/50 border border-sky-800/80 text-sky-200 text-xs flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <div>
              <span className="font-bold">System Status: Protected & Journaling Active.</span> Webroot is tracking process changes in background RAM logs.
            </div>
          </div>
        )}

        {phase === 'attacking' && (
          <div className="p-4 rounded-2xl bg-amber-950/60 border border-amber-700 text-amber-200 text-xs flex items-center gap-3 animate-pulse">
            <RefreshCw className="w-5 h-5 text-amber-400 animate-spin shrink-0" />
            <div>
              <span className="font-bold">Threat Alert: Unknown process attempting mass file modifications...</span> Intercepting API calls.
            </div>
          </div>
        )}

        {phase === 'encrypted' && (
          <div className="p-4 rounded-2xl bg-rose-950/80 border border-rose-600 text-rose-200 text-xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-rose-400 shrink-0" />
              <div>
                <span className="font-bold text-white">Files Encrypted by Mock Ransomware!</span> Webroot Journal has isolated the threat and preserved clean snapshots.
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-bold bg-rose-900/90 text-rose-300 border border-rose-700 px-2 py-1 rounded">
              Threat Intercepted
            </span>
          </div>
        )}

        {phase === 'restoring' && (
          <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-700 text-emerald-200 text-xs flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-emerald-400 animate-spin shrink-0" />
            <div>
              <span className="font-bold">Executing System Rollback...</span> Reverting modified drive sectors to clean pre-attack state.
            </div>
          </div>
        )}

        {phase === 'restored' && (
          <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500 text-emerald-200 text-xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white">Rollback Complete!</span> 100% of user files restored without paying ransom or losing data.
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-900 text-emerald-300 border border-emerald-700 px-2 py-1 rounded">
              0 Files Lost
            </span>
          </div>
        )}

        {/* File Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {files.map((file) => (
            <div
              key={file.id}
              className={`p-4 rounded-2xl border transition-all ${
                file.isEncrypted
                  ? 'bg-rose-950/30 border-rose-800 text-rose-200 ring-1 ring-rose-500/50'
                  : file.restored
                  ? 'bg-emerald-950/30 border-emerald-700 text-emerald-200 ring-1 ring-emerald-500/50'
                  : 'bg-slate-950/60 border-slate-800 text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    file.isEncrypted
                      ? 'bg-rose-900/80 text-rose-300'
                      : file.restored
                      ? 'bg-emerald-900/80 text-emerald-300'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {file.isEncrypted ? <Lock className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                </div>
                <span className="text-[10px] font-mono text-slate-400">{file.size}</span>
              </div>

              <div className="font-semibold text-xs truncate">
                {file.isEncrypted ? `${file.name}.LOCKED_ENCRYPTED` : file.name}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Status:</span>
                <span
                  className={`font-bold ${
                    file.isEncrypted
                      ? 'text-rose-400'
                      : file.restored
                      ? 'text-emerald-400'
                      : 'text-slate-300'
                  }`}
                >
                  {file.isEncrypted ? 'ENCRYPTED' : file.restored ? 'RESTORED' : 'HEALTHY'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
