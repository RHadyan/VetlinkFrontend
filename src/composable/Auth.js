import { ref } from "vue";
import axios from "axios";
import apiClient from "@/api/axiosInstance";

import router from "../router";

export function useAuth() {
  const error = ref(null);
  const identifier = ref("");
  const password = ref("");

  async function login() {
    error.value = null;
    try {
      const response = await apiClient.post("login", {
        identifier: identifier.value,
        password: password.value,
      });
      localStorage.setItem("authToken", response.data.data.token);
      localStorage.setItem("userRole", response.data.data.user.role);

      console.log("Token disimpan:", response.data.data.token); // Log token setelah berhasil disimpan
      console.log("Admin:", response.data.data.user.role); // Log token setelah berhasil disimpan
      if (response.data.data.user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/user");
      }
    } catch (err) {
      error.value = "Login gagal. Silakan coba lagi.";
    }
  }

  function logout() {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("userRole");
    console.log("Token yang dihapus:", token);
    console.log("role yang dihapus:", role);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    router.push("/login");
  }

  function checkAuth() {
    const token = localStorage.getItem("authToken");
    console.log("Token saat checkAuth:", token); // Log token ketika mengecek autentikasi
    if (token) {
      router.push("/");
    }
  }

  return {
    error,
    identifier,
    password,
    login,
    logout,
    checkAuth,
  };
}
