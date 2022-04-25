import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Layout/Navbar';

export default function Hero({ isDarkMode, setIsDarkMode }) {
	return (
		<div id='hero' className='flex justify-center'>
			<div className='w-full max-w-7xl'>
				<div className='relative z-10 min-w-full lg:w-full lg:max-w-2xl'>
					<div className='flex w-full justify-center'>
						<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
					</div>

					<div className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:mb-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className='sm:text-center lg:text-left'
						>
							<h1 className='flex flex-col text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl'>
								<span className='block xl:inline'>Kellen Wiltshire</span>
								<span className='block text-indigo-600 xl:inline'>Web Developer</span>
							</h1>
							<p className='mt-3 text-base text-black dark:text-gray-100 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
								Kingston, Ontario, Canada
							</p>
							<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
								<div className='rounded-md shadow'>
									<a
										href='#services'
										className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
									>
										Services
									</a>
								</div>
								<div className='mt-3 sm:mt-0 sm:ml-3'>
									<a
										href='#contact'
										className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg'
									>
										Contact Me
									</a>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
