import FileIcon from "@/public/icons/file.svg";
import CssIcon from "@/public/icons/tech/css.svg";
import HtmlIcon from "@/public/icons/tech/html.svg";
import JavaScriptIcon from "@/public/icons/tech/javascript.svg";
import NpmFileIcon from "@/public/icons/tech/npm-file.svg";
import NpmIcon from "@/public/icons/tech/npm.svg";
import PnpmIcon from "@/public/icons/tech/pnpm.svg";
import ReactIcon from "@/public/icons/tech/react.svg";
import TailwindIcon from "@/public/icons/tech/tailwind.svg";
import TypeScriptIcon from "@/public/icons/tech/typescript.svg";
import YarnIcon from "@/public/icons/tech/yarn.svg";

import type { ReactNode } from "react";

/**
 * Formata a linguagem de código e retorna o nome formatado e o ícone correspondente.
 */
export const formatLang = (
	lang: string,
	title?: string
): {
	language: string;
	icon: ReactNode;
} => {
	let language = lang;
	let icon = <FileIcon />;

	switch (lang) {
		case "js":
		case "javascript":
			language = "JavaScript";
			icon = <JavaScriptIcon />;
			break;
		case "ts":
		case "typescript":
			language = "TypeScript";
			icon = <TypeScriptIcon />;
			break;
		case "jsx":
			language = "JavaScript React";
			icon = <ReactIcon />;
			break;
		case "tsx":
			language = "TypeScript React";
			icon = <ReactIcon />;
			break;
		case "html":
			language = "HTML";
			icon = <HtmlIcon />;
			break;
		case "css":
			language = "CSS";
			icon = <CssIcon />;
			break;
		case "bash":
		case "cmd":
			language = "Terminal";
			break;
		case "json":
			language = "JSON";
			break;
		case "":
			language = "Plain Text";
			break;
		default:
			break;
	}

	switch (title) {
		case "tailwind.config.js":
			icon = <TailwindIcon />;
			break;
		case "package.json":
			icon = <NpmFileIcon />;
			break;
		case "npm":
			icon = <NpmIcon />;
			break;
		case "pnpm":
			icon = <PnpmIcon />;
			break;
		case "yarn":
			icon = <YarnIcon />;
			break;
		default:
			break;
	}

	return { language, icon };
};
