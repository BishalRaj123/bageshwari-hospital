
import React from 'react';
import Header from '@/components/Header';
import DoctorsSection from '@/components/DoctorsSection';
import Footer from '@/components/Footer';

const Doctors = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-12">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Doctors</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Our team of experienced medical professionals dedicated to your health and well-being.
            </p>
          </div>
        </div>
        <DoctorsSection />
        
        {/* Medical Team in Action */}
        <section className="section-padding bg-gray-50 mb-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team in Action</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Doctor Consultation" 
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Patient Consultation</h3>
                <p className="text-gray-600">Thorough examinations and personalized care plans.</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Medical Team Discussion" 
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-600">Multidisciplinary approach to patient care.</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Emergency Care" 
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
                <p className="text-gray-600">Rapid response for critical medical situations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
