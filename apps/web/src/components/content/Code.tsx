"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import ClipboardIcon from "@/public/icons/clipboard.svg";

import type { PropsWithChildren } from "react";

interface CodeFooterProps {
	lines?: number;
	language?: string;
	selected?: string;
}

function CodeFooter({
	lines = 0,
	language = "",
	selected = ""
}: CodeFooterProps) {
	return (
		<div className={clsx("content-code__footer")}>
			{selected && (
				<div className={clsx("content-code__footer-item")}>
					Selected: {selected}
				</div>
			)}
			{language && (
				<div className={clsx("content-code__footer-item")}>{language}</div>
			)}
			{lines && (
				<div className={clsx("content-code__footer-item", "hidden sm:flex")}>
					Lines: {lines}
				</div>
			)}
			<div className={clsx("content-code__footer-item")}>UTF-8</div>
		</div>
	);
}

export type CodeProps = CodeFooterProps & {
	withCopyButton?: boolean;
	withFooter?: boolean;
};

function Code({
	lines = 0,
	language = "",
	selected = "",
	withCopyButton = true,
	withFooter = true,
	children = null
}: PropsWithChildren<CodeProps>) {
	const codeRef = useRef<HTMLPreElement>(null);
	const [isCopied, setCopied] = useState<boolean>(false);

	const copyToClipboard = async () => {
		if (codeRef.current === null) return;

		try {
			const content = codeRef.current.textContent || "";
			await navigator.clipboard.writeText(content);

			if (!isCopied) {
				setCopied(true);
				setTimeout(() => setCopied(false), 1000);
			}
		} catch (err) {
			setCopied(false);
		}
	};

	return (
		<div className={clsx("content-code")}>
			{withCopyButton && (
				<button
					type="button"
					className={clsx("content-code__copy-button")}
					onClick={copyToClipboard}
					title="Copy to Clipboard"
					aria-label="Copy to Clipboard"
				>
					<div
						className={clsx("content-code__copy-button-message", [
							isCopied ? "content-code__copy-button-message-copied" : ""
						])}
					>
						Copied!
					</div>
					<ClipboardIcon />
				</button>
			)}
			<div className={clsx("content-code__content")}>
				<pre ref={codeRef}>{children}</pre>
			</div>
			{withFooter && (
				<CodeFooter lines={lines} selected={selected} language={language} />
			)}
		</div>
	);
}

export default Code;
