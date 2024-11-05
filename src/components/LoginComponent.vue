<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-700">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label
            for="identifier"
            class="block text-sm font-medium text-gray-700"
            >Email atau Username</label
          >
          <input
            type="text"
            v-model="identifier"
            id="identifier"
            required
            class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            v-model="password"
            id="password"
            required
            class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
        <p v-if="error" class="text-sm text-center text-red-500">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuth } from "@/composable/Auth.js";
import { ref, onBeforeMount } from "vue";

export default {
  setup() {
    const { login, error, identifier, password, checkAuth } = useAuth();

    onBeforeMount(() => {
      checkAuth();
    });

    const handleLogin = async () => {
      await login();
    };

    return {
      identifier,
      password,
      error,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
}
</style>
