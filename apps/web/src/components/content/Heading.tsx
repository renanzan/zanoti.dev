import HashtagIcon from "@/public/icons/hashtag.svg";
import { getSlug } from "@/utils/react";
import clsx from "clsx";

import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<
	HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>;

export function H2({ children }: Props) {
	const slug = getSlug(children);

	return (
		<h2
			id={slug}
			data-ss={slug}
			data-ss-mt={96}
			className={clsx("content-heading content-heading--h2 group")}
		>
			<a
				href={`#${slug}`}
				className={clsx("content-heading__anchor")}
				aria-labelledby={slug}
				title={`Link to ${children}`}
			>
				<HashtagIcon />
			</a>
			<span>{children}</span>
		</h2>
	);
}

export function H3({ children }: Props) {
	const slug = getSlug(children);

	return (
		<h3
			id={slug}
			data-ss={slug}
			data-ss-mt={96}
			className={clsx("content-heading content-heading--h3 group")}
		>
			<a
				href={`#${slug}`}
				className={clsx("content-heading__anchor")}
				aria-labelledby={slug}
			>
				<HashtagIcon />
			</a>
			<span>{children}</span>
		</h3>
	);
}
