import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

function drumkit() {
	useEffect(() => {
		window.addEventListener('keydown', playSound);
	});

	const removeTransition = (e) => {
		if (e.propertyName !== 'transform') return;
		e.target.classList.remove('playing');
	};
	const playSound = (e) => {
		const keys = document.querySelectorAll('.key');
		const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if (!sound) return;
		sound.currentTime = 0;
		sound.play();

		key.classList.add('playing');
		keys.forEach((key) => {
			key.addEventListener('transitionend', removeTransition);
		});
	};

	return (
		<Layout title='drumkit'>
			<Link href='/funzone'>
				<a>
					<div className='max-w-md py-8 px-4 flex flex-wrap flex-row justify-center items-center bg-blue-700 hover:text-white'>
						<p className='text-xl w-full text-center'>Back to Fun Zone</p>
					</div>
				</a>
			</Link>
			<div className='drumbackground w-full h-full'>
				<div className='keys'>
					<div data-key='65' className='key'>
						<kbd>A</kbd>
						<span className='sound'>clap</span>
					</div>
					<div data-key='83' className='key'>
						<kbd>S</kbd>
						<span className='sound'>hihat</span>
					</div>
					<div data-key='68' className='key'>
						<kbd>D</kbd>
						<span className='sound'>kick</span>
					</div>
					<div data-key='70' className='key'>
						<kbd>F</kbd>
						<span className='sound'>openhat</span>
					</div>
					<div data-key='71' className='key'>
						<kbd>G</kbd>
						<span className='sound'>boom</span>
					</div>
					<div data-key='72' className='key'>
						<kbd>H</kbd>
						<span className='sound'>ride</span>
					</div>
					<div data-key='74' className='key'>
						<kbd>J</kbd>
						<span className='sound'>snare</span>
					</div>
					<div data-key='75' className='key'>
						<kbd>K</kbd>
						<span className='sound'>tom</span>
					</div>
					<div data-key='76' className='key'>
						<kbd>L</kbd>
						<span className='sound'>tink</span>
					</div>
				</div>
			</div>

			<audio data-key='65' src='/sounds/clap.mp3' type='audio/mpeg'></audio>
			<audio data-key='83' src='/sounds/hihat.mp3' type='audio/mpeg'></audio>
			<audio data-key='68' src='/sounds/kick.mp3' type='audio/mpeg'></audio>
			<audio data-key='70' src='/sounds/openhat.mp3' type='audio/mpeg'></audio>
			<audio data-key='71' src='/sounds/boom.mp3' type='audio/mpeg'></audio>
			<audio data-key='72' src='/sounds/ride.mp3' type='audio/mpeg'></audio>
			<audio data-key='74' src='/sounds/snare.mp3' type='audio/mpeg'></audio>
			<audio data-key='75' src='/sounds/tom.mp3' type='audio/mpeg'></audio>
			<audio data-key='76' src='/sounds/tink.mp3' type='audio/mpeg'></audio>
		</Layout>
	);
}

export default drumkit;
