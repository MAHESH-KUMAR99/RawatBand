import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for client-side navigation

import img1 from "../assets/ghodi5.jpg";
import img2 from "../assets/Utranchal Rawat Band2.jpg";
import img3 from "../assets/Utranchal Rawat Band3.jpg";
import img4 from "../assets/Naasik1.jpg";
import img5 from "../assets/band1.jpg";
import img6 from "../assets/punjabi6.jpg";

const RoomsSuites = () => {
  const rooms = [
    {
      id: 1,
      name: "Nashik Dhol",
      image: img4,
      span: "col-span-1",
      url: "/nasikdhol",
    },
    {
      id: 2,
      name: "Band Musicians",
      image: img5,
      span: "col-span-1",
      url: "/BandMusicians",
    },
    {
      id: 3,
      name: "Luxury Ghodi & Baggi",
      image: img1,
      span: "col-span-1",
      url: "/GhodiDecorated",
    },

    {
      id: 4,
      name: "Punjabi Band",
      image: img6,
      span: "col-span-1 lg:col-span-2",
      url: "/PunjabiDhol",
    },
    {
      id: 5,
      name: "Vinatge Car",
      image: img2,
      span: "col-span-1",
      url: "/vintagecar",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "rgba(0, 0, 0, 1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="w-full bg-[#F5F3EF] py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
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
              uttranchal Rawat Band
            </motion.p>
            <motion.span
              className="w-12 h-[1px] bg-[#C9A565]"
              variants={lineVariants}
            />
          </div>
          <motion.h2
            className="text-4xl lg:text-5xl font-serif text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Luxury Facilities
          </motion.h2>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className={`relative group overflow-hidden cursor-pointer ${room.span} h-[380px]`}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Room Image */}
              <motion.img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Dark Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/30"
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                transition={{ duration: 0.5 }}
              />

              {/* Room Info - Bottom Right */}
              <motion.div
                className="absolute bottom-8 right-8 text-right"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-white text-2xl lg:text-3xl font-serif mb-1"
                  whileHover={{ scale: 1.05, color: "#C9A565" }}
                  transition={{ duration: 0.3 }}
                >
                  {room.name}
                </motion.h3>
                <motion.p
                  className="text-white/90 text-sm tracking-wider"
                  whileHover={{ scale: 1.05, color: "#C9A565" }}
                  transition={{ duration: 0.3 }}
                >
                  {room.price}{" "}
                  <span className="text-xs">{room.price && "/ NIGHT"}</span>
                </motion.p>
              </motion.div>

              {/* Hover Effect - View Details Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link to={room.url}>
                  <motion.button
                    className="transition-colors duration-200 bg-transparent px-8 py-2 cursor-pointer text-white uppercase border-2 border-white text-sm font-medium tracking-wide hover:bg-gradient-to-r hover:from-[#D33230] hover:via-[#FD8F04] hover:to-[#D33230] hover:text-white"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </Link>
              </motion.div>

              {/* Shine Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RoomsSuites;
