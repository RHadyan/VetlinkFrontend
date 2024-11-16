import axios from "axios";


// Create an Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/", // Set the base URL
  headers: {
    "Content-Type": "application/json", // Default content type
  },
});

// Automatically attach the Authorization header if the token exists
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Attach token
  }
  return config;
});

export default apiClient;
