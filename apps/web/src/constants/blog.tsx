export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	publishedAt: string; // ISO 8601 format
	tags: string[];
	path: string;
}

export const blogPosts: BlogPost[] = [
	{
		slug: "monorepo-pnpm",
		title: "Monorepo com pnpm: Guia Prático",
		description:
			"Guia prático para configurar e gerenciar monorepos com pnpm workspaces. Estratégias, configurações e melhores práticas validadas em produção.",
		publishedAt: "2024-12-19T00:00:00.000Z",
		tags: ["Monorepo", "pnpm", "Workspaces", "TypeScript", "Developer Experience"],
		path: "/blog/monorepo-pnpm"
	},
	{
		slug: "developer-experience-pacotes-reaproveitamento",
		title: "Developer Experience: Pacotes e Reaproveitamento",
		description:
			"Como melhorar a Developer Experience através de pacotes reutilizáveis, compartilhamento de código e estratégias de reaproveitamento eficientes.",
		publishedAt: "2024-12-19T00:00:00.000Z",
		tags: ["Developer Experience", "Packages", "Reaproveitamento", "Monorepo", "TypeScript"],
		path: "/blog/developer-experience-pacotes-reaproveitamento"
	},
	{
		slug: "migracao-sistemas-legados",
		title: "Migração de Sistemas Legados: Estratégias Práticas",
		description:
			"Aprendizados e estratégias práticas de modernização de sistemas legados, baseados em experiência real em projetos corporativos.",
		publishedAt: "2023-01-15T00:00:00.000Z",
		tags: ["Migração", "Legacy", "React", "SharePoint"],
		path: "/blog/migracao-sistemas-legados"
	},
	{
		slug: "web3-frontend-experience",
		title: "Web3 no Frontend: Integração MetaMask e React",
		description:
			"Aprendizados práticos sobre integração de Web3 no frontend, baseados no desenvolvimento de uma plataforma com criptomoedas. Integração MetaMask, segurança e melhores práticas.",
		publishedAt: "2022-08-20T00:00:00.000Z",
		tags: ["Web3", "MetaMask", "React", "Blockchain"],
		path: "/blog/web3-frontend-experience"
	}
];

/**
 * Retorna todos os posts do blog ordenados por data de publicação (mais recente primeiro)
 */
export const getAllBlogPosts = (): BlogPost[] => {
	return [...blogPosts].sort(
		(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);
};

/**
 * Retorna um post específico pelo slug
 */
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
	return blogPosts.find(post => post.slug === slug);
};

/**
 * Retorna posts filtrados por tag
 */
export const getBlogPostsByTag = (tag: string): BlogPost[] => {
	return blogPosts.filter(post => post.tags.includes(tag));
};
