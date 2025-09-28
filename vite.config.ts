// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';
import Sitemap from 'vite-plugin-sitemap';
import { r3f } from '@react-three/editor/vite';
import { env } from 'process';
//r3f()

const dynamicRoutes = ['/', '/projects', '/printer'];

export default defineConfig({
	plugins: [
		env.command === 'build' ? react() : react(),
		viteCompression({
			algorithm: 'brotliCompress', // or 'gzip'
			ext: '.br',
		}),
		// Auto-generate routes
		Sitemap({ hostname: 'https://www.sfz-tuebingen.org', dynamicRoutes }),
	],
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		sourcemap: false,
		cssCodeSplit: true,
		outDir: 'dist',
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return 'vendor';
					}
				},
			},
		},
	},
});
