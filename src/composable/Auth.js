import { ref } from "vue";
import axios from "axios";
import router from "../router";

export function useAuth() {
  const error = ref(null);
  const identifier = ref("");
  const password = ref("");

  async function login() {
    error.value = null;
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        identifier: identifier.value,
        password: password.value,
      });
      localStorage.setItem("authToken", response.data.data.token);
      console.log("Token disimpan:", response.data.data.token); // Log token setelah berhasil disimpan
      router.push("/");
    } catch (err) {
      error.value = "Login gagal. Silakan coba lagi.";
    }
  }

  function logout() {
    const token = localStorage.getItem("authToken");
    console.log("Token yang dihapus:", token);
    localStorage.removeItem("authToken");
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
