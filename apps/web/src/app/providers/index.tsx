"use client";

import { QuickAccessProvider } from "@/components/QuickAccess/QuickAccessContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

import FramerMotionProvider from "./FramerMotionProvider";

import type { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren> = ({ children }) => (
	<ThemeProvider>
		<FramerMotionProvider>
			<QuickAccessProvider>{children}</QuickAccessProvider>
		</FramerMotionProvider>
	</ThemeProvider>
);

export default Providers;
