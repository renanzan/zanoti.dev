/** @type {import("prettier").Config} */
export default {
	// Configurações de formatação (comuns a todo o monorepo)
	tabWidth: 2,
	printWidth: 80,
	useTabs: true,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "none",
	bracketSpacing: true,
	arrowParens: "always",

	// Plugin de ordenação de imports
	plugins: ["@ianvs/prettier-plugin-sort-imports"],

	// Ordem de imports padrão para packages
	// Apps podem sobrescrever isso com suas próprias configurações
	importOrder: [
		"^react$",
		"^react/(.*)$",
		"<THIRD_PARTY_MODULES>",
		"^@/(.*)$",
		"",
		"^~/(.*)$",
		"",
		"^[./]",
		"",
		"<TYPES>^react$",
		"<TYPES>^react/(.*)$",
		"<TYPES>^@/(.*)$",
		"<TYPES>^~/(.*)$",
		"<TYPES>^[./]",
		"<TYPES>"
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderTypeScriptVersion: "5.0.0"
};
