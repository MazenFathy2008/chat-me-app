import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // الجذر الأساسي هو المجلد الحالي (مكان وجود index.html)
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "public", // عند البناء، يتم حفظ الملفات في `public/`
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
