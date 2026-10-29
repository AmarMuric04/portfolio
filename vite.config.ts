import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		tanstackRouter({
			autoCodeSplitting: true,
			target: "react",
		}),
		react(),
		tailwindcss(),
	],
});
