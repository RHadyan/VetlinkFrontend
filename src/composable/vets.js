import { ref, watch, onMounted, computed } from "vue"; // Import `computed` for search functionality
import axios from "axios";
import router from "../router";

export function useVets() {
  // State variables
  const veteriners = ref([]); 
  const totalItems = ref(0);
  const loading = ref(false); 
  const itemsPerPage = ref(10);
  const currentPage = ref(1); 
  const sortBy = ref(["register_status"]); 
  const sortDesc = ref(false);
  const error = ref(null);


  const alamat = ref("");
  const namaKlinik = ref("");


  const search = ref("");

  const filteredVeteriners = computed(() => {
    return veteriners.value.filter((item) => {
      const nameMatch = item.clinic_name
        .toLowerCase()
        .includes(search.value.toLowerCase());
      const kotaMatch = item.city
        .toLowerCase()
        .includes(search.value.toLowerCase());
      const statusMatch = item.register_status
        .toLowerCase()
        .includes(search.value.toLowerCase());
      return nameMatch || statusMatch || kotaMatch; 
    });
  });

  
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
        totalItems.value = response.data.total;
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
        const token = localStorage.getItem("authToken"); 

  
        await axios.delete(
          `http://localhost:8000/api/admin/veteriner/${item.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );

        // Remove item from the table if successful
        const index = veteriners.value.indexOf(item);
        if (index > -1) {
          veteriners.value.splice(index, 1); 
        }
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
            idKlinik: detail.id,
            namaKlinik: detail.clinic_name,
            alamat: detail.address,
            clinicImage: detail.clinic_image, 
            document: detail.document, 
          },
        });
      }
    } catch (err) {
      console.error("Failed to fetch clinic details:", err);
      alert("Failed to fetch details. Please try again later.");
    }
  };

  watch([currentPage, itemsPerPage, sortBy, sortDesc], fetchVeteriners);

  onMounted(() => {
    fetchVeteriners();
  });

  return {

    alamat,
    namaKlinik,
    veteriners,
    filteredVeteriners, 
    totalItems,
    loading,
    itemsPerPage,
    currentPage,
    sortBy,
    sortDesc,
    deleteItem,
    klinikDetail,
    fetchVeteriners,
    search,
    error,
  };
}
