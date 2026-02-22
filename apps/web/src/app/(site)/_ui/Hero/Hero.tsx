import clsx from "clsx";

import { AsideImage } from "./AsideImage";
import { HeroCta } from "./HeroCta";
import { HeroTitle } from "./HeroTitle";
import { TechStack } from "./TechStack";

export const Hero = () => (
	<header
		id="page-hero"
		className={clsx(
			"background-grid background-grid--fade-out pt-36 pb-20",
			"lg:pb-28 lg:pt-52"
		)}
	>
		<div className="relative content-wrapper">
			<HeroTitle />

			<HeroCta />

			<TechStack />

			<AsideImage />
		</div>
	</header>
);
