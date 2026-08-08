import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { WeddingData } from '../data';

interface CoverProps {
  data: WeddingData;
  onOpen: () => void;
}

// Ornate Botanical Corner SVG Component
const BotanicalCorner: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 56 V16 C4 9.37258 9.37258 4 16 4 H56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 56 V24 C12 17.3726 17.3726 12 24 12 H56" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
    <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.7" />
    <path d="M18 6 C15 12 20 18 24 14 C28 10 22 4 18 6 Z" fill="currentColor" opacity="0.5" />
    <path d="M6 18 C12 15 18 20 14 24 C10 28 4 22 6 18 Z" fill="currentColor" opacity="0.5" />
  </svg>
);

const Cover: React.FC<CoverProps> = ({ data, onOpen }) => {
  const [guestName, setGuestName] = useState<string>('');

  useEffect(() => {
    // Parse guest name from URL search parameter '?to=Name'
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    }
  }, []);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#FDFBF7] flex flex-col justify-between p-6 md:p-8 text-center overflow-y-auto"
    >
      {/* Background Pastel Blur Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-rose-gold-100/70 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-sage-100/70 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-medium"></div>

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-4"
      >
        <span className="text-xs md:text-sm tracking-[0.3em] text-sage-700 uppercase font-semibold">
          Undangan Pernikahan
        </span>
      </motion.div>

      {/* Middle Content Main Glassmorphic Card */}
      <div className="relative z-10 my-auto max-w-lg mx-auto flex flex-col items-center w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full border border-rose-gold-300/60 rounded-[2.5rem] p-6 sm:p-10 bg-gradient-to-b from-white/90 via-[#FAF6F0]/85 to-white/90 backdrop-blur-md shadow-xl shadow-rose-gold-900/10 flex flex-col items-center"
        >
          {/* Inner Dashed Border Accent */}
          <div className="absolute inset-3.5 border border-dashed border-rose-gold-300/60 rounded-[2rem] pointer-events-none"></div>

          {/* Botanical Corner Ornaments */}
          <BotanicalCorner className="absolute top-4 left-4 w-9 h-9 text-rose-gold-400 pointer-events-none" />
          <BotanicalCorner className="absolute top-4 right-4 w-9 h-9 text-rose-gold-400 rotate-90 pointer-events-none" />
          <BotanicalCorner className="absolute bottom-4 left-4 w-9 h-9 text-rose-gold-400 -rotate-90 pointer-events-none" />
          <BotanicalCorner className="absolute bottom-4 right-4 w-9 h-9 text-rose-gold-400 rotate-180 pointer-events-none" />

          {/* Couple Names */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-script text-5xl sm:text-6xl md:text-7xl text-rose-gold-800 mb-4 leading-tight py-2 flex flex-col items-center justify-center text-center w-full"
          >
            <span className="block w-full">{data.groom.nickname}</span>
            <span className="block w-full text-3xl sm:text-4xl text-rose-gold-600 my-1 font-serif italic">&amp;</span>
            <span className="block w-full">{data.bride.nickname}</span>
          </motion.h1>
          
          {/* Short info */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif italic text-base sm:text-lg text-stone-600 mb-6"
          >
            Akan segera melangsungkan pernikahan
          </motion.p>

          {/* Guest invitation card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm border border-rose-gold-200/70 rounded-2xl p-5 shadow-xs max-w-sm w-full mx-auto mb-6 transition-all hover:shadow-md"
          >
            <p className="text-[11px] text-stone-500 uppercase tracking-widest mb-1.5 font-medium">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>
            <h2 className="text-lg sm:text-xl font-serif text-rose-gold-900 font-bold border-b border-rose-gold-100 pb-2 mb-2">
              {guestName || 'Tamu Undangan'}
            </h2>
            <p className="text-[10px] text-stone-400 italic">
              *Mohon maaf apabila ada kesalahan penulisan nama/gelar
            </p>
          </motion.div>

          {/* Open Button */}
          <motion.button
            onClick={onOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="px-8 py-3.5 bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium shadow-md shadow-sage-600/25 transition-all duration-300 flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            Buka Undangan
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 pt-4 pb-2 text-xs text-stone-400 font-serif">
        Made with ♥ by {data.groom.nickname} & {data.bride.nickname}
      </div>
    </motion.div>
  );
};

export default Cover;
