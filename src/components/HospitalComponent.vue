<template>
  <v-app>
    <v-main>
      <div class="flex justify-center flex-grow">
        <div
          class="bg-white overflow-x-auto w-11/12 grid grid-cols-1 rounded-[20px] text-black shadow-[20px_4px_35px_0px_rgba(0,0,0,0.09)] px-4 py-1 overflow-hidden mt-4 mb-4"
        >
          <!-- Search bar for filtering table data -->
          <v-text-field
            v-model="search"
            placeholder="Search by Klinik Name or Status"
            prepend-inner-icon="mdi-magnify"
            class="rounded-[20px]"
          ></v-text-field>

          <v-data-table
            :headers="headers"
            :items="filteredVeteriners"
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

            <!-- Slot for register_status with color-coded chips -->
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

            <!-- Slot for operational hours (formatted time) -->
            <template v-slot:item.tes="{ item }">
              <span>
                {{ formatTime(item.open_time) }} -
                {{ formatTime(item.close_time) }}
              </span>
            </template>

            <!-- Slot for actions (Aksi) with delete and detail buttons -->
            <template v-slot:item.aksi="{ item }">
              <div class="text-center flex">
                <v-btn variant="plain" icon text @click="deleteItem(item)">
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
                <v-btn variant="plain" icon text @click="klinikDetail(item)">
                  <v-icon color="blue">mdi-eye</v-icon>
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
    const router = useRouter(); // Initialize router instance
    const {
      filteredVeteriners, // Use filtered items for search functionality
      search, // Import search ref to bind with v-text-field
      veteriners,
      totalItems,
      loading,
      itemsPerPage,
      currentPage,
      sortBy,
      sortDesc,
      deleteItem,
      klinikDetail,
      fetchVeteriners,
      error,
    } = useVets();

    // Headers for v-data-table with columns
    const headers = [
      { title: "Nama Klinik", value: "clinic_name" },
      { title: "Kota", value: "city" },
      { title: "Kontak", value: "phone_number" },
      { title: "Alamat", value: "address" },
      { title: "Jam Operasional", value: "tes" },
      { title: "Status Pendaftaran", value: "register_status" },
      { title: "Aksi", value: "aksi" },
    ];

    // Format time utility for operational hours
    const formatTime = (time) => {
      if (!time) return "";
      return time.slice(0, 5); // Format time to HH:mm
    };

    // Navigation function for the detail page
    const navigateToDK = () => {
      router.push("/detailklinik"); // Use router instance for navigation
    };

    return {
      filteredVeteriners, // Use filtered list for v-data-table
      search, // Bind search input in template
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
      klinikDetail,
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
