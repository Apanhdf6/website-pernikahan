import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase';

interface Wish {
  id: string;
  name: string;
  attendance: 'hadir' | 'absen' | 'ragu';
  guestsCount: number;
  message: string;
  timestamp: string;
}

const RSVP: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'hadir' | 'absen' | 'ragu'>('hadir');
  const [guestsCount, setGuestsCount] = useState(1);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isFirebaseConfigured && db) {
      const q = query(collection(db, 'wishes'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const wishesData: Wish[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          wishesData.push({
            id: doc.id,
            name: data.name || '',
            attendance: data.attendance || 'hadir',
            guestsCount: data.guestsCount || 0,
            message: data.message || '',
            timestamp: data.timestamp || '',
          });
        });
        
        setWishes(wishesData);
      }, (error) => {
        console.error("Firestore subscription error, falling back to localStorage:", error);
        loadFromLocalStorage();
      });
      return () => unsubscribe();
    } else {
      loadFromLocalStorage();
    }
  }, []);

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('wedding_wishes');
    if (saved) {
      setWishes(JSON.parse(saved));
    } else {
      localStorage.setItem('wedding_wishes', JSON.stringify([]));
      setWishes([]);
    }
  };

  const saveToLocalStorage = (dateStr: string) => {
    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      attendance,
      guestsCount: attendance === 'hadir' ? guestsCount : 0,
      message: message.trim(),
      timestamp: dateStr
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);
    localStorage.setItem('wedding_wishes', JSON.stringify(updatedWishes));

    // Reset Form
    setName('');
    setMessage('');
    setGuestsCount(1);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    const dateStr = new Date().toLocaleString('id-ID', options);

    if (isFirebaseConfigured && db) {
      try {
        await addDoc(collection(db, 'wishes'), {
          name: name.trim(),
          attendance,
          guestsCount: attendance === 'hadir' ? guestsCount : 0,
          message: message.trim(),
          timestamp: dateStr,
          createdAt: Date.now()
        });

        // Reset Form
        setName('');
        setMessage('');
        setGuestsCount(1);
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error("Error adding document to Firestore: ", error);
        saveToLocalStorage(dateStr);
      }
    } else {
      saveToLocalStorage(dateStr);
    }
  };

  const getAttendanceLabel = (status: Wish['attendance']) => {
    switch (status) {
      case 'hadir':
        return { text: 'Hadir', class: 'bg-emerald-50 text-emerald-700 border-emerald-100' };
      case 'absen':
        return { text: 'Tidak Hadir', class: 'bg-rose-50 text-rose-700 border-rose-100' };
      case 'ragu':
        return { text: 'Ragu-Ragu', class: 'bg-amber-50 text-amber-700 border-amber-100' };
    }
  };

  return (
    <section id="rsvp" className="relative bg-[#FCFAF6] px-6 py-16 text-center border-b border-rose-gold-100 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-15%] w-80 h-80 bg-rose-gold-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-55"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-80 h-80 bg-sage-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-55"></div>

      {/* Section Header */}
      <div className="relative z-10 max-w-md mx-auto mb-10">
        <span className="font-script text-4xl text-rose-gold-600 block mb-2">Konfirmasi Kehadiran</span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-sage-800">
          RSVP & Ucapan
        </h2>
        <div className="h-[2px] bg-rose-gold-200 w-16 mx-auto mt-4"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto space-y-8 text-left">
        
        {/* RSVP Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-md border border-rose-gold-200/50 rounded-3xl p-6 shadow-sm space-y-4"
        >
          {isSubmitted && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm px-4 py-3 rounded-2xl text-center font-medium animate-fade-in">
              Terima kasih! Ucapan Anda telah terkirim.
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="rsvp-name" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5 font-sans">
              Nama Lengkap
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className="w-full px-4 py-2.5 rounded-2xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-rose-gold-400 focus:outline-none text-sm transition-colors text-stone-700"
            />
          </div>

          {/* Attendance Selection */}
          <div>
            <label htmlFor="rsvp-attendance" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5 font-sans">
              Konfirmasi Kehadiran
            </label>
            <select
              id="rsvp-attendance"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value as Wish['attendance'])}
              className="w-full px-4 py-2.5 rounded-2xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-rose-gold-400 focus:outline-none text-sm transition-colors text-stone-700"
            >
              <option value="hadir">Saya akan Hadir</option>
              <option value="absen">Maaf, Saya Tidak Bisa Hadir</option>
              <option value="ragu">Masih Ragu-Ragu</option>
            </select>
          </div>

          {/* Guests Count (Conditional) */}
          {attendance === 'hadir' && (
            <div className="animate-fade-in">
              <label htmlFor="rsvp-guests" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5 font-sans">
                Jumlah Tamu (termasuk Anda)
              </label>
              <input
                id="rsvp-guests"
                type="number"
                min="1"
                max="5"
                value={guestsCount}
                onChange={(e) => setGuestsCount(parseInt(e.target.value) || 1)}
                className="w-full px-4 py-2.5 rounded-2xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-rose-gold-400 focus:outline-none text-sm transition-colors text-stone-700"
              />
            </div>
          )}

          {/* Wish Message */}
          <div>
            <label htmlFor="rsvp-message" className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5 font-sans">
              Ucapan / Doa Restu
            </label>
            <textarea
              id="rsvp-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan pesan manis & doa restu untuk kedua mempelai di sini..."
              className="w-full px-4 py-2.5 rounded-2xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:border-rose-gold-400 focus:outline-none text-sm transition-colors text-stone-700 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium text-sm shadow-md shadow-sage-600/10 transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer focus:outline-none"
          >
            Kirim RSVP & Ucapan
          </button>
        </form>

        {/* Wishes List (Guestbook Wall) */}
        <div className="space-y-4">
          <h3 className="font-serif text-base font-bold text-stone-700 uppercase tracking-wider mb-2">
            Doa Restu Tamu ({wishes.length})
          </h3>

          <div className="max-h-96 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
            {wishes.length === 0 ? (
              <div className="bg-white border border-stone-100 rounded-2xl p-6 text-center shadow-sm">
                <p className="text-stone-400 text-xs font-serif italic">
                  Belum ada ucapan. Jadilah yang pertama memberikan doa restu!
                </p>
              </div>
            ) : (
              wishes.map((w) => {
                const badge = getAttendanceLabel(w.attendance);
                return (
                  <div
                    key={w.id}
                    className="bg-white border border-stone-100 rounded-2xl p-4 shadow-sm space-y-2 hover:shadow transition-shadow"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-stone-800 text-sm font-sans truncate">
                        {w.name}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badge.class}`}>
                        {badge.text} {w.attendance === 'hadir' && `(${w.guestsCount} orang)`}
                      </span>
                    </div>
                    
                    <p className="text-stone-600 text-xs font-serif leading-relaxed whitespace-pre-line italic">
                      "{w.message}"
                    </p>

                    <div className="text-[10px] text-stone-400 text-right font-sans">
                      {w.timestamp}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RSVP;
