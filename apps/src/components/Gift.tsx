import React, { useState } from 'react';

const Gift: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const bankAccounts = [
    {
      bank: "Bank Jago",
      number: "105372029877",
      owner: "Apan Fadilah",
      isWallet: false
    },
    {
      bank: "Dana",
      number: "085759439637",
      owner: "Azzahra Sabila Ababil",
      isWallet: true
    }
  ];

  const handleCopy = (num: string, bank: string) => {
    navigator.clipboard.writeText(num);
    setCopiedAccount(bank);
    setTimeout(() => {
      setCopiedAccount(null);
    }, 2000);
  };

  return (
    <section id="gift" className="relative bg-[#FDFBF7] px-6 py-16 text-center border-b border-rose-gold-100 overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-[20%] right-[-10%] w-72 h-72 bg-sage-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-72 h-72 bg-rose-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      {/* Section Title */}
      <div className="relative z-10 max-w-md mx-auto mb-10">
        <span className="font-script text-4xl text-rose-gold-600 block mb-2">Tanda Kasih</span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-sage-800">
          Kirim Kado / Angpao
        </h2>
        <div className="h-[2px] bg-rose-gold-200 w-16 mx-auto mt-4"></div>
        <p className="text-stone-500 font-serif italic text-sm mt-6 leading-relaxed max-w-xs mx-auto">
          Doa restu Anda merupakan karunia terindah bagi kami. Namun apabila Anda ingin memberikan tanda kasih, Anda dapat mengirimkannya melalui:
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-6 max-w-md mx-auto">
        
        {/* Bank Transfer Cards */}
        {bankAccounts.map((acc, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-md border border-rose-gold-200/50 rounded-3xl p-6 shadow-sm flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            {/* Bank Card Decor */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-rose-gold-100/30 rounded-full"></div>

            <span className="font-sans font-black text-2xl text-sage-700 tracking-wider mb-2">
              {acc.bank}
            </span>
            <p className="text-stone-500 font-serif text-xs mb-1">
              {acc.isWallet ? "Nomor E-Wallet:" : "Nomor Rekening:"}
            </p>
            <p className="text-xl font-bold font-sans text-rose-gold-900 tracking-widest mb-1">
              {acc.number}
            </p>
            <p className="text-stone-600 font-serif text-sm italic mb-4">
              a.n. {acc.owner}
            </p>

            <button
              onClick={() => handleCopy(acc.number, acc.bank)}
              className="px-5 py-2 bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium text-xs shadow-sm shadow-sage-600/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer focus:outline-none"
            >
              {copiedAccount === acc.bank ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-300 animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Berhasil Disalin!
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0A2.247 2.247 0 0 1 13.5 4.75h-3c-.226 0-.443-.057-.632-.158m7.332 0c.259.027.518.068.774.123M7.67 3.888a2.25 2.25 0 0 0-1.012 1.014M5.934 5.304C5.7 5.72 5.578 6.19 5.578 6.682v10.58c0 .29.091.564.246.79M5.934 5.304a2.985 2.985 0 0 1 1.226-1.127M18.066 5.304c.23.416.352.886.352 1.378v10.58c0 .29-.091.564-.246.79M18.066 5.304a2.985 2.985 0 0 0-1.226-1.127m0 0A2.978 2.978 0 0 0 15 3.75h-3m-3.012 0A2.978 2.978 0 0 0 9 3.75M9 15h6m-6 3h6m-9-3h.008v.008H6V15Zm0 3h.008v.008H6V18Z" />
                  </svg>
                  {acc.isWallet ? "Salin Nomor" : "Salin Rekening"}
                </>
              )}
            </button>
          </div>
        ))}

        {/* Mailing Address Card */}
        <div className="bg-white/80 backdrop-blur-md border border-rose-gold-200/50 rounded-3xl p-6 shadow-sm flex flex-col items-center transition-all duration-300 hover:shadow-md">
          <div className="w-10 h-10 bg-rose-gold-50 rounded-full flex items-center justify-center text-rose-gold-700 mb-3 border border-rose-gold-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <span className="font-serif font-bold text-base text-rose-gold-900 uppercase tracking-wide mb-1">
            Kirim Kado Fisik
          </span>
          <div className="bg-[#FCFAF6] border border-rose-gold-100 rounded-2xl p-4 text-xs text-stone-600 font-serif leading-relaxed text-center max-w-xs mb-4">
            <p className="font-bold text-stone-700 font-sans mb-1">Rumah Mempelai Wanita</p>
            <p>Dusun Desa Rt 04 Rw 01 Desa Kertaharja Kec Cijeungjing Kab Ciamis Jawa Barat</p>
          </div>
          <button
            onClick={() => handleCopy("Dusun Desa Rt 04 Rw 01 Desa Kertaharja Kec Cijeungjing Kab Ciamis Jawa Barat", "Alamat")}
            className="px-5 py-2 bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium text-xs shadow-sm shadow-sage-600/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer focus:outline-none"
          >
            {copiedAccount === "Alamat" ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-300 animate-pulse">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Alamat Disalin!
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0A2.247 2.247 0 0 1 13.5 4.75h-3c-.226 0-.443-.057-.632-.158m7.332 0c.259.027.518.068.774.123M7.67 3.888a2.25 2.25 0 0 0-1.012 1.014M5.934 5.304C5.7 5.72 5.578 6.19 5.578 6.682v10.58c0 .29.091.564.246.79M5.934 5.304a2.985 2.985 0 0 1 1.226-1.127M18.066 5.304c.23.416.352.886.352 1.378v10.58c0 .29-.091.564-.246.79M18.066 5.304a2.985 2.985 0 0 0-1.226-1.127m0 0A2.978 2.978 0 0 0 15 3.75h-3m-3.012 0A2.978 2.978 0 0 0 9 3.75" />
                </svg>
                Salin Alamat
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Gift;
