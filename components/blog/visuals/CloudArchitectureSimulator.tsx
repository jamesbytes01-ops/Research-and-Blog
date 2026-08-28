'use client';

import React, { useState } from 'react';
import { Cpu, ShieldCheck, Activity, ShieldAlert, FileCode, Play, RefreshCw, Zap, Database } from 'lucide-react';

interface FileSample {
  id: string;
  name: string;
  size: string;
  type: 'good' | 'bad' | 'unknown';
  hash: string;
  behavior: string;
  verdict: string;
  latency: string;
  action: string;
}

const SAMPLE_FILES: FileSample[] = [
  {
    id: 'photoshop',
    name: 'Adobe_Photoshop_2026_Setup.exe',
    size: '1.2 GB',
    type: 'good',
    hash: 'e99a18c428cb38d5f260853678922e03',
    behavior: 'Standard digitally signed installer calling Windows GDI and official Adobe endpoints.',
    verdict: 'CLEAN / VERIFIED GOODWARE',
    latency: '11 ms',
    action: 'Execution allowed with 0% CPU impact.',
  },
  {
    id: 'malware',
    name: 'Invoice_Pdf_Update_v2.exe',
    size: '840 KB',
    type: 'bad',
    hash: '4d82b3a09e120f8c5b1012398418721c',
    behavior: 'Attempts unauthorized registry write to HKCU\\Software\\Run and establishes hidden socket to C2 server.',
    verdict: 'MALICIOUS / TROJAN DETECTED',
    latency: '14 ms',
    action: 'Process terminated & payload quarantined instantly.',
  },
  {
    id: 'unknown',
    name: 'Custom_Game_Mod_Plugin.exe',
    size: '4.1 MB',
    type: 'unknown',
    hash: 'a1b2c3d4e5f67890123456789abcdef0',
    behavior: 'Unsigned binary executing memory allocation hooks. Hash not yet listed in global threat index.',
    verdict: 'UNKNOWN ZERO-DAY THREAT',
    latency: '16 ms',
    action: 'Enters isolated behavioral sandbox + system journaling activated.',
  },
];

export default function CloudArchitectureSimulator() {
  const [selectedFile, setSelectedFile] = useState<FileSample>(SAMPLE_FILES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState<number>(0);

  const handleRunScan = () => {
    setIsScanning(true);
    setScanStep(1);

    setTimeout(() => {
      setScanStep(2);
    }, 700);

    setTimeout(() => {
      setScanStep(3);
    }, 1400);

    setTimeout(() => {
      setScanStep(4);
      setIsScanning(false);
    }, 2100);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-white my-8">
      {/* Header Bar */}
      <div className="bg-slate-950 px-6 py-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 border border-sky-800 flex items-center justify-center font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base text-white">Live Cloud Architecture Simulator</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-sky-950 text-sky-400 border border-sky-800">
                Interactive Visual
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Simulate Webroot micro-second BrightCloud® hash verification without signature downloads.
            </p>
          </div>
        </div>

        <button
          onClick={handleRunScan}
          disabled={isScanning}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-sky-600/20"
        >
          {isScanning ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-sky-200" />
              Scanning Cloud Index...
            </>
          ) : (
            <>
              <Play className="w-4 h-4 text-white fill-white" />
              Test Telemetry Lookup
            </>
          )}
        </button>
      </div>

      {/* Main Grid */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Select Executable Sample */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">1. Select Target Executable</h4>
          
          <div className="space-y-3">
            {SAMPLE_FILES.map((file) => (
              <button
                key={file.id}
                onClick={() => {
                  setSelectedFile(file);
                  setScanStep(0);
                }}
                disabled={isScanning}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                  selectedFile.id === file.id
                    ? 'bg-slate-800/90 border-sky-500 ring-1 ring-sky-500'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    file.type === 'good'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : file.type === 'bad'
                      ? 'bg-rose-950 text-rose-400 border border-rose-800'
                      : 'bg-amber-950 text-amber-400 border border-amber-800'
                  }`}
                >
                  <FileCode className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-xs text-white truncate">{file.name}</span>
                    <span className="text-[10px] text-slate-400">{file.size}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1 truncate">Hash: {file.hash}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Local Signature File Size:</span>
              <span className="font-bold text-slate-200">0 MB (Cloud-Based)</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Agent Memory Footprint:</span>
              <span className="font-bold text-emerald-400">&lt; 15 MB RAM</span>
            </div>
          </div>
        </div>

        {/* Right Side: Execution Sequence & Telemetry Visualizer */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">2. Telemetry Telecommunications Flow</h4>

          <div className="space-y-3">
            {/* Step 1 */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                scanStep >= 1
                  ? 'bg-slate-800 border-sky-500/80 text-white'
                  : 'bg-slate-950/40 border-slate-800/60 opacity-60 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-sky-400 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Step 1: Compute File Fingerprint & Metadata
                </span>
                {scanStep >= 1 && <span className="text-[10px] font-mono text-emerald-400">COMPLETED</span>}
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                Calculates cryptographic hash <code className="bg-slate-900 px-1 py-0.5 rounded text-sky-300">{selectedFile.hash}</code> and gathers behavioral metadata.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                scanStep >= 2
                  ? 'bg-slate-800 border-sky-500/80 text-white'
                  : 'bg-slate-950/40 border-slate-800/60 opacity-60 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-sky-400 flex items-center gap-2">
                  <Database className="w-4 h-4" /> Step 2: Micro-Second Encrypted API Lookup
                </span>
                {scanStep >= 2 && (
                  <span className="text-[10px] font-mono text-sky-400 font-bold">Latency: {selectedFile.latency}</span>
                )}
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                Sends lightweight payload query to BrightCloud® threat intelligence cluster analyzing over 30 billion file records.
              </p>
            </div>

            {/* Step 3 & Verdict Result */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                scanStep >= 4
                  ? selectedFile.type === 'good'
                    ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                    : selectedFile.type === 'bad'
                    ? 'bg-rose-950/40 border-rose-500 text-rose-200'
                    : 'bg-amber-950/40 border-amber-500 text-amber-200'
                  : scanStep >= 3
                  ? 'bg-slate-800 border-sky-500 text-white'
                  : 'bg-slate-950/40 border-slate-800/60 opacity-60 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold flex items-center gap-2">
                  {selectedFile.type === 'good' ? (
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  ) : selectedFile.type === 'bad' ? (
                    <ShieldAlert className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Cpu className="w-4 h-4 text-amber-400" />
                  )}
                  Step 3: Threat Engine Verdict & Endpoint Execution
                </span>
                {scanStep >= 4 && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-current">
                    {selectedFile.verdict}
                  </span>
                )}
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                {scanStep >= 4 ? selectedFile.action : selectedFile.behavior}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
