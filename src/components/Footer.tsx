import React from 'react';
import { CLINIC_LOCATIONS } from '../data/dentalData';
import { Phone, Mail, Clock, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center text-slate-900 font-bold shadow-md shadow-teal-500/20">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8 2 5 4.2 5 7.8c0 2.4.9 4.3 1.4 7.2.5 3 2 7 5.6 7 3.6 0 5.1-4 5.6-7 .5-2.9 1.4-4.8 1.4-7.2C19 4.2 16 2 12 2zm0 13c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                </svg>
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                Aura <span className="text-teal-400 font-light">Dental</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Hệ thống Nha khoa Thẩm mỹ & Điều trị kỹ thuật cao chuẩn Thụy Sĩ. Tiên phong áp dụng
              công nghệ vi phẫu không đau và triết lý bảo tồn răng thật tự nhiên.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div>Giấy phép hoạt động khám chữa bệnh số: 08392/HCM-GPHĐ cấp bởi Sở Y Tế</div>
              <div>Người chịu trách nhiệm chuyên môn: ThS.BSCKI Nguyễn Hoàng Thái</div>
            </div>
          </div>

          {/* Locations (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Hệ Thống Phòng Khám
            </h4>
            <div className="space-y-4">
              {CLINIC_LOCATIONS.map((loc) => (
                <div key={loc.id} className="text-xs space-y-1 bg-slate-800/50 p-3.5 rounded-xl border border-slate-800">
                  <div className="font-bold text-white">{loc.name}</div>
                  <div className="text-slate-400 flex items-start gap-1.5 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="text-teal-400 font-mono font-medium pt-0.5">
                    Hotline: {loc.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Working Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Thời Gian Làm Việc
            </h4>
            <div className="text-xs space-y-2 text-slate-400">
              <div className="flex items-center gap-2 text-white font-medium">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>08:00 - 20:00 Hàng Ngày</span>
              </div>
              <p>Mở cửa cả Thứ 7, Chủ Nhật và các ngày nghỉ lễ lớn.</p>
              <div className="pt-3 border-t border-slate-800 space-y-1.5">
                <div className="text-[11px] text-slate-500 uppercase tracking-wider">Tổng đài hỗ trợ 24/7:</div>
                <a
                  href="tel:19008888"
                  className="text-base font-bold font-mono text-teal-400 hover:text-teal-300 block"
                >
                  1900 8888
                </a>
                <div className="text-[11px] text-slate-400">contact@auradental.vn</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Nha Khoa Quốc Tế Aura Dental. Bản quyền thuộc về Aura Dental Studio.
          </div>
          <div className="flex items-center gap-6">
            <a href="#dich-vu" className="hover:text-slate-300 transition-colors">Dịch vụ</a>
            <a href="#bang-gia" className="hover:text-slate-300 transition-colors">Bảng giá</a>
            <a href="#danh-gia" className="hover:text-slate-300 transition-colors">Đánh giá</a>
            <a href="#bac-si" className="hover:text-slate-300 transition-colors">Bác sĩ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
