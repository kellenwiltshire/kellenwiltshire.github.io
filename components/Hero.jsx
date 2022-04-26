import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Layout/Navbar';

export default function Hero({ isDarkMode, setIsDarkMode }) {
	const [fillColour, setFillColour] = useState('#ffffff');
	useEffect(() => {
		isDarkMode ? setFillColour('#374151') : setFillColour('#ffffff');
	}, [isDarkMode]);
	return (
		<div id='hero' className='flex justify-center'>
			<div className='w-full max-w-7xl'>
				<div className='relative z-10 min-w-full lg:w-full lg:max-w-2xl'>
					<div className='flex w-full justify-center'>
						<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
					</div>

					{/* <div className='text-center'>
						<h1 className=' flex flex-col text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
							<span className='block xl:inline'>Kellen Wiltshire</span>{' '}
							<span className='block text-indigo-600 xl:inline'>
								Web Developer
							</span>
						</h1>
						<p className='mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl'>
							Kingston, Ontario,
						</p>
						<div className='mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8'>
							<div className='rounded-md shadow'>
								<a
									href='#'
									className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
								>
									Get started
								</a>
							</div>
							<div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
								<a
									href='#'
									className='flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg'
								>
									Live demo
								</a>
							</div>
						</div>
					</div> */}

					<div className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:mb-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className='text-center'
						>
							<h1 className='- flex flex-col text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl'>
								<span className='block xl:inline'>Kellen Wiltshire</span>
								<span className='block text-indigo-600 xl:inline'>
									Web Developer
								</span>
							</h1>
							<p className='mt-3 text-base text-gray-600 dark:text-gray-200'>
								Kingston, Ontario, Canada
							</p>
							<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center'>
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
