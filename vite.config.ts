import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { cloudflare } from "@cloudflare/vite-plugin"

export default defineConfig({
	base: "/_admin/",
	plugins: [
		react(),
		cloudflare({
			configPath: "./wrangler.jsonc",
			persistState: false,
			config: {
				assets: {
					not_found_handling: "none",
					run_worker_first: true
				}
			}
		}),
	],
})
