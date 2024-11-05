<template>
  <!-- Header untuk layar besar (desktop) -->
  <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
    <div class="w-1/2"></div>
    <div class="relative w-1/2 gap-2 flex justify-end">
      <div class="gap-y-1 justify-center items-center">
        <p class="font-semibold text-s" style="font-family: 'Poppins'">
          Ghaniyy Ramadhan
        </p>
        <p
          class="font-normal flex justify-end text-s"
          style="font-family: 'Poppins'"
        >
          Admin
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
  <header class="w-full bg-sidebar py-5 px-6 sm:hidden">
    <div class="flex items-center justify-between">
      <router-link
        to="/"
        class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
      >
        Admin
      </router-link>
      <button @click="toggleMenu" class="text-blue text-3xl focus:outline-none">
        <i v-if="!isOpen" class="fas fa-bars"></i>
        <!-- Icon hamburger -->
        <i v-else class="fas fa-times"></i>
        <!-- Icon close -->
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
import { ref } from "vue";

export default {
  setup() {
    const isOpen = ref(false);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleMenu,
    };
  },
};
</script>

<style>

/* Media query untuk layar besar */
@media (min-width: 640px) {
  .sm\\:hidden {
    display: none !important;
  }
}

/* Media query untuk layar kecil */
@media (max-width: 639px) {
  .sm\\:hidden {
    display: block !important;
  }
}
</style>
