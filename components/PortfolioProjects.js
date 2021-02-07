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
		} else if (tool === 'NextJS') {
			return (
				<Image src='/nextjs.png' alt='NextJS Logo' height={50} width={50} />
			);
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
					height={1080}
					width={1920}
				/>
			);
		} else if (img === 'Robofriends') {
			return (
				<Image
					src='/robofriends.png'
					alt='Robofriend Screenshot'
					height={1080}
					width={1920}
				/>
			);
		} else if (img === 'TheKnottyIsland') {
			return (
				<Image
					src='/theknottyisland.png'
					alt='The Knotty Island Screenshot'
					height={1080}
					width={1920}
				/>
			);
		} else {
			return <div>OOPS</div>;
		}
	};

	return (
		<div className='w-1/2 p-5 m-10 flex flex-row' id='proj1'>
			<div className='max-w-2xl'>
				<a href={link} alt='View in Action' target='_blank'>
					{projectImage()}
				</a>
			</div>
			<div classame='justify-center align-middle flex flex-col h-auto m-3 sm:text-xs w-1/2'>
				<div className='text-left w-full'>
					<h1 className='text-2xl text-center underline order-2'>{name}</h1>
				</div>
				<p className='text-base m-10'>{description}</p>
				<div className='flex flex-row align-center space-x-6 m-10'>
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
