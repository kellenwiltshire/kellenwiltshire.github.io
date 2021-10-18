const navigation = [
	{
		name: 'LinkedIn',
		href: '#',
		icon: () => (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-brand-linkedin'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				strokeWidth='1.5'
				stroke='#597e8d'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<rect x='4' y='4' width='16' height='16' rx='2' />
				<line x1='8' y1='11' x2='8' y2='16' />
				<line x1='8' y1='8' x2='8' y2='8.01' />
				<line x1='12' y1='16' x2='12' y2='11' />
				<path d='M16 16v-3a2 2 0 0 0 -4 0' />
			</svg>
		),
	},

	{
		name: 'GitHub',
		href: '#',
		icon: (props) => (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-brand-github'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				strokeWidth='1.5'
				stroke='#597e8d'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
			</svg>
		),
	},
];

export default function Footer() {
	return (
		<footer className='bg-white'>
			<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
				<div className='flex justify-center space-x-6 md:order-2'>
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className='text-gray-400 hover:text-gray-500'
						>
							<span className='sr-only'>{item.name}</span>
							<item.icon className='h-6 w-6' aria-hidden='true' />
						</a>
					))}
				</div>
				<div className='mt-8 md:mt-0 md:order-1'>
					<p className='text-center text-base text-gray-400'>
						&copy; 2021 Kellen Wiltshire Web Development All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
