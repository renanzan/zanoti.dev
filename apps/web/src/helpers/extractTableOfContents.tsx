import { H2, H3 } from "@/components/content/Heading";
import { extractTextFromReactNode, getSlug } from "@/utils/react";

import type { ReactNode } from "react";
import type { TTableOfContents } from "@/components/TableOfContents";

/**
 * Extrai o Table of Contents analisando os children React no servidor.
 * Percorre a árvore de componentes procurando por H2 e H3.
 */
export const extractTableOfContentsFromChildren = (
	children: ReactNode
): TTableOfContents => {
	const toc: TTableOfContents = [];

	const traverse = (node: ReactNode): void => {
		if (!node || typeof node !== "object") return;

		if (Array.isArray(node)) {
			node.forEach(traverse);
			return;
		}

		// Verifica se é H2 ou H3 comparando a referência do componente
		if ("type" in node && (node.type === H2 || node.type === H3)) {
			const props = (node as { props?: { children?: ReactNode } }).props;
			const title = props?.children
				? extractTextFromReactNode(props.children).trim()
				: "";

			if (title) {
				toc.push({
					title,
					slug: getSlug(props?.children),
					depth: node.type === H2 ? 1 : 2
				});
			}
		}

		// Percorre children recursivamente
		if ("props" in node && node.props) {
			const props = node.props as { children?: ReactNode };
			if (props.children) traverse(props.children);
		}
	};

	traverse(children);
	return toc;
};
