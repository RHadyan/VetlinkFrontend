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
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 light:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 overflow-hidden">

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
              <button class="text-red-500 hover:text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
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
              <button class="text-red-500 hover:text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
