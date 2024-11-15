import { ref, computed, onMounted } from "vue";
import axios from "axios";

export function useForum() {
  const cards = ref([]);
  const currentPage = ref(1);
  const itemsPerPage = 6;
  const searchQuery = ref("");
  const error = ref(null); // For error handling

  // Function to fetch the forums data
  const fetchForums = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Optional: Check if token is required
      const response = await axios.get(
        "http://localhost:8000/api/admin/forums",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use token if needed
          },
        }
      );

      // Assuming the API returns an array of forum cards
      cards.value = response.data.data;
      error.value = null; // Reset any previous errors
    } catch (err) {
      console.error("Error fetching forums:", err);
      error.value = "Failed to fetch forums. Please try again later."; // Set error message
    }
  };

  const deleteItem = async (item) => {
    if (confirm(`Are you sure you want to delete this post ${item}?`)) {
      try {
        const token = localStorage.getItem("authToken");

        await axios.delete(`http://localhost:8000/api/admin/forum/${item}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Remove item from the table if successful
        alert("Item deleted successfully!");
        // refresh web
        await fetchForums();
      } catch (err) {
        console.error("Failed to delete item:", err);
        alert("Failed to delete item. Please try again later.");
      }
    }
  };

  // Watch for changes in the search query to filter results
  const filteredCards = computed(() => {
    if (!searchQuery.value) {
      return cards.value; // No search, return all cards
    }
    return cards.value.filter((item) => {
      const usernameMatch = item.user.username
        ? item.user.username
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase())
        : false;
      console.log("Search Query:", searchQuery.value);
      console.log("Cards:", cards.value);

      const locationMatch = item.last_seen
        ? item.last_seen.toLowerCase().includes(searchQuery.value.toLowerCase())
        : false;
      console.log("Search Query:", searchQuery.value);
      console.log("Cards:", cards.value);

      return usernameMatch || locationMatch;
    });
  });

  // Pagination logic
  const paginatedCards = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredCards.value.slice(start, end);
  });

  const totalPages = computed(() => {
    return Math.ceil(filteredCards.value.length / itemsPerPage);
  });

  // Change page for pagination
  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages.value) {
      currentPage.value = newPage;
    }
  };
  const postDetail = async (item) => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.get(
        `http://localhost:8000/api/admin/forum/${item.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const detail = response.data.data;
      console.log(detail)
    //   if (detail) {
    //     router.push({
    //       path: "/forumdetail",
    //       query: {
    //         title: detail.title,
    //         last_seen: detail.last_seen,
    //         chara: detail.characteristics,
    //         clinicImage: detail.clinic_image,
    //         document: detail.document,
    //       },
    //     });
    //   }
    } catch (err) {
      console.error("Failed to fetch clinic details:", err);
      alert("Failed to fetch details. Please try again later.");
    }
  };
  // Fetch data when the component is mounted
  onMounted(() => {
    fetchForums();
  });

  return {
    searchQuery,
    paginatedCards,
    currentPage,
    totalPages,
    error, // Expose error to the component
    changePage,
    deleteItem,
    postDetail,
  };
}
