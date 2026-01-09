import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

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
import img12 from '../assets/Dj1.jpg';

const categories = [
  'All',
  'Only Dhol',
  'Nashik Dhol',
  'Punjabi Dhol',
  'Band Musicians with Uniforms',
  'Back Pipe Band',
  'Rajistani Band',
  'Ghodi & Baggi',
  'Vintage Car for Wedding',
  'Palki & Doli Services',
  'Chattar (Umbrella)',
  'Dj on Wells',
];

const allProducts = {
  'Only Dhol': [
    {
      id: 1,
      name: 'Only Dhol',
      price: 1200,
      image: img3,
      rating: 5,
      url: '/onlydhol',
    },
  ],
  'Nashik Dhol': [
    {
      id: 2,
      name: 'Nashik Dhol',
      price: 2000,
      image: img4,
      rating: 5,
      url: '/nasikdhol',
    },
  ],
  'Punjabi Dhol': [
    {
      id: 3,
      name: 'Punjabi Dhol',
      price: 1500,
      image: img1,
      rating: 5,
      url: '/punjabidhol',
    },
  ],
  'Band Musicians with Uniforms': [
    {
      id: 4,
      name: 'Band Musicians with Uniforms',
      price: 3400,
      image: img10,
      rating: 5,
      url: '/BandMusicians',
    },
  ],
  'Back Pipe Band': [
    {
      id: 5,
      name: 'Back Pipe Band',
      price: 3000,
      image: img2,
      rating: 5,
      url: '/Backpipe',
    },
  ],
  'Rajistani Band': [
    {
      id: 6,
      name: 'Rajistani Band',
      price: 3000,
      image: img11,
      rating: 5,
      url: '/rajisthaniBand',
    },
  ],
  'Ghodi & Baggi': [
    {
      id: 7,
      name: 'Ghodi Decorated',
      price: 3000,
      image: img8,
      rating: 4,
      url: '/GhodiDecorated',
    },
    {
      id: 8,
      name: 'Buggi Decorated',
      price: 3000,
      image: img9,
      rating: 4,
      url: '/BuggiDecorated',
    },
  ],
  'Vintage Car for Wedding': [
    {
      id: 9,
      name: 'Vintage Car for Wedding',
      price: 10000,
      image: img7,
      rating: 5,
      url: '/VintageCar',
    },
  ],
  'Palki & Doli Services': [
    {
      id: 10,
      name: 'Palki & Doli Services',
      price: 5000,
      image: img5,
      rating: 5,
      url: '/Palki&Doli',
    },
  ],
  'Chattar (Umbrella)': [
    {
      id: 11,
      name: 'Chattar (Umbrella)',
      price: 1000,
      image: img6,
      rating: 4,
      url: '/Palki&Chattar',
    },
  ],
  'Dj on Wells': [
    {
      id: 12,
      name: 'Dj on wells',
      price: 1000,
      image: img12,
      rating: 4,
      url: '/DjWells',
    },
  ],
};

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const getFilteredProducts = () => {
    if (activeCategory === 'All') return Object.values(allProducts).flat();
    return allProducts[activeCategory] || [];
  };

  const products = getFilteredProducts();
  const whatsapp_url = 'https://wa.me/919876543210';

  const handleProductClick = (url) => {
    navigate(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Mobile / Tablet Category Pills */}
        <div className="md:hidden mb-6">
          <p className="text-xs font-semibold text-gray-600 mb-2">Categories</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-amber-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {/* Left: Sidebar (desktop) */}
          <aside className="hidden md:block md:w-64 lg:w-72 border rounded-lg bg-white shadow-sm self-start sticky top-20">
            <div className="p-4 font-semibold text-gray-700 border-b">
              Categories
            </div>
            <nav className="flex flex-col" aria-label="Categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-4 py-3 border-b border-gray-100 w-full text-sm transition-colors ${
                    activeCategory === cat
                      ? 'bg-amber-100 text-amber-800 font-semibold'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right: Products grid */}
          <section className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white rounded-lg border border-amber-200 overflow-hidden transform transition-all duration-300 hover:scale-[0.97] hover:shadow-lg"
                >
                  {/* Image */}
                  <div
                    className="relative h-52 sm:h-60 bg-blue-50 flex items-center justify-center overflow-hidden cursor-pointer"
                    onClick={() => handleProductClick(p.url)}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 sm:p-5 text-center flex flex-col gap-4">
                    <h3
                      className="text-base sm:text-lg font-semibold text-amber-700 cursor-pointer hover:text-amber-800"
                      onClick={() => handleProductClick(p.url)}
                    >
                      {p.name}
                    </h3>

                    <div className="flex flex-col gap-3 justify-center items-center">
                      {/* View Details Button */}
                      <button onClick={() => handleProductClick(p.url)}>
                        <span className="inline-block transition-colors duration-200 bg-transparent px-6 sm:px-8 py-2 cursor-pointer text-xs sm:text-sm text-black uppercase border-2 border-black font-medium tracking-wide hover:bg-gradient-to-r hover:from-[#D33230] hover:via-[#FD8F04] hover:to-[#D33230] hover:text-white hover:border-transparent">
                          View Details
                        </span>
                      </button>

                      {/* WhatsApp Button */}
                      <a
                        href={whatsapp_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white uppercase tracking-wide rounded-full transition-transform duration-300 hover:scale-[1.05]"
                        style={{
                          background: '#25D366',
                          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                        }}
                      >
                        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>Booking & Enquiry</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {products.length === 0 && (
              <div className="text-center text-gray-500 mt-10 text-sm">
                इस category में कोई products नहीं हैं।
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
