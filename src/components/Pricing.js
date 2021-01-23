import React from 'react';

const pricing = () => {
	return (
		<div
			id='component'
			className='w-screen flex flex-row justify-center flex-wrap items-center'
		>
			<h1 className='text-4xl sm:text-6xl text-gray-600 border-b-2 w-full text-center order-first'>
				Services I Offer
			</h1>
			{/* 5 Page with 12 Month Support */}
			<div class='w-full lg:w-1/2 xl:w-1/6 shadow m-3 order-2 xl:order-3'>
				<div class='text-center justify-center align-middle flex flex-col h-20 p-2 m-0 bg-green-400 sm:text-xs'>
					<h1 className='text-xl'>5 Page Website with Support for 12 Months</h1>
				</div>
				<div class='text-center justify-center align-middle flex flex-col h-auto m-3 sm:text-xs'>
					<h3 className='text-base'>Starting at $150/month</h3>
					<ul className='leading-loose list-disc text-left m-5 text-base'>
						<li>Static 5 Page Website</li>
						<li>Unlimited Revisions before initial Launch</li>
						<li>Ongoing support for content updates</li>
						<li>Domain Purchasing and Hosting Included</li>
						<li>Once a Year Site Remodel</li>
						<li>Responsive and Mobile Friendly</li>
						<li>
							Perfect for a Small Business that needs ongoing support and
							updates
						</li>
					</ul>
				</div>
				<div class='text-center justify-center align-middle flex flex-col h-20 p-2 m-0 bg-green-400 sm:text-xs'>
					<h1 className='text-xl'>Best Deal!</h1>
				</div>
			</div>
			{/* 5 Page Standard Website */}
			<div class='w-full lg:w-1/2 xl:w-1/6 shadow m-3 order-3 xl:order-2'>
				<div class='text-center justify-center align-middle flex flex-col h-20 p-2 m-0 sm:text-xs bg-gray-300'>
					<h1 className='text-xl'>Standard 5 Page Website</h1>
				</div>
				<div class='text-center justify-center align-middle flex flex-col h-auto m-3 sm:text-xs'>
					<h3 className='text-base'>Starting at $600</h3>
					<ul className='leading-loose list-disc text-left m-5 text-base'>
						<li>Static 5 Page Website</li>
						<li>Unlimited Revisions before Delivery</li>
						<li>30 Day Support after Delivery</li>
						<li>Responsive and Mobile Friendly</li>
						<li>
							Perfect for a Small Business looking to make their presence
							online!
						</li>
					</ul>
				</div>
			</div>
			{/* 5 Page with 6 Month Support */}
			<div class='w-full lg:w-1/2 xl:w-1/6 shadow m-3 order-4 xl:order-4'>
				<div class='text-center justify-center align-middle flex flex-col h-20 p-2 m-0 sm:text-xs bg-gray-300'>
					<h1 className='text-xl'>5 Page Website with Support for 6 Months</h1>
				</div>
				<div class='text-center justify-center align-middle flex flex-col h-auto m-3 sm:text-xs'>
					<h3 className='text-base'>Starting at $200/month</h3>
					<ul className='leading-loose list-disc text-left m-5 text-base'>
						<li>Static 5 Page Website</li>
						<li>Unlimited Revisions before Initial Launch</li>
						<li>Ongoing support for content updates</li>
						<li>Domain Purchasing and Hosting Included</li>
						<li>Responsive and Mobile Friendly</li>
						<li>
							Perfect for a Small Business that needs ongoing support and
							updates
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default pricing;
