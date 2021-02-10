import React from 'react';
import Image from 'next/image';

function PortfolioProjectCard({ img }) {
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
	return <div className='max-w-2xl'>{projectImage()}</div>;
}

export default PortfolioProjectCard;
