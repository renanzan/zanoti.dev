export interface Company {
	id: string;
	name: string;
	description: string;
	website?: string;
	linkedin?: string;
	period: string;
	role: string;
	industry: string;
	projects: string[];
	technologies: string[];
	productContext: string;
	technicalChallenge: string;
	achievements: string[];
}

export const companies: Company[] = [
	{
		id: "incentiv",
		name: "Incentiv",
		description:
			"Empresa de tecnologia social focada na conexão entre empresas e projetos incentivados, com sistemas que envolvem múltiplos atores, regras de negócio complexas e alto impacto operacional.",
		website: "https://incentiv.com.br",
		linkedin: "https://www.linkedin.com/company/incentiv-me",
		period: "Set 2023 - Atualmente",
		role: "Tech Lead Front-End",
		industry: "Tecnologia Social",
		projects: [
			"conecta-platform",
			"incentiv-design-system",
			"pipeline-receptivo"
		],
		technologies: [
			"React",
			"Next.js",
			"TypeScript",
			"React Query",
			"Keycloak",
			"Design System",
			"Monorepo",
			"Storybook",
			"Tailwind CSS",
			"Jest",
			"Testing Library"
		],
		productContext:
			"Plataforma voltada à gestão de projetos incentivados, conectando empresas (patrocinadores) e organizações (proponentes) em fluxos que envolvem múltiplos atores, etapas longas e regras de negócio sensíveis.",
		technicalChallenge:
			"Estruturar o frontend para suportar múltiplos produtos e variações de comportamento (multi-tenant), garantindo consistência, baixo acoplamento e capacidade de evolução sem aumento descontrolado de complexidade.",
		achievements: [
			"Estruturei a arquitetura frontend de múltiplos produtos com foco em escalabilidade e evolução contínua",
			"Implementei e evoluí design system com publicação de pacotes e documentação com Storybook",
			"Organizei a base em monorepo, aumentando reutilização de código entre aplicações",
			"Atuei na redução de complexidade em fluxos críticos (formulários, submissões e integrações)",
			"Liderei decisões técnicas e revisão de código com foco em qualidade e consistência"
		]
	},
	{
		id: "adseleto",
		name: "AdSeleto",
		description:
			"SaaS de automação de marketing voltado à otimização de monetização e gestão de campanhas, com foco em performance e escalabilidade.",
		website: "https://adseleto.com",
		linkedin: "https://www.linkedin.com/company/adseleto",
		period: "Nov 2024 - Mai 2025",
		role: "Desenvolvedor Front-End Sênior",
		industry: "Marketing Technology",
		projects: ["autopilot-saas"],
		technologies: [
			"Next.js",
			"TypeScript",
			"Keycloak",
			"Chart.js",
			"Tailwind CSS",
			"Radix UI",
			"Jest",
			"Testing Library"
		],
		productContext:
			"Plataforma SaaS estruturada como hub para centralizar diferentes soluções da AdSeleto, com múltiplos módulos e necessidade de consistência entre funcionalidades e integrações externas.",
		technicalChallenge:
			"Reestruturar o frontend do core do produto, preparando a base para suportar crescimento em múltiplos módulos, com consistência entre partes do sistema e facilidade de evolução.",
		achievements: [
			"Reestruturei o frontend do produto, organizando a base para maior previsibilidade e manutenção",
			"Defini padrões de desenvolvimento e organização de código para reduzir inconsistência entre módulos",
			"Estruturei design system com publicação de pacotes e documentação para padronização da interfac",
			"Implementei autenticação centralizada com Keycloak, permitindo integração consistente entre aplicações",
			"Atuei na melhoria da qualidade geral do código e da experiência de desenvolvimento"
		]
	},
	{
		id: "uol",
		name: "UOL - Universo Online",
		description:
			"Uma das maiores empresas de tecnologia do Brasil, com sistemas internos críticos e ambiente corporativo com forte legado e restrições técnicas.",
		website: "https://uol.com.br",
		linkedin: "https://www.linkedin.com/company/uol",
		period: "Ago 2022 - Out 2023",
		role: "Desenvolvedor Front-End Sênior",
		industry: "Internet & Tecnologia",
		projects: ["cvv-system"],
		technologies: ["React", "TypeScript", "SharePoint", "CSS Modules"],
		productContext:
			"Sistema interno de RH para gestão de vagas, orçamento e alocação de recursos, utilizado em ambiente corporativo com múltiplos estados e regras de negócio.",
		technicalChallenge:
			"Atuar em um ambiente baseado em SharePoint, com restrições técnicas que limitavam o uso de versões modernas de React e bibliotecas, exigindo adaptação constante e decisões pragmáticas.",
		achievements: [
			"Atuei na evolução de um sistema corporativo com forte legado e restrições técnicas",
			"Estruturei componentes reutilizáveis para reduzir inconsistência na interface",
			"Contribuí para padronização de código e melhoria da organização do frontend",
			"Trabalhei na simplificação de fluxos complexos com múltiplos estados",
			"Adaptei soluções modernas ao contexto limitado do SharePoint"
		]
	},
	{
		id: "mentora",
		name: "Mentora",
		description:
			"Startup de e-sports com integração Web3, focada em plataformas de competição com uso de criptomoedas e lógica de saldo e transações.",
		productContext:
			"Plataforma de competições em e-sports com uso de criptomoedas, envolvendo autenticação via carteira, gestão de saldo e interação com lógica baseada em blockchain.",
		technicalChallenge:
			"Estruturar o frontend para lidar com estado sensível (saldo e transações), garantindo consistência da interface mesmo com eventos assíncronos e integrações externas (wallets e Web3).",
		website: "https://mentora.gg",
		linkedin: "https://www.linkedin.com/company/mentora-gg",
		period: "Abr 2022 - Set 2022",
		role: "Desenvolvedor Front-End Pleno",
		industry: "E-sports & Web3",
		projects: ["mentora-platform"],
		technologies: ["React", "TypeScript", "Web3", "MetaMask", "Framer Motion"],
		achievements: [
			"Desenvolvi o frontend do zero para uma aplicação com lógica de saldo e transações",
			"Estruturei o gerenciamento de estado considerando eventos assíncronos e consistência de dados",
			"Implementei autenticação via carteira com MetaMask",
			"Modelei a aplicação com foco em baixo acoplamento e evolução do produto",
			"Trabalhei na organização de fluxos envolvendo competição, saldo e interação com Web3"
		]
	},
	{
		id: "clipping-cacd",
		name: "Clipping CACD",
		description:
			"Empresa focada em educação digital, desenvolvendo plataformas para criação e distribuição de conteúdo estruturado e dinâmico.",
		productContext:
			"Plataforma para criação e visualização de conteúdo educacional dinâmico, permitindo construção de páginas flexíveis com diferentes tipos de bloco (texto, mídia, questões e componentes interativos).",
		technicalChallenge:
			"Implementar interfaces altamente dinâmicas com edição em tempo real, controle de estado complexo e necessidade de renderização consistente, incluindo suporte a SEO e diferentes formas de exibição do conteúdo.",
		website: "https://clippingcacd.com.br",
		linkedin: "https://www.linkedin.com/school/clipping-concurso",
		period: "Mai 2019 - Jul 2022",
		role: "Desenvolvedor Front-End Júnior → Pleno",
		industry: "Educação & Tecnologia",
		projects: ["kderno"],
		technologies: [
			"React",
			"TypeScript",
			"Editor rico customizado",
			"Markdown",
			"CSS Modules"
		],
		achievements: [
			"Desenvolvi um sistema completo de criação e visualização de conteúdo dinâmico",
			"Implementei editor rico baseado em blocos com suporte a markdown em tempo real",
			"Estruturei lógica de composição de conteúdo com diferentes tipos de bloco",
			"Trabalhei na renderização de páginas com foco em performance e SEO",
			"Evoluí de desenvolvedor júnior para pleno assumindo responsabilidade crescente sobre o frontend"
		]
	}
];

export const getCompanyById = (id: string): Company | undefined => {
	return companies.find((company) => company.id === id);
};
