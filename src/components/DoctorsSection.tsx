import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Mail, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DoctorsSection = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialty: 'General Medicine',
      qualification: 'MBBS, MD',
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      availability: 'Mon-Sat: 9:00 AM - 6:00 PM',
      email: 'dr.rajesh@bageshwarihospital.com',
      department: 'General Medicine'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'Gynecology & Obstetrics',
      qualification: 'MBBS, MS',
      experience: '12 years',
      image: '/bageshwari-hospital/doctor2.jpg',
      availability: 'Mon-Fri: 10:00 AM - 5:00 PM',
      email: 'dr.priya@bageshwarihospital.com',
      department: 'Gynecology'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      specialty: 'Pediatrics',
      qualification: 'MBBS, MD Pediatrics',
      experience: '10 years',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      availability: 'Mon-Sat: 8:00 AM - 2:00 PM',
      email: 'dr.amit@bageshwarihospital.com',
      department: 'Pediatrics'
    },
    {
      id: 4,
      name: 'Dr. Sarah Johnson',
      specialty: 'General Surgery',
      qualification: 'MBBS, MS Surgery',
      experience: '14 years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      availability: 'Tue-Sat: 11:00 AM - 7:00 PM',
      email: 'dr.sarah@bageshwarihospital.com',
      department: 'Surgery'
    },
    {
      id: 5,
      name: 'Dr. Michael Brown',
      specialty: 'Emergency Medicine',
      qualification: 'MBBS, MD Emergency',
      experience: '8 years',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      availability: '24/7 Emergency Coverage',
      email: 'dr.michael@bageshwarihospital.com',
      department: 'Emergency'
    },
    {
      id: 6,
      name: 'Dr. Lisa Wong',
      specialty: 'Diagnostics & Pathology',
      qualification: 'MBBS, MD Pathology',
      experience: '11 years',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      availability: 'Mon-Fri: 9:00 AM - 5:00 PM',
      email: 'dr.lisa@bageshwarihospital.com',
      department: 'Diagnostics'
    }
  ];

  const departments = ['All', 'General Medicine', 'Gynecology', 'Pediatrics', 'Surgery', 'Emergency', 'Diagnostics'];

  const filteredDoctors = selectedDepartment === 'All' 
    ? doctors 
    : doctors.filter(doctor => doctor.department === selectedDepartment);

  return (
    <section id="doctors" className="section-padding bg-gray-50 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced healthcare professionals is dedicated to providing 
            the highest quality medical care with compassion and expertise.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedDepartment === dept
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <Card 
              key={doctor.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-emerald-100 group-hover:border-emerald-300 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600">{doctor.qualification}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">{doctor.availability}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm break-all">{doctor.email}</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate(`/appointment`)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No doctors found in this department.</p>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Find the Right Doctor?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our patient care team, and we'll help you find the perfect healthcare professional 
              for your specific needs and schedule your appointment.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              Contact Patient Care
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;