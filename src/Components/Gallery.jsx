"use client";
import React, { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Clock,
  Share2,
  ExternalLink,
  ChevronRight,
  X,
  Filter,
  Grid,
  List,
  Image as ImageIcon,
  Video as VideoIcon,
} from "lucide-react";

// ---------------- IMAGE IMPORTS ----------------
import img1 from "../assets/Utranchal Rawat Band Umbrella-Lights.png";
import img2 from "../assets/band2.jpg";
import img3 from "../assets/band3.jpg";
import img4 from "../assets/header.jpg";
import img5 from "../assets/vintage6.jpg";
import img6 from "../assets/band1.jpg";
import img7 from "../assets/raj1.jpg";
import img8 from "../assets/raj2.jpg";
import img9 from "../assets/raj3.jpg";
import img10 from "../assets/raj4.jpg";
import img11 from "../assets/raj5.jpg";
import img12 from "../assets/raj6.jpg";
import img13 from "../assets/vintage1.jpg";
import img14 from "../assets/vintage2.jpg";
import img15 from "../assets/vintage3.jpg";
import img16 from "../assets/vintage4.jpg";
import img17 from "../assets/vintage5.jpg";
import img18 from "../assets/vintage6.jpg";
import img19 from "../assets/punjabi1.jpg";
import img20 from "../assets/punjabi2.jpg";
import img21 from "../assets/punjabi3.jpg";
import img22 from "../assets/punjabi4.jpg";
import img23 from "../assets/punjabi5.jpg";
import img24 from "../assets/punjabi6.jpg";
import img25 from "../assets/punjabi7.jpg";
import img26 from "../assets/Naasik1.jpg";
import img27 from "../assets/Naasik2.jpg";
import img28 from "../assets/Nasik3.jpg";
import img29 from "../assets/Naasik4.jpg";
import img30 from "../assets/Naasik5.jpg";
import header from "../assets/VintageHeader.jpg";
import umbrella from "../assets/Rawat band Palki doli.jpg";
import { img } from "framer-motion/client";

// Saari gallery images ka source array
const IMAGE_SOURCES = [
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
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  umbrella,
];

// ---------------- VIDEO DATA ----------------
const VIDEOS = [
  {
    id: 1,
    title: "Royal Baraat Entry with Dhol Performance",
    description:
      "Experience the grandeur of a traditional baraat with our powerful dhol beats and synchronized performances that make every entry legendary.",
    youtubeId: "KaNWvgLZQTk?si",
    duration: "1:21",
    category: "Baraat Performance",
    uploadDate: "Mar 09, 2025",
    views: "1.2K",
    thumbnail: "https://youtu.be/KaNWvgLZQTk?si=TG8tXMfH-WrbnkIc",
    tags: ["Dhol", "Baraat", "Wedding Entry"],
  },
  {
    id: 2,
    title: "Nashik Dhol Tasha Spectacular",
    description:
      "Witness the vibrant energy of Maharashtra's traditional Nashik Dhol Tasha performance bringing festival vibes to your celebration.",
    youtubeId: "NjLaCN3Gqjg?si",
    duration: "0:26",
    category: "Cultural Performance",
    uploadDate: "May 14, 2025",
    views: "847",
    thumbnail: "https://youtu.be/NjLaCN3Gqjg?si=up5n8zbiIo8fx63T",
    tags: ["Nashik Dhol", "Cultural", "Festival"],
  },
  {
    id: 3,
    title: "Back pipe Band Grand March",
    description:
      "Our professional back pipe band delivers a royal, disciplined performance perfect for grand wedding entries and ceremonies.",
    youtubeId: "72w8ha1tpoA?si",
    duration: "1:00",
    category: "Band Performance",
    uploadDate: "May 13, 2025",
    views: "1.5K",
    thumbnail: "https://youtu.be/72w8ha1tpoA?si=XBR05k4nMzjZCJHI",
    tags: ["Backpipe", "Band", "Royal Entry"],
  },
  {
    id: 4,
    title: "Wedding Celebration Highlights",
    description:
      "A complete wedding celebration featuring dhol beats, band performances, and royal procession creating unforgettable memories.",
    youtubeId: "KaNWvgLZQTk?si",
    duration: "2:30",
    category: "Wedding Highlight",
    uploadDate: "Apr 20, 2025",
    views: "923",
    thumbnail: "https://youtu.be/KaNWvgLZQTk?si=TG8tXMfH-WrbnkIc",
    tags: ["Wedding", "Celebration", "Highlights"],
  },
  {
    id: 5,
    title: "Ghodi & Baggi Royal Procession",
    description:
      "Traditional groom entry on decorated Ghodi with royal Baggi, complete with lighting and music for a majestic celebration.",
    youtubeId: "NjLaCN3Gqjg?si",
    duration: "1:45",
    category: "Traditional Entry",
    uploadDate: "Apr 10, 2025",
    views: "1.8K",
    thumbnail: "https://youtu.be/NjLaCN3Gqjg?si=up5n8zbiIo8fx63T",
    tags: ["Ghodi", "Baggi", "Groom Entry"],
  },
  {
    id: 6,
    title: "Premium Lighting & Decor Setup",
    description:
      "Spectacular lighting arrangements and premium decorations that transform your baraat into a grand visual spectacle.",
    youtubeId: "72w8ha1tpoA?si",
    duration: "2:15",
    category: "Lighting & Decor",
    uploadDate: "Mar 25, 2025",
    views: "1.3K",
    thumbnail: "https://youtu.be/72w8ha1tpoA?si=XBR05k4nMzjZCJHI",
    tags: ["Lighting", "Decor", "Premium"],
  },
];

const VIDEO_CATEGORIES = [
  "All",
  "Baraat Performance",
  "Cultural Performance",
  "Band Performance",
  "Wedding Highlight",
  "Traditional Entry",
  "Lighting & Decor",
];

// ---------------- IMAGE DATA ----------------
// 24 cards, images cyclically IMAGE_SOURCES se pick kar rahe hain
const GALLERY = Array.from({ length: 24 }, (_, i) => {
  const src = IMAGE_SOURCES[i % IMAGE_SOURCES.length];
  return {
    id: i + 1,
    srcSmall: src,
    srcLarge: src,
    alt: `Band Performance ${i + 1}`,
    program: ["Dhol", "Back Pipe", "Nashik Dhol", "Lighting"][i % 4],
    year: [2025, 2024, 2023][i % 3],
    location: ["Delhi", "Mumbai", "Jaipur", "Bangalore"][i % 4],
    __key: `${i + 1}-${i}`,
  };
});

const PROGRAMS = ["All", "Dhol", "Back Pipe", "Nashik Dhol", "Lighting"];
const YEARS = ["All", "2025", "2024", "2023"];

// ---------------- ENHANCED VIDEO MODAL ----------------
const EnhancedVideoModal = ({ isOpen, onClose, video }) => {
  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-6xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute -top-12 right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all z-10"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Video Container */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#C9A565]/30">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 bg-gradient-to-br from-[#1A1714]/90 to-black/90 backdrop-blur-xl rounded-2xl p-6 border border-[#C9A565]/20"
          >
            <h3 className="text-2xl font-serif text-white mb-3">
              {video.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {video.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9A565]" />
                {video.duration}
              </span>
              <span>•</span>
              <span>{video.views} views</span>
              <span>•</span>
              <span>{video.uploadDate}</span>
              <div className="flex gap-2 ml-auto">
                {video.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#C9A565]/20 text-[#C9A565] rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ---------------- LUXURY VIDEO CAROUSEL ----------------
const LuxuryVideoCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredVideos =
    activeCategory === "All"
      ? VIDEOS
      : VIDEOS.filter((video) => video.category === activeCategory);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || filteredVideos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredVideos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredVideos.length]);

  const handlePlayVideo = useCallback((video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    setIsAutoPlaying(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
    setIsAutoPlaying(true);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredVideos.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length
    );
    setIsAutoPlaying(false);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    const total = filteredVideos.length;

    if (diff === 0) return "center";
    if (diff === 1 || diff === -(total - 1)) return "right";
    if (diff === -1 || diff === total - 1) return "left";
    return "hidden";
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0A] via-[#1A1714] to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8C6104] via-[#F0C86E] to-[#8C6104] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg shadow-[#C9A565]/30"
          >
            <VideoIcon className="w-5 h-5" />
            Performance Showcase
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-[#F0C86E] via-white to-[#F0C86E] bg-clip-text text-transparent">
              Our Legendary
            </span>
            <br />
            <span className="text-[#C9A565]">Performances</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the magic through our premium collection of celebration
            highlights
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {VIDEO_CATEGORIES.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category);
                setCurrentSlide(0);
              }}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#8C6104] via-[#F0C86E] to-[#8C6104] text-white shadow-lg shadow-[#C9A565]/40"
                  : "bg-white/5 text-gray-400 border border-gray-700 hover:border-[#C9A565] hover:text-[#C9A565] backdrop-blur-sm"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[600px] mb-12">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, index) => {
              const position = getSlidePosition(index);
              if (position === "hidden") return null;

              return (
                <motion.div
                  key={video.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: position === "center" ? 1 : 0.4,
                    scale: position === "center" ? 1 : 0.75,
                    x:
                      position === "center"
                        ? "0%"
                        : position === "right"
                        ? "70%"
                        : "-70%",
                    zIndex: position === "center" ? 20 : 10,
                    rotateY:
                      position === "center"
                        ? 0
                        : position === "right"
                        ? -25
                        : 25,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 mx-auto max-w-4xl cursor-pointer"
                  style={{ transformStyle: "preserve-3d", perspective: 2000 }}
                  onClick={() =>
                    position === "center" && handlePlayVideo(video)
                  }
                >
                  {/* Video Card */}
                  <div className="relative h-full bg-gradient-to-br from-[#1A1714] to-black rounded-3xl overflow-hidden border-2 border-[#C9A565]/30 shadow-2xl">
                    {/* Thumbnail */}
                    <div className="relative h-[70%] overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                      {/* Play Button - Only on center slide */}
                      {position === "center" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(240, 200, 110, 0.7)",
                                "0 0 0 20px rgba(240, 200, 110, 0)",
                                "0 0 0 0 rgba(240, 200, 110, 0)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="relative"
                          >
                            <div className="absolute inset-0 bg-[#F0C86E] rounded-full blur-2xl opacity-60" />
                            <div className="relative bg-gradient-to-br from-[#F0C86E] to-[#8C6104] rounded-full p-8 shadow-2xl">
                              <Play className="w-12 h-12 text-white fill-white" />
                            </div>
                          </motion.div>
                        </motion.div>
                      )}

                      {/* Badges */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-[#8C6104] to-[#F0C86E] text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg">
                        {video.category}
                      </div>
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/95 to-transparent">
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {video.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            {video.views} views
                          </span>
                          <span>•</span>
                          <span>{video.uploadDate}</span>
                        </div>

                        {position === "center" && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all backdrop-blur-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F0C86E]/20 to-transparent rounded-bl-full opacity-50" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#8C6104]/20 to-transparent rounded-tr-full opacity-50" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Controls, Auto-play toggle, Stats bar ... (unchanged) */}
        {/* ... same as your original code ... */}
      </div>

      <EnhancedVideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        video={selectedVideo}
      />
    </section>
  );
};

// ---------------- MODERN IMAGE LIGHTBOX ----------------
const ModernLightbox = ({ open, onClose, items, index, setIndex }) => {
  const onKey = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((prev) => (prev + 1) % items.length);
      if (e.key === "ArrowLeft")
        setIndex((prev) => (prev - 1 + items.length) % items.length);
    },
    [open, items.length, onClose, setIndex]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [open, onKey]);

  if (!open || !items.length) return null;

  const safeIndex = ((index % items.length) + items.length) % items.length;
  const item = items[safeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all z-10"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Main Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-7xl grid md:grid-cols-[1fr_350px] gap-6 items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Container */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <motion.img
              key={safeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={item.srcLarge || item.srcSmall}
              alt={item.alt}
              className="w-full h-[70vh] object-contain"
            />
          </div>

          {/* Info Panel */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-gradient-to-br from-[#1A1714]/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 border border-[#C9A565]/20 shadow-2xl"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              {item.alt}
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#C9A565] font-semibold">Program:</span>
                <span className="text-white/90">{item.program}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#C9A565] font-semibold">Year:</span>
                <span className="text-white/90">{item.year}</span>
              </div>
              {item.location && (
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[#C9A565] font-semibold">
                    Location:
                  </span>
                  <span className="text-white/90">{item.location}</span>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setIndex((prev) => (prev - 1 + items.length) % items.length)
                }
                className="flex-1 bg-gradient-to-r from-[#8C6104] to-[#F0C86E] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                ← Previous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIndex((prev) => (prev + 1) % items.length)}
                className="flex-1 bg-gradient-to-r from-[#8C6104] to-[#F0C86E] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Next →
              </motion.button>
            </div>

            {/* Counter */}
            <div className="mt-6 text-center text-sm text-white/60">
              {safeIndex + 1} / {items.length}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ---------------- MODERN IMAGE GRID ----------------
const ModernImageGrid = ({ items, onOpen }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {items.map((item, idx) => (
      <motion.figure
        key={`${item.id}-${idx}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.05, duration: 0.4 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
        onClick={() => onOpen(idx)}
      >
        <img
          src={item.srcSmall}
          alt={item.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Info Overlay */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
        >
          <p className="text-sm font-semibold mb-1">{item.program}</p>
          <p className="text-xs text-white/80">
            {item.year} • {item.location}
          </p>
        </motion.div>

        {/* Decorative Corner */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-br from-[#F0C86E]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.figure>
    ))}
  </div>
);

// ---------------- MODERN GALLERY BLOCK ----------------
const ModernGalleryBlock = () => {
  const [program, setProgram] = useState("All");
  const [year, setYear] = useState("All");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const filtered = useMemo(
    () =>
      GALLERY.filter(
        (g) =>
          (program === "All" || g.program === program) &&
          (year === "All" || String(g.year) === String(year))
      ),
    [program, year]
  );

  const openAt = useCallback(
    (i) => {
      if (!filtered.length) return;
      setIndex(Math.max(0, Math.min(i, filtered.length - 1)));
      setOpen(true);
    },
    [filtered.length]
  );

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#C9A565] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#8C6104] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8C6104] to-[#F0C86E] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <ImageIcon className="w-4 h-4" />
            Photo Gallery
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-[#8C6104] to-[#F0C86E] bg-clip-text text-transparent mb-6">
            Moments of Celebration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse through our collection of memorable performances and
            celebrations
          </p>
        </motion.div>

        {/* Gallery Grid */}
        {!filtered.length ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No images found for current filters.
            </p>
          </div>
        ) : (
          <ModernImageGrid items={filtered} onOpen={openAt} />
        )}
      </div>

      <ModernLightbox
        open={open}
        onClose={close}
        items={filtered}
        index={index}
        setIndex={setIndex}
      />
    </section>
  );
};

// ---------------- MAIN GALLERY COMPONENT ----------------
const Gallery = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${umbrella})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Witness the grandeur of our performances through captivating visuals
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-2 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="/" className="hover:text-[#C9A565] transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#C9A565] font-semibold">Gallery</span>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFFCF7] to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-[#8C6104] to-[#F0C86E] bg-clip-text text-transparent mb-6"
          >
            Creating Royal Memories, One Celebration at a Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            These captured moments are not just performances — they are
            celebrations of joy, tradition, and unforgettable memories. Each
            beat echoes the happiness of countless weddings, baraats, and grand
            celebrations where music became the heartbeat of the event.
          </motion.p>
        </div>
      </section>

      {/* Image Gallery */}
      <ModernGalleryBlock />

      {/* Video Carousel */}
      <LuxuryVideoCarousel />
    </>
  );
};

export default Gallery;
