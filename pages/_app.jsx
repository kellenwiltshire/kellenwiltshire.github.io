import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import Layout from '../components/Layout/Layout';

import '../styles/background.css'

function MyApp({ Component, pageProps }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const html = document.querySelector('#topDiv');
		isDarkMode ? html.classList.add('dark') : html.classList.remove('dark');
	}, [isDarkMode]);

	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	return (
		<Layout>
			<Component
				{...pageProps}
				isDarkMode={isDarkMode}
				setIsDarkMode={setIsDarkMode}
			/>
		</Layout>
	);
}

export default MyApp;
