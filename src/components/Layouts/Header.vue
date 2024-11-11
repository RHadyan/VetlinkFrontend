<template>
  <!-- Header untuk layar besar (desktop) -->
  <header class="w-full items-center bg-white py-2 px-6 hidden md:flex">
    <div class="w-1/2"></div>
    <div class="relative w-1/2 gap-2 flex justify-end">
      <div class="gap-y-1 justify-center items-center">
        <!-- Spinner Loading jika profile belum siap -->
        <div v-if="loading" class="blurred-text">Loading............</div>
        
        <!-- Data profile jika sudah siap -->
        <p v-else class="font-semibold text-s" style="font-family: 'Poppins'">
          {{ profile.name }}
        </p>

        <div v-if="loading" class="blurred-text">Loading...</div>
        <p
        v-else
          class="font-normal flex justify-end text-s"
          style="font-family: 'Poppins'"
        >
          {{ profile.role }}
        </p>
      </div>
      <button
        @click="toggleMenu"
        class="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
      >
        <img src="" />
      </button>
      <button
        v-if="isOpen"
        @click="toggleMenu"
        class="h-full w-full fixed inset-0 cursor-default"
      ></button>
      <div
        v-if="isOpen"
        class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16"
      >
        <router-link
          to="/account"
          class="block px-4 py-2 account-link hover:text-white"
        >
          Account
        </router-link>
        <router-link
          to="/signout"
          class="block px-4 py-2 account-link hover:text-white"
        >
          Sign Out
        </router-link>
      </div>
    </div>
  </header>

  <!-- Header untuk layar kecil (mobile) -->
  <header class="w-full bg-sidebar py-5 px-6 md:hidden">
    <div class="flex items-center justify-between">
      <router-link
        to="/"
        class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
      >
        Admin
      </router-link>
      <button @click="toggleMenu" class="text-blue text-3xl focus:outline-none">
        <i v-if="!isOpen" class="fas fa-bars"></i>
        <i v-else class="fas fa-times"></i>
      </button>
    </div>
    <!-- Dropdown Nav yang muncul saat menu dibuka di layar kecil -->
    <nav :class="isOpen ? 'flex flex-col' : 'hidden'" class="pt-4">
      <router-link
        to="/"
        class="flex m-3 rounded-lg items-center text-[#878787] py-4 pl-4 nav-item transition duration-300 ease-in-out"
      >
        <img src="@/assets/images/dashboard.png" class="mr-3 w-6" alt="" />
        Dashboard
      </router-link>
      <router-link
        to="/"
        class="flex m-3 rounded-lg items-center text-[#878787] py-4 pl-4 nav-item transition duration-300 ease-in-out"
      >
        <img src="@/assets/images/dashboard.png" class="mr-3 w-6" alt="" />
        Dashboar2
      </router-link>
      <router-link
        to="/signout"
        class="mt-5 m-3 rounded-lg flex items-center text-[#878787] opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition duration-300 ease-in-out"
      >
        <i class="fas fa-sign-out-alt mr-3"></i>
        Sign out
      </router-link>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import { useProfile } from "@/composable/profile";

export default {
  setup() {
    const isOpen = ref(false);
    const loading = ref(true);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    // Mengambil variabel reaktif dari useProfile composable
    const { profile, error, getProfile } = useProfile();

    // Mendapatkan data profil saat komponen di-mount
    onMounted(async () => {
      loading.value = true; // Set loading ke true ketika mulai memuat data
      await getProfile();
      loading.value = false; // Set loading ke false ketika data selesai dimuat
    });

    return {
      profile,
      error,
      loading,
      isOpen,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
/* CSS untuk spinner loading */

.blurred-text {
  filter: blur(5px);
  color: #ccc;
}
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Media query untuk layar besar */
@media (min-width: 640px) {
  .md\\:hidden {
    display: none !important;
  }
}

/* Media query untuk layar kecil */
@media (max-width: 639px) {
  .md\\:hidden {
    display: block !important;
  }
}
</style>
