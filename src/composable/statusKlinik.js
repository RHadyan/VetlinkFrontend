import { ref, onMounted,computed } from "vue";
import apiClient from "@/api/axiosInstance";

export function useKlinik() {
  const Klinik = ref([]);
  const error = ref(null);
  const loading = ref(false);

  const fetchKlinik = async () => {
    loading.value = true;

    try {
      const token = localStorage.getItem("authToken");

      const response = await apiClient.get("veteriner/detail", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //   taroh disini
      localStorage.setItem("StorageStatus", response.data.data.register_status);
      Klinik.value = response.data.data;
      //   console.log(Klinik.value);
    } catch (err) {
      error.value = "GAGAL MENDAPATKAN DATA";
      console.error("Error fetching Klinik: ", err);
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    fetchKlinik();
  });

  return {
    Klinik,
    error,
    loading,
    fetchKlinik,
  };
}
