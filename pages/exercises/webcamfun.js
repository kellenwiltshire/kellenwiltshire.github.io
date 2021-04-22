import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

function webcamfun() {
	let ctx, canvas, video, strip, snap;

	useEffect(() => {
		video = document.querySelector('.webcamplayer');
		canvas = document.querySelector('.webcamphoto');
		ctx = canvas.getContext('2d');
		strip = document.querySelector('.strip');
		snap = document.querySelector('.snap');

		getVideo();
		video.addEventListener('canplay', paintToCanvas);
	}, []);

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: false })
			.then((localMediaStream) => {
				video.srcObject = localMediaStream;
				video.play();
			})
			.catch((err) => console.error('Oh NO!', err));
	};

	const paintToCanvas = () => {
		const width = video.videoWidth;
		const height = video.videoHeight;
		canvas.width = width;
		canvas.height = height;

		return setInterval(() => {
			ctx.drawImage(video, 0, 0, width, height);
			let pixels = ctx.getImageData(0, 0, width, height);

			pixels = greenScreen(pixels);

			ctx.putImageData(pixels, 0, 0);
		}, 16);
	};

	const takePhoto = () => {
		snap.currentTime = 0;
		snap.play();

		const data = canvas.toDataURL('image/jpeg');
		const link = document.createElement('a');
		link.href = data;
		link.setAttribute('download', 'handsome');
		link.innerHTML = `<img src="${data}" alt="Webcam Photo" />`;
		strip.insertBefore(link, strip.firstChild);
	};

	const redEffect = (pixels) => {
		for (let i = 0; i < pixels.data.length; i += 4) {
			pixels.data[i + 0] = pixels.data[i + 0] + 100; //Red
			pixels.data[i + 1] = pixels.data[i + 1] - 50; //Green
			pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //Blue
		}
		return pixels;
	};

	const rgbSplit = (pixels) => {
		for (let i = 0; i < pixels.data.length; i += 4) {
			pixels.data[i - 150] = pixels.data[i + 0]; //Red
			pixels.data[i + 100] = pixels.data[i + 1]; //Green
			pixels.data[i - 150] = pixels.data[i + 2]; //Blue
		}
		return pixels;
	};

	const greenScreen = (pixels) => {
		const levels = {};

		document.querySelectorAll('.rgb input').forEach((input) => {
			levels[input.name] = input.value;
		});

		console.log(levels);

		for (let i = 0; i < pixels.data.length; i = i + 4) {
			const red = pixels.data[i + 0];
			const green = pixels.data[i + 1];
			const blue = pixels.data[i + 2];
			const alpha = pixels.data[i + 3];

			if (
				red >= levels.rmin &&
				green >= levels.gmin &&
				blue >= levels.bmin &&
				red <= levels.rmax &&
				green <= levels.gmax &&
				blue <= levels.bmax
			) {
				pixels.data[i + 3] = 0;
			}
		}

		return pixels;
	};

	return (
		<Layout title='Webcam Fun'>
			<Link href='/jsexercises'>
				<a>
					<div className='w-full py-8 px-4 flex flex-wrap flex-row justify-center items-center bg-blue-700 hover:text-white'>
						<p className='text-xl w-full text-center'>Back to JS Exercises</p>
					</div>
				</a>
			</Link>
			<div className='w-full h-full'>
				<div className='m-8 w-full h-auto flex flex-row flex-wrap justify-center'>
					<h1 className='text-2xl text-center w-full'>
						Mess around! Take a Photo and save it!
					</h1>
					<button
						className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-5'
						onClick={takePhoto}
					>
						Take Photo
					</button>

					<div className='w-full h-full'>
						<div className='w-full flex flex-row justify-evenly'>
							<div className='rgb'>
								<label htmlFor='rmin'>Red Min:</label>
								<input
									className='border border-black'
									type='range'
									min={0}
									max={255}
									name='rmin'
								/>
								<label htmlFor='rmax'>Red Max:</label>
								<input
									className='border border-black'
									type='range'
									min={0}
									max={255}
									name='rmax'
								/>
							</div>

							<div className='rgb'>
								<label htmlFor='gmin'>Green Min:</label>
								<input
									className='border border-black'
									type='range'
									min={0}
									max={255}
									name='gmin'
								/>
								<label htmlFor='gmax'>Green Max:</label>
								<input
									className='border border-black'
									type='range'
									min={0}
									max={255}
									name='gmax'
								/>
							</div>

							<div className='rgb'>
								<label htmlFor='bmin'>Blue Min:</label>
								<input
									className='border border-black'
									type='range'
									min={0}
									max={255}
									name='bmin'
								/>
								<label htmlFor='bmax'>Blue Max:</label>
								<input
									className='border border-black'
									type='range'
									min={0}
									max={255}
									name='bmax'
								/>
							</div>
						</div>
					</div>

					<canvas className='w-2/3 float-left webcamphoto'></canvas>
					<video className='webcamplayer'></video>
					<div className='strip flex flex-row flex-wrap'></div>
				</div>
			</div>

			<audio className='snap' src='/sounds/snap.mp3' hidden></audio>
		</Layout>
	);
}

export default webcamfun;
