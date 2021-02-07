import React from 'react';
import Link from 'next/link';

function Navigation() {
	return (
		<nav class='bg-blue-600 px-8 shadow-md w-full'>
			<div class='-mb-px flex justify-center'>
				<Link href='/'>
					<a className='no-underline text-white uppercase tracking-wide font-bold text-xs p-3 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600'>
						Home
					</a>
				</Link>
				<Link href='/Portfolio'>
					<a className='no-underline text-white uppercase tracking-wide font-bold text-xs p-3 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600'>
						Portfolio
					</a>
				</Link>
				<Link href='/Contact'>
					<a className='no-underline text-white uppercase tracking-wide font-bold text-xs p-3 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600'>
						Contact Me
					</a>
				</Link>
			</div>
		</nav>
	);
}

export default Navigation;
