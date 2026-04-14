"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import posthog from "posthog-js";

import type { FC, PropsWithChildren } from "react";

type QuickAccessContextType = {
	isOpen: boolean;
	setOpen: (isOpen: boolean) => void;
};

const QuickAccessContext = createContext({} as QuickAccessContextType);

const QuickAccessProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setOpen] = useState(false);

	// Adicionar atalho de teclado para abrir o Acesso Rápido
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// Só ativar se não estiver digitando em um input/textarea
			if (
				event.key === "q" &&
				!event.ctrlKey &&
				!event.metaKey &&
				!event.altKey &&
				!event.shiftKey &&
				!["INPUT", "TEXTAREA"].includes((event.target as HTMLElement)?.tagName)
			) {
				event.preventDefault();
				setOpen(true);
				posthog.capture("quick_access_opened", {
					trigger: "keyboard_shortcut"
				});
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const value = useMemo(() => ({ isOpen, setOpen }), [isOpen]);

	return (
		<QuickAccessContext.Provider value={value}>
			{children}
		</QuickAccessContext.Provider>
	);
};

const useQuickAccess = () => useContext(QuickAccessContext);

export { QuickAccessProvider, useQuickAccess };
