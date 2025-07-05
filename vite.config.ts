import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: '/bageshwari-hospital', // ✅ Essential for subpath hosting
  server: {
    host: "::",
    port: 8080,
    // ✅ Ensure proper SPA fallback for BrowserRouter
    fs: {
      strict: false,
    },
    middlewareMode: false,
    historyApiFallback: true, // ✅ Allow refreshing nested routes
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
