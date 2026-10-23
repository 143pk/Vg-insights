import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [tailwindcss(), react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'esnext',
      minify: 'esbuild' as const,
      sourcemap: false,
      chunkSizeWarningLimit: 5000,
      rollupOptions: {
        maxParallelFileOps: 2,
        output: {
          compact: true,
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('katex')) return 'vendor-katex';
              if (id.includes('lucide-react')) return 'vendor-lucide';
              if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
              return 'vendor';
            }
            if (id.includes('/data/chapterwise/')) {
              const match = id.match(/\/data\/chapterwise\/[^\/]+\/([a-zA-Z0-9]+)/);
              if (match) {
                return `ch-${match[1]}`;
              }
              return 'chapterwise-data';
            }
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
