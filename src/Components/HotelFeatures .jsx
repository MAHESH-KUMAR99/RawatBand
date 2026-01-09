import React, { useState } from 'react';
import { Play, Waves, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/Rawat Band Ghodi Baggi.jpg';
import jbh from '../assets/band1.jpg';
import jbh2 from '../assets/vintage6.jpg';
import img2 from '../assets/Uttranchal Rawat Band burari .jpg';
import icon1 from '../assets/2 Drum vector.svg';
import icon2 from '../assets/2 Tuba vector.svg';
import bgImg from '../assets/1 vector.svg';
import { Link } from 'react-router-dom';

const HotelFeatures = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText =
    'Since 2005, we have made thousands of baraats and receptions across Delhi-NCR unforgettable with live music, powerful dhol beats, and a royal presentation. Our focus is simple: blend tradition with modern style so every entry, turn, and finale feels iconic.';

  const fullText =
    'Since 2005, we have made thousands of baraats and receptions across Delhi-NCR unforgettable with live music, powerful dhol beats, and a royal presentation. Our focus is simple: blend tradition with modern style so every entry, turn, and finale feels iconic. Based in Burari, our disciplined team is known for precise formations, curated playlists, premium maroon-and-gold uniforms, and clean execution. Whether you need Dhol, Nashik Dhol, Bagpipe Band, Punjabi Dhol, Palki–Doli, Chattar Umbrella, Vintage Car, Light Lamps, or Ghodi–Baggi, we coordinate everything seamlessly under one roof.';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const smallImageVariants = {
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

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const playButtonVariants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <>
      <motion.section
        className="w-full bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image Gallery */}
            <motion.div className="relative" variants={imageVariants}>
              <div className="grid grid-cols-2 gap-4">
                {/* Main Large Image */}
                <motion.div
                  className="col-span-2 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={img2}
                    alt="Luxury Room"
                    className="w-full h-[400px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Video Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 bg-white flex items-center justify-center cursor-pointer"
                      variants={playButtonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => setIsModalOpen(true)}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(201, 165, 101, 0.7)',
                          '0 0 0 20px rgba(201, 165, 101, 0)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    >
                      <Play className="w-8 h-8 text-[#B50202]  fill-[#B50202]" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Bottom Two Small Images */}
                <motion.div
                  className="relative overflow-hidden"
                  variants={smallImageVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={jbh}
                    alt="Hotel Interior"
                    className="w-full h-[200px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
                <motion.div
                  className="relative overflow-hidden"
                  variants={smallImageVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={jbh2}
                    alt="Hotel Restaurant"
                    className="w-full h-[200px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </div>

              {/* Decorative Golden Bar - Left Side (remains div) */}
              <motion.div
                className="absolute -left-4 top-20 w-8 h-40 bg-[#B50202]"
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div className="relative" variants={contentVariants}>
              {/* Decorative Image Bar - Right Side */}
              <motion.img
                src={bgImg}
                alt="Decorative Golden Bar"
                className="absolute -right-[2%] top-[-15%] w-80 h-80 hidden xl:block"
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              />

              {/* Small Heading */}
              <motion.p
                className="text-[11px] uppercase tracking-[0.25em] text-gray-600 mb-4 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-[#B50202]">━</span>
                Tradition Energy Elegance
                <span className="text-[#B50202]">━</span>
              </motion.p>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6 font-bold uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                About The <br /> Uttranchal <br /> Rawat Band
              </motion.h2>

              {/* Description with Read More/Less */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {isExpanded ? fullText : shortText}
                  <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#C9A565] ml-2 font-medium hover:text-[#8C6104] transition-colors inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </motion.button>
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                className="grid grid-cols-2 gap-8 mb-10"
                variants={containerVariants}
              >
                <motion.div
                  className="flex items-start gap-4"
                  variants={featureVariants}
                  whileHover="hover"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={icon1}
                      alt="Lighting Icon"
                      className="w-full h-[60px] object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-serif text-gray-900 mb-1">
                      The Best
                    </h4>
                    <p className="text-gray-600 text-sm">Lighting</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  variants={featureVariants}
                  whileHover="hover"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={icon2}
                      alt="Lighting Icon"
                      className="w-full h-[60px] object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-serif text-gray-900 mb-1">
                      The Best
                    </h4>
                    <p className="text-gray-600 text-sm">Swimming</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Section */}
              <motion.div
                className="flex items-center gap-8 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link to="/Services">
                   
                </Link>

                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Phone className="w-5 h-5 text-[#B50202]" />
                  </motion.div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Booking Now
                    </p>
                    <p className="text-xl font-serif text-gray-900">
                      8285110729
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-[#C9A565] transition-colors z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-8 h-8" />
              </motion.button>

              {/* YouTube Video Container */}
              <div
                className="relative w-full"
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                  src="https://www.youtube.com/embed/72w8ha1tpoA?si=rllXWTvvZlwLz4nl"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HotelFeatures;
