// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  plugins: [
    vue(), // Plugin Vue untuk mendukung komponen Vue
    vuetify({
      // Plugin Vuetify untuk mendukung Vuetify di dalam Vite
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      "@": "/src", // Alias untuk src directory
    },
  },
});
