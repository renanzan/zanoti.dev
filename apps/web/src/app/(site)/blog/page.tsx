import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { Link } from "@/components/content/Link";
import ContentPage from "@/components/ContentPage";
import { blogPosts } from "@/constants/blog";
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

		{blogPosts.map((post, idx) => (
			<div key={post.slug}>
				<H3>
					<Link href={post.slug}>{post.title}</Link>
				</H3>

				<p>
					<strong>Data:</strong>{" "}
					{new Date(post.publishedAt).toLocaleDateString("pt-BR", {
						year: "numeric",
						month: "long",
						day: "numeric"
					})}
					<br />
					<strong>Tags:</strong> {post.tags.join(", ")}
				</p>

				<p>{post.description}</p>

				{idx !== blogPosts.length && <Hr />}
			</div>
		))}

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
