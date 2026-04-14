"use client";

import { createContext, useContext, useEffect, useState } from "react";

import type { FC, PropsWithChildren } from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	resolvedTheme: "light" | "dark";
};

const ThemeContext = createContext({} as ThemeContextType);

// Helper para calcular o tema resolvido
const getResolvedTheme = (theme: Theme): "light" | "dark" => {
	if (theme === "system") {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	return theme;
};

// Helper para aplicar tema no DOM
const applyTheme = (theme: "light" | "dark") => {
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(theme);
};

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("system");
	const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
	const [mounted, setMounted] = useState(false);

	// Sincronizar com o tema já aplicado pelo script inline
	useEffect(() => {
		const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
		if (["light", "dark", "system"].includes(savedTheme)) {
			setTheme(savedTheme);
		}
		
		// Ler o tema já aplicado pelo script inline
		const root = document.documentElement;
		const currentTheme = root.classList.contains("dark") ? "dark" : "light";
		setResolvedTheme(currentTheme);
		setMounted(true);
	}, []);

	// Aplicar tema quando mudar
	useEffect(() => {
		if (!mounted) return;
		
		const actualTheme = getResolvedTheme(theme);
		applyTheme(actualTheme);
		setResolvedTheme(actualTheme);
		localStorage.setItem("theme", theme);
	}, [theme, mounted]);

	// Escutar mudanças na preferência do sistema
	useEffect(() => {
		if (theme !== "system" || !mounted) return;
		
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => {
			const actualTheme = getResolvedTheme("system");
			applyTheme(actualTheme);
			setResolvedTheme(actualTheme);
		};
		
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme, mounted]);

	const value = {
		theme,
		setTheme,
		resolvedTheme,
	};

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
	}
	return context;
};

export { ThemeProvider, useTheme };

