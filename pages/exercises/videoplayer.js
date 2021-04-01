import React, { useEffect } from 'react';
import Layout from '../../components/Layout';

function videoplayer() {
	let player;
	let video;
	let progress;
	let progressBar;
	let toggle;
	let skipButtons;
	let ranges;

	//Build Functions
	const togglePlay = () => {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	};

	const updateButton = (e) => {
		const icon = e.target.paused ? '►' : '❚ ❚';
		toggle.textContent = icon;
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

	useEffect(() => {
		// Get Our Elements
		player = document.querySelector('.player');
		video = player.querySelector('.viewer');
		progress = player.querySelector('.progress');
		progressBar = player.querySelector('.progress__filled');
		toggle = player.querySelector('.toggle');
		skipButtons = player.querySelectorAll('[data-skip]');
		ranges = player.querySelectorAll('.player__slider');

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
	});
	return (
		<Layout title='Video Player'>
			<div className='videoPlayerBackground w-full h-full'>
				<div className='player'>
					<video className='player__video viewer' src='/652333414.mp4'></video>

					<div className='player__controls'>
						<div className='progress'>
							<div className='progress__filled'></div>
						</div>
						<button className='player__button toggle' title='Toggle Play'>
							►
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
							« 10s
						</button>
						<button data-skip='25' className='player__button'>
							25s »
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default videoplayer;
