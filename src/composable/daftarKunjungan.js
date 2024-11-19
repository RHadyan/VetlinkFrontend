import { ref, watch, onMounted, computed } from "vue"; // Import `computed` for search functionality
import axios from "axios";
import router from "../router";
import apiClient from "@/api/axiosInstance";

export function useQueue() {
  // State variables
  const Queue = ref([]);
  const totalItems = ref(0);
  const loading = ref(false);
  const itemsPerPage = ref(10);
  const currentPage = ref(1);
  const sortBy = ref(["register_status"]);
  const sortDesc = ref(false);
  const error = ref(null);
  const search = ref("");

  const filteredQueue = computed(() => {
    return Queue.value.filter((item) => {
      const statusMatch = item.status
        .toLowerCase()
        .includes(search.value.toLowerCase());
      const petTypeMatch = item.pet.type
        .toLowerCase()
        .includes(search.value.toLowerCase()); // Menggunakan `type` sesuai data
      return petTypeMatch || statusMatch;
    });
  });

  const fetchQueue = async () => {
    loading.value = true;

    try {
      const token = localStorage.getItem("authToken");

      const response = await apiClient.get("veteriner/queues", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page: currentPage.value,
          per_page: itemsPerPage.value,
          sort_by: sortBy.value[0],
          sort_desc: sortDesc.value,
        },
      });

      if (response.data && Array.isArray(response.data.data)) {
        Queue.value = response.data.data;
        // console.log(response)
        totalItems.value = response.data.total;
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err) {
      error.value = "GAGAL MENDAPATKAN DATA QUEUE";
      console.error("Error fetching Queue: ", err);
    } finally {
      loading.value = false;
    }
  };
  watch([currentPage, itemsPerPage, sortBy, sortDesc], fetchQueue);

  onMounted(() => {
    fetchQueue();
  });

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
  };
}
