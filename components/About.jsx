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
						<img
							className='rounded-lg object-cover shadow-lg'
							src='/profile.webp'
							alt=''
						/>
						<div className='sm:col-span-2'>
							<div className='rounded-lg p-2 sm:col-span-1 md:bg-black md:bg-opacity-20'>
								<div className='space-y-1 text-lg font-medium leading-6'>
									<h3 className='text-3xl dark:text-white md:text-white'>
										Kellen Wiltshire
									</h3>
									<p className='dark:text-gray-100 md:text-white'>
										Web Developer
									</p>
								</div>
								<div className='text-lg'>
									<p className='py-1 dark:text-gray-100 md:text-white'>
										I am a passionate full-stack developer specializing in all
										aspects of Web Development looking for the next step in my
										journey. I have the experience to create beautiful and
										functional websites combining the latest frameworks and
										technologies. I have experience React,
										Javascript/Typescript, TailwindCSS, Styled Components, as
										well as traditional HTML5 and CSS3. I am currently look for
										a new Web Development career opportunity!
									</p>
									<p className='py-1 dark:text-gray-100 md:text-white'>
										I can also help you build the perfect site for your
										business! I have experience working with Shopify and
										Squareup systems to make sure your products are easy for
										your customers to find and buy! Whatever your needs, I can
										make a site that works perfectly for you.
									</p>
								</div>
								<ul role='list' className='flex space-x-5'>
									<li>
										<a
											href='https://github.com/kellenwiltshire'
											className='hover:text-gray-500 md:text-white'
										>
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
