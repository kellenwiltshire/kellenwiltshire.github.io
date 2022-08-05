import { useEffect, useState } from 'react';
import Github from './SVG/Github';
import Linkedin from './SVG/Linkedin';

export default function About() {
	const [svgColour, setSVGColour] = useState('#000000');

	return (
		<div id='about'>
			<div className='mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
						<img className='rounded-lg object-cover shadow-lg' src='/profile.webp' alt='' />
						<div className='sm:col-span-2'>
							<div className='rounded-lg p-2 sm:col-span-1 md:bg-black md:bg-opacity-20'>
								<div className='space-y-1 text-lg font-medium leading-6'>
									<h3 className='text-3xl dark:text-white md:text-white'>Kellen Wiltshire</h3>
									<p className='dark:text-gray-100 md:text-white'>Web Developer</p>
								</div>
								<div className='text-lg'>
									<p className='py-1 dark:text-gray-100 md:text-white'>
										I am a passionate Full Stack Developer with love for ReactJS(NextJS). I have the experience to
										create beautiful and functional websites combining the latest frameworks and technologies such as
										React, Javascript/Typescript, TailwindCSS, Emotion Styled Components, as well as traditional HTML
										and CSS. Further I have experience with NodeJS, ExpressJS, PostgreSQL, and SSH.
									</p>
									<p className='py-1 dark:text-gray-100 md:text-white'>
										I am currently employed with Superna but would love to connect!
									</p>
								</div>
								<ul role='list' className='flex space-x-5'>
									<li>
										<a href='https://github.com/kellenwiltshire' className='hover:text-gray-500 md:text-white'>
											<Github colour={svgColour} />
											<p>Github</p>
										</a>
									</li>
									<li>
										<a
											href='https://www.linkedin.com/in/kellenwiltshire/'
											className='hover:text-gray-500 md:text-white'
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
