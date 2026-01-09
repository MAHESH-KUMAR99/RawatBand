// src/components/RoyalPackageCarousel.jsx
'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowLeft, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

// Theme
const ACCENT_GOLD = '#D4AF37';
const DARK_BG = '#1A1714';
const TEXT_DARK = '#3C3633';
const PHONE = '8285110729';
const whatsapp_url = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  'Hello, I am interested in booking a Royal Package for my event. Can you please share the pricing and availability?',
)}`;

// Custom WhatsApp Icon

// Data
const packagesData = [
  {
    id: 1,
    title: 'The Only Dhol',
    intro:
      'Bring energy and excitement to your baraat with powerful Punjabi Dhol beats.',
    bullets: [
      '4 to 8 Professional Dhol Players',
      'Traditional & Modern Beats Mix',
      'Royal Uniformed Artists',
      'Baraat, Haldi, and Reception Events',
    ],
  },
  {
    id: 2,
    title: 'Nashik Dhol Tasha',
    intro:
      "Feel the vibrant rhythm of Maharashtra's festive beats in a majestic display.",
    bullets: [
      '6 to 10 Nashik Dhol Performers',
      'Coordinated Group Performance',
      'Elaborate Traditional Attire',
      'Perfect for Grand Entries & Processions',
    ],
  },
  {
    id: 3,
    title: 'Backpipe Band',
    intro:
      'A royal touch for your wedding with our disciplined backpiper tunes and marching band.',
    bullets: [
      '6 to 12 Band Members with Backpiper',
      'Trumpets, Bugles & Clarinet Music',
      'Formal Marching Style Entry',
      'Perfect for Baraat & Royal Processions',
    ],
  },
  {
    id: 4,
    title: 'Maharani Palki & Doli Service',
    intro: "Make the bride's entry a memorable, elegant, and timeless moment.",
    bullets: [
      'Beautifully Decorated Palki / Doli',
      'Carriers in Traditional Dress',
      'Intricate Flower Decoration Options',
      'Royal, Modern & Floral Styles Available',
    ],
  },
  {
    id: 5,
    title: 'Chattar (Royal Umbrella) Service',
    intro: "Add a majestic, royal charm to the groom's baraat procession.",
    bullets: [
      'Designer Chattar / Umbrella',
      'Carried by Uniformed Staff',
      'Integrated LED & Floral Options',
      'Suitable for Groom Entry and Photo Shoots',
    ],
  },
  {
    id: 6,
    title: 'Vintage Car Groom Entry',
    intro: 'A grand arrival in a stylish, classic vintage car, fully adorned.',
    bullets: [
      'Classic Vintage Car Options (e.g., Rolls, Bentley)',
      'Fully Decorated with Premium Flowers & Ribbons',
      'Professional Chauffeur Service Included',
      'Available for Photo Shoots & Entry',
    ],
  },
  {
    id: 7,
    title: 'Ghodi & Imperial Baggi',
    intro:
      "The traditional and ultimate royal choice for the groom's triumphant entry.",
    bullets: [
      'Magnificently Decorated White Ghodi',
      'Royal Baggi with Integrated Lighting Setup',
      'Uniformed Attendant & Handler',
      'Premium Flower Decoration & Music Combo',
    ],
  },
  {
    id: 8,
    title: 'Ambient Lighting & Decor Setup',
    intro:
      "A premium lighting and décor setup crafted to elevate your event's atmosphere, day or night.",
    bullets: [
      'High-Power LED Lights & Portable Generators',
      'Custom Entry Gate & Baraat Lighting',
      'Customized Decoration Themes & Color Palettes',
      'Suitable for Day & Night Events',
    ],
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const RoyalPackageCarousel = () => {
  // responsive visible count (1 / 2 / 3)
  const [visibleCount, setVisibleCount] = useState(3);
  // large fixed card width for desktop but responsive by breakpoint
  // We use a JS value for animation math, while CSS will help with minor responsiveness
  const CARD_WIDTH_DESKTOP = 380; // increased width for better look
  const GAP_SIZE_PX = 24; // same mx-3 (0.75rem left + right = 24px)
  const CARD_SIZE_PX = CARD_WIDTH_DESKTOP + GAP_SIZE_PX;

  // index state
  const [currentIndex, setCurrentIndex] = useState(0);

  // update visibleCount on resize (keeps 3 on large screens)
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      // breakpoints: mobile < 640 -> 1, tablet 640-1023 -> 2, desktop >= 1024 -> 3
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const totalCards = packagesData.length;
  const maxScrollIndex = Math.max(0, totalCards - visibleCount);

  // keep currentIndex valid if visibleCount changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxScrollIndex));
  }, [visibleCount, maxScrollIndex]);

  // compute x offset for motion
  const xOffset = useMemo(
    () => -(currentIndex * CARD_SIZE_PX),
    [currentIndex, CARD_SIZE_PX],
  );

  // dots
  const dots = Array.from({ length: maxScrollIndex + 1 }, (_, i) => i);

  // handlers
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxScrollIndex));
  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goToSlide = (i) => setCurrentIndex(i);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [maxScrollIndex]);

  const isStart = currentIndex === 0;
  const isEnd = currentIndex >= maxScrollIndex;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 },
    },
  };
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.section
          className="w-full py-16 sm:py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="text-center mb-10 sm:mb-16"
              variants={headerVariants}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.span
                  className="w-10 sm:w-12 h-[1px] bg-[#C9A565] transform origin-right"
                  variants={lineVariants}
                />
                <motion.p className="text-[10px] sm:text-[11px] uppercase tracking-[0.20em] text-gray-600">
                  Uttaranchal Rawat Band
                </motion.p>
                <motion.span
                  className="w-10 sm:w-12 h-[1px] bg-[#C9A565] transform origin-left"
                  variants={lineVariants}
                />
              </div>

              <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900">
                Our Premium Wedding & Event Packages
              </motion.h2>
            </motion.div>
          </div>
        </motion.section>

        {/* Carousel */}
        <div className="relative carousel-container py-2">
          {/* fade edges */}
          {/* <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" /> */}

          {/* wrapper with hidden overflow */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-stretch"
              animate={{ x: xOffset }}
              transition={{ type: 'spring', stiffness: 100, damping: 22 }}
              style={{ willChange: 'transform' }}
            >
              {packagesData.map((pkg) => (
                <motion.article
                  key={pkg.id}
                  className="carousel-item flex-shrink-0 mx-3 p-6 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03] cursor-default flex flex-col justify-between"
                  style={{
                    width: `${CARD_WIDTH_DESKTOP}px`,
                    minHeight: '380px',
                    border: `1px solid ${ACCENT_GOLD}40`,
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={cardVariants}
                >
                  <div>
                    <div className="text-center pb-4 border-b border-gray-100 mb-4">
                      <div
                        className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center shadow-lg"
                        style={{
                          background: ACCENT_GOLD,
                          boxShadow: `0 0 20px ${ACCENT_GOLD}80`,
                        }}
                      >
                        <Zap className="w-6 h-6" style={{ color: DARK_BG }} />
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-serif font-bold leading-tight"
                        style={{ color: TEXT_DARK }}
                      >
                        {pkg.title}
                      </h3>
                      <p
                        className="mt-2 text-sm text-gray-500 italic"
                        style={{ overflowWrap: 'anywhere' }}
                      >
                        {pkg.intro}
                      </p>
                    </div>

                    <div className="flex-grow">
                      <h4
                        className="text-sm font-bold tracking-wider uppercase mb-3"
                        style={{ color: ACCENT_GOLD }}
                      >
                        Key Inclusions
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-3">
                        {pkg.bullets.slice(0, 4).map((b, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3"
                            style={{ overflowWrap: 'anywhere' }}
                          >
                            <span
                              className="text-lg flex-shrink-0"
                              style={{ color: ACCENT_GOLD }}
                            >
                              &#x2724;
                            </span>
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-center">
                    <a
                      href={whatsapp_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-md font-bold text-white shadow-xl transition-all duration-200 hover:scale-[1.05] hover:shadow-2xl"
                      style={{
                        background: '#25D366',
                        boxShadow: '0 6px 15px rgba(37, 211, 102, 0.6)',
                      }}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Instant Enquiry</span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-2 right-4 flex items-center space-x-2 z-30">
            <button
              onClick={handlePrev}
              disabled={isStart}
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 pointer-events-auto ${
                isStart
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-50'
                  : 'bg-white text-gray-700 hover:bg-stone-200'
              }`}
              aria-label="Previous Package"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              disabled={isEnd}
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 pointer-events-auto ${
                isEnd
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-50'
                  : ''
              }`}
              style={{
                backgroundColor: ACCENT_GOLD,
                boxShadow: '0 4px 10px rgba(212, 175, 55, 0.5)',
              }}
              aria-label="Next Package"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {dots.map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => goToSlide(dotIndex)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === dotIndex
                    ? 'w-8'
                    : 'w-2.5 bg-gray-400 hover:bg-gray-500'
                }`}
                style={{
                  backgroundColor:
                    currentIndex === dotIndex ? ACCENT_GOLD : undefined,
                }}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-item {
          margin: 0 0.75rem;
        } /* mx-3 */
        /* On smaller screens, reduce card width so layout fits nicely */
        @media (max-width: 1023px) {
          .carousel-item {
            width: 300px !important;
          } /* tablet */
        }
        @media (max-width: 639px) {
          .carousel-item {
            width: 260px !important;
          } /* mobile */
          .absolute.-bottom-2.right-4 {
            right: 1rem;
          }
        }
        @media (min-width: 1024px) {
          .carousel-container {
            max-width: ${CARD_SIZE_PX *
            3}px; /* three visible cards on large screens */
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default RoyalPackageCarousel;
