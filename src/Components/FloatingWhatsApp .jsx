import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  // Apna WhatsApp number yahan daalo (country code + number, bina + ke)
  const phoneNumber = '8285110729';
  const message = encodeURIComponent(
    'Hi, I want to enquire about your band services.',
  );

  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[120] right-4 bottom-4 sm:right-6 sm:bottom-6"
      aria-label="WhatsApp Enquiry"
    >
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366]
                   shadow-lg shadow-black/40 flex items-center justify-center
                   cursor-pointer hover:scale-110 hover:shadow-xl
                   transition-transform duration-200"
      >
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
