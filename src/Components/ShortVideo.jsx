import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// Toggle this to change start-mute behaviour.
// Recommended: true (avoid autoplay audio issues). Set false only if you really want audible from load.
const MUTE_ON_START = true;

// YouTube URL data
const rawVideoData = [
  {
    id: 1,
    youtubeUrl: 'https://youtube.com/shorts/gNAJ5vd9GD4?si=OYrrrsFoQ4EjZJsL',
  },
  {
    id: 2,
    youtubeUrl: 'https://youtube.com/shorts/_FY6UpWZIuI?si=wbocCqv7xhm6UYKr',
  },
  {
    id: 3,
    youtubeUrl: 'https://youtube.com/shorts/j0vyrstY1e4?si=eB-96Y8uwsj1-Vcj',
  },
  {
    id: 4,
    youtubeUrl: 'https://youtube.com/shorts/e8M9-AlC52Y?si=lzDXW8ZDp54j_s7F',
  },
  {
    id: 5,
    youtubeUrl: 'https://youtube.com/shorts/5ppYe_OoI90?si=WtyRPNIJVDzpk7FG',
  },
  {
    id: 6,
    youtubeUrl: 'https://youtube.com/shorts/OLxdkeQXRCU?si=0XLm95hBsgUhQV5-',
  },
  {
    id: 7,
    youtubeUrl: 'https://youtube.com/shorts/ANZiI_odxOY?si=RuKbxStnm9huwCWE',
  },
  {
    id: 8,
    youtubeUrl: 'https://youtube.com/shorts/OLxdkeQXRCU?si=0XLm95hBsgUhQV5-',
  },
  {
    id: 9,
    youtubeUrl: 'https://youtube.com/shorts/5ppYe_OoI90?si=WtyRPNIJVDzpk7FG',
  },
  {
    id: 10,
    youtubeUrl: 'https://youtube.com/shorts/gNAJ5vd9GD4?si=OYrrrsFoQ4EjZJsL',
  },
];

const getYoutubeInfo = (shortUrl) => {
  const shortIdMatch = shortUrl.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  const videoId = shortIdMatch ? shortIdMatch[1] : null;
  // Use mute param based on MUTE_ON_START constant (avoid reloading to change it later)
  const muteParam = MUTE_ON_START ? 'mute=1' : 'mute=0';
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?enablejsapi=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&${muteParam}`
    : shortUrl;
  return { videoId, embedUrl };
};

const originalVideoData = rawVideoData.map((video) => ({
  ...video,
  ...getYoutubeInfo(video.youtubeUrl),
}));

const videoData = [
  ...originalVideoData,
  ...originalVideoData.map((v) => ({
    ...v,
    id: v.id + originalVideoData.length,
  })),
];

// Motion variants (kept concise)
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 },
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
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};
const modalVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 150, damping: 20 },
  },
};

const ShortVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const galleryRef = useRef(null);
  const intervalRef = useRef(null);
  const iframeRefs = useRef({}); // id -> iframe element
  const scrollFunctions = useRef({});
  const originalCount = originalVideoData.length;
  const itemWidth = 280;

  // keep track of which videos user toggled (clicked) to unmute permanently (until toggled off)
  const [clickedUnmuted, setClickedUnmuted] = useState(() => new Set());

  // temporaryHovered set to avoid interfering with clicked state
  const tempPlayingRef = useRef(new Set());

  // autoscroll
  useEffect(() => {
    const scrollIntervalTime = 2500;
    const scrollAmount = itemWidth;
    const scroll = () => {
      if (!galleryRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      if (
        scrollLeft + clientWidth >= scrollWidth ||
        scrollLeft >= originalCount * itemWidth
      ) {
        galleryRef.current.scrollLeft = 0;
      } else {
        galleryRef.current.scrollLeft += scrollAmount;
      }
    };
    const startScroll = () => {
      if (!intervalRef.current)
        intervalRef.current = setInterval(scroll, scrollIntervalTime);
    };
    const stopScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    scrollFunctions.current.startScroll = startScroll;
    scrollFunctions.current.stopScroll = stopScroll;
    startScroll();
    return () => stopScroll();
  }, [originalCount]);

  // helper to post message safely
  const postToIframe = (iframe, msg) => {
    try {
      iframe.contentWindow.postMessage(msg, '*');
    } catch (e) {
      // ignore cross-origin errors if any (shouldn't happen for youtube iframe)
    }
  };

  // pause & mute all except allowedId (null -> pause all)
  const pauseAllExcept = (allowedId = null) => {
    Object.keys(iframeRefs.current).forEach((k) => {
      const id = Number(k);
      const iframe = iframeRefs.current[id];
      if (!iframe || !iframe.contentWindow) return;
      if (allowedId !== id) {
        postToIframe(
          iframe,
          '{"event":"command","func":"pauseVideo","args":""}',
        );
        postToIframe(iframe, '{"event":"command","func":"mute","args":""}');
      }
    });
  };

  // Hover handlers: temporary play/unmute unless video is clickedUnmuted
  const handleMouseEnter = (videoId) => {
    // if that video is permanently unmuted by click, just ensure others are paused (avoid overlap)
    if (clickedUnmuted.has(videoId)) {
      pauseAllExcept(videoId);
      return;
    }
    // otherwise: pause others and temporarily unmute+play this one
    pauseAllExcept(videoId);
    const iframe = iframeRefs.current[videoId];
    if (iframe && iframe.contentWindow) {
      postToIframe(iframe, '{"event":"command","func":"unmute","args":""}');
      postToIframe(iframe, '{"event":"command","func":"playVideo","args":""}');
      tempPlayingRef.current.add(videoId);
    }
  };

  const handleMouseLeave = (videoId) => {
    // if user had clicked to unmute permanently, do nothing (keep it as-is)
    if (clickedUnmuted.has(videoId)) return;
    // otherwise stop temporary play
    const iframe = iframeRefs.current[videoId];
    if (iframe && iframe.contentWindow) {
      postToIframe(iframe, '{"event":"command","func":"pauseVideo","args":""}');
      postToIframe(iframe, '{"event":"command","func":"mute","args":""}');
      postToIframe(
        iframe,
        '{"event":"command","func":"seekTo","args":[0,true]}',
      );
      tempPlayingRef.current.delete(videoId);
    }
  };

  // Click toggles permanent unmute for that video.
  // If toggled ON: unmute+play it and pause+mute others.
  // If toggled OFF: mute+pause it (others remain muted).
  const handleClickToggle = (videoId) => {
    setClickedUnmuted((prev) => {
      const next = new Set(prev);
      const iframe = iframeRefs.current[videoId];

      if (next.has(videoId)) {
        // turning OFF
        next.delete(videoId);
        if (iframe && iframe.contentWindow) {
          postToIframe(
            iframe,
            '{"event":"command","func":"pauseVideo","args":""}',
          );
          postToIframe(iframe, '{"event":"command","func":"mute","args":""}');
          postToIframe(
            iframe,
            '{"event":"command","func":"seekTo","args":[0,true]}',
          );
        }
      } else {
        // turning ON
        next.add(videoId);
        // pause/mute others
        pauseAllExcept(videoId);
        if (iframe && iframe.contentWindow) {
          postToIframe(iframe, '{"event":"command","func":"unmute","args":""}');
          postToIframe(
            iframe,
            '{"event":"command","func":"playVideo","args":""}',
          );
        }
      }

      return next;
    });
  };

  const openModal = (video) => {
    scrollFunctions.current.stopScroll();
    // pause others
    pauseAllExcept(null);
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    scrollFunctions.current.startScroll();
  };

  return (
    <>
      <motion.section
        className="w-full bg-white py-16 sm:py-20"
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
                Uttaranchal Rawat Band
              </motion.p>
              <motion.span
                className="w-10 sm:w-12 h-[1px] bg-[#C9A565] transform origin-left"
                variants={lineVariants}
              />
            </div>

            <motion.h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif text-gray-900">
              The Vibe is Live: Our Best Performances
            </motion.h2>
          </motion.div>

          <motion.div
            ref={galleryRef}
            className="flex overflow-x-auto gap-6 pb-8 cursor-grab scroll-smooth [&::-webkit-scrollbar]:hidden px-8 sm:px-12 snap-x snap-mandatory"
            style={{ padding: '20px 40px', WebkitOverflowScrolling: 'touch' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            onMouseEnter={() => scrollFunctions.current.stopScroll()}
            onMouseLeave={() => {
              if (!selectedVideo) scrollFunctions.current.startScroll();
            }}
          >
            {videoData.map((video) => (
              <motion.div
                key={video.id}
                className="flex-shrink-0 snap-center w-[240px] sm:w-[260px] h-[426px] sm:h-[460px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl relative group bg-black/10"
                style={{ aspectRatio: '9/16' }}
                onClick={() => handleClickToggle(video.id)}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                onMouseEnter={() => handleMouseEnter(video.id)}
                onMouseLeave={() => handleMouseLeave(video.id)}
              >
                <iframe
                  ref={(el) => {
                    if (el) iframeRefs.current[video.id] = el;
                  }}
                  src={video.embedUrl}
                  className="w-full h-full rounded-2xl border-none shadow-lg"
                  title={`Video ${video.id}`}
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  loading="lazy"
                  style={{ aspectRatio: '9/16', objectFit: 'cover' }}
                />
                {/* optional small UI indicator */}
                {clickedUnmuted.has(video.id) && (
                  <div className="absolute top-3 left-3 bg-[#C9A565] text-xs px-2 py-1 rounded">
                    Unmuted
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {selectedVideo && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[10000] flex items-center justify-center p-4 sm:p-8"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[95vh] bg-black/50 rounded-3xl shadow-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button
              className="absolute -top-3 -right-3 bg-[#C9A565]/90 hover:bg-[#C9A565] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl z-20 hover:scale-110 transition-all duration-200 backdrop-blur-sm border-2 border-white/20"
              onClick={closeModal}
            >
              <X size={26} />
            </button>

            <iframe
              src={`${selectedVideo.embedUrl.replace(
                'mute=1',
                'mute=0',
              )}&controls=1`}
              className="w-full h-[70vh] sm:h-[80vh] md:h-[600px] lg:h-[650px] border-none rounded-3xl shadow-2xl"
              title={`Fullscreen Video ${selectedVideo.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              style={{ aspectRatio: '9/16' }}
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ShortVideo;
