import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function PortfolioProjectExpand({
	id,
	name,
	description,
	tools,
	link,
	git,
	img,
}) {
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
		<div className='p-5 m-10 flex flex-row'>
			<div className='rounded transition duration-300 ease-in-out hover:bg-blue-600 p-2'>
				<a href={link} alt='View in Action' target='_blank'>
					{projectImage()}
					<p className='text-center'>View Site</p>
				</a>
			</div>
			<div classame='justify-center flex flex-col h-auto m-3 sm:text-xs w-1/2'>
				<div className='text-left w-full'>
					<a href={link} alt='View in Action' target='_blank'>
						<h1 className='text-2xl text-center underline order-2 font-headers'>
							{name}
						</h1>
					</a>
				</div>
				<p className='text-base m-10 font-body'>{description}</p>
				<div className='flex flex-col align-center justify-between m-10'>
					<div className='flex flex-wrap sm:flex-row align-middle'>
						{toolsUsed}
						<div className='ml-10'>
							<a href={git} alt='View on Github' target='_blank'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='icon icon-tabler icon-tabler-brand-github rounded transition duration-300 ease-in-out hover:bg-blue-600'
									width='50'
									height='50'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='#000000'
									fill='none'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path stroke='none' d='M0 0h24v24H0z' fill='none' />
									<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioProjectExpand;
