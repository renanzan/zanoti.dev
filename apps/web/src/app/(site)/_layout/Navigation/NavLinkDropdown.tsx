"use client";

import { forwardRef } from "react";
import ChevronRightIcon from "@/public/icons/chevron-right.svg";
import { Menu } from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";

import type { FC, HTMLAttributes, Ref } from "react";
import type { Variants } from "framer-motion";
import type { UrlObject } from "url";

const variants: Variants = {
	hide: { opacity: 0, y: -16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.18 } }
};

type LinkRefProps = HTMLAttributes<HTMLAnchorElement> & {
	href: string | UrlObject;
};

const LinkRef = forwardRef(
	({ href, children, ...rest }: LinkRefProps, ref: Ref<HTMLAnchorElement>) => (
		<Link href={href} ref={ref} {...rest}>
			{children}
		</Link>
	)
);

LinkRef.displayName = "LinkRef";

type NavLink = {
	href: string;
	title: string;
};

type NavLinkDropdownProps = {
	title: string;
	items: Array<NavLink>;
};

export const NavLinkDropdown: FC<NavLinkDropdownProps> = ({ title, items }) => (
	<div className="relative">
		<Menu>
			{({ open }) => (
				<>
					<Menu.Button className="nav-link nav-link--label ml-2">
						{title}

						<ChevronRightIcon
							className={clsx("h-3 w-3 rotate-90", [open && "-rotate-90"])}
						/>
					</Menu.Button>

					<AnimatePresence>
						{open && (
							<Menu.Items
								static
								as={m.div}
								variants={variants}
								initial="hide"
								animate="show"
							>
								<div
									className={clsx(
										"border-divider-light absolute top-11 flex w-40 flex-col rounded-2xl border bg-white/70 p-2 backdrop-blur",
										"dark:border-divider-dark dark:bg-slate-900/80"
									)}
								>
									{items.map((item) => (
										<Menu.Item key={item.href}>
											{({ active }) => (
												<LinkRef
													href={item.href}
													className={clsx("nav-link h-8 text-xs", [
														active && "nav-link--focus"
													])}
												>
													{item.title}
												</LinkRef>
											)}
										</Menu.Item>
									))}
								</div>
							</Menu.Items>
						)}
					</AnimatePresence>
				</>
			)}
		</Menu>
	</div>
);
