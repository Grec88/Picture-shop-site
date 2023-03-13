import { defineConfig } from 'vite'
import path from "path";


export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // config options
  root: './', // input directory
  build: {
    outDir: './dist' // output directory
  }
})


