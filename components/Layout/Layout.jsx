import React from 'react';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, isDarkMode }) {
	const [colour1, setColour1] = useState('#1E3A8A');
	const [colour2, setColour2] = useState('#09D6FE');

	useEffect(() => {
		if (isDarkMode) {
			setColour1('#374151');
			setColour2('');
		} else {
			setColour1('#1E3A8A');
			setColour2('#09D6FE');
		}
	}, [isDarkMode]);
	return (
		<div id='topDiv' className='dark'>
			<svg
				className='background--custom'
				viewBox='0 0 100 100'
				preserveAspectRatio='none'
			>
				<path
					fill={colour1}
					fillOpacity={1}
					d='M-100 -100L200 -100L200 90L-100 90Z'
					style={{
						animation: 'path0 16.129032258064516s linear infinite alternate',
					}}
				/>
				<path
					fill={colour2}
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
