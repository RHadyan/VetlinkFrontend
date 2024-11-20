// src/plugins/vuetify.js
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css"; // Impor ikon Material Design

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#6200ea", // Ungu cerah untuk warna utama
          secondary: "#03dac6", // Aqua untuk warna sekunder
          accent: "#ff9800", // Oranye terang untuk warna aksen
          error: "#f44336", // Merah untuk status error
          info: "#2196f3", // Biru untuk status informasi
          success: "#4caf50", // Hijau untuk status sukses
          warning: "#fb8c00", // Oranye gelap untuk status peringatan
          background: "#f5f5f5", // Abu-abu terang untuk latar belakang
          surface: "#ffffff", // Putih untuk permukaan
          csv: "#FFA33C",
          pdf: "#B08BBB",
        },
      },
      dark: {
        colors: {
          primary: "#bb86fc", // Ungu lembut untuk warna utama
          secondary: "#03dac6", // Aqua untuk warna sekunder
          accent: "#ffb300", // Kuning terang untuk warna aksen
          error: "#cf6679", // Merah muda gelap untuk status error
          info: "#81d4fa", // Biru muda untuk status informasi
          success: "#66bb6a", // Hijau untuk status sukses
          warning: "#ffa726", // Oranye untuk status peringatan
          background: "#121212", // Hitam untuk latar belakang
          surface: "#1e1e1e", // Abu-abu sangat gelap untuk permukaan
          csv: "#FFA33C",
          pdf: "#B08BBB",
        },
      },
    },
    options: {
      customProperties: true, // Mengaktifkan custom properties CSS untuk lebih fleksibel
    },
  },
});
