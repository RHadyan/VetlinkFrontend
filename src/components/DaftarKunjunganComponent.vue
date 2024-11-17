<template>
  <v-app>
    <v-main>
      <div class="flex justify-center flex-grow">
        <div
          class="bg-white overflow-x-auto w-11/12 grid grid-cols-1 rounded-[20px] text-black shadow-[20px_4px_35px_0px_rgba(0,0,0,0.09)] px-4 py-1 overflow-hidden mt-4 mb-4"
        >
          <v-data-table
            :headers="headers"
            :items="Queue"
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
            <template v-slot:item.status="{ item }">
              <div class="text-center">
                <v-chip
                  :color="
                    item.status === 'finished'
                      ? 'green'
                      : item.status === 'ongoing'
                      ? 'orange'
                      : 'red'
                  "
                  class="text-uppercase"
                  size="small"
                  label
                >
                  {{ item.status  }}
                </v-chip>
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
import { useQueue } from "@/composable/daftarKunjungan";
import { ref } from "vue";
import { useRouter } from "vue-router"; // Import useRouter
// import { useQ } from "@/composable/vets.js";

export default {
  setup() {
    const router = useRouter(); // Initialize router instance
    const {
      Queue,
      totalItems,
      loading,
      itemsPerPage,
      currentPage,
      sortBy,
      sortDesc,
      error,
      search,
      filteredQueue,
      fetchQueue,
    } = useQueue();

    // Header for v-data-table
    const headers = [
      { title: "Nama Pemilik", value: "customer.name" },
      { title: "Hewan", value: "pet.type" },
      { title: "Kontak", value: "customer.phone" },
      { title: "Tanggal", value: "appointment_time" },
      { title: "Status Kunjungan", value: "status" },
    ];

    // Format time utility
    const formatTime = (time) => {
      if (!time) return "";
      return time.slice(0, 5);
    };

    // Expose variables to the template
    return {
      Queue,
      totalItems,
      loading,
      itemsPerPage,
      currentPage,
      sortBy,
      sortDesc,
      error,
      search,
      filteredQueue,
      fetchQueue,
      headers, // Include `headers` here to fix the warning
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
