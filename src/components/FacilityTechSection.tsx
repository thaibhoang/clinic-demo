import React from 'react';
import { ShieldCheck, Cpu, Sparkles, HeartPulse, Check, Eye } from 'lucide-react';

export const FacilityTechSection: React.FC = () => {
  const highlights = [
    {
      icon: Cpu,
      title: 'Máy Quét Hàm Kỹ Thuật Số iTero 5D',
      origin: 'Align Technology (Hoa Kỳ)',
      desc: 'Quét toàn bộ cung hàm chỉ trong 60 giây với độ chính xác micromet. Mô phỏng ngay kết quả nụ cười sau niềng và phát hiện sớm sâu răng kẽ bằng công nghệ NIRI không dùng tia X.',
    },
    {
      icon: Eye,
      title: 'Chụp Phim CT Cone Beam 3D Liều Thấp',
      origin: 'Vatech (Hàn Quốc / Hoa Kỳ)',
      desc: 'Tái tạo cấu trúc xương hàm, xoang hàm và dây thần kinh 3 chiều chân thực. Liều bức xạ giảm đến 80% so với máy CT thông thường, an toàn tuyệt đối cho người lớn và trẻ nhỏ.',
    },
    {
      icon: ShieldCheck,
      title: 'Hệ Thống Vô Trùng Khép Kín Chuẩn Class B',
      origin: 'Melag (CHLB Đức)',
      desc: 'Quy trình khử khuẩn 1 chiều 6 bước nghiêm ngặt. Mỗi khách hàng sử dụng một bộ tay khoan và bộ dụng cụ riêng biệt được đóng gói hút chân không, dán tem chỉ thị màu sinh học.',
    },
    {
      icon: HeartPulse,
      title: 'Ghế Nha KaVo Primus 1058 Life Tiện Nghi',
      origin: 'KaVo Dental (CHLB Đức)',
      desc: 'Thiết kế công thái học đệm da êm ái nâng đỡ cột sống tối ưu. Tích hợp hệ thống khử khuẩn đường ống tự động và màn hình HD trực tiếp trước mắt để theo dõi ca khám.',
    },
  ];

  return (
    <section id="co-so" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              <span>Trang Thiết Bị & Chuẩn Mực Vô Trùng</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Không Gian Thư Giãn, <br />
              Công Nghệ Số Hóa 100%
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Tại Aura Dental, chúng tôi xóa bỏ hoàn toàn nỗi sợ mùi cồn hay tiếng kim tiêm quen thuộc.
              Mọi không gian phòng khám được thiết kế ấm áp như phòng khách gia đình với hương tinh dầu
              organic dịu nhẹ, âm nhạc thư giãn và hệ thống trang thiết bị số hóa chính xác tuyệt đối.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Cam kết 1 Khách hàng - 1 Phòng điều trị riêng</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Đảm bảo sự riêng tư, vô trùng và trải nghiệm êm ái tối đa.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Minh bạch 100% tem xuất xứ vật liệu</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Khách hàng được trực tiếp bóc tem niêm phong phôi sứ, trụ Implant trước mặt bác sĩ.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Technology Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200/90 bg-[#FBFBFA] hover:border-teal-600/40 transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100/80 text-teal-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <div className="text-[11px] font-semibold text-teal-700 mt-0.5">{item.origin}</div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
