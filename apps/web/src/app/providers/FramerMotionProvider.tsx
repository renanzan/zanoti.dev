import {
	domAnimation,
	LazyMotion,
	MotionConfig as MotionProvider
} from "framer-motion";

import type { PropsWithChildren } from "react";

function FramerMotionProvider({ children }: PropsWithChildren) {
	return (
		<MotionProvider reducedMotion="user">
			<LazyMotion strict features={domAnimation}>
				{children}
			</LazyMotion>
		</MotionProvider>
	);
}

export default FramerMotionProvider;
