'use client';

import React, { useState } from 'react';
import { PRODUCTS_DATA } from '@/data/products';
import { Product } from '@/types';
import { Shield, Check, ArrowRight, RotateCcw, Award, Info, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function RecommendationQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{
    devices: string[];
    count: string;
    priority: string;
    needVpn: boolean;
    needBackup: boolean;
    needOptimizer: boolean;
  }>({
    devices: [],
    count: '1',
    priority: 'antivirus',
    needVpn: false,
    needBackup: false,
    needOptimizer: false,
  });

  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  const questions = [
    {
      title: 'What devices do you need to protect?',
      subtitle: 'Select all operating systems you plan to protect.',
      type: 'multi',
      options: [
        { label: 'Windows PC', value: 'windows' },
        { label: 'Mac (macOS)', value: 'mac' },
        { label: 'Android Smartphone or Tablet', value: 'android' },
        { label: 'iPhone or iPad (iOS)', value: 'ios' },
        { label: 'Chromebook', value: 'chromebook' },
      ],
    },
    {
      title: 'How many total devices do you need to cover?',
      subtitle: 'Choose your device count requirement.',
      type: 'single',
      options: [
        { label: '1 Device (1 PC or Mac)', value: '1' },
        { label: 'Up to 3 Devices', value: '3' },
        { label: 'Up to 5 Devices', value: '5' },
        { label: 'More than 5 Devices', value: 'multi' },
      ],
    },
    {
      title: 'What is your primary security goal?',
      subtitle: 'Identify what matters most to your setup.',
      type: 'single',
      options: [
        { label: 'Fast, lightweight real-time antivirus without PC lag', value: 'antivirus' },
        { label: 'Zero-lag protection for PC gaming & streaming', value: 'gamers' },
        { label: 'Multi-device security for phone, laptop & tablet', value: 'multi-device' },
        { label: 'All-in-one suite with backup, VPN, and system optimizer', value: 'complete' },
      ],
    },
    {
      title: 'Do you need Cloud Storage Backup or PC Performance Cleanup?',
      subtitle: 'Select additional utility tools you require.',
      type: 'utility',
      options: [
        { label: '25GB Encrypted Cloud Backup for documents & photos', value: 'backup' },
        { label: 'System Optimizer to clean temporary files and speed up Windows', value: 'optimizer' },
        { label: 'Public Wi-Fi VPN Encryption', value: 'vpn' },
      ],
    },
  ];

  const handleSelectMulti = (value: string) => {
    const current = answers.devices;
    if (current.includes(value)) {
      setAnswers({ ...answers, devices: current.filter((d) => d !== value) });
    } else {
      setAnswers({ ...answers, devices: [...current, value] });
    }
  };

  const calculateResult = () => {
    // Scoring logic
    if (answers.devices.includes('chromebook') && answers.devices.length === 1) {
      setRecommendedProduct(PRODUCTS_DATA.find((p) => p.slug === 'webroot-chromebook') || PRODUCTS_DATA[0]);
      return;
    }
    if (answers.priority === 'gamers') {
      setRecommendedProduct(PRODUCTS_DATA.find((p) => p.slug === 'webroot-gamers') || PRODUCTS_DATA[0]);
      return;
    }
    if (answers.needBackup || answers.needOptimizer || answers.priority === 'complete') {
      setRecommendedProduct(PRODUCTS_DATA.find((p) => p.slug === 'webroot-internet-security-complete') || PRODUCTS_DATA[2]);
      return;
    }
    if (answers.count === '3' || answers.count === '5' || answers.devices.includes('android') || answers.devices.includes('ios')) {
      setRecommendedProduct(PRODUCTS_DATA.find((p) => p.slug === 'webroot-internet-security-plus') || PRODUCTS_DATA[1]);
      return;
    }
    // Default fallback
    setRecommendedProduct(PRODUCTS_DATA.find((p) => p.slug === 'webroot-antivirus') || PRODUCTS_DATA[0]);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({
      devices: [],
      count: '1',
      priority: 'antivirus',
      needVpn: false,
      needBackup: false,
      needOptimizer: false,
    });
    setRecommendedProduct(null);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-900 text-white p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider">
            <Shield className="w-5 h-5" />
            <span>Product Diagnostic Quiz</span>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            {recommendedProduct ? 'Complete' : `Step ${currentStep + 1} of ${questions.length}`}
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-white mt-2">
          Which Webroot product is right for me?
        </h2>
        <p className="text-xs text-slate-300 mt-1">
          Answer a few quick questions to receive an independent recommendation tailored to your devices and security goals.
        </p>
      </div>

      {!recommendedProduct ? (
        <div className="p-6 sm:p-8 space-y-6">
          {/* Question Title */}
          <div>
            <h3 className="text-lg font-bold text-slate-900">{questions[currentStep].title}</h3>
            <p className="text-xs text-slate-500 mt-1">{questions[currentStep].subtitle}</p>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentStep === 0 &&
              questions[0].options.map((opt) => {
                const isSelected = answers.devices.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectMulti(opt.value)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-sky-50 border-sky-500 text-sky-950 font-semibold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check className="w-5 h-5 text-sky-600" />}
                  </button>
                );
              })}

            {currentStep === 1 &&
              questions[1].options.map((opt) => {
                const isSelected = answers.count === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setAnswers({ ...answers, count: opt.value })}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-sky-50 border-sky-500 text-sky-950 font-semibold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check className="w-5 h-5 text-sky-600" />}
                  </button>
                );
              })}

            {currentStep === 2 &&
              questions[2].options.map((opt) => {
                const isSelected = answers.priority === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setAnswers({ ...answers, priority: opt.value })}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-sky-50 border-sky-500 text-sky-950 font-semibold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check className="w-5 h-5 text-sky-600" />}
                  </button>
                );
              })}

            {currentStep === 3 && (
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={answers.needBackup}
                    onChange={(e) => setAnswers({ ...answers, needBackup: e.target.checked })}
                    className="w-4 h-4 text-sky-600 rounded"
                  />
                  <span className="text-sm font-medium text-slate-800">25GB Encrypted Cloud Backup</span>
                </label>
                <label className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={answers.needOptimizer}
                    onChange={(e) => setAnswers({ ...answers, needOptimizer: e.target.checked })}
                    className="w-4 h-4 text-sky-600 rounded"
                  />
                  <span className="text-sm font-medium text-slate-800">Windows System Optimizer Tool</span>
                </label>
                <label className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100">
                  <input
                    type="checkbox"
                    checked={answers.needVpn}
                    onChange={(e) => setAnswers({ ...answers, needVpn: e.target.checked })}
                    className="w-4 h-4 text-sky-600 rounded"
                  />
                  <span className="text-sm font-medium text-slate-800">Public Wi-Fi Secure VPN</span>
                </label>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            {currentStep > 0 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl transition-colors shadow-md"
            >
              {currentStep === questions.length - 1 ? 'Show Recommendation' : 'Next Question'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Result Screen */
        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3">
            <Award className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                Recommended Product Match
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">{recommendedProduct.name}</h3>
              <p className="text-xs text-slate-600 mt-1">{recommendedProduct.tagline}</p>
            </div>
          </div>

          {/* Why it matches breakdown */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Why this plan matches your diagnostic input:</h4>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Device Support:</strong> Supports {recommendedProduct.deviceLimit}.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Key Capabilities:</strong> Includes {recommendedProduct.features.slice(0, 4).join(', ')}.
                </span>
              </li>
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
            <Link
              href={`/products/${recommendedProduct.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-sky-700 text-white font-bold text-sm rounded-xl transition-colors shadow"
            >
              Explore {recommendedProduct.name} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={recommendedProduct.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors"
            >
              View Official Webroot Offer <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Disclaimer badge */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-500 flex items-start gap-2">
            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              Independent recommendation based on feature preferences selected. Not an official Webroot warranty or endorsement.
            </span>
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Retake Diagnostic Quiz
          </button>
        </div>
      )}
    </div>
  );
}
