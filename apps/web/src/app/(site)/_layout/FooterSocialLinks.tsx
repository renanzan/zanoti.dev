"use client";

import clsx from "clsx";
import posthog from "posthog-js";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const FooterSocialLinks = () => (
	<ul className={clsx("-ml-2 flex gap-1")}>
		<li>
			<a
				href="https://twitter.com/renan_zanoti"
				target="_blank"
				rel="noreferrer nofollow"
				className={clsx("flex h-9 w-9 items-center justify-center")}
				aria-label="My Twitter profile"
				title="My Twitter profile"
				onClick={() =>
					posthog.capture("social_link_clicked", {
						platform: "Twitter",
						destination: "https://twitter.com/renan_zanoti",
						location: "footer"
					})
				}
			>
				<FaTwitter className="h-5 w-5 text-slate-700 dark:text-slate-300" />
			</a>
		</li>
		<li>
			<a
				href="https://github.com/renanzan"
				target="_blank"
				rel="noreferrer nofollow"
				className={clsx("flex h-9 w-9 items-center justify-center")}
				aria-label="My GitHub profile"
				title="My GitHub profile"
				onClick={() =>
					posthog.capture("social_link_clicked", {
						platform: "GitHub",
						destination: "https://github.com/renanzan",
						location: "footer"
					})
				}
			>
				<FaGithub className="h-5 w-5 text-slate-700 dark:text-slate-300" />
			</a>
		</li>
	</ul>
);
