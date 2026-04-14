import { H2 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import ContentPage from "@/components/ContentPage";
import { generateMetadata } from "@/helpers/seo";

export const metadata = generateMetadata({
	title: "Sobre",
	description:
		"Conheça Renan Zanoti, Desenvolvedor Front-End com 5+ anos de experiência em React, TypeScript e Next.js. Especialista em migração de sistemas legados e liderança técnica.",
	path: "/about"
});

const frontMatter = {
	title: "Sobre",
	description:
		"Minha trajetória no desenvolvimento começou antes da faculdade, a partir de curiosidade genuína por tecnologia e sistemas.",
	caption: "Pessoal"
};

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<p>
			Com o tempo, essa curiosidade evoluiu para algo mais estruturado: entender
			como as coisas funcionam, desmontar problemas e encontrar soluções. Foi
			esse padrão que acabou direcionando minha carreira.
		</p>

		<Hr />

		<H2>Curiosidade que virou prática</H2>

		<p>
			Ainda novo, passava grande parte do tempo explorando computador e
			internet.
		</p>

		<p>
			Mesmo quando havia tentativas de limitar esse acesso, eu sempre encontrava
			formas de contornar. Mais do que o acesso em si, o que me movia era
			entender como tudo funcionava por trás.
		</p>

		<p>
			Esse comportamento acabou moldando uma característica que carrego até
			hoje: insistir até entender o problema por completo.
		</p>

		<Hr />

		<H2>Primeiro contato com programação</H2>

		<p>No ensino médio, tive meu primeiro contato real com programação.</p>

		<p>
			Comecei estudando lógica e escrevendo código no papel antes de ter
			consistência prática no computador. Foi nesse momento que percebi que
			programar não era só interessante, era algo que eu queria levar a sério.
		</p>

		<Hr />

		<H2>Construindo base técnica</H2>

		<p>
			Na UFOP, cursando Sistemas de Informação, tive meu primeiro destaque em um
			projeto em grupo, onde assumi a maior parte da implementação.
		</p>

		<p>
			Esse foi um ponto importante para consolidar minha base e ganhar confiança
			para lidar com problemas mais complexos.
		</p>

		<Hr />

		<H2>Primeiro projeto com impacto</H2>

		<p>
			Durante a pandemia, participei do desenvolvimento do Radar Viral, uma
			aplicação com mapa interativo para visualização de dados sobre a COVID-19.
		</p>

		<p>
			O projeto teve repercussão local e foi minha primeira experiência
			construindo algo com impacto real, mesmo fora de um ambiente profissional
			estruturado.
		</p>

		<Hr />

		<H2>Entrada no mercado</H2>

		<p>Minha entrada no mercado aconteceu ainda durante a pandemia.</p>

		<p>
			Comecei como estagiário na Clipping CACD, trabalhando em um sistema
			complexo de criação de conteúdo dinâmico. Em pouco tempo, passei a assumir
			a maior parte do frontend.
		</p>

		<p>
			Rapidamente assumi responsabilidade pelo frontend, lidando com problemas
			que exigiam mais do que execução — exigiam estruturação e tomada de
			decisão.
		</p>

		<p>
			Esse foi o momento em que deixei de apenas implementar e comecei a lidar
			com estruturação, decisões técnicas e organização do sistema.
		</p>

		<Hr />

		<H2>Evolução profissional</H2>

		<p>
			Ao longo da carreira, passei por diferentes contextos, sempre lidando com
			aumento de complexidade e responsabilidade.
		</p>

		<ol>
			<li>
				<strong>Clipping CACD</strong> — Estagiário → Júnior → Pleno
			</li>
			<li>
				<strong>Mentora</strong> — Pleno
			</li>
			<li>
				<strong>UOL</strong> — Sênior
			</li>
			<li>
				<strong>AdSeleto</strong> — Sênior
			</li>
			<li>
				<strong>Incentiv</strong> — Sênior → Tech Lead Front-End
			</li>
		</ol>

		<p>
			Essa evolução aconteceu principalmente pela capacidade de assumir
			problemas maiores e organizar soluções de forma sustentável.
		</p>

		<Hr />

		<H2>Decisões de carreira</H2>

		<p>Durante a faculdade, precisei tomar uma decisão importante.</p>

		<p>
			Durante a pandemia de COVID-19, com a faculdade paralisada e a rápida
			expansão da área, tive a oportunidade de atuar em projetos mais complexos.
			A partir disso, decidi focar integralmente na carreira e interromper a
			graduação.
		</p>

		<p>
			Foi uma escolha prática, alinhada ao momento, que acelerou minha evolução
			profissional.
		</p>

		<Hr />

		<H2>Como atuo hoje</H2>

		<p>
			Hoje atuo como Desenvolvedor Frontend Sênior com foco em arquitetura e
			sistemas complexos.
		</p>

		<p>Meu trabalho envolve principalmente:</p>

		<ol>
			<li>Estruturação de frontend para escala</li>
			<li>Redução de complexidade técnica e organizacional</li>
			<li>Design systems e bibliotecas reutilizáveis</li>
			<li>Modelagem com TypeScript</li>
			<li>Melhoria da experiência do desenvolvedor (DX)</li>
		</ol>

		<p>
			Meu foco não está apenas em construir interfaces, mas em organizar
			sistemas que consigam evoluir com consistência ao longo do tempo.
		</p>

		<Hr />

		<p>
			<em>
				Essa trajetória foi construída na prática, resolvendo problemas reais e
				evoluindo em ambientes com diferentes níveis de complexidade.
			</em>
		</p>
	</ContentPage>
);

export default Page;
