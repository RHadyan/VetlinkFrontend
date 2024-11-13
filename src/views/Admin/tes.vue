<template>
  <v-app>
    <v-main>
      <div class="flex justify-center flex-grow">
        <v-data-table
          :headers="headers"
          :items="veteriners"
          class="elevation-1"
          :items-per-page="5"
        >
        </v-data-table>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const veteriners = ref([
      {
        id: 1,
        clinic_name: "Klinik A",
        city: "Jakarta",
        contact: "02189914595",
        address: "Jl. Sudirman No. 1",
        open_time: "08:00",
        close_time: "17:00",
        register_status: "approved",
      },
      {
        id: 2,
        clinic_name: "Klinik B",
        city: "Bandung",
        contact: "0227561234",
        address: "Jl. Merdeka No. 2",
        open_time: "09:00",
        close_time: "18:00",
        register_status: "pending",
      },
      {
        id: 3,
        clinic_name: "Klinik C",
        city: "Surabaya",
        contact: "031654321",
        address: "Jl. Pemuda No. 3",
        open_time: "07:00",
        close_time: "15:00",
        register_status: "rejected",
      },
      {
        id: 4,
        clinic_name: "Klinik D",
        city: "Medan",
        contact: "061123456",
        address: "Jl. Medan Merdeka No. 4",
        open_time: "10:00",
        close_time: "19:00",
        register_status: "approved",
      },
    ]);

    const headers = [
      { text: "Nama Klinik", value: "clinic_name" },
      { text: "Domisili", value: "city" },
      { text: "Kontak", value: "contact" },
      { text: "Alamat", value: "address" },
      { text: "Jam Operasional", value: "open_time" },
      { text: "Status Pendaftaran", value: "register_status" },
    ];

    return {
      veteriners,
      headers,
    };
  },
};
</script>
