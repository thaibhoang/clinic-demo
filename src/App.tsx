/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SmileGallerySection } from './components/SmileGallerySection';
import { PriceListSection } from './components/PriceListSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { DoctorsSection } from './components/DoctorsSection';
import { FacilityTechSection } from './components/FacilityTechSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MyAppointmentsModal } from './components/MyAppointmentsModal';
import { getStoredAppointments, AppointmentBooking } from './utils/appointmentStorage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceIdForBooking, setSelectedServiceIdForBooking] = useState<string | undefined>(undefined);
  const [isMyAppointmentsOpen, setIsMyAppointmentsOpen] = useState(false);
  const [appointments, setAppointments] = useState<AppointmentBooking[]>([]);

  const refreshAppointments = () => {
    setAppointments(getStoredAppointments());
  };

  useEffect(() => {
    refreshAppointments();
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceIdForBooking(serviceId);
    setIsBookingOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeAppointmentsCount = appointments.filter((a) => a.status !== 'cancelled').length;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-slate-800 antialiased font-sans">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenMyAppointments={() => setIsMyAppointmentsOpen(true)}
        appointmentCount={activeAppointmentsCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Quick Booking Widget & KPI strip */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onScrollToPrice={() => handleScrollToSection('bang-gia')}
          onScrollToServices={() => handleScrollToSection('dich-vu')}
        />

        {/* Services Showcase & Treatment Protocols */}
        <ServicesSection
          onSelectServiceToBook={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Real Client Smile Showcase Wall */}
        <SmileGallerySection
          onOpenBooking={handleOpenBooking}
        />

        {/* Transparent Price List & 0% Installment Planner */}
        <PriceListSection
          onSelectServiceToBook={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Real Patient Testimonials & Interactive Before/After Smile Slider */}
        <TestimonialsSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Specialist Doctor Team */}
        <DoctorsSection
          onSelectDoctorToBook={() => handleOpenBooking()}
        />

        {/* Facilities & European Sterilization Standards */}
        <FacilityTechSection />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Online Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceIdForBooking}
        onBookingSuccess={() => {
          refreshAppointments();
        }}
      />

      {/* My Appointments Drawer / Management Modal */}
      <MyAppointmentsModal
        isOpen={isMyAppointmentsOpen}
        onClose={() => setIsMyAppointmentsOpen(false)}
        appointments={appointments}
        onRefresh={refreshAppointments}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
