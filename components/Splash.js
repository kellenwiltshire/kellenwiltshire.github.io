import React from 'react';
import Image from 'next/image';

const splash = () => {
	return (
		<div className='splash h-screen flex flex-col items-center justify-center'>
			<header className='text-3xl text-white bg-black bg-opacity-50 py-4 px-10 rounded'>
				<h1>Hi, I'm Kellen Wiltshire</h1>
				<h2>I'm a Web Developer (in training)</h2>
			</header>

			<div className='flex flex-row align-middle justify-center bg-black bg-opacity-50 rounded mt-16 text-white py-4 px-10'>
				<div className='flex flex-col align-middle justify-center text-center'>
					<a
						href='https://github.com/kellenwiltshire'
						alt='View on Github'
						target='_blank'
						rel='noreferrer'
					>
						<Image src='/github.png' alt='Github Logo' height={75} width={75} />
						<p className='items-center'>Github</p>
					</a>
				</div>
				<div className='flex flex-col align-middle justify-center text-center'>
					<a
						href='https://codepen.io/kellenwiltshire'
						target='_blank'
						rel='noreferrer'
					>
						<Image
							src='/codepen.png'
							alt='Codepen Logo'
							height={75}
							width={75}
						/>
						<p className='items-center'>Codepen</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default splash;