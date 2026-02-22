import { forwardRef } from "react";
import ExternalLink from "@/public/icons/external-link.svg";
import MailIcon from "@/public/icons/mail.svg";
import { urlType } from "@/utils/url";
import clsx from "clsx";
import NextLink from "next/link";

import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>;

type NextLinkProps = Omit<Props, "ref" | "className">;

export const Link = forwardRef<HTMLAnchorElement, Props>(
	({ children, href, className, ...rest }, ref) => {
		if (!href) {
			return <span>{children}</span>;
		}

		const type = urlType(href);

		switch (type) {
			case "external":
				return (
					<a
						ref={ref}
						href={href}
						target="_blank"
						rel="noreferrer nofollow"
						className={clsx("link", className)}
						{...rest}
					>
						{children}
						<ExternalLink />
					</a>
				);
			case "mail":
				return (
					<a
						ref={ref}
						href={href}
						className={clsx("link", className)}
						{...rest}
					>
						<MailIcon />
						{children}
					</a>
				);
			case "hash":
				return (
					<a
						ref={ref}
						href={href}
						className={clsx("link", className)}
						{...rest}
					>
						{children}
					</a>
				);
			default: {
				// NextLink não aceita todas as props de um elemento <a>
				const linkProps = rest as NextLinkProps;

				return (
					<NextLink
						href={href}
						className={clsx("link", className)}
						{...linkProps}
					>
						{children}
					</NextLink>
				);
			}
		}
	}
);

Link.displayName = "Link";
