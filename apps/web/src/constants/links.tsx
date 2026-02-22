import GithubIcon from "@/public/icons/sites/github.svg";
import TwitterIcon from "@/public/icons/sites/twitter.svg";

export const workLinks = [
	{ title: "Habilidades", href: "/work/skills" },
	{ title: "Experiência", href: "/work/experience" },
	{ title: "Contato", href: "/work/contact" }
];

export const pageLinks = [
	{ title: "Sobre", href: "/about" },
	{ title: "Projetos", href: "/projects" },
	{ title: "Blog", href: "/blog" },
	{ title: "E.D.H", href: "/today-studies" } // E.D.H = Estudos de Hoje
];

export const socialLinks = [
	{
		title: "Twitter",
		href: "https://twitter.com/renan_zanoti",
		Icon: TwitterIcon
	},
	{ title: "GitHub", href: "https://github.com/renanzan", Icon: GithubIcon }
];

export const learnLinks = [
	{
		title: "Código Fonte",
		href: "https://github.com/renanzan/zanoti.dev",
		isInternal: false
	}
];
