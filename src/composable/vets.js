import { ref, watch, onMounted } from "vue";
import axios from "axios";

export function useVets() {
  const veteriners = ref([]);
  const totalItems = ref(0);
  const loading = ref(false);
  const itemsPerPage = ref(10); // Ubah nilai default dari 0 menjadi 10
  const currentPage = ref(1);
  const sortBy = ref(["clinic_name"]); // Ubah menjadi array
  const sortDesc = ref(false);
  const error = ref(null);

  const fetchVeteriners = async () => {
    loading.value = true;

    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.get(
        "http://localhost:8000/api/admin/veteriners",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage.value,
            per_page: itemsPerPage.value,
            sort_by: sortBy.value[0], // Ambil nilai pertama dari array untuk API
            sort_desc: sortDesc.value,
          },
        }
      );

      if (response.data && Array.isArray(response.data.data)) {
        veteriners.value = response.data.data;
        totalItems.value = response.data.total; // Asumsikan API mengembalikan jumlah total item
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err) {
      error.value = "GAGAL MENDAPATKAN DATA VETERINER";
      console.error("Error fetching veteriners: ", err);
    } finally {
      loading.value = false;
    }
  };
  // Delete item function
  const deleteItem = async (item) => {
    if (confirm(`Are you sure you want to delete ${item.clinic_name}?`)) {
      try {
        // Send DELETE request to API
        await axios.delete(
          `http://localhost:8000/api/admin/veteriners/${item.id}`
        );

        // Remove item from the table if successful
        const index = veteriners.value.indexOf(item);
        if (index > -1) {
          veteriners.value.splice(index, 1); // Remove item locally
        }
        alert("Item deleted successfully!");
      } catch (err) {
        console.error("Failed to delete item:", err);
        alert("Failed to delete item. Please try again later.");
      }
    }
  };

  // Watch for changes in pagination, sorting, etc., and refetch data
  watch([currentPage, itemsPerPage, sortBy, sortDesc], fetchVeteriners);

  // Panggil fetchVeteriners saat komponen pertama kali dimuat
  onMounted(() => {
    fetchVeteriners();
  });

  return {
    veteriners,
    totalItems,
    loading,
    itemsPerPage,
    currentPage,
    sortBy,
    sortDesc,
    deleteItem,
    fetchVeteriners,
    error,
  };
}
