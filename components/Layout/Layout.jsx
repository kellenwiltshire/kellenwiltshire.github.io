import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<div id='topDiv' className='dark'>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
