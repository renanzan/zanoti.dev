import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import ContentPage from "@/components/ContentPage";
import { generateMetadata } from "@/helpers/seo";

const frontMatter = {
	title: "E.D.H",
	description:
		"Evolução contínua em arquitetura frontend, com foco em escalabilidade, padronização e tomada de decisão em sistemas complexos.",
	caption: "Aprendizado"
};

export const metadata = generateMetadata({
	title: "E.D.H - Estudos de Hoje",
	description:
		"Aprendizado contínuo focado em evolução de arquitetura frontend, escalabilidade de sistemas e liderança técnica.",
	path: "/today-studies"
});

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<p>
			Consolidação e aprofundamento das práticas aplicadas no dia a dia,
			evoluindo decisões técnicas em projetos com múltiplas aplicações, regras
			complexas e necessidade de escala.
		</p>

		<Hr />

		<H2>Stack Consolidada</H2>

		<ul>
			<li>Next.js (App Router) aplicado em produção</li>
			<li>Estruturação de monorepos para múltiplas aplicações</li>
			<li>Design systems com publicação de pacotes</li>
			<li>Arquitetura frontend para sistemas escaláveis</li>
			<li>TypeScript aplicado à modelagem de domínio</li>
		</ul>

		<Hr />

		<H2>Foco Atual</H2>

		<H3>Arquitetura em Escala</H3>

		<ul>
			<li>Decisões de arquitetura em sistemas multi-produto</li>
			<li>Organização de código para crescimento sustentável</li>
			<li>Separação de responsabilidades entre aplicações</li>
			<li>Redução de acoplamento e complexidade</li>
		</ul>

		<H3>Liderança Técnica</H3>

		<ul>
			<li>Evolução de padrões técnicos em equipes</li>
			<li>Mentoria e desenvolvimento de outros desenvolvedores</li>
			<li>Revisão de código com foco em consistência</li>
			<li>Comunicação técnica em diferentes níveis</li>
		</ul>

		<H3>Sistemas Legados</H3>

		<ul>
			<li>Estratégias de modernização incremental</li>
			<li>Evolução de sistemas sem interrupção</li>
			<li>Integração com tecnologias existentes</li>
			<li>Balanceamento entre inovação e estabilidade</li>
		</ul>

		<H3>Developer Experience & Qualidade de Código</H3>

		<ul>
			<li>Redução de complexidade cognitiva e estrutural em bases de código</li>
			<li>
				Melhoria da legibilidade e previsibilidade na evolução de sistemas
			</li>
			<li>Estruturação de código para facilitar manutenção e onboarding</li>
			<li>Definição de padrões que reduzem fricção no desenvolvimento</li>
			<li>Evolução contínua da experiência do desenvolvedor (DX)</li>
		</ul>
	</ContentPage>
);

export default Page;
