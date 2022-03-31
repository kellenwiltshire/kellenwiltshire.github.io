import { useEffect, useState } from 'react';
import Github from './SVG/Github';
import Linkedin from './SVG/Linkedin';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About({ isDarkMode }) {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
		if (!inView) {
			controls.start('hidden');
		}
	}, [controls, inView]);

	const titleVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	};

	const [svgColour, setSVGColour] = useState('#000000');

	useEffect(() => {
		isDarkMode ? setSVGColour('#ffffff') : setSVGColour('#374151');
	});
	return (
		<div id='about' className='bg-gray-50 dark:bg-gray-700'>
			<div className='pt-12 sm:pt-16 lg:pt-24'>
				<div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
					<motion.div
						ref={ref}
						animate={controls}
						variants={titleVariants}
						className='mx-auto max-w-3xl space-y-2 lg:max-w-none'
					>
						<h2 className='text-lg font-semibold uppercase leading-6 tracking-wider text-black dark:text-white'>
							About Me
						</h2>
						<p className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl lg:text-5xl'>Who Am I?</p>
					</motion.div>
				</div>
			</div>
			<div className='mt-8 bg-gray-50 pb-12 dark:bg-gray-700 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
						<div className='aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'>
							<img className='rounded-lg object-cover shadow-lg' src='/profile.webp' alt='' />
						</div>
						<div className='sm:col-span-2'>
							<div className='space-y-4'>
								<div className='space-y-1 text-lg font-medium leading-6'>
									<h3 className='text-3xl text-black dark:text-white'>Kellen Wiltshire</h3>
									<p className='text-indigo-600 dark:text-gray-100'>Web Developer</p>
								</div>
								<div className='text-lg'>
									<p className='py-1 text-gray-500 dark:text-gray-100'>
										I am a passionate full-stack developer specializing in all aspects of Web Development looking for
										the next step in my journey. I have the experience to create beautiful and functional websites
										combining the latest frameworks and technologies. I have experience React, Javascript/Typescript,
										TailwindCSS, Styled Components, as well as traditional HTML5 and CSS3. I am currently look for a new
										Web Development career opportunity!
									</p>
									<p className='py-1 text-gray-500 dark:text-gray-100'>
										I can also help you build the perfect site for your business! I have experience working with Shopify
										and Squareup systems to make sure your products are easy for your customers to find and buy!
										Whatever your needs, I can make a site that works perfectly for you.
									</p>
								</div>
								<ul role='list' className='flex space-x-5'>
									<li>
										<a href='https://github.com/kellenwiltshire' className='text-gray-400 hover:text-gray-500'>
											<Github colour={svgColour} />
											<p>Github</p>
										</a>
									</li>
									<li>
										<a
											href='https://www.linkedin.com/in/kellenwiltshire/'
											className='text-gray-400 hover:text-gray-500'
										>
											<Linkedin colour={svgColour} />
											<p>LinkedIn</p>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
