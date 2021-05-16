import React from 'react';
import { motion } from 'framer-motion';

function PortfolioProjectCard({ img }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='max-w-lg m-5 hover:shadow-2xl'
		>
			<img src={img} alt='Smartbrain Screenshot' height='1080p' width='1920p' />
			<p className='text-center font-body'>View More Information</p>
		</motion.div>
	);
}

export default PortfolioProjectCard;
