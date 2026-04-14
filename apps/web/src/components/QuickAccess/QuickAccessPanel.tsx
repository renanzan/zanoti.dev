"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { getSearchItemIcon, searchItemsByQuery } from "@/constants/search";

import { useQuickAccess } from "./QuickAccessContext";

function QuickAccessPanel() {
	const { isOpen, setOpen } = useQuickAccess();
	const panelRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();
	const [query, setQuery] = useState("");

	const searchResults = useMemo(() => {
		return searchItemsByQuery(query);
	}, [query]);

	// Focar no input quando abrir
	useEffect(() => {
		if (isOpen && inputRef.current) {
			setTimeout(() => {
				inputRef.current?.focus();
			}, 100);
		} else {
			setQuery("");
		}
	}, [isOpen]);

	// Fechar o painel quando clicar fora dele
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				panelRef.current &&
				!panelRef.current.contains(event.target as Node)
			) {
				setOpen(false);
				setQuery("");
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, setOpen]);

	// Fechar o painel com a tecla Escape e navegação com setas
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
				setQuery("");
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, setOpen]);

	const handleItemClick = (
		href: string,
		itemTitle?: string,
		source?: string
	) => {
		posthog.capture("quick_access_item_selected", {
			destination: href,
			item_title: itemTitle,
			source: source ?? "quick_links"
		});
		setOpen(false);
		setQuery("");
		router.push(href);
	};

	const handleSearchChange = (value: string) => {
		setQuery(value);
		if (value.trim().length >= 2) {
			posthog.capture("quick_access_search_performed", {
				query: value.trim(),
				results_count: searchItemsByQuery(value).length
			});
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20">
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

			{/* Panel */}
			<div
				ref={panelRef}
				className={clsx(
					"relative z-[10000] w-full max-w-md mx-4 rounded-2xl bg-white shadow-2xl",
					"dark:bg-slate-800",
					"animate-in fade-in-0 zoom-in-95 duration-200"
				)}
			>
				{/* Header */}
				<div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
					<h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
						Acesso Rápido
					</h2>
					<button
						onClick={() => setOpen(false)}
						className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
						aria-label="Fechar Acesso Rápido"
					>
						<svg
							className="w-5 h-5 text-slate-500 dark:text-slate-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				{/* Content */}
				<div className="p-6">
					<div className="space-y-4">
						{/* Search */}
						<div className="relative">
							<input
								ref={inputRef}
								type="text"
								placeholder="Buscar projetos, empresas, páginas..."
								value={query}
								onChange={(e) => handleSearchChange(e.target.value)}
								className={clsx(
									"w-full px-4 py-3 pl-10 rounded-xl border border-slate-200",
									"bg-slate-50 text-slate-900 placeholder-slate-500",
									"dark:border-slate-700 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400",
									"focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
								)}
								autoFocus
							/>
							<svg
								className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>

						{/* Search Results */}
						{query.trim() && (
							<div className="space-y-2 max-h-96 overflow-y-auto">
								{searchResults.length > 0 ? (
									<>
										<div className="text-xs font-medium text-slate-500 dark:text-slate-400 px-2">
											{searchResults.length} resultado
											{searchResults.length !== 1 ? "s" : ""} encontrado
											{searchResults.length !== 1 ? "s" : ""}
										</div>
										<div className="space-y-1">
											{searchResults.map((item) => (
												<button
													key={item.id}
													onClick={() =>
														handleItemClick(
															item.href,
															item.title,
															"search_results"
														)
													}
													className={clsx(
														"w-full text-left p-3 rounded-lg transition-colors",
														"hover:bg-slate-100 dark:hover:bg-slate-700",
														"border border-transparent hover:border-slate-200 dark:hover:border-slate-600"
													)}
												>
													<div className="flex items-start gap-3">
														<span className="text-lg flex-shrink-0">
															{getSearchItemIcon(item.type)}
														</span>
														<div className="flex-1 min-w-0">
															<div className="flex items-center gap-2 mb-1">
																<span className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
																	{item.title}
																</span>
																{item.category && (
																	<span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex-shrink-0">
																		{item.category}
																	</span>
																)}
															</div>
															<div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
																{item.description}
															</div>
														</div>
													</div>
												</button>
											))}
										</div>
									</>
								) : (
									<div className="text-center py-8 text-slate-500 dark:text-slate-400">
										<div className="text-sm">Nenhum resultado encontrado</div>
										<div className="text-xs mt-1">
											Tente buscar por projetos, empresas ou páginas
										</div>
									</div>
								)}
							</div>
						)}

						{/* Quick Links - Mostrar apenas quando não há busca */}
						{!query.trim() && (
							<>
								<div className="space-y-2">
									<h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">
										Links Rápidos
									</h3>
									<div className="grid grid-cols-2 gap-2">
										<button
											onClick={() => handleItemClick("/", "Início")}
											className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-left"
										>
											<div className="text-sm font-medium text-slate-900 dark:text-slate-100">
												Início
											</div>
											<div className="text-xs text-slate-500 dark:text-slate-400">
												Página principal
											</div>
										</button>
										<button
											onClick={() => handleItemClick("/about", "Sobre")}
											className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-left"
										>
											<div className="text-sm font-medium text-slate-900 dark:text-slate-100">
												Sobre
											</div>
											<div className="text-xs text-slate-500 dark:text-slate-400">
												Quem sou eu
											</div>
										</button>
										<button
											onClick={() => handleItemClick("/projects", "Projetos")}
											className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-left"
										>
											<div className="text-sm font-medium text-slate-900 dark:text-slate-100">
												Projetos
											</div>
											<div className="text-xs text-slate-500 dark:text-slate-400">
												Meu portfólio
											</div>
										</button>
										<button
											onClick={() => handleItemClick("/blog", "Blog")}
											className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-left"
										>
											<div className="text-sm font-medium text-slate-900 dark:text-slate-100">
												Blog
											</div>
											<div className="text-xs text-slate-500 dark:text-slate-400">
												Artigos e posts
											</div>
										</button>
										<button
											onClick={() =>
												handleItemClick("/work/experience", "Experiência")
											}
											className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-left"
										>
											<div className="text-sm font-medium text-slate-900 dark:text-slate-100">
												Experiência
											</div>
											<div className="text-xs text-slate-500 dark:text-slate-400">
												Minha trajetória
											</div>
										</button>
										<button
											onClick={() =>
												handleItemClick("/work/skills", "Habilidades")
											}
											className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-left"
										>
											<div className="text-sm font-medium text-slate-900 dark:text-slate-100">
												Habilidades
											</div>
											<div className="text-xs text-slate-500 dark:text-slate-400">
												Tecnologias
											</div>
										</button>
										<button
											onClick={() =>
												handleItemClick("/work/contact", "Contato")
											}
											className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-left"
										>
											<div className="text-sm font-medium text-slate-900 dark:text-slate-100">
												Contato
											</div>
											<div className="text-xs text-slate-500 dark:text-slate-400">
												Entre em contato
											</div>
										</button>
										<button
											onClick={() => handleItemClick("/today-studies", "E.D.H")}
											className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-left"
										>
											<div className="text-sm font-medium text-slate-900 dark:text-slate-100">
												E.D.H
											</div>
											<div className="text-xs text-slate-500 dark:text-slate-400">
												Estudos de Hoje
											</div>
										</button>
									</div>
								</div>

								{/* Keyboard Shortcuts - Apenas em desktop */}
								<div className="hidden md:block space-y-2">
									<h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">
										Atalhos de Teclado
									</h3>
									<div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
										<div className="flex items-center justify-between">
											<span>Fechar painel</span>
											<kbd className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">
												Esc
											</kbd>
										</div>
										<div className="flex items-center justify-between">
											<span>Abrir Acesso Rápido</span>
											<kbd className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">
												Q
											</kbd>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuickAccessPanel;
