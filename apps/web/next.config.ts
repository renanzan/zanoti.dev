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

	// Configuração Turbopack para processar SVGs como componentes React
	turbopack: {
		rules: {
			"*.svg": {
				loaders: [
					{
						loader: "@svgr/webpack",
						options: {
							dimensions: true,
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
				],
				as: "*.js"
			}
		}
	},

	// Configuração para monorepo - define o diretório raiz para rastreamento de arquivos
	outputFileTracingRoot: path.join(__dirname, "../..")
};

export default nextConfig;
