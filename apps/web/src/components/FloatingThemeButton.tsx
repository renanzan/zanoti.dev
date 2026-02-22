"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { useTheme } from "@/contexts/ThemeContext";
import posthog from "posthog-js";

type Theme = "light" | "dark" | "system";

function FloatingThemeButton() {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	// Evitar hidratação mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	// Fechar dropdown quando clicar fora
	useEffect(() => {
		const handleClickOutside = () => {
			setIsOpen(false);
		};

		if (isOpen) {
			document.addEventListener("click", handleClickOutside);
		}

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen]);

	if (!mounted) {
		return (
			<div className="fixed bottom-6 right-6 z-50">
				<div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
			</div>
		);
	}

	const themes: { value: Theme; label: string; icon: string; description: string }[] = [
		{ value: "light", label: "Claro", icon: "☀️", description: "Tema claro" },
		{ value: "dark", label: "Escuro", icon: "🌙", description: "Tema escuro" },
		{ value: "system", label: "Sistema", icon: "💻", description: "Segue o sistema" },
	];

	const currentTheme = themes.find(t => t.value === theme) ?? themes[2]!;

	return (
		<div className="fixed bottom-6 right-6 z-50">
			{/* Dropdown */}
			{isOpen && (
				<div className="absolute bottom-16 right-0 mb-2 w-48 rounded-2xl bg-white shadow-2xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700 animate-in fade-in-0 zoom-in-95 duration-200">
					<div className="flex flex-col gap-1 p-2">
						{themes.map(({ value, label, icon, description }) => (
							<button
								key={value}
								onClick={() => {
									posthog.capture("theme_changed", { theme: value, previous_theme: theme });
									setTheme(value);
									setIsOpen(false);
								}}
								className={clsx(
									"w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
									theme === value
										? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100"
										: "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100"
								)}
							>
								<span className="text-lg">{icon}</span>
								<div className="flex flex-col items-start">
									<span className="font-medium">{label}</span>
									<span className="text-xs opacity-70">{description}</span>
								</div>
								{theme === value && (
									<div className="ml-auto">
										<svg className="w-4 h-4 text-slate-600 dark:text-slate-400" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
										</svg>
									</div>
								)}
							</button>
						))}
					</div>
				</div>
			)}

			{/* Botão Principal */}
			<button
				onClick={(e) => {
					e.stopPropagation();
					setIsOpen(!isOpen);
				}}
				className={clsx(
					"group relative h-12 w-12 rounded-full shadow-lg transition-all duration-300",
					"bg-white dark:bg-slate-800",
					"border border-slate-200 dark:border-slate-700",
					"hover:shadow-xl hover:scale-105",
					"active:scale-95",
					"focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
				)}
				aria-label={`Alterar tema (atual: ${currentTheme.label})`}
				title={`Alterar tema (atual: ${currentTheme.label})`}
			>
				{/* Ícone do tema atual */}
				<div className="flex items-center justify-center h-full w-full">
					<span className="text-xl transition-transform duration-300 group-hover:scale-110">
						{currentTheme.icon}
					</span>
				</div>

				{/* Indicador de status */}
				<div className={clsx(
					"absolute -top-1 -right-1 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900",
					resolvedTheme === "dark" ? "bg-slate-600" : "bg-yellow-400"
				)} />

				{/* Efeito de hover */}
				<div className={clsx(
					"absolute inset-0 rounded-full opacity-0 transition-opacity duration-300",
					"bg-gradient-to-r from-violet-500 to-purple-600",
					"group-hover:opacity-10"
				)} />
			</button>
		</div>
	);
}

export default FloatingThemeButton;
