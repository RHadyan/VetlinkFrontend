import { ref } from "vue";
import axios from "axios";
import router from "@/router";

export function useVets() {
  // Define a ref to store the list of veteriners
  const veteriners = ref([]);

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
      );
      if (Array.isArray(responseVets.data.data)) {
        const veterinerData = responseVets.data.data;
        veteriners.value = veterinerData;
        console.log(veteriners)
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
    veteriners,
  };
}
