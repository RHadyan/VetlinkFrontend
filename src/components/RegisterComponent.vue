<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="md:flex-row h-10/12 w-9/12 m-20 space-y-4 bg-[#3FA2F6] rounded-lg shadow-md"
    >
      <!-- Container Gambar dan Form -->
      <div class="items-start pt-4 ps-12 flex justify-start">
        <router-link to="/login" class="hover:bg-opacity-80 group">
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

      <div
        class="flex flex-col items-center ps-6 pe-6 pb-6 space-y-6 md:flex-1"
      >
        <!-- Gambar atas -->
        <div>
          <img
            src="@/assets/images/vertical-register.png"
            alt="Vet Link"
            class="h-[100%] w-[100%]"
          />
        </div>

        <!-- Form Register -->
        <form
          @submit.prevent="register"
          class="space-y-6 w-full md:w-[94%] max-w-[1020px] xl:text-lg"
        >
          <div>
            <input
              type="text"
              v-model="name"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Nama Lengkap"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="username"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Nama Pengguna"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="email"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="phone"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Nomor Handphone"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="clinic_name"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Nama Klinik"
            />
          </div>

          <!-- longitude,latitude -->
          <div class="space-y-1 md:text-lg sm:text-xs">
            <div class="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 20C8.02219 20 6.08879 19.4135 4.4443 18.3147C2.79981 17.2159 1.51809 15.6541 0.761209 13.8268C0.00433286 11.9996 -0.1937 9.98891 0.192152 8.0491C0.578004 6.10929 1.53041 4.32746 2.92894 2.92894C4.32746 1.53041 6.10929 0.578004 8.0491 0.192152C9.98891 -0.1937 11.9996 0.00433286 13.8268 0.761209C15.6541 1.51809 17.2159 2.79981 18.3147 4.4443C19.4135 6.08879 20 8.02219 20 10C19.9971 12.6513 18.9426 15.1932 17.0679 17.0679C15.1932 18.9426 12.6513 19.9971 10 20ZM10 2.5C8.51664 2.5 7.06659 2.93987 5.83323 3.76398C4.59986 4.58809 3.63856 5.75943 3.07091 7.12988C2.50325 8.50032 2.35473 10.0083 2.64411 11.4632C2.9335 12.918 3.64781 14.2544 4.6967 15.3033C5.7456 16.3522 7.08197 17.0665 8.53683 17.3559C9.99168 17.6453 11.4997 17.4968 12.8701 16.9291C14.2406 16.3614 15.4119 15.4001 16.236 14.1668C17.0601 12.9334 17.5 11.4834 17.5 10C17.4978 8.01156 16.7069 6.10518 15.3009 4.69914C13.8948 3.29309 11.9884 2.50221 10 2.5Z"
                  fill="#FF4E4E"
                />
                <path
                  d="M11.25 4.43164H8.75V11.795H11.25V4.43164Z"
                  fill="#FF4E4E"
                />
                <path
                  d="M11.3037 13.3283H8.80371V15.8283H11.3037V13.3283Z"
                  fill="#FF4E4E"
                />
              </svg>
              <p class="font-normal text-white text-base">
                Izinkan kami mengetahui lokasi Anda.
              </p>
            </div>

            <button @click="getPreciseLocation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="121"
                height="44"
                viewBox="0 0 161 44"
                fill="none"
              >
                <path
                  d="M139 0H22C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44H139C151.15 44 161 34.1503 161 22C161 9.84974 151.15 0 139 0Z"
                  fill="#B08BBB"
                />
                <path
                  d="M21.0573 26.16H25.7573V28H18.7773V14.1H21.0573V26.16ZM32.4441 28.18C31.4041 28.18 30.4641 27.9467 29.6241 27.48C28.7841 27 28.1241 26.3333 27.6441 25.48C27.1641 24.6133 26.9241 23.6133 26.9241 22.48C26.9241 21.36 27.1707 20.3667 27.6641 19.5C28.1574 18.6333 28.8307 17.9667 29.6841 17.5C30.5374 17.0333 31.4907 16.8 32.5441 16.8C33.5974 16.8 34.5507 17.0333 35.4041 17.5C36.2574 17.9667 36.9307 18.6333 37.4241 19.5C37.9174 20.3667 38.1641 21.36 38.1641 22.48C38.1641 23.6 37.9107 24.5933 37.4041 25.46C36.8974 26.3267 36.2041 27 35.3241 27.48C34.4574 27.9467 33.4974 28.18 32.4441 28.18ZM32.4441 26.2C33.0307 26.2 33.5774 26.06 34.0841 25.78C34.6041 25.5 35.0241 25.08 35.3441 24.52C35.6641 23.96 35.8241 23.28 35.8241 22.48C35.8241 21.68 35.6707 21.0067 35.3641 20.46C35.0574 19.9 34.6507 19.48 34.1441 19.2C33.6374 18.92 33.0907 18.78 32.5041 18.78C31.9174 18.78 31.3707 18.92 30.8641 19.2C30.3707 19.48 29.9774 19.9 29.6841 20.46C29.3907 21.0067 29.2441 21.68 29.2441 22.48C29.2441 23.6667 29.5441 24.5867 30.1441 25.24C30.7574 25.88 31.5241 26.2 32.4441 26.2ZM39.658 22.48C39.658 21.3467 39.8846 20.3533 40.338 19.5C40.8046 18.6333 41.4446 17.9667 42.258 17.5C43.0713 17.0333 44.0046 16.8 45.058 16.8C46.3913 16.8 47.4913 17.12 48.358 17.76C49.238 18.3867 49.8313 19.2867 50.138 20.46H47.678C47.478 19.9133 47.158 19.4867 46.718 19.18C46.278 18.8733 45.7246 18.72 45.058 18.72C44.1246 18.72 43.378 19.0533 42.818 19.72C42.2713 20.3733 41.998 21.2933 41.998 22.48C41.998 23.6667 42.2713 24.5933 42.818 25.26C43.378 25.9267 44.1246 26.26 45.058 26.26C46.378 26.26 47.2513 25.68 47.678 24.52H50.138C49.818 25.64 49.218 26.5333 48.338 27.2C47.458 27.8533 46.3646 28.18 45.058 28.18C44.0046 28.18 43.0713 27.9467 42.258 27.48C41.4446 27 40.8046 26.3333 40.338 25.48C39.8846 24.6133 39.658 23.6133 39.658 22.48ZM51.6502 22.44C51.6502 21.3333 51.8768 20.3533 52.3302 19.5C52.7968 18.6467 53.4235 17.9867 54.2102 17.52C55.0102 17.04 55.8902 16.8 56.8502 16.8C57.7168 16.8 58.4702 16.9733 59.1102 17.32C59.7635 17.6533 60.283 18.0733 60.67 18.58V16.98H62.97V28H60.67V26.36C60.283 26.88 59.7568 27.3133 59.0902 27.66C58.4235 28.0067 57.6635 28.18 56.8102 28.18C55.8635 28.18 54.9968 27.94 54.2102 27.46C53.4235 26.9667 52.7968 26.2867 52.3302 25.42C51.8768 24.54 51.6502 23.5467 51.6502 22.44ZM60.67 22.48C60.67 21.72 60.51 21.06 60.19 20.5C59.8835 19.94 59.4768 19.5133 58.9702 19.22C58.4635 18.9267 57.9168 18.78 57.3302 18.78C56.7435 18.78 56.1968 18.9267 55.6902 19.22C55.1835 19.5 54.7702 19.92 54.4502 20.48C54.1435 21.0267 53.9902 21.68 53.9902 22.44C53.9902 23.2 54.1435 23.8667 54.4502 24.44C54.7702 25.0133 55.1835 25.4533 55.6902 25.76C56.2102 26.0533 56.7568 26.2 57.3302 26.2C57.9168 26.2 58.4635 26.0533 58.9702 25.76C59.4768 25.4667 59.8835 25.04 60.19 24.48C60.51 23.9067 60.67 23.24 60.67 22.48ZM68.625 18.84V24.94C68.625 25.3533 68.718 25.6533 68.905 25.84C69.105 26.0133 69.438 26.1 69.905 26.1H71.305V28H69.505C68.478 28 67.692 27.76 67.145 27.28C66.598 26.8 66.325 26.02 66.325 24.94V18.84H65.025V16.98H66.325V14.24H68.625V16.98H71.305V18.84H68.625ZM74.566 15.52C74.153 15.52 73.806 15.38 73.526 15.1C73.246 14.82 73.106 14.4733 73.106 14.06C73.106 13.6467 73.246 13.3 73.526 13.02C73.806 12.74 74.153 12.6 74.566 12.6C74.966 12.6 75.306 12.74 75.586 13.02C75.866 13.3 76.006 13.6467 76.006 14.06C76.006 14.4733 75.866 14.82 75.586 15.1C75.306 15.38 74.966 15.52 74.566 15.52ZM75.686 16.98V28H73.406V16.98H75.686ZM84.24 16.8C85.106 16.8 85.88 16.98 86.56 17.34C87.253 17.7 87.793 18.2333 88.18 18.94C88.566 19.6467 88.76 20.5 88.76 21.5V28H86.5V21.84C86.5 20.8533 86.253 20.1 85.76 19.58C85.266 19.0467 84.593 18.78 83.74 18.78C82.886 18.78 82.206 19.0467 81.7 19.58C81.206 20.1 80.96 20.8533 80.96 21.84V28H78.68V16.98H80.96V18.24C81.333 17.7867 81.806 17.4333 82.38 17.18C82.966 16.9267 83.586 16.8 84.24 16.8ZM96.108 16.8C96.961 16.8 97.715 16.9733 98.368 17.32C99.035 17.6533 99.555 18.0733 99.928 18.58V16.98H102.228V28.18C102.228 29.1933 102.015 30.0933 101.588 30.88C101.161 31.68 100.541 32.3067 99.728 32.76C98.928 33.2133 97.9681 33.44 96.8481 33.44C95.3551 33.44 94.1151 33.0867 93.1281 32.38C92.1411 31.6867 91.581 30.74 91.448 29.54H93.708C93.881 30.1133 94.248 30.5733 94.808 30.92C95.381 31.28 96.0611 31.46 96.8481 31.46C97.7681 31.46 98.508 31.18 99.068 30.62C99.641 30.06 99.928 29.2467 99.928 28.18V26.34C99.541 26.86 99.0151 27.3 98.3481 27.66C97.6951 28.0067 96.948 28.18 96.108 28.18C95.148 28.18 94.268 27.94 93.468 27.46C92.681 26.9667 92.055 26.2867 91.588 25.42C91.135 24.54 90.9081 23.5467 90.9081 22.44C90.9081 21.3333 91.135 20.3533 91.588 19.5C92.055 18.6467 92.681 17.9867 93.468 17.52C94.268 17.04 95.148 16.8 96.108 16.8ZM99.928 22.48C99.928 21.72 99.768 21.06 99.448 20.5C99.141 19.94 98.735 19.5133 98.228 19.22C97.721 18.9267 97.175 18.78 96.588 18.78C96.001 18.78 95.455 18.9267 94.948 19.22C94.441 19.5 94.028 19.92 93.708 20.48C93.401 21.0267 93.248 21.68 93.248 22.44C93.248 23.2 93.401 23.8667 93.708 24.44C94.028 25.0133 94.441 25.4533 94.948 25.76C95.468 26.0533 96.015 26.2 96.588 26.2C97.175 26.2 97.721 26.0533 98.228 25.76C98.735 25.4667 99.141 25.04 99.448 24.48C99.768 23.9067 99.928 23.24 99.928 22.48Z"
                  fill="white"
                />
                <path
                  d="M128.639 23.3754L131.259 22.3214L132.359 19.6245L129.74 20.6785L128.639 23.3754Z"
                  fill="white"
                />
                <path
                  d="M130.5 6C127.434 6 124.438 6.9091 121.889 8.6122C119.34 10.3154 117.353 12.7362 116.18 15.5684C115.007 18.4007 114.7 21.5172 115.298 24.5239C115.896 27.5306 117.372 30.2924 119.54 32.4602C121.708 34.6279 124.469 36.1041 127.476 36.7022C130.483 37.3002 133.599 36.9933 136.432 35.8201C139.264 34.647 141.685 32.6603 143.388 30.1113C145.091 27.5624 146 24.5656 146 21.5C146 19.4645 145.599 17.449 144.82 15.5684C144.041 13.6879 142.899 11.9792 141.46 10.5398C140.021 9.1005 138.312 7.9588 136.432 7.1799C134.551 6.4009 132.535 6 130.5 6ZM136.592 17.501L133.879 24.104C133.801 24.2958 133.685 24.4701 133.539 24.6165C133.393 24.7629 133.218 24.8785 133.027 24.9565L126.501 27.5915C126.294 27.674 126.072 27.711 125.85 27.7C125.644 27.6971 125.44 27.6532 125.251 27.5706C125.062 27.4881 124.892 27.3688 124.75 27.2195H124.672C124.491 27.0096 124.37 26.7552 124.321 26.4826C124.272 26.21 124.297 25.9292 124.393 25.6695L127.106 19.0665C127.183 18.8747 127.299 18.7004 127.445 18.554C127.592 18.4075 127.766 18.2919 127.958 18.214L134.484 15.579C134.774 15.4645 135.092 15.4403 135.396 15.5094C135.7 15.5785 135.976 15.7378 136.189 15.9665C136.388 16.1622 136.53 16.4082 136.601 16.6783C136.672 16.9484 136.669 17.2326 136.592 17.501Z"
                  fill="white"
                />
              </svg>
            </button>

            <!-- <div class="text-white">
              <p>Latitude: {{ latitude }}</p>
              <p>Longitude: {{ longitude }}</p>
            </div> -->
          </div>
          <div>
            <input
              type="text"
              v-model="latitude"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Klik Tombol untuk Mendapatkan Latitude"
            />
          </div>
          <div>
            <input
              type="text"
              v-model="longitude"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Klik Tombol untuk Mendapatkan Longitude"
            />
          </div>

          <div>
            <input
              type="text"
              v-model="city"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Kota Tempat Klinik Berada"
            />
          </div>

          <div>
            <input
              type="text"
              v-model="address"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Alamat Klinik"
            />
          </div>

          <div>
            <input
              type="text"
              v-model="open_time"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Jam Buka Klinik (08:00)"
            />
          </div>

          <div>
            <input
              type="text"
              v-model="close_time"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Jam tutup Klinik"
            />
          </div>

          <div>
            <input
              type="password"
              v-model="password"
              required
              class="w-full px-3 py-2 mt-1 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Password"
            />
          </div>

          <div class="text-white">
            <p class="font-normal">Foto Klinik</p>
            <div class="flex gap-2 items-center">
              <input
                type="file"
                @change="handleClinicImageUpload"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>
          <div class="text-white">
            <p class="font-normal">Document File</p>
            <div class="flex gap-2 items-center">
              <input
                type="file"
                @change="handleDocumentFileUpload"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>

          <!-- button regis -->
          <div class="flex justify-center">
            <button
              type="submit"
              class="w-32 h-10 text-xl items-center flex justify-center font-medium text-white bg-[#FFA33C] rounded-full hover:bg-[#B08BBB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.1)"
            >
              Register
            </button>
          </div>

          <!-- Menampilkan pesan error jika ada -->
          <p v-if="error" class="text-red-500">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRegister } from "@/composable/register";

export default {
  setup() {
    // Use the composable `useRegister`
    const {
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
      document_file,
      handleClinicImageUpload,
      handleDocumentFileUpload,
      error,
      register,
    } = useRegister();

    // Define the method to get the precise location and set the latitude and longitude
    const getPreciseLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            latitude.value = position.coords.latitude;
            longitude.value = position.coords.longitude;
          },
          (error) => {
            console.error("Error occurred while getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
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
      handleClinicImageUpload,
      handleDocumentFileUpload,
      document_file,
      error,
      register,
      getPreciseLocation, // Return the method so it can be used in the template
    };
  },
};
</script>

<style scoped></style>
