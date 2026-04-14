import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { Link } from "@/components/content/Link";
import ContentPage from "@/components/ContentPage";
import { generateMetadata } from "@/helpers/seo";

const frontMatter = {
	title: "Projetos",
	description:
		"Portfólio com foco em sistemas complexos, arquitetura frontend e evolução de aplicações em produção.",
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
			Projetos organizados por empresa e iniciativas próprias, destacando
			contexto, decisões técnicas e os principais problemas resolvidos em cada
			caso.
		</p>

		<Hr />

		<H3>
			<Link href="/companies/incentiv">Incentiv</Link> - Tech Lead Frontend
		</H3>

		<p>
			<strong>Set 2023 - Atual</strong> | React, TypeScript, Design System,
			Monorepo, Storybook
		</p>

		<p>
			Atuação em múltiplos produtos com foco em arquitetura frontend,
			organização de sistemas complexos e padronização entre aplicações,
			incluindo estruturação de design system com publicação de pacotes e
			documentação.
		</p>

		<ul>
			<li>
				<Link href="/projects/conecta-platform">Plataforma Conecta</Link> -
				Sistema multi-tenant que conecta proponentes e patrocinadores, com
				fluxos complexos, formulários dinâmicos e regras de negócio sensíveis,
				adaptando a experiência conforme o tipo de usuário.
			</li>

			<li>
				<Link href="/projects/ds-incentiv">Design System Incentiv</Link> -
				Biblioteca de componentes compartilhados entre aplicações, publicada
				como pacote privado e documentada com Storybook.
			</li>

			<li>
				<Link href="/projects/auth-incentiv-package">
					Biblioteca de Autenticação (NextAuth + Keycloak)
				</Link>{" "}
				Package privado para aplicações Next.js, abstraindo a integração com
				Keycloak e permitindo reaproveitamento de lógica de autenticação com
				configuração mínima entre diferentes projetos.
			</li>

			<li>
				<Link href="/projects/pipeline-receptivo">
					Pipeline Receptivo (White-label)
				</Link>{" "}
				- Sistema baseado em monorepo com compartilhamento de código e design
				system, permitindo adaptação de branding por cliente e reutilização
				entre múltiplas aplicações, com foco em escalabilidade e manutenção de
				regras de negócio sensíveis.
			</li>
		</ul>

		<Hr />

		<H3>
			<Link href="/companies/adseleto">AdSeleto</Link> - Desenvolvedor Frontend
			Sênior
		</H3>
		<p>
			<strong>Nov 2024 - Mai 2025</strong> | Next.js, TypeScript, Keycloak,
			Tailwind CSS
		</p>

		<p>
			Atuação na reconstrução do frontend de um produto SaaS, com foco em
			padronização, organização da base e estruturação de design system com
			publicação de pacotes.
		</p>

		<ul>
			<li>
				<Link href="/projects/hub-adseleto">HUB AdSeleto</Link> - Plataforma de
				otimização de monetização de sites, reestruturada com foco em
				arquitetura frontend e consistência entre módulos.
			</li>
		</ul>

		<Hr />

		<H3>
			<Link href="/companies/uol">UOL</Link> - Desenvolvedor Front-End Sênior
		</H3>
		<p>
			<strong>Ago 2022 - Out 2023</strong> | React, TypeScript, SharePoint
		</p>

		<p>
			Atuação em sistema interno de RH com forte legado, rodando em ambiente
			restrito (intranet) sobre SharePoint, com limitações técnicas que exigiam
			o uso de versões mais antigas de React e bibliotecas.
		</p>

		<ul>
			<li>
				<Link href="/projects/cvv-system">
					Sistema Controle de Vagas e Verbas (CVV)
				</Link>{" "}
				- Sistema interno para gestão de vagas, orçamento e alocação de
				recursos, com múltiplos estados e regras de negócio complexas, evoluído
				dentro de um ambiente com restrições técnicas e alto acoplamento.
			</li>
		</ul>

		<Hr />

		<H3>
			<Link href="/companies/mentora">Mentora</Link> - Desenvolvedor Front-End
			Pleno
		</H3>

		<p>
			<strong>Abr 2022 - Set 2022</strong> | React, TypeScript, Web3, MetaMask
		</p>

		<p>
			Atuação na construção da mentora.gg, uma plataforma de apostas em e-sports
			com uso de criptomoedas, envolvendo lógica de saldo, competição e
			integração com Web3.
		</p>

		<ul>
			<li>
				<Link href="/projects/mentora-platform">mentora.gg</Link> -
				Desenvolvimento do frontend do zero com foco em organização de estado e
				evolução do produto, incluindo autenticação via carteira (MetaMask),
				gestão de saldo e fluxos de transação dentro da aplicação.
			</li>
		</ul>

		<Hr />

		<H3>
			<Link href="/companies/clipping-cacd">Clipping CACD</Link> - Desenvolvedor
			Frontend (Júnior → Pleno)
		</H3>
		<p>
			<strong>Mai 2019 - Jul 2022</strong> | React, TypeScript, Editor rico,
			Markdown
		</p>

		<p>
			Atuação na construção do Kderno, uma plataforma completa de criação e
			visualização de conteúdo dinâmico, com foco em flexibilidade, performance
			e SEO.
		</p>

		<ul>
			<li>
				<Link href="/projects/kderno">Kderno</Link> - Sistema de criação de
				páginas com renderização otimizada e suporte a SEO, tendo como núcleo um
				editor baseado em blocos dinâmicos, com suporte a markdown em tempo real
				e composição flexível de conteúdo.
			</li>
		</ul>

		<Hr />

		<H2>Projetos Independentes</H2>

		<p>
			Iniciativas focadas em resolver problemas recorrentes e estruturar
			soluções reutilizáveis para frontend.
		</p>

		<ul>
			<li>
				<Link href="/projects/zormy">Zormy</Link> - Biblioteca para formulários
				tipados com React Hook Form, Zod e TypeScript, focada em reduzir
				complexidade de validação e melhorar a experiência de desenvolvimento em
				formulários complexos.
			</li>
		</ul>

		<Hr />

		<H2>Destaques Técnicos</H2>

		<H3>Design Systems & Publicação de Pacotes</H3>

		<p>
			Criação de design systems com componentes reutilizáveis, publicados como
			pacotes privados e documentados com Storybook, garantindo consistência e
			escalabilidade entre aplicações.
		</p>

		<H3>Migração de Sistemas Legados</H3>

		<p>
			Evolução de sistemas com base legada, reduzindo acoplamento e permitindo
			modernização gradual sem interrupção de operação.
		</p>

		<H3>Autenticação & Segurança</H3>

		<p>
			Implementação de autenticação centralizada com Keycloak, permitindo SSO e
			padronização de acesso entre múltiplas aplicações.
		</p>

		<H3>TypeScript & Modelagem</H3>

		<p>
			Uso de TypeScript para modelar regras de negócio complexas, reduzindo
			inconsistências e aumentando previsibilidade em sistemas grandes.
		</p>

		<H3>Developer Experience</H3>

		<p>
			Criação de padrões, ferramentas e bibliotecas internas para melhorar
			consistência, reduzir retrabalho e facilitar evolução dos projetos.
		</p>

		<Hr />

		<p>
			<em>
				Interessado em entender mais detalhes técnicos ou decisões de
				arquitetura?
				<br />
				Explore as páginas de cada empresa ou entre em contato.
			</em>
		</p>
	</ContentPage>
);

export default Page;
