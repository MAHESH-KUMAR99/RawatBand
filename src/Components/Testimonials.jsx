import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Imgs from '../assets/qwedhh.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import User1 from '../assets/user1.jpg';
import User2 from '../assets/user2.jpg';
import User3 from '../assets/user3.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rohit Malhotra',
      role: 'Wedding Baraat Review',
      image:
        User1,
      rating: 5,
      review:
        'I have never seen a band with such incredible energy! The moment they started playing, the whole baraat came alive. Their music, coordination, and enthusiasm made my brother’s wedding feel truly royal. Highly professional and unbelievably good!',
    },
    {
      id: 2,
      name: 'Pooja Sharma',
      role: 'Family Review',
      image:
        User3,
      rating: 5,
      review:
        'Outstanding performance! The band added the perfect blend of tradition and modern beats. Everyone was dancing, smiling, and enjoying every single moment. They handled everything so smoothly and made our special day even more unforgettable.',
    },
    {
      id: 3,
      name: 'Aditya Verma',
      role: 'Groom Review',
      image:
       User2,
      rating: 5,
      review:
        'From the dhol to the brass section, everything was top-notch! My entry on the Ghodi felt grand, royal, and full of life because of their music and coordination. If you want a band that truly elevates your wedding, this is the one. Absolutely',
    },
  ];

  // Header animations
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Content animations
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="w-full relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Imgs})`,
        }}
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Golden/Brown Overlay */}
        <motion.div
          className="absolute inset-0 bg-[#B8935A]/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 py-24">
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={headerVariants}>
            <motion.p
              className="text-[11px] uppercase tracking-[0.25em] text-white/80 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              What Says For Customer
            </motion.p>
            <motion.h2
              className="text-4xl lg:text-5xl font-serif text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Client's Say?
            </motion.h2>
          </motion.div>

          {/* Swiper Slider */}
          <motion.div
            className="max-w-5xl mx-auto relative"
            variants={contentVariants}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination-custom',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    className="flex flex-col md:flex-row items-center gap-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Customer Image */}
                    <motion.div
                      className="flex-shrink-0"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <motion.div
                        className="w-48 h-48 rounded-sm overflow-hidden shadow-xl"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Review Content */}
                    <motion.div
                      className="flex-1 text-center md:text-left"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-6 justify-center md:justify-start">
                        {[...Array(testimonial.rating)].map((_, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.4 + index * 0.1,
                              duration: 0.3,
                            }}
                          >
                            <Star className="w-5 h-5 fill-white text-white" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Review Text */}
                      <motion.p
                        className="text-white text-lg leading-relaxed mb-8 font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        {testimonial.review}
                      </motion.p>

                      {/* Customer Name & Role */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <h4 className="text-white text-2xl font-serif mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/70 text-sm uppercase tracking-wider">
                          {testimonial.role}
                        </p>
                      </motion.div>

                      {/* Quote Icon */}
                      <motion.div
                        className="absolute bottom-20 right-8 hidden lg:block"
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                      >
                        <svg
                          className="w-24 h-24 text-white/10"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <motion.div
              className="flex items-center justify-center gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.button
                className="swiper-button-prev-custom w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center transition-all duration-300 group"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>

              {/* Custom Pagination */}
              <div className="swiper-pagination-custom flex gap-2"></div>

              <motion.button
                className="swiper-button-next-custom w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center transition-all duration-300 group"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
