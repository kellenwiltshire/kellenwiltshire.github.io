import React from 'react';
import Image from 'next/image';

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
			return <Image src='/react.png' alt='react logo' height={50} width={50} />;
		} else if (tool === 'NodeJS') {
			return <Image src='/node.png' alt='Node logo' height={50} width={50} />;
		} else if (tool === 'PostgreSQL') {
			return (
				<Image src='/postgres.png' alt='Postgres logo' height={50} width={50} />
			);
		} else if (tool === 'ExpressJS') {
			return <p className='self-center'>ExpressJS</p>;
		} else {
			return <div></div>;
		}
	});

	const projectImage = () => {
		if (img === 'Smartbrain') {
			return (
				<Image
					src='/smartbrain.png'
					alt='Smartbrain Screenshot'
					height={1352}
					width={2402}
				/>
			);
		} else if (img === 'Robofriends') {
			return (
				<Image
					src='/robofriends.png'
					alt='Robofriend Screenshot'
					height={1620}
					width={2880}
				/>
			);
		} else {
			return <div>OOPS</div>;
		}
	};

	return (
		<div class='lg:w-1/2 xl:w-1/4 shadow p-5 mx-2' id='proj1'>
			<h1 className='text-2xl text-center underline'>{name}</h1>
			<a href={link} alt='View in Action' target='_blank'>
				{projectImage()}
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
						<Image src='/github.png' alt='Github Logo' height={50} width={50} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default portfolioProjects;
