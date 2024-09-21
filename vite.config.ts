import { resolve } from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import webExtension from '@samrum/vite-plugin-web-extension';

export default defineConfig({
  resolve: {
    alias: {
      $background: resolve(__dirname, 'src/background'),
      $content: resolve(__dirname, 'src/content'),
      $popup: resolve(__dirname, 'src/popup'),
      $: resolve(__dirname, 'src'),
    },
  },
  plugins: [
    svelte(),
    webExtension({
      manifest: {
        name: 'Vite Svelte Extension',
        description: 'Extension template for Vite, Svelte, and TypeScript',
        version: '1.0.0',
        manifest_version: 2,
        background: {
          scripts: ['src/background/background.ts'],
          persistent: true,
        },
        browser_action: {
          default_popup: 'src/popup/index.html',
        },
        content_scripts: [
          {
            matches: ['<all_urls>'],
            js: ['src/content/content.ts'],
          },
        ],
        permissions: [],
      },
    }),
  ],
});
