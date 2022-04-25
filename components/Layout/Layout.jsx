import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<div id='topDiv' className='dark'>
			<svg className='background--custom' id='demo' viewBox='0 0 100 100' preserveAspectRatio='none'>
				<path
					fill='#1E3A8A'
					fillOpacity={1}
					d='M-100 -100L200 -100L200 90L-100 90Z'
					style={{ animation: 'path0 16.129032258064516s linear infinite alternate' }}
				/>
				<path
					fill='#09D6FE'
					fillOpacity={1}
					d='M-100 -100L200 -100L200 40L-100 40Z'
					style={{ animation: 'path1 12.5s linear infinite alternate' }}
				/>
			</svg>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
