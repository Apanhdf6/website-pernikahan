import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const backgroundMusic = 'https://eedybzczj6qzwhpy.public.blob.vercel-storage.com/audio/Tiara%20Andini%2C%20Arsy%20Widianto%20-%20Lagu%20Pernikahan%20Kita.mp3';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Autoplay was prevented by the browser:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-24 right-6 lg:bottom-6 lg:right-6 z-50 flex items-center gap-3"
    >
      {/* Equalizer animation when playing */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex items-end gap-0.5 bg-white/80 backdrop-blur-md px-3 py-2 rounded-full border border-rose-gold-100 shadow-sm h-8"
          >
            <div className="w-0.75 bg-rose-gold-600 rounded-full bar h-1"></div>
            <div className="w-0.75 bg-rose-gold-600 rounded-full bar h-1"></div>
            <div className="w-0.75 bg-rose-gold-600 rounded-full bar h-1"></div>
            <div className="w-0.75 bg-rose-gold-600 rounded-full bar h-1"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spinning button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full bg-white border border-rose-gold-200 shadow-lg flex items-center justify-center transition-shadow duration-300 text-rose-gold-700 relative overflow-hidden focus:outline-none`}
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        <span className={`absolute inset-0 bg-rose-gold-50/50 rounded-full transition-transform duration-1000 ${isPlaying ? 'animate-spin-slow' : ''} border-2 border-dashed border-rose-gold-200`}></span>

        {isPlaying ? (
          // Music Note / Pause Icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 20 20" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative z-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 0v13.5m0-13.5L9 12.75m0 0v13.5m0-13.5L4.5 15" />
          </svg>
        ) : (
          // Play Icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 20 20" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative z-10 translate-x-[1px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        )}
      </motion.button>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
        preload="auto"
      />
    </motion.div>
  );
};

export default MusicPlayer;
