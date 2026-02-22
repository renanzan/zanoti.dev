import PageHeader from "@/components/PageHeader";
import { extractTableOfContentsFromChildren } from "@/helpers/extractTableOfContents";
import clsx from "clsx";

import TableOfContents from "./TableOfContents";

import type { FC, PropsWithChildren } from "react";
import type { TTableOfContents } from "./TableOfContents";

export type TContentPageFrontMatter = {
	title: string;
	description: string;
	caption?: string;
};

interface ContentPageProps {
	frontMatter: TContentPageFrontMatter;
	tableOfContents?: TTableOfContents;
	hideTableOfContents?: boolean;
}

const ContentPage: FC<PropsWithChildren<ContentPageProps>> = ({
	frontMatter: { title, description, caption },
	tableOfContents: providedTableOfContents,
	hideTableOfContents = false,
	children
}) => {
	const tableOfContents =
		providedTableOfContents ?? extractTableOfContentsFromChildren(children);

	return (
		<>
			<PageHeader title={title} description={description} caption={caption} />

			<div
				className={clsx(
					"content-wrapper flex-shrink-0 overflow-hidden",
					"lg:overflow-visible"
				)}
			>
				<div className={clsx("flex flex-row-reverse gap-8", "xl:gap-24")}>
					<div className={clsx("-mt-48 hidden", "lg:block")}>
						<div
							className={clsx(
								"sticky top-24 z-[901] w-64",
								"xl:w-[272px]",
								"fm:relative fm:top-0"
							)}
						>
							{!hideTableOfContents && (
								<TableOfContents items={tableOfContents} />
							)}
						</div>
					</div>

					<div
						className={clsx("content-contents min-w-0 flex-1 scroll-mt-[86px]")}
						id="main-contents"
						data-ss-wrapper
					>
						{children}
					</div>
					<div
						className={clsx(
							"border-divider-light hidden border-l",
							" dark:border-divider-dark lg:block"
						)}
					/>
				</div>
			</div>
		</>
	);
};

export default ContentPage;
