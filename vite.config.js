import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { glob } from 'glob';
import liveReload from 'vite-plugin-live-reload';

function moveOutputPlugin() {
  return {
    name: 'move-output',
    enforce: 'post',
    apply: 'build',
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith('pages/')) {
          const newFileName = fileName.slice('pages/'.length);
          bundle[fileName].fileName = newFileName;
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: '/portfolio/',
  plugins: [
    liveReload(['./layout/**/*.ejs', './pages/**/*.ejs', './pages/**/*.html']),
    // ViteEjsPlugin(),
    moveOutputPlugin(),
    react()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: '/',
    watch: {
      usePolling: true, // i18n Enable polling for changes
    },
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync('pages/**/*.html')
          .map((file) => [
            path.relative('pages', file.slice(0, file.length - path.extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
    },
    outDir: 'dist',
  },
});