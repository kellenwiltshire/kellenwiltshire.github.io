import React from 'react';

export default function Code({ colour }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-code'
			width='44'
			height='44'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke={colour}
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<polyline points='7 8 3 12 7 16' />
			<polyline points='17 8 21 12 17 16' />
			<line x1='14' y1='4' x2='10' y2='20' />
		</svg>
	);
}
