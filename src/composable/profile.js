import { ref } from "vue";
import axios from "axios";
import router from "../router";
import apiClient from "@/api/axiosInstance";


export function useProfile() {
  const profile = ref(null); // Reaktif untuk menyimpan data profil
  const error = ref(null); // Reaktif untuk menyimpan pesan error jika terjadi kesalahan

  async function getProfile() {
    try {
      const token = localStorage.getItem("authToken"); // Mengambil token dari localStorage
      if (!token) {
        router.push("/");
      }

      // Mengirim permintaan GET untuk mendapatkan profil pengguna
      const response = await apiClient.get("profile", {
        headers: {
          Authorization: `Bearer ${token}`, // Mengirim token dalam header Authorization
        },
      });

      profile.value = response.data.data; // Menyimpan data profil ke dalam variabel `profile`
    } catch (err) {
      error.value = "Gagal mengambil data profil. Silakan coba lagi.";
      console.error(err);

      // Optional: Jika terjadi error autentikasi, bisa diarahkan ke halaman login
      if (err.response && err.response.status === 401) {
        router.push("/");
      }
    }
  }

  return {
    profile,
    error,
    getProfile,
  };
}
