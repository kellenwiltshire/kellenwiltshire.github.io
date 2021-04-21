import React from 'react';
import PortfolioProjects from './PortfolioProjects';

const portfolioList = ({ projects }) => {
	return (
		<div
			id='component'
			className='w-full flex flex-row justify-center flex-wrap items-center h-full'
		>
			{projects.map((proj) => {
				return (
					<PortfolioProjects
						key={proj.id}
						id={proj.id}
						name={proj.name}
						description={proj.description}
						tools={proj.tools}
						link={proj.link}
						git={proj.git}
						img={proj.img}
					></PortfolioProjects>
				);
			})}
		</div>
	);
};

export default portfolioList;
