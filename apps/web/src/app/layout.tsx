import "@/styles/main.css";

import { generateMetadata, generateStructuredData } from "@/helpers/seo";
import { Inter } from "next/font/google";

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
		<html lang="pt-BR">
			<body className={inter.className}>
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
