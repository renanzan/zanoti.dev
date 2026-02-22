import ContentPage from "@/components/ContentPage";
import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { Link } from "@/components/content/Link";
import { generateMetadata } from "@/helpers/seo";

const frontMatter = {
	title: "Blog",
	description:
		"Artigos sobre migração de sistemas legados, design systems e liderança técnica baseados em experiências reais.",
	caption: "Blog"
};

export const metadata = generateMetadata({
	title: "Blog",
	description:
		"Artigos sobre desenvolvimento frontend, React, TypeScript, Next.js, design systems, migração de sistemas legados e liderança técnica. Escritos por Renan Zanoti.",
	path: "/blog"
});

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<p>
			Artigos técnicos baseados em <strong>experiências reais</strong> de
			projetos corporativos. Estratégias práticas, lições aprendidas e
			resultados mensuráveis.
		</p>

		<Hr />

		<H2>Artigos</H2>

		<H3>
			<Link href="/blog/monorepo-pnpm">Monorepo com pnpm: Guia Prático</Link>
		</H3>

		<p>
			<strong>Data:</strong> 19 de Dezembro de 2024
			<br />
			<strong>Tags:</strong> Monorepo, pnpm, Workspaces, TypeScript, Developer
			Experience
		</p>

		<p>
			Guia prático para configurar e gerenciar monorepos com pnpm workspaces.
			Estratégias, configurações e melhores práticas validadas em produção.
		</p>

		<Hr />

		<H3>
			<Link href="/blog/developer-experience-pacotes-reaproveitamento">
				Developer Experience: Pacotes e Reaproveitamento
			</Link>
		</H3>

		<p>
			<strong>Data:</strong> 19 de Dezembro de 2024
			<br />
			<strong>Tags:</strong> Developer Experience, Packages, Reaproveitamento,
			Monorepo, TypeScript
		</p>

		<p>
			Como melhorar a Developer Experience através de pacotes reutilizáveis,
			compartilhamento de código e estratégias de reaproveitamento eficientes.
			Guia prático com exemplos reais.
		</p>

		<Hr />

		<H3>
			<Link href="/blog/migracao-sistemas-legados">
				Migração de Sistemas Legados: Estratégias Práticas
			</Link>
		</H3>

		<p>
			<strong>Data:</strong> 15 de Janeiro de 2023
			<br />
			<strong>Tags:</strong> Migração, Legacy, React, SharePoint
		</p>

		<p>
			Aprendizados e estratégias práticas de modernização de sistemas legados.
			Como manter operações sem interrupção durante a migração e os desafios
			técnicos enfrentados.
		</p>

		<Hr />

		<H3>
			<Link href="/blog/web3-frontend-experience">
				Web3 no Frontend: Integração MetaMask e React
			</Link>
		</H3>

		<p>
			<strong>Data:</strong> 20 de Agosto de 2022
			<br />
			<strong>Tags:</strong> Web3, MetaMask, React, Blockchain
		</p>

		<p>
			Aprendizados sobre integração Web3 no frontend, baseados no
			desenvolvimento de uma plataforma com criptomoedas. Integração MetaMask,
			segurança e melhores práticas.
		</p>

		<Hr />

		<H2>Sobre o Blog</H2>

		<p>Compartilho experiências reais de projetos corporativos, focando em:</p>

		<ul>
			<li>
				<strong>Developer Experience (DX)</strong> — Ferramentas e produtividade
			</li>
			<li>
				<strong>Migração de Sistemas Legados</strong> — Estratégias comprovadas
			</li>
			<li>
				<strong>Design Systems</strong> — Criação e manutenção
			</li>
			<li>
				<strong>Liderança Técnica</strong> — Gestão de equipes
			</li>
			<li>
				<strong>Web3 & Blockchain</strong> — Integração frontend
			</li>
			<li>
				<strong>Performance</strong> — Otimização e Core Web Vitals
			</li>
		</ul>

		<Hr />

		<p>
			<em>
				Todos os artigos são baseados em projetos reais desenvolvidos em
				empresas como UOL, Incentiv e Mentora.
			</em>
		</p>
	</ContentPage>
);

export default Page;
