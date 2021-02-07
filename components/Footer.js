import React from 'react';
import ContactIcons from './ContactIcons';

const footer = () => {
	return (
		<footer className='flex flex-wrap flex-row text-center bg-blue-600 h-1/6 justify-center content-center items-center w-screen'>
			<ContactIcons />
			<h1 className='w-screen text-white'>Copyright 2020 Kellen Wiltshire</h1>
		</footer>
	);
};

export default footer;
