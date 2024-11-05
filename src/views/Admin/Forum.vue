<script setup>
import ForumComponent from "@/components/ForumComponent.vue";
import Sidebar from "@/components/Layouts/Sidebar.vue";
import Headers from "@/components/Layouts/Header.vue";
</script>

<template>
  <body class="body font-family-karla flex">
    <Sidebar/>
    <!-- sidebar -->
    <div class="w-full flex flex-col h-screen overflow-y-hidden bg-[#F6F6F6]">
      <!-- headbar -->
       <Headers/>
      <div class="w-full flex items-center flex-col px-2 gap-y-7 mt-5">
        <!-- dasbor -->
         <ForumComponent/>
      </div>
    </div>
  </body>
</template>
