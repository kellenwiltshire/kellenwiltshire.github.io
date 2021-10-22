import React from 'react';

export default function ContactComplete() {
	return (
		<div id='contact' className='relative bg-gray-50 dark:bg-gray-700'>
			<div className='lg:absolute lg:inset-0'>
				<div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
					<img
						className='h-56 w-full object-cover lg:absolute lg:h-full'
						src='/contactpicture.jpg'
						alt=''
					/>
				</div>
			</div>
			<div className='relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2'>
				<div className='lg:pr-8'>
					<div className='max-w-md mx-auto sm:max-w-lg lg:mx-0'>
						<div className='text-gray-600 body-font'>
							<div className='container mx-auto flex px-5 items-center justify-center flex-col'>
								<div className='text-center lg:w-2/3 w-full'>
									<h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
										Thank you for your message!
									</h1>
									<p className='mb-8 leading-relaxed'>
										You can also contact me at
										webdevelopment@kellenwiltshire.com!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
