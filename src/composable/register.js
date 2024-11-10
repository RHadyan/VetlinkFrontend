import { ref } from "vue";
import axios from "axios";
import router from "@/router";

export function useRegister() {
  // Variabel untuk menyimpan data form
  const name = ref("");
  const email = ref("");
  const phone = ref("");
  const password = ref("");
  const role = ref("veteriner");
  const username = ref("rafka");
  const error = ref(null);

  // Fungsi register
  const register = async () => {
    error.value = null; // Menghapus error sebelumnya jika ada
    try {
      // Mengirimkan data registrasi ke API menggunakan POST request
      const response = await axios.post("http://localhost:8000/api/register", {
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        role: role.value,
        username: username.value,
      });

      // Jika berhasil, arahkan ke halaman login atau dashboard
      if (response.status === 201) {
        router.push("/login");
      }
    } catch (err) {
      // Jika terjadi error, simpan pesan errornya
      if (err.response && err.response.data) {
        error.value = err.response.data.message;
      } else {
        error.value = "Registration failed. Please try again.";
      }
    }
  };

  return {
    name,
    email,
    phone,
    password,
    error,
    register,
  };
}
