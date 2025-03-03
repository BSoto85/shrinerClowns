import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Ensures Vite is accessible externally
    port: 8080, // DigitalOcean expects port 8080
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: ["pyramid-shriner-klowns-x65un.ondigitalocean.app"], // Add your DigitalOcean URL
  },
});
