
import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'NABH Accredited',
      description: 'Nationally accredited healthcare facility maintaining highest quality standards'
    },
    {
      icon: Users,
      title: '50+ Expert Doctors',
      description: 'Highly qualified medical professionals with specialized expertise'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Care',
      description: 'Round-the-clock emergency services with rapid response team'
    },
    {
      icon: Heart,
      title: '10,000+ Lives Saved',
      description: 'Committed to saving lives and improving community health'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Bageshwari Hospital</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Dedicated to providing exceptional healthcare services with compassion, expertise, and state-of-the-art medical technology.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="section-padding bg-white py-12">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  To provide comprehensive, compassionate, and quality healthcare services to our community. 
                  We are committed to healing, comfort, and hope through advanced medical care and personalized attention.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading healthcare institution in the region, recognized for clinical excellence, 
                  innovative treatments, and exceptional patient care that transforms lives and strengthens communities.
                </p>
              </div>
              <div>
                <img 
                  src="operation.jpg" 
                  alt="Modern Hospital Building" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AboutSection />
        
        {/* Leadership Team */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Dr. Rajesh Kumar - Chief Medical Officer" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-emerald-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-emerald-600 font-medium mb-2">Chief Medical Officer</p>
                <p className="text-gray-600 text-sm">MBBS, MD - 20+ years of healthcare leadership experience</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="doctor2.jpg" 
                  alt="Dr. Priya Sharma - Medical Director" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-emerald-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Priya Sharma</h3>
                <p className="text-emerald-600 font-medium mb-2">Medical Director</p>
                <p className="text-gray-600 text-sm">MBBS, MS - Specialist in Women's Health & Surgery</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Mr. Amit Patel - Hospital Administrator" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-emerald-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Amit Patel</h3>
                <p className="text-emerald-600 font-medium mb-2">Hospital Administrator</p>
                <p className="text-gray-600 text-sm">MBA Healthcare Management - Operations & Quality Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Facilities */}
        <section className="section-padding bg-gray-50 mt-4 mb-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our State-of-the-Art Facilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Patient Rooms" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Patient Rooms</h3>
                  <p className="text-gray-600">Comfortable, well-equipped private rooms designed for optimal patient recovery and family comfort.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/facility/facility4.jpg" 
                  alt="Advanced Medical Equipment" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">Latest medical equipment and diagnostic tools ensuring accurate diagnosis and effective treatment.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Hospital Lobby" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Welcoming Environment</h3>
                  <p className="text-gray-600">Modern, comfortable reception and waiting areas designed to reduce anxiety and promote healing.</p>
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

export default About;
