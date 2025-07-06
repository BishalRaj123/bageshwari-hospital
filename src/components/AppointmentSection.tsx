import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, User, Phone, Mail, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Initialize EmailJS with your Public Key (replace with your actual Public Key)
emailjs.init('Public key');

// Define EmailJS service and template IDs (replace with your actual IDs)
const SERVICE_ID = 'Service id';
const TEMPLATE_ID_ADMIN = 'template id';

interface FormData {
  name: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  notes: string;
}

interface Doctor {
  name: string;
  email: string;
}

// Add index signature to interface
interface AdminTemplateParams extends Record<string, unknown> {
  name: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  notes: string;
}

const AppointmentSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const departments: string[] = [
    'General Medicine',
    'Gynecology & Obstetrics',
    'Pediatrics',
    'General Surgery',
    'Emergency Medicine',
    'Diagnostics & Pathology'
  ];

  const doctorsByDepartment: Record<string, Doctor[]> = {
    'General Medicine': [
      { name: 'Dr. Rajesh Kumar', email: 'dr.rajesh@bageshwarihospital.com' }
    ],
    'Gynecology & Obstetrics': [
      { name: 'Dr. Priya Sharma', email: 'dr.priya@bageshwarihospital.com' }
    ],
    'Pediatrics': [
      { name: 'Dr. Amit Patel', email: 'dr.amit@bageshwarihospital.com' }
    ],
    'General Surgery': [
      { name: 'Dr. Sarah Johnson', email: 'dr.sarah@bageshwarihospital.com' }
    ],
    'Emergency Medicine': [
      { name: 'Dr. Michael Brown', email: 'dr.michael@bageshwarihospital.com' }
    ],
    'Diagnostics & Pathology': [
      { name: 'Dr. Lisa Wong', email: 'dr.lisa@bageshwarihospital.com' }
    ]
  };

  const timeSlots: string[] = [
    '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM',
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.department || !formData.doctor || !formData.date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to book your appointment.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const doctorName = formData.doctor.split(' - ')[0];
      

      const templateParamsForAdmin: AdminTemplateParams = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        department: formData.department,
        doctor: formData.doctor,
        date: formData.date,
        time: formData.time,
        notes: formData.notes,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, templateParamsForAdmin);
      console.log('Admin email sent successfully');

      toast({
        title: "Appointment Booked Successfully!",
        description: `Your appointment with ${doctorName} has been scheduled for ${formData.date} at ${formData.time}. An admin will be notified.`,
        className: "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-4",
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        department: '',
        doctor: '',
        date: '',
        time: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      if (error instanceof Error) {
        console.error('Error details:', error.message);
      }
      toast({
        title: "Booking Failed",
        description: "There was an error notifying the admin. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'department') {
      setFormData(prev => ({ ...prev, doctor: '' }));
    }
  };

  const availableDoctors: Doctor[] = formData.department ? doctorsByDepartment[formData.department] || [] : [];

  return (
    <section id="appointment" className="section-padding bg-white py-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your visit with our expert healthcare professionals. 
            We're here to provide you with the best medical care possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Appointment Form */}
          <Card className="animate-on-scroll shadow-xl">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-hospital-600 text-white rounded-t-xl">
              <CardTitle className="text-2xl font-bold flex items-center space-x-2">
                <Calendar className="w-6 h-6" />
                <span>Schedule Appointment</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-emerald-600" />
                      <span>Full Name *</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="border-gray-300 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>Phone Number *</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="border-gray-300 focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span>Email Address *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="border-gray-300 focus:border-emerald-500"
                    required
                  />
                </div>

                {/* Department and Doctor Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-emerald-500">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doctor">Preferred Doctor *</Label>
                    <Select 
                      value={formData.doctor} 
                      onValueChange={(value) => handleInputChange('doctor', value)}
                      disabled={!formData.department}
                    >
                      <SelectTrigger className="border-gray-300 focus:border-emerald-500">
                        <SelectValue placeholder="Select doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDoctors.map((doctor) => (
                          <SelectItem key={doctor.email} value={`${doctor.name} - ${doctor.email}`}>
                            {doctor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date and Time Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span>Preferred Date *</span>
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="border-gray-300 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span>Preferred Time *</span>
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-emerald-500">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>Additional Notes</span>
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Any specific symptoms, concerns, or requests..."
                    className="border-gray-300 focus:border-emerald-500 min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                >
                  {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Appointment Information */}
          <div className="space-y-8 animate-on-scroll">
            <Card className="bg-gradient-to-br from-emerald-50 to-hospital-50 border-emerald-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Confirmation</h4>
                      <p className="text-gray-600">An admin will be notified of your appointment request within 2 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Preparation</h4>
                      <p className="text-gray-600">Bring your ID, insurance card, and any relevant medical records.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Arrival</h4>
                      <p className="text-gray-600">Please arrive 15 minutes early for registration and check-in.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Appointment slots are subject to doctor availability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Please call us for emergency appointments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cancellations should be made 24 hours in advance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Bring your insurance card and valid ID</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-red-900 mb-4">Emergency?</h3>
                <p className="text-red-700 mb-4">
                  If you have a medical emergency, please call our emergency line immediately.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold">
                  Call Emergency: +91 98765 43210
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;