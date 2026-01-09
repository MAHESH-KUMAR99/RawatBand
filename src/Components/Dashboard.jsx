import React, { useState } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Edit,
  Monitor,
  Send,
  Lightbulb,
  CreditCard,
  HelpCircle,
  Search,
  Megaphone,
  Share2,
  HandCoins,
  Radio,
  Video,
  FileText,
  ShoppingCart,
  Brush,
  GalleryVerticalEnd,
  CodeXml,
  ScreenShare,
  ShieldHalf,
  Earth,
  Palette,
  Package,
  Laptop,
  Gift,
  Bot,
  Brain,
  Settings,
} from 'lucide-react';
import img1 from '../assets/A2VS.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/A2V-Contact.jpeg';

const Dashboard = () => {

  // Services data for cards
  const servicesData = [
    {
      icon: <Edit className="w-8 h-8 text-orange-500" />,
      title: 'Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.',
    },
    {
      icon: <Monitor className="w-8 h-8 text-orange-500" />,
      title: 'Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.',
    },
    {
      icon: <Send className="w-8 h-8 text-orange-500" />,
      title: 'Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: 'Social Media',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.',
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: 'eCommerce',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.',
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-orange-500" />,
      title: 'Help & Support',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.',
    },
  ];

  return (
    <div className="w-full">
      {/* Top Bar */}

      {/* Main Navigation */}

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img3})`,
        }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between w-[82%] m-auto min-h-[70vh]">
            {/* Left Content */}
            <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
              <p className="text-white font-bold mb-4 text-[20px]">
                Digital Marketing, Websites & Designs – All in One Place!
              </p>

              <h1 className="text-[48px] font-bold mb-6 leading-tight">
                Your One-Stop Digital Partner for Business Growth
              </h1>

              <p className="text-[16px] mb-8 text-gray-300 leading-relaxed max-w-2xl">
                We provide full-service digital solutions — including Web
                Design, Development, Digital Marketing, and Graphic Design —
                crafted to elevate your online presence and drive results.
              </p>

              <button className="bg-[#FF6900] cursor-pointer  hover:text-black text-white font-thin px-6 py-4 rounded-md text-[15px] transition-colors duration-300 ease-in-out hover:bg-orange-600 hover:scale-105 shadow-lg">
                BOOK A MEETING
              </button>
            </div>

            {/* Right Contact Form */}
            <div className="lg:w-lg lg:pl-12">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-[20px] font-bold text-[#FF6900] flex items-center justify-center">
                    <span className="text-[#FF6900] mr-2">
                      <Send />
                    </span>
                    Get in Touch
                  </h3>
                </div>

                <form
                  action="https://formsubmit.co/vickygour9868@gmail.com"
                  method="POST"
                  className="space-y-2"
                >
                  {/* Hidden fields for redirect, captcha, and more */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://your-website.com/thank-you"
                  />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: 'none' }}
                  />

                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="Full Name"
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border bg-[#FAFAFA] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-300 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <input
                      type="tel"
                      name="Phone"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-gray-300 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  {/* Service Select */}
                  <div>
                    <select
                      name="Service"
                      className="w-full px-4 py-3 border border-gray-300 bg-[#FAFAFA] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-500"
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="web-development">Web Development</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="ai-services">AI Services</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="Message"
                      placeholder="Your Message..."
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#FF6900] hover:bg-orange-600 text-[15px] text-white font-semibold py-2 rounded-lg transition-colors duration-300"
                  >
                    SUBMIT NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 flex items-center gap-2">
            <MessageCircle size={24} />
            <span className="hidden sm:inline font-medium">WhatsApp us</span>
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <div className="space-y-6">
                <div>
                  <span className="text-orange-500 font-bold text-[48px] lg:text-6xl block">
                    22 Years in
                  </span>
                  <h2 className="text-[48px] font-bold text-black mt-4 leading-tight">
                    Digital Marketing for Lead Generation
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-96 h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl overflow-hidden">
                {/* Abstract Mountain/Wave Shape */}
                <div className="absolute bottom-0 left-0 w-full h-3/4">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <path
                      d="M0,200 L0,120 Q100,80 200,100 Q300,120 400,80 L400,200 Z"
                      fill="rgba(255,255,255,0.3)"
                    />
                    <path
                      d="M0,200 L0,140 Q150,100 300,130 Q350,140 400,120 L400,200 Z"
                      fill="rgba(255,255,255,0.2)"
                    />
                  </svg>
                </div>

                {/* White Circle (Sun/Moon) */}
                <div className="absolute top-12 right-16 w-16 h-16 bg-white rounded-full shadow-lg"></div>

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-white rounded-full opacity-60"></div>
                <div className="absolute bottom-12 right-12 w-4 h-4 bg-white rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[42px] font-bold text-black ">
                How can we help you?
              </h2>

              <p className="text-[18px] text-gray-600 mb-12 max-w-[500px] mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et justo. Praesent mattis commodo augue.
              </p>

              <button className="bg-[#FF6900] cursor-pointer hover:bg-orange-600 text-white font-thin px-8 py-4 rounded-lg text-[15px] transition-colors duration-300 ease-in-out  hover:scale-105 shadow-lg mb-16">
                BOOK A MEETING
              </button>
            </div>

            {/* Services Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-6 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
                Portfolio
              </h2>

              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et justo. Praesent mattis commodo augue.
              </p>
            </div>

            {/* Portfolio Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Portfolio Image 1 */}
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Business Meeting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Portfolio Image 2 */}
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Team Working"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Portfolio Image 3 */}
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Business Presentation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Portfolio Image 4 */}
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional Meeting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Explore More Button */}
            <div className="text-center">
              <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-black font-thin px-8 py-3 rounded-lg text-[15px] transition-colors duration-300 shadow-lg  ease-in-out  hover:scale-105">
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[42px] font-bold text-black mb-8">
                Our Customers
              </h2>
              <p className="text-[16px] text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et justo. Praesent mattis commodo augue.
              </p>
            </div>

            {/* Customer Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 items-center justify-items-center">
              <div className="flex items-center justify-center p-6">
                <div className="text-4xl font-bold text-gray-400 tracking-wider">
                  LOGO
                </div>
              </div>
              <div className="flex items-center justify-center p-6">
                <div className="text-2xl font-light text-gray-400 tracking-wider flex items-center">
                  <span className="mr-2">🎯</span>
                  LOGOIPSUM
                </div>
              </div>
              <div className="flex items-center justify-center p-6">
                <div className="text-2xl font-bold text-gray-400 tracking-wider">
                  LOGO<span className="font-light">IPSUM</span>
                </div>
              </div>
              <div className="flex items-center justify-center p-6">
                <div className="text-2xl font-bold text-gray-400 tracking-wider flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                  logoipsum
                  <sup className="text-xs">®</sup>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-[#FEF1E4] rounded-2xl p-12 text-center">
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                  "Amazing Designs and Quality Work!"
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Nam at congue diam. Etiam erat lectus, finibus eget commodo
                  quis, tincidunt eget leo. Nullam quis vulputate orci, ac
                  accumsan quam. Morbi fringilla congue libero, ac malesuada
                  vulputate pharetra.
                </p>
              </div>

              {/* Profile */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Meet Our Leadership Section */}
      <section className="py-20 bg-[#FEF2E6]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[42px] font-bold text-black mb-2">
                Meet Our Leadership
              </h2>
              <p className="text-[16px] text-gray-600 mb-12 max-w-[500px] mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et justo. Praesent mattis commodo augue.
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Team Member 1 - Joanne Williams */}
              <div className="text-center group">
                <div className="mb-6 overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                    alt="Joanne Williams"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[20px] font-[700] text-black mb-2">
                  Joanne Williams
                </h3>
                <p className="text-[16px] font-[400] text-gray-600">Founder</p>
              </div>

              {/* Team Member 2 - Fred Buster */}
              <div className="text-center group">
                <div className="mb-6 overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                    alt="Fred Buster"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[20px] font-[700] text-black mb-2">
                  Fred Buster
                </h3>
                <p className="text-[16px] text-gray-600">Director OPS</p>
              </div>

              {/* Team Member 3 - Lisa Hoffman */}
              <div className="text-center group">
                <div className="mb-6 overflow-hidden ">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                    alt="Lisa Hoffman"
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[20px] font-[700] text-black mb-2">
                  Lisa Hoffman
                </h3>
                <p className="text-[16px] text-gray-600">Director HR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Would you like to start a project with us? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left Content */}
              <div className="lg:flex-1">
                <h2 className="text-[28px]  font-[700] text-orange-500 mb-4">
                  Would you like to start a project with us?
                </h2>
                <p className="text-[16px] font-[400] text-gray-600 leading-relaxed max-w-2xl">
                  Etiam erat lectus, finibus eget commodo quis, tincidunt eget
                  leo. Nullam quis vulputate orci, ac accumsan quam. Morbi
                  fringilla congue libero.
                </p>
              </div>

              {/* Right CTA Button */}
              <div className="lg:flex-shrink-0">
                <button
                  className="bg-[#F15808] hover:bg-orange-600 text-black font-100 px-8 py-4 rounded-lg text-[15px] transition-colors duration-300 shadow-lg  ease-in-out cursor-pointer hover:scale-105
"
                >
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
