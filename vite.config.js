import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
    theme: {
        extend: {
            color: {
                bgPrimary: "#F7F8F9",
                primary: "#222222",
                accent: "#34495E"
            }
        }
    },
  plugins: [
    react(),
    tailwindcss(),
],
})
