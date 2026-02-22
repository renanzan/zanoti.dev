export interface SearchItem {
	id: string;
	title: string;
	description: string;
	href: string;
	type: "project" | "company" | "page";
	category?: string;
	keywords?: string[];
}

export const searchItems: SearchItem[] = [
	// Projects
	{
		id: "kderno",
		title: "Kderno - Editor Markdown WYSIWYG",
		description: "Editor markdown completo com preview ao vivo para plataforma educacional",
		href: "/projects/kderno",
		type: "project",
		category: "Clipping CACD",
		keywords: ["editor", "markdown", "wysiwyg", "educacional", "kderno", "clipping"]
	},
	{
		id: "mentora-platform",
		title: "Plataforma de Campeonatos Digitais",
		description: "Interface completa para torneios de e-sports com integração Web3",
		href: "/projects/mentora-platform",
		type: "project",
		category: "Mentora",
		keywords: ["campeonatos", "e-sports", "web3", "blockchain", "metamask", "mentora"]
	},
	{
		id: "pmd-system",
		title: "Sistema PMD - Planejamento e Monitoramento",
		description: "Dashboard completo para gestão de projetos integrado ao SharePoint",
		href: "/projects/pmd-system",
		type: "project",
		category: "UOL",
		keywords: ["pmd", "dashboard", "sharepoint", "gestão", "projetos", "uol"]
	},
	{
		id: "autopilot-saas",
		title: "AutoPilot™ - SaaS de Automação",
		description: "Reconstrução completa do SaaS de automação de marketing",
		href: "/projects/autopilot-saas",
		type: "project",
		category: "AdSeleto",
		keywords: ["autopilot", "saas", "marketing", "nextjs", "keycloak", "adseleto"]
	},
	{
		id: "conecta-platform",
		title: "Plataforma Conecta",
		description: "Evolução da plataforma principal para gestão de projetos sociais",
		href: "/projects/conecta-platform",
		type: "project",
		category: "Incentiv",
		keywords: ["conecta", "plataforma", "projetos sociais", "design system", "incentiv"]
	},
	{
		id: "incentiv-design-system",
		title: "Design System Incentiv",
		description: "Biblioteca de componentes publicada no GitHub Packages para padronização",
		href: "/projects/incentiv-design-system",
		type: "project",
		category: "Incentiv",
		keywords: ["design system", "github packages", "npm", "biblioteca", "componentes", "storybook", "incentiv"]
	},
	{
		id: "pipeline-receptivo",
		title: "Pipeline Receptivo",
		description: "Sistema de funil para grandes empresas com landing page e painel gerencial",
		href: "/projects/pipeline-receptivo",
		type: "project",
		category: "Incentiv",
		keywords: ["pipeline", "receptivo", "funil", "landing page", "google", "suzano", "coca cola", "incentiv"]
	},
	// Companies
	{
		id: "incentiv",
		title: "Incentiv",
		description: "Tech Lead Front-End - Projetos sociais e impacto social",
		href: "/companies/incentiv",
		type: "company",
		category: "Empresa",
		keywords: ["incentiv", "desenvolvedor front-end", "front-end", "design system", "projetos sociais"]
	},
	{
		id: "adseleto",
		title: "AdSeleto",
		description: "Desenvolvedor Front-End Sênior - SaaS de automação de marketing",
		href: "/companies/adseleto",
		type: "company",
		category: "Empresa",
		keywords: ["adseleto", "senior", "saas", "marketing", "nextjs"]
	},
	{
		id: "uol",
		title: "UOL - Universo Online",
		description: "Desenvolvedor Front-End Sênior - Sistemas corporativos",
		href: "/companies/uol",
		type: "company",
		category: "Empresa",
		keywords: ["uol", "universo online", "senior", "sharepoint", "sistemas corporativos"]
	},
	{
		id: "mentora",
		title: "Mentora",
		description: "Desenvolvedor Front-End Pleno - E-sports e Web3",
		href: "/companies/mentora",
		type: "company",
		category: "Empresa",
		keywords: ["mentora", "pleno", "e-sports", "web3", "blockchain"]
	},
	{
		id: "clipping-cacd",
		title: "Clipping CACD",
		description: "Desenvolvedor Júnior → Pleno - Plataformas educacionais",
		href: "/companies/clipping-cacd",
		type: "company",
		category: "Empresa",
		keywords: ["clipping", "cacd", "educacional", "júnior", "pleno"]
	},
	// Pages
	{
		id: "home",
		title: "Início",
		description: "Página principal",
		href: "/",
		type: "page",
		category: "Página",
		keywords: ["início", "home", "principal"]
	},
	{
		id: "about",
		title: "Sobre",
		description: "Minha trajetória e história pessoal",
		href: "/about",
		type: "page",
		category: "Página",
		keywords: ["sobre", "história", "trajetória", "pessoal", "taubaté", "ufop", "radar viral"]
	},
	{
		id: "projects",
		title: "Projetos",
		description: "Meu portfólio de projetos",
		href: "/projects",
		type: "page",
		category: "Página",
		keywords: ["projetos", "portfólio", "portfolio"]
	},
	{
		id: "experience",
		title: "Experiência",
		description: "Minha trajetória profissional",
		href: "/work/experience",
		type: "page",
		category: "Página",
		keywords: ["experiência", "trajetória", "carreira", "profissional"]
	},
	{
		id: "skills",
		title: "Habilidades",
		description: "Tecnologias e habilidades",
		href: "/work/skills",
		type: "page",
		category: "Página",
		keywords: ["habilidades", "skills", "tecnologias", "tech stack"]
	},
	{
		id: "contact",
		title: "Contato",
		description: "Entre em contato",
		href: "/work/contact",
		type: "page",
		category: "Página",
		keywords: ["contato", "contact", "fale comigo"]
	},
	{
		id: "blog",
		title: "Blog",
		description: "Artigos e posts",
		href: "/blog",
		type: "page",
		category: "Página",
		keywords: ["blog", "artigos", "posts", "publicações"]
	}
];

export const searchItemsByQuery = (query: string): SearchItem[] => {
	if (!query.trim()) {
		return [];
	}

	const lowerQuery = query.toLowerCase().trim();

	return searchItems.filter((item) => {
		const titleMatch = item.title.toLowerCase().includes(lowerQuery);
		const descriptionMatch = item.description.toLowerCase().includes(lowerQuery);
		const categoryMatch = item.category?.toLowerCase().includes(lowerQuery);
		const keywordsMatch = item.keywords?.some((keyword) =>
			keyword.toLowerCase().includes(lowerQuery)
		);

		return titleMatch || descriptionMatch || categoryMatch || keywordsMatch;
	});
};

export const getSearchItemIcon = (type: SearchItem["type"]) => {
	switch (type) {
		case "project":
			return "📁";
		case "company":
			return "🏢";
		case "page":
			return "📄";
		default:
			return "🔍";
	}
};