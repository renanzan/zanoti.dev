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
			<strong>Desenvolvedor Front-End</strong> especializado em modernizar
			sistemas legados
			<br />e liderar equipes para construir soluções escaláveis e eficientes.
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
		desc: "5+ anos transformando sistemas antigos em soluções modernas. Experiência comprovada na UOL e Incentiv, com migrações sem interrupção do negócio."
	},
	{
		icon: {
			className: "bg-pink-300 dark:bg-pink-900",
			Component: HeartIcon
		},
		title: "Design Systems & Liderança",
		desc: "Criação de design systems que aceleram desenvolvimento em 60%. Liderança de equipes de 4+ desenvolvedores com foco em qualidade e produtividade."
	},
	{
		icon: {
			className: "bg-sky-300 dark:bg-sky-900",
			Component: CodeIcon
		},
		title: "Arquitetura Frontend",
		desc: "Especialista em React, TypeScript e Next.js. Experiência em sistemas corporativos, Web3 e aplicações de alta performance com melhorias de até 70%."
	}
];

export const footerInfo = {
	aboutMe: (
		<>
			Sou Renan Zanoti, <b>Desenvolvedor Front-End</b> especializado em
			modernizar sistemas legados e liderar equipes para construir soluções
			escaláveis e eficientes.
		</>
	)
};
