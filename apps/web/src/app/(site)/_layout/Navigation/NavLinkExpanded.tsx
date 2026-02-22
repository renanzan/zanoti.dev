import React from "react";
import ChevronRightIcon from "@/public/icons/chevron-right.svg";

import { NavLink } from "./NavLink";

import type { FC } from "react";
import type { NavLinkProps } from "./NavLink";

type NavLinkExpandedProps = {
	title: string;
	items: Array<NavLinkProps>;
};

export const NavLinkExpanded: FC<NavLinkExpandedProps> = ({ title, items }) => (
	<div className="flex">
		<div className="nav-link nav-link--label pointer-events-none ml-2 mr-2">
			{title}
			<ChevronRightIcon className="h-3 w-3" />
		</div>

		<ul className="flex items-center">
			{items.map(({ href, title }, idx) => (
				<React.Fragment key={href}>
					<li>
						<NavLink href={href} title={title} />
					</li>

					{idx !== items.length - 1 && (
						<li>
							<div className="nav-link__separator">&middot;</div>
						</li>
					)}
				</React.Fragment>
			))}
		</ul>
	</div>
);
