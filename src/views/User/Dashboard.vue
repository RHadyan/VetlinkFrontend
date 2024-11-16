<script setup>
import DashboardComponent from "@/components/DashboardComponent.vue";
import Sidebar from "@/components/Layouts/SidebarVet.vue";
import Headers from "@/components/Layouts/HeaderVet.vue";
</script>

<template>
  <div class="flex h-screen font-family-poppins">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content area -->
    <div class="flex flex-col flex-1 h-full overflow-hidden bg-[#F6F6F6]">
      <!-- Header -->
      <Headers />

      <!-- Scrollable Dashboard -->
      <div class="flex-1 overflow-y-auto justify-center flex p-4">
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-family-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
