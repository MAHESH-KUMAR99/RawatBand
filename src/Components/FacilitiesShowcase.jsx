import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/dj2.jpg";
import img2 from "../assets/Utranchal Rawat Band6.jpg";
import img3 from "../assets/ghodi3.jpg";
import img4 from "../assets/vintage4.jpg";
import { Link } from "react-router-dom";

const FacilitiesShowcase = () => {
  // Image animations - Bottom to Up
  const imageVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Content animations - Bottom to Up
  const contentVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Golden bar animation
  const barVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="w-full bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
          {/* Fitness Center - Image Left, Content Right */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image with Shine Effect */}
            <motion.div
              className="relative order-2 lg:order-1 overflow-hidden group"
              variants={imageVariants}
            >
              <motion.img
                src={img1}
                alt="Fitness Center"
                className="w-full h-[450px] object-cover shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />

              {/* Decorative Golden Bar - Top Right */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-2 bg-[#C9A565] z-10"
                variants={barVariants}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="relative order-1 lg:order-2"
              variants={contentVariants}
            >
              {/* Background Pattern - Watermark */}
              <motion.div
                className="absolute -right-12 top-0 opacity-[0.03] w-[300px] h-[300px] hidden xl:block"
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 0.03, rotate: 360 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <svg viewBox="0 0 100 100" className="text-gray-400">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </svg>
              </motion.div>

              {/* Small Heading with Line */}
              <motion.div
                className="flex items-center gap-4 mb-4"
                variants={childVariants}
              >
                <motion.span
                  className="w-16 h-[2px] bg-[#C9A565]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-600">
                  Premium Dj vibe
                </p>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6 leading-tight"
                variants={childVariants}
              >
                 DJ Beats, Nonstop Fun
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-gray-600 text-[15px] leading-relaxed mb-8"
                variants={childVariants}
              >
                Uttranchal Rawat Band brings the newest trend in Indian
                weddings—DJ on Wheels. Our fully equipped DJ console with
                premium sound system, disco lighting, colorful LED effects, and
                expert DJ artists turns any baraat or event into a rocking
                party. Mounted on a luxury vehicle or truck, the mobile DJ setup
                can move with your baraat through city streets, wedding lawns,
                and venues, playing Bollywood, Punjabi, EDM, and customized
                playlists for your celebration.
              </motion.p>

              {/* Button */}
              <Link to="/services">
                <motion.button
                  style={{
                    background:
                      'linear-gradient(90deg, #D33230 0%, #FD8F04 50%, #D33230 100%)',
                  }}
                  className="text-white  bg-gradient-to-r from-[#8C6104] via-[#F0C86E] to-[#8C6104] px-8 py-3 text-[12px] uppercase tracking-[0.15em]"
                  variants={childVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#C9A565',
                    color: '#FFFFFF',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  Discover More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* The Restaurant - Content Left, Image Right */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Content */}
            <motion.div className="relative" variants={contentVariants}>
              {/* Background Pattern - Watermark */}
              <motion.div
                className="absolute -left-12 top-0 opacity-[0.03] w-[300px] h-[300px] hidden xl:block"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.03, scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <svg viewBox="0 0 100 100" className="text-gray-400">
                  <rect
                    x="10"
                    y="10"
                    width="80"
                    height="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="60"
                    height="60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="30"
                    y="30"
                    width="40"
                    height="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="40"
                    y="40"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </svg>
              </motion.div>

              {/* Small Heading with Line */}
              <motion.div
                className="flex items-center gap-4 mb-4"
                variants={childVariants}
              >
                <motion.span
                  className="w-16 h-[2px] bg-[#C9A565]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-600">
                  Royal Band vibe
                </p>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6 leading-tight"
                variants={childVariants}
              >
                Grand Music, Royal Style
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-gray-600 text-[15px] leading-relaxed mb-8"
                variants={childVariants}
              >
                Uttranchal Rawat Band offers premium Band Musicians Booking for
                grand Indian weddings and events. Our team of expert musicians
                performs in smart, royal uniforms—adding instant elegance and
                style to every occasion. Instruments include trumpets, drums,
                clarinets, bugles, and more, expertly played for wedding
                baraats, processions, receptions, and corporate events.
              </motion.p>

              {/* Button */}
              <Link to="/services">
                <motion.button
                  style={{
                    background:
                      'linear-gradient(90deg, #D33230 0%, #FD8F04 50%, #D33230 100%)',
                  }}
                  className="border-2 text-white  bg-gradient-to-r from-[#8C6104] via-[#F0C86E] to-[#8C6104] cursor-pointer px-8 py-3 text-[12px] uppercase tracking-[0.15em]"
                  variants={childVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#C9A565',
                    color: '#FFFFFF',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  Discover More
                </motion.button>
              </Link>
            </motion.div>

            {/* Image with Shine Effect */}
            <motion.div
              className="relative overflow-hidden group"
              variants={imageVariants}
            >
              <motion.img
                src={img2}
                alt="Restaurant"
                className="w-full h-[450px] object-cover shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />

              {/* Decorative Golden Bar - Top Left */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-2 bg-[#C9A565] z-10"
                variants={barVariants}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="w-full bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
          {/* Fitness Center - Image Left, Content Right */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image with Shine Effect */}
            <motion.div
              className="relative order-2 lg:order-1 overflow-hidden group"
              variants={imageVariants}
            >
              <motion.img
                src={img3}
                alt="Fitness Center"
                className="w-full h-[450px] object-cover shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />

              {/* Decorative Golden Bar - Top Right */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-2 bg-[#C9A565] z-10"
                variants={barVariants}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="relative order-1 lg:order-2"
              variants={contentVariants}
            >
              {/* Background Pattern - Watermark */}
              <motion.div
                className="absolute -right-12 top-0 opacity-[0.03] w-[300px] h-[300px] hidden xl:block"
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 0.03, rotate: 360 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <svg viewBox="0 0 100 100" className="text-gray-400">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </svg>
              </motion.div>

              {/* Small Heading with Line */}
              <motion.div
                className="flex items-center gap-4 mb-4"
                variants={childVariants}
              >
                <motion.span
                  className="w-16 h-[2px] bg-[#C9A565]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-600">
                  Royal vibe
                </p>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6 leading-tight"
                variants={childVariants}
              >
                Traditional Royal Entry For Your Baraat
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-gray-600 text-[15px] leading-relaxed mb-8"
                variants={childVariants}
              >
                Uttranchal Rawat Band offers premium wedding ghodi booking,
                turning your groom entry into a regal experience. Our healthy,
                elegant horses are carefully groomed and decorated with colorful
                cloth, flower garlands, and traditional accessories to match
                your wedding theme. Each booking includes an experienced handler
                for safety and a stress-free procession.
              </motion.p>

              {/* Button */}
              <Link to="/services">
                <motion.button
                  style={{
                    background:
                      'linear-gradient(90deg, #D33230 0%, #FD8F04 50%, #D33230 100%)',
                  }}
                  className="text-white  bg-gradient-to-r from-[#8C6104] via-[#F0C86E] to-[#8C6104] px-8 py-3 text-[12px] uppercase tracking-[0.15em]"
                  variants={childVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#C9A565',
                    color: '#FFFFFF',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  Discover More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* The Restaurant - Content Left, Image Right */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Content */}
            <motion.div className="relative" variants={contentVariants}>
              {/* Background Pattern - Watermark */}
              <motion.div
                className="absolute -left-12 top-0 opacity-[0.03] w-[300px] h-[300px] hidden xl:block"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.03, scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <svg viewBox="0 0 100 100" className="text-gray-400">
                  <rect
                    x="10"
                    y="10"
                    width="80"
                    height="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="60"
                    height="60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="30"
                    y="30"
                    width="40"
                    height="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="40"
                    y="40"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </svg>
              </motion.div>

              {/* Small Heading with Line */}
              <motion.div
                className="flex items-center gap-4 mb-4"
                variants={childVariants}
              >
                <motion.span
                  className="w-16 h-[2px] bg-[#C9A565]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-600">
                  Vintage Vibes
                </p>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6 leading-tight"
                variants={childVariants}
              >
                Arrive In Style, Create Lasting Impressions
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-gray-600 text-[15px] leading-relaxed mb-8"
                variants={childVariants}
              >
                Uttranchal Rawat Band offers exclusive vintage car bookings,
                bringing classic elegance and royal vibes to your wedding and
                special occasions. Our fleet includes beautifully maintained
                vintage cars, tastefully decorated with flowers and ribbons —
                perfect for a majestic bride-groom arrival, classy reception
                entry, or romantic anniversary celebration. Each car is driven
                by a professional chauffeur, ensuring safety and exceptional
                service. We offer personalized decoration options, custom number
                plates, and photo-friendly arrangements for an elite experience.
              </motion.p>

              {/* Button */}
              <Link to="/services">
                <motion.button
                  style={{
                    background:
                      'linear-gradient(90deg, #D33230 0%, #FD8F04 50%, #D33230 100%)',
                  }}
                  className="border-2 text-white  bg-gradient-to-r from-[#8C6104] via-[#F0C86E] to-[#8C6104] cursor-pointer px-8 py-3 text-[12px] uppercase tracking-[0.15em]"
                  variants={childVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#C9A565',
                    color: '#FFFFFF',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  Discover More
                </motion.button>
              </Link>
            </motion.div>

            {/* Image with Shine Effect */}
            <motion.div
              className="relative overflow-hidden group"
              variants={imageVariants}
            >
              <motion.img
                src={img4}
                alt="Restaurant"
                className="w-full h-[450px] object-cover shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />

              {/* Decorative Golden Bar - Top Left */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-2 bg-[#C9A565] z-10"
                variants={barVariants}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FacilitiesShowcase;
