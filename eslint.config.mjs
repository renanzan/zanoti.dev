import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier";
import ts from "typescript-eslint";

export default ts.config(
	{ ignores: [".next/**", "node_modules/**"] },
	...ts.configs.recommended,
	{
		// Configuração para o App Web
		files: ["apps/web/**/*.{ts,tsx}"],
		plugins: { "@next/next": nextPlugin },
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs["core-web-vitals"].rules
		},
		settings: { next: { rootDir: "apps/web/" } }
	},
	{
		files: ["packages/shared/**/*.{ts,tsx}"],
		rules: {
			"@typescript-eslint/no-explicit-any": "error"
		}
	},
	prettierConfig
);
