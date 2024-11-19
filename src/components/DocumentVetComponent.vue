<template>
  <div class="min-h-screen space-y-6">
    <div
      class="grid justify-center grid-cols-1 lg:grid-cols-2 xl:gap-20 md:gap-10"
    >
      <div
        class="h-64 w-[450px] bg-white rounded-[20px] shadow-[20px_4px_35px_0px_rgba(0, 0, 0, 0.1)]"
      >
        <div class="h-64 text-center flex-1">
          <div class="flex justify-center gap-2 m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="32"
              viewBox="0 0 27 32"
              fill="none"
            >
              <path
                d="M13.0896 15.624L10.5759 18.0307C10.1466 18.4547 9.5769 18.668 9.00585 18.668C8.4294 18.668 7.85025 18.4507 7.4088 18.016L6.48945 17.144C5.95215 16.6333 5.9346 15.7893 6.45165 15.2587C6.9687 14.728 7.8246 14.712 8.36055 15.2213L8.9991 15.828L11.2104 13.7107C11.745 13.2 12.5996 13.2107 13.1193 13.74C13.6377 14.268 13.6256 15.1107 13.0896 15.624ZM18.9 22.6667H14.85C14.1048 22.6667 13.5 23.264 13.5 24C13.5 24.736 14.1048 25.3333 14.85 25.3333H18.9C19.6452 25.3333 20.25 24.736 20.25 24C20.25 23.264 19.6452 22.6667 18.9 22.6667ZM18.9 6.66667H14.85C14.1048 6.66667 13.5 7.264 13.5 8C13.5 8.736 14.1048 9.33333 14.85 9.33333H18.9C19.6452 9.33333 20.25 8.736 20.25 8C20.25 7.264 19.6452 6.66667 18.9 6.66667ZM18.9 14.6667H16.2C15.4548 14.6667 14.85 15.264 14.85 16C14.85 16.736 15.4548 17.3333 16.2 17.3333H18.9C19.6452 17.3333 20.25 16.736 20.25 16C20.25 15.264 19.6452 14.6667 18.9 14.6667ZM8.775 22C7.6572 22 6.75 22.896 6.75 24C6.75 25.104 7.6572 26 8.775 26C9.8928 26 10.8 25.104 10.8 24C10.8 22.896 9.8928 22 8.775 22ZM8.775 10C9.8928 10 10.8 9.104 10.8 8C10.8 6.896 9.8928 6 8.775 6C7.6572 6 6.75 6.896 6.75 8C6.75 9.104 7.6572 10 8.775 10ZM27 6.66667V25.3333C27 29.0093 23.972 32 20.25 32H6.75C3.02805 32 0 29.0093 0 25.3333V6.66667C0 2.99067 3.02805 0 6.75 0H20.25C23.972 0 27 2.99067 27 6.66667ZM24.3 6.66667C24.3 4.46133 22.4829 2.66667 20.25 2.66667H6.75C4.5171 2.66667 2.7 4.46133 2.7 6.66667V25.3333C2.7 27.5387 4.5171 29.3333 6.75 29.3333H20.25C22.4829 29.3333 24.3 27.5387 24.3 25.3333V6.66667Z"
                fill="#3FA2F6"
              />
            </svg>
            <p
              class="align-content-center lg:text-xl sm:text-m font-bold text-[#3FA2F6]"
              style="font-family: 'Poppins', sans-serif"
            >
              Status Klinik
            </p>
          </div>
          <div class="flex justify-center">
            <div
              v-if="Klinik.register_status === 'rejected'"
              class="flex justify-center items-center my-12 bg-[#FF4E4E] bg-opacity-25 rounded-md w-32 h-10"
            >
              <p class="text-red">Rejected</p>
            </div>
            <div
              v-if="Klinik.register_status === 'approved'"
              class="flex justify-center items-center my-12 bg-[#5AAF51] bg-opacity-25 rounded-md w-32 h-10"
            >
              <p class="text-green">Approved</p>
            </div>
            <div
              v-if="Klinik.register_status === 'pending'"
              class="flex justify-center items-center my-12 bg-[#FFA33C] bg-opacity-25 rounded-md w-32 h-10"
            >
              <p class="text-[#FFA33C]">Pending</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-64 w-[450px] bg-white rounded-[20px] shadow-[20px_4px_35px_0px_rgba(0, 0, 0, 0.1)]"
      >
        <div class="h-64 text-center flex-1">
          <div class="flex justify-center gap-2 m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 39 39"
              fill="none"
            >
              <path
                d="M19.5 39C15.6433 39 11.8731 37.8563 8.66639 35.7137C5.45963 33.571 2.96027 30.5255 1.48436 26.9623C0.00844908 23.3992 -0.377716 19.4784 0.374696 15.6957C1.12711 11.9131 2.9843 8.43855 5.71143 5.71143C8.43855 2.9843 11.9131 1.12711 15.6957 0.374696C19.4784 -0.377716 23.3992 0.00844908 26.9623 1.48436C30.5255 2.96027 33.571 5.45963 35.7137 8.66639C37.8563 11.8731 39 15.6433 39 19.5C38.9944 24.67 36.9382 29.6267 33.2824 33.2824C29.6267 36.9382 24.67 38.9944 19.5 39ZM19.5 4.87501C16.6075 4.87501 13.7799 5.73275 11.3748 7.33976C8.96972 8.94678 7.0952 11.2309 5.98827 13.9033C4.88134 16.5756 4.59171 19.5162 5.15602 22.3532C5.72033 25.1902 7.11323 27.7961 9.15857 29.8414C11.2039 31.8868 13.8098 33.2797 16.6468 33.844C19.4838 34.4083 22.4244 34.1187 25.0967 33.0117C27.7691 31.9048 30.0532 30.0303 31.6602 27.6252C33.2673 25.2201 34.125 22.3926 34.125 19.5C34.1207 15.6225 32.5785 11.9051 29.8367 9.16332C27.0949 6.42153 23.3775 4.87931 19.5 4.87501Z"
                fill="#FF4E4E"
              />
              <path
                d="M21.9375 8.64258H17.0625V23.0011H21.9375V8.64258Z"
                fill="#FF4E4E"
              />
              <path
                d="M22.0422 25.9907H17.1672V30.8657H22.0422V25.9907Z"
                fill="#FF4E4E"
              />
            </svg>
            <p
              class="align-content-center lg:text-xl sm:text-m font-bold text-[#3FA2F6]"
              style="font-family: 'Poppins', sans-serif"
            >
              Alasan
            </p>
          </div>
          <div class="flex justify-center">
            <p class="text-black mt-6 text-pretty mx-3">
              {{ Klinik.register_status_message }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex justify-center items-center max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[1190px] shadow-[20px_4px_35px_0px_rgba(0, 0, 0, 0.09)]"
    >
      <div
        class="bg-white w-full h-32 rounded-[10px] shadow-[20px_4px_35px_0px_rgba(0, 0, 0, 0.1)]"
      >
        <div class="flex gap-2 m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M15 30C12.0333 30 9.13319 29.1203 6.66645 27.472C4.19971 25.8238 2.27713 23.4811 1.14181 20.7403C0.00649929 17.9994 -0.290551 14.9834 0.288227 12.0737C0.867006 9.16394 2.29562 6.49119 4.3934 4.3934C6.49119 2.29562 9.16394 0.867006 12.0737 0.288227C14.9834 -0.290551 17.9994 0.00649929 20.7403 1.14181C23.4811 2.27713 25.8238 4.19971 27.472 6.66645C29.1203 9.13319 30 12.0333 30 15C29.9957 18.9769 28.414 22.7897 25.6019 25.6019C22.7897 28.414 18.9769 29.9957 15 30ZM15 3.75001C12.775 3.75001 10.5999 4.40981 8.74984 5.64597C6.89979 6.88214 5.45785 8.63915 4.60636 10.6948C3.75488 12.7505 3.53209 15.0125 3.96617 17.1948C4.40026 19.3771 5.47171 21.3816 7.04505 22.955C8.61839 24.5283 10.623 25.5998 12.8052 26.0338C14.9875 26.4679 17.2495 26.2451 19.3052 25.3936C21.3609 24.5422 23.1179 23.1002 24.354 21.2502C25.5902 19.4001 26.25 17.225 26.25 15C26.2467 12.0173 25.0604 9.15778 22.9513 7.04871C20.8422 4.93964 17.9827 3.75331 15 3.75001Z"
              fill="#FF4E4E"
            />
            <path
              d="M16.875 6.64795H13.125V17.6929H16.875V6.64795Z"
              fill="#FF4E4E"
            />
            <path
              d="M16.9556 19.9927H13.2056V23.7427H16.9556V19.9927Z"
              fill="#FF4E4E"
            />
          </svg>
          <p
            class="align-content-center lg:text-sm sm:text-sm font-normal text-black"
            style="font-family: 'Poppins', sans-serif"
          >
            Lengkapi file persyaratan kembali jika diperlukan.
          </p>
        </div>
        <form @submit.prevent="updateDocument">
          <div class="flex gap-2 mx-5 items-center">
            <input
              type="file"
              @change="handleDocumentFileUpload"
              class="block w-full text-black text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#B08BBB] file:text-white hover:file:bg-[#FFA33C]"
            />
            <div class="flex justify-center">
              <button
                type="submit"
                class="w-32 h-10 text-xl items-center flex justify-center font-medium text-white bg-[#FFA33C] rounded-full hover:bg-[#B08BBB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.1)"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useKlinik } from "@/composable/statusKlinik";
import { ref } from "vue";
import router from "@/router";
import apiClient from "@/api/axiosInstance";
import Swal from "sweetalert2";

export default {
  setup() {
    const { Klinik, error, loading, fetchKlinik } = useKlinik();
    const document = ref(null); // Add document file field
    const pesan = "Please wait for the admin to verify your clinic";

    // Function to handle file upload
    const handleDocumentFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        document.value = file;
      }
    };

    // Function to update document
    const updateDocument = async () => {
      error.value = null; // Clear previous errors, if any
      if (!document.value) {
        // Validasi untuk memastikan bahwa file sudah dipilih
        console.log("Please select a document file to upload.");
        error.value = "Please select a document file to upload.";
        return;
      }

      try {
        // Create form data object for sending the file
        const formData = new FormData();
        formData.append("document", document.value);
        formData.append("register_status_message", pesan);

        // Send registration data to the API using POST request
        const response = await apiClient.post("veteriner/update", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
        // If successful, redirect to the main dashboard
        if (response.status === 200) {
          Swal.fire({
            title: "Success!",
            text: pesan,
            icon: "success",
          });
          await fetchKlinik(); // Update Klinik state after successful update
        }
      } catch (err) {
        // Handle errors and save the error message
        if (err.response && err.response.data) {
          error.value = err.response.data.message;
        } else {
          error.value = "Document update failed. Please try again.";
        }
        console.error("Document update failed:", error.value);
      }
    };

    return {
      updateDocument,
      Klinik,
      error,
      loading,
      fetchKlinik,
      handleDocumentFileUpload,
    };
  },
};
</script>
