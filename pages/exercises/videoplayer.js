import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Playbutton from '../../components/icons/Playbutton';
import Pausebutton from '../../components/icons/Pausebutton';

function videoplayer() {
	let player;
	let video;
	let progress;
	let progressBar;
	let toggle;
	let skipButtons;
	let ranges;
	let fullScreen;
	let isFullscreen = false;
	const [isPlaying, setIsPlaying] = useState(false);

	//Build Functions
	const togglePlay = () => {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	};

	const updateButton = (e) => {
		setIsPlaying(!isPlaying);
		const icon = e.target.pause;
		// toggle.innerHTML = icon;
	};

	const skip = (e) => {
		video.currentTime += parseFloat(e.target.dataset.skip);
	};

	const handleRangeUpdate = (e) => {
		video[e.target.name] = e.target.value;
	};

	const handleProgress = () => {
		const percent = (video.currentTime / video.duration) * 100;
		progressBar.style.flexBasis = `${percent}%`;
	};

	const scrub = (e) => {
		const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
		video.currentTime = scrubTime;
	};

	const openFullscreen = () => {
		isFullscreen = !isFullscreen;
		if (player.requestFullscreen) {
			player.requestFullscreen();
		} else if (player.webkitRequestFullscreen) {
			player.webkitRequestFullscreen();
		} else if (player.msRequestFullscreen) {
			player.msRequestFullscreen();
		}
	};

	const closeFullscreen = () => {
		isFullscreen = !isFullscreen;
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	};

	useEffect(() => {
		// Get Our Elements
		player = document.querySelector('.player');
		video = player.querySelector('.viewer');
		progress = player.querySelector('.progress');
		progressBar = player.querySelector('.progress__filled');
		toggle = player.querySelector('.toggle');
		skipButtons = player.querySelectorAll('[data-skip]');
		ranges = player.querySelectorAll('.player__slider');
		fullScreen = player.querySelector('#fullscreen');

		//Hook Up Listeners
		video.addEventListener('click', togglePlay);
		video.addEventListener('play', updateButton);
		video.addEventListener('pause', updateButton);
		video.addEventListener('timeupdate', handleProgress);

		toggle.addEventListener('click', togglePlay);
		skipButtons.forEach((button) => {
			button.addEventListener('click', skip);
		});

		ranges.forEach((range) =>
			range.addEventListener('change', handleRangeUpdate),
		);
		ranges.forEach((range) =>
			range.addEventListener('mousemove', handleRangeUpdate),
		);

		let mousedown = false;

		progress.addEventListener('click', scrub);
		progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
		progress.addEventListener('mousedown', () => (mousedown = true));
		progress.addEventListener('mouseup', () => (mousedown = false));

		fullScreen.addEventListener('click', () => {
			console.log(isFullscreen);
			if (!isFullscreen) {
				openFullscreen();
			} else {
				closeFullscreen();
			}
		});
	});
	return (
		<Layout title='Video Player'>
			<Link href='/jsexercises'>
				<a>
					<div className='max-w-md py-8 px-4 flex flex-wrap flex-row justify-center items-center bg-blue-700 hover:text-white'>
						<p className='text-xl w-full text-center'>Back to JS Exercises</p>
					</div>
				</a>
			</Link>
			<div className='videoPlayerBackground w-full h-full'>
				<div className='player'>
					<video className='player__video viewer' src='/652333414.mp4'></video>

					<div className='player__controls'>
						<div className='progress'>
							<div className='progress__filled'></div>
						</div>
						<button className='player__button toggle' title='Toggle Play'>
							{isPlaying ? <Playbutton /> : <Pausebutton />}
						</button>
						<input
							type='range'
							name='volume'
							className='player__slider'
							min='0'
							max='1'
							step='0.05'
							defaultValue='1'
						/>
						<input
							type='range'
							name='playbackRate'
							className='player__slider'
							min='0.5'
							max='2'
							step='0.1'
							defaultValue='1'
						/>
						<button data-skip='-10' className='player__button'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-player-skip-back'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='#ffffff'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M20 5v14l-12 -7z' />
								<line x1='4' y1='5' x2='4' y2='19' />
							</svg>
						</button>
						<button data-skip='25' className='player__button'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-player-skip-forward'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='#ffffff'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M4 5v14l12 -7z' />
								<line x1='20' y1='5' x2='20' y2='19' />
							</svg>
						</button>
						<button id='fullscreen' className='player__button'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-arrows-maximize'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='#ffffff'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<polyline points='16 4 20 4 20 8' />
								<line x1='14' y1='10' x2='20' y2='4' />
								<polyline points='8 20 4 20 4 16' />
								<line x1='4' y1='20' x2='10' y2='14' />
								<polyline points='16 20 20 20 20 16' />
								<line x1='14' y1='14' x2='20' y2='20' />
								<polyline points='8 4 4 4 4 8' />
								<line x1='4' y1='4' x2='10' y2='10' />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default videoplayer;
