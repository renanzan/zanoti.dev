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

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("system");
	const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
	const [mounted, setMounted] = useState(false);

	// Carregar tema salvo do localStorage e aplicar imediatamente
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as Theme;
		if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
			setTheme(savedTheme);
		}
		
		// Aplicar tema imediatamente para evitar flicker
		const root = document.documentElement;
		root.classList.remove("light", "dark");
		
		let initialTheme: "light" | "dark";
		if (savedTheme === "system" || !savedTheme) {
			const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			initialTheme = systemPrefersDark ? "dark" : "light";
		} else {
			initialTheme = savedTheme;
		}
		
		root.classList.add(initialTheme);
		setResolvedTheme(initialTheme);
		setMounted(true);
	}, []);

	// Aplicar tema ao documento
	useEffect(() => {
		if (!mounted) return;
		
		const root = document.documentElement;
		
		// Remover classes anteriores
		root.classList.remove("light", "dark");
		
		let actualTheme: "light" | "dark";
		
		if (theme === "system") {
			// Detectar preferência do sistema
			const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			actualTheme = systemPrefersDark ? "dark" : "light";
		} else {
			actualTheme = theme;
		}
		
		// Aplicar classe ao documento
		root.classList.add(actualTheme);
		setResolvedTheme(actualTheme);
		
		// Debug log
		console.log(`Tema aplicado: ${actualTheme} (configuração: ${theme})`);
		
		// Salvar no localStorage
		localStorage.setItem("theme", theme);
	}, [theme, mounted]);

	// Escutar mudanças na preferência do sistema
	useEffect(() => {
		if (theme === "system") {
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			
			const handleChange = () => {
				const root = document.documentElement;
				root.classList.remove("light", "dark");
				
				const actualTheme = mediaQuery.matches ? "dark" : "light";
				root.classList.add(actualTheme);
				setResolvedTheme(actualTheme);
			};
			
			mediaQuery.addEventListener("change", handleChange);
			return () => mediaQuery.removeEventListener("change", handleChange);
		}
		return undefined;
	}, [theme]);

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

