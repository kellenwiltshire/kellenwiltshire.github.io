import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

function jsclock() {
	useEffect(() => {
		setInterval(setDate, 1000);
	});
	const setDate = () => {
		const secondHand = document.querySelector('.second-hand');
		const minuteHand = document.querySelector('.min-hand');
		const hourHand = document.querySelector('.hour-hand');

		const now = new Date();
		const seconds = now.getSeconds();
		const minutes = now.getMinutes();
		const hours = now.getHours();

		const secondsDegrees = (seconds / 60) * 360 + 90;
		const minutesDegrees = (minutes / 60) * 360 + 90;
		const hoursDegrees = (hours / 12) * 360 + 90;

		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
		hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	};

	return (
		<Layout title='JS Clock'>
			<Link href='/funzone'>
				<a>
					<div className='max-w-md py-8 px-4 flex flex-wrap flex-row justify-center items-center bg-blue-700 hover:text-white'>
						<p className='text-xl w-full text-center'>Back to Fun Zone</p>
					</div>
				</a>
			</Link>
			<div className='clockbackground w-full h-screen'>
				<div className='clock'>
					<div className='clock-face'>
						<div className='hand hour-hand'></div>
						<div className='hand min-hand'></div>
						<div className='hand second-hand'></div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default jsclock;
