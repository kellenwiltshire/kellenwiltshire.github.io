import React from 'react';
import Link from 'next/link';

export default function PortfolioCards({ project }) {
	return (
		<Link
			href={{
				pathname: '/projects/[project]',
				query: {
					project: project.id,
				},
			}}
		>
			<a key={project.id} className='group'>
				<div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-7'>
					<img
						src={project.image}
						alt={project.description}
						className='w-full h-full object-center object-cover group-hover:opacity-75'
					/>
				</div>
				<h3 className='mt-4 text-lg text-white'>{project.name}</h3>
				<p className=' text-xs text-gray-100'>{project.type}</p>
				<p className='mt-1 text-sm font-medium text-gray-100'>
					{project.description}
				</p>
			</a>
		</Link>
	);
}
