import { ref } from "vue";
import axios from "axios";
import router from "@/router";

export function useRegister() {
  // Variabel untuk menyimpan data form
  const name = ref("");
  const username = ref("");
  const email = ref("");
  const phone = ref("");
  const clinic_name = ref("");
  const latitude = ref("");
  const longitude = ref("");
  const city = ref("");
  const address = ref("");
  const open_time = ref("");
  const close_time = ref("");
  const password = ref("");
  const role = ref("veteriner");
  const error = ref(null);

  // Fungsi register
  const register = async () => {
    error.value = null; // Menghapus error sebelumnya jika ada
    try {
      // Mengirimkan data registrasi ke API menggunakan POST request
      const response = await axios.post("http://localhost:8000/api/register", {
        role: role.value,
        name: name.value,
        username: username.value,
        email: email.value,
        phone: phone.value,
        clinic_name: clinic_name.value,
        latitude: latitude.value,
        longitude: longitude.value,
        city: city.value,
        address: address.value,
        open_time: open_time.value,
        close_time: close_time.value,
        password: password.value,
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
    username,
    email,
    phone,
    clinic_name,
    latitude,
    longitude,
    city,
    address,
    open_time,
    close_time,
    password,
    error,
    register,
  };
}
