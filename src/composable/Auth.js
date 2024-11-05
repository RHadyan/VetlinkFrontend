// src/composables/useAuth.js
import { ref } from "vue";
import axios from "axios";
import router from "../router";

export function useAuth() {
  const error = ref(null);

  async function login(email, password) {
    error.value = null;
    try {
      const response = await axios.post("https://api-url-anda.com/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      router.push("/dashboard");
    } catch (err) {
      error.value = "Login gagal. Silakan coba lagi.";
    }
  }

  function logout() {
    localStorage.removeItem("token");
    router.push("/");
  }

  return {
    error,
    login,
    logout,
  };
}
