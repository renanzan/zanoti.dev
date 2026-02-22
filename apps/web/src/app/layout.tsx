import "@/styles/main.css";

import { Inter } from "next/font/google";
import { generateMetadata, generateStructuredData } from "@/helpers/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = generateMetadata();

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const personStructuredData = generateStructuredData("Person");
	const websiteStructuredData = generateStructuredData("WebSite");

	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body className={inter.className}>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									// Verificar se o tema já foi aplicado (evita re-aplicação)
									const root = document.documentElement;
									if (root.classList.contains('light') || root.classList.contains('dark')) {
										return;
									}
									
									const savedTheme = localStorage.getItem('theme');
									
									let theme = savedTheme;
									if (!theme || theme === 'system') {
										const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
										theme = systemPrefersDark ? 'dark' : 'light';
									}
									
									if (theme === 'dark' || theme === 'light') {
										root.classList.remove('light', 'dark');
										root.classList.add(theme);
									}
								} catch (e) {
									// Fallback para tema claro se houver erro
									document.documentElement.classList.add('light');
								}
							})();
						`
					}}
				/>
				{personStructuredData && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(personStructuredData)
						}}
					/>
				)}
				{websiteStructuredData && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(websiteStructuredData)
						}}
					/>
				)}
				{children}
			</body>
		</html>
	);
}
