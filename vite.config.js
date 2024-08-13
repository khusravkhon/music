import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Music App",
        theme_color: "#ff5e3a",
        icons: [
          {
            src: "assets/manifestPng/pwa-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "assets/manifestPng/pwa-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "assets/manifestPng/pwa-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "assets/manifestPng/pwa-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "assets/manifestPng/pwa-168x168.png",
            sizes: "168x168",
            type: "image/png",
          },
          {
            src: "assets/manifestPng/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,}"],
      },
    }),
    // visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
