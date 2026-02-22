import { slugify } from "@/utils/slug";

import type { ReactNode } from "react";

/**
 * Extrai recursivamente todo o texto de um ReactNode.
 * Útil para extrair texto de headings que podem conter links ou outros elementos inline.
 */
export const extractTextFromReactNode = (node: ReactNode): string => {
	if (typeof node === "string") {
		return node;
	}

	if (typeof node === "number") {
		return String(node);
	}

	if (Array.isArray(node)) {
		return node.map((child) => extractTextFromReactNode(child)).join("");
	}

	if (node && typeof node === "object" && "props" in node && node.props) {
		// Se é um elemento React, extrai o texto dos children
		const props = node.props as { children?: ReactNode };
		if (props.children) {
			return extractTextFromReactNode(props.children);
		}
	}

	return "";
};

/**
 * Gera um slug a partir do conteúdo de um ReactNode.
 */
export const getSlug = (children: ReactNode) => {
	const text = extractTextFromReactNode(children);
	return text ? slugify(text) : "";
};
