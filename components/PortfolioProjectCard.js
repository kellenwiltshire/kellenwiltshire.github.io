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
	return <div className='max-w-lg'>{projectImage()}</div>;
}

export default PortfolioProjectCard;
