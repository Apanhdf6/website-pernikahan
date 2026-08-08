export interface WeddingData {
    groom: {
        nickname: string;
        fullName: string;
        parents: string;
        instagram: string;
        image: string;
    };
    bride: {
        nickname: string;
        fullName: string;
        parents: string;
        instagram: string;
        image: string;
    };
    date: string;
    location: string;
    theme: string;
}

export const weddingInfo: WeddingData = {
    groom: {
        nickname: "Apan",
        fullName: "Apan Fadilah",
        parents: "Putra ke-2 dari Bapak Zakaria Ansor (alm)",
        instagram: "apanhdf",
        image: "https://eedybzczj6qzwhpy.public.blob.vercel-storage.com/pictures/Apan.jpg",
    },
    bride: {
        nickname: "Azzahra",
        fullName: "Azzahra Sabila Ababil",
        parents: "Putri ke-3 dari Bapak Nana Rohana",
        instagram: "azhrasbl_04",
        image: "https://eedybzczj6qzwhpy.public.blob.vercel-storage.com/pictures/Azzahra.jpg",
    },
    date: "Minggu, 06 September 2026",
    location: "Dusun Desa Rt 04 Rw 01 Desa Kertaharja Kec Cijeungjing Kab Ciamis Jawa Barat",
    theme: "Soft Pastel Botanical",
};