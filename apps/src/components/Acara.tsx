import React from 'react';
import { motion } from 'framer-motion';
import type { WeddingData } from '../data';

interface AcaraProps {
  data: WeddingData;
}

const Acara: React.FC<AcaraProps> = ({ data }) => {
  // Generate Google Calendar Link
  // Target: 06 September 2026. Akad: 08:00 WIB (01:00 UTC), Resepsi ends around 15:00 WIB (08:00 UTC)
  const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+${encodeURIComponent(data.groom.nickname)}+%26+${encodeURIComponent(data.bride.nickname)}&dates=20260906T010000Z/20260906T080000Z&details=Menghadiri+undangan+pernikahan+${encodeURIComponent(data.groom.fullName)}+dan+${encodeURIComponent(data.bride.fullName)}&location=${encodeURIComponent(data.location)}`;

  // Google Maps link - using exact coordinates from ABOUT.md
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=-7.312101819537807,108.39564734292398`;

  return (
    <section id="acara" className="relative bg-[#FDFBF7] px-6 py-16 text-center border-b border-rose-gold-100 overflow-hidden">
      {/* Botanical Background Circles */}
      <div className="absolute top-[20%] right-[-15%] w-72 h-72 bg-rose-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-72 h-72 bg-sage-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md mx-auto mb-10"
      >
        <span className="font-script text-4xl text-rose-gold-600 block mb-2">Informasi Acara</span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-sage-800">
          Waktu & Tempat
        </h2>
        <div className="h-[2px] bg-rose-gold-200 w-16 mx-auto mt-4"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col gap-8 max-w-md mx-auto">
        
        {/* Akad Nikah */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-md border border-rose-gold-200/50 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Header Icon & Title */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-sage-700 mb-2 border border-rose-gold-100">
              {/* Rings Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-rose-gold-900 uppercase tracking-wide">
              Akad Nikah
            </h3>
          </div>

          <div className="h-[1px] bg-rose-gold-100 w-1/2 mx-auto my-3"></div>

          {/* Time & Place */}
          <div className="text-stone-600 text-sm font-serif space-y-2">
            <p className="font-bold text-stone-700 font-sans">
              Minggu, 06 September 2026
            </p>
            <p>Pukul 08:00 WIB</p>
            <p className="font-bold text-sage-700 font-sans pt-2">
              Kediaman Mempelai Wanita
            </p>
            <p className="text-xs text-stone-500 italic">
              {data.location}
            </p>
          </div>
        </motion.div>

        {/* Resepsi Pernikahan */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-white/80 backdrop-blur-md border border-rose-gold-200/50 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Header Icon & Title */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-12 h-12 bg-rose-gold-50 rounded-full flex items-center justify-center text-rose-gold-700 mb-2 border border-rose-gold-100">
              {/* Champagne / Cake Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-rose-gold-900 uppercase tracking-wide">
              Resepsi Pernikahan
            </h3>
          </div>

          <div className="h-[1px] bg-rose-gold-100 w-1/2 mx-auto my-3"></div>

          {/* Time & Place */}
          <div className="text-stone-600 text-sm font-serif space-y-2">
            <p className="font-bold text-stone-700 font-sans">
              Minggu, 06 September 2026
            </p>
            <p>Setelah Akad Nikah - Selesai</p>
            <p className="font-bold text-sage-700 font-sans pt-2">
              Kediaman Mempelai Wanita
            </p>
            <p className="text-xs text-stone-500 italic">
              {data.location}
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-3 mt-2"
        >
          {/* Google Maps Button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FCFAF6] hover:bg-rose-gold-50 border border-rose-gold-200 text-rose-gold-800 rounded-full font-medium shadow-sm transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-rose-gold-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Petunjuk Lokasi (Google Maps)
          </motion.a>

          {/* Add to Calendar Button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium shadow-sm transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            Simpan di Kalender (Google Calendar)
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Acara;
