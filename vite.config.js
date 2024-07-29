import { defineConfig } from 'vite'

export default defineConfig(({ _command }) => ({
  base: '/wine-log-explorer/',
  build: {
    outDir: 'public',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/wine-log-explorer-[hash].js',
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
}))
