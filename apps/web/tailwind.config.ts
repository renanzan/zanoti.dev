import plugin from "tailwindcss/plugin";

import type { Config } from "tailwindcss";

const flattenColorPalette = (
	colors: Record<string, string | Record<string, string>>
): Record<string, string> =>
	Object.assign(
		{},
		...Object.entries(
			colors !== null && colors !== void 0 ? colors : {}
		).flatMap(([color, values]) =>
			typeof values == "object"
				? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
						[color + (number === "DEFAULT" ? "" : `-${number}`)]: hex
					}))
				: [
						{
							[`${color}`]: values
						}
					]
		)
	);

const config = {
	content: [
		"src/app/**/*.{js,ts,jsx,tsx}",
		"src/contents/**/*.{js,ts,jsx,tsx}",
		"src/components/**/*.{js,ts,jsx,tsx}",
		"src/constants/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				accent: {
					100: "#99e2b4",
					200: "#88d4ab",
					300: "#78c6a3",
					400: "#67b99a",
					500: "#56ab91",
					600: "#469d89",
					700: "#358f80",
					800: "#248277",
					900: "#14746f"
				}
			},
			animation: {
				"bounce-x": "bounce-x 1s infinite"
			},
			keyframes: {
				"bounce-x": {
					"0%, 100%": {
						transform: "translateX(25%)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
					},
					"50%": {
						transform: "translateX(0)",
						animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
					}
				}
			}
		}
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					"bg-grid": (value) => {
						// Criando o SVG inline sem usar mini-svg-data-uri
						const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-dasharray="5 3" transform="scale(1, -1)"><path d="M0 .5H31.5V32"/></svg>`;
						const dataUri = `data:image/svg+xml;base64,${Buffer.from(
							svgContent
						).toString("base64")}`;

						return {
							backgroundImage: `url("${dataUri}")`
						};
					}
				},
				{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
			);
		})
	]
} satisfies Config;

export default config;
