import { useEffect, useState } from 'react';
import Github from '../SVG/Github';

export default function Projects({ isDarkMode, project }) {
	const [svgColour, setSVGColour] = useState('#000000');

	useEffect(() => {
		isDarkMode ? setSVGColour('#ffffff') : setSVGColour('#374151');
	});
	return (
		<div id='about' className='bg-gray-50 dark:bg-gray-700'>
			<div className='pt-12 sm:pt-16 lg:pt-24'>
				<div className='max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
					<div className='max-w-3xl mx-auto space-y-2 lg:max-w-none'>
						<h2 className='text-lg leading-6 font-semibold text-black dark:text-white uppercase tracking-wider'>
							{project.type}
						</h2>
						<p className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl lg:text-5xl'>
							{project.name}
						</p>
					</div>
				</div>
			</div>
			<div className='mt-8 pb-12 bg-gray-50 dark:bg-gray-700 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
						<div className='aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-3'>
							<img
								className='object-cover shadow-lg rounded-lg'
								src={project.image}
								alt=''
							/>
						</div>
						<div className='sm:col-span-2'>
							<div className='space-y-4'>
								<div className='text-lg'>
									<p className='py-1 text-gray-500 dark:text-gray-100'>
										{project.description}
									</p>
								</div>
								<div className='text-lg'>
									<p className='py-1 text-gray-500 dark:text-gray-100'>
										{project.lessons}
									</p>
								</div>
								<ul role='list' className='flex space-x-5'>
									<li>
										<a
											href={project.git}
											className='text-gray-400 hover:text-gray-500'
										>
											<span className='sr-only'>Github</span>
											<Github colour={svgColour} />
										</a>
									</li>
									<li>
										<a
											href={project.link}
											className='text-gray-400 hover:text-gray-500'
										>
											<span className='sr-only'>LinkedIn</span>
											<Github colour={svgColour} />
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
