"use client";

import QuickAccessButton from "@/components/QuickAccess/QuickAccessButton";
import { pageLinks, socialLinks, workLinks } from "@/constants/links";
import { useOnScroll } from "@/hooks/useOnScroll";
import Logo from "@/public/icons/logo.svg";
import clsx from "clsx";
import Link from "next/link";

import { NavIcon } from "./NavIcon";
import { NavLinkDropdown } from "./NavLinkDropdown";
import { NavLinkExpanded } from "./NavLinkExpanded";

export const Navbar = () => {
	const isScrolled = useOnScroll(0);

	return (
		<header
			className={clsx("fixed top-0 right-0 left-0 z-[1000]", "fm:absolute")}
		>
			<div
				className={clsx(
					"fixed inset-0 h-16",
					[
						isScrolled === true && [
							"border-divider-light border-b bg-white/70 backdrop-blur",
							"dark:border-divider-dark dark:bg-slate-900/80"
						]
					],
					"fm:hidden"
				)}
			/>
			<div className={clsx("h-2", [isScrolled === true && ["-mt-2"]])} />
			<div className={clsx("content-wrapper-max")}>
				<div
					className={clsx(
						"relative z-50 flex h-16 items-center justify-between px-2 text-sm",
						"md:px-4"
					)}
				>
					<nav className={clsx("flex", "md:gap-2")} data-accent="violet">
						<Link
							href="/"
							className="flex h-9 items-center gap-2 rounded-xl px-2"
							aria-label="Home"
						>
							<Logo className="text-slate-700 dark:text-accent-400/40" />
						</Link>

						<ul className={clsx("flex items-center", "md:gap-1")}>
							{pageLinks.map(({ title, href }) => (
								<li key={title}>
									<Link key={title} href={href} className="nav-link">
										{title}
									</Link>
								</li>
							))}

							<li className="lg:hidden">
								<NavLinkDropdown title="Profissional" items={workLinks} />
							</li>

							<li className="hidden lg:block">
								<NavLinkExpanded title="Profissional" items={workLinks} />
							</li>
						</ul>
					</nav>

					<ul className={clsx("flex items-center")}>
						{socialLinks.map(({ title, href, Icon }) => (
							<li key={title} className={clsx("hidden", "sm:block")}>
								<NavIcon
									href={href}
									icon={
										<Icon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
									}
									title={title}
								/>
							</li>
						))}

						<li className={clsx("hidden", "sm:block")}>
							<div
								className={clsx(
									"ml-2 mr-4 h-3 w-[1px] bg-slate-200",
									"dark:bg-slate-700"
								)}
							/>
						</li>
						<li className={clsx("mr-2")}>
							<QuickAccessButton />
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
