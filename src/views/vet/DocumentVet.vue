<script setup>
import DocumentVetComponent from "@/components/DocumentVetComponent.vue";
import SidebarVet from "@/components/Layouts/SidebarVet.vue";
import HeadersVet from "@/components/Layouts/HeaderVet.vue";
</script>

<template>
  <div class="flex h-screen font-family-poppins">
    <!-- Sidebar -->
    <SidebarVet />

    <!-- Main content area -->
    <div class="flex flex-col flex-1 h-full overflow-hidden bg-[#F6F6F6]">
      <!-- HeaderVet -->
      <HeadersVet />

      <!-- Scrollable DocumentVet -->
      <div class="flex-1 overflow-y-auto justify-center flex py-4">
        <DocumentVetComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-family-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
