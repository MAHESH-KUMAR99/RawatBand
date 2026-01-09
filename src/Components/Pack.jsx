import React from "react";
import { ChevronRight, Phone, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import ribbion from "../assets/ribbionicon.svg";
import bgpackage from "../assets/Utranchal Rawat Band Umbrella-Lights.png";

// --- Global Imperial Theme Variables ---
const ACCENT_GOLD = "#D4AF37"; // Rich, Bright Gold
const SHADOW_GOLD = "#A47E20"; // Dark Shadow for Metallic Depth
const DARK_BG = "#1A1714"; // Deep Espresso Black
const LIGHT_BG = "#F9F4E9"; // Luxurious Parchment/Cream
const TEXT_DARK = "#3C3633"; // Deep, warm text color

// Default Contact Info
const phone = "+918285110729";
const whatsapp_url = `https://wa.me/${phone}?text=${encodeURIComponent(
  "Hello, I am interested in booking a Royal Package for my event. Can you please share the pricing and availability?"
)}`;

const packagesData = [
  {
    id: 1,
    title: "The Only Dhol",
    intro:
      "Bring energy and excitement to your baraat with powerful Punjabi Dhol beats.",
    bullets: [
      "4 to 8 Professional Dhol Players",
      "Traditional & Modern Beats Mix",
      "Royal Uniformed Artists",
      "Baraat, Haldi, and Reception Events",
    ],
    ribbon: "Dhol",
  },
  {
    id: 2,
    title: "Nashik Dhol Tasha",
    intro:
      "Feel the vibrant rhythm of Maharashtra's festive beats in a majestic display.",
    bullets: [
      "6 to 10 Nashik Dhol Performers",
      "Coordinated Group Performance",
      "Elaborate Traditional Attire",
      "Perfect for Grand Entries & Processions",
    ],
    ribbon: "",
  },
  {
    id: 3,
    title: "Backpipe Band",
    intro:
      "A royal touch for your wedding with our disciplined backpiper tunes and marching band.",
    bullets: [
      "6 to 12 Band Members with Backpiper",
      "Trumpets, Bugles & Clarinet Music",
      "Formal Marching Style Entry",
      "Perfect for Baraat & Royal Processions",
    ],
    ribbon: "",
  },
  {
    id: 4,
    title: "Maharani Palki & Doli Service",
    intro: "Make the bride's entry a memorable, elegant, and timeless moment.",
    bullets: [
      "Beautifully Decorated Palki / Doli",
      "Carriers in Traditional Dress",
      "Intricate Flower Decoration Options",
      "Royal, Modern & Floral Styles Available",
    ],
    ribbon: "",
  },
  {
    id: 5,
    title: "Chattar (Royal Umbrella) Service",
    intro: "Add a majestic, royal charm to the groom's baraat procession.",
    bullets: [
      "Designer Chattar / Umbrella",
      "Carried by Uniformed Staff",
      "Integrated LED & Floral Options",
      "Suitable for Groom Entry and Photoshoots",
    ],
    ribbon: "",
  },
  {
    id: 6,
    title: "Vintage Car Groom Entry",
    intro: "A grand arrival in a stylish, classic vintage car, fully adorned.",
    bullets: [
      "Classic Vintage Car Options (e.g., Rolls, Bentley)",
      "Fully Decorated with Premium Flowers & Ribbons",
      "Professional Chauffeur Service Included",
      "Available for Photo Shoots & Entry",
    ],
    ribbon: "",
  },
  {
    id: 7,
    title: "Ghodi & Imperial Baggi",
    intro:
      "The traditional and ultimate royal choice for the groom's triumphant entry.",
    bullets: [
      "Magnificently Decorated White Ghodi",
      "Royal Baggi with Integrated Lighting Setup",
      "Uniformed Attendant & Handler",
      "Premium Flower Decoration & Music Combo",
    ],
    ribbon: "",
  },
  {
    id: 8,
    title: "Ambient Lighting & Decor Setup",
    intro:
      "A premium lighting and décor setup crafted to elevate your event's atmosphere, day or night.",
    bullets: [
      "High-Power LED Lights & Portable Generators",
      "Custom Entry Gate & Baraat Lighting",
      "Customized Decoration Themes & Color Palettes",
      "Suitable for Day & Night Events",
    ],
    ribbon: "",
  },
  {
    id: 9,
    title: "The Ultimate Royal Grand Combo",
    intro:
      "Our most popular, complete, and seamless wedding celebration package!",
    bullets: [
      "Full Band (Punjabi + Nashik + Backpiper)",
      "Choice of Ghodi / Baggi / Chattar",
      "Premium LED Lighting & Decoration Package",
      "Dedicated Baraat Coordination Team & Musicians",
    ],
    ribbon: "",
  },
  {
    id: 10,
    title: "Rajasthani Band Booking",
    intro:
      "Add royal folk vibes and energetic music to your entry with authentic Rajasthani band musicians in traditional attire.",
    bullets: [
      "8 to 15 Professional Rajasthani Musicians",
      "Folk Instruments: Dhol, Nagara, Shehnai, Trumpet",
      "Vibrant Traditional Rajasthani Costumes",
      "Folk Dance & Entry Performance",
      "Customizable Band Formation for Baraat & Events",
      "Perfect for Weddings, Cultural Functions & Festive Processions",
    ],
    ribbon: "",
  },
  {
    id: 11,
    title: "DJ on Wheels Booking",
    intro:
      "Make your baraat the ultimate party with mobile DJ beats, lights, and non-stop fun.",
    bullets: [
      "High-Power DJ Console & Professional Sound System",
      "Disco, LED & Special Effects Lighting",
      "Expert DJ Artists & Custom Playlist",
      "Premium Decorated Vehicle/Truck Setup",
      "Live Mixing – Bollywood, Punjabi & Party Hits",
      "Suitable for Baraat, Sangeet, Reception & Events",
    ],
    ribbon: "",
  },
];

const METALLIC_GRADIENT = {
  background: `linear-gradient(135deg, #FFD700 0%, ${ACCENT_GOLD} 30%, ${SHADOW_GOLD} 60%, ${ACCENT_GOLD} 80%, #FFD700 100%)`,
  boxShadow: `0 12px 30px ${ACCENT_GOLD}4D, 0 0 10px ${ACCENT_GOLD}88 inset`,
};

const shimmerEffect = {
  background: `linear-gradient(110deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 40%)`,
  mixBlendMode: "overlay",
};

// Subtle textured background
const ParchmentTexture = () => (
  <div
    className="fixed inset-0 pointer-events-none opacity-[0.03] lg:opacity-[0.05]"
    style={{
      backgroundImage: "radial-gradient(#5C5547 5%, transparent 5%)",
      backgroundSize: "25px 25px",
    }}
  />
);

export default function Pack() {
  return (
    <div
      className="antialiased min-h-screen relative"
      style={{ background: LIGHT_BG, color: TEXT_DARK }}
    >
      <ParchmentTexture />

      {/* HERO */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgpackage})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${DARK_BG}77 0%, ${DARK_BG} 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 pt-12 mt-20">
          <p
            className="text-md tracking-[0.4em] font-medium uppercase mb-4"
            style={{
              color: ACCENT_GOLD,
              textShadow: "0 0 8px rgba(212,175,55,0.4)",
            }}
          >
            OUR UNIQUE COLLECTION
          </p>
          <h1 className="text-2xl md:text-4xl text-white font-serif leading-snug drop-shadow-2xl">
            Royal Entrances. Unforgettable Celebrations.
          </h1>
          <div className="mt-8 flex items-center justify-center gap-3 text-base text-gray-300 font-medium">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <ChevronRight className="w-5 h-5 text-gray-500" />
            <span style={{ color: ACCENT_GOLD }} className="font-bold">
              Packages
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-24 relative z-10">
        {/* Contact Bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 p-6 rounded-2xl"
          style={{
            background: `linear-gradient(90deg, ${DARK_BG}EE, ${DARK_BG}FF)`,
            border: `1px solid ${ACCENT_GOLD}88`,
            boxShadow: "0 10px 80px rgba(0,0,0,0.3)",
          }}
        >
          <p className="text-xl font-serif font-bold text-white flex-shrink-0 text-center md:text-left">
            Ready to Book? Contact Our Coordinator:
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href={whatsapp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full text-base font-bold text-white uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.05]"
              style={{
                background: "#25D366",
                boxShadow: "0 4px 15px rgba(37, 211, 102, 0.4)",
              }}
            >
              <FaWhatsapp className="w-7 h-7" />
              <span className="relative z-10">Enquiry Now</span>
            </a>

            <a
              href={`tel:${phone}`}
              className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full text-base font-bold text-white uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.05]"
              style={METALLIC_GRADIENT}
            >
              <Phone className="w-5 h-5" />
              <span className="relative z-10">Call {phone}</span>
              <span
                className="absolute inset-0 rounded-full pointer-events-none"
                style={shimmerEffect}
              />
            </a>
          </div>
        </motion.div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg, idx) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.1 }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.1, ease: "easeOut" },
              }}
              className="relative h-full min-h-[400px] flex flex-col rounded-3xl p-6 shadow-xl transition-all duration-300"
              style={{
                background: `linear-gradient(180deg, ${LIGHT_BG}, #FFF8F5)`,
                border: `2px solid ${ACCENT_GOLD}33`,
                boxShadow:
                  "0 25px 80px rgba(0,0,0,0.15), 0 0 10px rgba(0,0,0,0.05) inset",
              }}
            >
              {/* Ribbon Accent — always show SVG; show text only if provided */}
              {/* <div
                className="absolute -top-9 right-2 inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-extrabold uppercase"
                style={{
                  background: ACCENT_GOLD,
                  color: DARK_BG,
                  boxShadow: `0 8px 20px ${ACCENT_GOLD}88`,
                }}
              >
                <img
                  src={ribbion}
                  alt="Ribbon"
                  className="w-7 h-7 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                {pkg.ribbon ? <span>{pkg.ribbon}</span> : null}
              </div> */}

              {/* BODY */}
              <div className="flex flex-col gap-6 grow">
                {/* Center Icon using the same SVG */}

                <div className="text-center">
                  <h3
                    className="text-xl font-serif font-extrabold mt-2"
                    style={{ color: TEXT_DARK }}
                  >
                    {pkg.title}
                  </h3>
                  <p className="mt-2 text-md text-gray-600 italic">
                    {pkg.intro}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <h4
                    className="flex items-center gap-2 mb-3 text-sm font-bold uppercase tracking-wider"
                    style={{ color: SHADOW_GOLD }}
                  >
                    <Zap className="w-4 h-4" />
                    Services Included
                  </h4>
                  <ul className="space-y-2 text-base text-gray-700">
                    {pkg.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span
                          className="flex-shrink-0 mt-1 text-lg font-extrabold"
                          style={{ color: ACCENT_GOLD }}
                        >
                          &#x2724;
                        </span>
                        <span className="leading-tight">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-2 flex items-center justify-center gap-3">
                <a
                  href={whatsapp_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 px-6 py-4 rounded-full text-sm font-bold text-white uppercase transition-all duration-300 transform hover:scale-[1.05]"
                  style={{
                    background: "#25D366",
                    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.4)",
                  }}
                >
                  <FaWhatsapp className="w-7 h-7" />
                  <span className="relative">Pricing Enquiry</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
