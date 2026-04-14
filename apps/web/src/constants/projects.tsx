export interface Project {
	id: string;
	title: string;
	description: string;
	context: string[];
	company?: string;
	companyId?: string;
	period?: string;
	role?: string;
	technologies: string[];
	highlights?: string[];
	challenges?: string[];
	architecturalDecisions?: string[];
	performance?: string[];
	results?: string[];
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
		title: "Kderno — Plataforma de Conteúdo Dinâmico",
		description:
			"Plataforma completa de criação e visualização de conteúdo, com editor baseado em blocos dinâmicos e renderização em tempo real, focada em flexibilidade, performance e SEO.",
		context: [
			"O Kderno foi desenvolvido como uma plataforma educacional para criação e consumo de conteúdo, permitindo a construção de páginas dinâmicas com diferentes formatos.",
			"O sistema precisava oferecer flexibilidade na composição de conteúdo, mantendo performance, organização e suporte a SEO."
		],
		company: "Clipping CACD",
		companyId: "clipping-cacd",
		period: "2020 - 2022",
		role: "Desenvolvedor Front-End Pleno",
		technologies: ["React", "Markdown", "CSS Modules"],
		challenges: [
			"Construir um editor com suporte a blocos dinâmicos",
			"Implementar preview em tempo real com markdown",
			"Garantir flexibilidade na composição de páginas",
			"Manter performance na renderização de conteúdo",
			"Estruturar o sistema para suportar crescimento da plataforma"
		],
		architecturalDecisions: [
			"Uso de markdown como base para estrutura de conteúdo",
			"Implementação de editor WYSIWYG com blocos customizáveis",
			"Renderização em tempo real para feedback imediato",
			"Separação entre edição e visualização de conteúdo",
			"Estruturação de páginas com foco em SEO"
		],
		performance: [
			"Desenvolvi o sistema completo de criação e visualização de conteúdo",
			"Implementei o editor com suporte a blocos dinâmicos",
			"Estruturei a renderização em tempo real com markdown",
			"Contribuí para arquitetura inicial da plataforma",
			"Apoiei a evolução do produto ao longo do tempo"
		],
		highlights: [
			"Editor WYSIWYG com blocos dinâmicos",
			"Preview em tempo real durante edição",
			"Criação e organização de páginas de conteúdo",
			"Suporte a markdown com renderização flexível",
			"Estrutura otimizada para SEO"
		],
		results: [
			"Criação de base sólida para plataforma educacional",
			"Flexibilidade na produção de conteúdo",
			"Melhoria na experiência de edição",
			"Estrutura preparada para crescimento do produto",
			"Suporte a conteúdo dinâmico com boa performance"
		]
	},
	{
		id: "mentora-platform",
		title: "Plataforma de Campeonatos (mentora.gg)",
		description:
			"Plataforma de e-sports com integração Web3, envolvendo autenticação via carteira, gestão de saldo e fluxos transacionais em tempo real.",
		context: [
			"A mentora.gg foi criada como uma plataforma de campeonatos digitais com uso de criptomoedas, onde usuários participam de competições envolvendo saldo, transações e regras específicas por torneio.",
			"O frontend precisava lidar com integração blockchain, controle de estado financeiro e experiência em tempo real."
		],
		company: "Mentora",
		companyId: "mentora",
		period: "Abr 2022 - Set 2022",
		role: "Desenvolvedor Front-End Pleno",
		technologies: [
			"React",
			"TypeScript",
			"Next.js",
			"Web3",
			"MetaMask",
			"Framer Motion"
		],
		challenges: [
			"Gerenciar estado de saldo e transações dentro da aplicação",
			"Integrar autenticação via carteira (MetaMask)",
			"Lidar com assinaturas e interações com blockchain",
			"Garantir consistência entre frontend e estado on-chain",
			"Estruturar aplicação com baixo acoplamento para evolução do produto"
		],
		architecturalDecisions: [
			"Uso de Next.js e TypeScript para estruturação do frontend",
			"Integração com MetaMask para autenticação via wallet",
			"Organização do estado para controle de saldo e transações",
			"Separação de responsabilidades para reduzir acoplamento",
			"Estrutura pensada para evolução contínua do produto"
		],
		performance: [
			"Desenvolvi o frontend do MVP do zero com foco em organização e escalabilidade",
			"Implementei autenticação via carteira (MetaMask)",
			"Modelei fluxos de saldo e transações dentro da aplicação",
			"Estruturei a arquitetura com foco em baixo acoplamento",
			"Apoiei a evolução do produto desde as primeiras versões"
		],
		highlights: [
			"Participação em campeonatos de e-sports",
			"Autenticação via carteira Web3",
			"Gestão de saldo dentro da plataforma",
			"Fluxos de entrada e saída em competições",
			"Interface com atualizações em tempo real"
		],
		results: [
			"Estruturação inicial do produto com base escalável",
			"Integração funcional entre frontend e blockchain",
			"Organização de fluxos complexos de saldo e transação",
			"Base preparada para evolução de funcionalidades Web3",
			"Experiência consistente para usuários em ambiente dinâmico"
		]
	},
	{
		id: "cvv-system",
		title: "Sistema Controle de Vagas e Verbas (CVV)",
		description:
			"Sistema interno para gestão de vagas e orçamento (CVV), desenvolvido em ambiente corporativo restrito (SharePoint), com foco em controle de processos críticos de RH e evolução sob limitações técnicas.",
		context: [
			"Sistema interno da UOL utilizado pelo RH para gestão de vagas, controle de orçamento e acompanhamento de processos internos.",
			"A aplicação rodava dentro do SharePoint corporativo, com acesso restrito via intranet, exigindo adaptações técnicas para funcionar dentro das limitações da plataforma."
		],
		company: "UOL",
		companyId: "uol",
		period: "Ago 2022 - Out 2023",
		role: "Desenvolvedor Front-End Sênior",
		technologies: ["React", "TypeScript", "CSS Modules"],
		challenges: [
			"Desenvolver uma aplicação React dentro das limitações do SharePoint",
			"Trabalhar com versões mais antigas de bibliotecas e ferramentas",
			"Garantir estabilidade em um ambiente corporativo restrito",
			"Lidar com regras de negócio críticas relacionadas a orçamento e vagas",
			"Evoluir o sistema mesmo com limitações de stack e infraestrutura"
		],
		architecturalDecisions: [
			"Adaptação do uso de React para compatibilidade com SharePoint",
			"Organização do código para facilitar manutenção em ambiente limitado",
			"Estruturação de componentes reutilizáveis dentro das restrições existentes",
			"Padronização de interfaces para garantir consistência",
			"Otimizações focadas em estabilidade e previsibilidade"
		],
		performance: [
			"Desenvolvi e evoluí o frontend do sistema interno de RH",
			"Atuei na adaptação da aplicação para o ambiente SharePoint",
			"Trabalhei com regras de negócio críticas relacionadas a orçamento e vagas",
			"Contribuí para organização e manutenção do código em ambiente legado",
			"Apoiei a evolução do sistema respeitando restrições técnicas existentes"
		],
		highlights: [
			"Gestão de vagas com múltiplos estados e fluxos",
			"Controle de orçamento vinculado a processos de contratação",
			"Interface para acompanhamento e tomada de decisão",
			"Integração com ambiente corporativo (SharePoint)",
			"Sistema interno com acesso restrito via intranet"
		],
		results: [
			"Evolução de sistema crítico sem ruptura de operação",
			"Melhoria na organização e usabilidade da aplicação",
			"Aumento da previsibilidade na manutenção do sistema",
			"Adaptação bem-sucedida de frontend moderno em ambiente legado",
			"Suporte a processos internos essenciais da empresa"
		]
	},
	{
		id: "hub-adseleto",
		title: "HUB AdSeleto — Plataforma de Automação",
		description:
			"Reestruturação do frontend do core do produto para centralizar múltiplas soluções em um único hub, com foco em padronização, escalabilidade e evolução contínua da arquitetura.",
		context: [
			"O produto possuía diferentes soluções com pouca padronização e dificuldade de evolução, o que gerava inconsistências e aumento de complexidade ao longo do tempo.",
			"A proposta do HUB foi centralizar essas soluções em uma única aplicação, criando uma base consistente para crescimento e integração de novos módulos."
		],
		company: "AdSeleto",
		companyId: "adseleto",
		period: "Nov 2024 - Mai 2025",
		role: "Desenvolvedor Front-End Sênior",
		technologies: [
			"Next.js 15",
			"TypeScript",
			"Keycloak",
			"Chart.js",
			"Tailwind CSS",
			"Framer Motion",
			"Radix UI"
		],
		challenges: [
			"Reestruturar o frontend sem interromper a evolução do produto",
			"Padronizar arquitetura entre diferentes módulos",
			"Garantir consistência entre funcionalidades previamente isoladas",
			"Integrar autenticação de forma centralizada",
			"Reduzir complexidade acumulada na base existente"
		],
		architecturalDecisions: [
			"Adoção de Next.js 15 com App Router para nova base do produto",
			"Estruturação de arquitetura modular para integração de soluções",
			"Centralização da autenticação utilizando Keycloak",
			"Uso de padrões de componentes para garantir consistência",
			"Organização do código para facilitar manutenção e evolução"
		],
		performance: [
			"Atuei na reconstrução do frontend do core do produto",
			"Estruturei a base para suportar integração de múltiplas soluções",
			"Implementei autenticação centralizada com Keycloak",
			"Contribuí para padronização da arquitetura e componentes",
			"Apoiei a evolução da qualidade técnica e organização do projeto"
		],
		highlights: [
			"Hub central para acesso a diferentes soluções do produto",
			"Autenticação unificada entre módulos",
			"Estrutura preparada para expansão de novas funcionalidades",
			"Interface consistente entre diferentes áreas do sistema",
			"Base compartilhada entre múltiplos fluxos do produto"
		],
		results: [
			"Redução de inconsistências entre módulos do produto",
			"Base preparada para crescimento e integração de novas soluções",
			"Melhoria na organização e manutenção do código",
			"Evolução mais previsível do frontend",
			"Aumento da consistência na experiência entre funcionalidades"
		]
	},
	{
		id: "conecta-platform",
		title: "Plataforma Conecta",
		description:
			"Sistema multi-tenant que conecta proponentes e patrocinadores, com fluxos complexos de submissão de projetos, múltiplos estados e regras de negócio sensíveis ao longo do processo",
		context: [
			"A plataforma centraliza a relação entre proponentes e patrocinadores, com jornadas longas e dependentes de estado, incluindo submissão de projetos, envio de documentos e validações ao longo do processo.",
			"Cada cliente possui particularidades no fluxo e nas regras de negócio, exigindo flexibilidade sem comprometer a consistência da aplicação."
		],
		company: "Incentiv",
		companyId: "incentiv",
		period: "Set 2023 - Atualmente",
		role: "Tech Lead Front-End",
		technologies: ["React", "TypeScript", "Design System", "Zormy", "Jest"],
		challenges: [
			"Estruturar frontend para suportar múltiplos fluxos dependentes de estado",
			"Lidar com regras de negócio sensíveis distribuídas ao longo da jornada",
			"Garantir consistência da interface em diferentes cenários e perfis de usuário",
			"Permitir variações de comportamento (multi-tenant) sem duplicação de código",
			"Evoluir o sistema reduzindo complexidade acumulada"
		],
		architecturalDecisions: [
			"Adoção de design system para padronização entre aplicações",
			"Estruturação de componentes reutilizáveis para reduzir inconsistência",
			"Separação de responsabilidades para lidar com fluxos complexos",
			"Organização da base para facilitar evolução e manutenção",
			"Padronização de comportamento entre diferentes produtos"
		],
		performance: [
			"Liderei tecnicamente o frontend da principal plataforma do produto",
			"Estruturei a base da aplicação para suportar crescimento e novos cenários",
			"Atuei na redução de complexidade em fluxos críticos",
			"Migrei componentes legados para uma arquitetura mais consistente",
			"Apoiei a evolução da qualidade técnica e padronização do time"
		],
		highlights: [
			"Fluxo completo de submissão de projetos com múltiplas etapas e estados",
			"Upload e gestão de documentos ao longo da jornada",
			"Diferentes experiências para proponentes e patrocinadores",
			"Validações dinâmicas baseadas em regras de negócio",
			"Adaptação de comportamento conforme contexto (multi-tenant)"
		],
		results: [
			"Redução de inconsistências na interface entre diferentes aplicações",
			"Maior previsibilidade na evolução de funcionalidades complexas",
			"Facilidade na reutilização de componentes e fluxos",
			"Melhoria na organização e manutenção da base de código",
			"Aumento da consistência entre diferentes produtos do ecossistema"
		],
		links: {
			live: "http://app.incentiv.live/"
		}
	},
	{
		id: "incentiv-design-system",
		title: "Design System Incentiv",
		description:
			"Biblioteca de componentes e design system estruturado para padronizar múltiplas aplicações, permitindo consistência visual e escalabilidade no desenvolvimento frontend",
		context: [
			"Com múltiplas aplicações em desenvolvimento, havia inconsistência na interface, duplicação de código e dificuldade de manter padrões visuais e comportamentais entre os produtos.",
			"Era necessário centralizar decisões de UI e criar uma base reutilizável para evolução consistent"
		],
		company: "Incentiv",
		companyId: "incentiv",
		period: "Set 2023 - Atualmente",
		role: "Tech Lead Front-End",
		technologies: [
			"React",
			"TypeScript",
			"Storybook",
			"GitHub Packages",
			"NPM",
			"Jest",
			"Testing Library"
		],
		challenges: [
			"Garantir consistência entre aplicações com diferentes contextos",
			"Permitir evolução do design system sem quebrar aplicações existentes",
			"Estruturar componentes reutilizáveis sem acoplamento excessivo",
			"Definir padrões que funcionassem para múltiplos produtos",
			"Manter equilíbrio entre flexibilidade e padronização"
		],
		architecturalDecisions: [
			"Estruturação de design system com separação clara de responsabilidades",
			"Publicação como pacote privado para compartilhamento entre aplicações",
			"Documentação com Storybook para padronização de uso",
			"Criação de componentes reutilizáveis com foco em composição",
			"Definição de padrões visuais e comportamentais consistentes"
		],
		performance: [
			"Estruturei e evoluí o design system utilizado nas aplicações",
			"Atuei na padronização da interface entre diferentes produtos",
			"Reduzi duplicação de código e inconsistências visuais",
			"Apoiei a adoção do design system pelas equipes",
			"Contribuí para melhoria da organização e manutenção do frontend"
		],
		highlights: [
			"Biblioteca de componentes reutilizáveis",
			"Publicação como pacote interno para múltiplas aplicações",
			"Documentação interativa com Storybook",
			"Padrões de UI compartilhados entre produtos",
			"Base para construção consistente de interfaces"
		],
		results: [
			"Redução de inconsistências entre aplicações",
			"Maior previsibilidade na construção de interfaces",
			"Facilidade na reutilização de componentes",
			"Aumento da consistência visual e comportamental",
			"Base sólida para evolução do frontend em escala"
		],
		links: {
			live: "https://incentiv-me.github.io/ui-kit"
		}
	},
	{
		id: "pipeline-receptivo",
		title: "Pipeline Receptivo",
		description:
			"Sistema white-label para criação de aplicações personalizadas por cliente, com adaptação de branding, comportamento e fluxos, mantendo uma base compartilhada e escalável.",
		context: [
			"A plataforma permite criar aplicações personalizadas para diferentes empresas a partir de uma única base de código, com variações de identidade visual, comportamento e regras específicas por cliente.",
			"Era necessário garantir flexibilidade para customização sem comprometer a consistência e a manutenção do sistema."
		],
		company: "Incentiv",
		companyId: "incentiv",
		period: "Set 2023 - Atualmente",
		role: "Tech Lead Front-End",
		technologies: [
			"React",
			"TypeScript",
			"Next.js",
			"Design System",
			"Tailwind CSS",
			"APIs REST"
		],
		challenges: [
			"Suportar múltiplos clientes com diferentes necessidades a partir da mesma base",
			"Implementar variações de branding e comportamento sem duplicação de código",
			"Garantir consistência entre aplicações personalizadas",
			"Estruturar o sistema para facilitar evolução e onboarding de novos clientes",
			"Equilibrar flexibilidade e padronização em um ambiente multi-tenant"
		],
		architecturalDecisions: [
			"Uso de design system para adaptação de identidade visual por cliente",
			"Estruturação de código reutilizável para múltiplas aplicações",
			"Separação de configuração e lógica para permitir customização",
			"Organização da base para facilitar criação de novas instâncias",
			"Padronização de comportamento entre diferentes cenários"
		],
		performance: [
			"Estruturei o frontend para suportar múltiplos clientes com customização",
			"Atuei na definição de padrões para reutilização de código",
			"Implementei variações de branding utilizando design system",
			"Contribuí para redução de duplicação e inconsistência entre aplicações",
			"Apoiei a evolução da arquitetura para crescimento em escala"
		],
		highlights: [
			"Landing pages personalizadas por cliente",
			"Painel gerencial com comportamento adaptável",
			"Configuração dinâmica de branding (cores, identidade visual)",
			"Jornadas customizadas conforme regras do cliente",
			"Base compartilhada com variações por contexto"
		],
		results: [
			"Redução de duplicação de código entre projetos",
			"Maior velocidade na criação de novas aplicações",
			"Consistência entre diferentes produtos personalizados",
			"Facilidade na manutenção e evolução da base",
			"Escalabilidade na entrega para múltiplos clientes"
		]
	},
	{
		id: "auth-incentiv-package",
		title: "Biblioteca de Autenticação (NextAuth + Keycloak)",
		description:
			"Biblioteca interna para padronização de autenticação em aplicações Next.js, abstraindo a integração com NextAuth e Keycloak e permitindo reutilização com configuração mínima.",
		context: [
			"Múltiplas aplicações utilizavam autenticação baseada em Keycloak, resultando em duplicação de código e inconsistências na implementação entre projetos.",
			"Era necessário centralizar essa lógica e criar uma forma padronizada de integrar autenticação em aplicações Next.js."
		],
		company: "Incentiv",
		companyId: "incentiv",
		period: "Set 2023 - Atualmente",
		role: "Tech Lead Front-End",
		technologies: ["Next.js", "NextAuth", "Keycloak", "TypeScript"],
		challenges: [
			"Abstrair a integração entre NextAuth e Keycloak",
			"Reduzir boilerplate na configuração de autenticação",
			"Garantir consistência entre diferentes aplicações",
			"Permitir flexibilidade para cenários específicos",
			"Manter a solução simples de integrar e evoluir"
		],
		architecturalDecisions: [
			"Criação de package privado reutilizável",
			"Encapsulamento da lógica de autenticação",
			"Interface simplificada para integração em aplicações Next.js",
			"Separação entre configuração e implementação",
			"Estrutura orientada à reutilização entre projetos"
		],
		performance: [
			"Desenvolvi a biblioteca interna de autenticação",
			"Implementei integração com NextAuth e Keycloak",
			"Estruturei abstrações para reutilização entre aplicações",
			"Reduzi a complexidade de setup em novos projetos",
			"Apoiei a padronização da autenticação no ecossistema"
		],
		highlights: [
			"Integração simplificada com Keycloak",
			"Configuração mínima para autenticação em Next.js",
			"Reutilização de lógica entre múltiplas aplicações",
			"Padronização de sessão e fluxo de login",
			"Base extensível para diferentes cenários"
		],
		results: [
			"Redução de duplicação de código entre aplicações",
			"Aceleração no setup de novos projetos",
			"Consistência na autenticação do ecossistema",
			"Melhoria na experiência do desenvolvedor (DX)",
			"Base reutilizável para múltiplos sistemas"
		]
	},
	{
		id: "zormy",
		title: "Zormy",
		description:
			"Biblioteca open source para criação de formulários tipados em React, com foco em redução de complexidade, reutilização de regras e melhoria da experiência de desenvolvimento.",
		context: [
			"Formulários complexos em aplicações frontend tendem a gerar alta duplicação de lógica, dificuldade de validação e inconsistência na tipagem.",
			"Era necessário criar uma solução que centralizasse regras de validação, reduzisse boilerplate e melhorasse a previsibilidade na construção de formulários."
		],
		technologies: ["React", "TypeScript", "React Hook Form", "Zod", "NPM"],
		challenges: [
			"Reduzir complexidade na construção de formulários complexos",
			"Garantir tipagem forte e consistente com TypeScript",
			"Integrar validação de forma previsível e reutilizável",
			"Evitar duplicação de lógica entre diferentes formulários",
			"Manter flexibilidade sem comprometer a simplicidade de uso"
		],
		architecturalDecisions: [
			"Uso de React Hook Form como base de gerenciamento de estado",
			"Integração com Zod para validação tipada",
			"Criação de abstrações para centralizar regras de formulário",
			"Estrutura orientada à reutilização e composição",
			"API pensada para reduzir boilerplate e melhorar DX"
		],
		highlights: [
			"Criação de formulários com tipagem forte",
			"Validação integrada com Zod",
			"Reutilização de regras entre formulários",
			"Redução de boilerplate na configuração",
			"API orientada à composição"
		],
		results: [
			"Redução de complexidade na construção de formulários",
			"Maior previsibilidade no comportamento e validação",
			"Diminuição de duplicação de lógica",
			"Melhoria significativa na experiência de desenvolvimento",
			"Base reutilizável para diferentes aplicações"
		],
		links: {
			live: "https://zormy-docs.vercel.app",
			github: "https://github.com/renanzan/zormy"
		}
	}
];

export const getProjectById = (id: string): Project | undefined => {
	return projects.find((project) => project.id === id);
};

export const getProjectsByCompany = (companyId: string): Project[] => {
	return projects.filter((project) => project.companyId === companyId);
};
