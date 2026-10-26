import React, { useState } from 'react';
import { Calendar, PhoneCall, Menu, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenMyAppointments: () => void;
  appointmentCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenMyAppointments,
  appointmentCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm shadow-teal-600/30 group-hover:scale-105 transition-transform">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8 2 5 4.2 5 7.8c0 2.4.9 4.3 1.4 7.2.5 3 2 7 5.6 7 3.6 0 5.1-4 5.6-7 .5-2.9 1.4-4.8 1.4-7.2C19 4.2 16 2 12 2zm0 13c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
            </svg>
          </div>
          <span className="font-display text-2xl tracking-tight text-slate-900">
            Aura <span className="text-teal-600 font-light">Dental</span>
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#dich-vu"
            className="hover:text-teal-600 transition-colors whitespace-nowrap shrink-0"
          >
            Dịch Vụ
          </a>
          <a
            href="#bo-suu-tap"
            className="hover:text-teal-600 transition-colors whitespace-nowrap shrink-0 text-teal-800 font-semibold"
          >
            Nụ Cười Thực Tế
          </a>
          <a
            href="#bang-gia"
            className="hover:text-teal-600 transition-colors whitespace-nowrap shrink-0"
          >
            Bảng Giá
          </a>
          <a
            href="#danh-gia"
            className="hover:text-teal-600 transition-colors whitespace-nowrap shrink-0"
          >
            Đánh Giá
          </a>
          <a
            href="#bac-si"
            className="hover:text-teal-600 transition-colors whitespace-nowrap shrink-0"
          >
            Bác Sĩ
          </a>
        </nav>

        {/* Zone 3: 1 primary action button + optional appointments drawer badge */}
        <div className="flex items-center gap-3 shrink-0">
          {appointmentCount > 0 && (
            <button
              onClick={onOpenMyAppointments}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-teal-800 bg-teal-50 border border-teal-200/80 rounded-lg hover:bg-teal-100 transition-colors whitespace-nowrap shrink-0"
              title="Xem lịch hẹn đã đặt"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Lịch hẹn ({appointmentCount})</span>
            </button>
          )}

          <button
            onClick={() => onOpenBooking()}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-lg shadow-sm shadow-teal-600/20 hover:shadow-teal-600/30 transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Đặt Lịch Khám</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-700">
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-600"
            >
              Dịch Vụ Điều Trị
            </a>
            <a
              href="#bo-suu-tap"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-600 text-teal-800 font-semibold"
            >
              Bộ Sưu Tập Nụ Cười
            </a>
            <a
              href="#bang-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-600"
            >
              Bảng Giá Niêm Yết
            </a>
            <a
              href="#danh-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-600"
            >
              Đánh Giá Khách Hàng
            </a>
            <a
              href="#bac-si"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-600"
            >
              Đội Ngũ Bác Sĩ
            </a>
            <a
              href="#co-so"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-teal-600"
            >
              Cơ Sở & Công Nghệ
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            {appointmentCount > 0 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMyAppointments();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-teal-800 bg-teal-50 rounded-lg border border-teal-200"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Lịch hẹn của tôi ({appointmentCount})
              </button>
            )}
            <a
              href="tel:19008888"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg"
            >
              <PhoneCall className="w-4 h-4 text-teal-600" />
              Hotline: 1900 8888
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
