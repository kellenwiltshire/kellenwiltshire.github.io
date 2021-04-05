import React from 'react';
import Navigation from './Navigation';
import { motion } from 'framer-motion';

function PageTitles({ title, height }) {
	if (height === 'small') {
		return (
			<div className='flex flex-col items-center justify-center bg-blue-600 w-screen sm:pt-40 pb-32'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='text-3xl sm:text-6xl text-white text-center'
				>
					<h1 className='text-center font-headers m-10'>{title}</h1>
				</motion.div>
				<Navigation />
			</div>
		);
	} else {
		return (
			<div className='flex flex-col items-center justify-center bg-blue-600 w-screen sm:pt-60 pb-32 sm:pb-96'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='text-3xl sm:text-6xl text-white text-center'
				>
					<h1 className='text-center font-headers m-10'>{title}</h1>
				</motion.div>
				<Navigation />
			</div>
		);
	}
}

export default PageTitles;
