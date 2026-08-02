import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cover from './components/Cover';
import Hero from './components/Hero';
import Mempelai from './components/Mempelai';
import Countdown from './components/Countdown';
import Acara from './components/Acara';
import Galeri from './components/Galeri';
import Gift from './components/Gift';
import RSVP from './components/RSVP';
import MusicPlayer from './components/MusicPlayer';
import BottomNav from './components/BottomNav';
import { weddingInfo } from './data';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className={`min-h-screen bg-[#FAF9F6] flex flex-col lg:flex-row relative ${!isOpened ? 'h-screen overflow-hidden' : ''}`}>
      <AnimatePresence>
        {!isOpened && (
          <Cover
            data={weddingInfo}
            onOpen={() => {
              setIsOpened(true);
              setIsPlaying(true);
            }}
          />
        )}
      </AnimatePresence>
      
      {/* 
        DESKTOP LEFT SIDE PANEL (Fixed 40% width)
        Only visible on large screens (lg: >= 1024px)
      */}
      <aside className="hidden lg:flex lg:w-[40%] lg:h-screen lg:sticky lg:top-0 lg:left-0 flex-col justify-between p-12 text-center overflow-hidden relative shadow-2xl">
        {/* Background Image with botanical couple aesthetic */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center transition-transform duration-10000 scale-105"
        ></div>
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>

        {/* Content on top of background */}
        <div className="relative z-10 text-white/90 my-auto flex flex-col items-center">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-rose-gold-200/90 font-semibold mb-4">
            The Wedding Of
          </span>
          <h1 className="font-script text-5xl xl:text-6xl 2xl:text-7xl text-white mb-2 py-2 drop-shadow-md">
            {weddingInfo.groom.nickname} & {weddingInfo.bride.nickname}
          </h1>
          <p className="font-serif italic text-rose-gold-100 text-lg mb-8 max-w-xs drop-shadow-sm">
            Menyambut hari bahagia kami
          </p>

          <div className="h-[1px] bg-rose-gold-300/40 w-32 my-6"></div>

          {/* Active Countdown for Left Side Panel */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg max-w-xs w-full">
            <p className="text-xs uppercase tracking-widest text-rose-gold-200 font-bold mb-3">
              Mulai Dalam
            </p>
            <DesktopCountdown />
          </div>

          <p className="font-serif text-sm text-stone-300 mt-8 font-semibold uppercase tracking-widest drop-shadow-sm">
            {weddingInfo.date}
          </p>
        </div>

        {/* Footer info */}
        <div className="relative z-10 text-stone-400 text-xs font-serif pt-4">
          © 2026 {weddingInfo.groom.nickname} & {weddingInfo.bride.nickname}. All Rights Reserved.
        </div>
      </aside>

      {/* 
        DESKTOP RIGHT SIDE PANEL / MOBILE CONTAINER (60% width on Desktop, full scroll on Mobile)
      */}
      <main className="w-full lg:w-[60%] lg:h-screen lg:overflow-y-auto custom-scrollbar relative">
        
        {/* Stacked Invitation Sections */}
        <Hero data={weddingInfo} />
        <Mempelai data={weddingInfo} />
        <Countdown />
        <Acara data={weddingInfo} />
        <Galeri />
        <Gift />
        <RSVP />

        {/* Footer Thank You Section */}
        <footer className="bg-[#FAF9F6] px-6 py-16 text-center border-t border-rose-gold-100">
          <div className="max-w-md mx-auto space-y-6">
            <span className="font-script text-4xl text-rose-gold-600">Terima Kasih</span>
            <p className="text-stone-500 font-serif italic text-sm leading-relaxed">
              "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami."
            </p>
            <div className="h-[1px] bg-rose-gold-200 w-16 mx-auto"></div>
            <p className="text-xs uppercase tracking-[0.2em] text-sage-800 font-bold">
              Kami yang Berbahagia,
            </p>
            <h4 className="font-script text-3xl text-rose-gold-700">
              Apan & Azzahra
            </h4>
            <div className="text-[10px] text-stone-400 font-sans tracking-widest pt-8">
              #ApanAzzahraWedding
            </div>
          </div>
        </footer>

        {/* Floating Mobile Navigation (Only visible on screens < 1024px) */}
        <BottomNav />
      </main>

      {/* Background Music Player (Floats on bottom-right, only shown when invitation is opened) */}
      {isOpened && (
        <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      )}
    </div>
  );
};

// Mini Countdown helper for the desktop left fixed sidebar
const DesktopCountdown: React.FC = () => {
  const targetDate = new Date('2026-10-12T09:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const calculate = () => {
      const difference = targetDate - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 text-white">
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold font-sans">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="text-[9px] uppercase tracking-wider text-rose-gold-200 font-semibold">Hari</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold font-sans">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-[9px] uppercase tracking-wider text-rose-gold-200 font-semibold">Jam</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold font-sans">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-[9px] uppercase tracking-wider text-rose-gold-200 font-semibold">Mnt</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold font-sans">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-[9px] uppercase tracking-wider text-rose-gold-200 font-semibold">Dtk</span>
      </div>
    </div>
  );
};

export default App;