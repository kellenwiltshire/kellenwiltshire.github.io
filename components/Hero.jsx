import { motion } from 'framer-motion';
import Navbar from './Layout/Navbar';

export default function Hero({ isDarkMode, setIsDarkMode }) {
	return (
		<div
			id='hero'
			className='dark:bg-gray-700 relative bg-white overflow-hidden'
		>
			<div className='max-w-7xl mx-auto'>
				<div className='relative z-10 pb-8 bg-white dark:bg-gray-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
					<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

					<main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 sm:mb-12'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className='sm:text-center lg:text-left'
						>
							<h1 className='text-4xl tracking-tight font-extrabold dark:text-white text-gray-900 sm:text-5xl md:text-6xl flex flex-col'>
								<span className='block xl:inline'>Kellen Wiltshire</span>
								<span className='block text-indigo-600 xl:inline'>
									Web Developer
								</span>
							</h1>
							<p className='mt-3 text-base dark:text-gray-100 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
								Kingston, Ontario, Canada
							</p>
							<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
								<div className='rounded-md shadow'>
									<a
										href='#services'
										className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
									>
										Services
									</a>
								</div>
								<div className='mt-3 sm:mt-0 sm:ml-3'>
									<a
										href='#contact'
										className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
									>
										Contact Me
									</a>
								</div>
							</div>
						</motion.div>
					</main>
				</div>
			</div>
			<div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
				<img
					className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
					src='/background.jpg'
					alt=''
				/>
			</div>
		</div>
	);
}
