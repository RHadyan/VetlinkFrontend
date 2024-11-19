<template>
  <div
    class="flex items-center justify-center font-poppins min-h-screen bg-gray-100"
  >
    <div
      class="p-4 flex-col md:flex-row h-10/12 w-11/12 bg-white rounded-lg space-y-2 shadow-md"
    >
      <p v-if="loading" class="text-center text-gray-500">Loading...</p>

      <!-- Show error message if the API call fails -->
      <p v-if="error" class="text-center text-red-500">{{ error }}</p>
      <div class="items-center">
        <router-link to="/forum" class="hover:bg-opacity-80 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="36"
            viewBox="0 0 91 54"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54H64C78.9117 54 91 41.9117 91 27C91 12.0883 78.9117 0 64 0H27ZM26 26.5831C26 25.662 26.3622 24.7786 27.0069 24.1269L39.9892 11.0187C40.6348 10.3667 41.5105 10.0002 42.4237 10C43.3369 9.99978 44.2128 10.3658 44.8587 11.0175C45.5046 11.6693 45.8675 12.5533 45.8678 13.4752C45.868 14.3971 45.5054 15.2814 44.8598 15.9334L37.7535 23.1074H64.2299C65.1431 23.1074 66.0188 23.4736 66.6645 24.1254C67.3102 24.7772 67.6729 25.6613 67.6729 26.5831C67.6729 27.5049 67.3102 28.389 66.6645 29.0409C66.0188 29.6927 65.1431 30.0589 64.2299 30.0589H37.7535L44.8598 37.2328C45.1796 37.5557 45.4333 37.939 45.6064 38.3608C45.7795 38.7826 45.8686 39.2348 45.8686 39.6914C45.8686 40.1479 45.7795 40.6001 45.6064 41.0219C45.4333 41.4437 45.1796 41.827 44.8598 42.1499C44.54 42.4727 44.1603 42.7288 43.7425 42.9036C43.3246 43.0783 42.8768 43.1682 42.4245 43.1682C41.9722 43.1682 41.5244 43.0783 41.1065 42.9036C40.6887 42.7288 40.309 42.4727 39.9892 42.1499L27.0069 29.0393C26.3622 28.3876 26 27.5042 26 26.5831Z"
              class="fill-current text-[#FF004E] group-hover:text-[#B08BBB]"
            />
          </svg>
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4">
        <div
          style="max-width: 550px; max-height: 550px; overflow: hidden"
          class="rounded-xl"
        >
          <img
           :src="postData.pet_image"
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
                src="@/assets/images/cat1.png"
                alt="Post Pict"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
            <div v-if="postData">
              <p class="font-bold text-3xl">{{ postData?.user?.username || 'Loading.....' }}</p>
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
              <p class="font-normal text-base">{{ postData.last_seen }}</p>
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
               {{ postData.title }}
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
              <p class="font-light text-base text-pretty">{{ postData.last_seen }}</p>
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
                {{ postData.characteristics }}
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
                {{ postData.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import axios from "axios";
import router from "../router";
import apiClient from "@/api/axiosInstance";


export default {
  setup() {
    const route = useRoute();
    const postData = ref([]);

    // Retrieve query parameters
    const idPost = ref(route.query.idPost || "Unknown Clinic");
    console.log(idPost.value);
    const loading = ref(true);
    const error = ref(null);

    const fetchPostDetails = async () => {
      try {
        // Simulate getting the token (assuming it's stored in localStorage)
        const token = localStorage.getItem("authToken");

        // Make API call with Axios, including Bearer token in headers
        const response = await apiClient.get(
          `admin/forum/${idPost.value}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Save the response data to the postData ref
        postData.value = response.data.data;
        // console.log(postData);
      } catch (err) {
        console.error("Error fetching post details:", err);
        error.value = "Failed to load post details. Please try again later.";
      } finally {
        loading.value = false;
      }
    };
    onMounted(() => {
      fetchPostDetails();
    });
    return {
      idPost,
      fetchPostDetails,
      loading,
      error,
      postData,
    };
  },
};
</script>
