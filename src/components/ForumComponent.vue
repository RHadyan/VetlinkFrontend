<template>
    <div class="flex-1 overflow-y-auto p-4">
      <!-- Container untuk grid layout -->
      <div class="container mx-auto">
        <!-- Grid layout -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Card 1 -->
  
          <div class="rounded overflow-hidden shadow-lg bg-white">
            <img
              class="w-full h-64 object-cover"
              src="@/assets/images/kucing.jpeg"
              alt="Foto Hewan Peliharaan"
            />
            <div class="px-6 py-4 flex justify-between items-center">
              <div class="flex items-center">
                <img
                  class="w-10 h-10 rounded-full mr-4"
                  src="@/assets/images/placeholderprofil.png"
                  alt="Avatar Pemilik"
                />
                <div>
                  <p class="text-gray-900 font-bold">namapengguna1</p>
                  <p class="text-gray-600 text-sm">Lokasi1</p>
                </div>
              </div>
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
  </template>
  