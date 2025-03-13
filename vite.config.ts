import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // Customize class name format (e.g., camelCase, kebab-case)
      generateScopedName: '[name]__[local]__[hash:base64:5]', // Customize generated class names
    },
    lightningcss: {
      cssModules: true,
    },
  },
});
