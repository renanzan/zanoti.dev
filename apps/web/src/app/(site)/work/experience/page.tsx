import ContentPage from "@/components/ContentPage";
import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { Link } from "@/components/content/Link";
import { generateMetadata } from "@/helpers/seo";

export const metadata = generateMetadata({
	title: "Experiência",
	description:
		"Experiência profissional de Renan Zanoti: 5+ anos como Desenvolvedor Front-End em empresas como UOL, Incentiv, Mentora e outras. Especialista em migração de sistemas legados.",
	path: "/work/experience"
});

const frontMatter = {
	title: "Experiência",
	description:
		"Trajetória profissional como Desenvolvedor Front-End: de júnior a sênior especializado em migração de sistemas legados.",
	caption: "Profissional"
};

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<p>
			<strong>5+ anos</strong> de experiência em desenvolvimento front-end.
			Evolução de desenvolvedor júnior para <strong>sênior</strong>,
			especializado em migração de sistemas legados e liderança de equipes.
		</p>

		<Hr />

		<H2>Trabalho profissional</H2>

		<H3>
			<Link href="/companies/incentiv">Incentiv</Link>
		</H3>

		<p>
			<strong>Tech Lead Front-End</strong> (set 2023 · Atualmente)
		</p>

		<p>
			Liderança técnica do front-end em múltiplas aplicações voltadas a projetos
			sociais. Foco em design system, bibliotecas internas, DX e mentoria de
			equipe.
		</p>

		<p>
			<strong>Principais realizações:</strong>
		</p>

		<p>
			<strong>🎨 Design System & Biblioteca de Componentes</strong>
		</p>
		<ul>
			<li>Design system usado em 8+ aplicações</li>
			<li>Biblioteca publicada no GitHub Packages</li>
			<li>Redução de 60% no tempo de desenvolvimento</li>
		</ul>

		<p>
			<strong>⚡ Developer Experience</strong>
		</p>
		<ul>
			<li>Boilerplates Next.js e ferramentas CLI</li>
			<li>Melhoria de 40% na velocidade de setup de projetos</li>
		</ul>

		<p>
			<strong>🏗️ Plataforma Conecta</strong>
		</p>
		<ul>
			<li>Liderança técnica da plataforma principal</li>
			<li>Migração de componentes legados para design system moderno</li>
		</ul>

		<p>
			<strong>👥 Liderança & Mentoria</strong>
		</p>
		<ul>
			<li>Gestão de equipe de 4 desenvolvedores</li>
			<li>Mentoria técnica e processos de qualidade</li>
		</ul>

		<H3>
			<Link href="/companies/adseleto">AdSeleto</Link>
		</H3>

		<p>
			<strong>Desenvolvedor Front-End Sênior</strong> (nov 2024 · mai 2025)
		</p>

		<p>Reconstrução do SaaS AutoPilot™ com nova arquitetura em Next.js 15.</p>

		<p>
			<strong>Principais realizações:</strong>
		</p>

		<p>
			<strong>🚀 AutoPilot™ - Reconstrução Completa</strong>
		</p>
		<ul>
			<li>Reescrita do SaaS com Next.js 15 e App Router</li>
			<li>Melhoria de 70% na performance</li>
		</ul>

		<p>
			<strong>🎨 Design System & Acessibilidade</strong>
		</p>
		<ul>
			<li>Biblioteca de componentes acessíveis (WCAG 2.1)</li>
			<li>Sistema de design com Tailwind CSS e Radix UI</li>
		</ul>

		<p>
			<strong>🔐 Autenticação & Segurança</strong>
		</p>
		<ul>
			<li>Integração com Keycloak para SSO</li>
			<li>Gestão de roles e permissões</li>
		</ul>

		<p>
			<strong>⚙️ Developer Experience</strong>
		</p>
		<ul>
			<li>Ferramentas CLI e pipelines CI/CD</li>
			<li>Testes automatizados e documentação técnica</li>
		</ul>

		<Hr />

		<H3>
			<Link href="/companies/uol">UOL - Universo Online</Link>
		</H3>

		<p>
			<strong>Desenvolvedor Front-End Sênior</strong> (ago 2022 · out 2023 · 1
			ano e 3 meses)
		</p>

		<p>Desenvolvimento do sistema PMD em React integrado ao SharePoint.</p>

		<p>
			<strong>Principais realizações:</strong>
		</p>

		<p>
			<strong>📊 Sistema PMD</strong>
		</p>
		<ul>
			<li>Dashboard completo para gestão de projetos</li>
			<li>Integração com SharePoint e Microsoft Graph</li>
		</ul>

		<p>
			<strong>🎨 Design System UOL</strong>
		</p>
		<ul>
			<li>Biblioteca adotada por 12+ squads</li>
			<li>Redução de 50% no tempo de desenvolvimento</li>
		</ul>

		<p>
			<strong>🔄 Migração de Sistemas Legados</strong>
		</p>
		<ul>
			<li>Modernização de ASP.NET para React</li>
			<li>Melhoria de 45% na performance</li>
		</ul>

		<p>
			<strong>⚡ Performance</strong>
		</p>
		<ul>
			<li>Redução de 60% no tempo de carregamento</li>
			<li>Otimizações de bundle e cache inteligente</li>
		</ul>

		<Hr />

		<H3>
			<Link href="/companies/mentora">Mentora</Link>
		</H3>

		<p>
			<strong>Desenvolvedor Front-End Pleno</strong> (abr 2022 · set 2022 · 6
			meses)
		</p>

		<p>
			Criação de interface para plataforma de campeonatos digitais com
			criptomoedas.
		</p>

		<p>
			<strong>Principais realizações:</strong>
		</p>

		<p>
			<strong>🏆 Plataforma de Campeonatos Digitais</strong>
		</p>
		<ul>
			<li>Interface completa para torneios de e-sports</li>
			<li>Dashboard de resultados em tempo real</li>
		</ul>

		<p>
			<strong>🔗 Integração Web3 & Blockchain</strong>
		</p>
		<ul>
			<li>Autenticação via MetaMask</li>
			<li>Integração com contratos inteligentes Ethereum</li>
			<li>Sistema de pagamentos em criptomoedas</li>
		</ul>

		<p>
			<strong>📱 Performance & UX</strong>
		</p>
		<ul>
			<li>PWA com cache offline</li>
			<li>Redução de 40% no tempo de carregamento</li>
		</ul>

		<Hr />

		<H3>
			<Link href="/companies/clipping-cacd">Clipping CACD</Link>
		</H3>

		<p>
			<strong>Desenvolvedor Front-End Júnior → Pleno</strong> (mai 2019 · jul
			2022 · 3 anos e 3 meses)
		</p>

		<p>
			Participação em projetos educacionais com foco em performance e
			interatividade.
		</p>

		<p>
			<strong>Principais realizações:</strong>
		</p>

		<p>
			<strong>📝 Editor Markdown WYSIWYG - Kderno</strong>
		</p>
		<ul>
			<li>Editor com preview ao vivo e plugins customizáveis</li>
			<li>Sistema de autosave e versionamento</li>
		</ul>

		<p>
			<strong>🎯 Plataforma Educacional</strong>
		</p>
		<ul>
			<li>Sistema de exercícios interativos e quizzes</li>
			<li>Dashboard de acompanhamento para professores</li>
		</ul>

		<p>
			<strong>⚡ Performance</strong>
		</p>
		<ul>
			<li>Redução de 55% no tempo de carregamento</li>
			<li>Otimizações de conteúdo e cache inteligente</li>
		</ul>
	</ContentPage>
);

export default Page;
