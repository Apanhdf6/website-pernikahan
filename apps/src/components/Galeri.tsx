import React, { useState } from 'react';

const Galeri: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
      caption: "Cinta & Komitmen"
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
      caption: "Menggenggam Esok"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
      caption: "Langkah Bersama"
    },
    {
      url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=600",
      caption: "Janji Suci"
    },
    {
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
      caption: "Tatapan Bahagia"
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600",
      caption: "Momen Indah"
    }
  ];

  return (
    <section id="galeri" className="relative bg-[#FCFAF6] px-6 py-16 text-center border-b border-rose-gold-100 overflow-hidden">
      {/* Background Soft Colors */}
      <div className="absolute top-[10%] left-[-10%] w-72 h-72 bg-rose-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-72 h-72 bg-sage-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      {/* Section Title */}
      <div className="relative z-10 max-w-md mx-auto mb-10">
        <span className="font-script text-4xl text-rose-gold-600 block mb-2">Galeri Foto</span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-sage-800">
          Kisah Kami
        </h2>
        <div className="h-[2px] bg-rose-gold-200 w-16 mx-auto mt-4"></div>
      </div>

      {/* Photos Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-3 max-w-md mx-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveImage(img.url)}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-rose-gold-100 shadow-sm cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <img
              src={img.url}
              alt={img.caption}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-rose-gold-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-serif uppercase tracking-widest bg-rose-gold-900/50 px-3 py-1.5 rounded-full backdrop-blur-[2px]">
                Perbesar
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-stone-900/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in cursor-zoom-out"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white hover:text-rose-gold-200 transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-black/30 focus:outline-none cursor-pointer"
            aria-label="Close image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Image */}
          <div className="max-w-4xl max-h-[85vh] w-full flex items-center justify-center p-2 relative">
            <img
              src={activeImage}
              alt="Expanded preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg border border-white/10 shadow-2xl animate-fade-in-up"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeri;
