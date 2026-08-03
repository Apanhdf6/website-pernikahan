import React from 'react';
import { motion } from 'framer-motion';
import type { WeddingData } from '../data';

interface HeroProps {
  data: WeddingData;
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

// Botanical Floral Line Divider Component
const BotanicalDivider: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center justify-center gap-3 ${className || ''}`}>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-rose-gold-300 to-rose-gold-400 w-24"></div>
    <svg className="w-5 h-5 text-rose-gold-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4M12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18Z" />
    </svg>
    <div className="h-[1px] bg-gradient-to-l from-transparent via-rose-gold-300 to-rose-gold-400 w-24"></div>
  </div>
);

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#FDFBF7] px-4 py-12 border-b border-rose-gold-100">
      {/* Background Decor - Glowing Soft Pastel Gradient Orbs */}
      <div className="absolute top-[5%] left-[-10%] w-96 h-96 bg-rose-gold-100/70 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow"></div>
      <div className="absolute bottom-[5%] right-[-10%] w-96 h-96 bg-sage-100/70 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-medium"></div>

      {/* Background Subtle Watermark Floral SVG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] text-rose-gold-200/20 pointer-events-none select-none">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full animate-spin-slow">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4M12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18Z" />
        </svg>
      </div>

      {/* Floating Leaves/Petals Accent SVGs */}
      <div className="absolute top-10 left-6 text-sage-600/20 animate-float-slow select-none pointer-events-none">
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.15,15.75 6.3,9.43 15,7.27V4H17V8M13.25,12.5C12.75,13.75 12,15 11,16C9.5,17.5 8,18 6,18V16C7.5,16 8.5,15.5 9.5,14.5C10.5,13.5 11,12.25 11.5,11H13.25V12.5M10,8.5C9.5,9.25 9,10 8.25,10.75C7.25,11.75 6.25,12.25 5,12.25V10.5C6,10.5 6.75,10 7.5,9.25C8.25,8.5 8.75,7.75 9,7H10V8.5Z" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-6 text-rose-gold-600/20 animate-float-medium select-none pointer-events-none rotate-180">
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.15,15.75 6.3,9.43 15,7.27V4H17V8M13.25,12.5C12.75,13.75 12,15 11,16C9.5,17.5 8,18 6,18V16C7.5,16 8.5,15.5 9.5,14.5C10.5,13.5 11,12.25 11.5,11H13.25V12.5M10,8.5C9.5,9.25 9,10 8.25,10.75C7.25,11.75 6.25,12.25 5,12.25V10.5C6,10.5 6.75,10 7.5,9.25C8.25,8.5 8.75,7.75 9,7H10V8.5Z" />
        </svg>
      </div>

      {/* Main Container Frame - Rich Premium Glassmorphic Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 text-center flex flex-col items-center max-w-lg w-full border border-rose-gold-300/60 rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-b from-white/90 via-[#FAF6F0]/85 to-white/90 backdrop-blur-md shadow-xl shadow-rose-gold-900/10"
      >
        {/* Inner Dashed Frame Border */}
        <div className="absolute inset-3.5 border border-dashed border-rose-gold-300/60 rounded-[2rem] pointer-events-none"></div>

        {/* Botanical Corner Ornaments */}
        <BotanicalCorner className="absolute top-5 left-5 w-10 h-10 text-rose-gold-400 pointer-events-none" />
        <BotanicalCorner className="absolute top-5 right-5 w-10 h-10 text-rose-gold-400 rotate-90 pointer-events-none" />
        <BotanicalCorner className="absolute bottom-5 left-5 w-10 h-10 text-rose-gold-400 -rotate-90 pointer-events-none" />
        <BotanicalCorner className="absolute bottom-5 right-5 w-10 h-10 text-rose-gold-400 rotate-180 pointer-events-none" />

        {/* Top Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center mb-4 mt-2"
        >
          <div className="w-10 h-10 rounded-full bg-rose-gold-100/80 border border-rose-gold-200/80 flex items-center justify-center text-rose-gold-600 mb-2 shadow-xs">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <span className="text-xs md:text-sm tracking-[0.3em] text-sage-700 uppercase font-semibold">
            The Wedding Of
          </span>
        </motion.div>

        {/* Bride & Groom names in script */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-script text-5xl sm:text-6xl md:text-7xl text-rose-gold-800 mb-6 drop-shadow-xs leading-tight py-2 flex flex-col items-center justify-center text-center w-full"
        >
          <span className="block w-full">{data.groom.nickname}</span>
          <span className="block w-full text-3xl sm:text-4xl text-rose-gold-600 my-1 font-serif italic">&amp;</span>
          <span className="block w-full">{data.bride.nickname}</span>
        </motion.h1>

        {/* Elegant Botanical Divider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full mb-6"
        >
          <BotanicalDivider />
        </motion.div>

        {/* Quranic / Loving quote box */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-white/70 backdrop-blur-sm border border-rose-gold-200/60 rounded-2xl p-5 mb-8 shadow-xs max-w-sm"
        >
          <p className="text-stone-600 font-serif text-sm md:text-base leading-relaxed italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya..."
          </p>
          <span className="block mt-3 font-semibold text-rose-gold-700 text-xs tracking-widest not-italic font-sans uppercase">
            — Ar-Rum: 21 —
          </span>
        </motion.div>

        {/* Saved the Date banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-rose-gold-50 via-white to-rose-gold-50 py-3 px-8 rounded-full border border-rose-gold-300/70 shadow-sm transition-all duration-300 hover:shadow-md cursor-default flex items-center gap-2.5"
        >
          <svg className="w-4 h-4 text-rose-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="font-serif font-bold text-rose-gold-900 tracking-wider text-xs md:text-sm">
            {data.date}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;