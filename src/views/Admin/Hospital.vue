<script setup>
import HospitalComponent from "@/components/HospitalComponent.vue";
import Sidebar from "@/components/Layouts/Sidebar.vue";
import Headers from "@/components/Layouts/Header.vue";
</script>

<template>
  <body class="flex h-screen font-family-poppins">
    <Sidebar/>
    <!-- sidebar -->
    <div class="flex flex-col flex-1 h-full overflow-hidden bg-[#F6F6F6]">
      <!-- headbar -->
       <Headers/>
      <div class="w-full flex items-center flex-col overflow-y-auto overflow-hidden ">
        <!-- dasbor -->
         <HospitalComponent/>
      </div>
    </div>
  </body>
</template>

<style scoped>
.font-family-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>