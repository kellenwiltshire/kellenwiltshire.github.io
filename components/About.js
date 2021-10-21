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
				<div className='max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
					<motion.div
						ref={ref}
						animate={controls}
						variants={titleVariants}
						className='max-w-3xl mx-auto space-y-2 lg:max-w-none'
					>
						<h2 className='text-lg leading-6 font-semibold text-black dark:text-white uppercase tracking-wider'>
							About Me
						</h2>
						<p className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl lg:text-5xl'>
							Who Am I?
						</p>
					</motion.div>
				</div>
			</div>
			<div className='mt-8 pb-12 bg-gray-50 dark:bg-gray-700 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
						<div className='aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'>
							<img
								className='object-cover shadow-lg rounded-lg'
								src='https://avatars.githubusercontent.com/u/31140634?v=4'
								alt=''
							/>
						</div>
						<div className='sm:col-span-2'>
							<div className='space-y-4'>
								<div className='text-lg leading-6 font-medium space-y-1'>
									<h3 className='dark:text-white text-black text-3xl'>
										Kellen Wiltshire
									</h3>
									<p className='text-indigo-600 dark:text-gray-100'>
										Web Developer
									</p>
								</div>
								<div className='text-lg'>
									<p className='py-1 text-gray-500 dark:text-gray-100'>
										During this COVID-19 Pandemic, I have taught myself two new
										things. First, I can now make bread like nobody's business.
										Second, I learned how to build sweet websites. Though I am
										still starting out, I am eager to learn more and dive deeper
										into the world of Web Development.
									</p>
									<p className='py-1 text-gray-500 dark:text-gray-100'>
										Although I have a fulfilling career helping people seek
										justice in the Legal System, I was missing using my brain in
										a technical role. With the extra time working from home I
										decided to start teaching myself Web Development with the
										help of the Udemy course Zero-to-Mastery.
									</p>
								</div>
								<ul role='list' className='flex space-x-5'>
									<li>
										<a
											href='https://github.com/kellenwiltshire'
											className='text-gray-400 hover:text-gray-500'
										>
											<span className='sr-only'>Github</span>
											<Github colour={svgColour} />
										</a>
									</li>
									<li>
										<a
											href='https://www.linkedin.com/in/kellenwiltshire/'
											className='text-gray-400 hover:text-gray-500'
										>
											<span className='sr-only'>LinkedIn</span>
											<Linkedin colour={svgColour} />
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
