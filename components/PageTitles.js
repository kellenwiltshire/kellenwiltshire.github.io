import React from 'react';
import Navigation from './Navigation';
import { motion } from 'framer-motion';

function PageTitles({ title }) {
	return (
		<div className='splash flex flex-col items-center justify-center bg-blue-600 w-screen'>
			<div className='text-6xl text-white p-32 font-headers'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
				>
					<h1>{title}</h1>
				</motion.div>
				<Navigation />
			</div>
		</div>
	);
}

export default PageTitles;
