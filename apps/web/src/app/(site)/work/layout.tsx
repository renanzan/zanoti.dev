import { generateMetadata } from "@/helpers/seo";

export const metadata = generateMetadata({
	title: "Trabalho",
	description:
		"Habilidades, experiência profissional e formas de contato de Renan Zanoti, Desenvolvedor Front-End especializado em React, TypeScript e Next.js.",
	path: "/work"
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
