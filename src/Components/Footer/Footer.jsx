import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Send,
  Instagram,
} from "lucide-react";
import logo from "../../assets/Uttranchal Rawat band URB .png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#2A2A2A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About Hotel */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <Link to="/" className="flex items-center gap-2 md:gap-3 z-[110]">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-25 h-20 md:w-43 md:h-28"
                />
              </Link>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Welcome to the most trusted wedding band service. We blend
              tradition, rhythm, passion, and celebration to make every event
              memorable, grand, and beautifully unforgettable.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/uttranchalrawatband?igsh=MWh0enRtZ2p1M25udQ=="
                className="w-10 h-10 rounded-full border border-gray-600 hover:border-[#C9A565] flex items-center justify-center transition-all duration-300 hover:bg-pink-600"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@rawatbandburari?si=srWFXXnAR2az1_fT"
                className="w-10 h-10 rounded-full border border-gray-600 hover:border-[#C9A565] flex items-center justify-center transition-all duration-300 hover:bg-[#eb1616]"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Services Links */}
          <div>
            <h3 className="text-white text-lg font-serif mb-6">
              Services Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-[#C9A565] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A565]"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="text-gray-400 text-sm hover:text-[#C9A565] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A565]"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 text-sm hover:text-[#C9A565] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A565]"></span>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/Gallery"
                  className="text-gray-400 text-sm hover:text-[#C9A565] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A565]"></span>
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/Pack"
                  className="text-gray-400 text-sm hover:text-[#C9A565] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A565]"></span>
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 text-sm hover:text-[#C9A565] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A565]"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Information */}
          <div>
            <h3 className="text-white text-lg font-serif mb-6">Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C9A565] flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:1800-121-3637"
                    className="text-gray-400 text-sm hover:text-[#C9A565] transition-colors duration-300 block"
                  ></a>
                  <a
                    href="tel:+918285110729"
                    className="text-gray-400 text-sm hover:text-[#C9A565] transition-colors duration-300 block mt-1"
                  >
                    +91-8285110729
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C9A565] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:rawatband6@gmail.com"
                  className="text-gray-400 text-sm hover:text-[#C9A565] transition-colors duration-300"
                >
                  rawatband6@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A565] flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  Main Road, Conductor Colony, <br /> Near Union Bank, Burari,
                  <br /> Delhi - 110084
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-white text-lg font-serif mb-6">Send Address</h3>

            {/* Newsletter Form */}
            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#3A3A3A] border border-gray-600 px-4 py-3 pr-12 text-gray-300 text-sm focus:outline-none focus:border-[#C9A565] transition-colors"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-[#C9A565] hover:bg-[#B89555] transition-colors duration-300">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-[#C9A565]"
              />
              <span className="text-gray-400 text-xs">
                I agree to all terms and policies
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12 py-6 flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            © Copyrights reserved by A2V Groups.com
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#C9A565] hover:bg-[#B89555] flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
