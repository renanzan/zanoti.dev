import clsx from "clsx";
import Link from "next/link";

import type { FC, ReactNode } from "react";

export type NavLinkProps = {
	title: string;
	href: string;
	icon?: ReactNode;
};

export const NavLink: FC<NavLinkProps> = ({ title, href, icon = null }) => {
	return (
		<Link href={href} className={clsx("nav-link")}>
			{title}
			{icon}
		</Link>
	);
};
