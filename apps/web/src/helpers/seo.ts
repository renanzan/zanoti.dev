import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zanoti.dev";
const siteName = "Renan Zanoti";
const defaultDescription =
	"Desenvolvedor Front-End especializado em migração de sistemas legados, design systems e liderança técnica. 5+ anos de experiência em React, TypeScript e Next.js.";

interface GenerateMetadataOptions {
	title?: string;
	description?: string;
	path?: string;
	image?: string;
	noIndex?: boolean;
	type?: "website" | "article" | "profile";
	publishedTime?: string;
	modifiedTime?: string;
	authors?: string[];
}

export function generateMetadata({
	title,
	description = defaultDescription,
	path = "",
	image = `${siteUrl}/og-image.png`,
	noIndex = false,
	type = "website",
	publishedTime,
	modifiedTime,
	authors = ["Renan Zanoti"]
}: GenerateMetadataOptions = {}): Metadata {
	const fullTitle = title ? `${title} · ${siteName}` : `${siteName} · Desenvolvedor Front-End`;
	const url = `${siteUrl}${path}`;

	return {
		title: fullTitle,
		description,
		keywords: [
			"Renan Zanoti",
			"Desenvolvedor Front-End",
			"React",
			"TypeScript",
			"Next.js",
			"Design Systems",
			"Migração de Sistemas Legados",
			"Liderança Técnica",
			"Frontend Developer",
			"Web Development"
		],
		authors: authors.map((name) => ({ name })),
		creator: "Renan Zanoti",
		publisher: "Renan Zanoti",
		robots: {
			index: !noIndex,
			follow: !noIndex,
			googleBot: {
				index: !noIndex,
				follow: !noIndex,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1
			}
		},
		openGraph: {
			type,
			locale: "pt_BR",
			url,
			title: fullTitle,
			description,
			siteName,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: fullTitle
				}
			],
			...(publishedTime && { publishedTime }),
			...(modifiedTime && { modifiedTime })
		},
		twitter: {
			card: "summary_large_image",
			title: fullTitle,
			description,
			creator: "@renan_zanoti",
			images: [image]
		},
		alternates: {
			canonical: url
		},
		metadataBase: new URL(siteUrl),
		verification: {
			// Adicione suas verificações aqui quando necessário
			// google: "your-google-verification-code",
			// yandex: "your-yandex-verification-code",
		}
	};
}

export function generateStructuredData(type: "Person" | "WebSite" | "Article", data?: any) {
	const baseUrl = siteUrl;

	if (type === "Person") {
		return {
			"@context": "https://schema.org",
			"@type": "Person",
			name: "Renan Zanoti",
			jobTitle: "Desenvolvedor Front-End",
			url: baseUrl,
			sameAs: [
				"https://twitter.com/renan_zanoti",
				"https://github.com/renanzan"
			],
			description: defaultDescription,
			knowsAbout: [
				"React",
				"TypeScript",
				"Next.js",
				"Design Systems",
				"Frontend Development",
				"Web Development"
			]
		};
	}

	if (type === "WebSite") {
		return {
			"@context": "https://schema.org",
			"@type": "WebSite",
			name: siteName,
			url: baseUrl,
			description: defaultDescription,
			author: {
				"@type": "Person",
				name: "Renan Zanoti"
			}
		};
	}

	if (type === "Article" && data) {
		return {
			"@context": "https://schema.org",
			"@type": "Article",
			headline: data.title,
			description: data.description,
			image: data.image || `${baseUrl}/og-image.png`,
			datePublished: data.publishedTime,
			dateModified: data.modifiedTime || data.publishedTime,
			author: {
				"@type": "Person",
				name: "Renan Zanoti",
				url: baseUrl
			},
			publisher: {
				"@type": "Person",
				name: "Renan Zanoti",
				url: baseUrl
			}
		};
	}

	return null;
}
