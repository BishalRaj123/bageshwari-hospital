
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Clock, Phone } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Patients Served',
      description: 'Successfully treated with care'
    },
    {
      icon: Calendar,
      number: '15+',
      label: 'Years Experience',
      description: 'Serving the community'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Emergency Care',
      description: 'Round-the-clock services'
    },
    {
      icon: Phone,
      number: '100%',
      label: 'Patient Satisfaction',
      description: 'Commitment to quality care'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 pb-16 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Bageshwari Hospital</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare services with compassion, 
            expertise, and cutting-edge medical technology for over 15 years.
          </p>
        </div>

        {/* Hospital Images Gallery */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-on-scroll">
          <div className="relative group">
            <img
              src="/hero/hero3.jpg"
              alt="Hospital Exterior"
              className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-emerald-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Modern Hospital Building</span>
            </div>
          </div>
          
          <div className="relative group">
            <img
              src="/hero/hero1.jpg"
              alt="Patient Room"
              className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-emerald-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Comfortable Patient Rooms</span>
            </div>
          </div>
          
          <div className="relative group">
            <img
              src="/facility/facility1.jpg"
              alt="Medical Equipment"
              className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 bg-emerald-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Advanced Medical Equipment</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left content */}
          <div className="animate-on-scroll">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision & Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Bageshwari Hospital Pvt. Ltd., we envision a healthier community where quality 
                  healthcare is accessible to all. Our mission is to provide comprehensive medical 
                  care with a personal touch, combining advanced medical technology with compassionate 
                  service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe in treating not just the illness, but the whole person. Our team of 
                  experienced healthcare professionals is committed to delivering exceptional care 
                  that promotes healing, comfort, and peace of mind for our patients and their families.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Core Values</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Compassionate care for every patient</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Excellence in medical services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Integrity and transparency in all interactions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Continuous innovation and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right content - Director's message with hospital background */}
          <div className="animate-on-scroll">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hospital Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Hospital Director"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-100"
                  />
                  <h4 className="text-xl font-bold text-gray-900">Dr. Rajesh Kumar</h4>
                  <p className="text-emerald-600 font-medium">Medical Director & Founder</p>
                </div>
                <blockquote className="text-gray-600 italic text-center leading-relaxed">
                  "Our commitment goes beyond medical treatment. We strive to create an environment 
                  where patients feel cared for, respected, and confident in their journey to recovery. 
                  Every member of our team shares this vision of providing healthcare that truly makes 
                  a difference in people's lives."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Hospital Features */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Hospital Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Operating Theater"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-gray-900">Modern Operating Theaters</h4>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Emergency Department"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-gray-900">24/7 Emergency Care</h4>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Patient Lounge"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-gray-900">Comfortable Waiting Areas</h4>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Medical Team"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-gray-900">Expert Medical Team</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
