import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zanoti.dev";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = siteUrl;
	const currentDate = new Date();

	// Páginas principais
	const routes = [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: "weekly" as const,
			priority: 1.0
		},
		{
			url: `${baseUrl}/about`,
			lastModified: currentDate,
			changeFrequency: "monthly" as const,
			priority: 0.8
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: currentDate,
			changeFrequency: "weekly" as const,
			priority: 0.9
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: currentDate,
			changeFrequency: "weekly" as const,
			priority: 0.9
		},
		{
			url: `${baseUrl}/work/skills`,
			lastModified: currentDate,
			changeFrequency: "monthly" as const,
			priority: 0.7
		},
		{
			url: `${baseUrl}/work/experience`,
			lastModified: currentDate,
			changeFrequency: "monthly" as const,
			priority: 0.7
		},
		{
			url: `${baseUrl}/work/contact`,
			lastModified: currentDate,
			changeFrequency: "monthly" as const,
			priority: 0.6
		},
		{
			url: `${baseUrl}/today-studies`,
			lastModified: currentDate,
			changeFrequency: "daily" as const,
			priority: 0.7
		}
	];

	// Projetos individuais
	const projects = [
		"autopilot-saas",
		"conecta-platform",
		"incentiv-design-system",
		"kderno",
		"mentora-platform",
		"pipeline-receptivo",
		"pmd-system"
	];

	projects.forEach((project) => {
		routes.push({
			url: `${baseUrl}/projects/${project}`,
			lastModified: currentDate,
			changeFrequency: "monthly" as const,
			priority: 0.8
		});
	});

	// Posts do blog
	const blogPosts = [
		"web3-frontend-experience",
		"developer-experience-pacotes-reaproveitamento",
		"migracao-sistemas-legados",
		"monorepo-pnpm"
	];

	blogPosts.forEach((post) => {
		routes.push({
			url: `${baseUrl}/blog/${post}`,
			lastModified: currentDate,
			changeFrequency: "monthly" as const,
			priority: 0.7
		});
	});

	return routes;
}
