import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<div id='topDiv' className='dark'>
			<Head>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
