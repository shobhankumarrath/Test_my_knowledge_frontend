import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Test_my_knowledge_frontend/",
  plugins: [react()],
});
