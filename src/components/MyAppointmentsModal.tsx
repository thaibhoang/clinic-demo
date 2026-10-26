import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, Download, Trash2, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { AppointmentBooking, cancelAppointment, generateCalendarIcs } from '../utils/appointmentStorage';

interface MyAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: AppointmentBooking[];
  onRefresh: () => void;
  onOpenBooking: () => void;
}

export const MyAppointmentsModal: React.FC<MyAppointmentsModalProps> = ({
  isOpen,
  onClose,
  appointments,
  onRefresh,
  onOpenBooking,
}) => {
  const [confirmCancelId, setConfirmCancelId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCancel = (id: string) => {
    cancelAppointment(id);
    setConfirmCancelId(null);
    onRefresh();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl max-w-xl w-full my-8 overflow-hidden relative">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs font-bold font-display">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Lịch Hẹn Khám Của Bạn
              </h3>
              <p className="text-xs text-slate-500">
                {appointments.length} lịch hẹn được ghi nhận trên thiết bị
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          {appointments.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6" />
              </div>
              <p className="text-sm text-slate-600 font-medium">
                Bạn chưa có lịch hẹn khám nào tại Aura Dental.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="mt-2 px-5 py-2.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Đặt lịch khám miễn phí ngay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            appointments.map((item) => {
              const isCancelled = item.status === 'cancelled';
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border transition-all space-y-3 ${
                    isCancelled
                      ? 'bg-slate-50/70 border-slate-200 opacity-60'
                      : 'bg-[#FAFAF8] border-teal-200/90 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      Mã: {item.id}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        isCancelled
                          ? 'bg-rose-50 text-rose-600'
                          : 'bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      {isCancelled ? 'Đã Hủy Lịch' : 'Đã Xác Nhận'}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="text-sm font-bold text-slate-900">{item.serviceName}</div>
                    <div className="text-slate-600">
                      Bác sĩ: <span className="font-medium text-slate-800">{item.doctorName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-teal-800 font-mono font-medium pt-1">
                      <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>
                        {item.timeSlot} · Ngày {item.date}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-500 pt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item.locationAddress}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  {!isCancelled && (
                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => generateCalendarIcs(item)}
                        className="text-xs text-teal-700 hover:text-teal-900 font-medium flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Tải file .ics</span>
                      </button>

                      {confirmCancelId === item.id ? (
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-rose-600 font-medium">Hủy lịch này?</span>
                          <button
                            type="button"
                            onClick={() => handleCancel(item.id)}
                            className="px-2 py-1 text-[11px] font-bold text-white bg-rose-600 rounded"
                          >
                            Đồng ý
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmCancelId(null)}
                            className="px-2 py-1 text-[11px] text-slate-600 bg-slate-200 rounded"
                          >
                            Không
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setConfirmCancelId(item.id)}
                          className="text-xs text-slate-400 hover:text-rose-600 transition-colors flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Hủy lịch</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Hỗ trợ khẩn cấp: 1900 8888</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
