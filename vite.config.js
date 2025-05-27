// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/dictionary/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'icons/icon-192.png',
        'icons/icon-512.png'
      ],
      manifest: {
        name: "EchoWord",
        short_name: "EchoWord",
        start_url: "/dictionary/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#2c3e50",
        icons: [
          {
            src: "icons/icon-192.png",  // 슬래시 제거 (상대 경로)
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  }
});
