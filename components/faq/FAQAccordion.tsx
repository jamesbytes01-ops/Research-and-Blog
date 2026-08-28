'use client';

import React, { useState } from 'react';
import { FAQ } from '@/types';
import { ChevronDown, ExternalLink, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);

  const toggle = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = openIds.includes(faq.id);
        return (
          <div
            key={faq.id}
            id={faq.id}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-sm"
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-sky-600 shrink-0" />
                <span>{faq.question}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-sky-600' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 space-y-3">
                <p>{faq.answer}</p>
                {faq.officialLink && (
                  <div className="pt-2">
                    <a
                      href={faq.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:underline"
                    >
                      Read official Webroot knowledge base answer <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
