# 💍 Website Undangan Pernikahan Digital

Website undangan pernikahan digital interaktif dan elegan untuk pasangan **Apan & Azzahra**, dibangun menggunakan teknologi web modern, animasi halus, serta desain responsif berbasis *Soft Pastel Botanical / Rose Gold & Sage*.

---

## ✨ Fitur Utama

- 💌 **Cover Sampul Interaktif**: Layar pembuka personalisasi nama tamu undangan dengan tombol pembuka.
- 🎵 **Music Player Background**: Musik latar belakang otomatis yang terhubung dengan Vercel Blob Storage, dilengkapi animasi *spinning disc* dan *equalizer bar*.
- ⏳ **Real-Time Countdown Timer**: Hitung mundur waktu menuju hari bahagia pernikahan.
- 👰🤵 **Profil Mempelai**: Informasi lengkap pengantin pria dan wanita beserta tautan sosial media Instagram.
- 📍 **Detail Acara & Peta**: Informasi jadwal Akad Nikah & Resepsi beserta tombol navigasi ke Google Maps.
- 🖼️ **Galeri Foto Lightbox**: Tampilan foto kenangan dengan efek perbesar gambar (*lightbox preview*).
- 🎁 **Amplop Digital (Gift)**: Informasi rekening dan alamat pengiriman hadiah dilengkapi fitur *One-Click Copy* (salin nomor rekening).
- 📝 **RSVP & Buku Tamu**: Formulir konfirmasi kehadiran dan pengiriman ucapan doa secara *real-time*.
- 📱 **Navigasi Melayang (Bottom Nav)**: Navigasi intuitif untuk pengalaman pengguna terbaik di perangkat mobile.

---

## 🛠️ Teknologi Yang Digunakan

| Teknologi | Fungsi |
| :--- | :--- |
| **React 19** | Library UI utama berbasis komponen |
| **TypeScript** | *Type safety* dan skala kode yang lebih baik |
| **Vite 8** | Bundler kilat untuk pengembangan & *production build* |
| **TailwindCSS v4** | *Framework styling* modern dan responsif |
| **Framer Motion** | Animasi halus dan mikro-interaksi |
| **Firebase** | Layanan database real-time untuk ucapan & RSVP |
| **Vercel Blob Storage** | *Cloud media storage* untuk audio musik |

---

## 🚀 Panduan Memulai (Local Development)

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi 18+) dan `npm`.

### 1. Clone Repository
```bash
git clone https://github.com/username/website-pernikahan.git
cd website-pernikahan
```

### 2. Install Dependensi
```bash
npm install
cd apps
npm install
```

### 3. Jalankan Server Lokal
```bash
npm run dev
```
Buka browser dan akses alamat `http://localhost:5173`.

### 4. Production Build
Untuk menguji hasil kompilasi produksi sebelum di-deploy:
```bash
npm run build
```

---

## 🌐 Panduan Deployment

Website ini siap di-deploy secara langsung ke **Vercel**, **Netlify**, atau **GitHub Pages**.

1. Connect repository GitHub Anda ke [Vercel](https://vercel.com).
2. Tentukan **Root Directory**: `apps`
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Klik **Deploy**!

---

## 📄 Lisensi

Dibuat dengan ❤️ untuk Pernikahan **Apan & Azzahra**.
