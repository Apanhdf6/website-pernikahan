import React from 'react';
import { motion } from 'framer-motion';
import type { WeddingData } from '../data';

interface HeroProps {
  data: WeddingData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#FDFBF7] px-6 py-12 border-b border-rose-gold-100">
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-15%] w-80 h-80 bg-rose-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-80 h-80 bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-medium"></div>

      {/* Floating Botanical Leaf Accents */}
      <div className="absolute top-12 left-8 text-sage-600/10 animate-float-slow select-none pointer-events-none">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.15,15.75 6.3,9.43 15,7.27V4H17V8M13.25,12.5C12.75,13.75 12,15 11,16C9.5,17.5 8,18 6,18V16C7.5,16 8.5,15.5 9.5,14.5C10.5,13.5 11,12.25 11.5,11H13.25V12.5M10,8.5C9.5,9.25 9,10 8.25,10.75C7.25,11.75 6.25,12.25 5,12.25V10.5C6,10.5 6.75,10 7.5,9.25C8.25,8.5 8.75,7.75 9,7H10V8.5Z" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-8 text-sage-600/10 animate-float-medium select-none pointer-events-none rotate-180">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,20.66C4.15,15.75 6.3,9.43 15,7.27V4H17V8M13.25,12.5C12.75,13.75 12,15 11,16C9.5,17.5 8,18 6,18V16C7.5,16 8.5,15.5 9.5,14.5C10.5,13.5 11,12.25 11.5,11H13.25V12.5M10,8.5C9.5,9.25 9,10 8.25,10.75C7.25,11.75 6.25,12.25 5,12.25V10.5C6,10.5 6.75,10 7.5,9.25C8.25,8.5 8.75,7.75 9,7H10V8.5Z" />
        </svg>
      </div>

      {/* Main Container Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 text-center flex flex-col items-center max-w-lg w-full border border-rose-gold-200/40 rounded-3xl p-8 md:p-12 bg-white/40 backdrop-blur-[2px] shadow-sm"
      >
        {/* Border corner decorations */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-rose-gold-300/60 rounded-tl-lg"></div>
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-rose-gold-300/60 rounded-tr-lg"></div>
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-rose-gold-300/60 rounded-bl-lg"></div>
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-rose-gold-300/60 rounded-br-lg"></div>

        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs md:text-sm tracking-[0.25em] text-sage-700 uppercase font-semibold mb-4"
        >
          The Wedding Of
        </motion.span>

        {/* Bride & Groom names in script */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-rose-gold-700 mb-6 drop-shadow-sm leading-none py-2"
        >
          {data.groom.nickname} <br className="my-2" /> & <br className="my-2" /> {data.bride.nickname}
        </motion.h1>

        {/* Elegant divider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center gap-3 w-32 justify-center mb-6"
        >
          <div className="h-[1px] bg-rose-gold-300 w-full"></div>
          <span className="text-rose-gold-500 font-serif text-sm">✿</span>
          <div className="h-[1px] bg-rose-gold-300 w-full"></div>
        </motion.div>

        {/* Quranic / Loving quote */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-stone-600 font-serif text-sm md:text-base mb-8 leading-relaxed max-w-sm italic"
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya..."
          <span className="block mt-2 font-semibold text-stone-500 text-xs tracking-wider not-italic font-sans uppercase">
            Ar-Rum: 21
          </span>
        </motion.p>

        {/* Saved the Date banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-[#FDFBF7]/80 backdrop-blur-sm py-2.5 px-6 rounded-full border border-rose-gold-200/50 shadow-sm transition-all duration-300 hover:shadow-md cursor-default"
        >
          <p className="font-serif font-bold text-rose-gold-900 tracking-wider text-xs md:text-sm">
            {data.date}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;