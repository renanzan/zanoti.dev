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
		"Minha trajetória: de Taubaté para a UFOP, projetos durante a pandemia e o início da carreira em desenvolvimento front-end.",
	caption: "Pessoal"
};

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<p>
			Nasci em <strong>Taubaté, SP</strong> e minha paixão por tecnologia
			começou muito antes da faculdade. Sempre fui apaixonado por computador e
			tecnologia, e essa paixão me levou a uma jornada única.
		</p>

		<Hr />

		<H2>A Paixão desde Cedo</H2>

		<p>
			Quando era mais novo, meus pais costumavam limitar meu tempo na internet.
			Minha mãe, que ficava em casa, era quem mais se dedicava a me impedir de
			ficar tanto tempo no computador. Mas eu sempre dava um jeito.
		</p>

		<p>Foi uma verdadeira "guerra" de criatividade e persistência:</p>
		<ul>
			<li>Ela me bloqueava, eu descobria uma forma de burlar</li>
			<li>
				Ela trocava a senha do roteador, eu descobria como conectar usando o
				botão WPS
			</li>
			<li>
				Ela bloqueava o endereço MAC do meu celular pelo painel do roteador, eu
				clonava o endereço MAC do celular dela no meu
			</li>
			<li>
				Cheguei a criar uma lista de senhas possíveis baseadas nas anteriores
				para rodar sempre que ela trocava a senha
			</li>
		</ul>

		<p>
			Essa persistência e curiosidade técnica já mostravam minha paixão por
			resolver problemas e entender como as coisas funcionam.
		</p>

		<Hr />

		<H2>Descobrindo a Programação</H2>

		<p>
			No ensino médio e cursinho, eu e um amigo já sabíamos que queríamos algo
			na área de TI, mas não sabíamos exatamente o quê. Um dia, perguntaram para
			a turma o que cada um queria fazer. As pessoas iam levantando as mãos para
			as profissões mais comuns, e fomos os únicos que não levantamos —
			profissão na área de TI sequer foi mencionada.
		</p>

		<p>
			Fomos a uma <strong>feira de profissões</strong> e falamos com uma aluna
			que estava cursando <strong>Ciência da Computação</strong>. Não sabia que
			curso queria fazer, só sabia que queria programar. Ela explicou um pouco
			da área e me disse para estudar <strong>C</strong>.
		</p>

		<p>
			Desde então, comecei a "programar" em <strong>folha de caderno</strong>{" "}
			durante as aulas. Via videoaulas e escrevia código no papel para treinar
			durante aulas de outras matérias.{" "}
			<strong>Sempre gostei de programar</strong>.
		</p>

		<p>
			Esse amigo do ensino médio é amigo próximo até hoje. Cursamos um momento
			da faculdade juntos, e hoje ele trabalha na área de{" "}
			<strong>segurança da informação</strong> — uma jornada paralela na TI que
			começou naquela mesma feira de profissões.
		</p>

		<Hr />

		<H2>O Início na Faculdade</H2>

		<p>
			Na <strong>UFOP (Universidade Federal de Ouro Preto)</strong>, onde cursei{" "}
			<strong>Sistemas de Informação</strong>, me destaquei em um trabalho de
			programação em grupo. Praticamente fiz tudo sozinho e o projeto se
			destacou entre os outros da turma. Foi um momento importante que mostrou
			meu potencial e capacidade técnica.
		</p>

		<Hr />

		<H2>O Projeto Radar Viral</H2>

		<p>
			Quando a <strong>pandemia de COVID-19</strong> chegou e a faculdade
			fechou, não fiquei parado. Junto com um professor e mais 3 alunos,
			desenvolvi o <strong>Radar Viral</strong> — um site com mapa interativo e
			colaborativo para identificar pontos de interesse relacionados à pandemia.
		</p>

		<p>
			O projeto permitia adicionar pins no mapa para auxiliar na identificação
			de:
		</p>
		<ul>
			<li>Hospitais lotados</li>
			<li>Pontos de interesse</li>
			<li>Informações relevantes sobre a pandemia</li>
		</ul>

		<p>
			O <strong>Radar Viral</strong> teve repercussão local e chegou a passar na
			TV, mostrando como tecnologia pode ser usada para ajudar a comunidade em
			momentos difíceis.
		</p>

		<Hr />

		<H2>O Primeiro Trabalho</H2>

		<p>
			No meio da pandemia, o pai de um amigo que havia feito aquele trabalho de
			faculdade comigo (onde me destaquei) estava como <strong>CTO</strong> de
			uma empresa e precisava de um desenvolvedor. Ele me chamou como{" "}
			<strong>estagiário</strong> para trabalhar no projeto{" "}
			<strong>Kderno</strong> na <strong>Clipping CACD</strong>.
		</p>

		<p>
			Foi uma indicação que mudou minha trajetória. Ele também se interessou
			pelo projeto do Radar Viral, o que ajudou a abrir essa oportunidade.
		</p>

		<Hr />

		<H2>Evolução na Carreira</H2>

		<p>
			Desde então, conquistei a confiança dele e passei por{" "}
			<strong>4 empresas</strong>, sempre evoluindo como desenvolvedor
			front-end:
		</p>

		<ol>
			<li>
				<strong>Clipping CACD</strong> — Estagiário → Júnior → Pleno
			</li>
			<li>
				<strong>Mentora</strong> — Pleno
			</li>
			<li>
				<strong>AdSeleto</strong> — Sênior
			</li>
			<li>
				<strong>Incentiv</strong> — Sênior → Tech Lead Front-End
			</li>
		</ol>

		<p>
			Cada empresa foi um passo importante na minha evolução técnica e
			profissional.
		</p>

		<Hr />

		<H2>A Decisão Difícil</H2>

		<p>
			Quando a faculdade voltou a funcionar, eu já estava muito inserido no
			mercado de trabalho. A pandemia havia criado uma{" "}
			<strong>demanda muito alta por profissionais de TI</strong>, e eu estava
			com dois bons projetos em andamento.
		</p>

		<p>
			Me vi diante de uma escolha difícil: continuar trabalhando e atuando na
			área ou terminar a faculdade. Não queria deixar nenhum dos dois projetos,
			mas precisava priorizar.
		</p>

		<p>
			Acabei optando por <strong>focar na carreira</strong> e abandonar a
			faculdade. Foi uma decisão difícil, mas que me permitiu me dedicar
			completamente ao desenvolvimento front-end e evoluir rapidamente no
			mercado.
		</p>

		<Hr />

		<H2>Hoje</H2>

		<p>
			Hoje, com <strong>5+ anos de experiência</strong>, sou especializado em{" "}
			<strong>migração de sistemas legados</strong>,{" "}
			<strong>design systems</strong> e <strong>liderança técnica</strong>.
			Minha trajetória mostra que, às vezes, oportunidades surgem em momentos
			inesperados e que dedicação e trabalho duro podem levar a resultados
			significativos.
		</p>

		<p>
			A experiência do Radar Viral me ensinou a importância de usar tecnologia
			para resolver problemas reais. O início na Clipping me mostrou o valor de
			indicações e relacionamentos profissionais. E a decisão de focar na
			carreira me permitiu crescer rapidamente em um mercado em alta demanda.
		</p>

		<Hr />

		<p>
			<em>
				Esta é minha história. Uma trajetória que começou em Taubaté, passou por
				Ouro Preto, teve um projeto que ajudou a comunidade durante a pandemia,
				e hoje me trouxe até aqui como desenvolvedor front-end sênior.
			</em>
		</p>
	</ContentPage>
);

export default Page;
