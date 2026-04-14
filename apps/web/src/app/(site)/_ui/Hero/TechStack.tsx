"use client";

import clsx from "clsx";
import { m } from "framer-motion";
import { technologies } from "@/constants/preferences";

const animation = {
	hide: { x: -8, opacity: 0 },
	show: {
		x: 0,
		opacity: 1
	}
};

export const TechStack = () => (
	<div className={clsx("mt-8", "sm:mt-12", "md:mt-16", "lg:mt-36")}>
		<m.p
			initial={animation.hide}
			animate={animation.show}
			transition={{ delay: 0.6 }}
		>
			<span
				className={clsx(
					"block mb-2 text-xs text-slate-600",
					"sm:text-sm",
					"dark:text-slate-400"
				)}
			>
				tecnologias que utilizo para estruturar aplicações escaláveis:
			</span>
		</m.p>

		<m.ul
			initial="hide"
			animate="show"
			transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
		>
			<div
				className={clsx(
					"flex items-center gap-2.5 text-slate-500",
					"sm:gap-3.5",
					"dark:text-slate-500"
				)}
			>
				{technologies.map(({ title, icon: Icon, hover }) => (
					<m.li key={title} variants={animation}>
						<div className={clsx("transition duration-200", hover)}>
							<Icon className="h-5 w-5 sm:h-6 sm:w-6" />
						</div>
					</m.li>
				))}
			</div>
		</m.ul>
	</div>
);
