import React from 'react';
import { motion } from 'framer-motion';
import type { WeddingData } from '../data';

interface MempelaiProps {
  data: WeddingData;
}

const Mempelai: React.FC<MempelaiProps> = ({ data }) => {
  return (
    <section id="mempelai" className="relative bg-[#FCFAF6] px-6 py-16 text-center border-b border-rose-gold-100 overflow-hidden">
      {/* Background soft blur */}
      <div className="absolute top-[30%] left-[-20%] w-72 h-72 bg-sage-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-[20%] right-[-20%] w-72 h-72 bg-rose-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md mx-auto mb-12"
      >
        <span className="font-script text-4xl text-rose-gold-600 block mb-2">Kedua Mempelai</span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-sage-800">
          Mempelai Pria & Wanita
        </h2>
        <div className="h-[2px] bg-rose-gold-200 w-16 mx-auto mt-4"></div>
        <p className="text-stone-500 font-serif italic text-sm mt-6 leading-relaxed">
          "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan kami:"
        </p>
      </motion.div>

      {/* Groom & Bride Grid */}
      <div className="relative z-10 grid grid-cols-1 gap-12 max-w-lg mx-auto">
        
        {/* Groom (Pria) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center bg-white/60 backdrop-blur-[1px] border border-rose-gold-100/50 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Avatar frame */}
          <div className="relative w-36 h-36 mb-6">
            {/* Double ring border */}
            <div className="absolute inset-0 rounded-full border-2 border-rose-gold-200 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full border border-dashed border-sage-600/50"></div>
            {/* Portrait placeholder with initial */}
            <div className="absolute inset-3 rounded-full bg-sage-50 flex items-center justify-center text-sage-700 font-serif text-5xl font-bold border border-rose-gold-100 shadow-inner">
              AF
            </div>
            {/* Small floral SVG badge */}
            <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border border-rose-gold-200 shadow-sm text-sage-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4M12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18Z" />
              </svg>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-bold text-rose-gold-900">
            {data.groom.fullName}
          </h3>
          <p className="text-xs uppercase tracking-widest text-sage-700 font-semibold mt-1 mb-4">
            — Mempelai Pria —
          </p>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs font-serif italic mb-4">
            {data.groom.parents}
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://instagram.com/${data.groom.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-rose-gold-700 border border-rose-gold-200 bg-[#FFFBFB] hover:bg-rose-gold-50 px-4 py-2 rounded-full font-medium transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.4 5.6,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.6 18.4,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 1,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
            </svg>
            @{data.groom.instagram}
          </motion.a>
        </motion.div>

        {/* Decorative & Separator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center -my-4 relative"
        >
          <div className="h-[1px] bg-rose-gold-200 w-24"></div>
          <span className="font-script text-4xl text-rose-gold-600 mx-4 relative top-[-4px]">&</span>
          <div className="h-[1px] bg-rose-gold-200 w-24"></div>
        </motion.div>

        {/* Bride (Wanita) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center bg-white/60 backdrop-blur-[1px] border border-rose-gold-100/50 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Avatar frame */}
          <div className="relative w-36 h-36 mb-6">
            {/* Double ring border */}
            <div className="absolute inset-0 rounded-full border-2 border-rose-gold-200 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full border border-dashed border-sage-600/50"></div>
            {/* Portrait placeholder with initial */}
            <div className="absolute inset-3 rounded-full bg-rose-gold-50 flex items-center justify-center text-rose-gold-700 font-serif text-5xl font-bold border border-rose-gold-100 shadow-inner">
              AS
            </div>
            {/* Small floral SVG badge */}
            <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border border-rose-gold-200 shadow-sm text-rose-gold-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4M12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18Z" />
              </svg>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-bold text-rose-gold-900">
            {data.bride.fullName}
          </h3>
          <p className="text-xs uppercase tracking-widest text-sage-700 font-semibold mt-1 mb-4">
            — Mempelai Wanita —
          </p>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs font-serif italic mb-4">
            {data.bride.parents}
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://instagram.com/${data.bride.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-rose-gold-700 border border-rose-gold-200 bg-[#FFFBFB] hover:bg-rose-gold-50 px-4 py-2 rounded-full font-medium transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.4 5.6,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.6 18.4,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 1,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
            </svg>
            @{data.bride.instagram}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Mempelai;
