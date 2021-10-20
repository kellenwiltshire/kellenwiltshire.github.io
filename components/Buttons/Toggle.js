import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Toggle({ isDarkMode, setIsDarkMode }) {
	const [enabled, setEnabled] = useState(false);

	const changeDark = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<Switch
			checked={isDarkMode}
			onChange={changeDark}
			className={classNames(
				isDarkMode ? 'bg-gray-600' : 'bg-gray-200',
				'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
			)}
		>
			<span className='sr-only'>Use setting</span>
			<span
				className={classNames(
					isDarkMode ? 'translate-x-5' : 'translate-x-0',
					'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
				)}
			>
				<span
					className={classNames(
						isDarkMode
							? 'opacity-0 ease-out duration-100'
							: 'opacity-100 ease-in duration-200',
						'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
					)}
					aria-hidden='true'
				>
					<SunIcon />
				</span>
				<span
					className={classNames(
						isDarkMode
							? 'opacity-100 ease-in duration-200'
							: 'opacity-0 ease-out duration-100',
						'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
					)}
					aria-hidden='true'
				>
					<MoonIcon />
				</span>
			</span>
		</Switch>
	);
}
