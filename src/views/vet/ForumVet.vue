<script setup>
import ForumVetComponent from "@/components/ForumVetComponent.vue";
import SidebarVet from "@/components/Layouts/SidebarVet.vue";
import HeaderVet from "@/components/Layouts/HeaderVet.vue";
</script>

<template>
  <div class="flex h-screen font-family-poppins">
    <!-- Sidebar -->
    <SidebarVet />

    <!-- Main content area -->
    <div class="flex flex-col flex-1 h-full overflow-hidden bg-[#F6F6F6]">
      <!-- Header -->
      <HeaderVet />

      <!-- Scrollable Dashboard -->
      <div class="flex-1 overflow-y-auto justify-center flex py-5">
        <ForumVetComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-family-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
