import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), svgr(), tailwindcss()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "vibe-ui-lib",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
})
