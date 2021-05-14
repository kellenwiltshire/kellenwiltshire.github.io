import React from 'react';
import Image from 'next/image';

function PortfolioProjectExpand({
	id,
	name,
	description,
	tools,
	link,
	git,
	img,
}) {
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
		} else if (img === 'frontendassessment') {
			return (
				<Image
					src='/frontendassessment.png'
					alt='Frontend Assessment Screenshot'
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
		} else if (img === 'WMWiltshire') {
			return (
				<Image
					src='/WMWiltshire.jpg'
					alt='Author Screenshot'
					height={1080}
					width={1920}
				/>
			);
		} else if (img === 'wemadeit') {
			return (
				<Image
					src='/wemadeit.png'
					alt='We Made It Screenshot'
					height={1080}
					width={1920}
				/>
			);
		} else if (img === 'jsexercises') {
			return (
				<Image
					src='/javascript.svg'
					alt='Javascript Img'
					height={1080}
					width={1920}
				/>
			);
		} else {
			return <div>OOPS</div>;
		}
	};

	return (
		<div className='sm:p-5 lg:m-10 flex flex-row flex-wrap xl:flex-nowrap'>
			<div className='rounded transition duration-300 ease-in-out hover:bg-blue-600 p-2'>
				<a href={link} alt='View in Action' target='_blank'>
					{projectImage()}
					<p className='text-center'>View Site</p>
				</a>
			</div>
			<div classame='justify-center flex flex-col h-auto sm:m-3 sm:text-xs w-1/2'>
				<div className='text-left'>
					<a href={link} alt='View in Action' target='_blank'>
						<h1 className='text-2xl text-center underline order-2 font-headers'>
							{name}
						</h1>
					</a>
				</div>
				<p className='text-xs sm:text-base m-5 lg:m-10 font-body'>
					{description}
				</p>
				<div className='flex flex-col align-center justify-between m-5 sm:m-10 text-xs sm:text-base'>
					<div className='flex flex-wrap sm:flex-row align-middle'>
						Tools Used: {tools}
					</div>
				</div>
			</div>
			<div>
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
	);
}

export default PortfolioProjectExpand;
