'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Mail, CheckCircle2, AlertTriangle, Send, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: 'Contact Editorial Team' }]} />

      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-3">
        <h1 className="text-3xl font-semibold">Contact Editorial & Research Team</h1>
        <p className="text-sm text-slate-300">
          Have feedback on our research articles or spot an updated specification? Send a note to our editorial staff.
        </p>
      </div>

      {/* Prominent Non-Official Customer Support Disclaimer */}
      <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl text-xs text-amber-950 space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Independent Site Disclaimer - Not Official Customer Support</span>
        </div>
        <p>
          This website provides independent informational content and is <strong>NOT official Webroot customer support</strong>. Submitting this form will NOT contact Webroot billing, technical support, or cancel your subscription.
        </p>
        <p className="pt-1">
          For official Webroot technical support, billing inquiries, or keycode assistance, please visit the official Webroot support portal directly:
          <a
            href="https://answers.webroot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 hover:underline font-bold ml-1 inline-flex items-center gap-1"
          >
            answers.webroot.com <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        {submitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h2 className="font-bold text-slate-900 text-lg">Thank You for Your Feedback!</h2>
            <p className="text-xs text-slate-600">Our editorial team has received your message and will review your note.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Your Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Editorial feedback or specification update"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Message / Editorial Feedback</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please describe your editorial feedback or question..."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-slate-900 hover:bg-sky-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Submit Editorial Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
