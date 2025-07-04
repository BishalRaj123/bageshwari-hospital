import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, User, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Contact Form Data:", formData);

      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description:
          "There was an error sending your message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Hospital Address",
      details: [
        "Bageshwari Hospital Pvt. Ltd.",
        "123 Medical Complex, Health Street",
        "Medical District, City - 400001",
        "State, India",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Reception: +91 22 1234 5678",
        "Emergency: +91 98765 43210",
        "Appointments: +91 22 1234 5679",
        "Pharmacy: +91 22 1234 5680",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: info@bageshwarihospital.com",
        "Appointments: appointments@bageshwarihospital.com",
        "Emergency: emergency@bageshwarihospital.com",
        "Director: director@bageshwarihospital.com",
      ],
    },
    {
      icon: Clock,
      title: "Hospital Hours",
      details: [
        "Emergency: 24/7 Available",
        "OPD: Mon-Sat 9:00 AM - 6:00 PM",
        "Pharmacy: Mon-Sun 8:00 AM - 10:00 PM",
        "Lab Services: Mon-Sat 7:00 AM - 7:00 PM",
      ],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help with all your healthcare needs. Contact us for
            appointments, inquiries, or emergency assistance. Your health is our
            priority.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 border-rounded-xl">
          {/* Contact Form */}
          <Card className="animate-on-scroll shadow-xl">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-hospital-600 text-white rounded-t-xl ">
              <CardTitle className="text-2xl font-bold">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-name"
                      className="flex items-center space-x-2"
                    >
                      <User className="w-4 h-4 text-emerald-600" />
                      <span>Full Name *</span>
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter your full name"
                      className="border-gray-300 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-phone"
                      className="flex items-center space-x-2"
                    >
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>Phone Number</span>
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+91 98765 43210"
                      className="border-gray-300 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-email"
                    className="flex items-center space-x-2"
                  >
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span>Email Address *</span>
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="border-gray-300 focus:border-emerald-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact-subject"
                    className="flex items-center space-x-2"
                  >
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>Subject</span>
                  </Label>
                  <Input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    placeholder="What is this regarding?"
                    className="border-gray-300 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Please describe how we can help you..."
                    className="border-gray-300 focus:border-emerald-500 min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-hospital-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-on-scroll">
          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
              <CardTitle className="text-2xl font-bold text-center">
                Find Us on the Map
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10309.395793800692!2d85.24655135618278!3d27.686790931676867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb22936bbc69ef%3A0xa35e25834b28284b!2sBageshwari%20Hospital%20(P.)%20Ltd!5e0!3m2!1sen!2snp!4v1751283140580!5m2!1sen!2snp"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bageshwari Hospital Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center animate-on-scroll">
          <Card className="bg-red-50 border-red-200 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                Medical Emergency?
              </h3>
              <p className="text-red-700 mb-6">
                If you're experiencing a medical emergency, don't wait. Call our
                emergency line immediately or visit our emergency department.
                We're available 24/7 to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold">
                  Call Emergency: +91 98765 43210
                </Button>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-full font-semibold"
                >
                  Directions to Hospital
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
