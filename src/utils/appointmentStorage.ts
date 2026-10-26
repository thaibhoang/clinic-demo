export interface AppointmentBooking {
  id: string; // e.g. "AURA-2610-7491"
  createdAt: string;
  serviceId: string;
  serviceName: string;
  doctorId: string;
  doctorName: string;
  locationId: string;
  locationName: string;
  locationAddress: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // "09:30"
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  notes?: string;
  status: 'confirmed' | 'rescheduled' | 'cancelled';
}

const STORAGE_KEY = 'aura_dental_appointments_v1';

export function getStoredAppointments(): AppointmentBooking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveAppointment(booking: AppointmentBooking): void {
  try {
    const existing = getStoredAppointments();
    const updated = [booking, ...existing.filter((b) => b.id !== booking.id)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save appointment in localStorage', e);
  }
}

export function cancelAppointment(bookingId: string): void {
  try {
    const existing = getStoredAppointments();
    const updated = existing.map((b) =>
      b.id === bookingId ? { ...b, status: 'cancelled' as const } : b
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to cancel appointment', e);
  }
}

export function generateCalendarIcs(booking: AppointmentBooking): void {
  // Convert date & timeSlot into ICS format
  // Format: 20261026T093000
  const cleanDate = booking.date.replace(/-/g, '');
  const cleanTime = booking.timeSlot.replace(':', '') + '00';
  const startStamp = `${cleanDate}T${cleanTime}`;

  // Add 1 hour duration
  const [h, m] = booking.timeSlot.split(':').map(Number);
  const endH = String((h + 1) % 24).padStart(2, '0');
  const endStamp = `${cleanDate}T${endH}${String(m).padStart(2, '0')}00`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Aura Dental Studio//VN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${booking.id}@auradental.vn`,
    `SUMMARY:Lịch khám tại Aura Dental: ${booking.serviceName}`,
    `DESCRIPTION:Mã lịch hẹn: ${booking.id}\\nBác sĩ: ${booking.doctorName}\\nKhách hàng: ${booking.patientName}\\nĐiện thoại: ${booking.patientPhone}`,
    `LOCATION:${booking.locationAddress}`,
    `DTSTART:${startStamp}`,
    `DTEND:${endStamp}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `lich-kham-${booking.id}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
