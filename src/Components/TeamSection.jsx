import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HOVER_ZONE_COUNT = 9;

import User1 from '../assets/vintage3.jpg';
import User2 from '../assets/ghodi3.jpg';
import User3 from '../assets/Punjabi4.jpg';
import User4 from '../assets/raj1.jpg';
import User5 from '../assets/ppdsjdjdj.jpg';
import User6 from '../assets/Dj2.jpg';
import User7 from '../assets/Naasik4.jpg';
import User8 from '../assets/Utranchal Rawat Band Baraat 2.jpg';
import User9 from '../assets/szxdd.jpg';
import User10 from '../assets/Rawat band Palki doli.jpg';

const imageData = [
  { id: 1, title: 'Rocky Coast', url: User1 },
  { id: 2, title: 'Sunrise Over Water', url: User2 },
  { id: 3, title: 'Foggy Seascape', url: User4 },
  { id: 4, title: 'Lighthouse at Night', url: User3 },
  { id: 5, title: 'Forest Railroad', url: User5 },
  { id: 6, title: 'Mountain Path', url: User6 },
  { id: 7, title: 'Pier View', url: User7 },
  { id: 8, title: 'Coastal Rocks', url: User8 },
  { id: 9, title: 'Tall Grass', url: User9 },
  { id: 10, title: 'Vintage Camera', url: User10 },
];

const PICTURE_COUNT = imageData.length;

// motion variants
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ExpertSection = () => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const handleItemClick = (itemId) => setExpandedItemId(itemId);
  const handleItemMouseLeave = () => setExpandedItemId(null);

  // dynamic CSS rules for :has()
  const pRules = imageData
    .map(
      (_, i) =>
        `.nav-gallery:has(.gallery-item:nth-child(${
          i + 1
        }):is(:hover,:focus-visible)) { --p: ${String(i + 1).padStart(
          2,
          '0',
        )}; }`,
    )
    .join('\n');

  const zRules = Array.from({ length: HOVER_ZONE_COUNT }, (_, j) => {
    const idx = j + 1;
    return `.nav-gallery:has(.hover-zone i:nth-child(${idx}):hover) { --z: ${idx}; }`;
  }).join('\n');

  return (
    <motion.section
      className="w-full bg-white py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          variants={headerVariants}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.span
              className="w-10 sm:w-12 h-[1px] bg-[#C9A565]"
              variants={lineVariants}
            />
            <motion.p
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.20em] sm:tracking-[0.25em] text-gray-600"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Uttaranchal Rawat Band
            </motion.p>
            <motion.span
              className="w-10 sm:w-12 h-[1px] bg-[#C9A565]"
              variants={lineVariants}
            />
          </div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-5xl font-serif text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Expert Performers & Management
          </motion.h2>
        </motion.div>

        {/* 3D Gallery Block */}
        <div className="flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden font-[Manrope] bg-gray-100 rounded-3xl">
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');

            :root {
              --clr-bg: #020617;
              --clr-text: #fff;
              --hover-intensity: 15rem;
              --hover-smoothness: 70ms;
              --fall-smoothness: 250ms;
              --perspective: 2000px;
            }

            .nav-gallery {
              --r: calc(var(--max-z) * (var(--p) - 1) + var(--z));
              --r-n: calc((var(--r) - 1) / (var(--max-z) * var(--max-p) - 1));

              height: 18rem;
              width: 100%;
              max-width: 1200px;
              display: flex;
              align-items: flex-end;
              position: relative;
              perspective: var(--perspective);
              transform-style: preserve-3d;
              --dir: 0deg;
            }

            @media (min-width: 640px) {
              .nav-gallery {
                height: 22rem;
              }
            }

            @media (min-width: 1024px) {
              .nav-gallery {
                height: 26rem;
              }
            }

            @media (max-width: 640px) {
              .nav-gallery {
                overflow-x: auto;
                scroll-behavior: smooth;
              }
              .gallery-item {
                min-width: 60vw;
              }
            }

            .gallery-item {
              flex: 1;
              block-size: 100%;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              color: inherit;
              font-size: 0.9rem;
              cursor: pointer;
              transform-style: preserve-3d;
              padding-inline: 0.1rem;

              --ts: calc(
                var(--hover-smoothness) * var(--falloff) +
                var(--fall-smoothness) * (1 - var(--falloff))
              );

              --fs: calc(
                0.1s * var(--falloff, 0) +
                0.8s * (1 - var(--falloff, 0))
              );

              transition:
                scale var(--op, .15s),
                filter var(--fs),
                transform var(--ts, var(--fall-smoothness)),
                flex .3s;

              --p-n: calc(var(--i) / (var(--max-p) - 1));
              --diff: calc(var(--p-n) - var(--r-n));
              --w: .4;
              --u: calc(abs(var(--diff)) / var(--w));

              --falloff: clamp(calc(0.5 * (1 + cos(min(var(--u), 1) * 180deg))), 0, 1);
              --tilt: calc(clamp(-1, var(--diff) * 5, 1) * var(--falloff) * 70deg);

              transform:
                translateZ(calc(var(--falloff) * var(--hover-intensity)))
                rotateY(calc(var(--tilt) * cos(var(--dir))))
                rotateX(calc(var(--tilt) * sin(var(--dir))));

              filter:
                brightness(max(.55, var(--falloff, 0) * 1.2))
                saturate(var(--saturate-amount, var(--falloff, 0)));
            }

            .gallery-item.is-expanded {
              flex: 3;
              --saturate-amount: 1;
            }

            .img-bg {
              background: var(--img);
              background-size: cover;
              background-position: center;
              width: 100%;
              height: 100%;
              margin-inline: 0.25em;
              border-radius: 1.5rem;
              box-shadow: 0 18px 35px rgba(0,0,0,0.35);
            }

            .hover-zone {
              position: absolute;
              inset: 0;
              inset-inline: -3px;
              display: flex;
              z-index: 999;
            }

            .hover-zone > i {
              flex: 1;
              transition: .3s;
            }

            .nav-gallery:has(.hover-zone:hover):not(:has(i:hover)),
            .nav-gallery:focus-within {
              --z: calc((var(--max-z) + 1) / 2);
            }

            ${pRules}
            ${zRules}
          `}</style>

          <nav
            className="nav-gallery"
            style={{
              '--max-p': PICTURE_COUNT,
              '--max-z': HOVER_ZONE_COUNT,
            }}
            onMouseLeave={handleItemMouseLeave}
          >
            {imageData.map((image, index) => {
              const isExpanded = expandedItemId === image.id;
              return (
                <a
                  key={image.id}
                  href="#"
                  className={`gallery-item ${isExpanded ? 'is-expanded' : ''}`}
                  style={{
                    '--i': index,
                    '--img': `url('${image.url}')`,
                    '--p': index + 1,
                    '--saturate-amount': isExpanded ? 1 : 'var(--falloff, 0)',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(image.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemClick(image.id);
                    }
                  }}
                  aria-label={image.title}
                >
                  <div className="img-bg" />
                  <aside className="hover-zone">
                    {Array.from({ length: HOVER_ZONE_COUNT }, (_, j) => (
                      <i key={j} />
                    ))}
                  </aside>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.section>
  );
};

export default ExpertSection;
