import { ref } from "vue";
import axios from "axios";
import router from "@/router";

export function useDashboard() {
  // Define a ref to store the list of veteriners
  const veteriners = ref([]);
  const jumlahKlinik = ref(0);
  const pendingKlinik = ref(0);
  const approvedKlinik = ref(0);
  const canceledKlinik = ref(0);
  const forums = ref([]);
  const jumlahforum = ref(0)
  const error = ref(null);

  // Function to fetch veteriners data from the API
  const fetchVeteriners = async () => {
    try {
      // Get the token from localStorage (or another storage mechanism)
      const token = localStorage.getItem("authToken");

      // Make sure to attach the Authorization header with the token
      const responseVets = await axios.get(
        "http://localhost:8000/api/admin/veteriners",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );const responseForums = await axios.get(
        "http://localhost:8000/api/forums",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if(Array.isArray(responseForums.data.data)){
        const forumsData = responseForums.data.data
        forums.value = forumsData;
        jumlahforum.value = forumsData.length
      }
      if (Array.isArray(responseVets.data.data)) {
        const veterinerData = responseVets.data.data;
        veteriners.value = veterinerData;
        jumlahKlinik.value = veterinerData.length; // Set the total number of clinics
        pendingKlinik.value = veterinerData.filter(
          (v) => v.register_status === "pending"
        ).length;
        approvedKlinik.value = veterinerData.filter(
          (v) => v.register_status === "approved"
        ).length;
        canceledKlinik.value = veterinerData.filter(
          (v) => v.register_status === "rejected"
        ).length;
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err) {
      error.value = "Failed to fetch veteriners data.";
      console.error("Error fetching veteriners: ", err);
    }
  };

  // Fetch the data when this composable is used
  fetchVeteriners();

  return {
    jumlahforum,
    veteriners,
    jumlahKlinik,
    pendingKlinik,
    approvedKlinik,
    canceledKlinik,
    error,
    fetchVeteriners,
  };
}
