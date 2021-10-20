import PortfolioCards from './PortfolioCards';

export default function Portfolio({ projects }) {
	return (
		<div id='portfolio' className='bg-blue-600 dark:bg-blue-900'>
			<div className='pt-12 sm:pt-16 lg:pt-24'>
				<div className='max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
					<div className='max-w-3xl mx-auto space-y-2 lg:max-w-none'>
						<h2 className='text-lg leading-6 font-semibold text-gray-300 dark:text-gray-100 uppercase tracking-wider'>
							Portfolio
						</h2>
						<p className='text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl'>
							What I Have Created
						</p>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Projects</h2>

				<div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{projects.map((project) => (
						<PortfolioCards project={project} />
					))}
				</div>
			</div>
		</div>
	);
}
