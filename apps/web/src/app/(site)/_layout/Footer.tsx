import { footerInfo } from "@/constants/info";
import { learnLinks, workLinks } from "@/constants/links";
import clsx from "clsx";
import Link from "next/link";

import { FooterGithubLink } from "./FooterGithubLink";
import { FooterSocialLinks } from "./FooterSocialLinks";

import type { FC } from "react";

type FooterLinkProps = {
	title: string;
	href: string;
	label?: "new" | "soon";
	isInternal?: boolean;
};

const FooterLink: FC<FooterLinkProps> = ({
	title,
	href,
	label = undefined,
	isInternal = true
}) => {
	if (label === "soon") {
		return (
			<span className={clsx("footer-link footer-link--soon")}>
				{title}
				<span className={clsx("footer-link__label")}>{label}</span>
			</span>
		);
	}

	if (isInternal) {
		return (
			<Link href={href} className={clsx("footer-link")}>
				{title}
				{label && <span className={clsx("footer-link__label")}>{label}</span>}
			</Link>
		);
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer nofollow"
			className={clsx("footer-link")}
		>
			{title}
			{/* <ExternalLink className={clsx('h-3.5 w-3.5')} /> */}
			{label && <span className={clsx("footer-link__label")}>{label}</span>}
		</a>
	);
};

interface FooterGroupProps {
	title: string;
	links: Array<FooterLinkProps>;
}

const FooterGroup: FC<FooterGroupProps> = ({ title, links }) => (
	<div className={clsx("flex-1")}>
		<div
			className={clsx(
				"mb-2 px-2 text-[13px] text-slate-600",
				"dark:text-slate-400"
			)}
		>
			{title}
		</div>
		<ul className={clsx("flex flex-col")}>
			{links.map(({ title: linkTitle, href, label, isInternal }) => (
				<li key={href}>
					<FooterLink
						title={linkTitle}
						href={href}
						label={label}
						isInternal={isInternal}
					/>
				</li>
			))}
		</ul>
	</div>
);

const FooterDescription: FC = () => (
	<div className={clsx("max-w-[348px]")}>
		<div
			className={clsx("mb-3 text-[13px] text-slate-600", "dark:text-slate-400")}
		>
			Sobre Mim
		</div>
		<p className={clsx("mb-4 font-normal leading-relaxed")}>
			{footerInfo.aboutMe}
		</p>
		<FooterSocialLinks />
	</div>
);

const Footer: FC = () => (
	<footer
		className={clsx(
			"background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900",
			"dark:border-divider-dark dark:text-slate-200"
		)}
	>
		<div className={clsx("content-wrapper")}>
			<div className={clsx("py-10 font-semibold")}>
				<div className={clsx("flex flex-col-reverse gap-16", "lg:flex-row")}>
					<div className={clsx("flex-1")}>
						<FooterDescription />
					</div>
					<div
						className={clsx(
							"-mx-2 flex flex-1 flex-col gap-8",
							"sm:flex-row sm:gap-16 lg:mx-0"
						)}
					>
						<div className={clsx("flex", "sm:gap-16")}>
							<FooterGroup
								title="Profissional"
								links={workLinks.slice(0).reverse()}
							/>

							<FooterGroup
								title="Aprendizado"
								links={[
									{
										title: "Blog Pessoal",
										href: "/blog"
									},
									{
										title: "E.D.H",
										href: "/today-studies"
									}
								]}
							/>
						</div>

						<div className={clsx("flex", "sm:gap-16")}>
							<FooterGroup title="Este Site" links={learnLinks} />
						</div>
					</div>
				</div>
			</div>
			<div
				className={clsx(
					"border-divider-light flex justify-between border-t py-6 text-xs",
					"dark:border-divider-dark"
				)}
			>
				<div className={clsx("font-semibold")}>
					&copy; {new Date().getFullYear()}, Renan Zanoti
				</div>
				<div className={clsx("text-slate-500", "dark:text-slate-400")}>
					<FooterGithubLink />
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
