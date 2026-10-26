import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle2, Download, AlertCircle, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES, DOCTORS, CLINIC_LOCATIONS, DentalService, Doctor } from '../data/dentalData';
import { AppointmentBooking, saveAppointment, generateCalendarIcs } from '../utils/appointmentStorage';
import { DoctorThaiPortrait, DoctorChiPortrait, DoctorVuPortrait } from './DentalPortraits';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  onBookingSuccess?: () => void;
}

const TIME_SLOTS = [
  '08:30', '09:15', '10:00', '10:45', '11:30',
  '13:30', '14:15', '15:00', '15:45', '16:30', '17:15', '18:00', '18:45', '19:15'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  onBookingSuccess,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || SERVICES[0].id);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('any');
  const [selectedLocationId, setSelectedLocationId] = useState<string>(CLINIC_LOCATIONS[0].id);
  
  // Date selection: default tomorrow
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('09:15');

  // Client info
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});

  // Created booking result
  const [createdBooking, setCreatedBooking] = useState<AppointmentBooking | null>(null);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const currentLocation = CLINIC_LOCATIONS.find((l) => l.id === selectedLocationId) || CLINIC_LOCATIONS[0];
  const currentDoctor = DOCTORS.find((d) => d.id === selectedDoctorId);

  // Generate next 10 days for selection
  const availableDates = Array.from({ length: 12 }).map((_, idx) => {
    const d = new Date();
    d.setDate(d.getDate() + idx);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const iso = `${yyyy}-${mm}-${dd}`;
    const dayName = idx === 0 ? 'Hôm nay' : idx === 1 ? 'Ngày mai' : `Thứ ${d.getDay() === 0 ? 'CN' : d.getDay() + 1}`;
    const displayDate = `${dd}/${mm}`;
    return { iso, dayName, displayDate };
  });

  const handleValidateStep4 = () => {
    const errors: { name?: string; phone?: string } = {};
    if (!fullName.trim()) errors.name = 'Vui lòng nhập họ và tên của bạn';
    const cleanPhone = phone.trim().replace(/\D/g, '');
    if (cleanPhone.length < 9 || cleanPhone.length > 11) {
      errors.phone = 'Vui lòng nhập số điện thoại hợp lệ (10 số)';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleConfirmBooking = () => {
    if (!handleValidateStep4()) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `AURA-${new Date().getDate()}${new Date().getMonth() + 1}-${randomSuffix}`;

    const newBooking: AppointmentBooking = {
      id: bookingId,
      createdAt: new Date().toISOString(),
      serviceId: currentService.id,
      serviceName: currentService.name,
      doctorId: selectedDoctorId,
      doctorName: currentDoctor ? currentDoctor.name : 'Bác sĩ chuyên khoa phụ trách theo ca',
      locationId: currentLocation.id,
      locationName: currentLocation.name,
      locationAddress: currentLocation.address,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      patientName: fullName.trim(),
      patientPhone: phone.trim(),
      patientEmail: email.trim() || 'Chưa cung cấp',
      notes: notes.trim() || 'Không có ghi chú thêm',
      status: 'confirmed',
    };

    saveAppointment(newBooking);
    setCreatedBooking(newBooking);
    setStep(5);
    if (onBookingSuccess) {
      onBookingSuccess();
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setCreatedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl max-w-2xl w-full my-8 overflow-hidden relative">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white text-xs font-bold font-display">
              A
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                {step === 5 ? 'Đặt Lịch Thành Công' : 'Đặt Lịch Khám Trực Tuyến'}
              </h3>
              <p className="text-xs text-slate-500">
                {step === 5
                  ? 'Mã lịch hẹn đã được lưu vào hệ thống'
                  : `Bước ${step} / 4: ${
                      step === 1
                        ? 'Chọn dịch vụ'
                        : step === 2
                        ? 'Chọn bác sĩ'
                        : step === 3
                        ? 'Thời gian & Cơ sở'
                        : 'Thông tin cá nhân'
                    }`}
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar (when not finished) */}
        {step < 5 && (
          <div className="grid grid-cols-4 h-1 bg-slate-100">
            <div className={`h-full ${step >= 1 ? 'bg-teal-600' : ''}`} />
            <div className={`h-full ${step >= 2 ? 'bg-teal-600' : ''}`} />
            <div className={`h-full ${step >= 3 ? 'bg-teal-600' : ''}`} />
            <div className={`h-full ${step >= 4 ? 'bg-teal-600' : ''}`} />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: CHỌN DỊCH VỤ */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">
                  Chọn dịch vụ bạn muốn thăm khám & điều trị:
                </h4>
                <p className="text-xs text-slate-500 mb-3">
                  Tất cả các dịch vụ đều được miễn phí chụp phim X-quang 3D và khám tổng quát ban đầu.
                </p>
              </div>

              <div className="space-y-2.5">
                {SERVICES.map((srv) => {
                  const isSelected = srv.id === selectedServiceId;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/60 ring-1 ring-teal-600/30'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                              {srv.categoryLabel}
                            </span>
                            <span className="text-sm font-bold text-slate-900">{srv.name}</span>
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-2">{srv.shortDesc}</p>
                          <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
                            <span>Thời gian: {srv.duration}</span>
                            <span>·</span>
                            <span>Bảo hành: {srv.warranty}</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-semibold text-teal-700 block font-mono">
                            {srv.priceFormatted}
                          </span>
                          <span className="text-[10px] text-slate-400">/{srv.unit}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: CHỌN BÁC SĨ */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">
                  Chọn bác sĩ chuyên môn bạn mong muốn:
                </h4>
                <p className="text-xs text-slate-500 mb-3">
                  100% đội ngũ là Bác sĩ Chuyên khoa I, Thạc sĩ tốt nghiệp ĐH Y Dược.
                </p>
              </div>

              {/* Option: Any available specialist */}
              <div
                onClick={() => setSelectedDoctorId('any')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  selectedDoctorId === 'any'
                    ? 'border-teal-600 bg-teal-50/60 ring-1 ring-teal-600/30'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Bác sĩ Chuyên khoa phù hợp nhất (Khuyên dùng)
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Phòng khám sẽ phân bổ bác sĩ trưởng khoa theo đúng chuyên môn dịch vụ của bạn.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-teal-700 px-2 py-1 bg-white border border-teal-200 rounded-lg">
                    Linh hoạt nhất
                  </span>
                </div>
              </div>

              {/* Specific Doctors */}
              <div className="space-y-3">
                {DOCTORS.map((doc) => {
                  const isSelected = selectedDoctorId === doc.id;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDoctorId(doc.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/60 ring-1 ring-teal-600/30'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-200">
                          {doc.id === 'dr-thai' && <DoctorThaiPortrait className="w-full h-full object-cover" />}
                          {doc.id === 'dr-mai' && <DoctorChiPortrait className="w-full h-full object-cover" />}
                          {doc.id === 'dr-vu' && <DoctorVuPortrait className="w-full h-full object-cover" />}
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-900">{doc.name}</span>
                            <span className="text-xs text-teal-700 font-medium">
                              {doc.experience}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600">{doc.role}</p>
                          <p className="text-[11px] text-slate-500 italic">
                            Chuyên sâu: {doc.specialty}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: CƠ SỞ & THỜI GIAN KHÁM */}
          {step === 3 && (
            <div className="space-y-5">
              {/* Location */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  1. Chọn chi nhánh phòng khám:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CLINIC_LOCATIONS.map((loc) => {
                    const isSelected = selectedLocationId === loc.id;
                    return (
                      <div
                        key={loc.id}
                        onClick={() => setSelectedLocationId(loc.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all text-xs ${
                          isSelected
                            ? 'border-teal-600 bg-teal-50/60 ring-1 ring-teal-600/30'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-slate-900">{loc.name}</div>
                        <p className="text-slate-500 mt-1 line-clamp-2">{loc.address}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Date Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  2. Chọn ngày khám:
                </label>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.iso;
                    return (
                      <button
                        key={item.iso}
                        type="button"
                        onClick={() => setSelectedDate(item.iso)}
                        className={`min-w-[76px] py-2 px-2.5 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'border-teal-600 bg-teal-600 text-white shadow-sm'
                            : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className={`text-[10px] font-medium ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                          {item.dayName}
                        </div>
                        <div className="text-sm font-bold font-mono mt-0.5">{item.displayDate}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  3. Chọn khung giờ khám:
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 px-2 rounded-lg text-xs font-medium font-mono text-center transition-all ${
                          isSelected
                            ? 'bg-teal-700 text-white shadow-sm'
                            : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  * Mỗi lượt khám tiêu chuẩn kéo dài 45 - 60 phút. Phòng khám mở cửa từ 8:00 đến 20:00.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: THÔNG TIN KHÁCH HÀNG */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-1">
                  Thông tin khách hàng:
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Aura Dental cam kết bảo mật tuyệt đối 100% hồ sơ bệnh án theo tiêu chuẩn Y tế.
                </p>
              </div>

              {/* Summary pill */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Dịch vụ:</span>
                  <span className="font-semibold text-slate-800">{currentService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Thời gian:</span>
                  <span className="font-mono font-medium text-teal-800">
                    {selectedTimeSlot} · Ngày {selectedDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Địa điểm:</span>
                  <span className="text-slate-800 truncate max-w-xs">{currentLocation.name}</span>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Họ và tên quý khách <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                    }}
                    placeholder="Ví dụ: Nguyễn Văn An"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                  />
                  {formErrors.name && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số điện thoại liên hệ <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                    }}
                    placeholder="Ví dụ: 0909 123 456"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors font-mono"
                  />
                  {formErrors.phone && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email nhận phiếu hẹn (tuỳ chọn)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mô tả tình trạng răng / Yêu cầu đặc biệt (tuỳ chọn)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ví dụ: Răng hàm dưới hay buốt khi uống nước lạnh, muốn được tư vấn dán sứ không mài..."
                    className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: ĐẶT LỊCH THÀNH CÔNG */}
          {step === 5 && createdBooking && (
            <div className="py-2 space-y-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900 font-display">
                  Đã Đặt Lịch Khám Thành Công!
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Cảm ơn quý khách <span className="font-semibold text-slate-900">{createdBooking.patientName}</span>. Nhân viên chăm sóc khách hàng Aura Dental sẽ liên hệ xác nhận trong vòng 15 phút.
                </p>
              </div>

              {/* Booking Ticket Card */}
              <div className="p-5 bg-gradient-to-br from-teal-50/50 to-slate-50 border border-teal-200/80 rounded-2xl text-left space-y-3 relative">
                <div className="flex items-center justify-between pb-3 border-b border-teal-200/60">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Mã Lịch Hẹn
                  </span>
                  <span className="font-mono text-base font-bold text-teal-800 bg-white px-2.5 py-1 rounded border border-teal-200">
                    {createdBooking.id}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Dịch vụ điều trị:</span>
                    <span className="font-semibold text-slate-800">{createdBooking.serviceName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Bác sĩ phụ trách:</span>
                    <span className="font-semibold text-slate-800">{createdBooking.doctorName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Thời gian hẹn:</span>
                    <span className="font-mono font-semibold text-teal-700">
                      {createdBooking.timeSlot} · {createdBooking.date}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Số điện thoại:</span>
                    <span className="font-mono font-semibold text-slate-800">{createdBooking.patientPhone}</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 border-t border-teal-200/40">
                  <span className="font-semibold text-slate-700">Địa chỉ:</span> {createdBooking.locationAddress}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => generateCalendarIcs(createdBooking)}
                  className="flex-1 py-3 px-4 text-xs font-semibold text-teal-800 bg-white hover:bg-teal-50 border border-teal-300 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-teal-600" />
                  <span>Tải Lịch Khám Vào Điện Thoại (.ics)</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-sm transition-all"
                >
                  Hoàn Tất & Đóng
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Controls (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s - 1) as any)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Quay lại</span>
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s + 1) as any)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
              >
                <span>Tiếp tục</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-md shadow-teal-600/30 flex items-center gap-2 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Xác Nhận Đặt Lịch Hẹn</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
