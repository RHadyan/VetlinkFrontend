<template>
  <div class="max-h-screen space-y-2 bg-gray-100">
    <div class="flex justify-center items-center">
      <div class="flex">
        <img
          src="@/assets/images/pictpet.png"
          class="mx-auto h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[1190px] shadow-[20px_4px_35px_0px_rgba(0, 0, 0, 0.09)]"
          alt="Pictpet"
        />
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[1190px] shadow-[20px_4px_35px_0px_rgba(0, 0, 0, 0.09)]"
    >
      <div
        class="bg-white w-full h-48 rounded-[20px] shadow-[20px_4px_35px_0px_rgba(0, 0, 0, 0.1)]"
      >
        <div class="flex justify-center items-center gap-2 m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M21.25 0H8.75C6.6825 0 5 1.6825 5 3.75V30H25V3.75C25 1.6825 23.3175 0 21.25 0ZM13.75 23.75H10V21.25H13.75V23.75ZM13.75 18.75H10V16.25H13.75V18.75ZM11.25 10V7.5H13.75V5H16.25V7.5H18.75V10H16.25V12.5H13.75V10H11.25ZM20 23.75H16.25V21.25H20V23.75ZM20 18.75H16.25V16.25H20V18.75ZM30 11.25V30H27.5V7.73C28.9513 8.2475 30 9.6225 30 11.25ZM2.5 7.73V30H0V11.25C0 9.6225 1.04875 8.2475 2.5 7.73Z"
              fill="#3FA2F6"
            />
          </svg>
          <p
            class="lg:text-xl sm:text-m font-bold text-[#3FA2F6]"
            style="font-family: 'Poppins', sans-serif"
          >
            Jumlah Klinik
          </p>
        </div>
        <div class="flex justify-center items-center my-auto">
          <p
            class="lg:text-4xl sm:text-xl font-bold text-[#FFA33C]"
            style="font-family: 'Poppins', sans-serif"
          >
            {{ approvedKlinik }}
          </p>
        </div>
      </div>

      <div
        class="bg-white w-full h-48 rounded-[20px] shadow-[20px_4px_35px_0px_rgba(0, 0, 0, 0.1)]"
      >
        <div class="flex justify-center items-center gap-2 m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M21.25 0H8.75C6.6825 0 5 1.6825 5 3.75V30H25V3.75C25 1.6825 23.3175 0 21.25 0ZM13.75 23.75H10V21.25H13.75V23.75ZM13.75 18.75H10V16.25H13.75V18.75ZM11.25 10V7.5H13.75V5H16.25V7.5H18.75V10H16.25V12.5H13.75V10H11.25ZM20 23.75H16.25V21.25H20V23.75ZM20 18.75H16.25V16.25H20V18.75ZM30 11.25V30H27.5V7.73C28.9513 8.2475 30 9.6225 30 11.25ZM2.5 7.73V30H0V11.25C0 9.6225 1.04875 8.2475 2.5 7.73Z"
              fill="#3FA2F6"
            />
          </svg>
          <p
            class="lg:text-l text-center sm:text-m font-bold text-[#3FA2F6]"
            style="font-family: 'Poppins', sans-serif"
          >
            Klinik Menunggu Konfirmasi
          </p>
        </div>
        <div class="flex justify-center items-center my-auto">
          <p
            class="lg:text-4xl sm:text-xl font-bold text-[#FFA33C]"
            style="font-family: 'Poppins', sans-serif"
          >
            {{ pendingKlinik }}
          </p>
        </div>
      </div>

      <div
        class="bg-white w-full h-48 rounded-[20px] shadow-[20px_4px_35px_0px_rgba(0, 0, 0, 0.1)]"
      >
        <div class="flex justify-center items-center gap-2 m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M22.5 14.9975V6.24896C22.5 2.80328 19.6963 0 16.25 0H6.25C2.80375 0 0 2.80328 0 6.24896V22.3138C0 23.3049 0.54375 24.2122 1.4175 24.6809C1.815 24.8946 2.25125 24.9996 2.68625 24.9996C3.20625 24.9996 3.725 24.8484 4.175 24.5497L9.12875 21.2465H16.25C19.6963 21.2465 22.5 18.4432 22.5 14.9975ZM11.25 17.5021C10.56 17.5021 10 16.9422 10 16.2523C10 15.5624 10.56 15.0025 11.25 15.0025C11.94 15.0025 12.5 15.5624 12.5 16.2523C12.5 16.9422 11.94 17.5021 11.25 17.5021ZM13.0587 12.0392C12.5 12.3467 12.5 12.4367 12.5 12.5029C12.5 13.1941 11.94 13.7527 11.25 13.7527C10.56 13.7527 10 13.1941 10 12.5029C10 10.8682 11.2975 10.1546 11.8512 9.84961C12.2137 9.65089 12.595 9.18097 12.4788 8.51733C12.3925 8.02741 11.9762 7.61123 11.4875 7.52625C11.105 7.45626 10.735 7.55374 10.4475 7.7962C10.1625 8.03366 10 8.3836 10 8.75479C10 9.44593 9.44 10.0046 8.75 10.0046C8.06 10.0046 7.5 9.44593 7.5 8.75479C7.5 7.64373 7.98875 6.5964 8.84 5.88152C9.69125 5.16665 10.8475 4.9302 11.9662 5.24114C13.5437 5.67856 14.594 7.16029 14.8425 8.80401C15.0737 10.3363 14.3537 11.7804 13.0587 12.0392Z"
              fill="#3FA2F6"
            />
          </svg>
          <p
            class="lg:text-xl sm:text-m font-bold text-[#3FA2F6]"
            style="font-family: 'Poppins', sans-serif"
          >
            Jumlah Post
          </p>
        </div>
        <div class="flex justify-center items-center my-auto">
          <p
            class="lg:text-4xl sm:text-xl font-bold text-[#FFA33C]"
            style="font-family: 'Poppins', sans-serif"
          >
            {{ jumlahforum}}
          </p>
        </div>
      </div>

      <div
        class="bg-white w-full h-48 rounded-[20px] shadow-[20px_4px_35px_0px_rgba(0, 0, 0, 0.1)]"
      >
        <div class="flex justify-center items-center gap-2 m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M21.25 0H8.75C6.6825 0 5 1.6825 5 3.75V30H25V3.75C25 1.6825 23.3175 0 21.25 0ZM13.75 23.75H10V21.25H13.75V23.75ZM13.75 18.75H10V16.25H13.75V18.75ZM11.25 10V7.5H13.75V5H16.25V7.5H18.75V10H16.25V12.5H13.75V10H11.25ZM20 23.75H16.25V21.25H20V23.75ZM20 18.75H16.25V16.25H20V18.75ZM30 11.25V30H27.5V7.73C28.9513 8.2475 30 9.6225 30 11.25ZM2.5 7.73V30H0V11.25C0 9.6225 1.04875 8.2475 2.5 7.73Z"
              fill="#3FA2F6"
            />
          </svg>
          <p
            class="lg:text-xl sm:text-m text-center font-bold text-[#3FA2F6]"
            style="font-family: 'Poppins', sans-serif"
          >
            Jumlah Klinik yang ditolak
          </p>
        </div>
        <div class="flex justify-center items-center my-auto">
          <p
            class="lg:text-4xl sm:text-xl font-bold text-[#FFA33C]"
            style="font-family: 'Poppins', sans-serif"
          >
            {{ canceledKlinik }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useDashboard } from "@/composable/dasboard.js";

export default {
  setup() {
    // Use the composable `useDashboard`
    const {
      jumlahforum,
      veteriners,
      jumlahKlinik,
      pendingKlinik,
      approvedKlinik,
      canceledKlinik,
      error,
      fetchVeteriners,
    } = useDashboard();

    return {
      jumlahforum,
      veteriners,
      jumlahKlinik,
      pendingKlinik,
      approvedKlinik,
      canceledKlinik,
      error,
      fetchVeteriners,
    };
  },
};
</script>
