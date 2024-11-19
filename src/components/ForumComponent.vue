<template>
  <div class="flex-1 overflow-y-auto p-4 overflow-hidden w-11/12">
    <div class="container mx-auto overflow-hidden">
      <div class="p-5">
        <!-- Search Input -->
        <v-text-field
          v-model="searchQuery"
          label="Cari pengguna atau lokasi"
          variant="outlined"
          class="mb-5 w-full"
          clearable
        ></v-text-field>

        <!-- Grid card -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-3 justify-items-center overflow-hidden"
        >
          <div
            v-for="card in paginatedCards"
            :key="card.id"
            class="rounded w-64 overflow-hidden shadow-md bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105"
            @click="postDetail(card)"
          >
            <img
              class="w-64 h-64 object-cover"
              :src="card.pet_image"
              :alt="card.username"
            />
            <div class="flex font-poppins items-center justify-between m-3">
              <div>
                <img
                  class="w-10 h-10 object-cover rounded-full"
                  :src="card.user.photo"
                  :alt="card.username"
                />
              </div>
              <div>
                <p class="text-gray-900 font-medium text-sm">
                  {{ card.user.username }}
                </p>
                <p class="text-gray-600 text-sm">{{ card.last_seen }}</p>
              </div>
              <div>
                <v-btn variant="plain" icon @click="deleteItem(card.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="35"
                    viewBox="0 0 32 35"
                    fill="none"
                  >
                    <path
                      d="M30.08 6.36364H24.32V4.45455C24.32 3.27313 23.848 2.1401 23.0078 1.30471C22.1677 0.469317 21.0282 0 19.84 0H12.16C10.9718 0 9.83232 0.469317 8.99216 1.30471C8.152 2.1401 7.68 3.27313 7.68 4.45455V6.36364H1.92C1.41078 6.36364 0.922425 6.56477 0.562355 6.9228C0.202285 7.28082 0 7.7664 0 8.27273C0 8.77905 0.202285 9.26463 0.562355 9.62266C0.922425 9.98068 1.41078 10.1818 1.92 10.1818H2.56V31.8182C2.56 32.6621 2.89714 33.4714 3.49726 34.0681C4.09737 34.6648 4.91131 35 5.76 35H26.24C27.0887 35 27.9026 34.6648 28.5027 34.0681C29.1029 33.4714 29.44 32.6621 29.44 31.8182V10.1818H30.08C30.5892 10.1818 31.0776 9.98068 31.4376 9.62266C31.7977 9.26463 32 8.77905 32 8.27273C32 7.7664 31.7977 7.28082 31.4376 6.9228C31.0776 6.56477 30.5892 6.36364 30.08 6.36364ZM11.52 4.45455C11.52 4.28577 11.5874 4.12391 11.7075 4.00457C11.8275 3.88523 11.9903 3.81818 12.16 3.81818H19.84C20.0097 3.81818 20.1725 3.88523 20.2925 4.00457C20.4126 4.12391 20.48 4.28577 20.48 4.45455V6.36364H11.52V4.45455ZM25.6 31.1818H6.4V10.1818H25.6V31.1818ZM14.08 15.2727V25.4545C14.08 25.9609 13.8777 26.4465 13.5176 26.8045C13.1576 27.1625 12.6692 27.3636 12.16 27.3636C11.6508 27.3636 11.1624 27.1625 10.8024 26.8045C10.4423 26.4465 10.24 25.9609 10.24 25.4545V15.2727C10.24 14.7664 10.4423 14.2808 10.8024 13.9228C11.1624 13.5648 11.6508 13.3636 12.16 13.3636C12.6692 13.3636 13.1576 13.5648 13.5176 13.9228C13.8777 14.2808 14.08 14.7664 14.08 15.2727ZM21.76 15.2727V25.4545C21.76 25.9609 21.5577 26.4465 21.1976 26.8045C20.8376 27.1625 20.3492 27.3636 19.84 27.3636C19.3308 27.3636 18.8424 27.1625 18.4824 26.8045C18.1223 26.4465 17.92 25.9609 17.92 25.4545V15.2727C17.92 14.7664 18.1223 14.2808 18.4824 13.9228C18.8424 13.5648 19.3308 13.3636 19.84 13.3636C20.3492 13.3636 20.8376 13.5648 21.1976 13.9228C21.5577 14.2808 21.76 14.7664 21.76 15.2727Z"
                      fill="#FF4E4E"
                    />
                  </svg>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
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
import { useForum } from "@/composable/forum";

export default {
  name: "Forum",
  setup() {
    const {
      searchQuery,
      paginatedCards,
      currentPage,
      totalPages,
      error, // Make error available to show in the component
      navigateToDetail,
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
      navigateToDetail,
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
