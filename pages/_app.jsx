import "@/styles/globals.css";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import {DarkModeProvider} from "@/context/DarkModeContext";

export default function App({Component, pageProps}) {

	return (

			<DarkModeProvider>
					<StairTransition/>
					<PageTransition>
						<Header/>
						<Component {...pageProps} />
					</PageTransition>
					<Analytics/>
					<SpeedInsights/>
			</DarkModeProvider>
	);
}
