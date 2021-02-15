import React from 'react';
import Head from 'next/head';
import Footer from './Footer';

function Layout({ title, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='Kellen Wiltshire Web Development Kingston Ontario Canada' />
				<meta lang='en' />

				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<main className='mx-auto flex justify-center flex-row flex-wrap w-screen'>
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
