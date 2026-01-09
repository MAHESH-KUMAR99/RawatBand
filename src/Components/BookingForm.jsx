import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- CUSTOM HOOK FOR COUNTING ANIMATION ---
const useCounterAnimation = (targetValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const target = parseInt(targetValue.replace(/[^0-9]/g, ''), 10);
  const suffix = targetValue.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isNaN(target)) return;

    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;

      const currentCount = Math.min(
        target,
        Math.floor((progress / duration) * target),
      );
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(step);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [target, duration]);

  return `${count}${suffix}`;
};

const statisticsData = [
  { number: '1200+', description: 'Happy Weddings Celebrated' },
  { number: '20', description: 'Years of Experience' },
  { number: '98%', description: 'Customer Satisfaction' },
  { number: '18+', description: 'Unique Services Available' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const BookingForm = () => {
  return (
    <motion.section
      className="w-full py-0 sm:py-0"
      style={{ backgroundColor: '#F8F8F8' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="booking-shine-wrapper px-4 sm:px-6 lg:px-12 bg-[#E6E6E6]">
        {/* Mobile: column, Desktop: row */}
        <motion.div
          className="flex flex-col md:flex-row md:flex-nowrap justify-center items-stretch gap-4 md:gap-0"
          variants={containerVariants}
        >
          {/* Title block */}
          <motion.div
            key="title-card"
            className="w-full md:w-auto px-3 py-3 sm:px-6 sm:py-4 flex flex-col items-center md:items-start justify-center text-center md:text-left md:border-r border-gray-200 md:flex-[2_0_0]"
            variants={itemVariants}
          >
            <p className="text-lg sm:text-3xl lg:text-4xl font-extrabold text-gray-900 uppercase tracking-tight leading-tight font-serif">
              <span className="text-black font-serif">OUR</span> IMPACT
            </p>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 mt-1 font-medium leading-snug font-serif">
              A Legacy of Grand Celebrations
            </p>
          </motion.div>

          {/* Stats */}
          <div className="w-full md:flex-[3_0_0]">
            {/* Mobile: 2‑column grid, Tablet+: flex row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:flex-nowrap">
              {statisticsData.map((stat, index) => (
                <StatCard
                  key={index}
                  stat={stat}
                  isLast={index === statisticsData.length - 1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const StatCard = ({ stat, isLast }) => {
  const animatedNumber = useCounterAnimation(stat.number);

  return (
    <motion.div
      className={`px-2 py-3 sm:px-4 sm:py-4 flex flex-col items-center justify-center text-center 
        transition-all duration-300 transform flex-1 min-w-[120px] 
        ${!isLast ? 'md:border-r border-gray-200' : ''}`}
      variants={itemVariants}
      whileHover="hover"
    >
      <p
        className="text-base sm:text-2xl lg:text-3xl font-black mb-1 leading-tight
        text-transparent bg-clip-text bg-black"
      >
        {animatedNumber}
      </p>

      <p className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-700 font-semibold tracking-wide leading-snug uppercase">
        {stat.description}
      </p>
    </motion.div>
  );
};

export default BookingForm;
