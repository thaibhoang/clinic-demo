import React from 'react';
import { DOCTORS } from '../data/dentalData';
import { Award, GraduationCap, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DoctorThaiPortrait, DoctorChiPortrait, DoctorVuPortrait } from './DentalPortraits';

interface DoctorsSectionProps {
  onSelectDoctorToBook: (doctorId: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctorToBook }) => {
  const getDoctorPortrait = (id: string) => {
    switch (id) {
      case 'dr-thai':
        return <DoctorThaiPortrait className="w-full h-full object-cover" />;
      case 'dr-mai':
        return <DoctorChiPortrait className="w-full h-full object-cover" />;
      case 'dr-vu':
        return <DoctorVuPortrait className="w-full h-full object-cover" />;
      default:
        return <DoctorThaiPortrait className="w-full h-full object-cover" />;
    }
  };

  return (
    <section id="bac-si" className="py-20 bg-[#F9F9F7] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
            <span>Đội Ngũ Bác Sĩ Chuyên Khoa I</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
            Chuyên Gia Hàng Đầu Tốt Nghiệp ĐH Y Dược
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Mỗi khách hàng tại Aura Dental đều được trực tiếp Bác sĩ Chuyên khoa thăm khám, hội chẩn
            đa chuyên khoa và theo sát 1:1 trong suốt quá trình điều trị.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-teal-900/5 transition-all group"
            >
              <div>
                {/* Doctor Visual Profile Photo Container */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  {getDoctorPortrait(doc.id)}

                  {/* Trust Badge overlay */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200 shadow-sm flex items-center gap-1.5 text-[11px] font-semibold text-teal-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>{doc.experience}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-medium text-white">
                    Trực tiếp điều trị 1:1
                  </div>
                </div>

                {/* Doctor Bio Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700 mt-0.5">{doc.role}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{doc.bio}</p>

                  {/* Qualifications list */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Chứng Chỉ & Học Vị Quốc Tế
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {doc.degrees.map((deg, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{deg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectDoctorToBook(doc.id)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-800 hover:text-white bg-slate-50 hover:bg-teal-600 border border-slate-200 hover:border-teal-600 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-600 group-hover:text-white" />
                  <span>Đặt Lịch Với {doc.name.split(' ').slice(-2).join(' ')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
