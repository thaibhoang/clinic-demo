import React, { useState } from 'react';
import { TESTIMONIALS, BEFORE_AFTER_CASES, Testimonial } from '../data/dentalData';
import { Star, CheckCircle, Quote, MessageSquarePlus, ChevronRight, X, ArrowLeftRight } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [filterService, setFilterService] = useState('all');
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);

  // Review submission modal
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewAge, setNewReviewAge] = useState('29');
  const [newReviewOccupation, setNewReviewOccupation] = useState('');
  const [newReviewService, setNewReviewService] = useState('Dán sứ Veneer Emax');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const filteredReviews = reviews.filter((rev) => {
    if (filterService === 'all') return true;
    return rev.serviceId === filterService;
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) return;

    const newRev: Testimonial = {
      id: `rev-${Date.now()}`,
      name: newReviewName.trim(),
      age: Number(newReviewAge) || 30,
      occupation: newReviewOccupation.trim() || 'Khách hàng thân thiết',
      serviceId: 'custom',
      serviceName: newReviewService,
      rating: newReviewRating,
      date: 'Hôm nay',
      comment: newReviewComment.trim(),
      beforeAfterSummary: 'Trải nghiệm dịch vụ nha khoa chuyên nghiệp, tận tâm.',
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsReviewModalOpen(false);
      setNewReviewName('');
      setNewReviewComment('');
    }, 1500);
  };

  return (
    <section id="danh-gia" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              <span>Trải Nghiệm Khách Hàng Thực Tế</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Hơn 15.000 Nụ Cười Đã Tỏa Sáng Cùng Aura Dental
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Mỗi chia sẻ là một minh chứng sống động cho chất lượng điều trị không đau, sự tận tâm của
              y bác sĩ và hiệu quả thẩm mỹ vượt mong đợi.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="text-2xl font-bold font-display text-slate-900">4.9</div>
              <div className="space-y-0.5">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">2.450+ Đánh giá 5 sao</div>
              </div>
            </div>

            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="px-4 py-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4 text-teal-600" />
              <span>Gửi Đánh Giá Của Bạn</span>
            </button>
          </div>
        </div>

        {/* Interactive Before & After Smile Comparison Showcase */}
        <div className="mb-16 bg-[#F8F9F8] rounded-2xl border border-slate-200/90 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                Kết Quả Lâm Sàng Trước & Sau Điều Trị
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
                {activeCase.patient} — {activeCase.treatment}
              </h3>
            </div>

            {/* Case switcher tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {BEFORE_AFTER_CASES.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    activeCaseIndex === idx
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  Ca 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Before/After Visual Canvas */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 select-none shadow-inner h-80 sm:h-96">
                {/* AFTER container (Full width background) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 via-white to-emerald-50/50 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold shadow-sm">
                      SAU ĐIỀU TRỊ (HOÀN THIỆN)
                    </span>
                    <span className="text-xs font-medium text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded">
                      Thời gian: {activeCase.duration}
                    </span>
                  </div>

                  {/* Stylized Tooth Smile Representation Vector */}
                  <div className="text-center my-auto">
                    <div className="w-24 h-24 mx-auto rounded-full bg-emerald-100/70 border-2 border-emerald-300 flex items-center justify-center text-emerald-700 shadow-sm">
                      <svg
                        className="w-14 h-14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2C8 2 5 4.5 5 8c0 3 1.2 5.5 2 8 .8 2.5 2 6 5 6s4.2-3.5 5-6c.8-2.5 2-5 2-8 0-3.5-3-6-7-6z" />
                        <path d="M8 12c1.5 2.5 6.5 2.5 8 0" />
                        <path d="M12 2v20" opacity="0.2" />
                      </svg>
                    </div>
                    <div className="mt-3 font-display font-bold text-slate-800 text-base">
                      Nụ Cười Trắng Sáng Tự Nhiên
                    </div>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto mt-1">
                      {activeCase.resultState}
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 italic">
                    Ghi chú lâm sàng: {activeCase.notes}
                  </div>
                </div>

                {/* BEFORE container (Clipped by sliderPos) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-tr from-stone-200 via-stone-100 to-amber-50/40 border-r-2 border-white shadow-xl transition-all"
                  style={{ width: `${sliderPos}%` }}
                >
                  <div
                    className="absolute inset-y-0 left-0 p-6 flex flex-col justify-between"
                    style={{ width: '100%', minWidth: '400px' }}
                  >
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 rounded-md bg-stone-700 text-white text-xs font-bold shadow-sm">
                        TRƯỚC ĐIỀU TRỊ
                      </span>
                    </div>

                    <div className="text-center my-auto">
                      <div className="w-24 h-24 mx-auto rounded-full bg-stone-200 border-2 border-stone-300 flex items-center justify-center text-stone-500">
                        <svg
                          className="w-14 h-14 opacity-70"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2C8 2 5 4.5 5 8c0 3 1.2 5.5 2 8 .8 2.5 2 6 5 6s4.2-3.5 5-6c.8-2.5 2-5 2-8 0-3.5-3-6-7-6z" />
                          <path d="M9 14s1-1.5 3-1.5 3 1.5 3 1.5" />
                        </svg>
                      </div>
                      <div className="mt-3 font-display font-semibold text-stone-700 text-base">
                        Tình Trạng Ban Đầu
                      </div>
                      <p className="text-xs text-stone-600 max-w-sm mx-auto mt-1">
                        {activeCase.initialState}
                      </p>
                    </div>

                    <div className="text-xs text-stone-500 italic">Hồ sơ bệnh án lưu trữ</div>
                  </div>
                </div>

                {/* Draggable Divider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center cursor-ew-resize pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-7 h-7 rounded-full bg-white shadow-lg border border-slate-300 flex items-center justify-center text-slate-700">
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Range Input for accessibility and smooth touch interaction */}
                <input
                  type="range"
                  min={10}
                  max={90}
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                  aria-label="Kéo để so sánh trước và sau"
                />
              </div>

              {/* Slider instruction */}
              <div className="mt-2 text-center text-xs text-slate-400">
                ↔ Kéo thanh trượt để so sánh tình trạng trước & sau điều trị
              </div>
            </div>

            {/* Case Details & Doctor Commentary */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Chẩn Đoán Lâm Sàng
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900 block mb-1">Ban đầu:</span>
                  {activeCase.initialState}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                  Kết Quả Đạt Được
                </div>
                <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200/80 text-xs text-slate-700 leading-relaxed">
                  <span className="font-semibold text-teal-900 block mb-1">Hoàn thiện:</span>
                  {activeCase.resultState}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-sm transition-colors text-center"
                >
                  Đặt Lịch Thăm Khám Nụ Cười Của Bạn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          <button
            onClick={() => setFilterService('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
              filterService === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Tất Cả Đánh Giá ({reviews.length})
          </button>
          <button
            onClick={() => setFilterService('invisalign')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
              filterService === 'invisalign'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Niềng Răng Invisalign
          </button>
          <button
            onClick={() => setFilterService('veneer')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
              filterService === 'veneer'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Dán Sứ Veneer
          </button>
          <button
            onClick={() => setFilterService('implant')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
              filterService === 'implant'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Trồng Răng Implant
          </button>
          <button
            onClick={() => setFilterService('piezotome')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
              filterService === 'piezotome'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Nhổ Răng Không Đau
          </button>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFAF8] rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all hover:shadow-sm"
            >
              <div className="space-y-3">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{item.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.comment}"
                </p>

                {item.beforeAfterSummary && (
                  <div className="p-2.5 rounded-lg bg-teal-50/60 border border-teal-100/70 text-[11px] text-teal-900">
                    <span className="font-semibold">Hiệu quả:</span> {item.beforeAfterSummary}
                  </div>
                )}
              </div>

              {/* Author attribution with smile avatar */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    {item.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-900">{item.name}</span>
                      <span className="text-[11px] text-slate-400">({item.age}t)</span>
                      {item.verified && (
                        <span title="Khách hàng đã điều trị">
                          <CheckCircle className="w-3.5 h-3.5 text-teal-600 inline" />
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500">{item.occupation}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-teal-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {item.serviceName.split(' ')[0]} {item.serviceName.split(' ')[1]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Gửi Đánh Giá Mới */}
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Chia Sẻ Trải Nghiệm Của Bạn
                  </h3>
                  <p className="text-xs text-slate-500">
                    Cảm nhận của bạn giúp Aura Dental không ngừng hoàn thiện chất lượng.
                  </p>
                </div>
                <button
                  onClick={() => setIsReviewModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitSuccess ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Cảm Ơn Đánh Giá Của Bạn!</h4>
                  <p className="text-xs text-slate-500">
                    Nhận xét của bạn đã được hiển thị trên hệ thống.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="py-4 space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Họ và tên của bạn *
                      </label>
                      <input
                        type="text"
                        required
                        value={newReviewName}
                        onChange={(e) => setNewReviewName(e.target.value)}
                        placeholder="VD: Thu Hằng"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nghề nghiệp
                      </label>
                      <input
                        type="text"
                        value={newReviewOccupation}
                        onChange={(e) => setNewReviewOccupation(e.target.value)}
                        placeholder="VD: Giáo viên / Nhân viên văn phòng"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Dịch vụ đã trải nghiệm
                      </label>
                      <select
                        value={newReviewService}
                        onChange={(e) => setNewReviewService(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                      >
                        <option value="Dán sứ Veneer Emax">Dán sứ Veneer Emax</option>
                        <option value="Niềng răng Invisalign">Niềng răng Invisalign</option>
                        <option value="Cấy ghép Implant Straumann">Cấy ghép Implant Straumann</option>
                        <option value="Tẩy trắng Laser Philips Zoom">Tẩy trắng Laser Philips Zoom</option>
                        <option value="Nhổ răng khôn Piezotome">Nhổ răng khôn Piezotome</option>
                        <option value="Lấy cao răng & Chăm sóc nướu">Lấy cao răng & Chăm sóc nướu</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mức độ hài lòng ({newReviewRating} sao)
                      </label>
                      <div className="flex items-center gap-1.5 pt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setNewReviewRating(star)}
                            className="p-1 focus:outline-none"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                star <= newReviewRating
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-slate-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Cảm nhận chi tiết về dịch vụ & bác sĩ *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      placeholder="Bác sĩ điều trị có êm ái không? Bạn hài lòng nhất điểm nào tại phòng khám..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsReviewModalOpen(false)}
                      className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
                    >
                      Đăng Nhận Xét
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
