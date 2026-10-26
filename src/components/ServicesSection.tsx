import React, { useState } from 'react';
import { SERVICES, DentalService } from '../data/dentalData';
import { Search, Calendar, ChevronRight, CheckCircle2, Shield, Clock, Sparkles, X, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<DentalService | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Dịch Vụ' },
    { id: 'cosmetic', label: 'Thẩm Mỹ Nụ Cười' },
    { id: 'orthodontics', label: 'Chỉnh Nha & Niềng' },
    { id: 'implant', label: 'Trồng Răng Implant' },
    { id: 'general', label: 'Điều Trị Chuyên Sâu' },
  ];

  const filteredServices = SERVICES.filter((srv) => {
    const matchCategory = selectedCategory === 'all' || srv.category === selectedCategory;
    const matchQuery =
      srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.technology.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <section id="dich-vu" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
            <span>Danh Sách Dịch Vụ Tiêu Chuẩn Châu Âu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
            Giải Pháp Chăm Sóc Răng Miệng Toàn Diện
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Mỗi dịch vụ tại Aura Dental đều được cá nhân hóa theo từng nụ cười, ứng dụng trang thiết bị
            chuẩn đoán 3D hiện đại nhất cùng triết lý bảo tồn tối đa răng thật sinh học.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
          {/* Category Tabs (Functional segmented buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm dịch vụ, công nghệ..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="py-16 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-sm">Không tìm thấy dịch vụ phù hợp với từ khóa "{searchQuery}"</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 text-xs text-teal-700 font-medium hover:underline"
            >
              Xem lại tất cả dịch vụ
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredServices.map((srv, index) => (
              <div
                key={srv.id}
                className="bg-[#FAFAF8] rounded-2xl border border-slate-200/90 hover:border-teal-600/40 p-6 flex flex-col justify-between transition-all hover:shadow-lg hover:shadow-slate-200/50 group"
              >
                <div className="space-y-4">
                  {/* Clean unboxed category kicker & index */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-teal-800 uppercase tracking-wider">
                      {srv.categoryLabel}
                    </span>
                    <span className="font-mono text-slate-400">0{index + 1}</span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {srv.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {srv.shortDesc}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="py-2 space-y-1.5 border-t border-slate-200/70 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Thời gian: {srv.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{srv.warranty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="truncate">{srv.technology}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="pt-5 mt-4 border-t border-slate-200/70 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                      Chi phí niêm yết
                    </div>
                    <div className="text-base font-bold text-slate-900 font-mono">
                      {srv.priceFormatted}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalService(srv)}
                      className="px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
                      title="Xem quy trình chi tiết"
                    >
                      Quy trình
                    </button>
                    <button
                      onClick={() => onSelectServiceToBook(srv.id)}
                      className="px-3.5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-teal-600/20"
                    >
                      <span>Đặt lịch</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Treatment Protocol Detail Modal */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 sticky top-0 z-10">
                <div>
                  <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                    {activeModalService.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {activeModalService.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Mô Tả Chuyên Môn
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeModalService.fullDesc}
                  </p>
                </div>

                {/* Suitable cases */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Chỉ Định Phù Hợp Cho
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalService.suitableFor.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4-step Clinical Protocol */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Quy Trình Điều Trị Tiêu Chuẩn Châu Âu
                  </h4>
                  <div className="space-y-3">
                    {activeModalService.steps.map((st) => (
                      <div
                        key={st.step}
                        className="p-3.5 rounded-xl border border-slate-200/80 bg-[#FBFBFA] flex items-start gap-3"
                      >
                        <div className="w-7 h-7 rounded-lg bg-teal-600 text-white font-bold font-mono text-xs flex items-center justify-center shrink-0">
                          0{st.step}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{st.title}</div>
                          <p className="text-xs text-slate-600 mt-0.5">{st.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology and Guarantee banner */}
                <div className="p-4 bg-teal-50/70 border border-teal-200/80 rounded-xl text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Trang thiết bị ứng dụng:</span>
                    <span className="font-semibold text-slate-900">{activeModalService.technology}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Cam kết bảo hành:</span>
                    <span className="font-semibold text-teal-800">{activeModalService.warranty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Chi phí niêm yết:</span>
                    <span className="font-mono font-bold text-teal-700 text-sm">
                      {activeModalService.priceFormatted}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3 sticky bottom-0">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200/70 rounded-lg transition-colors"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const sid = activeModalService.id;
                    setActiveModalService(null);
                    onSelectServiceToBook(sid);
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Đặt Lịch Với Dịch Vụ Này</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
