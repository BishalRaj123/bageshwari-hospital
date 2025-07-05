
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About Us', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Doctors', href: 'doctors' },
    { label: 'Book Appointment', href: 'appointment' },
    { label: 'Contact Us', href: 'contact' }
  ];

  const services = [
    'General Consultation',
    'Emergency Services',
    'Pediatrics',
    'Gynecology & Obstetrics',
    'General Surgery',
    'Diagnostics & Pathology'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 overflow-hidden">
                <img
                  src="/bageshwari-hospital/logo.png"
                  alt="Bageshwari Hospital Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Bageshwari</h3>
                <p className="text-emerald-400 font-medium">Hospital Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing compassionate healthcare with excellence for over 15 years. 
              Your health and well-being are our top priorities.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-emerald-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-emerald-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-emerald-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Satungal, Chandragiri Municipality, Ward 11, Kathmandu, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+91 22 1234 5678</p>
                  <p className="text-sm text-emerald-400">Emergency: +91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>info@bageshwarihospital.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Emergency: 24/7</p>
                  <p>OPD: Mon-Sat 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 Bageshwari Hospital Pvt. Ltd. All rights reserved.</p>
              <p>Hospital Registration No: MH/REG/2024/001234</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
                Patient Rights
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open('tel:+919876543210', '_self')}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          title="Emergency Call"
        >
          <Phone className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
