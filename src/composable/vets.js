import { ref, watch, onMounted } from "vue";
import axios from "axios";
import router from "../router";

export function useVets() {
  const veteriners = ref([]);
  const totalItems = ref(0);
  const loading = ref(false);
  const itemsPerPage = ref(10); // Ubah nilai default dari 0 menjadi 10
  const currentPage = ref(1);
  const sortBy = ref(["clinic_name"]); // Ubah menjadi array
  const sortDesc = ref(false);
  const error = ref(null);

  // detail
  const alamat = ref("");
  const namaKlinik = ref("");

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
            sort_by: sortBy.value[0],
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
        const token = localStorage.getItem("authToken"); // Retrieve token from localStorage

        // Send DELETE request with Authorization Bearer token
        await axios.delete(
          `http://localhost:8000/api/admin/veteriner/${item.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the headers
            },
          }
        );

        // Remove item from the table if successful
        const index = veteriners.value.indexOf(item);
        if (index > -1) {
          veteriners.value.splice(index, 1); // Remove item locally
        }
        console.log(item.id);
        alert("Item deleted successfully!");
      } catch (err) {
        console.error("Failed to delete item:", err);
        alert("Failed to delete item. Please try again later.");
      }
    }
  };

  const klinikDetail = async (item) => {
    try {
      const token = localStorage.getItem("authToken");

      // Fetch detailed information about the clinic
      const response = await axios.get(
        `http://localhost:8000/api/admin/veteriner/${item.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const detail = response.data.data;

      if (detail) {
        router.push({
          path: "/detailklinik",
          query: {
            namaKlinik: detail.clinic_name,
            alamat: detail.address,
            clinicImage: detail.clinic_image, // Pass clinic image path
            document: detail.document_url, // Pass document URL
          },
        });
      }
    } catch (err) {
      console.error("Failed to fetch clinic details:", err);
      alert("Failed to fetch details. Please try again later.");
    }
  };

  // Watch for changes in pagination, sorting, etc., and refetch data
  watch([currentPage, itemsPerPage, sortBy, sortDesc], fetchVeteriners);

  // Panggil fetchVeteriners saat komponen pertama kali dimuat
  onMounted(() => {
    fetchVeteriners();
  });

  return {
    alamat,
    namaKlinik,
    veteriners,
    totalItems,
    loading,
    itemsPerPage,
    currentPage,
    sortBy,
    sortDesc,
    deleteItem,
    klinikDetail,
    fetchVeteriners,
    error,
  };
}
