import { Pre } from "@/components/content/Pre";

import type { ReactNode } from "react";

type CodeBlockProps = {
	language?: string;
	title?: string;
	children: ReactNode;
};

export function CodeBlock({ language = "", title, children }: CodeBlockProps) {
	return (
		<Pre data-language={language} data-title={title}>
			{children}
		</Pre>
	);
}
