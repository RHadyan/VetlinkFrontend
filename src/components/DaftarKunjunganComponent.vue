<template>
  <v-app class="w-full">
    <v-main>
      <div class="flex justify-center w-full flex-grow">
        <div
          class="bg-white overflow-x-auto w-full grid grid-cols-1 rounded-[20px] text-black shadow-[20px_4px_35px_0px_rgba(0,0,0,0.09)] px-4 py-1 overflow-hidden mt-4 mb-4"
        >
          <!-- Buttons for Export to CSV and PDF -->
          <div class="flex justify-end gap-4 my-4">
            <v-text-field
              v-model="search"
              label="Search by Status or Hewan"
              placeholder="Search by Status or Hewan"
              variant="outlined"
              class="rounded-[20px] mt-3"
            ></v-text-field>
            <v-text-field
              v-model="fromDate"
              label="From Date"
              type="date"
              class="rounded-[20px] mt-3"
            ></v-text-field>
            <v-text-field
              v-model="toDate"
              label="To Date"
              type="date"
              class="rounded-[20px] mt-3"
            ></v-text-field>
            <v-btn class="my-auto " color="csv" @click="exportToCSV"
              >Export to CSV</v-btn
            >
            <v-btn class="my-auto" color="pdf" @click="exportToPDF"
              >Export to PDF</v-btn
            >
          </div>

          <v-data-table
            :headers="headers"
            :items="filteredQueue"
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

            <!-- Custom formatting for appointment_time column -->
            <template v-slot:item.appointment_time="{ item }">
              <span>{{ formatDate(item.appointment_time) }}</span>
            </template>

            <!-- Slot for editable status -->
            <template v-slot:item.status="{ item }">
              <div class="flex justify-center">
                <v-select
                  size="small"
                  v-model="item.status"
                  :items="['finished', 'ongoing', 'canceled', 'pending']"
                  :color="getStatusColor(item.status)"
                  density="compact"
                  hide-details
                  class="custom-select"
                  :style="{
                    width: '150px',
                    backgroundColor: getStatusColor(item.status),
                    color: '#fff',
                    borderRadius: '5px',
                    padding: '0',
                    boxShadow: 'none',
                    border: 'none',
                    transition: 'background-color 1s ease',
                  }"
                  @update:model-value="
                    (newStatus) => {
                      updateStatus(item.id, newStatus);
                    }
                  "
                >
                </v-select>
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
import apiClient from "@/api/axiosInstance";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import moment from "moment";

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
      fromDate,
      toDate,
    } = useQueue();
    // Header for v-data-table
    const formatDate = (date) => {
      return moment(date).format("YYYY-MM-DD");
    };

    const headers = [
      { title: "Nama Pemilik", value: "customer.name" },
      { title: "Hewan", value: "pet.type" },
      { title: "Kontak", value: "customer.phone" },
      { title: "Tanggal", value: "appointment_time" },
      { title: "Status Kunjungan", value: "status" },
    ];

    // Method to handle status update
    const updateStatus = async (id, status) => {
      console.log("ID yang diterima:", id);
      console.log("Status yang diterima:", status);
      try {
        const token = localStorage.getItem("authToken");

        const formData = new FormData();
        formData.append("status", status); // Tambahkan status yang dipilih

        // Kirim permintaan POST ke API
        const response = await apiClient.post(
          `veteriner/queue/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        Swal.fire({
          title: `Status berhasil diperbarui`,
          text: `${status}`,
          icon: "success",
        });
        await fetchQueue();
      } catch (err) {
        console.error(
          `Gagal memperbarui status klinik untuk ID: ${id}`,
          err.response?.data || err
        );
        alert(
          `Gagal memperbarui status klinik. Error: ${
            err.response?.data?.message || "Error tidak diketahui"
          }`
        );
      }
    };

    // Method to get status color
    const getStatusColor = (status) => {
      return status === "finished"
        ? "#5AAF51"
        : status === "ongoing"
        ? "#3FA2F6"
        : status === "canceled"
        ? "#FF4E4E"
        : "#FFA33C";
    };

    // Method to export data to CSV
    const exportToCSV = () => {
      let csvContent =
        "data:text/csv;charset=utf-8," +
        headers.map((header) => header.title).join(",") +
        "\n" +
        filteredQueue.value
          .map((item) => {
            return [
              item.customer.name,
              item.pet.type,
              item.customer.phone,
              formatDate(item.appointment_time),
              item.status,
            ].join(",");
          })
          .join("\n");

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "queue_data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    // Method to export data to PDF
    const exportToPDF = () => {
      const doc = new jsPDF();
      doc.text("Data Antrian", 10, 10);

      const tableData = filteredQueue.value.map((item) => [
        item.customer.name,
        item.pet.type,
        item.customer.phone,
        formatDate(item.appointment_time),
        item.status,
      ]);

      autoTable(doc, {
        head: [headers.map((header) => header.title)],
        body: tableData,
      });

      doc.save("queue_data.pdf");
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
      headers,
      updateStatus,
      getStatusColor,
      exportToCSV,
      exportToPDF,
      formatDate,
      fromDate,
      toDate,
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
