
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DoctorsSection from '@/components/DoctorsSection';
import AppointmentSection from '@/components/AppointmentSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { initScrollAnimations } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimations();
    
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <AppointmentSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
