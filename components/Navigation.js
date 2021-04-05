import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

function Navigation() {
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	return (
		<nav className='bg-blue-600 py-4 w-full'>
			<motion.div
				variants={container}
				initial='hidden'
				animate='visible'
				className='-mb-px flex justify-center font-body'
			>
				<motion.div
					variants={item}
					className='no-underline text-white uppercase tracking-wide font-bold text-base p-3 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 '
				>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</motion.div>
				<motion.div
					variants={item}
					className='no-underline text-white uppercase tracking-wide font-bold text-base p-3 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 '
				>
					<Link href='/Portfolio'>
						<a>Portfolio</a>
					</Link>
				</motion.div>
				<motion.div
					variants={item}
					className='no-underline text-white uppercase tracking-wide font-bold text-base p-3 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 '
				>
					<Link href='/Contact'>
						<a>Contact</a>
					</Link>
				</motion.div>
			</motion.div>
		</nav>
	);
}

export default Navigation;
