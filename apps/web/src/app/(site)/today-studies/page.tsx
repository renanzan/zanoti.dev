import ContentPage from "@/components/ContentPage";
import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { generateMetadata } from "@/helpers/seo";

const frontMatter = {
	title: "E.D.H",
	description:
		"Estudos de Hoje - Aprendizado contínuo em migração de sistemas legados e liderança técnica.",
	caption: "Aprendizado"
};

export const metadata = generateMetadata({
	title: "E.D.H - Estudos de Hoje",
	description:
		"Estudos diários de Renan Zanoti sobre desenvolvimento frontend, React, TypeScript, Next.js e tecnologias web. Compartilhando conhecimento e aprendizado contínuo.",
	path: "/today-studies"
});

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<p>
			Aprendizado contínuo para manter expertise em{" "}
			<strong>migração de sistemas legados</strong> e{" "}
			<strong>liderança técnica</strong>.
		</p>

		<Hr />

		<H2>Foco Atual</H2>

		<H3>Liderança Técnica</H3>

		<ul>
			<li>Gestão de equipes de desenvolvimento front-end</li>
			<li>Mentoria técnica e code reviews</li>
			<li>Arquitetura de software em projetos complexos</li>
			<li>Comunicação técnica com stakeholders</li>
		</ul>

		<H3>Migração de Sistemas Legados</H3>

		<ul>
			<li>Estratégias de migração sem interrupção do negócio</li>
			<li>Planejamento gradual e validação contínua</li>
			<li>Integração com sistemas existentes</li>
			<li>Treinamento de equipes para novas tecnologias</li>
		</ul>

		<Hr />

		<H2>Tecnologias em Exploração</H2>

		<H3>Next.js 15 & App Router</H3>

		<ul>
			<li>Server Components — Performance e SEO</li>
			<li>Streaming e Suspense — UX otimizada</li>
			<li>Edge Functions — Funcionalidades serverless</li>
			<li>Turbopack — Build tooling mais rápido</li>
		</ul>

		<H3>Web3 & Blockchain</H3>

		<ul>
			<li>Smart Contracts — Integração frontend</li>
			<li>Web3.js/Ethers.js — Bibliotecas blockchain</li>
			<li>DeFi — Aplicações financeiras descentralizadas</li>
			<li>Segurança Web3 — Boas práticas</li>
		</ul>

		<Hr />

		<H2>Performance & Otimização</H2>

		<ul>
			<li>Core Web Vitals — Métricas essenciais</li>
			<li>Bundle Optimization — Redução de tamanho</li>
			<li>Lazy Loading — Carregamento sob demanda</li>
			<li>Caching Strategies — Tempo de resposta</li>
		</ul>

		<Hr />

		<H2>Próximos Estudos</H2>

		<H3>Tecnologias Emergentes</H3>

		<ul>
			<li>AI/ML no Frontend — Integração de IA</li>
			<li>WebAssembly — Performance nativa</li>
			<li>Micro-frontends — Arquitetura escalável</li>
			<li>Progressive Web Apps — Experiência nativa</li>
		</ul>

		<H3>Soft Skills</H3>

		<ul>
			<li>Comunicação técnica — Apresentações</li>
			<li>Mentoria — Desenvolvimento de equipes</li>
			<li>Gestão de tempo — Produtividade</li>
			<li>Networking — Relacionamentos profissionais</li>
		</ul>

		<Hr />

		<H2>Metas 2024</H2>

		<H3>Q1-Q2</H3>

		<ul>
			<li>[ ] Dominar Next.js 15 e App Router</li>
			<li>[ ] Implementar testes automatizados</li>
			<li>[ ] Melhorar habilidades de mentoria</li>
			<li>[ ] Explorar WebAssembly</li>
		</ul>

		<H3>Q3-Q4</H3>

		<ul>
			<li>[ ] Design system open source</li>
			<li>[ ] Aplicação Web3 completa</li>
			<li>[ ] Expertise em arquitetura de software</li>
			<li>[ ] Contribuições open source</li>
		</ul>

		<Hr />

		<p>
			<em>
				Atualizado regularmente conforme evoluem meus estudos e experiências
				profissionais.
			</em>
		</p>
	</ContentPage>
);

export default Page;
