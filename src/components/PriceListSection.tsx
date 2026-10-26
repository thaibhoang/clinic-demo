import React, { useState, useMemo } from 'react';
import { PRICE_LIST, PriceItem } from '../data/dentalData';
import { Search, Calculator, Check, ArrowRight, ShieldCheck, CreditCard, Sparkles, HelpCircle } from 'lucide-react';

interface PriceListSectionProps {
  onSelectServiceToBook: (serviceId?: string) => void;
}

export const PriceListSection: React.FC<PriceListSectionProps> = ({ onSelectServiceToBook }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Cost calculator state
  const [calcServiceId, setCalcServiceId] = useState<string>('p-veneer-emax');
  const [calcQuantity, setCalcQuantity] = useState<number>(8); // e.g. 8 veneers
  const [installmentMonths, setInstallmentMonths] = useState<6 | 12>(12);
  const [copiedQuote, setCopiedQuote] = useState(false);

  const categories = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'cosmetic', label: 'Răng Sứ & Thẩm Mỹ' },
    { id: 'orthodontics', label: 'Niềng Răng & Chỉnh Nha' },
    { id: 'implant', label: 'Trồng Răng Implant' },
    { id: 'general', label: 'Điều Trị & Tổng Quát' },
  ];

  const filteredPrices = useMemo(() => {
    return PRICE_LIST.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.warranty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.note && item.note.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  // Calculator computations
  const currentCalcItem = PRICE_LIST.find((i) => i.id === calcServiceId) || PRICE_LIST[4];
  const isPerUnit = currentCalcItem.unit === 'Răng' || currentCalcItem.unit === 'Trụ';
  const totalAmount = currentCalcItem.salePrice * (isPerUnit ? calcQuantity : 1);
  const upfrontDiscount = Math.round(totalAmount * 0.05); // 5% discount if paid upfront
  const payInFullPrice = totalAmount - upfrontDiscount;
  const monthlyInstallment = Math.round(totalAmount / installmentMonths);

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num) + ' đ';
  };

  const handleCopyQuote = () => {
    const text = `BẢNG DỰ TOÁN AURA DENTAL:\nDịch vụ: ${currentCalcItem.name}\nSố lượng: ${isPerUnit ? `${calcQuantity} ${currentCalcItem.unit}` : currentCalcItem.unit}\nTổng chi phí: ${formatVND(totalAmount)}\nTrả góp 0% (${installmentMonths} tháng): ${formatVND(monthlyInstallment)}/tháng\nBảo hành: ${currentCalcItem.warranty}\nHotline hỗ trợ: 1900 8888`;
    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  return (
    <section id="bang-gia" className="py-20 bg-[#F9F9F7] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
            <span>Cam Kết Không Chi Phí Ẩn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
            Bảng Giá Dịch Vụ Niêm Yết Minh Bạch 2026
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            100% dịch vụ tại Aura Dental đều được báo giá trọn gói bằng văn bản trước khi thực hiện.
            Cam kết không phát sinh bất kỳ khoản phụ phí nào trong suốt liệu trình.
          </p>
        </div>

        {/* Interactive Cost & 0% Installment Calculator Card */}
        <div className="mb-14 bg-white rounded-2xl border border-teal-200/80 p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" />
                <span>Công Cụ Dự Toán Chi Phí & Trả Góp 0% Lãi Suất</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Tính Nhanh Ngân Sách Điều Trị Của Bạn
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Lựa chọn dịch vụ, số lượng răng để xem mức chi phí trả góp hàng tháng siêu tiết kiệm.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-600">Kỳ hạn trả góp 0%:</span>
              <div className="flex p-1 bg-slate-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setInstallmentMonths(6)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    installmentMonths === 6
                      ? 'bg-white text-teal-800 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  6 Tháng
                </button>
                <button
                  type="button"
                  onClick={() => setInstallmentMonths(12)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    installmentMonths === 12
                      ? 'bg-white text-teal-800 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  12 Tháng (Khuyên chọn)
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Calculator Inputs */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Dịch vụ cần ước tính
                </label>
                <select
                  value={calcServiceId}
                  onChange={(e) => setCalcServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                >
                  {PRICE_LIST.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name} - {formatVND(item.salePrice)} / {item.unit}
                    </option>
                  ))}
                </select>
              </div>

              {isPerUnit && (
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Số lượng ({currentCalcItem.unit}):
                    </label>
                    <span className="font-mono text-sm font-bold text-teal-700">
                      {calcQuantity} {currentCalcItem.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={currentCalcItem.unit === 'Trụ' ? 8 : 20}
                    value={calcQuantity}
                    onChange={(e) => setCalcQuantity(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>1 {currentCalcItem.unit}</span>
                    <span>
                      {currentCalcItem.unit === 'Trụ' ? '4 trụ' : '8 răng (Nụ cười tiêu chuẩn)'}
                    </span>
                    <span>{currentCalcItem.unit === 'Trụ' ? '8 trụ' : '16-20 răng (Toàn hàm)'}</span>
                  </div>
                </div>
              )}

              <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1 text-slate-600">
                <div className="flex items-center gap-1.5 font-medium text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Chế độ bảo hành: {currentCalcItem.warranty}</span>
                </div>
                {currentCalcItem.note && (
                  <p className="text-teal-800 italic">* {currentCalcItem.note}</p>
                )}
              </div>
            </div>

            {/* Calculator Result Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-2xl p-6 shadow-md space-y-4">
              <div>
                <span className="text-[11px] text-teal-200 uppercase tracking-wider font-semibold">
                  Ước Tính Trả Góp 0% Lãi Suất
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-display tracking-tight text-white tabular-nums">
                    {formatVND(monthlyInstallment)}
                  </span>
                  <span className="text-xs text-teal-200">/ tháng ({installmentMonths} tháng)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-teal-800/80 space-y-1.5 text-xs text-teal-100">
                <div className="flex justify-between">
                  <span>Tổng chi phí niêm yết:</span>
                  <span className="font-mono text-white font-semibold">{formatVND(totalAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ưu đãi nếu thanh toán 1 lần:</span>
                  <span className="font-mono text-emerald-300 font-semibold">
                    - {formatVND(upfrontDiscount)} (5%)
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-teal-300 pt-1">
                  <span>Thủ tục trả góp:</span>
                  <span>Chỉ cần CCCD + Thẻ tín dụng</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onSelectServiceToBook()}
                  className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-900 bg-teal-300 hover:bg-teal-200 rounded-xl transition-colors text-center"
                >
                  Đặt Lịch Với Mức Giá Này
                </button>
                <button
                  type="button"
                  onClick={handleCopyQuote}
                  className="py-2.5 px-3 text-xs font-medium text-teal-100 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 transition-colors"
                  title="Sao chép bảng tính"
                >
                  {copiedQuote ? 'Đã chép!' : 'Lưu dự toán'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Price Table Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search in Price Table */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tra cứu bảng giá..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider">
                  <th className="py-3.5 px-6">Dịch Vụ & Vật Liệu Chính Hãng</th>
                  <th className="py-3.5 px-4">Đơn Vị</th>
                  <th className="py-3.5 px-4 text-right">Giá Gốc</th>
                  <th className="py-3.5 px-4 text-right">Giá Ưu Đãi Niêm Yết</th>
                  <th className="py-3.5 px-4">Bảo Hành</th>
                  <th className="py-3.5 px-6 text-center">Thao Tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredPrices.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900 max-w-xs">
                      <div>{row.name}</div>
                      {row.note && (
                        <div className="text-[11px] text-teal-700 mt-0.5">{row.note}</div>
                      )}
                    </td>
                    <td className="py-4 px-4 text-slate-500 whitespace-nowrap">{row.unit}</td>
                    <td className="py-4 px-4 text-right font-mono text-slate-400 line-through whitespace-nowrap">
                      {formatVND(row.originalPrice)}
                    </td>
                    <td className="py-4 px-4 text-right font-mono font-bold text-teal-700 whitespace-nowrap">
                      {formatVND(row.salePrice)}
                    </td>
                    <td className="py-4 px-4 text-slate-600 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 font-medium text-slate-800">
                        <Check className="w-3 h-3 text-teal-600" />
                        {row.warranty}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center whitespace-nowrap">
                      <button
                        onClick={() => onSelectServiceToBook()}
                        className="px-3 py-1.5 text-xs font-semibold text-teal-700 hover:text-white bg-teal-50 hover:bg-teal-600 border border-teal-200 hover:border-teal-600 rounded-lg transition-all"
                      >
                        Đặt khám
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50/70 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>* Mọi chi phí đều được in trên hóa đơn VAT và bảo hành điện tử chính hãng.</span>
            <span className="font-medium text-slate-700">
              Có thắc mắc về chi phí? Hotline: 1900 8888
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
