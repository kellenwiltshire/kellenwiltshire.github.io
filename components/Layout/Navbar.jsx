import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Code from '../SVG/Code';
import Toggle from '../Buttons/Toggle';
import Link from 'next/link';

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/#about' },
	// { name: 'Services', href: '/#services' },
	// { name: 'Portfolio', href: '/#portfolio' },
	{ name: 'Contact', href: '/#contact' },
];

export default function Navbar({ isDarkMode, setIsDarkMode }) {
	return (
		<div className='flex min-w-full flex-row justify-center'>
			<Popover>
				<div className='relative rounded-b-md bg-blue-900 py-2 px-4 sm:px-6 lg:px-8'>
					<nav className='relative flex items-center justify-between sm:h-10 lg:justify-start' aria-label='Global'>
						<div className='flex flex-shrink-0 flex-grow items-center lg:flex-grow-0'>
							<div className='flex w-full items-center justify-between md:w-auto'>
								<Link href='/' alt='Logo Link'>
									<a>
										<div>
											<Code colour='white' />
										</div>
									</a>
								</Link>
								<div className='-mr-2 flex items-center md:hidden'>
									<Popover.Button className=' inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-700 dark:text-white'>
										<span className='sr-only'>Open main menu</span>
										<MenuIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
						</div>
						<div className='hidden md:ml-10 md:block md:space-x-8 md:pr-4'>
							{navigation.map((item) => (
								<Link key={item.name} href={item.href}>
									<a className='font-medium text-white  hover:text-gray-300'>{item.name}</a>
								</Link>
							))}
							<Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
						</div>
					</nav>
				</div>

				<Transition
					as={Fragment}
					enter='duration-150 ease-out'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='duration-100 ease-in'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					<Popover.Panel
						focus
						className='absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden'
					>
						<div className='overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-gray-600'>
							<div className='flex items-center justify-between px-5 pt-4'>
								<div>
									<Code colour='black' />
								</div>
								<div className='-mr-2'>
									<Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-500 dark:text-white'>
										<span className='sr-only'>Close main menu</span>
										<XIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
							<div className='space-y-1 px-2 pt-2 pb-3'>
								{navigation.map((item) => (
									<Link key={item.name} href={item.href}>
										<a className='block rounded-md px-3 py-2 text-base font-medium text-black  hover:bg-gray-50 hover:text-gray-900 '>
											{item.name}
										</a>
									</Link>
								))}
								<div className='space-y-1 px-2 pt-2 pb-3'>
									<Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</div>
	);
}
