import React from 'react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function PortfolioCards({ project }) {
	return (
		<a key={project.id} className='group'>
			<div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-7'>
				<img
					src={project.image}
					alt={project.description}
					className='w-full h-full object-center object-cover group-hover:opacity-75'
				/>
			</div>
			<h3 className='mt-4 text-lg text-gray-900'>{project.name}</h3>
			<p className=' text-xs text-gray-700'>{project.type}</p>
			<p className='mt-1 text-sm font-medium text-gray-700'>
				{project.description}
			</p>
		</a>
	);
}
