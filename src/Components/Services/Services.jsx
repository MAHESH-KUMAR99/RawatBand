import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductShowcase from '../ProductShowcase';
import img15 from '../../assets/Utranchal Rawat Band Baraat.jpg';

const ElementsPage = () => {
  const [checkIn, setCheckIn] = useState('20 June, 2023');
  const [checkOut, setCheckOut] = useState('20 June, 2023');
  const [room, setRoom] = useState('Standard Room Size');

  // Counters
  const [projects, setProjects] = useState(0);
  const [people, setPeople] = useState(0);
  const [years, setYears] = useState(0);
  const [awards, setAwards] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 },
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let projectStep = 0;
    const pInt = setInterval(() => {
      projectStep++;
      setProjects(Math.floor((20 * projectStep) / steps));
      if (projectStep >= steps) clearInterval(pInt);
    }, interval);

    let peopleStep = 0;
    const peInt = setInterval(() => {
      peopleStep++;
      setPeople(Math.floor((10 * peopleStep) / steps));
      if (peopleStep >= steps) clearInterval(peInt);
    }, interval);

    let yearsStep = 0;
    const yInt = setInterval(() => {
      yearsStep++;
      setYears(Math.floor((40 * yearsStep) / steps));
      if (yearsStep >= steps) clearInterval(yInt);
    }, interval);

    let awardsStep = 0;
    const aInt = setInterval(() => {
      awardsStep++;
      setAwards(Math.floor((30 * awardsStep) / steps));
      if (awardsStep >= steps) clearInterval(aInt);
    }, interval);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${img15})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0 bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 sm:px-6 mt-6 sm:mt-8">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our Services
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="/"
              className="hover:text-[#C9A565] transition-colors duration-300"
            >
              Home
            </a>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-[#C9A565]">Our Services</span>
          </motion.div>
        </div>
      </section>

      {/* Yahan agar stats section use karna ho to statsRef ka wrapper add kar sakte ho */}

      <ProductShowcase />
    </>
  );
};

export default ElementsPage;
