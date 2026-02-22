export interface Project {
	id: string;
	title: string;
	description: string;
	company: string;
	companyId: string;
	period: string;
	role: string;
	technologies: string[];
	highlights: string[];
	challenges: string[];
	results: string[];
	image?: string;
	links?: {
		live?: string;
		github?: string;
		demo?: string;
	};
}

export const projects: Project[] = [
	{
		id: "kderno",
		title: "Kderno - Editor Markdown WYSIWYG",
		description: "Editor markdown com preview ao vivo para plataforma educacional",
		company: "Clipping CACD",
		companyId: "clipping-cacd",
		period: "2020 - 2022",
		role: "Desenvolvedor Front-End Pleno",
		technologies: ["React", "TypeScript", "Monaco Editor", "Markdown", "CSS Modules"],
		highlights: [
			"Preview em tempo real",
			"Plugins customizáveis",
			"Autosave e versionamento"
		],
		challenges: [
			"Preview em tempo real sem perda de performance",
			"Sistema de plugins extensível",
			"Sincronização editor/preview"
		],
		results: [
			"Redução de 60% no tempo de criação",
			"500+ usuários ativos"
		]
	},
	{
		id: "mentora-platform",
		title: "Plataforma de Campeonatos Digitais",
		description: "Interface para torneios de e-sports com integração Web3",
		company: "Mentora",
		companyId: "mentora",
		period: "Abr 2022 - Set 2022",
		role: "Desenvolvedor Front-End Pleno",
		technologies: ["React", "TypeScript", "Web3", "MetaMask", "Framer Motion", "PWA"],
		highlights: [
			"Integração MetaMask",
			"Dashboard em tempo real",
			"PWA com funcionalidades offline"
		],
		challenges: [
			"Web3 seguro e intuitivo",
			"Interface para usuários não-técnicos",
			"PWA com cache inteligente"
		],
		results: [
			"Redução de 40% no carregamento",
			"1000+ usuários ativos"
		]
	},
	{
		id: "pmd-system",
		title: "Sistema PMD - Planejamento e Monitoramento",
		description: "Dashboard para gestão de projetos integrado ao SharePoint",
		company: "UOL",
		companyId: "uol",
		period: "Ago 2022 - Out 2023",
		role: "Desenvolvedor Front-End Sênior",
		technologies: ["React", "TypeScript", "SharePoint", "Microsoft Graph", "Chart.js"],
		highlights: [
			"Dashboard com gráficos em tempo real",
			"Design system adotado por 12+ squads",
			"Migração de sistema legado"
		],
		challenges: [
			"Migração sem interrupção",
			"Integração eficiente com SharePoint",
			"Design system escalável"
		],
		results: [
			"Redução de 60% no carregamento",
			"Adoção por 12+ squads",
			"Melhoria de 45% na performance"
		]
	},
	{
		id: "autopilot-saas",
		title: "AutoPilot™ - SaaS de Automação",
		description: "Reconstrução do SaaS de automação de marketing",
		company: "AdSeleto",
		companyId: "adseleto",
		period: "Nov 2024 - Mai 2025",
		role: "Desenvolvedor Front-End Sênior",
		technologies: ["Next.js 15", "TypeScript", "Keycloak", "Tailwind CSS", "Radix UI"],
		highlights: [
			"Reescrita com Next.js 15",
			"SSO com Keycloak",
			"Acessibilidade WCAG 2.1"
		],
		challenges: [
			"Migração para Next.js 15",
			"Autenticação segura",
			"Componentes acessíveis"
		],
		results: [
			"Melhoria de 70% na performance",
			"Arquitetura escalável"
		]
	},
	{
		id: "conecta-platform",
		title: "Plataforma Conecta",
		description: "Plataforma principal para gestão de projetos sociais",
		company: "Incentiv",
		companyId: "incentiv",
		period: "Set 2023 - Atualmente",
		role: "Tech Lead Front-End",
		technologies: ["React", "TypeScript", "Design System", "Storybook", "Jest"],
		highlights: [
			"Liderança de equipe de 4 desenvolvedores",
			"Design system em 8+ aplicações",
			"Boilerplates e ferramentas CLI"
		],
		challenges: [
			"Migração de componentes legados",
			"Design system escalável",
			"Processos de qualidade"
		],
		results: [
			"Redução de 60% no tempo de desenvolvimento",
			"Melhoria de 40% no setup"
		]
	},
	{
		id: "incentiv-design-system",
		title: "Design System Incentiv",
		description: "Biblioteca de componentes publicada no GitHub Packages para padronização em todos os produtos",
		company: "Incentiv",
		companyId: "incentiv",
		period: "Set 2023 - Atualmente",
		role: "Tech Lead Front-End",
		technologies: ["React", "TypeScript", "Storybook", "GitHub Packages", "NPM", "Jest", "Testing Library"],
		highlights: [
			"Pacote NPM no GitHub Packages",
			"Integração em 8+ aplicações",
			"Documentação com Storybook"
		],
		challenges: [
			"Publicação no GitHub Packages",
			"Compatibilidade entre versões",
			"Retrocompatibilidade"
		],
		results: [
			"Redução de 60% no tempo de desenvolvimento",
			"Padronização em todo o ecossistema"
		]
	},
	{
		id: "pipeline-receptivo",
		title: "Pipeline Receptivo",
		description: "Sistema de funil para grandes empresas com landing pages personalizadas e painel gerencial",
		company: "Incentiv",
		companyId: "incentiv",
		period: "Set 2023 - Atualmente",
		role: "Tech Lead Front-End",
		technologies: ["React", "TypeScript", "Next.js", "Design System", "Tailwind CSS", "APIs REST"],
		highlights: [
			"Landing pages personalizadas",
			"Painel gerencial integrado",
			"Jornadas personalizadas"
		],
		challenges: [
			"Sistema flexível para múltiplas empresas",
			"Personalização por cliente",
			"Performance otimizada"
		],
		results: [
			"Parcerias com grandes empresas",
			"Sistema escalável"
		]
	}
];

export const getProjectById = (id: string): Project | undefined => {
	return projects.find(project => project.id === id);
};

export const getProjectsByCompany = (companyId: string): Project[] => {
	return projects.filter(project => project.companyId === companyId);
};
