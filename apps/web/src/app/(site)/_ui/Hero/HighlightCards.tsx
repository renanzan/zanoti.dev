import { highlightCards } from "@/constants/info";
import clsx from "clsx";

import type { FC, ReactElement } from "react";

type CardProps = {
	icon: ReactElement;
	title: string;
	desc: string;
};

const Card: FC<CardProps> = ({ icon, title, desc }) => (
	<div
		className={clsx(
			"border-divider-light relative z-10 flex-1 rounded-2xl border bg-white",
			"dark:border-divider-dark dark:bg-slate-900"
		)}
	>
		<div
			className={clsx(
				"border-divider-light absolute inset-x-0 inset-y-8 z-[-1] border-t",
				"dark:border-divider-dark"
			)}
		/>
		<div
			className={clsx(
				"border-divider-light absolute inset-y-0 inset-x-8 z-[-1] border-l",
				"dark:border-divider-dark"
			)}
		/>
		<div className={clsx("-mt-0.5")}>
			<div
				className={clsx(
					"mt-4 mr-2 ml-4 flex items-center gap-6 rounded-full bg-slate-100",
					"dark:bg-slate-800"
				)}
			>
				<div className={clsx("-m-2")}>{icon}</div>
				<div
					className={clsx(
						"truncate py-2 pr-4 text-sm font-bold text-slate-700",
						"dark:text-slate-300"
					)}
				>
					{title}
				</div>
			</div>
		</div>
		<div
			className={clsx(
				"p-4 pl-12 text-sm whitespace-pre-line text-slate-600",
				"dark:text-slate-400"
			)}
		>
			{desc}
		</div>
	</div>
);

const HighlightCards = () => (
	<section className={clsx("hidden", "lg:-mt-16 lg:mb-24 lg:block")}>
		<div className={clsx("content-wrapper")}>
			<div className={clsx("flex flex-col gap-4", "lg:flex-row lg:gap-8")}>
				{highlightCards.map(({ icon, title, desc }, index) => (
					<Card
						key={index}
						icon={
							<div className={clsx("rounded-full p-3.5", icon.className)}>
								<icon.Component className={clsx("h-5 w-5 text-white")} />
							</div>
						}
						title={title}
						desc={desc}
					/>
				))}
			</div>
		</div>
	</section>
);

export default HighlightCards;
