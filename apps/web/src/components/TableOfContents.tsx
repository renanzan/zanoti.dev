"use client";

import { useOnScroll } from "@/hooks/useOnScroll";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import clsx from "clsx";
import { m } from "framer-motion";

import type { FC, MouseEvent } from "react";

export type TTableOfContentsItem = {
	title: string;
	depth: number;
	slug: string;
};

export type TTableOfContents = Array<TTableOfContentsItem>;

interface TableOfContentsLinkProps extends TTableOfContentsItem {
	active?: boolean;
}

function TableOfContentsLink({
	title,
	depth,
	slug,
	active = false
}: TableOfContentsLinkProps) {
	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		const element = document.getElementById(slug);
		if (element) {
			const headerOffset = 96; // Mesmo valor usado em data-ss-mt
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});

			// Atualiza a URL sem recarregar a página
			window.history.pushState(null, "", `#${slug}`);
		}
	};

	return (
		<a
			className={clsx("toc-link", {
				"toc-link--depth-2": depth === 2,
				"toc-link--active": active
			})}
			href={`#${slug}`}
			onClick={handleClick}
		>
			{title}
		</a>
	);
}

type TableOfContensProps = {
	items: Array<TTableOfContentsItem>;
};

const TableOfContents: FC<TableOfContensProps> = ({ items = [] }) => {
	const isScrolled = useOnScroll(200);
	const { currentVisibles } = useScrollSpy();

	const handleScrollToTopClick = () => {
		window.scrollTo({ top: 0 });
	};

	return (
		<nav
			aria-label="Page table of contents"
			className={clsx(
				"border-divider-light rounded-xl border bg-white",
				"dark:border-divider-dark dark:bg-[#161e31]"
			)}
		>
			<div
				className={clsx(
					"border-divider-light flex items-center justify-between border-b py-3 px-5 text-sm font-bold",
					"dark:border-divider-dark"
				)}
			>
				<h2
					className={clsx("text-slate-700", "dark:text-slate-300")}
					id="table-of-contents"
				>
					Índice
					<span className={clsx("lg:hidden", "xl:inline")}> de Conteúdos</span>
				</h2>
				<m.div
					initial={{ x: 16, opacity: 0 }}
					animate={isScrolled ? { x: 0, opacity: 1 } : { x: 16, opacity: 0 }}
				>
					<div>
						<a
							href="#skip-navigation"
							className={clsx(
								"border-divider-light text-accent-700 flex h-6 cursor-pointer items-center rounded-full border px-2 text-xs font-normal",
								"dark:border-divider-dark dark:text-accent-400"
							)}
							tabIndex={isScrolled ? 0 : -1}
							onClick={handleScrollToTopClick}
						>
							início
						</a>
					</div>
				</m.div>
			</div>

			<div className={clsx("relative p-3 py-4")}>
				<ol className={clsx("toc flex flex-col gap-2")}>
					{items.map(({ title, depth, slug }, index) => {
						const isActive = currentVisibles && currentVisibles[slug];
						// Usa slug como chave, ou índice como fallback se slug estiver vazio
						const key = slug || `toc-item-${index}`;

						return (
							<li key={key}>
								<TableOfContentsLink
									title={title}
									depth={depth}
									slug={slug}
									active={isActive}
								/>
								{isActive && <div className={clsx("toc-visible")} />}
							</li>
						);
					})}
				</ol>
			</div>
		</nav>
	);
};

export default TableOfContents;
