<template>
  <div
    class="grid grid-cols-1 justify-items-center gap-6 font-poppins min-h-screen bg-gray-100"
  >
    <!-- Forum Post Cards -->
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="p-4 flex-col md:flex-row h-fit w-11/12 bg-white rounded-lg space-y-2 shadow-md"
    >
      <div class="flex items-center space-x-2">
        <div
          class="rounded-full"
          style="width: 50px; height: 50px; overflow: hidden"
        >
          <img
            :src="post.userProfile"
            alt="Post Profile Picture"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </div>
        <div>
          <p class="font-medium text-xl">{{ post.username }}</p>
          <p class="font-light text-gray-400 text-sm">{{ post.location }}</p>
        </div>
        <div class="flex justify-center items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
            </svg>
          </div>
          <p class="text-red text-sm flex">{{ post.status }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4">
        <div
          style="max-width: 430px; max-height: 430px; overflow: hidden"
          class="rounded-xl"
        >
          <img
            :src="post.image"
            alt="Post Image"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </div>
        <div class="overflow-y-scroll no-scrollbar" style="max-height: 430px">
          <!-- Title -->
          <p class="font-semibold text-lg text-pretty">{{ post.title }}</p>

          <!-- Last Seen -->
          <div class="mt-2">
            <p class="font-medium text-sm text-gray-700">Last Seen:</p>
            <p class="font-light text-base text-pretty">{{ post.lastSeen }}</p>
          </div>

          <!-- Characteristics -->
          <div class="mt-2">
            <p class="font-medium text-sm text-gray-700">Characteristics:</p>
            <p class="font-light text-base text-pretty">
              {{ post.characteristics }}
            </p>
          </div>

          <!-- Description -->
          <div class="mt-2">
            <p class="font-medium text-sm text-gray-700">Description:</p>
            <p class="font-light text-base text-pretty">
              {{ post.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          userProfile: "@/assets/images/cat1.png",
          username: "Ramadhan",
          location: "Depok",
          status: "Lost",
          title: "Mencari Kucing Peliharaan",
          lastSeen: "11 November 2024, di Depan Gerbang UI",
          characteristics: "Orange putih, mata hitam kuning, pecicilan",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: "@/assets/images/cat1.png",
        },
      ],
    };
  },
};
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
