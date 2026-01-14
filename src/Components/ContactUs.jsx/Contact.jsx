import React, { useState, useEffect } from "react";
import { ChevronRight, Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import img1 from "../../assets/Contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("RV2o9yJY7WLn1hHM8"); // Dashboard se correct public key copy karke paste karein
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_j95rz85",
        "template_s4qyanm",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          phone: formData.phone,
          message: formData.message,
        },
        "RV2o9yJY7WLn1hHM8" // Same public key as 4th parameter
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");
      handleReset();

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(""), 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");

      // Hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };

  // Form animations
  const formVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  // Contact info animations
  const infoVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: "center",
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Dark Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 mt-15">
          {/* Main Heading */}
          <motion.h1
            className="text-5xl lg:text-6xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Contact Us
          </motion.h1>

          {/* Breadcrumb */}
          <motion.div
            className="flex items-center justify-center gap-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="/"
              className="text-sm hover:text-[#C9A565] transition-colors duration-300"
            >
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm text-[#C9A565]">Contact</span>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <motion.section
        className="w-full bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1400px] mx-auto px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Form */}
            <motion.div variants={formVariants}>
              {/* Small Heading */}
              <motion.p
                className="text-[11px] uppercase tracking-[0.25em] text-gray-600 mb-4"
                variants={itemVariants}
              >
                Send Us Email
              </motion.p>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl lg:text-5xl font-serif text-gray-900 mb-10"
                variants={itemVariants}
              >
                Feel free to write
              </motion.h2>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✗ Failed to send message. Please try again.
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Row */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  variants={itemVariants}
                >
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="px-6 py-4 bg-gray-50 border border-transparent text-gray-700 text-sm focus:outline-none focus:border-[#C9A565] focus:bg-white transition-all"
                    required
                    disabled={isSubmitting}
                  />
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="px-6 py-4 bg-gray-50 border border-transparent text-gray-700 text-sm focus:outline-none focus:border-[#C9A565] focus:bg-white transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                {/* Subject & Phone Row */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  variants={itemVariants}
                >
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter Subject"
                    className="px-6 py-4 bg-gray-50 border border-transparent text-gray-700 text-sm focus:outline-none focus:border-[#C9A565] focus:bg-white transition-all"
                    required
                    disabled={isSubmitting}
                  />
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone"
                    className="px-6 py-4 bg-gray-50 border border-transparent text-gray-700 text-sm focus:outline-none focus:border-[#C9A565] focus:bg-white transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Message"
                  rows="6"
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent text-gray-700 text-sm focus:outline-none focus:border-[#C9A565] focus:bg-white transition-all resize-none"
                  variants={itemVariants}
                  required
                  disabled={isSubmitting}
                />

                {/* Buttons */}
                <motion.div className="flex gap-4" variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background:
                        "linear-gradient(90deg, #D33230 0%, #FD8F04 50%, #D33230 100%)",
                    }}
                    className="px-10 py-4 border-2 border-[#f86f07] text-white text-sm uppercase tracking-wider hover:bg-[#C9A565] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={handleReset}
                    disabled={isSubmitting}
                    className="px-10 py-4 border-2 border-gray-300 text-gray-600 text-sm uppercase tracking-wider hover:border-gray-400 hover:text-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    Reset
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Side - Contact Information */}
            <motion.div variants={infoVariants}>
              {/* Small Heading */}
              <motion.p
                className="text-[11px] uppercase tracking-[0.25em] text-gray-600 mb-4"
                variants={itemVariants}
              >
                Need Any Help?
              </motion.p>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl lg:text-5xl font-serif text-gray-900 mb-8"
                variants={itemVariants}
              >
                Get in touch with us
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-gray-600 text-sm leading-relaxed mb-12"
                variants={itemVariants}
              >
                Our website is currently undergoing updates, but our team is
                still here to help. If you have any questions or need
                assistance, please reach out to us via the details below. We aim
                to respond to all inquiries within 24 hours.
              </motion.p>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Phone Card */}
                <motion.div
                  className="flex items-start gap-6"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-[#FFF5E6] flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, backgroundColor: "#C9A565" }}
                    transition={{ duration: 0.6 }}
                  >
                    <Phone className="w-6 h-6 text-red-600" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-serif text-gray-900 mb-2">
                      Have any question?
                    </h4>
                    <a
                      href="tel:+918285110729"
                      className="text-gray-600 text-sm hover:text-[#C9A565] transition-colors duration-300"
                    >
                      +91-8285110729
                    </a>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  className="flex items-start gap-6"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-[#FFF5E6] flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, backgroundColor: "#C9A565" }}
                    transition={{ duration: 0.6 }}
                  >
                    <Mail className="w-6 h-6 text-red-600" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-serif text-gray-900 mb-2">
                      Write email
                    </h4>
                    <a
                      href="mailto:rawatband6@gmail.com"
                      className="text-gray-600 text-sm hover:text-[#C9A565] transition-colors duration-300"
                    >
                      rawatband6@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Address Card */}
                <motion.div
                  className="flex items-start gap-6"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-[#FFF5E6] flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, backgroundColor: "#C9A565" }}
                    transition={{ duration: 0.6 }}
                  >
                    <Send className="w-6 h-6 text-red-600" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-serif text-gray-900 mb-2">
                      Visit anytime
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Main Road, near Union Bank, Conductor Colony, Burari, New
                      Delhi, Delhi, 110084
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Google Maps Section */}
      <motion.section
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3497.8411113587586!2d77.199115!3d28.7541605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe2be6189427%3A0x80e9d64392075861!2sUttranchal%20Rawat%20Band!5e0!3m2!1sen!2sin!4v1764410865750!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Location Map"
          ></iframe>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
