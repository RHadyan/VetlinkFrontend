<template>
  <div class="flex-1 overflow-y-auto p-4 overflow-hidden">
    <!-- Container untuk grid layout -->
    <div class="container mx-auto overflow-hidden">
      <!-- Grid layout -->

      <!-- Search bar -->
      <form class="max-w-md mx-auto mb-5">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 light:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search "
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-1.5 bg-[#3FA2F6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 overflow-hidden"
      >
        <!-- Card 1 -->
        <div class="rounded w-64 overflow-hidden shadow-lg bg-white">
          <img
            class="w-64 h-64 object-cover"
            src="@/assets/images/kucing.jpeg"
            alt="Foto Hewan Peliharaan"
          />
          <div class="flex items-center justify-between m-3">
            <div>
              <p class="text-gray-900 font-medium text-base">namapengguna1</p>
              <p class="text-gray-600 text-sm">Lokasi1</p>
            </div>

            <div>
              <v-btn variant="plain" icon>
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

        <!-- Card 2 -->
        <div class="rounded w-64 overflow-hidden shadow-lg bg-white">
          <img
            class="w-64 h-64 object-cover"
            src="@/assets/images/kucing.jpeg"
            alt="Foto Hewan Peliharaan"
          />
          <div class="flex items-center justify-between m-3">
            <div>
              <p class="text-gray-900 font-medium">namapengguna1</p>
              <p class="text-gray-600 text-sm">Lokasi1</p>
            </div>

            <div>
              <v-btn variant="plain" icon>
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
  </div>
</template>
