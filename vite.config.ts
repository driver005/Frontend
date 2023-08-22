// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { r3f } from "@react-three/editor/vite"
import { env } from 'process'
//r3f()

export default defineConfig({
    plugins: [env.command === 'build' ? react() : react()],
})