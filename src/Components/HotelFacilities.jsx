import React from "react";
import { Wifi, Car } from "lucide-react";
import { motion } from "framer-motion";
import icon1 from "../assets/Nashik Dhol .svg";
import icon2 from "../assets/Punjabi Dhol.svg";
import icon3 from "../assets/Punjabi Dhol.png";
import icon4 from "../assets/Band Musicians with Uniforms.svg";
import icon5 from "../assets/Bagpipes Band.svg";
import icon6 from "../assets/Rajstani band.svg";
import icon7 from "../assets/Ghodi baggi.svg";
import icon8 from "../assets/Vintage Car for Wedding.svg";
import icon9 from "../assets/Palki.svg";
import { Link } from "react-router-dom";

const HotelFacilities = () => {
  const facilities = [
    {
      id: 1,
      icon: icon1,
      title: "Naasik Dhol",
      description:
        "Experience the thunder and energy of authentic Nashik Dhol Taasha performances. Perfect for making your wedding or event truly grand",
      url: "/nasikdhol",
    },
    {
      id: 2,
      icon: icon2,
      title: "Only Dhol",
      description:
        "Bring electrifying energy to your events with our professional Punjabi dhol team! Perfect for weddings, baraat, parties, and all grand celebrations",
      url: "/onlydhol", // Changed URL for demonstration
    },
    {
      id: 3,
      icon: icon3,
      title: "Punjabi Dhol",
      description:
        "Bring home the magic of real Punjabi dhol! Loud, energetic, and always entertaining—Uttranchal Rawat Band makes your special day unforgettable.",
      url: "/punjabiDhol", // Changed URL for demonstration
    },
    {
      id: 4,
      icon: icon4,
      title: "Band Musicians with Uniforms",
      description:
        "Give your celebration a majestic melody with our professional band musicians in exclusive ceremonial uniforms",
      url: "/bandmusicians",
    },
    {
      id: 5,
      icon: icon5,
      title: "Bagpipes Band",
      description:
        "Give your celebrations a majestic essence with our elegant Bagpipes Band. Perfect for royal weddings, spectacular entries, and prestigious events",
      url: "/Backpipe",
    },
    {
      id: 6,
      icon: icon6,
      title: "Rajasthani Band",
      description:
        "Experience the magical charm of Rajasthan at your event with our authentic Rajasthani band performances!",
      url: "/rajisthaniBand",
    },
    {
      id: 7,
      icon: icon7,
      title: "Ghodi Baggi",
      description:
        "Make your wedding entry majestic and unforgettable with our premium decorated baggi service!",
      url: "BuggiDecorated",
    },
    {
      id: 8,
      icon: icon8,
      title: "Vintage Car ",
      description:
        "Make your special day unforgettable with a luxurious vintage car entry. Royal style for premium weddings and celebrations!",
      url: "/vintagecar",
    },
    {
      id: 9,
      icon: icon9,
      title: "Palki & Doli",
      description:
        "Celebrate tradition and elegance with our beautiful palki and doli bookings for a royal bridal entry",
      url: "/Palki&Doli",
    },
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // Header animations
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Line animation
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="w-full bg-white py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Watermark - Hotel Building Outline */}
      <motion.div
        className="absolute left-0 bottom-0 opacity-[0.03] w-[600px] h-[600px]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.03, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <svg
          viewBox="0 0 200 200"
          fill="currentColor"
          className="text-gray-400"
        >
          <rect
            x="40"
            y="20"
            width="120"
            height="160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="40"
            x2="160"
            y2="40"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="60"
            x2="160"
            y2="60"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="80"
            x2="160"
            y2="80"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="100"
            x2="160"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="120"
            x2="160"
            y2="120"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="140"
            x2="160"
            y2="140"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="160"
            x2="160"
            y2="160"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="60"
            y1="20"
            x2="60"
            y2="180"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="80"
            y1="20"
            x2="80"
            y2="180"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="120"
            y1="20"
            x2="120"
            y2="180"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="140"
            y1="20"
            x2="140"
            y2="180"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          {/* Small Heading with Decorative Lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.span
              className="w-12 h-[1px] bg-[#C9A565]"
              variants={lineVariants}
            />
            <motion.p
              className="text-[11px] uppercase tracking-[0.25em] text-gray-600"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.p>
            <motion.span
              className="w-12 h-[1px] bg-[#C9A565]"
              variants={lineVariants}
            />
          </div>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl lg:text-5xl font-serif text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Premium Wedding Services
          </motion.h2>
        </motion.div>

        {/* Facilities Grid with Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {facilities.map((facility) => (
            // FIX: Wrap each individual facility card with Link
            <Link to={facility.url} key={facility.id}>
              <motion.div
                className="group cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="relative bg-gray-50 p-12 text-center h-full overflow-hidden"
                  initial={{ backgroundColor: "#F9FAFB" }}
                  variants={{
                    hover: {
                      backgroundColor: "#2A2A2A",
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#C9A565]/20 to-transparent"
                    variants={{
                      hover: { opacity: 1, scale: 1.5 },
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Icon Using Imported Images */}
                  <motion.div
                    className="flex justify-center mb-6 relative z-10"
                    variants={{
                      hover: {
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.7, ease: "easeInOut" },
                      },
                    }}
                  >
                    <img
                      src={facility.icon}
                      alt={facility.title}
                      className="w-20 h-20 object-contain"
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-serif text-gray-900 mb-4 relative z-10"
                    variants={{
                      hover: { color: "#FFFFFF", scale: 1.05 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {facility.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 text-sm leading-relaxed relative z-10"
                    variants={{
                      hover: { color: "#D1D5DB" },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {facility.description}
                  </motion.p>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-[#C9A565]"
                    initial={{ width: "0%" }}
                    variants={{
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HotelFacilities;
