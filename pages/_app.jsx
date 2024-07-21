import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import { DarkModeProvider } from '@/context/DarkModeContext';
import nextI18NextConfig from '../next-i18next.config';
import {appWithTranslation} from "next-i18next";

function App({ Component, pageProps }) {
	return (
		<DarkModeProvider>
			<PageTransition>
				<Header />
				<Component {...pageProps} />
			</PageTransition>
			<Analytics />
			<SpeedInsights />
		</DarkModeProvider>
	);
}

export default appWithTranslation(App, nextI18NextConfig);