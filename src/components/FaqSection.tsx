import React, { useState } from 'react';
import { FAQS } from '../data/dentalData';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F9F9F7] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
            <span>Giải Đáp Thắc Mắc Thường Gặp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
            Mọi Điều Bạn Cần Biết Trước Khi Thăm Khám
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Minh bạch thông tin là nguyên tắc hàng đầu giúp khách hàng an tâm tuyệt đối khi điều trị tại Aura Dental.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-teal-50 text-teal-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support banner */}
        <div className="mt-10 p-6 bg-teal-50/70 border border-teal-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-teal-950 font-display">
              Bạn có câu hỏi riêng cho tình trạng răng miệng của mình?
            </h4>
            <p className="text-xs text-teal-800 mt-0.5">
              Bác sĩ trực tổng đài luôn sẵn sàng giải đáp 24/7 hoàn toàn miễn phí.
            </p>
          </div>
          <a
            href="tel:19008888"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Gọi Bác Sĩ: 1900 8888</span>
          </a>
        </div>
      </div>
    </section>
  );
};
