import PortfolioCards from './PortfolioCards';

export default function Portfolio({ projects }) {
	return (
		<div className='bg-blue-600'>
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
