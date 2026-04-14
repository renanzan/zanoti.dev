import CodeIcon from "@/public/icons/code.svg";
import HeartIcon from "@/public/icons/heart.svg";
import SparklesIcon from "@/public/icons/sparkles.svg";

export const headerInfo = {
	welcome: "olá!",
	presentation: (
		<>
			Sou <mark>Renan</mark> Zanoti,
		</>
	),
	description: (
		<>
			<strong>Desenvolvedor Front-End Sênior</strong> com foco em arquitetura e
			escalabilidade
			<br />
			<br />
			Atuo na construção e evolução de sistemas complexos, estruturando
			aplicações escaláveis com React, Next.js e TypeScript, com foco em design
			systems e arquitetura multi-tenant
		</>
	)
};

export const highlightCards = [
	{
		icon: {
			className: "bg-amber-300 dark:bg-amber-900",
			Component: SparklesIcon
		},
		title: "Migração de Sistemas Legados",
		desc: "Atuo na modernização de sistemas complexos, reduzindo acoplamento e reorganizando a arquitetura para permitir evolução contínua sem comprometer o negócio"
	},
	{
		icon: {
			className: "bg-pink-300 dark:bg-pink-900",
			Component: HeartIcon
		},
		title: "Design Systems & Monorepo",
		desc: "Estruturo design systems e bibliotecas compartilhadas com publicação de pacotes, garantindo consistência entre aplicações e escalabilidade em ambientes multi-produto"
	},
	{
		icon: {
			className: "bg-sky-300 dark:bg-sky-900",
			Component: CodeIcon
		},
		title: "TypeScript Avançado & Modelagem",
		desc: "Utilizo TypeScript como ferramenta de modelagem para reduzir complexidade, aumentar previsibilidade e melhorar a experiência do desenvolvedor em sistemas complexos"
	}
];

export const footerInfo = {
	aboutMe: (
		<>
			Sou Renan Zanoti, <b>Desenvolvedor Frontend Sênior</b> focado em
			arquitetura e sistemas complexos, com atuação em escalabilidade, qualidade
			de código e evolução de sistemas.
		</>
	)
};
