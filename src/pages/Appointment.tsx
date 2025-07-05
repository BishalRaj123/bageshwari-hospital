
import React from 'react';
import Header from '@/components/Header';
import AppointmentSection from '@/components/AppointmentSection';
import Footer from '@/components/Footer';

const Appointment = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-12">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Schedule your visit with our experienced medical professionals at
              your convenience.
            </p>
          </div>
        </div>
        <AppointmentSection />

        {/* Appointment Process */}
        <section className="section-padding bg-gradient-to-br from-emerald-50 to-teal-50 py-8 mb-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Book Online</h3>
                <img
                  src="online_booking.jpg"
                  alt="Online Booking"
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <p className="text-gray-600">
                  Fill out our simple online form to schedule your appointment.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Confirmation</h3>
                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Confirmation Call"
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <p className="text-gray-600">
                  Our team will contact you to confirm your appointment details.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Visit Hospital</h3>
                <img
                  src="/bageshwari-hospital/hero/hero3.jpg"
                  alt="Hospital Visit"
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <p className="text-gray-600">
                  Arrive at the scheduled time for your consultation or
                  treatment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;
