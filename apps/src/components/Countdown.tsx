import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const targetDate = new Date('2026-09-06T08:00:00').getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [hasPassed, setHasPassed] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
      
      const now = new Date().getTime();
      if (targetDate - now <= 0) {
        setHasPassed(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeItems = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <div className="relative bg-white px-6 py-12 text-center border-b border-rose-gold-100 overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-gold-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-md mx-auto">
        <h3 className="font-serif text-lg font-semibold tracking-wider text-sage-800 uppercase mb-6">
          Menuju Hari Bahagia
        </h3>

        {hasPassed ? (
          <div className="font-serif text-2xl font-bold text-rose-gold-700 italic py-4 animate-fade-in">
            Hari Bahagia Telah Tiba! ✿
          </div>
        ) : (
          <div className="flex justify-center gap-3 md:gap-4">
            {timeItems.map((item, index) => (
              <div
                key={index}
                className="bg-stone-50 border border-rose-gold-100 rounded-2xl w-18 md:w-20 py-3 flex flex-col items-center justify-center shadow-sm transition-all hover:scale-105"
              >
                <span className="font-serif text-2xl md:text-3xl font-bold text-rose-gold-800 leading-none">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] md:text-xs text-stone-500 font-bold tracking-wider uppercase mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <p className="text-stone-500 text-xs md:text-sm italic font-serif mt-6">
          Mohon do'a restu agar seluruh prosesi berjalan lancar dan penuh berkah.
        </p>
      </div>
    </div>
  );
};

export default Countdown;
