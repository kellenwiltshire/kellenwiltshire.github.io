import ReadMe from '../../Markdowns/smartbrain.md';
import React, { useState, useEffect } from 'react';
import Github from '../../components/SVG/Github';
import Web from '../../components/SVG/Web';
import MDXComponents from '../../Markdowns/MDXComponents';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Navbar from '../../components/Layout/Navbar';

function smartbrain({ isDarkMode, setIsDarkMode }) {
	const [svgColour, setSVGColour] = useState('#000000');

	useEffect(() => {
		isDarkMode ? setSVGColour('#ffffff') : setSVGColour('#374151');
	});
	return (
		<div className='mx-auto min-h-screen max-w-7xl bg-white dark:bg-gray-700'>
			<NextSeo
				title={`Kellen Wiltshire | Smartbrain`}
				description='Smartbrain is a fully functional image recogniton website.'
			/>
			<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<div id='about' className='mt-2 bg-white dark:bg-gray-700'>
					<div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
						<div className='mx-auto max-w-3xl space-y-2 lg:max-w-none'>
							<h1 className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl lg:text-5xl'>
								Smartbrain
							</h1>
						</div>
					</div>
					<div className='mt-8 rounded-md bg-gray-50 py-2 pb-12 dark:bg-gray-700 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-12'>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							<div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
								<a
									href='https://kw-smartbrain.herokuapp.com'
									className='aspect-w-3 aspect-h-2 sm:aspect-w-5 sm:aspect-h-3 '
								>
									<img
										className='object-fit rounded-lg shadow-lg '
										src='/smartbrain.webp'
										alt=''
									/>
								</a>
								<div className='sm:col-span-2'>
									<div className='space-y-4'>
										<div>
											<h3
												className='inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-indigo-600'
												id='tier-standard'
											>
												Web App
											</h3>
										</div>
										<ul role='list' className='flex space-x-5'>
											<li>
												<a
													href='https://github.com/kellenwiltshire/smartbrain-ztm'
													className='text-gray-400 hover:text-gray-500'
												>
													<span className='sr-only'>Github</span>

													<Github colour={svgColour} />
												</a>
											</li>
											<li>
												<a
													href='https://kw-smartbrain.herokuapp.com'
													className='text-gray-400 hover:text-gray-500'
												>
													<span className='sr-only'>Website</span>
													<Web colour={svgColour} />
												</a>
											</li>
										</ul>
										<ReadMe components={MDXComponents} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default smartbrain;
