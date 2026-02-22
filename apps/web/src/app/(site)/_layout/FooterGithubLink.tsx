"use client";

import clsx from "clsx";
import posthog from "posthog-js";

export const FooterGithubLink = () => (
	<a
		href="https://github.com/renanzan/zanoti.dev"
		target="_blank"
		rel="noreferrer nofollow"
		className={clsx("hover:underline")}
		onClick={() =>
			posthog.capture("github_source_clicked", {
				destination: "https://github.com/renanzan/zanoti.dev",
				location: "footer_last_update"
			})
		}
	>
		<span>veja a atualização recente no GitHub</span>
	</a>
);
