import { H2 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { Link } from "@/components/content/Link";
import ContentPage from "@/components/ContentPage";
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
		"Trajetória como Desenvolvedor Frontend, evoluindo de projetos com alta complexidade de interface até atuação em arquitetura de sistemas e padronização entre múltiplas aplicações.",
	caption: "Profissional"
};

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<p>
			Experiência com desenvolvimento frontend em diferentes contextos: produtos
			com lógica complexa, sistemas legados com restrições técnicas e
			plataformas em escala com múltiplos clientes e aplicações.
		</p>

		<Hr />

		<H2>
			<Link href="/companies/incentiv">Incentiv</Link>
		</H2>

		<p>
			<strong>Tech Lead Front-End</strong> (set 2023 · Atualmente)
		</p>

		<p>
			Atuação na estruturação do frontend de múltiplos produtos com foco em
			arquitetura, escalabilidade e padronização entre aplicações.
		</p>

		<p>
			<strong>🎨 Design System & Biblioteca de Componentes</strong>
		</p>
		<ul>
			<li>Estruturei design system utilizado em múltiplas aplicações</li>
			<li>Publiquei biblioteca de componentes como pacote privado</li>
			<li>
				Reduzi inconsistências de interface e aumentei reutilização entre
				produtos
			</li>
		</ul>

		<p>
			<strong>⚡ Developer Experience</strong>
		</p>
		<ul>
			<li>Desenvolvi boilerplates em Next.js e ferramentas CLI internas</li>
			<li>Padronizei setup de projetos e organização inicial</li>
			<li>Reduzi tempo de onboarding e criação de novas aplicações</li>
		</ul>

		<p>
			<strong>🏗️ Plataforma Conecta</strong>
		</p>
		<ul>
			<li>Liderei tecnicamente a principal plataforma do produto</li>
			<li>
				Estruturei frontend para suportar múltiplos perfis e fluxos complexos
			</li>
			<li>
				Migrei componentes legados para uma base padronizada com design system
			</li>
		</ul>

		<p>
			<strong>👥 Liderança & Mentoria</strong>
		</p>
		<ul>
			<li>Liderei equipe com 4 desenvolvedores frontend</li>
			<li>Conduzi revisões de código e defini padrões técnicos</li>
			<li>Atuei na evolução da qualidade e consistência das entregas</li>
		</ul>

		<Hr />

		<H2>
			<Link href="/companies/adseleto">AdSeleto</Link>
		</H2>

		<p>
			<strong>Desenvolvedor Front-End Sênior</strong> (nov 2024 · mai 2025)
		</p>

		<p>
			Atuação na reestruturação do frontend do core de um SaaS, preparando a
			base para evolução como hub de múltiplas soluções.
		</p>

		<p>
			<strong>Principais realizações:</strong>
		</p>

		<p>
			<strong>🧩 Reestruturação do Frontend (HUB AdSeleto)</strong>
		</p>
		<ul>
			<li>
				Reestruturei o frontend do core do produto, preparando a base para
				evolução como hub
			</li>
			<li>
				Organizei arquitetura para suportar múltiplos módulos com consistência
			</li>
			<li>Reduzi inconsistências e aumentei previsibilidade na manutenção</li>
		</ul>

		<p>
			<strong>🎨 Design System & Padronização</strong>
		</p>
		<ul>
			<li>Estruturei design system com publicação de pacotes privados</li>
			<li>
				Padronizei componentes e interface entre diferentes partes do sistema
			</li>
			<li>Documentei biblioteca com foco em reutilização e consistência</li>
		</ul>

		<p>
			<strong>🔐 Autenticação & Integração</strong>
		</p>
		<ul>
			<li>Implementei autenticação centralizada com Keycloak</li>
			<li>
				Estruturei fluxo de autenticação reutilizável para aplicações Next.js
			</li>
			<li>Reduzi complexidade na integração entre módulos e serviços</li>
		</ul>

		<p>
			<strong>⚙️ Qualidade & Organização</strong>
		</p>
		<ul>
			<li>Defini padrões de código e organização entre módulos</li>
			<li>Atuei na melhoria da qualidade técnica e legibilidade do código</li>
			<li>Estruturei base mais previsível para evolução contínua do produto</li>
		</ul>

		<Hr />

		<H2>
			<Link href="/companies/uol">UOL - Universo Online</Link>
		</H2>

		<p>
			<strong>Desenvolvedor Front-End Sênior</strong> (ago 2022 · out 2023 · 1
			ano e 3 meses)
		</p>

		<p>
			Atuação em sistema interno de RH com forte legado, rodando em ambiente
			restrito baseado em SharePoint.
		</p>

		<p>
			<strong>Principais realizações:</strong>
		</p>

		<p>
			<strong>🏢 Sistema Corporativo (CVV)</strong>
		</p>
		<ul>
			<li>
				Atuei na evolução de sistema interno de RH com regras de negócio
				complexas
			</li>
			<li>
				Trabalhei em fluxos com múltiplos estados e dependências entre etapas
			</li>
			<li>Contribuí para melhoria da organização e manutenção do sistema</li>
		</ul>

		<p>
			<strong>⚠️ Ambiente Restrito (SharePoint)</strong>
		</p>
		<ul>
			<li>Desenvolvi em ambiente com restrições técnicas de SharePoint </li>
			<li>
				Adaptei soluções modernas para versões limitadas de React e bibliotecas
			</li>
			<li>Tomei decisões pragmáticas considerando limitações do ambiente</li>
		</ul>

		<p>
			<strong>🧱 Padronização de Interface</strong>
		</p>
		<ul>
			<li>Estruturei componentes reutilizáveis para reduzir inconsistência</li>
			<li>Melhorei organização do frontend em um sistema legado</li>
			<li>Contribuí para maior previsibilidade na evolução da interface</li>
		</ul>

		<Hr />

		<H2>
			<Link href="/companies/mentora">Mentora</Link>
		</H2>

		<p>
			<strong>Desenvolvedor Front-End Pleno</strong> (abr 2022 · set 2022 · 6
			meses)
		</p>

		<p>
			Atuação na construção de uma plataforma de competições com integração Web3
			e lógica de saldo.
		</p>

		<p>
			<strong>🕹 Plataforma Web3 (mentora.gg)</strong>
		</p>
		<ul>
			<li>
				Desenvolvi frontend do zero para plataforma de competições em e-sports
			</li>
			<li>
				Estruturei aplicação com foco em organização e evolução do produto
			</li>
			<li>Modelei fluxos envolvendo competição, saldo e interação com Web3</li>
			<li>Modelei fluxos envolvendo competição, saldo e interação com Web3</li>
		</ul>

		<p>
			<strong>🔗 Integração com Web3</strong>
		</p>
		<ul>
			<li>Implementei autenticação via carteira com MetaMask </li>
			<li>Integrei frontend com lógica baseada em blockchain</li>
			<li>Trabalhei na comunicação entre interface e eventos externos</li>
		</ul>

		<p>
			<strong>🔄 Estado & Consistência</strong>
		</p>
		<ul>
			<li>
				Estruturei gerenciamento de estado para lidar com saldo e transações
			</li>
			<li>Garanti consistência da interface em cenários assíncronos</li>
			<li>
				Modelei comportamento da aplicação considerando múltiplas fontes de
				evento
			</li>
		</ul>

		<Hr />

		<H2>
			<Link href="/companies/clipping-cacd">Clipping CACD</Link>
		</H2>

		<p>
			<strong>Desenvolvedor Front-End Júnior → Pleno</strong> (mai 2019 · jul
			2022 · 3 anos e 3 meses)
		</p>

		<p>
			Atuação na construção de uma plataforma educacional com conteúdo dinâmico
			e editor rico.
		</p>

		<p>
			<strong>✍️ Plataforma de Conteúdo Dinâmico (Kderno)</strong>
		</p>
		<ul>
			<li>Desenvolvi sistema completo de criação e renderização de conteúdo</li>
			<li>Estruturei páginas dinâmicas com diferentes tipos de bloco</li>
			<li>Trabalhei na evolução da arquitetura do frontend</li>
		</ul>

		<p>
			<strong>🧩 Editor Rico & Markdown</strong>
		</p>
		<ul>
			<li>Implementei editor baseado em blocos com markdown em tempo real</li>
			<li>Modelei lógica de edição e composição de conteúdo</li>
			<li>Permiti criação flexível de conteúdo estruturado</li>
		</ul>

		<p>
			<strong>🚀 Renderização & Performance</strong>
		</p>
		<ul>
			<li>Trabalhei na renderização de páginas com foco em performance</li>
			<li>Estruturei conteúdo com suporte a SEO</li>
			<li>Otimizei carregamento e organização do frontend</li>
		</ul>

		<p>
			<strong>📈 Evolução Profissional</strong>

			<ul>
				<li>Evoluí de desenvolvedor júnior para pleno ao longo do projeto</li>
				<li>Assumi responsabilidades crescentes na arquitetura frontend</li>
				<li>Contribuí ativamente na evolução técnica da plataforma</li>
			</ul>
		</p>
	</ContentPage>
);

export default Page;
