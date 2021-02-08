import React from 'react';
import ContactIcons from './ContactIcons';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';

const splash = () => {
	return (
		<div className='splash flex flex-col items-center justify-center bg-blue-600 w-screen pt-60 pb-96'>
			<div className='text-6xl text-white text-center'>
				<motion.div
					drag='x'
					dragConstraints={{ left: -500, right: 500 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					<h1 className='m-10 font-headers'>Kellen Wiltshire</h1>
					<h2 className='m-10 font-body'>Web Developer</h2>
				</motion.div>
			</div>
			<ContactIcons />
			<Navigation />
		</div>
	);
};

export default splash;
