// eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
	// matches all files ending with .js
	{
		files: ["**/*.js"],
		rules: {
			"no-console": "off", // allow console.log
			semi: "error",
		},
	},
]);
