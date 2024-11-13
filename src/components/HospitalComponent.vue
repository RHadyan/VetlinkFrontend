<template>
  <v-app>
    <v-main>
      <div class="flex justify-center flex-grow">
        <div
          class="bg-white overflow-x-auto w-11/12 grid grid-cols-1 rounded-[20px] text-black shadow-[20px_4px_35px_0px_rgba(0,0,0,0.09)] p-6 overflow-hidden mt-4 mb-4"
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
            class="table-auto w-full text-center"
            style="font-size: 15px"
            hide-default-header
          >
            <!-- Custom header styling -->
            <template v-slot:thead>
              <thead class="bg-gray-800 text-white text-center">
                <tr>
                  <th
                    v-for="header in headers"
                    :key="header.value"
                    class="p-4 text-center"
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
              <div class="text-center">
                <v-btn
                  icon
                  color="red"
                  @click="deleteItem(item)"
                  class="hover:bg-red-200"
                >
                  <v-icon>mdi-trash-can-outline</v-icon>
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
import { useVets } from "@/composable/vets.js";

export default {
  setup() {
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
      { title: "Aksi", value: "aksi" }, // Add Aksi column
    ];

    // Format time utility
    const formatTime = (time) => {
      if (!time) return ""; // Handle null/undefined case
      return time.slice(0, 5); // Extract the first 5 characters (hh:mm)
    };

    // Delete item function
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
      deleteItem, // Expose deleteItem function to the template
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
.mt-4 {
  margin-top: 16px;
}
.hover\:bg-red-200:hover {
  background-color: #fecaca; /* Light red */
}
</style>
