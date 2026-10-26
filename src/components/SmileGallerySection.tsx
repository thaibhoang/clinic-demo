import React, { useState } from 'react';
import { Sparkles, Calendar, Check, ArrowRight, Eye, Star, Heart, X } from 'lucide-react';

interface SmileGalleryItem {
  id: string;
  name: string;
  age: number;
  profession: string;
  service: string;
  category: 'veneer' | 'invisalign' | 'whitening' | 'implant';
  shadeBefore: string;
  shadeAfter: string;
  treatmentTime: string;
  satisfaction: number;
  quote: string;
  accentColor: string;
  skinTone: string;
  lipColor: string;
  teethTeethCount: number;
}

const SMILE_ITEMS: SmileGalleryItem[] = [
  {
    id: 'smile-1',
    name: 'Nguyễn Hải Yến',
    age: 28,
    profession: 'MC & Biên tập viên Truyền hình',
    service: 'Niềng Răng Trong Suốt Invisalign Comprehensive',
    category: 'invisalign',
    shadeBefore: 'Khấp khểnh A3',
    shadeAfter: 'Đều chuẩn khớp cắn BL2',
    treatmentTime: '14 tháng (28 cặp khay)',
    satisfaction: 5,
    quote: 'Mỗi lần lên sóng trực tiếp, nụ cười đều tăm tắp mang lại cho mình 200% sự tự tin!',
    accentColor: 'from-teal-500/20 to-emerald-500/20',
    skinTone: '#FFF0EA',
    lipColor: '#E11D48',
    teethTeethCount: 8,
  },
  {
    id: 'smile-2',
    name: 'Phan Thảo Nguyên',
    age: 31,
    profession: 'Nhà Thiết Kế Nội Thất',
    service: 'Dán Sứ Veneer Emax Press Thụy Sĩ (16 Răng)',
    category: 'veneer',
    shadeBefore: 'Nhiễm Tetracycline A4',
    shadeAfter: 'Trắng trong tự nhiên BL1',
    treatmentTime: '2 buổi hẹn (3 ngày)',
    satisfaction: 5,
    quote: 'Bác sĩ chỉ làm nhám 0.2mm, không mài nhỏ răng. Cảm giác ăn nhai hoàn toàn như răng thật!',
    accentColor: 'from-amber-500/20 to-rose-500/20',
    skinTone: '#FED7AA',
    lipColor: '#BE123C',
    teethTeethCount: 10,
  },
  {
    id: 'smile-3',
    name: 'Vũ Ngọc Bích Trâm',
    age: 35,
    profession: 'Chủ Doanh Nghiệp Thời Trang',
    service: 'Tẩy Trắng Răng Laser Philips Zoom WhiteSpeed',
    category: 'whitening',
    shadeBefore: 'Xỉn màu cà phê A3.5',
    shadeAfter: 'Bật 6 tông trắng sáng B1',
    treatmentTime: '60 phút tại ghế',
    satisfaction: 5,
    quote: 'Không ê buốt một chút nào. Sau 60 phút răng trắng bật tông, chuẩn bị chụp lookbook cực kỳ ưng ý.',
    accentColor: 'from-cyan-500/20 to-blue-500/20',
    skinTone: '#FFF5F0',
    lipColor: '#F43F5E',
    teethTeethCount: 8,
  },
  {
    id: 'smile-4',
    name: 'Trần Minh Hoàng',
    age: 46,
    profession: 'Giám Đốc Điều Hành Logistics',
    service: 'Cấy Ghép Implant Straumann SLA Active Thụy Sĩ',
    category: 'implant',
    shadeBefore: 'Mất 2 răng cối hàm dưới',
    shadeAfter: 'Khôi phục 100% lực nhai',
    treatmentTime: '4 tuần tích hợp xương',
    satisfaction: 5,
    quote: 'Đặt trụ bằng máng dẫn 3D không hề đau. Giờ tôi ăn uống thịt bò, đồ cứng thoải mái không lo lắng.',
    accentColor: 'from-emerald-500/20 to-teal-500/20',
    skinTone: '#FDE68A',
    lipColor: '#9F1239',
    teethTeethCount: 8,
  },
  {
    id: 'smile-5',
    name: 'Lê Hoàng Phương Linh',
    age: 26,
    profession: 'KOL & Beauty Blogger',
    service: 'Dán Sứ Ultrathin Lisi Phong Cách Nụ Cười DSD',
    category: 'veneer',
    shadeBefore: 'Răng cửa thưa 2mm A2',
    shadeAfter: 'Cung cười chữ U chuẩn tỉ lệ OM1',
    treatmentTime: '2 buổi hẹn',
    satisfaction: 5,
    quote: 'Màu sứ phản quang đa tầng trong veo như ngọc trai, chụp góc cận camera 4K không chút tì vết.',
    accentColor: 'from-pink-500/20 to-rose-500/20',
    skinTone: '#FFF1EB',
    lipColor: '#E11D48',
    teethTeethCount: 10,
  },
  {
    id: 'smile-6',
    name: 'Đoàn Nhật Quang',
    age: 33,
    profession: 'Kiến Trúc Sư Trưởng',
    service: 'Bọc Toàn Sứ Cercon HT & Chỉnh Khớp Cắn',
    category: 'veneer',
    shadeBefore: 'Sâu mẻ răng hàm và răng cửa',
    shadeAfter: 'Răng đều trắng bóng bền 20 năm',
    treatmentTime: '3 ngày hoàn thiện',
    satisfaction: 5,
    quote: 'Đội ngũ bác sĩ tư vấn rất tỉ mỉ, thiết kế dáng răng nam tính, tự nhiên và cứng cáp.',
    accentColor: 'from-slate-500/20 to-teal-500/20',
    skinTone: '#FBD7C0',
    lipColor: '#991B1B',
    teethTeethCount: 8,
  },
];

interface SmileGallerySectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const SmileGallerySection: React.FC<SmileGallerySectionProps> = ({ onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'veneer' | 'invisalign' | 'whitening' | 'implant'>('all');
  const [activeModalItem, setActiveModalItem] = useState<SmileGalleryItem | null>(null);

  const filteredList = SMILE_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <section id="bo-suu-tap" className="py-20 bg-gradient-to-b from-white via-[#F9FAF9] to-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              <span>Bộ Sưu Tập Nụ Cười Thực Tế</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Hình Ảnh Nụ Cười Rạng Rỡ Của Khách Hàng
            </h2>
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              Chiêm ngưỡng các kết quả điều trị với nụ cười trắng sáng tự nhiên, viền nướu khỏe mạnh và
              khớp cắn chuẩn sinh học từ khách hàng thực tế tại Aura Dental.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0">
            {[
              { id: 'all', label: 'Tất Cả' },
              { id: 'veneer', label: 'Dán Sứ Veneer' },
              { id: 'invisalign', label: 'Niềng Invisalign' },
              { id: 'whitening', label: 'Tẩy Trắng Răng' },
              { id: 'implant', label: 'Trồng Implant' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Smile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Visual Smile Hero Portrait Illustration */}
                <div className={`relative h-64 bg-gradient-to-br ${item.accentColor} p-4 flex flex-col justify-between overflow-hidden cursor-pointer`} onClick={() => setActiveModalItem(item)}>
                  <div className="flex justify-between items-center z-10">
                    <span className="text-[11px] font-semibold text-slate-800 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
                      {item.profession}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-teal-800 bg-teal-50/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-teal-200">
                      {item.treatmentTime}
                    </span>
                  </div>

                  {/* Centered Smiling Face & White Teeth SVG representation */}
                  <div className="relative my-auto flex items-center justify-center">
                    <svg viewBox="0 0 280 180" className="w-56 h-36 drop-shadow-md">
                      <defs>
                        <radialGradient id={`glow-${item.id}`} cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0" />
                        </radialGradient>
                      </defs>

                      {/* Face contour lower third */}
                      <path
                        d="M30 40 C30 140 80 170 140 170 C200 170 250 140 250 40 Z"
                        fill={item.skinTone}
                        stroke="#FBCFE8"
                        strokeWidth="0.8"
                      />

                      {/* Cheeks blush */}
                      <circle cx="65" cy="80" r="20" fill="#FDA4AF" opacity="0.45" />
                      <circle cx="215" cy="80" r="20" fill="#FDA4AF" opacity="0.45" />

                      {/* Joyful smile lines */}
                      <path d="M72 70 Q78 85 84 95" fill="none" stroke="#DE9B75" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M208 70 Q202 85 196 95" fill="none" stroke="#DE9B75" strokeWidth="1.5" strokeLinecap="round" />

                      {/* Outer Lips */}
                      <path
                        d="M85 86 Q140 134 195 86 Q140 102 85 86 Z"
                        fill={item.lipColor}
                      />

                      {/* Mouth Interior Dark Shadow */}
                      <path
                        d="M92 90 Q140 128 188 90 Q140 102 92 90 Z"
                        fill="#881337"
                      />

                      {/* Gleaming White Healthy Teeth Arch */}
                      <path
                        d="M94 91 Q140 105 186 91 L183 103 Q140 119 97 103 Z"
                        fill="#FFFFFF"
                        stroke="#CBD5E1"
                        strokeWidth="0.8"
                      />

                      {/* Individual White Enamel Teeth with Translucency */}
                      {/* Central Incisors */}
                      <path d="M134 92 L134 110 Q140 111 140 93 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.6" />
                      <path d="M140 93 Q140 111 146 110 L146 92 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.6" />
                      {/* Lateral Incisors */}
                      <path d="M126 92 L126 107 Q134 108 134 92 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.6" />
                      <path d="M146 92 Q146 108 154 107 L154 92 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.6" />
                      {/* Canines */}
                      <path d="M117 92 L117 104 Q126 106 126 92 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.6" />
                      <path d="M154 92 Q154 106 163 104 L163 92 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.6" />
                      {/* Premolars */}
                      <path d="M107 92 L107 100 Q117 103 117 92 Z" fill="#E2E8F0" opacity="0.9" />
                      <path d="M163 92 Q163 103 173 100 L173 92 Z" fill="#E2E8F0" opacity="0.9" />

                      {/* Sparkle Highlight on tooth */}
                      <g transform="translate(145, 96)">
                        <path d="M0 -5 L1.2 -1.2 L5 0 L1.2 1.2 L0 5 L-1.2 1.2 L-5 0 L-1.2 -1.2 Z" fill="#FFFFFF" />
                        <circle cx="0" cy="0" r="1.2" fill="#5EEAD4" />
                      </g>

                      {/* Lower Lip gloss */}
                      <path
                        d="M88 94 Q140 144 192 94 Q140 126 88 94 Z"
                        fill={item.lipColor}
                      />
                      <path d="M115 116 Q140 126 165 116" fill="none" stroke="#FECDD3" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                    </svg>
                  </div>

                  {/* Shade Transition Pill */}
                  <div className="flex items-center justify-between text-xs text-slate-700 bg-white/95 backdrop-blur-sm p-2 rounded-xl border border-slate-200 z-10">
                    <span className="text-[11px] text-slate-500">Màu ban đầu: <b className="text-slate-800">{item.shadeBefore}</b></span>
                    <span className="text-[11px] text-teal-800 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-teal-600" />
                      {item.shadeAfter}
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-teal-800 font-medium mt-0.5">{item.service}</p>
                    </div>
                    <div className="flex text-amber-400 shrink-0">
                      {Array.from({ length: item.satisfaction }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 italic leading-relaxed bg-[#FAFAF8] p-3 rounded-xl border border-slate-100">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalItem(item)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-500" />
                  <span>Xem Chi Tiết</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="py-2 px-3 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-xs transition-colors flex items-center gap-1"
                >
                  <span>Đặt Khám</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Full Zoom In Smile Analysis */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Hồ Sơ Nụ Cười: {activeModalItem.name}
                  </h3>
                  <p className="text-xs text-slate-500">{activeModalItem.service}</p>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-4 text-xs">
                {/* Visual Banner */}
                <div className={`p-4 rounded-xl bg-gradient-to-br ${activeModalItem.accentColor} text-center`}>
                  <div className="w-20 h-20 rounded-full bg-white mx-auto shadow-md flex items-center justify-center text-teal-600">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <div className="mt-2 font-display text-sm font-bold text-slate-800">
                    Hàm Răng Trắng Sáng & Tự Nhiên
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Được thiết kế tỉ lệ vàng DSD cá nhân hóa theo đường cười khuôn mặt.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl">
                  <div>
                    <span className="text-slate-400 block">Tình trạng ban đầu:</span>
                    <span className="font-semibold text-slate-800">{activeModalItem.shadeBefore}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Kết quả đạt được:</span>
                    <span className="font-semibold text-teal-700">{activeModalItem.shadeAfter}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Thời gian thực hiện:</span>
                    <span className="font-semibold text-slate-800">{activeModalItem.treatmentTime}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Mức độ hài lòng:</span>
                    <span className="font-semibold text-amber-600">5.0 / 5.0 Tuyệt đối</span>
                  </div>
                </div>

                <div className="p-3 bg-teal-50/70 border border-teal-100 rounded-xl text-teal-900 leading-relaxed italic">
                  "{activeModalItem.quote}"
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(null)}
                    className="flex-1 py-2.5 text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-xl font-medium"
                  >
                    Đóng
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModalItem(null);
                      onOpenBooking();
                    }}
                    className="flex-1 py-2.5 text-white bg-teal-600 hover:bg-teal-700 rounded-xl font-semibold shadow-sm"
                  >
                    Đặt Lịch Tư Vấn Nụ Cười
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
