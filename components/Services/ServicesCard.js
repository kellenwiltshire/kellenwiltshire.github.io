import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon } from '@heroicons/react/outline';

export default function ServicesCard({ tier }) {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
		if (!inView) {
			controls.start('hidden');
		}
	}, [controls, inView]);
	const servicesVariants = {
		hidden: { scale: 0 },
		visible: {
			scale: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			animate={controls}
			variants={servicesVariants}
			key={tier.name}
			className='flex flex-col rounded-lg shadow-2xl overflow-hidden'
		>
			<div className='px-6 py-8 bg-white dark:bg-gray-700 sm:p-10 sm:pb-6'>
				<div>
					<h3
						className='inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600'
						id='tier-standard'
					>
						{tier.name}
					</h3>
				</div>
				<div className='mt-4 flex items-baseline text-6xl font-extrabold dark:text-white'>
					${tier.priceMonthly}
					<span className='ml-1 text-2xl font-medium text-gray-500 dark:text-gray-100'>
						/mo
					</span>
				</div>
				<p className='mt-5 text-lg text-gray-500 dark:text-gray-100'>
					{tier.description}
				</p>
			</div>
			<div className='flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 dark:bg-gray-700 space-y-6 sm:p-10 sm:pt-6'>
				<ul role='list' className='space-y-4'>
					{tier.features.map((feature) => (
						<li key={feature} className='flex items-start'>
							<div className='flex-shrink-0'>
								<CheckIcon
									className='h-6 w-6 text-green-500 dark:text-gray-100'
									aria-hidden='true'
								/>
							</div>
							<p className='ml-3 text-base text-gray-700 dark:text-gray-100'>
								{feature}
							</p>
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
}
