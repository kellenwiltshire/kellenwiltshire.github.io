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
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
