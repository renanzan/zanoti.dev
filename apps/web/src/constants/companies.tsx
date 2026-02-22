export interface Company {
	id: string;
	name: string;
	description: string;
	website?: string;
	period: string;
	role: string;
	location: string;
	industry: string;
	projects: string[];
	technologies: string[];
	achievements: string[];
	teamSize?: string;
}

export const companies: Company[] = [
	{
		id: "incentiv",
		name: "Incentiv",
		description:
			"Empresa de tecnologia social que desenvolve soluções para conectar pessoas e causas, com foco em impacto social.",
		website: "https://incentiv.com.br",
		period: "Set 2023 - Atualmente",
		role: "Tech Lead Front-End",
		location: "São Paulo, SP",
		industry: "Tecnologia Social",
		projects: [
			"conecta-platform",
			"incentiv-design-system",
			"pipeline-receptivo"
		],
		technologies: [
			"React",
			"TypeScript",
			"Next.js",
			"Design System",
			"Storybook",
			"Jest",
			"Tailwind CSS"
		],
		achievements: [
			"Liderança de equipe de 4 desenvolvedores",
			"Design system em 8+ aplicações",
			"Boilerplates e ferramentas CLI",
			"Processos de qualidade e testes"
		],
		teamSize: "4 desenvolvedores front-end"
	},
	{
		id: "adseleto",
		name: "AdSeleto",
		description:
			"SaaS de automação de marketing que oferece soluções para otimização de campanhas e processos de marketing.",
		website: "https://adseleto.com",
		period: "Nov 2024 - Mai 2025",
		role: "Desenvolvedor Front-End Sênior",
		location: "São Paulo, SP",
		industry: "Marketing Technology",
		projects: ["autopilot-saas"],
		technologies: [
			"Next.js 15",
			"TypeScript",
			"Keycloak",
			"Tailwind CSS",
			"Radix UI",
			"Jest",
			"Testing Library"
		],
		achievements: [
			"Reconstrução do SaaS AutoPilot™",
			"Migração para Next.js 15",
			"SSO com Keycloak",
			"Acessibilidade WCAG 2.1"
		]
	},
	{
		id: "uol",
		name: "UOL - Universo Online",
		description:
			"Uma das maiores empresas de internet do Brasil, oferecendo serviços de conteúdo, comunicação e tecnologia.",
		website: "https://uol.com.br",
		period: "Ago 2022 - Out 2023",
		role: "Desenvolvedor Front-End Sênior",
		location: "São Paulo, SP",
		industry: "Internet & Tecnologia",
		projects: ["pmd-system"],
		technologies: [
			"React",
			"TypeScript",
			"SharePoint",
			"Microsoft Graph",
			"Chart.js",
			"CSS Modules"
		],
		achievements: [
			"Sistema PMD para gestão de projetos",
			"Design system adotado por 12+ squads",
			"Migração ASP.NET para React",
			"Redução de 60% no carregamento"
		],
		teamSize: "Squad de 6 desenvolvedores"
	},
	{
		id: "mentora",
		name: "Mentora",
		description:
			"Startup de e-sports e Web3, desenvolvendo plataformas para campeonatos digitais com integração blockchain.",
		website: "https://mentora.gg",
		period: "Abr 2022 - Set 2022",
		role: "Desenvolvedor Front-End Pleno",
		location: "São Paulo, SP",
		industry: "E-sports & Web3",
		projects: ["mentora-platform"],
		technologies: [
			"React",
			"TypeScript",
			"Web3",
			"MetaMask",
			"Framer Motion",
			"PWA",
			"Ethereum"
		],
		achievements: [
			"Plataforma de campeonatos digitais",
			"Integração MetaMask e Web3",
			"PWA com funcionalidades offline"
		],
		teamSize: "Equipe de 3 desenvolvedores"
	},
	{
		id: "clipping-cacd",
		name: "Clipping CACD",
		description:
			"Empresa especializada em educação e preparação para concursos públicos, desenvolvendo plataformas educacionais.",
		website: "https://clippingcacd.com.br",
		period: "Mai 2019 - Jul 2022",
		role: "Desenvolvedor Front-End Júnior → Pleno",
		location: "São Paulo, SP",
		industry: "Educação & Tecnologia",
		projects: ["kderno"],
		technologies: [
			"React",
			"TypeScript",
			"Monaco Editor",
			"Markdown",
			"CSS Modules",
			"Node.js"
		],
		achievements: [
			"Editor markdown WYSIWYG Kderno",
			"Sistema de exercícios interativos",
			"Evolução de júnior para pleno"
		],
		teamSize: "Equipe de 5 desenvolvedores"
	}
];

export const getCompanyById = (id: string): Company | undefined => {
	return companies.find((company) => company.id === id);
};
