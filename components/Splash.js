import React from 'react';
import ContactIcons from './ContactIcons';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';

const splash = () => {
	return (
		<div className='flex flex-col items-center justify-center bg-blue-600 w-full sm:pt-60 pb-72 sm:pb-96'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className='text-3xl sm:text-6xl text-white text-center'
			>
				<h1 className='m-10 font-headers'>Kellen Wiltshire</h1>
				<h2 className='m-10 font-body'>Web Developer</h2>
			</motion.div>
			<ContactIcons />
			<Navigation />
		</div>
	);
};

export default splash;
