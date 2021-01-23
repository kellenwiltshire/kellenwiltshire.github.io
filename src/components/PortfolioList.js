import React from 'react';
import PortfolioProjects from './PortfolioProjects';

const portfolioList = ({ projects }) => {
	return (
		<div
			id='component'
			className='w-screen p-10 flex flex-row justify-center flex-wrap items-center'
		>
			<h1 className='text-gray-600 text-4xl sm:text-6xl border-b-2 w-full text-center mb-10'>
				Some of My Work
			</h1>
			{projects.map((proj, i) => {
				return (
					<PortfolioProjects
						key={i}
						id={projects[i].id}
						name={projects[i].name}
						description={projects[i].description}
						tools={projects[i].tools}
						link={projects[i].link}
						git={projects[i].git}
						img={projects[i].img}
					></PortfolioProjects>
				);
			})}
		</div>
	);
};

export default portfolioList;
