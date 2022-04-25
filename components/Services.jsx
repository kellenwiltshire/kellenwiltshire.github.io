import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ServicesCard from './Services/ServicesCard';

const tiers = [
	{
		name: 'Brochure Site',
		href: '#',
		priceMonthly: 100,
		description: 'Create the Perfect Site for Your Small Business',
		features: [
			'Starting at $0 Down',
			'5 Page Site',
			'Unlimited Revisions before Launch',
			'Ongoing Support for Content Updates',
			'Domain Purchasing and Hosting Included',
			'Responsive and Mobile Friendly',
			'Monthly Analytics Updates and Security Reviews',
			'Search Engine Optimization',
		],
	},
	{
		name: 'Shopify',
		href: '#',
		priceMonthly: 150,
		description: 'Create a Unique and Awesome Site for Your Shopify Store',
		features: [
			'Low Upfront Cost',
			'Unlimited Revisions before Launch',
			'Ongoing Support for Content Updates',
			'Domain Purchasing Included',
			'Responsive and Mobile Friendly',
			'Monthly Analytics Updates and Security Reviews',
			'Search Engine Optimization',
		],
	},
	{
		name: 'Web App',
		href: '#',
		priceMonthly: 300,
		description: 'Create a Unique and Awesome Web App for Your Online Service',
		features: [
			'Low Upfront Cost',
			'Unlimited Revisions before Launch',
			'Ongoing Support for Content Updates',
			'Domain Purchasing Included',
			'Responsive and Mobile Friendly',
			'Monthly Analytics Updates and Security Reviews',
			'Search Engine Optimization',
		],
	},
];

export default function Services() {
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

	const titleVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	};
	return (
		<div id='services' className='bg-blue-900'>
			<div className='pt-12 sm:pt-16 lg:pt-24'>
				<div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
					<motion.div
						ref={ref}
						animate={controls}
						variants={titleVariants}
						className='mx-auto max-w-3xl space-y-2 lg:max-w-none'
					>
						<h2 className='text-lg font-semibold uppercase leading-6 tracking-wider text-gray-300'>Pricing</h2>
						<p className='text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl'>What Can I Help You Create?</p>
					</motion.div>
				</div>
			</div>
			<div className='mt-8 bg-gray-50 pb-12 dark:bg-gray-700 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24'>
				<div className='relative'>
					<div className='absolute inset-0 h-3/4 bg-blue-900' />
					<div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-3 lg:gap-5 lg:space-y-0'>
							{tiers.map((tier) => (
								<ServicesCard key={tier.name} tier={tier} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
