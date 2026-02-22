import ContentPage from "@/components/ContentPage";
import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { generateMetadata } from "@/helpers/seo";

const frontMatter = {
	title: "Habilidades",
	description:
		"Especialização técnica em migração de sistemas legados, design systems e liderança de equipes.",
	caption: "Profissional"
};

export const metadata = generateMetadata({
	title: "Habilidades",
	description:
		"Habilidades técnicas de Renan Zanoti: React, TypeScript, Next.js, Design Systems, migração de sistemas legados e liderança técnica.",
	path: "/work/skills"
});

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<p>
			<strong>5+ anos</strong> de experiência em desenvolvimento front-end.
			Especializado em <strong>migração de sistemas legados</strong>,{" "}
			<strong>design systems</strong> e <strong>liderança técnica</strong>.
		</p>

		<Hr />

		<H2>Especialidades</H2>

		<H3>Migração de Sistemas Legados</H3>

		<ul>
			<li>Modernização de sistemas antigos para tecnologias atuais</li>
			<li>Estratégias sem interrupção do negócio</li>
			<li>Integração mantendo compatibilidade</li>
			<li>Experiência comprovada na UOL e Incentiv</li>
		</ul>

		<H3>Design Systems & Liderança</H3>

		<ul>
			<li>Criação de design systems robustos (8+ aplicações)</li>
			<li>Gestão de equipes de desenvolvimento</li>
			<li>Mentoria técnica e processos de qualidade</li>
			<li>Boilerplates e ferramentas de produtividade</li>
		</ul>

		<H3>Arquitetura Frontend</H3>

		<ul>
			<li>Sistemas corporativos escaláveis</li>
			<li>Aplicações Web3 com blockchain</li>
			<li>Dashboards e painéis administrativos</li>
			<li>Otimização de performance (até 70% de melhoria)</li>
		</ul>

		<Hr />

		<H2>Stack Técnico</H2>

		<H3>Linguagens</H3>

		<ul>
			<li>
				<strong>Frontend:</strong> HTML, CSS/SCSS, TypeScript, JavaScript
			</li>
			<li>
				<strong>Backend:</strong> PHP, SQL
			</li>
		</ul>

		<H3>Tecnologias</H3>

		<ul>
			<li>
				<strong>UI:</strong> TailwindCSS, MaterialUI, Styled Components
			</li>
			<li>
				<strong>Frontend:</strong> React, Next.js, Framer Motion, Storybook,
				Webpack
			</li>
			<li>
				<strong>Backend:</strong> Express, MongoDB
			</li>
		</ul>

		<H3>Ferramentas e Softwares</H3>

		<ul>
			<li>
				<strong>Desenvolvimento:</strong> VS Code, Node.js, Git, Sonarqube, n8n,
				PostHog, Github Copilot
			</li>
			<li>
				<strong>Design:</strong> Figma
			</li>
		</ul>

		<H3>Web3 & Blockchain</H3>

		<ul>
			<li>
				<strong>MetaMask</strong> - Integração de carteiras digitais
			</li>
			<li>
				<strong>Web3.js/Ethers.js</strong> - Bibliotecas para interação com
				blockchain
			</li>
			<li>
				<strong>Smart Contracts</strong> - Integração frontend com contratos
				inteligentes
			</li>
			<li>
				<strong>DeFi</strong> - Aplicações financeiras descentralizadas
			</li>
		</ul>

		<H3>Liderança & Gestão</H3>

		<ul>
			<li>Gestão de equipes de desenvolvimento (4+ desenvolvedores)</li>
			<li>Code reviews e mentoria técnica</li>
			<li>Arquitetura de aplicações frontend</li>
			<li>Documentação técnica e processos de qualidade</li>
		</ul>
	</ContentPage>
);

export default Page;
