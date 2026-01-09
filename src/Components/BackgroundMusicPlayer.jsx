import React, { useRef, useState, useEffect } from 'react';
// Lucide Icons का Import
import { Headphones, Pause } from 'lucide-react';

// *** अपनी MP3 फ़ाइल का पाथ यहाँ सुनिश्चित करें ***
import songFile from '../assets/Shaadi.mp3';

// --- कंपोनेंट की स्टाइल (CSS) ---
const playerStyle = {
  // बाईं ओर फिक्स करें
  position: 'fixed',
  bottom: '20px',
  left: '20px', // <--- बाईं ओर फिक्स
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
};

// ग्रेडिएंट बैकग्राउंड के लिए स्टाइल
const gradientBackground = {
  background: 'linear-gradient(to right, #D33230, #FD8F04, #D33230)',
};

const buttonStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: 'none',
  color: 'white',
  fontSize: '20px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  ...gradientBackground,
};

const BackgroundMusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // *** DEFAULT AUTOPLAY ATTEMPT (ब्राउज़र पॉलिसी के अनुसार) ***
  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        console.log('🎵 Background music started automatically!');
      } catch (error) {
        console.log('🔇 Autoplay blocked by browser. User interaction needed.');
        setIsPlaying(false);
      }
    };

    // Component mount होने पर autoplay attempt करें
    playAudio();

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Play/Pause फ़ंक्शन
  const togglePlayPause = () => {
    if (isPlaying) {
      // 1. गाना रोकें
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // 2. गाना चलाएँ
      const playPromise = audioRef.current.play();

      // Autoplay हैंडलिंग
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Autoplay failed. User must interact first.', error);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <div style={playerStyle}>
      {/* 1. HTML5 ऑडियो टैग - autoplay attribute भी add किया */}
      <audio
        ref={audioRef}
        src={songFile}
        loop
        autoPlay // *** Browser policy के अनुसार काम करेगा ***
        preload="auto"
      />

      {/* 2. Play/Pause बटन */}
      <button
        onClick={togglePlayPause}
        style={buttonStyle}
        title={
          isPlaying ? 'संगीत रोकें (Pause Music)' : 'संगीत चलाएँ (Play Music)'
        }
      >
        {isPlaying ? (
          <Pause size={20} /> // पॉज आइकॉन
        ) : (
          <Headphones size={20} /> // Headphones आइकॉन
        )}
      </button>
    </div>
  );
};

export default BackgroundMusicPlayer;
