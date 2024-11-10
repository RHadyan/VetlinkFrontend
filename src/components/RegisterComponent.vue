<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="flex flex-col md:flex-row h-auto md:h-[600px] w-11/12 md:w-3/4 space-y-4 md:space-y-0 md:space-x-6 bg-[#3FA2F6] rounded-lg shadow-md"
    >
      <!-- Container Logo dan Form -->
      <div
        class="flex flex-col items-center justify-center p-6 space-y-6 md:flex-1"
      >
        <!-- Logo -->
        <div class="flex justify-center items-center">
          <div class="justify-center flex">
            <img
              src="@/assets/images/logo-samping.png"
              alt="Vet Link"
              class="h-[40%] w-[40%]"
            />
          </div>
        </div>

        <!-- Form Register -->
        <form @submit.prevent="register" class="space-y-6 w-full max-w-sm">
          <div>
            <input
              type="text"
              v-model="name"
              required
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="email"
              required
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="phone"
              required
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              type="password"
              v-model="password"
              required
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Password"
            />
          </div>
          <div class="flex justify-center">
            <button
              type="submit"
              class="w-32 h-10 text-xl font-medium text-white bg-[#FFA33C] rounded-full hover:bg-[#B08BBB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.1)"
            >
              Register
            </button>
          </div>
          <!-- Menampilkan pesan error jika ada -->
          <p v-if="error" class="text-red-500">{{ error }}</p>
        </form>
      </div>

      <!-- Gambar -->
      <div
        class="flex justify-center md:justify-end items-center md:flex-1 p-4"
      >
        <img
          src="@/assets/images/login-img.png"
          class="h-48 md:h-full w-full md:w-auto object-cover"
          alt="Pictpet"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useRegister } from "@/composable/register";

export default {
  setup() {
    // Menggunakan composable register
    const { name, email, phone, password, error, register } = useRegister();

    return {
      name,
      email,
      phone,
      password,
      error,
      register,
    };
  },
};
</script>

<style scoped>
/* Tambahkan CSS sesuai kebutuhan Anda */
</style>
