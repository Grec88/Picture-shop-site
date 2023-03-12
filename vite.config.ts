import { defineConfig } from 'vite'
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy'

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
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/img/*', 
          dest: 'assets'
    }],
    })
  ]
})


