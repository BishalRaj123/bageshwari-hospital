
import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const departmentHighlights = [
    {
      title: 'Emergency & Trauma Care',
      description: 'Our 24/7 emergency department is equipped with advanced life support systems and staffed by experienced emergency physicians.',
      features: ['24/7 Emergency Services', 'Trauma Team Response', 'Critical Care Unit', 'Emergency Surgery'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Surgical Excellence',
      description: 'State-of-the-art operation theaters with minimally invasive surgical techniques for faster recovery and better outcomes.',
      features: ['Laparoscopic Surgery', 'General Surgery', 'Orthopedic Surgery', 'Gynecological Surgery'],
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Maternity & Child Care',
      description: 'Comprehensive women\'s health services and pediatric care with specialized expertise and child-friendly environment.',
      features: ['Prenatal Care', 'Safe Delivery', 'NICU Facilities', 'Pediatric Specialists'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Medical Services</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              From routine check-ups to complex surgeries, we provide complete healthcare solutions with the highest standards of medical excellence.
            </p>
          </div>
        </div>

        {/* Quality Assurance */}
        <section className="section-padding bg-white py-12">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine medical expertise with compassionate care to deliver exceptional healthcare experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">NABH Accredited</h3>
                <p className="text-gray-600">Quality healthcare standards certified by national accreditation board</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Highly qualified doctors and medical professionals with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Latest Technology</h3>
                <p className="text-gray-600">Advanced medical equipment and modern diagnostic facilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Care</h3>
                <p className="text-gray-600">Round-the-clock emergency services and patient support</p>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        
        {/* Department Highlights */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Specialized Departments</h2>
            {departmentHighlights.map((dept, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center mb-16 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img 
                    src={dept.image} 
                    alt={dept.title} 
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{dept.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{dept.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {dept.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insurance & Payment */}
        <section className="section-padding bg-gray-50 mb-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance & Payment Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We accept most major insurance plans and offer flexible payment options to make healthcare accessible.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Insurance Partners</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Star Health Insurance</li>
                  <li>HDFC ERGO Health</li>
                  <li>ICICI Lombard</li>
                  <li>New India Assurance</li>
                  <li>And many more...</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Cash Payments</li>
                  <li>Credit/Debit Cards</li>
                  <li>Digital Wallets</li>
                  <li>Bank Transfers</li>
                  <li>EMI Options</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Special Programs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Senior Citizen Discounts</li>
                  <li>Health Check-up Packages</li>
                  <li>Corporate Wellness Plans</li>
                  <li>Cashless Treatment</li>
                  <li>Medical Loan Assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
