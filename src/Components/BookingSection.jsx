import React, { useState } from "react";
import { Phone, User, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import img1 from "../assets/Contact.jpg";

const BookingSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !phone) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    // EmailJS configuration
    const serviceID = "service_j95rz85";
    const templateID = "template_s4qyanm";
    const publicKey = "YOUR_PUBLIC_KEY_HERE"; // Dashboard se correct public key paste karein

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: name,
          from_email: email || "Not provided",
          phone: phone,
          subject: "Band Booking Enquiry",
          message: message || "No additional message",
        },
        {
          publicKey: publicKey,
        }
      );

      console.log("Booking enquiry sent:", result);
      setSubmitStatus("success");

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      setTimeout(() => setSubmitStatus(""), 5000);
    } catch (error) {
      console.error("Booking enquiry failed:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const barVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="w-full relative overflow-hidden py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 xl:px-10 relative z-10">
        <motion.section
          className="w-full py-16 sm:py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="text-center mb-10 sm:mb-16"
              variants={headerVariants}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.span
                  className="w-10 sm:w-12 h-[1px] bg-[#C9A565] transform origin-right"
                  variants={lineVariants}
                />
                <motion.p className="text-[10px] sm:text-[11px] uppercase tracking-[0.20em] text-gray-600">
                  Your Baraat Today
                </motion.p>
                <motion.span
                  className="w-10 sm:w-12 h-[1px] bg-[#C9A565] transform origin-left"
                  variants={lineVariants}
                />
              </div>

              <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900">
                Fill in the form below and our team will confirm your booking at
                the earliest
              </motion.h2>
            </motion.div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Booking Form */}
          <motion.div
            className="bg-[#F5F3EF] p-8 relative h-full flex flex-col justify-between rounded-lg shadow-md"
            variants={formVariants}
          >
            <motion.div
              className="absolute top-0 left-8 w-16 h-2 bg-[#C9A565] -translate-y-full"
              variants={barVariants}
            />

            <motion.div className="mb-3" variants={fieldVariants}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                Contact for Booking
              </p>
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6"
              variants={fieldVariants}
            >
              Book Your Band
            </motion.h2>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Enquiry sent successfully! We'll contact you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ Please fill required fields (Name & Phone).
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-3 bg-white border border-gray-300 text-gray-700 text-sm focus:outline-none focus:border-[#C9A565] rounded"
                  placeholder="Your Name (Required)"
                  required
                  disabled={isSubmitting}
                />
                <User className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A565]" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 bg-white border border-gray-300 text-gray-700 text-sm focus:outline-none focus:border-[#C9A565] rounded"
                  placeholder="Your Email"
                  disabled={isSubmitting}
                />
                <Mail className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A565]" />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-5 py-3 bg-white border border-gray-300 text-gray-700 text-sm focus:outline-none focus:border-[#C9A565] rounded"
                  placeholder="Phone Number (Required)"
                  required
                  disabled={isSubmitting}
                />
                <Phone className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A565]" />
              </div>

              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  className="w-full px-5 py-3 bg-white border border-gray-300 text-gray-700 text-sm focus:outline-none focus:border-[#C9A565] rounded resize-none"
                  placeholder="Event Details / Message"
                  disabled={isSubmitting}
                ></textarea>
                <MessageSquare className="absolute right-5 top-5 w-5 h-5 text-[#C9A565]" />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2A2A2A] text-white py-3 text-sm uppercase tracking-wider rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                variants={fieldVariants}
                whileHover={
                  !isSubmitting
                    ? {
                        backgroundColor: "#C9A565",
                        scale: 1.02,
                        boxShadow: "0 8px 20px rgba(201, 165, 101, 0.3)",
                      }
                    : {}
                }
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Availability Info */}
          <motion.div
            className="relative h-full flex flex-col rounded-lg overflow-hidden"
            variants={infoVariants}
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${img1})`,
              }}
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-black/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <div className="relative z-10 py-12 px-8 flex flex-col justify-center h-full">
              <motion.p
                className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-3"
                variants={fieldVariants}
              >
                Uttaranchal Rawat Band
              </motion.p>

              <motion.h3
                className="text-3xl lg:text-4xl font-serif text-white mb-4 leading-tight"
                variants={fieldVariants}
              >
                Book Your Performance
              </motion.h3>

              <motion.p
                className="text-gray-300 text-sm leading-relaxed mb-4"
                variants={fieldVariants}
              >
                Our band specializes in unforgettable weddings, processions, and
                special events with expert musicians.
              </motion.p>

              <motion.p
                className="text-gray-300 text-sm leading-relaxed mb-8"
                variants={fieldVariants}
              >
                Fill out the form with your details and event date, and our team
                will respond promptly.
              </motion.p>

              <motion.div
                className="flex items-center gap-4"
                variants={fieldVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-[#C9A565] flex items-center justify-center flex-shrink-0"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Phone className="w-5 h-5 text-[#C9A565]" />
                </motion.div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                    Booking Now
                  </p>
                  <a href="tel:8285110729" className="no-underline">
                    <p className="text-xl font-serif text-white">8285110729</p>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BookingSection;
