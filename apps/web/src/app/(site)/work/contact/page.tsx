import ContentPage from "@/components/ContentPage";
import { H2, H3 } from "@/components/content/Heading";
import { Hr } from "@/components/content/Hr";
import { Table } from "@/components/content/Table";
import { generateMetadata } from "@/helpers/seo";

const frontMatter = {
	title: "Contato",
	description:
		"Vamos conversar sobre como posso ajudar sua empresa a modernizar sistemas e acelerar desenvolvimento.",
	caption: "Profissional"
};

export const metadata = generateMetadata({
	title: "Contato",
	description:
		"Entre em contato com Renan Zanoti, Desenvolvedor Front-End. Disponível para projetos, oportunidades de trabalho e colaborações.",
	path: "/work/contact"
});

const Page = () => (
	<ContentPage frontMatter={frontMatter}>
		<H2>Vamos transformar seu projeto juntos?</H2>

		<p>
			<strong>Desenvolvedor Front-End</strong> com 5+ anos de experiência em
			modernização de sistemas e liderança de equipes. Especializado em:
		</p>

		<ul>
			<li>
				<strong>Migração de sistemas legados</strong> — transformação sem
				interrupção do negócio
			</li>
			<li>
				<strong>Design systems</strong> — redução de 60% no tempo de
				desenvolvimento
			</li>
			<li>
				<strong>Liderança técnica</strong> — gestão de equipes e mentoria
			</li>
			<li>
				<strong>Arquitetura moderna</strong> — React, TypeScript, Next.js e Web3
			</li>
		</ul>

		<p>
			<strong>Disponível para oportunidades remotas</strong> em horários
			flexíveis.
		</p>

		<p>Vamos conversar sobre como posso agregar valor ao seu projeto?</p>

		<Hr />

		<H3>Informações de Contato</H3>

		<Table>
			<thead>
				<tr>
					<th>Contato</th>
					<th>Detalhes</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>E-mail</td>
					<td>rh.zanoti@gmail.com</td>
				</tr>
				<tr>
					<td>Website</td>
					<td>https://zanoti.dev</td>
				</tr>
				<tr>
					<td>Telefone</td>
					<td>(+31) 9 98870 8375</td>
				</tr>
				<tr>
					<td>Endereço</td>
					<td>Taubaté, SP</td>
				</tr>
			</tbody>
		</Table>

		<Hr />

		<H3>Redes Sociais</H3>

		<p>
			Encontre-me nas redes sociais como <strong>@renanzan</strong>. Links
			principais:
		</p>

		<Table>
			<thead>
				<tr>
					<th>Rede Social</th>
					<th>URL do Perfil</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>LinkedIn</td>
					<td>https://www.linkedin.com/in/renanzan/</td>
				</tr>
				<tr>
					<td>Twitter</td>
					<td>https://twitter.com/renan_zanoti</td>
				</tr>
			</tbody>
		</Table>
	</ContentPage>
);

export default Page;
