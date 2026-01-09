import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/Utranchal Rawat Band1.jpg';

const PromoVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const youtubeVideoId = 'dQw4w9WgXcQ'; // Replace with actual YouTube video ID

  const openVideo = () => {
    setShowVideo(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setShowVideo(false);
    document.body.style.overflow = 'unset';
  };

  // Content animations
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
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
        ease: 'easeOut',
      },
    },
  };

  // Play button animations
  const playButtonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
  };

  // Modal animations
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const videoContainerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <section className="w-full h-[500px] relative overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${img1})`,
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          {/* Dark Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            className="text-center max-w-4xl px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
          >
            {/* Small Heading */}
            <motion.p
              className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-6"
              variants={childVariants}
            >
              Promotional Video
            </motion.p>

            {/* Main Heading */}
            <motion.h2
              className="text-white text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12"
              variants={childVariants}
            >
              Book Luxury Bands,
              <br />
              In Your Budget.
            </motion.h2>

            {/* Play Button */}
            <motion.button
              onClick={openVideo}
              className="group relative inline-flex items-center justify-center"
              variants={playButtonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Circular Border */}
              <motion.div
                className="w-24 h-24 rounded-full border-2 border-white/40 flex items-center justify-center relative z-10"
                whileHover={{
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  transition: { duration: 0.3 },
                }}
              >
                {/* Play Icon */}
                <motion.svg
                  className="w-8 h-8 text-[#C9A565] ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{
                    scale: 1.2,
                    color: '#FFFFFF',
                    transition: { duration: 0.3 },
                  }}
                >
                  <path d="M8 5v14l11-7z" />
                </motion.svg>
              </motion.div>

              {/* Animated Ring 1 */}
              <motion.div
                className="absolute w-24 h-24 rounded-full border-2 border-white/30"
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />

              {/* Animated Ring 2 */}
              <motion.div
                className="absolute w-24 h-24 rounded-full border-2 border-white/30"
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 0.7,
                }}
              />

              {/* Animated Ring 3 */}
              <motion.div
                className="absolute w-24 h-24 rounded-full border-2 border-white/30"
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 1.4,
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <motion.button
              onClick={closeVideo}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center group z-50"
              initial={{ opacity: 0, rotate: -90, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{
                scale: 1.1,
                rotate: 90,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Video Container */}
            <motion.div
              className="w-full max-w-5xl mx-6"
              variants={videoContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative pt-[56.25%]">
                {/* 16:9 Aspect Ratio */}
                <motion.iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                  src={`https://www.youtube.com/embed/72w8ha1tpoA?si=KLD09OuE17bCW7G9`}
                  title="Promotional Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Click Outside to Close */}
            <motion.div
              className="absolute inset-0 -z-10"
              onClick={closeVideo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PromoVideo;
