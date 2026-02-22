"use client";

import { technologies } from "@/constants/preferences";
import clsx from "clsx";
import { m } from "framer-motion";

const animation = {
	hide: { x: -8, opacity: 0 },
	show: {
		x: 0,
		opacity: 1
	}
};

export const TechStack = () => (
	<div className={clsx("mt-20", "lg:mt-36")}>
		<m.p
			initial={animation.hide}
			animate={animation.show}
			transition={{ delay: 0.6 }}
		>
			<span
				className={clsx("mb-2.5 text-sm text-slate-600", "dark:text-slate-400")}
			>
				minhas ferramentas/tecnologias favoritas atualmente:
			</span>
		</m.p>

		<m.ul
			initial="hide"
			animate="show"
			transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
		>
			<div
				className={clsx(
					"flex items-center gap-3.5 text-slate-500",
					"dark:text-slate-500"
				)}
			>
				{technologies.map(({ title, icon: Icon, hover }) => (
					<m.li key={title} variants={animation}>
						<div className={clsx("transition duration-200", hover)}>
							<Icon className="h-6 w-6" />
						</div>
					</m.li>
				))}
			</div>
		</m.ul>
	</div>
);
