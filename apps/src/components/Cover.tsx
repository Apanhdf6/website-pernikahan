import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { WeddingData } from '../data';

interface CoverProps {
  data: WeddingData;
  onOpen: () => void;
}

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
      className="fixed inset-0 z-50 bg-[#FDFBF7] flex flex-col justify-between p-8 text-center"
    >
      {/* Background Pastel Blur Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-rose-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-medium"></div>

      {/* Decorative Botanical Vectors (CSS Circles & Floating Petals) */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-rose-gold-200/30 rounded-full animate-float-slow hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-sage-200/30 rounded-full animate-float-medium hidden md:block"></div>

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-8"
      >
        <span className="text-xs md:text-sm tracking-[0.3em] text-sage-700 uppercase font-semibold">
          Undangan Pernikahan
        </span>
      </motion.div>

      {/* Middle Content */}
      <div className="relative z-10 my-auto max-w-lg mx-auto flex flex-col items-center">
        {/* Couple Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-rose-gold-700 mb-4 leading-none py-2"
        >
          {data.groom.nickname} <br className="my-2" /> & <br className="my-2" /> {data.bride.nickname}
        </motion.h1>
        
        {/* Short info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-lg md:text-xl text-stone-500 mb-8"
        >
          Akan segera melangsungkan pernikahan
        </motion.p>

        {/* Guest invitation card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/70 backdrop-blur-md border border-rose-gold-200/50 rounded-2xl p-6 shadow-sm max-w-sm w-full mx-auto mb-10 transition-all hover:shadow-md"
        >
          <p className="text-xs text-stone-500 uppercase tracking-widest mb-2 font-medium">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <h2 className="text-lg md:text-xl font-serif text-rose-gold-900 font-bold border-b border-rose-gold-100 pb-2 mb-2">
            {guestName || 'Tamu Undangan'}
          </h2>
          <p className="text-xs text-stone-400 italic">
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
          className="px-8 py-3 bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium shadow-md shadow-sage-600/20 transition-all duration-300 flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          Buka Undangan
        </motion.button>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 pb-4 text-xs text-stone-400 font-serif">
        Made with ♥ by {data.groom.nickname} & {data.bride.nickname}
      </div>
    </motion.div>
  );
};

export default Cover;
