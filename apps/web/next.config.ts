import path from "path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		// typedRoutes: true
		// Otimizações de build para melhor performance
		optimizePackageImports: ["lucide-react", "framer-motion"]
	},

	images: {
		remotePatterns: []
	},

	webpack: (config, { dev }) => {
		// Configuração SVG com SVGR
		// Remove a regra padrão do Next.js para SVGs
		const fileLoaderRule = config.module.rules.find(
			(rule: unknown): rule is { test: RegExp; exclude?: RegExp } => {
				if (rule === "..." || typeof rule !== "object" || rule === null) {
					return false;
				}
				return (
					"test" in rule &&
					rule.test instanceof RegExp &&
					rule.test.test(".svg")
				);
			}
		);
		if (fileLoaderRule) {
			fileLoaderRule.exclude = /\.svg$/i;
		}

		// Adiciona regra para processar SVGs como componentes React
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: fileLoaderRule ? undefined : /\.[jt]sx?$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						dimensions: true, // Mantém width/height dos SVGs
						// Substitui valores de fill e stroke por currentColor para permitir customização via className
						replaceAttrValues: {
							"#000": "currentColor",
							"#000000": "currentColor",
							black: "currentColor"
						},
						svgoConfig: {
							plugins: [
								{
									name: "preset-default",
									params: {
										overrides: {
											removeViewBox: false
										}
									}
								}
							]
						}
					}
				}
			]
		});

		// Otimizações para desenvolvimento (hot reload mais rápido)
		if (dev) {
			// Otimiza resolução de módulos para packages locais
			config.resolve.extensionAlias = {
				".js": [".js", ".ts", ".tsx"],
				".jsx": [".jsx", ".tsx"]
			};
		}

		return config;
	},

	async rewrites() {
		return [
			{
				source: "/ingest/static/:path*",
				destination: "https://us-assets.i.posthog.com/static/:path*"
			},
			{
				source: "/ingest/:path*",
				destination: "https://us.i.posthog.com/:path*"
			},
			{
				source: "/ingest/decide",
				destination: "https://us.i.posthog.com/decide"
			}
		];
	},

	// This is required to support PostHog trailing slash API requests
	skipTrailingSlashRedirect: true,

	// Configuração Turbopack (vazia para usar webpack em produção)
	turbopack: {},

	// Configuração para monorepo - define o diretório raiz para rastreamento de arquivos
	outputFileTracingRoot: path.join(__dirname, "../..")
};

export default nextConfig;
