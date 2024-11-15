<template>
  <div
    class="flex items-center justify-center min-h-screen font-poppins bg-gray-100"
  >
    <div
      class="p-4 flex-col md:flex-row h-10/12 w-11/12 bg-white rounded-lg space-y-2 shadow-md"
    >
      <div class="items-center">
        <router-link to="/hospital" class="hover:bg-opacity-80 group">
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
            :src="clinicImage"
            alt="Post Pict"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </div>

        <div
          class="space-y-3 overflow-y-scroll no-scrollbar pe-5"
          style="max-height: 550px"
        >
          <div></div>
          <div
            class="flex items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="flex space-x-2 items-center">
              <p class="text-[#3FA2F6] text-lg font-medium">Nama Klinik</p>
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
              <p class="font-normal text-base">{{ namaKlinik }}</p>
            </div>
          </div>

          <div
            class="items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="items-center space-y-1">
              <p class="text-[#3FA2F6] text-lg ps-2 font-medium">Alamat</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="85"
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
                {{ alamat }}
              </p>
            </div>
          </div>

          <div
            class="flex items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="flex space-x-2 items-center">
              <p class="text-[#3FA2F6] text-lg font-medium">Dokumen</p>
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
              <v-btn variant="plain" @click="downloadDocument">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 47 50"
                  fill="none"
                >
                  <path
                    d="M44.0625 44.0625H2.9375C1.31516 44.0625 0 45.3777 0 47C0 48.6224 1.31516 49.9375 2.9375 49.9375H44.0625C45.6848 49.9375 47 48.6224 47 47C47 45.3777 45.6848 44.0625 44.0625 44.0625Z"
                    fill="#FFA33C"
                  />
                  <path
                    d="M0 41.125L0 47C0 48.6223 1.31516 49.9375 2.9375 49.9375C4.55984 49.9375 5.875 48.6223 5.875 47L5.875 41.125C5.875 39.5027 4.55984 38.1875 2.9375 38.1875C1.31516 38.1875 0 39.5027 0 41.125Z"
                    fill="#FFA33C"
                  />
                  <path
                    d="M41.125 41.125V47C41.125 48.6223 42.4402 49.9375 44.0625 49.9375C45.6848 49.9375 47 48.6223 47 47V41.125C47 39.5027 45.6848 38.1875 44.0625 38.1875C42.4402 38.1875 41.125 39.5027 41.125 41.125Z"
                    fill="#FFA33C"
                  />
                  <path
                    d="M23.5 35.25C22.891 35.2546 22.2956 35.0699 21.7963 34.7213L10.0463 26.4375C9.41297 25.9883 8.9833 25.3066 8.85119 24.5414C8.71908 23.7763 8.89528 22.99 9.34126 22.3544C9.56388 22.0367 9.84723 21.7662 10.1749 21.5586C10.5026 21.351 10.8682 21.2104 11.2506 21.1449C11.6329 21.0793 12.0245 21.0901 12.4026 21.1767C12.7808 21.2633 13.138 21.424 13.4538 21.6494L23.5 28.67L33.4875 21.15C34.1108 20.6826 34.8942 20.4819 35.6654 20.592C36.4367 20.7022 37.1326 21.1143 37.6 21.7375C38.0675 22.3608 38.2682 23.1442 38.158 23.9154C38.0478 24.6867 37.6358 25.3826 37.0125 25.85L25.2625 34.6625C24.754 35.0439 24.1356 35.25 23.5 35.25Z"
                    fill="#FFA33C"
                  />
                  <path
                    d="M23.5 29.375C22.7209 29.375 21.9738 29.0655 21.4229 28.5146C20.872 27.9637 20.5625 27.2166 20.5625 26.4375V2.9375C20.5625 2.15843 20.872 1.41126 21.4229 0.860374C21.9738 0.309486 22.7209 0 23.5 0C24.2791 0 25.0262 0.309486 25.5771 0.860374C26.128 1.41126 26.4375 2.15843 26.4375 2.9375V26.4375C26.4375 27.2166 26.128 27.9637 25.5771 28.5146C25.0262 29.0655 24.2791 29.375 23.5 29.375Z"
                    fill="#FFA33C"
                  />
                </svg>
              </v-btn>
            </div>
          </div>

          <div
            class="items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="items-center space-y-1">
              <p class="text-[#3FA2F6] text-lg ps-2 font-medium">Persetujuan</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="127"
                height="2"
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

            <div class="my-5">
              <v-radio-group inline>
                <v-radio
                  label="Tolak"
                  value="one"
                  variant="tonal"
                  color="red"
                  style="background-color: rgba(255, 0, 0, 0.15)"
                  class="pe-3 rounded-md text-red"
                ></v-radio>
                <v-radio
                  label="Setuju"
                  value="two"
                  variant="tonal"
                  color="success"
                  style="background-color: rgba(0, 255, 0, 0.15)"
                  class="pe-3 rounded-md text-green"
                ></v-radio>
              </v-radio-group>
            </div>
          </div>

          <div class="flex justify-end h-36 items-end">
            <div class="flex items-center gap-4">
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

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="40"
                viewBox="0 0 2 66"
                fill="none"
              >
                <path
                  d="M1 1V65"
                  stroke="#969696"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

              <v-btn
                class="d-flex text-white align-center gap-2 rounded-pill"
                color="#FFA33C"
                style="font-family: 'Poppins', sans-serif; font-weight: medium"
              >
                Kirim
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    // Retrieve query parameters
    const namaKlinik = ref(route.query.namaKlinik || "Unknown Clinic");
    const alamat = ref(route.query.alamat || "Unknown Address");
    const clinicImage = ref(
      route.query.clinicImage
        ? `${route.query.clinicImage}`
        : "https://via.placeholder.com/800x400.png"
    );
    const documentFromApi = ref(route.query.document || "ada");

    const downloadDocument = () => {
      try {
        // Check if documentFromApi has a valid URL
        if (documentFromApi.value) {
          // Create a temporary anchor tag to trigger the download
          const link = document.createElement("a");
          link.href = documentFromApi.value; // Use the provided URL directly
          link.download = "downloaded-document.pdf"; // Set a default filename or dynamically generate based on context
          link.target = "_blank"; // Optional: opens in a new tab if clicked instead of direct download
          link.click();
        } else {
          console.error("No document URL available.");
        }
      } catch (error) {
        console.error("Download failed:", error);
      }
    };
    return {
      document,
      downloadDocument,
      namaKlinik,
      alamat,
      clinicImage,
      document,
    };
  },
};
</script>
