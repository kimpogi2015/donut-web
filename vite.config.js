import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@helpers": "/src/helpers",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@store": "/src/store",

      "@images": "/src/assets/images",
    },
  },
});
