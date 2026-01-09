import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import img1 from '../assets/Dholhf.jpg';
import img2 from '../assets/Rawat band Back Pipe Band6.jpg';
import img3 from '../assets/Rawat Band Dhol 1l .jpg';
import img4 from '../assets/Naashik Dhol Rawat Band.jpg';
import img5 from '../assets/Rawat band Palki doli.jpg';
import img6 from '../assets/Uttranchal Rawat Band Chhatar.jpg';
import img7 from '../assets/Rawat band Back Vintage car.jpg';
import img8 from '../assets/Uttranchal Rawat band Ghodi.jpg';
import img9 from '../assets/Uttranchal Rawat band Ghodi baggi .jpg';
import img10 from '../assets/Rawat band Back Band baja.jpg';
import img11 from '../assets/Rawat band rajasthani.jpg';

const serviceImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

const serviceNames = [
  'Punjabi Dhol',
  'Back Pipe Band',
  'Only Dhol',
  'Nashik Dhol',
  'Doli Services',
  'Chattar (Umbrella)',
  'Vintage Car for Wedding',
  'Ghodi & Baggi',
  'Palki & Doli Services',
  'Band Musicians with Uniforms',
  'Rajistani Band',
];

const RelatedServices = () => {
  return (
    <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 mb-4 sm:mb-6">
        Related Services
      </h1>

      {/* Swiper Carousel */}
      <div className="max-w-[1400px] mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={12}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {serviceImages.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={img}
                  alt={serviceNames[index] || `Service ${index + 1}`}
                  className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-2 sm:p-3 bg-white text-center font-serif font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                  {serviceNames[index] || `Service ${index + 1}`}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedServices;
