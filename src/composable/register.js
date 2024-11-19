import { ref } from "vue";
import axios from "axios";
import router from "@/router";
import apiClient from "@/api/axiosInstance";


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
  const clinic_image = ref(null); // Add clinic image field
  const document = ref(null); // Add document file field
  const error = ref(null);


  const handleClinicImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      clinic_image.value = file;
    }
  };

  const handleDocumentFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      document.value = file;
    }
  };

  // Fungsi register
  const register = async () => {
    error.value = null; // Menghapus error sebelumnya jika ada
    try {
      // Membuat objek form data untuk mengirim file
      const formData = new FormData();
      formData.append("role", role.value);
      formData.append("name", name.value);
      formData.append("username", username.value);
      formData.append("email", email.value);
      formData.append("phone", phone.value);
      formData.append("clinic_name", clinic_name.value);
      formData.append("latitude", latitude.value);
      formData.append("longitude", longitude.value);
      formData.append("city", city.value);
      formData.append("address", address.value);
      formData.append("open_time", open_time.value);
      formData.append("close_time", close_time.value);
      formData.append("password", password.value);
      formData.append("register_status_pesan", password.value);

      if (clinic_image.value) {
        formData.append("clinic_image", clinic_image.value);
      }
      if (document.value) {
        formData.append("document", document.value);
      }

      // Mengirimkan data registrasi ke API menggunakan POST request
      const response = await apiClient.post(
        "register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Jika berhasil, arahkan ke halaman login atau dashboard
      if (response.status === 201) {
        router.push("/");
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
    clinic_image,
    document,
    error,
    register,
    handleClinicImageUpload,
    handleDocumentFileUpload,
  };
}
