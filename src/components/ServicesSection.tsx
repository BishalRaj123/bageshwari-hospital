
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  Home, 
  Heart,
  Shield
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: 'General Consultation',
      description: 'Comprehensive health check-ups and consultations with our experienced physicians.',
      features: ['Physical examination', 'Medical history review', 'Treatment planning', 'Follow-up care']
    },
    {
      icon: Phone,
      title: 'Emergency Services',
      description: '24/7 emergency medical care with rapid response and advanced life support.',
      features: ['24/7 availability', 'Trauma care', 'Critical care', 'Ambulance services']
    },
    {
      icon: Heart,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents with child-friendly environment.',
      features: ['Vaccination programs', 'Growth monitoring', 'Developmental assessments', 'Pediatric emergency care']
    },
    {
      icon: Users,
      title: 'Gynecology & Obstetrics',
      description: 'Complete women\'s health services from routine care to specialized treatments.',
      features: ['Prenatal care', 'Delivery services', 'Gynecological surgeries', 'Family planning']
    },
    {
      icon: Shield,
      title: 'Surgery',
      description: 'Advanced surgical procedures with modern equipment and experienced surgeons.',
      features: ['General surgery', 'Laparoscopic procedures', 'Emergency surgeries', 'Post-operative care']
    },
    {
      icon: Clock,
      title: 'Diagnostics',
      description: 'Comprehensive diagnostic services including X-ray, pathology, and laboratory tests.',
      features: ['Digital X-ray', 'Blood tests', 'Ultrasound', 'ECG & EEG']
    },
    {
      icon: Mail,
      title: 'Pharmacy',
      description: 'In-house pharmacy with wide range of medications and pharmaceutical care.',
      features: ['Prescription medications', 'OTC drugs', 'Medical supplies', 'Medication counseling']
    },
    {
      icon: Home,
      title: 'Inpatient & ICU',
      description: 'Comfortable inpatient facilities with intensive care unit for critical patients.',
      features: ['Private rooms', 'ICU facilities', 'Continuous monitoring', 'Nursing care']
    },
    {
      icon: Users,
      title: 'Physiotherapy',
      description: 'Rehabilitation services to help patients recover mobility and reduce pain.',
      features: ['Post-surgery rehabilitation', 'Sports injury treatment', 'Pain management', 'Mobility training']
    }
  ];

  return (
    <section id="services" className="section-padding bg-white py-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive healthcare services with state-of-the-art facilities 
            and experienced medical professionals dedicated to your well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Medical Assistance?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Our medical team is available 24/7 for emergencies and consultations. 
              Don't hesitate to reach out when you need professional healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('appointment');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-200"
              >
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
