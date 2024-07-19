import "@/styles/globals.css";
import {JetBrains_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import {TransitionProvider} from "@/context/TransitionContext";

// Define font settings
const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono",
});

export default function App({Component, pageProps}) {
	return (
		<div className={jetbrainsMono.variable}>
			<Header/>
			<Component {...pageProps} />
			<Analytics/>
			<SpeedInsights/>
		</div>
	);
}
