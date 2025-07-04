import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MapPin,
  User,
  Calendar,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Information Bar */}
      <div className="bg-emerald-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail size={14} />
              <span>info@bageshwarihospital.com</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <MapPin size={14} />
              <span>
                Satungal, Chandragiri Municipality, Ward 11, Kathmandu, Nepal
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Clock size={14} />
              <span>Mon-Sun: 24/7 Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Bageshwari Hospital Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  Bageshwari
                </h1>
                <p className="text-sm text-emerald-600 font-medium">
                  Hospital Pvt. Ltd.
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 relative group ${
                    isActive(item.href)
                      ? "text-emerald-600"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/appointment"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </Link>
              <a
                href="tel:+916283720687"
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left font-medium py-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-emerald-600"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  to="/appointment"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full font-medium flex items-center justify-center space-x-2"
                >
                  <Calendar size={16} />
                  <span>Book Appointment</span>
                </Link>
                <a
                  href="tel:+919876543210"
                  className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white py-2 rounded-full font-medium flex items-center justify-center space-x-2"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
