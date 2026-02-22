import ContentPage from "@/components/ContentPage";
import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { Link } from "@/components/content/Link";
import { generateMetadata } from "@/helpers/seo";

const frontMatter = {
	title: "Projetos",
	description:
		"Portfólio de projetos em migração de sistemas legados, design systems e liderança técnica com resultados mensuráveis.",
	caption: "Portfólio"
};

export const metadata = generateMetadata({
	title: "Projetos",
	description:
		"Portfólio de projetos desenvolvidos por Renan Zanoti. Inclui projetos de migração de sistemas legados, design systems, aplicações Web3 e soluções frontend escaláveis.",
	path: "/projects"
});

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<p>
			Seleção de projetos que demonstram expertise em{" "}
			<strong>migração de sistemas legados</strong>,{" "}
			<strong>design systems</strong> e <strong>liderança técnica</strong>, com
			resultados comprovados.
		</p>

		<Hr />

		<H2>Projetos por Empresa</H2>

		<H3>
			<Link href="/companies/incentiv">Incentiv</Link> - Tech Lead Front-End
		</H3>
		<p>
			<strong>Set 2023 - Atualmente</strong> | React, TypeScript, Design System,
			Storybook
		</p>

		<p>
			<strong>Projetos:</strong>
		</p>
		<ul>
			<li>
				<Link href="/projects/conecta-platform">Plataforma Conecta</Link> -
				Sistema principal para gestão de projetos sociais
			</li>
		</ul>

		<H3>
			<Link href="/companies/adseleto">AdSeleto</Link> - Desenvolvedor Front-End
			Sênior
		</H3>
		<p>
			<strong>Nov 2024 - Mai 2025</strong> | Next.js 15, TypeScript, Keycloak,
			Tailwind CSS
		</p>

		<p>
			<strong>Projetos:</strong>
		</p>
		<ul>
			<li>
				<Link href="/projects/autopilot-saas">AutoPilot™ SaaS</Link> -
				Reconstrução completa do SaaS de automação de marketing
			</li>
		</ul>

		<H3>
			<Link href="/companies/uol">UOL</Link> - Desenvolvedor Front-End Sênior
		</H3>
		<p>
			<strong>Ago 2022 - Out 2023</strong> | React, TypeScript, SharePoint,
			Microsoft Graph
		</p>

		<p>
			<strong>Projetos:</strong>
		</p>
		<ul>
			<li>
				<Link href="/projects/pmd-system">Sistema PMD</Link> - Dashboard de
				planejamento e monitoramento de desenvolvimento
			</li>
		</ul>

		<H3>
			<Link href="/companies/mentora">Mentora</Link> - Desenvolvedor Front-End
			Pleno
		</H3>
		<p>
			<strong>Abr 2022 - Set 2022</strong> | React, TypeScript, Web3, MetaMask,
			PWA
		</p>

		<p>
			<strong>Projetos:</strong>
		</p>
		<ul>
			<li>
				<Link href="/projects/mentora-platform">Plataforma de Campeonatos</Link>{" "}
				- Interface para torneios de e-sports com Web3
			</li>
		</ul>

		<H3>
			<Link href="/companies/clipping-cacd">Clipping CACD</Link> - Desenvolvedor
			Júnior → Pleno
		</H3>
		<p>
			<strong>Mai 2019 - Jul 2022</strong> | React, TypeScript, Monaco Editor,
			Markdown
		</p>

		<p>
			<strong>Projetos:</strong>
		</p>
		<ul>
			<li>
				<Link href="/projects/kderno">Kderno Editor</Link> - Editor markdown
				WYSIWYG para plataforma educacional
			</li>
		</ul>

		<Hr />

		<H2>Destaques Técnicos</H2>

		<H3>Design Systems</H3>
		<p>
			Design systems implementados para AdSeleto, UOL e Incentiv com redução de
			50-60% no tempo de desenvolvimento. Documentação interativa com Storybook
			e componentes acessíveis.
		</p>

		<H3>Migração de Sistemas Legados</H3>
		<p>
			Modernização de sistemas ASP.NET para React (UOL) e migração gradual de
			componentes legados (Incentiv), mantendo operações sem interrupção.
		</p>

		<H3>Autenticação & Segurança</H3>
		<p>
			Integração com Keycloak para SSO em múltiplas aplicações, garantindo
			segurança e gestão unificada de usuários.
		</p>

		<H3>Developer Experience</H3>
		<p>
			Boilerplates, ferramentas CLI e bibliotecas internas que aceleram setup de
			projetos em até 40% e padronizam desenvolvimento.
		</p>

		<Hr />

		<p>
			<em>
				Interessado em algum projeto? Vamos conversar sobre como posso ajudar
				sua empresa a alcançar resultados similares.
			</em>
		</p>
	</ContentPage>
);

export default Page;
