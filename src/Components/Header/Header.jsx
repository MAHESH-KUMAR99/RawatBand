import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
import logo from '../../assets/Uttranchal Rawat band URB .png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  // Scroll handler to manage header background and show/hide on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling Down
        setShowHeader(false);
      } else {
        // Scrolling Up
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const servicesItems = [
    { title: 'Dhol Only', url: '/services/dhol-only' },
    { title: 'Punjabi Dhol', url: '/services/punjabi-dhol' },
    { title: 'Nashik Dhol', url: '/services/nashik-dhol' },
    { title: 'Backpiper Band', url: '/services/backpiper-band' },
    { title: 'Palki & Doli Services', url: '/services/palki-doli' },
    { title: 'Chattar (Umbrella) Services', url: '/services/chattar' },
    { title: 'Vintage Car for Wedding', url: '/services/vintage-car' },
    { title: 'Ghodi & Baggi', url: '/services/ghodi-baggi' },
    { title: 'Lighting Man', url: '/services/lighting-man' },
    { title: 'Band Uniforms & Musicians', url: '/services/band-uniforms' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        } ${scrolled ? 'bg-black/70 backdrop-blur-sm' : 'bg-transparent'}`}
      >
        <div className="w-full py-4 md:py-5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 flex items-center justify-between">
            {/* Logo Section - Left */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 z-[110]">
              <img
                src={logo}
                alt="Logo"
                className="w-20 h-15 md:w-43 md:h-28"
              />
            </Link>

            {/* Navigation Links - Center (Desktop & Tablet) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
              <Link
                to="/"
                className="text-white text-[12px] xl:text-[13px] font-normal uppercase tracking-[0.08em] hover:text-[#C9A565] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white text-[12px] xl:text-[13px] font-normal uppercase tracking-[0.08em] hover:text-[#C9A565] transition-colors duration-300"
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <Link to="/services">
                <button className="text-white cursor-pointer text-[12px] xl:text-[13px] font-normal uppercase tracking-[0.08em] hover:text-[#C9A565] transition-colors duration-300 flex items-center gap-1">
                  Services
                </button>
              </Link>

              <Link
                to="Gallery"
                className="text-white text-[12px] xl:text-[13px] font-normal uppercase tracking-[0.08em] hover:text-[#C9A565] transition-colors duration-300"
              >
                Gallery
              </Link>
              <Link
                to="Pack"
                className="text-white text-[12px] xl:text-[13px] font-normal uppercase tracking-[0.08em] hover:text-[#C9A565] transition-colors duration-300"
              >
                Packages
              </Link>
              <Link
                to="/contact"
                className="text-white text-[12px] xl:text-[13px] font-normal uppercase tracking-[0.08em] hover:text-[#C9A565] transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>

            {/* Book Now Button - Right (Desktop) */}
            <Link to="/contact">
              <button
                style={{
                  background:
                    'linear-gradient(90deg, #D33230 0%, #FD8F04 50%, #D33230 100%)',
                }}
                className="hidden lg:block bg-gradient-to-r from-[#8C6104] via-[#F0C86E] to-[#8C6104] cursor-pointer  text-white px-5 xl:px-7 py-2 xl:py-2.5 text-[12px] xl:text-[13px] font-normal uppercase tracking-[0.08em] hover:bg-[#B89555] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Now
              </button>
            </Link>

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden text-white z-[110] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="hidden md:block max-w-[1400px] mx-auto h-[1.5px] bg-white/10"></div>
      </header>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#1A1A1A] z-[110] transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-5 sm:p-6">
          <button
            onClick={closeMobileMenu}
            className="text-white hover:text-[#C9A565] transition-colors duration-300 p-2"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col px-5 sm:px-6 space-y-4 sm:space-y-6">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="text-white text-[15px] sm:text-base uppercase tracking-wider hover:text-[#C9A565] transition-colors duration-300 border-b border-gray-700 pb-3 sm:pb-4"
          >
            Home
          </Link>
          <Link
            to="about"
            onClick={closeMobileMenu}
            className="text-white text-[15px] sm:text-base uppercase tracking-wider hover:text-[#C9A565] transition-colors duration-300 border-b border-gray-700 pb-3 sm:pb-4"
          >
            About Us
          </Link>

          {/* Mobile Services Dropdown */}
      
            <Link
              to="services"
              onClick={closeMobileMenu}
              className="text-white text-[15px] sm:text-base uppercase tracking-wider hover:text-[#C9A565] transition-colors duration-300 border-b border-gray-700 pb-3 sm:pb-4"
            >
              Services
            </Link>
            {/* Optionally add submenu items rendering below */}
            {servicesOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {servicesItems.map((item) => (
                  <Link
                    key={item.url}
                    to={item.url}
                    onClick={closeMobileMenu}
                    className="block text-white text-sm hover:text-[#C9A565] transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}


          <Link
            to="gallery"
            onClick={closeMobileMenu}
            className="text-white text-[15px] sm:text-base uppercase tracking-wider hover:text-[#C9A565] transition-colors duration-300 border-b border-gray-700 pb-3 sm:pb-4"
          >
            Gallery
          </Link>
          <Link
            to="pack"
            onClick={closeMobileMenu}
            className="text-white text-[15px] sm:text-base uppercase tracking-wider hover:text-[#C9A565] transition-colors duration-300 border-b border-gray-700 pb-3 sm:pb-4"
          >
            Packages
          </Link>
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="text-white text-[15px] sm:text-base uppercase tracking-wider hover:text-[#C9A565] transition-colors duration-300 border-b border-gray-700 pb-3 sm:pb-4"
          >
            Contact
          </Link>

          {/* Mobile Book Now Button */}
          <button
            onClick={closeMobileMenu}
            style={{
              background:
                'linear-gradient(90deg, #D33230 0%, #FD8F04 50%, #D33230 100%)',
            }}
            className="bg-[#C9A565] text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-[#B89555] transition-all duration-300 mt-4"
          >
            Book Now
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[105] lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
