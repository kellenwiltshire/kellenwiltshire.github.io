import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

function cssvariables() {
	useEffect(() => {
		const inputs = document.querySelectorAll('.controls input');

		inputs.forEach((input) => input.addEventListener('change', handleUpdate));
		inputs.forEach((input) =>
			input.addEventListener('mousemove', handleUpdate),
		);
	});

	const handleUpdate = (e) => {
		const suffix = e.target.dataset.sizing || '';
		document.documentElement.style.setProperty(
			`--${e.target.name}`,
			e.target.value + suffix,
		);
	};
	return (
		<Layout title='CSS Variables'>
			<Link href='/jsexercises'>
				<a>
					<div className='max-w-md py-8 px-4 flex flex-wrap flex-row justify-center items-center bg-blue-700 hover:text-white'>
						<p className='text-xl w-full text-center'>Back to JS Exercises</p>
					</div>
				</a>
			</Link>
			<div className='cssvariables h-screen w-full flex flex-wrap justify-center'>
				<h2 className='w-full'>
					Update CSS Variables with <span className='hl'>JS</span>
				</h2>
				<div className='controls w-full'>
					<label htmlFor='spacing'>Spacing:</label>
					<input
						id='spacing'
						type='range'
						name='spacing'
						min='10'
						max='200'
						defaultValue='10'
						data-sizing='px'
					/>

					<label htmlFor='blur'>Blur:</label>
					<input
						id='blur'
						type='range'
						name='blur'
						min='0'
						max='25'
						defaultValue='10'
						data-sizing='px'
					/>

					<label htmlFor='base'>Base Color</label>
					<input id='base' type='color' name='base' defaultValue='#ffc600' />
				</div>
				<img className='cssVarImg' src='/stanleycup.jpg'></img>
			</div>
		</Layout>
	);
}

export default cssvariables;
