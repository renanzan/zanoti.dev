import { generateMetadata } from "@/helpers/seo";

import { Hero } from "./_ui/Hero/Hero";
import HighlightCards from "./_ui/Hero/HighlightCards";

export const metadata = generateMetadata({
	title: "Desenvolvedor Front-End",
	description:
		"Desenvolvedor Front-End especializado em migração de sistemas legados, design systems e liderança técnica. 5+ anos de experiência em React, TypeScript e Next.js.",
	path: "/"
});

const Home = () => (
	<>
		<Hero />

		<HighlightCards />
	</>
);

export default Home;
