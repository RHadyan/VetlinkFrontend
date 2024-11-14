<template>
  <v-app>
    <v-main>
      <div class="flex justify-center flex-grow">
        <div
          class="bg-white overflow-x-auto w-11/12 grid grid-cols-1 rounded-[20px] text-black shadow-[20px_4px_35px_0px_rgba(0,0,0,0.09)] px-4 py-1 overflow-hidden mt-4 mb-4"
        >
          <v-data-table
            :headers="headers"
            :items="veteriners"
            v-model:page="currentPage"
            v-model:items-per-page="itemsPerPage"
            v-model:sort-by="sortBy"
            v-model:sort-desc="sortDesc"
            :loading="loading"
            :server-items-length="totalItems"
            class="table-auto w-full text-center font-light"
            style="font-size: 15px"
            hide-default-header
          >
            <!-- Custom header styling -->
            <template v-slot:thead>
              <thead class="text-black text-center">
                <tr>
                  <th
                    v-for="header in headers"
                    :key="header.value"
                    class="p-4 text-md text-center"
                  >
                    {{ header.title }}
                  </th>
                </tr>
              </thead>
            </template>

            <!-- Slot for register_status -->
            <template v-slot:item.register_status="{ item }">
              <div class="text-center">
                <v-chip
                  :color="
                    item.register_status === 'approved'
                      ? 'green'
                      : item.register_status === 'pending'
                      ? 'orange'
                      : 'red'
                  "
                  class="text-uppercase"
                  size="small"
                  label
                >
                  {{ item.register_status }}
                </v-chip>
              </div>
            </template>

            <!-- Slot for operational hours -->
            <template v-slot:item.tes="{ item }">
              <span
                >{{ formatTime(item.open_time) }} -
                {{ formatTime(item.close_time) }}</span
              >
            </template>

            <!-- Slot for actions (Aksi) -->
            <template v-slot:item.aksi="{ item }">
              <div class="text-center flex">
                <v-btn variant="plain" icon text @click="deleteItem(item)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
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
                <v-btn variant="plain" icon text @click="navigateToDK">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <path
                      d="M31.4915 14.6063L20.5692 0.896207C20.3806 0.661475 20.1475 0.466324 19.8833 0.321971C19.619 0.177618 19.3289 0.0869091 19.0295 0.0550579C18.7301 0.0232066 18.4273 0.0508412 18.1387 0.136373C17.85 0.221905 17.581 0.363648 17.3473 0.553455C17.1126 0.74202 16.9174 0.975118 16.7731 1.23935C16.6287 1.50358 16.538 1.79374 16.5061 2.09314C16.4743 2.39254 16.5019 2.69528 16.5875 2.98397C16.673 3.27266 16.8147 3.5416 17.0045 3.77533L26.7616 16.0459L16.5247 28.3164C16.3323 28.5473 16.1873 28.8139 16.0981 29.1009C16.0089 29.3879 15.9772 29.6897 16.0048 29.9889C16.0324 30.2882 16.1187 30.5791 16.2589 30.845C16.3991 31.1108 16.5904 31.3464 16.8217 31.5383C17.236 31.8707 17.7531 32.0484 18.2842 32.041C18.6198 32.0415 18.9515 31.9681 19.2556 31.8259C19.5597 31.6837 19.8288 31.4763 20.0436 31.2183L31.4687 17.5083C31.808 17.102 31.9958 16.5906 31.9999 16.0614C32.0041 15.5321 31.8244 15.0178 31.4915 14.6063Z"
                      fill="#3FA2F6"
                    />
                    <path
                      d="M4.57405 0.896227C4.19226 0.408378 3.6323 0.0921779 3.01737 0.0171863C2.40244 -0.0578053 1.78291 0.114555 1.29506 0.49635C0.807207 0.878145 0.491006 1.4381 0.416015 2.05303C0.341023 2.66796 0.513383 3.2875 0.895178 3.77535L10.7664 16.0459L0.529576 28.2936C0.337174 28.5245 0.192212 28.791 0.102995 29.078C0.0137777 29.365 -0.0179429 29.6668 0.00965059 29.9661C0.0372441 30.2654 0.123609 30.5563 0.263799 30.8222C0.40399 31.088 0.595251 31.3236 0.826628 31.5154C1.23773 31.8561 1.75514 32.042 2.28904 32.041C2.62473 32.0415 2.95642 31.9681 3.26052 31.8259C3.56462 31.6837 3.83366 31.4763 4.0485 31.2184L15.4736 17.5083C15.8097 17.0994 15.9934 16.5866 15.9934 16.0573C15.9934 15.528 15.8097 15.0152 15.4736 14.6063L4.57405 0.896227Z"
                      fill="#3FA2F6"
                    />
                  </svg>
                </v-btn>
              </div>
            </template>
          </v-data-table>

          <!-- Loading state -->
          <div v-if="loading" class="text-center mt-4">
            Loading data, please wait...
          </div>

          <!-- Error state -->
          <div v-if="error" class="text-center text-red-500 mt-4">
            {{ error }}
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Import useRouter
import { useVets } from "@/composable/vets.js";

export default {
  setup() {
    const router = useRouter(); // Inisialisasi router instance
    const {
      veteriners,
      totalItems,
      loading,
      itemsPerPage,
      currentPage,
      sortBy,
      sortDesc,
      deleteItem,
      fetchVeteriners,
      error,
    } = useVets();

    // Header for v-data-table
    const headers = [
      { title: "Nama Klinik", value: "clinic_name" },
      { title: "Kota", value: "city" },
      { title: "Kontak", value: "phone_number" },
      { title: "Alamat", value: "address" },
      { title: "Jam Operasional", value: "tes" },
      { title: "Status Pendaftaran", value: "register_status" },
      { title: "Aksi", value: "aksi" },
    ];

    // Format time utility
    const formatTime = (time) => {
      if (!time) return "";
      return time.slice(0, 5);
    };

    // Function for navigation
    const navigateToDK = () => {
      router.push("/detailklinik"); // Gunakan router instance untuk navigasi
    };

    return {
      veteriners,
      totalItems,
      loading,
      itemsPerPage,
      currentPage,
      sortBy,
      sortDesc,
      fetchVeteriners,
      error,
      formatTime,
      headers,
      deleteItem,
      navigateToDK,
    };
  },
};
</script>

<style scoped>
.v-data-table {
  margin: 20px 0;
}
.text-center {
  text-align: center;
}
.text-red-500 {
  color: red;
}

.hover\:bg-red-200:hover {
  background-color: #fecaca; /* Light red */
}
</style>
