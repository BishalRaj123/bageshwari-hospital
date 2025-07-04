import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-white overflow-hidden pt-4 pb-24"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted Care for{" "}
              <span className="gradient-text">You & Your Family</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience compassionate healthcare with our team of dedicated
              professionals. We provide comprehensive medical services with
              state-of-the-art facilities and personalized care for every
              patient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("appointment")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                Make an Appointment
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg font-medium transition-all duration-200"
              >
                Explore Services
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">50+</div>
                <div className="text-gray-600">Expert Doctors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">10k+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Right content - Medical illustration with multiple images */}
          <div className="relative animate-slide-in-right">
            <div className="relative float-animation">
              <div className="w-full max-w-lg mx-auto">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <img
                    src="/hero/hero2.jpg"
                    alt="Modern Hospital Building"
                    className="w-full h-32 rounded-2xl shadow-xl object-cover"
                  />
                  <img
                    src="/hero/hero1.jpg"
                    alt="Hospital Interior"
                    className="w-full h-32 rounded-2xl shadow-xl object-cover"
                  />
                </div>
                <img
                  src="/hero/hero3.jpg"
                  alt="Medical Equipment"
                  className="w-full h-48 rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-xl">
                        24/7
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Emergency
                      </div>
                      <div className="text-sm text-gray-600">
                        Services Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hospital Gallery Preview */}
        <div className="mt-20 animate-on-scroll">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Modern Healthcare Facility</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="/facility/facility1.jpg"
              alt="Surgery Suite"
              className="w-full h-full rounded-xl object-cover hover:scale-105 transition-transform duration-200"
            />
            <img
              src="/facility/facility2.jpg"
              alt="Reception Area"
              className="w-full h-full rounded-xl object-cover hover:scale-105 transition-transform duration-200"
            />
            <img
              src="/facility/facility3.jpg"
              alt="Emergency Department"
              className="w-full h-full rounded-xl object-cover hover:scale-105 transition-transform duration-200"
            />
            <img
              src="/facility/facility4.jpg"
              alt="Medical Team"
              className="w-full h-full rounded-xl object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mt-28">
        <button
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <ArrowDown className="w-6 h-6 text-emerald-600" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
