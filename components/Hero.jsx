import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Layout/Navbar';

export default function Hero({ isDarkMode, setIsDarkMode }) {
	const [fillColour, setFillColour] = useState('#ffffff');
	useEffect(() => {
		isDarkMode ? setFillColour('#374151') : setFillColour('#ffffff');
	}, [isDarkMode]);
	return (
		<div id='hero' className='relative overflow-hidden'>
			<div className='mx-auto max-w-7xl'>
				<div className='relative z-10  pb-8 dark:bg-gray-700 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32'>
					{/* <svg
						className='absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block'
						fill={fillColour}
						viewBox='0 0 100 100'
						preserveAspectRatio='none'
						aria-hidden='true'
					>
						 <polygon points='50,0 100,0 50,100 0,100' /> 
					</svg> */}

					<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

					<main className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:mb-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
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
							<p className='mt-3 text-base text-gray-500 dark:text-gray-100 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
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
					</main>
				</div>
			</div>
			{/* <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
				<img className='h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full' src='/background.webp' alt='' />
			</div> */}
		</div>
	);
}
