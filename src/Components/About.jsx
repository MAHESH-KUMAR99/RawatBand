import React, { useState, useEffect } from "react";
import { ChevronRight, Phone } from "lucide-react";
import About2 from "../assets/Rawat band Back Burari.jpg";
import shop from "../assets/Uttranchal Rawat Band shop.jpg";
import umbrella from "../assets/Utranchal Rawat Band Umbrella-Lights.png";
import vintage from "../../src/assets/vintage6.jpg";
import punjabi from "../../src/assets/punjabi1.jpg";
import ghodi from "../assets/ghodi5.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import bgImg from "../assets/1 vector.svg";
import icon1 from "../assets/2 Drum vector.svg";
import emailjs from "@emailjs/browser";
import icon2 from "../assets/2 Tuba vector.svg";

const About = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const shortText =
    "Since 2005, we have made thousands of baraats and receptions across Delhi-NCR unforgettable with live music, powerful dhol beats, and a royal presentation. Our focus is simple: blend tradition with modern style so every entry, turn, and finale feels iconic.";

  const fullText =
    "Since 2005, we have made thousands of baraats and receptions across Delhi-NCR unforgettable with live music, powerful dhol beats, and a royal presentation. Our focus is simple: blend tradition with modern style so every entry, turn, and finale feels iconic. Based in Burari, our disciplined team is known for precise formations, curated playlists, premium maroon-and-gold uniforms, and clean execution. Whether you need Dhol, Nashik Dhol, Bagpipe Band, Punjabi Dhol, Palki–Doli, Chattar Umbrella, Vintage Car, Light Lamps, or Ghodi–Baggi, we coordinate everything seamlessly under one roof.";

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

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
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
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    emailjs.init("RV2o9yJY7WLn1hHM8");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await emailjs.send(
        "service_j95rz85",
        "template_s4qyanm",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          phone: formData.phone,
          message: formData.message,
          to_name: "Rawat Band",
        },
        "RV2o9yJY7WLn1hHM8"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[480px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${umbrella})`,
            backgroundPosition: "center",
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 sm:px-6 mt-8 sm:mt-12 md:mt-16">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About us
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
            <span className="text-[#C9A565]">About</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="min-h-screen bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Section - Images */}
          <div className="hidden lg:flex relative items-center justify-center p-6 xl:p-10">
            <div className="relative w-full max-w-2xl">
              <div className="absolute w-[300px] h-[300px] xl:w-[520px] xl:h-[520px] rounded-full bg-gray-100 -bottom-1 left-[-10%] z-0"></div>

              <div className="absolute w-6 h-40 xl:h-60 bg-gradient-to-r from-[#D33230] via-[#FD8F04] to-[#D33230] top-0 left-0 z-10 ml-[80px] xl:ml-[120px]"></div>

              <div className="relative z-20 ml-20 xl:ml-40">
                <div className="relative h-[400px] w-[300px] xl:h-[640px] xl:w-[480px] overflow-hidden">
                  <img
                    src={shop}
                    alt="Band Shop"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex gap-4 mt-6 lg:absolute lg:-bottom-8 lg:-right-20 lg:mt-0">
                  <div className="w-[200px] h-[180px] xl:w-[360px] xl:h-[320px] overflow-hidden border-8 xl:border-[20px] border-white shadow-lg">
                    <img
                      src={About2}
                      alt="Band Back"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <motion.div
            className="relative flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-20"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.img
              src={bgImg}
              alt="Decorative Golden Bar"
              className="absolute -right-[-10%] top-[5%] w-80 h-80 hidden xl:block"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            />

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

            <motion.h2
              className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6 font-bold uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              About The <br /> Uttranchal <br /> Rawat Band
            </motion.h2>

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
                  {isExpanded ? "Read Less" : "Read More"}
                </motion.button>
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-8 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
                    alt="Band Icon"
                    className="w-full h-[60px] object-cover"
                  />
                </motion.div>
                <div>
                  <h4 className="text-lg font-serif text-gray-900 mb-1">
                    The Best
                  </h4>
                  <p className="text-gray-600 text-sm">Performance</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-8 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
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
                    ease: "easeInOut",
                  }}
                >
                  <Phone className="w-5 h-5 text-[#B50202]" />
                </motion.div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    Booking Now
                  </p>
                  <p className="text-xl font-serif text-gray-900">8285110729</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      <section>
        <div className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Left Section - Video */}
              <div className="relative">
                <div
                  className="relative w-full flex items-center justify-center bg-cover bg-center min-h-[300px] sm:min-h-[400px]"
                  style={{ backgroundImage: `url(${umbrella})` }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>

                  <div
                    className="relative w-[90%] max-w-4xl my-6 sm:my-10"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    {!playVideo ? (
                      <>
                        <img
                          src={umbrella}
                          alt="Video Thumbnail"
                          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-2xl cursor-pointer"
                          onClick={() => setPlayVideo(true)}
                        />

                        <div
                          className="absolute inset-0 flex items-center justify-center cursor-pointer"
                          onClick={() => setPlayVideo(true)}
                        >
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C9A565]/90 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 shadow-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="white"
                              viewBox="0 0 24 24"
                              className="w-8 h-8 sm:w-10 sm:h-10 ml-1"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : (
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                        src="https://www.youtube.com/embed/72w8ha1tpoA?autoplay=1&rel=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-0 mt-4 sm:mt-0">
                  <div className="w-full h-[150px] sm:h-[200px]">
                    <img
                      src={vintage}
                      alt="Band Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-amber-600 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center h-[150px] sm:h-[200px]">
                    <div className="mb-2 sm:mb-4">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          d="M35 20 Q30 15 30 25 Q30 30 35 30 Q40 30 40 25 Q40 15 35 20 M20 20 Q15 15 15 25 Q15 30 20 30 Q25 30 25 25 Q25 15 20 20"
                          stroke="#3d2817"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <p className="text-white text-xs sm:text-sm leading-relaxed font-light">
                      Excellence in every beat, tradition in every performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section - Content */}
              <div className="flex flex-col justify-start pt-0 lg:pt-8">
                <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs tracking-widest text-gray-500 mb-4 sm:mb-6 font-light">
                  <span>MUSIC THAT MOVES YOU 💃</span>
                  <svg
                    className="w-6 h-2 sm:w-8 sm:h-3"
                    viewBox="0 0 30 12"
                    fill="none"
                  >
                    <path
                      d="M1 6C1 6 5 1 10 1C15 1 15 6 20 6C25 6 29 1 29 1"
                      stroke="#b89968"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M1 11C1 11 5 6 10 6C15 6 15 11 20 11C25 11 29 6 29 6"
                      stroke="#b89968"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight text-gray-800 mb-4 sm:mb-6">
                  Feel the Beat,
                  <br />
                  Live the Rhythm
                </h2>

                <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 md:mb-10 text-xs sm:text-sm">
                  Experience the heartbeat of celebration with the timeless
                  power of the dhol. Every beat carries the spirit of joy,
                  culture, and unity — a rhythm that connects generations. From
                  royal weddings to dazzling festivals, our passionate dhol
                  masters blend tradition and modern energy to create an
                  atmosphere so alive, your heart can't help but move to the
                  music.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-x-12 md:gap-y-8 mb-6 sm:mb-8 md:mb-10">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif text-gray-800 mb-3 sm:mb-4">
                      Live Dhol Performances
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="12"
                              height="12"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                            <path
                              d="M5 8 L7 10 L11 6"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          Traditional Punjabi Vibes
                        </span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="12"
                              height="12"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                            <path
                              d="M5 8 L7 10 L11 6"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          Customized Event Performances
                        </span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="12"
                              height="12"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                            <path
                              d="M5 8 L7 10 L11 6"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          Professional Dhol Team
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-serif text-gray-800 mb-3 sm:mb-4">
                      Cultural Beats & Fusion Shows
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="12"
                              height="12"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                            <path
                              d="M5 8 L7 10 L11 6"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          Bhangra & Dhol Workshops
                        </span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="12"
                              height="12"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                            <path
                              d="M5 8 L7 10 L11 6"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          Wedding & Baraat Dhol
                        </span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="12"
                              height="12"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                            <path
                              d="M5 8 L7 10 L11 6"
                              stroke="#b89968"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          Corporate & Stage Performances
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="h-[120px] sm:h-[150px] md:h-[180px] overflow-hidden rounded">
                    <img
                      src={ghodi}
                      alt="Performance 1"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="h-[120px] sm:h-[150px] md:h-[180px] overflow-hidden rounded">
                    <img
                      src={punjabi}
                      alt="Performance 2"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section>
        <div className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
              {/* Left Section - Call to Action */}
              <div>
                <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs tracking-widest text-gray-500 mb-4 sm:mb-6 font-light">
                  <span>CALL TO ACTION</span>
                  <svg
                    className="w-6 h-2 sm:w-8 sm:h-3"
                    viewBox="0 0 30 12"
                    fill="none"
                  >
                    <path
                      d="M1 6C1 6 5 1 10 1C15 1 15 6 20 6C25 6 29 1 29 1"
                      stroke="#b89968"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M1 11C1 11 5 6 10 6C15 6 15 11 20 11C25 11 29 6 29 6"
                      stroke="#b89968"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif leading-tight text-gray-800 mb-8 sm:mb-10 md:mb-12">
                  BOOK THE BAND
                </h2>

                <div className="space-y-6 sm:space-y-8 md:space-y-10 mb-8 sm:mb-10 md:mb-12">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                        viewBox="0 0 60 60"
                        fill="none"
                        stroke="#b89968"
                        strokeWidth="1.5"
                      >
                        <path d="M15 25 L45 25 M20 25 L20 15 L40 15 L40 25 M15 25 L10 35 L50 35 L45 25 M10 35 L10 45 L50 45 L50 35 M15 40 L15 45 M45 40 L45 45" />
                        <circle cx="18" cy="48" r="3" />
                        <circle cx="42" cy="48" r="3" />
                        <ellipse cx="30" cy="20" rx="8" ry="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800 mb-1 sm:mb-2">
                        Full Event Logistics
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        Our professional team manages setup, timing, and smooth
                        coordination for every show.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                        viewBox="0 0 60 60"
                        fill="none"
                        stroke="#b89968"
                        strokeWidth="1.5"
                      >
                        <rect x="10" y="20" width="40" height="25" rx="2" />
                        <path d="M15 20 L15 15 L20 15 L20 20 M25 20 L25 12 L30 12 L30 20 M35 20 L35 15 L40 15 L40 20 M45 20 L45 18 L48 18 L48 20" />
                        <line x1="20" y1="30" x2="40" y2="30" />
                        <line x1="20" y1="35" x2="35" y2="35" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800 mb-1 sm:mb-2">
                        Professional Presentation
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        Royal uniforms, elegant movements, and flawless drumming
                        define our perfect band style.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                        viewBox="0 0 60 60"
                        fill="none"
                        stroke="#b89968"
                        strokeWidth="1.5"
                      >
                        <path d="M5 30 Q10 25 15 30 T25 30 T35 30 T45 30 T55 30" />
                        <path d="M5 37 Q10 32 15 37 T25 37 T35 37 T45 37 T55 37" />
                        <rect x="25" y="15" width="10" height="12" />
                        <line x1="30" y1="15" x2="30" y2="10" />
                        <line x1="27" y1="10" x2="33" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800 mb-1 sm:mb-2">
                        Custom Shows & Workshops
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        Experience vibrant Bhangra beats, cultural rhythms, and
                        personalized live fusion performances.
                      </p>
                    </div>
                  </div>
                </div>

                <Link to="/Services">
                  <button className="bg-gradient-to-r from-[#D33230] via-[#FD8F04] to-[#D33230] text-white px-8 sm:px-10 py-3 sm:py-4 text-[10px] sm:text-xs tracking-widest transition-all hover:opacity-90 w-full sm:w-auto">
                    BOOK A BAND
                  </button>
                </Link>
              </div>

              {/* Right Section - Booking Form */}
              <div className="w-full bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-4 border-amber-600">
                <div className="mb-10 text-center">
                  <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase block mb-2">
                    Get in Touch
                  </span>
                  <h2 className="text-3xl font-serif text-gray-900">
                    Send Us a Message
                  </h2>
                </div>

                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 p-4 bg-green-50 text-green-700 border-l-4 border-green-500 text-sm"
                    >
                      ✓ Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 p-4 bg-red-50 text-red-700 border-l-4 border-red-500 text-sm"
                    >
                      ✗ Oops! Something went wrong.
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-amber-600 outline-none transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-amber-600 outline-none transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-amber-600 outline-none transition-all"
                    />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Subject"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-amber-600 outline-none transition-all"
                    />
                  </div>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Your Message..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-amber-600 outline-none transition-all resize-none"
                  ></textarea>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gray-900 text-white font-bold tracking-[0.2em] uppercase text-xs hover:bg-amber-600 transition-colors disabled:bg-gray-400 shadow-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
