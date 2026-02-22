"use client";

import { useEffect, useState } from "react";
import MeAvatar from "@/public/images/avatar-flat-by-color.svg";
import clsx from "clsx";
import Vivus from "vivus";

import type { FC } from "react";

type AnimatedIllustrationProps = {
	onAnimationComplete?: () => void;
};

export const AnimatedIllustration: FC<AnimatedIllustrationProps> = ({
	onAnimationComplete = () => {}
}) => {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const vivus = new Vivus(
			"me-avatar-svg",
			{
				animTimingFunction: Vivus.EASE_IN,
				pathTimingFunction: Vivus.LINEAR,
				duration: 75,
				type: "sync",
				start: "manual",
				onReady: () => {
					setReady(true);
				}
			},
			() => {
				onAnimationComplete();
			}
		);

		vivus.play();
	}, []);

	return (
		<MeAvatar
			id="me-avatar-svg"
			className={clsx(
				"stroke-accent-500 h-[457px] w-[457px]",
				"dark:opacity-40",
				{
					"opacity-0": !ready,
					"opacity-100": ready
				}
			)}
			strokeWidth="1"
		/>
	);
};
