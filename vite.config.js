import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "public",
    sourcemap: true,
    assetsDir: "assets", 
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
