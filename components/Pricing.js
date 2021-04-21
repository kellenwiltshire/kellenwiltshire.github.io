import React from 'react';
import Checkmark from './icons/Checkmark';

const pricing = () => {
	return (
		<div className='container px-5 py-24 mx-auto'>
			<div className='flex flex-col text-center w-full mb-10'>
				<h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>
					Pricing
				</h1>
				<p className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500'>
					Whatever your budget, I've got a solution!
				</p>
			</div>
			<div className='flex flex-wrap justify-center -m-4'>
				<div className='p-4 my-3 xl:w-1/4 md:w-1/2 w-full'>
					<div className='h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col'>
						<h2 className='text-xl tracking-widest title-font mb-1 font-medium'>
							5 Page Site
						</h2>
						<span className='text-xs ml-1 font-normal text-gray-500'>
							Staring At $0 Down and
						</span>

						<h1 className='text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
							<span>$150</span>
							<span className='text-lg ml-1 font-normal text-gray-500'>
								/mo
							</span>
						</h1>
						<p className='flex items-center text-gray-600 mb-2'>
							<Checkmark />
							Unlimited Revisions before Launch
						</p>
						<p className='flex items-center text-gray-600 mb-2'>
							<Checkmark />
							Ongoing Support for Content Updates
						</p>
						<p className='flex items-center text-gray-600 mb-2'>
							<Checkmark />
							Domain Purchasing and Hosting Included
						</p>
						<p className='flex items-center text-gray-600 mb-2'>
							<Checkmark />
							Responseive and Mobile Friendly
						</p>
						<p className='flex items-center text-gray-600 mb-6'>
							<Checkmark />
							Monthly Analytics Updates and Security Reviews
						</p>
					</div>
				</div>
				<div className='p-4 my-3 xl:w-1/4 md:w-1/2 w-full'>
					<div className='h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col'>
						<h2 className='text-xl tracking-widest title-font mb-1 font-medium'>
							Square/Shopify Site
						</h2>
						<span className='text-xs ml-1 font-normal text-gray-500'>
							Staring At
						</span>

						<h1 className='text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
							<span>$150</span>
							<span className='text-lg ml-1 font-normal text-gray-500'>
								/mo
							</span>
						</h1>
						<p className='flex items-center text-gray-600 mb-2'>
							<Checkmark />
							Unlimited Revisions before Launch
						</p>
						<p className='flex items-center text-gray-600 mb-2'>
							<Checkmark />
							Ongoing Support for Content Updates
						</p>
						<p className='flex items-center text-gray-600 mb-2'>
							<Checkmark />
							<p>
								Initial Domain Purchasing and Hosting Included
								<sub className='text-xs'>
									(additional fees may apply depending on traffic)
								</sub>
							</p>
						</p>
						<p className='flex items-center text-gray-600 mb-2'>
							<Checkmark />
							Responseive and Mobile Friendly
						</p>
						<p className='flex items-center text-gray-600 mb-6'>
							<Checkmark />
							Monthly Analytics Updates and Security Reviews
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default pricing;
