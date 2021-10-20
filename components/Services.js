import { CheckIcon } from '@heroicons/react/outline';

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
			'Search Engine Optomization',
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
			'Search Engine Optomization',
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
			'Search Engine Optomization',
		],
	},
];

export default function Services() {
	return (
		<div id='services' className='bg-blue-600'>
			<div className='pt-12 sm:pt-16 lg:pt-24'>
				<div className='max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
					<div className='max-w-3xl mx-auto space-y-2 lg:max-w-none'>
						<h2 className='text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider'>
							Pricing
						</h2>
						<p className='text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl'>
							What Can I Help You Create?
						</p>
					</div>
				</div>
			</div>
			<div className='mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24'>
				<div className='relative'>
					<div className='absolute inset-0 h-3/4 bg-blue-600' />
					<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0'>
							{tiers.map((tier) => (
								<div
									key={tier.name}
									className='flex flex-col rounded-lg shadow-2xl overflow-hidden'
								>
									<div className='px-6 py-8 bg-white sm:p-10 sm:pb-6'>
										<div>
											<h3
												className='inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600'
												id='tier-standard'
											>
												{tier.name}
											</h3>
										</div>
										<div className='mt-4 flex items-baseline text-6xl font-extrabold'>
											${tier.priceMonthly}
											<span className='ml-1 text-2xl font-medium text-gray-500'>
												/mo
											</span>
										</div>
										<p className='mt-5 text-lg text-gray-500'>
											{tier.description}
										</p>
									</div>
									<div className='flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6'>
										<ul role='list' className='space-y-4'>
											{tier.features.map((feature) => (
												<li key={feature} className='flex items-start'>
													<div className='flex-shrink-0'>
														<CheckIcon
															className='h-6 w-6 text-green-500'
															aria-hidden='true'
														/>
													</div>
													<p className='ml-3 text-base text-gray-700'>
														{feature}
													</p>
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
