"use client";

import DocumentIcon from "@/public/icons/document.svg";
import clsx from "clsx";
import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import posthog from "posthog-js";

import type { FC } from "react";

const commonAnimation = {
	hide: {
		x: -16,
		opacity: 0
	},
	show: {
		x: 0,
		opacity: 1
	}
};

type HeroCtaProps = {
	isFree?: boolean;
	isFreeAnimationDuration?: number;
};

const ButtonContactMe = () => (
	<Link
		href="/work/contact"
		className={clsx(
			"button button--solid min-w-[120px] text-xs",
			"sm:min-w-[128px] sm:text-sm",
			"md:button--big"
		)}
		onClick={() =>
			posthog.capture("contact_cta_clicked", { location: "hero_header" })
		}
	>
		Entrar em contato
	</Link>
);

const ButtonResume = () => (
	<a
		target="_blank"
		rel="noreferrer nofollow"
		href="/documents/curriculo.pdf"
		className={clsx(
			"button button--ghost px-2 text-[10px]",
			"sm:text-xs",
			"md:button--big md:text-sm md:px-2"
		)}
		onClick={() =>
			posthog.capture("resume_link_clicked", {
				destination: "/documents/curriculo.pdf",
				location: "hero_header"
			})
		}
	>
		<DocumentIcon className={clsx("h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5")} />
		<span className="whitespace-nowrap">CURRICULO.pdf</span>
	</a>
);

const AvailableForHire = () => (
	<div
		className={clsx(
			"button button--ghost text-accent-500 pointer-events-none gap-2 px-2 text-[10px] leading-tight",
			"sm:text-xs sm:gap-2.5 sm:px-2.5",
			"md:button--big md:text-sm md:px-2.5",
			"dark:text-accent-400"
		)}
	>
		<span className="relative flex h-2 w-2 flex-shrink-0">
			<span
				className={clsx(
					"bg-accent-600 absolute -top-1 -left-1 inline-flex h-4 w-4 animate-ping rounded-full opacity-75",
					"dark:bg-accent-300"
				)}
			/>

			<span
				className={clsx(
					"bg-accent-500 relative inline-flex h-2 w-2 rounded-full",
					"dark:bg-accent-400"
				)}
			/>
		</span>
		<span className="whitespace-nowrap">DISPONÍVEL PARA CONTRATAÇÃO</span>
	</div>
);

export const HeroCta: FC<HeroCtaProps> = ({
	isFree = true,
	isFreeAnimationDuration = 4
}) => {
	const shouldReduceMotion = useReducedMotion();

	let isFreeVariants = {
		hide: {
			x: 0,
			opacity: 1
		},
		show: {
			x: -48,
			opacity: 0
		}
	};

	if (shouldReduceMotion) {
		isFreeVariants = {
			hide: {
				x: 0,
				opacity: 1
			},
			show: {
				x: 0,
				opacity: 0
			}
		};
	}

	return (
		<m.div initial="hide" animate="show">
			<div
				className={clsx(
					"flex flex-col gap-2 mt-4",
					"sm:flex-row sm:gap-2 sm:mt-6",
					"md:mt-8"
				)}
			>
				<m.div variants={commonAnimation} transition={{ delay: 0.4 }}>
					<div className="relative z-20">
						<ButtonContactMe />
					</div>
				</m.div>
				{isFree ? (
					<m.div variants={commonAnimation} transition={{ delay: 2.8 }}>
						<div className="relative z-10">
							{/* Em mobile, mostra o badge e depois o botão com animação */}
							<div className="relative sm:hidden">
								{/* Elemento invisível para manter o espaço do container */}
								<div className="invisible">
									<AvailableForHire />
								</div>

								<m.div
									initial={{ opacity: 1, y: 0 }}
									animate={{ opacity: 0, y: -8 }}
									transition={{
										delay: isFreeAnimationDuration + 1.5,
										duration: 0.4
									}}
									className="absolute top-0 left-0 w-full"
								>
									<AvailableForHire />
								</m.div>

								<m.div
									initial={{ opacity: 0, y: 8, pointerEvents: "none" }}
									animate={{ opacity: 1, y: 0, pointerEvents: "auto" }}
									transition={{
										delay: isFreeAnimationDuration + 1.6,
										duration: 0.4
									}}
									className="absolute top-0 left-0 w-full"
								>
									<ButtonResume />
								</m.div>
							</div>
							{/* Em telas maiores, mantém a animação original */}
							<div className="hidden sm:block">
								{/* Elemento invisível para manter o espaço do container */}
								<div className="invisible">
									<AvailableForHire />
								</div>

								<m.div
									variants={isFreeVariants}
									transition={{
										delay: isFreeAnimationDuration + 1.5,
										duration: 0.4
									}}
									className="absolute top-0 left-0"
								>
									<AvailableForHire />
								</m.div>

								<m.div
									initial={{ x: -48, opacity: 0, pointerEvents: "none" }}
									animate={{ x: 0, opacity: 1, pointerEvents: "auto" }}
									transition={{
										delay: isFreeAnimationDuration + 1.6,
										duration: 0.4
									}}
									className="absolute top-0 left-0"
								>
									<ButtonResume />
								</m.div>
							</div>
						</div>
					</m.div>
				) : (
					<m.div variants={commonAnimation} transition={{ delay: 0.5 }}>
						<ButtonResume />
					</m.div>
				)}
			</div>
		</m.div>
	);
};
