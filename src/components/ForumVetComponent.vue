<template>
  <div
    class="flex items-center w-full justify-center font-poppins min-h-screen bg-gray-100"
  >
    <div
      class="p-4 flex-col md:flex-row h-10/12 w-11/12 bg-white rounded-lg space-y-2 shadow-md"
    >
      <p v-if="loading" class="text-center text-gray-500">Loading...</p>

      <!-- Show error message if the API call fails -->
      <p v-if="error" class="text-center text-red-500">{{ error }}</p>

      <div
        v-for="(card, index) in paginatedCards"
        :key="index"
        class="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4"
      >
        <div
          style="max-width: 550px; max-height: 550px; overflow: hidden"
          class="rounded-xl"
        >
          <img
            :src="card.pet_image"
            alt="Post Pict"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </div>
        <div
          class="space-y-3 overflow-y-scroll no-scrollbar pe-5"
          style="max-height: 550px"
        >
          <div class="flex items-center space-x-2">
            <div
              class="rounded-full"
              style="width: 80px; height: 80px; overflow: hidden"
            >
              <img
                src="@/assets/images/defaultpfp.webp"
                alt="Post Pict"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
            <div v-if="card">
              <p class="font-bold text-3xl">
                {{ card.user.username || "Loading....." }}
              </p>
            </div>
          </div>
          <div
            class="flex items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="flex space-x-2 items-center">
              <p class="text-[#3FA2F6] text-xl font-medium">Lokasi</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="26"
                viewBox="0 0 2 36"
                fill="none"
              >
                <path
                  d="M1 1L1 35"
                  stroke="#3FA2F6"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div>
              <p class="font-normal text-base">
                {{ card.last_seen || "Loading....." }}
              </p>
            </div>
          </div>
          <div
            class="items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="items-center space-y-1">
              <p class="text-[#3FA2F6] text-xl font-medium ps-1">Judul</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="67"
                height="3"
                viewBox="0 0 89 3"
                fill="none"
              >
                <path
                  d="M2 2L87 2"
                  stroke="#3FA2F6"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="mt-2">
              <p class="font-normal text-base text-pretty">
                {{ card.title || "Loading....." }}
              </p>
            </div>
          </div>
          <div
            class="items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="items-center space-y-1">
              <p class="text-[#3FA2F6] text-xl font-medium ps-1">
                Terakhir Terlihat
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="3"
                viewBox="0 0 205 3"
                fill="none"
              >
                <path
                  d="M2 2L203 1.99998"
                  stroke="#3FA2F6"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="mt-2">
              <p class="font-light text-base text-pretty">
                {{ card.last_seen || "Loading....." }}
              </p>
            </div>
          </div>
          <div
            class="items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="items-center space-y-1">
              <p class="text-[#3FA2F6] text-xl font-medium ps-1">Ciri-ciri</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="3"
                viewBox="0 0 205 3"
                fill="none"
              >
                <path
                  d="M2 2L203 1.99998"
                  stroke="#3FA2F6"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="mt-2">
              <p class="font-light text-base text-pretty">
                {{ card.characteristics || "Loading....." }}
              </p>
            </div>
          </div>
          <div
            class="items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="items-center space-y-1">
              <p class="text-[#3FA2F6] text-xl ps-2 font-medium">Deskripsi</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="107"
                height="3"
                viewBox="0 0 205 3"
                fill="none"
              >
                <path
                  d="M2 2L203 1.99998"
                  stroke="#3FA2F6"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div
              class="mt-2 overflow-y-scroll no-scrollbar"
              style="max-height: 200px"
            >
              <p class="font-regular text-base text-pretty">
                {{ card.description || "Loading....." }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center space-x-4 py-5">
        <v-btn
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
          variant="outlined"
        >
          Previous
        </v-btn>
        <p class="text-lg font-semibold">
          {{ currentPage }} / {{ totalPages }}
        </p>
        <v-btn
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
          variant="outlined"
        >
          Next
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { useForum } from "@/composable/forumVets";

export default {
  name: "Forum",
  setup() {
    const {
      searchQuery,
      paginatedCards,
      currentPage,
      totalPages,
      error, // Make error available to show in the component
      changePage,
      deleteItem,
      postDetail,
    } = useForum();

    return {
      searchQuery,
      paginatedCards,
      currentPage,
      totalPages,
      error, // Make error available to show in the component
      changePage,
      deleteItem,
      postDetail,
    };
  },
};
</script>

<style scoped>
/* Add any specific styles here */
</style>
