import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ArrowCompass from '../../components/icons/arrowcompass';

function geolocation() {
	useEffect(() => {
		const arrow = document.querySelector('.arrow');
		const speed = document.querySelector('.speed-value');
		const lat = document.querySelector('.lat');
		const long = document.querySelector('.long');

		navigator.geolocation.watchPosition(
			(data) => {
				console.log(data);
				speed.textContent = data.coords.speed;
				arrow.style.transform = `rotate(${data.coords.heading}deg)`;
				lat.textContent = data.coords.latitude;
				long.textContent = data.coords.longitude;
			},
			(err) => {
				console.log(err);
				alert('You need to enable Location Settings for this to work!');
			},
		);
	});
	return (
		<Layout>
			<Link href='/jsexercises'>
				<a>
					<div className='max-w-md py-8 px-4 flex flex-wrap flex-row justify-center items-center bg-blue-700 hover:text-white'>
						<p className='text-xl w-full text-center'>Back to JS Exercises</p>
					</div>
				</a>
			</Link>
			<div className='h-full w-full geolocationbody'>
				<ArrowCompass />
				<h1 className='speed geolocationh1 flex flex-col'>
					<div>
						<span className='speed-value'>0</span>
						<span className='units'>KM/H</span>
					</div>
					<div>
						<span className='lat'>0</span>
						<span className='units'>Latitude</span>
					</div>
					<div>
						<span className='long'>0</span>
						<span className='units'>Longitude</span>
					</div>
				</h1>
			</div>
		</Layout>
	);
}

export default geolocation;
