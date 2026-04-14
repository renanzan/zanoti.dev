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
									const savedTheme = localStorage.getItem('theme');
									const root = document.documentElement;
									
									let theme = savedTheme;
									if (!theme || theme === 'system') {
										theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
									}
									
									if (theme === 'dark' || theme === 'light') {
										root.classList.remove('light', 'dark');
										root.classList.add(theme);
									}
								} catch (e) {
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
