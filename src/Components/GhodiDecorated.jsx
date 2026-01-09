import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Image imports
import img1 from '../assets/ghodi1.jpg';
import img2 from '../assets/ghodi2.jpg';
import img3 from '../assets/ghodi3.jpg';
import img4 from '../assets/ghodi4.jpg';
import img5 from '../assets/ghodi5.jpg';
import header from '../assets/ghodiheader.jpg';
import RelatedServices from './RelatedServices';

// Palette/variables
const LIGHT_BG = '#f7fafc';
const ACCENT_GOLD = '#FD8F04';
const SHADOW_GOLD = '#D33230';
const TEXT_DARK = '#130D1A';
const whatsapp_url =
  'https://wa.me/919315101006?text=I%20want%20to%20book%20Ghodi%20Decorated';

const images = [img1, img2, img3, img4, img5];

const packagesData = [
  {
    id: 1,
    title: 'Ghodi Decorated Package',
    intro:
      'Arrive in royal tradition with our beautifully decorated wedding ghodi for your grand baraat.',
    bullets: [
      'Premium Healthy Horse Breeds',
      'Colorful Traditional Decorations',
      'Experienced Professional Handler',
      'Complete Safety & Hygiene',
      'Perfect for Baraat & Wedding Entry',
    ],
  },
];

const ChevronRight = () => <span className="text-sm">{'>'}</span>;
const Star = ({ filled = true }) => (
  <span style={{ color: filled ? '#D97706' : '#D1D5DB' }}>★</span>
);

const GhodiDecorated = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showPackage, setShowPackage] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[480px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${header})`,
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="shiny-text text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-white mt-8 sm:mt-12 lg:mt-16 uppercase">
            Ghodi Decorated
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans text-white mt-2">
            Traditional Royal Entry For Your Baraat
          </p>
          <div className="flex items-center justify-center gap-2 text-white mt-3 sm:mt-4 text-xs sm:text-sm">
            <a
              href="/"
              className="hover:text-[#C9A565] transition-colors duration-300"
            >
              Home
            </a>
            <ChevronRight />
            <span className="text-[#C9A565]">Ghodi Decorated</span>
          </div>
          <p className="text-xs sm:text-sm md:text-base font-sans text-white mt-2">
            Uttranchal Rawat Band
          </p>
        </div>
      </section>

      <div className="min-h-screen bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Left Section - Images */}
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src={images[selectedImage]}
                  alt="Product Main"
                  className="w-full h-auto object-contain max-h-[400px] sm:max-h-[500px]"
                />
              </div>
              <div className="w-full">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={8}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 4, spaceBetween: 10 },
                    768: { slidesPerView: 4, spaceBetween: 10 },
                    1024: { slidesPerView: 5, spaceBetween: 10 },
                  }}
                  className="thumbnail-swiper"
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <button
                        onClick={() => setSelectedImage(index)}
                        className={`overflow-hidden aspect-square flex items-center justify-center cursor-pointer transition-all w-full rounded ${
                          selectedImage === index
                            ? 'ring-2 ring-[#FD8F04]'
                            : 'hover:ring-2 hover:ring-gray-300'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 mb-3 sm:mb-4">
                Ghodi Booking – Uttranchal Rawat Band
              </h1>

              {/* Rating & Package Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
                <div className="flex gap-1 text-xl sm:text-2xl">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} filled={true} />
                  ))}
                </div>
                <button
                  style={{
                    background:
                      'linear-gradient(90deg, #D33230 0%, #FD8F04 50%, #D33230 100%)',
                  }}
                  className="cursor-pointer text-white px-4 sm:px-5 lg:px-7 py-2 sm:py-2.5 text-[11px] sm:text-[12px] lg:text-[13px] font-normal uppercase tracking-wider hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => setShowPackage(true)}
                >
                  Check Package
                </button>
              </div>

              {/* Modal Popup */}
              {showPackage && (
                <div
                  className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4 transition duration-300"
                  onClick={() => setShowPackage(false)}
                >
                  <div
                    className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm sm:max-w-lg w-full p-0 relative animate-fadeIn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setShowPackage(false)}
                      className="absolute right-3 top-3 sm:right-4 sm:top-4 text-2xl sm:text-3xl text-gray-500 hover:text-[#D33230] transition"
                      title="Close"
                    >
                      &times;
                    </button>
                    <div className="p-5 sm:p-7">
                      <div
                        className="relative flex flex-col items-center min-h-[350px] sm:min-h-[400px] rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6"
                        style={{
                          background: `linear-gradient(180deg, ${LIGHT_BG}, #FFF8F5)`,
                          border: `2px solid ${ACCENT_GOLD}33`,
                        }}
                      >
                        <div className="text-center mb-4 sm:mb-6 mt-2 sm:mt-4">
                          <h3
                            className="text-xl sm:text-2xl font-serif font-extrabold"
                            style={{ color: TEXT_DARK }}
                          >
                            {packagesData[0].title}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-gray-600 italic">
                            {packagesData[0].intro}
                          </p>
                        </div>
                        <div className="w-full border-t border-gray-200 pt-3 pl-3 sm:pl-6">
                          <h4
                            className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold uppercase tracking-wider"
                            style={{ color: SHADOW_GOLD }}
                          >
                            <span>&#9889;</span> Services Included
                          </h4>
                          <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                            {packagesData[0].bullets.map((b, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 sm:gap-3"
                              >
                                <span
                                  className="flex-shrink-0 mt-0.5 text-base sm:text-lg font-extrabold"
                                  style={{ color: ACCENT_GOLD }}
                                >
                                  &#x2724;
                                </span>
                                <span className="leading-tight">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-5 sm:mt-7 mb-4 sm:mb-6 flex items-center justify-center">
                          <a
                            href={whatsapp_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-white uppercase transition-transform duration-300 hover:scale-105"
                            style={{
                              background: '#25D366',
                              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                            }}
                          >
                            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span>Pricing Enquiry</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <style>{`
                      @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(30px);}
                        to { opacity: 1; transform: translateY(0); }
                      }
                      .animate-fadeIn { animation: fadeIn 0.3s ease; }
                    `}</style>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Arrive in royal tradition with our beautifully decorated wedding
                ghodi for your grand baraat.
              </p>

              {/* Key Functions */}
              <span className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Key Occasions To Book Ghodi:
              </span>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2">
                <li className="transition-all duration-200 hover:bg-[#FD8F04]/20 hover:text-[#D33230] hover:pl-2 sm:hover:pl-3 rounded cursor-pointer">
                  Groom Baraat Entry
                </li>
                <li className="transition-all duration-200 hover:bg-[#FD8F04]/20 hover:text-[#D33230] hover:pl-2 sm:hover:pl-3 rounded cursor-pointer">
                  Wedding Procession
                </li>
                <li className="transition-all duration-200 hover:bg-[#FD8F04]/20 hover:text-[#D33230] hover:pl-2 sm:hover:pl-3 rounded cursor-pointer">
                  Traditional Welcome
                </li>
                <li className="transition-all duration-200 hover:bg-[#FD8F04]/20 hover:text-[#D33230] hover:pl-2 sm:hover:pl-3 rounded cursor-pointer">
                  Cultural & Religious Parades
                </li>
              </ul>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <Link to="/contact" className="flex-1">
                  <button
                    className="button-gradient-hover w-full cursor-pointer flex-1 px-5 sm:px-6 py-3 font-medium uppercase text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center"
                    style={{ minHeight: '44px' }}
                  >
                    Booking Now
                  </button>
                </Link>
                <a
                  href="https://wa.me/8285110729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button
                    className="group w-full flex items-center justify-center cursor-pointer gap-2 px-5 sm:px-6 py-3 border-2 border-green-600 bg-white text-green-600 font-medium uppercase text-xs sm:text-sm tracking-wide transition-colors duration-300 hover:bg-green-600 hover:text-white"
                    style={{ minHeight: '55px' }}
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                    <span className="group-hover:text-white">Enquiry Now</span>
                  </button>
                </a>
              </div>

              {/* Share Section */}
              <div className="pt-5 sm:pt-6 border-t border-gray-200 mt-6 sm:mt-8">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    Share with friends
                  </h3>
                  <div className="flex gap-3 sm:gap-4">
                    <button className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors">
                      <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-pink-600 hover:text-pink-600 transition-colors">
                      <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors">
                      <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 mb-3 sm:mb-4">
              Description
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Uttranchal Rawat Band offers premium wedding ghodi booking,
              turning your groom entry into a regal experience. Our healthy,
              elegant horses are carefully groomed and decorated with colorful
              cloth, flower garlands, and traditional accessories to match your
              wedding theme. Each booking includes an experienced handler for
              safety and a stress-free procession.
              <br />
              <br />
              We understand the ritual importance of baraat ghodi in Indian
              weddings — it's not just a tradition, but a treasured family
              moment. Our horses are maintained with top hygiene, arrive
              punctually, and are well-trained for all baraat festivities,
              religious functions, and festive parades.
            </p>
          </div>

          {/* Why Book With Us */}
          <div className="mt-6 sm:mt-8 lg:mt-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 mb-3 sm:mb-5">
              Why Choose Uttranchal Rawat Band Ghodi Service?
            </h1>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-3 sm:space-y-4">
              <li className="leading-relaxed">
                Premium, healthy horse breeds (Marwari, Kathiawari, etc.)
              </li>
              <li className="leading-relaxed">
                Professional and gentle handlers
              </li>
              <li className="leading-relaxed">
                Total safety and hygiene focus
              </li>
              <li className="leading-relaxed">
                Timely service for every event
              </li>
              <li className="leading-relaxed">
                Stunning photo moments during baraat
              </li>
            </ul>
          </div>

          <RelatedServices />
        </div>
      </div>
    </div>
  );
};

export default GhodiDecorated;
