import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

function textdropshadow() {
	let hero, text;
	const walk = 100; //100px
	useEffect(() => {
		hero = document.querySelector('.hero');
		text = hero.querySelector('h1');

		hero.addEventListener('mousemove', shadow);
	});

	const shadow = (e) => {
		const { offsetWidth: width, offsetHeight: height } = hero;
		let { offsetX: x, offsetY: y } = e;

		if (e !== e.target) {
			x = x + e.target.offsetLeft;
			y = y + e.target.offsetTop;
		}

		const xWalk = Math.round((x / width) * walk - walk / 2);
		const yWalk = Math.round((y / height) * walk - walk / 2);

		text.style.textShadow = `${xWalk}px ${yWalk}px 0 #2563eb`;
	};

	return (
		<Layout title='Mouse Drop Shadow'>
			<Link href='/jsexercises'>
				<a>
					<div className='max-w-md py-8 px-4 flex flex-wrap flex-row justify-center items-center bg-blue-700 hover:text-white'>
						<p className='text-xl w-full text-center'>Back to JS Exercises</p>
					</div>
				</a>
			</Link>

			<div className='h-full w-full'>
				<div className='hero'>
					<h1 className='mouseh1'>🔥WOAH!</h1>
				</div>
			</div>
		</Layout>
	);
}

export default textdropshadow;
