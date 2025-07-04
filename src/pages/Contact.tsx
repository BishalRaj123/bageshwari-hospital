
import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Clock, MapPin, Phone, Mail, Car, Bus } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Emergency Hotline',
      details: ['+91 98765 43210', 'Available 24/7'],
      color: 'text-red-600'
    },
    {
      icon: Phone,
      title: 'General Enquiry',
      details: ['+91 98765 43211', 'Mon-Sun: 8:00 AM - 8:00 PM'],
      color: 'text-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: ['info@bageshwarihospital.com', 'Response within 24 hours'],
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Hospital Address',
      details: ['123 Medical Street', 'Healthcare City, State - 123456'],
      color: 'text-purple-600'
    }
  ];

  const departments = [
    { name: 'Reception & Information', phone: '+91 98765 43220', ext: 'Ext: 100' },
    { name: 'Emergency Department', phone: '+91 98765 43210', ext: '24/7' },
    { name: 'Appointment Booking', phone: '+91 98765 43221', ext: 'Ext: 102' },
    { name: 'Billing & Insurance', phone: '+91 98765 43222', ext: 'Ext: 103' },
    { name: 'Patient Relations', phone: '+91 98765 43223', ext: 'Ext: 104' },
    { name: 'Pharmacy', phone: '+91 98765 43224', ext: 'Ext: 105' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Bageshwari Hospital</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              We're here to help you with appointments, medical emergencies, and any healthcare questions you may have.
            </p>
          </div>
        </div>

        {/* Quick Contact Info */}
        <section className="section-padding bg-white py-8">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 ${info.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className={`${detailIndex === 0 ? 'font-medium' : 'text-sm'} text-gray-600`}>
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />

        {/* Department Contact Directory */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Department Directory</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h3>
                  <div className="flex items-center space-x-2 text-emerald-600 mb-1">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">{dept.phone}</span>
                  </div>
                  <p className="text-sm text-gray-600">{dept.ext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operating Hours */}
        <section className="section-padding bg-white py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Operating Hours</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900">General Services</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Phone className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Emergency Services</h3>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600 mb-2">24/7</p>
                  <p className="text-lg text-gray-700">Available All Days</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Emergency department never closes. Our medical team is always ready to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Transportation */}
        <section className="section-padding bg-gray-50 mb-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Location & Transportation</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Hospital Location" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy to Reach</h3>
                <p className="text-gray-600 mb-4">
                  Strategically located in the heart of the city with excellent connectivity 
                  and accessibility for patients and visitors.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-emerald-600" />
                    <span>Free parking available for 200+ vehicles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bus className="w-5 h-5 text-emerald-600" />
                    <span>Multiple bus routes and metro connectivity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <span>Located near major city landmarks</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Getting Here</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">By Car</h4>
                    <p className="text-gray-600 text-sm">
                      Take the main highway exit towards Healthcare City. 
                      The hospital is clearly signposted with ample parking facilities.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">Public Transport</h4>
                    <p className="text-gray-600 text-sm">
                      Bus routes 12, 45, and 67 stop directly at the hospital. 
                      Metro: Healthcare City Station (5-minute walk).
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">Taxi/Ride-sharing</h4>
                    <p className="text-gray-600 text-sm">
                      Available 24/7. Simply provide the address: 
                      "Bageshwari Hospital, 123 Medical Street, Healthcare City"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
