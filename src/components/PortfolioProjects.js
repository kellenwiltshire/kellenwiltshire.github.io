import React from 'react';
import ReactLogo from '../assets/icons/react.png';
import NodeJSLogo from '../assets/icons/node.png';
import PostgreSQLLogo from '../assets/icons/postgres.png';
import GithubLogo from '../assets/icons/github.png';
import WebsiteLogo from '../assets/icons/website.png';

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
		console.log(tool);
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
		<div class='lg:w-3/12 shadow p-5 mx-2' id='proj1'>
			<img class='proj-Image' src={img} alt='' />
			<div class='text-center justify-center align-middle flex flex-col h-auto m-3 sm:text-xs'>
				<h1 className='text-2xl underline'>{name}</h1>
				<p className='text-base'>{description}</p>
				<div className='flex flex-row align-middle justify-center'>
					{toolsUsed}
				</div>
				<div className='flex flex-row align-middle justify-center'>
					<a href={git} alt='View on Github' target='_blank'>
						<img
							src={GithubLogo}
							alt='Github Logo'
							height='auto'
							width='50px'
						/>
						Github
					</a>
					<a href={link} alt='View in Action' target='_blank'>
						<img
							src={WebsiteLogo}
							alt='Website Logo'
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
