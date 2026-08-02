export interface WeddingData {
    groom: {
        nickname: string;
        fullName: string;
        parents: string;
    };
    bride: {
        nickname: string;
        fullName: string;
        parents: string;
    };
    date: string;
    location: string;
    theme: string;
}

export const weddingInfo: WeddingData = {
    groom: {
        nickname: "Apan Fadilah",
        fullName: "Apan Fadilah",
        parents: "Putra dari Bapak Zakaria Ansor & Ibu Rai Maskanah",
    },
    bride: {
        nickname: "Azzahra Sabila Ababil",
        fullName: "Azzahra Sabila Ababil",
        parents: "Putri dari Bapak Nana Rohana & Ibu Neni Heryani",
    },
    date: "Minggu, 12 Oktober 2026", // Bisa disesuaikan nanti
    location: "Ciamis, Jawa Barat",
    theme: "Soft Pastel Botanical",
};