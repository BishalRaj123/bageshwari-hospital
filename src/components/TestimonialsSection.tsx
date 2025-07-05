import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Anita Sharma",
      image:
        "/bageshwari-hospital/testimony/testimony1.jpg",
      rating: 5,
      review:
        "Exceptional care and treatment at Bageshwari Hospital. Dr. Rajesh Kumar provided excellent consultation and the staff was very supportive throughout my treatment. Highly recommend this hospital for quality healthcare.",
      treatment: "General Consultation",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Rajesh Patel",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review:
        "The emergency services at Bageshwari Hospital saved my life. The quick response, professional staff, and advanced medical equipment made all the difference. Forever grateful to the entire team.",
      treatment: "Emergency Care",
      date: "February 2024",
    },
    {
      id: 3,
      name: "Priya Gupta",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review:
        "Dr. Priya Sharma and her team provided exceptional care during my pregnancy. The delivery was smooth and the post-natal care was outstanding. Thank you for making this journey so comfortable.",
      treatment: "Obstetrics & Gynecology",
      date: "January 2024",
    },
    {
      id: 4,
      name: "Amit Kumar",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review:
        "My son received excellent pediatric care from Dr. Amit Patel. The doctor was patient, caring, and explained everything clearly. The child-friendly environment made the visit stress-free.",
      treatment: "Pediatrics",
      date: "March 2024",
    },
    {
      id: 5,
      name: "Sunita Verma",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review:
        "The surgical team at Bageshwari Hospital is world-class. Dr. Sarah Johnson performed my surgery with precision and care. The recovery was smooth thanks to the excellent post-operative care.",
      treatment: "General Surgery",
      date: "December 2023",
    },
    {
      id: 6,
      name: "Vikram Singh",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4,
      review:
        "Outstanding diagnostic services with quick and accurate results. Dr. Lisa Wong and her team are highly professional. The pathology reports were detailed and helped in proper treatment planning.",
      treatment: "Diagnostics",
      date: "February 2024",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-emerald-50 to-hospital-50 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from real patients who have trusted us with their
            healthcare needs. Your satisfaction and well-being are our top
            priorities.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          {/* Main testimonial card */}
          <Card className="bg-white shadow-2xl min-h-[400px] flex items-center">
            <CardContent className="p-12 text-center">
              <div className="flex flex-col items-center justify-center px-12">
                <div className="mb-8 text-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-100"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-2">
                    {testimonials[currentIndex].treatment}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].date}
                  </p>
                </div>

                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic max-w-2xl mx-auto text-center">
                  "{testimonials[currentIndex].review}"
                </blockquote>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-emerald-50 border-emerald-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-emerald-50 border-emerald-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-on-scroll">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              4.9/5
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-gray-600">Patient Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">10k+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-6">
              We value your feedback and would love to hear about your
              experience with our healthcare services.
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              Leave a Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
