import React from 'react';
import { motion } from 'framer-motion';
import BookingForm from './BookingForm';
import HotelFeatures from './HotelFeatures ';
import RoomsSuites from './RoomsSuites';
import HotelFacilities from './HotelFacilities';
import PromoVideo from './PromoVideo';
import FacilitiesShowcase from './FacilitiesShowcase';
import Testimonials from './Testimonials';
import TeamSection from './TeamSection';
import BookingSection from './BookingSection';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img1 from '../assets/Utranchal Rawat Band1.jpg';
import img2 from '../assets/Rawat Band Ghodi Baggi.jpg';
import img3 from '../assets/Utranchal Rawat Band5.jpg';
import img4 from '../assets/Utranchal Rawat Band2.jpg';
import img5 from '../assets/Utranchal Rawat Band6.jpg';
import img6 from '../assets/Utranchal Rawat Band3.jpg';
import logo from '../assets/URB Utranchal Rawat band 1.png';
import { Link } from 'react-router-dom';
import RoyalPackageCarousel from './RoyalPackageCarousel';
import ShortVideo from './ShortVideo';

const bgImages = [img1, img2, img3, img4, img5, img6];

const Home_GSAP = () => {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Swiper */}
        <div className="absolute inset-0 -z-10">                                                           
          <Swiper
            modules={[Autoplay]}
            effect="slide"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            loop
            allowTouchMove={true}
            className="w-full h-full"
          >
            {bgImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${src})` }}
                >
                  <div className="w-full h-full bg-black/40" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Hero Content */}
        <div
          className="relative z-50 flex flex-col items-center justify-center h-full text-center "
          style={{ position: 'relative', zIndex: 50 }}
        >
          {/* Logo with Animated Sound Waves */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2 pb-2 relative flex items-center justify-center gap-4"
          >
            {/* Logo */}
            <div className="border-b-4 border-white pb-2">
              <img src={logo} alt="Logo" className="w-40 md:w-52 h-auto" />
            </div>

            {/* Right Sound Waves */}
            <div className="flex items-center gap-1.5">
              {[0.2, 0.6, 0.4, 0.7].map((delay, i) => (
                <motion.div
                  key={`right-${i}`}
                  className="w-1 md:w-1.5 bg-white rounded-full mb-10 mr-2"
                  animate={{
                    height: ['20px', '50px', '20px'],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: delay,
                  }}
                  style={{
                    boxShadow: '0 0 8px rgba(255,255,255,0.6)',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] mb-2 font-bold"
            style={{
              color: '#ffffff',
              textShadow: '0 2px 10px rgba(0,0,0,0.9)',
            }}
          >
            Uttaranchal Rawat Band - Where Celebrations Come Alive
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl md:text-6xl lg:text-7xl xl:text-7xl font-serif font-normal leading-[1.1] mb-2 max-w-6xl uppercase"
            style={{
              color: '#ffffff',
              textShadow: '0 4px 16px rgba(0,0,0,0.9)',
            }}
          >
            Baraat Ki Dhadkan
            <br />
            Shaadi Ki Shaan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[11px] md:text-[16px] capitalize mb-4"
            style={{
              color: '#ffffff',
              textShadow: '0 2px 10px rgba(0,0,0,0.9)',
            }}
          >
            Professional Band Baja, Ghodi & Baggi Booking Services in Delhi NCR
            Making Your Wedding Baraat Truly Royal
          </motion.p>

          {/* CTA Button */}
          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="transition-colors duration-200 bg-transparent px-8 py-2 cursor-pointer text-white uppercase border-2 border-white text-sm font-medium tracking-wide hover:bg-gradient-to-r hover:from-[#D33230] hover:via-[#FD8F04] hover:to-[#D33230]"
            > book now
            </motion.button>
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-2 bg-white/70 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <BookingForm />
      <HotelFeatures />
      <RoomsSuites />
      <HotelFacilities />
      <PromoVideo />
      <FacilitiesShowcase />
      <RoyalPackageCarousel />
      <Testimonials />
      <TeamSection />
      <ShortVideo />
      <BookingSection />
    </>
  );
};

export default Home_GSAP;
