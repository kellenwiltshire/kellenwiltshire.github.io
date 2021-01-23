import React from 'react';
import ReactLogo from '../assets/icons/react.png';
import NodeJSLogo from '../assets/icons/node.png';
import PostgreSQLLogo from '../assets/icons/postgres.png';
import GithubLogo from '../assets/icons/github.png';

const portfolioProjects = ({
	id,
	name,
	description,
	tools,
	link,
	git,
	img,
}) => {
	const toolsUsed = tools.map((tool, i) => {
		if (tool === 'React') {
			return (
				<img src={ReactLogo} alt='react logo' height='auto' width='50px' />
			);
		} else if (tool === 'NodeJS') {
			return (
				<img src={NodeJSLogo} alt='react logo' height='auto' width='50px' />
			);
		} else if (tool === 'PostgreSQL') {
			return (
				<img src={PostgreSQLLogo} alt='react logo' height='auto' width='50px' />
			);
		} else if (tool === 'ExpressJS') {
			return <p className='self-center'>ExpressJS</p>;
		} else {
			return <div></div>;
		}
	});

	return (
		<div class='lg:w-1/2 xl:w-1/4 shadow p-5 mx-2' id='proj1'>
			<h1 className='text-2xl text-center underline'>{name}</h1>
			<a href={link} alt='View in Action' target='_blank'>
				<img src={img} alt='' />
			</a>
			<div class='text-center justify-center align-middle flex flex-col h-auto m-3 sm:text-xs'>
				<p className='text-base'>{description}</p>
				<div className='flex flex-row align-center justify-between'>
					<div className='flex flex-wrap sm:flex-row align-middle'>
						{toolsUsed}
					</div>
					<a
						className='align-middle'
						href={git}
						alt='View on Github'
						target='_blank'
					>
						<img
							src={GithubLogo}
							alt='Github Logo'
							height='auto'
							width='50px'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default portfolioProjects;
