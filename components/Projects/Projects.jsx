import { useEffect, useState } from 'react';
import Github from '../SVG/Github';
import Web from '../SVG/Web';
import ReactMarkdown from 'react-markdown';

export default function Projects({ isDarkMode, project }) {
	const [svgColour, setSVGColour] = useState('#000000');

	useEffect(() => {
		isDarkMode ? setSVGColour('#ffffff') : setSVGColour('#374151');
	});
	return (
		<div id='about' className='mt-2 bg-white dark:bg-gray-700'>
			<div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-3xl space-y-2 lg:max-w-none'>
					<h1 className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl lg:text-5xl'>
						{project.name}
					</h1>
				</div>
			</div>
			<div className='mt-8 rounded-md bg-gray-50 py-2 pb-12 dark:bg-gray-700 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-12'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
						<a
							href={project.link}
							className='aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-3 '
						>
							<img
								className='rounded-lg object-cover shadow-lg '
								src={project.image}
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
										{project.type}
									</h3>
								</div>
								<ReactMarkdown>{project.readme}</ReactMarkdown>
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
											<span className='sr-only'>Website</span>
											<Web colour={svgColour} />
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