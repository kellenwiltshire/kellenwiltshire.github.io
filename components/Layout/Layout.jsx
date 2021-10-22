import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<div id='topDiv' className='dark'>
			<Header />
			<main className='bg-white dark:bg-gray-700'>{children}</main>
			<Footer />
		</div>
	);
}
