import React, { useState } from 'react';
import { Calendar, ShieldCheck, Award, Clock, ArrowRight, Sparkles, Check, ChevronRight, Star } from 'lucide-react';
import { SERVICES, CLINIC_LOCATIONS } from '../data/dentalData';
import { CustomerRadiantSmileHero } from './DentalPortraits';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onScrollToPrice: () => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onScrollToPrice,
  onScrollToServices,
}) => {
  const [quickServiceId, setQuickServiceId] = useState(SERVICES[0].id);
  const [quickLocation, setQuickLocation] = useState(CLINIC_LOCATIONS[0].id);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8F7] via-[#FAFAF8] to-white pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200/60">
      {/* Subtle organic light reflections */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 left-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              <span>Chuẩn Mực Nha Khoa Thẩm Mỹ Thụy Sĩ</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Hà Nội & TP. Hồ Chí Minh</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.15] tracking-tight">
              Nụ cười rạng rỡ, <br className="hidden sm:inline" />
              <span className="text-teal-700 font-display font-light italic">
                hàm răng trắng sáng
              </span>{' '}
              tự nhiên & bền lâu
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Trải nghiệm điều trị không đau với công nghệ vi phẫu tân tiến, 100% Bác sĩ CKI tốt
              nghiệp ĐH Y Dược, phòng vô trùng chuẩn Châu Âu và cam kết bảo hành minh bạch bằng văn bản.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-7 py-3.5 text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-xl shadow-md shadow-teal-600/20 hover:shadow-teal-600/30 transition-all flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                <Calendar className="w-5 h-5" />
                <span>Đặt Lịch Khám Miễn Phí</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={onScrollToPrice}
                className="px-6 py-3.5 text-base font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Xem Bảng Giá Minh Bạch</span>
              </button>
            </div>

            {/* Social Proof Strip with real patient satisfaction */}
            <div className="pt-2 flex items-center gap-4 border-t border-slate-200/80 max-w-lg">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-9 h-9 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                  HY
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                  TN
                </div>
                <div className="w-9 h-9 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                  BT
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                  MH
                </div>
              </div>

              <div className="text-xs">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600">
                  <strong className="text-slate-900">4.9/5</strong> từ hơn 2.400+ khách hàng đã trải nghiệm
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Portrait of Client with Radiant White Smile + Quick Book Widget */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-teal-900/10 p-4 sm:p-5 relative overflow-hidden">
              {/* High-Definition Smiling Client Portrait with White Teeth */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 aspect-[4/3] w-full">
                <CustomerRadiantSmileHero className="w-full h-full object-cover" />
              </div>

              {/* Quick Booking Strip underneath the portrait */}
              <div className="pt-4 px-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-display">
                      Khám & Chụp Phim 3D Miễn Phí (Trị giá 500.000đ)
                    </h3>
                    <p className="text-[11px] text-slate-500">Giữ chỗ ưu tiên với Bác sĩ CKI</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 px-2 py-1 rounded-md border border-teal-200">
                    0 VNĐ
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <select
                    value={quickServiceId}
                    onChange={(e) => setQuickServiceId(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.name}
                      </option>
                    ))}
                  </select>

                  <select
                    value={quickLocation}
                    onChange={(e) => setQuickLocation(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  >
                    {CLINIC_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name.split('-')[0]}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking(quickServiceId)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Chọn Ngày & Giờ Khám Ngay</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & KPI Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tabular-nums">
              15.000+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600">
              Nụ cười kiến tạo thành công
            </div>
            <p className="text-[11px] text-slate-400">Từ năm 2018 đến nay</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600">
              Bác sĩ Thạc sĩ - CKI ĐH Y Dược
            </div>
            <p className="text-[11px] text-slate-400">Tu nghiệp Thụy Sĩ & Hoa Kỳ</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-teal-700 tabular-nums">
              4.9 / 5.0
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600">
              Đánh giá từ 2.400+ khách hàng
            </div>
            <p className="text-[11px] text-slate-400">Trên Google & Fanpage</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tabular-nums">
              0 VNĐ
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600">
              Phí khám & Chụp X-Quang 3D
            </div>
            <p className="text-[11px] text-slate-400">Tặng kèm khi đặt lịch online</p>
          </div>
        </div>
      </div>
    </section>
  );
};
