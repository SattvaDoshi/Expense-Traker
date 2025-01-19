import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg', 'robots.txt', 'icons/*.png'],
      manifest: {
        "name": "Budget App",
        "short_name": "Budget",
        "description": "An app to manage your budget efficiently.",
        theme_color: '#1DBBC3',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/y-logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/y-logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
