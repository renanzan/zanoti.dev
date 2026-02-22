import FloatingThemeButton from "@/components/FloatingThemeButton";
import QuickAccessPanel from "@/components/QuickAccess/QuickAccessPanel";

import Providers from "../providers";
import Footer from "./_layout/Footer";
import { Navbar } from "./_layout/Navigation";

import type { PropsWithChildren } from "react";

export default function SiteLayout({ children }: PropsWithChildren) {
	return (
		<Providers>
			<Navbar />
			<main>{children}</main>
			<Footer />
			<QuickAccessPanel />
			<FloatingThemeButton />
		</Providers>
	);
}
