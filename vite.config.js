import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost", // Allows access via localhost
    port: 5173, // Vite default port (change if needed)
  },
  preview: {
    host: "0.0.0.0",
    port: 8080, // Vite's preview mode runs on a different port
    allowedHosts: [
      "localhost",
      "127.0.0.1", // Also allows access via IP
      "pyramid-shriner-klowns-x65un.ondigitalocean.app", // Your DigitalOcean URL
    ],
  },
});
