import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  {
		// Note: there should be no other properties in this object
		ignores: ["dist/*", "coverage/*"],
	},
  tseslint.configs.recommended,
]);
