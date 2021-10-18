import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function Contact() {
	return (
		<div className='bg-gray-100'>
			<div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
				<div className='relative bg-white shadow-xl'>
					<h2 className='sr-only'>Contact us</h2>

					<div className='grid grid-cols-1 lg:grid-cols-3'>
						{/* Contact information */}
						<div className='relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12'>
							<div
								className='absolute inset-0 pointer-events-none sm:hidden'
								aria-hidden='true'
							>
								<svg
									className='absolute inset-0 w-full h-full'
									width={343}
									height={388}
									viewBox='0 0 343 388'
									fill='none'
									preserveAspectRatio='xMidYMid slice'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
										fill='url(#linear1)'
										fillOpacity='.1'
									/>
									<defs>
										<linearGradient
											id='linear1'
											x1='254.553'
											y1='107.554'
											x2='961.66'
											y2='814.66'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#fff' />
											<stop offset={1} stopColor='#fff' stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div
								className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
								aria-hidden='true'
							>
								<svg
									className='absolute inset-0 w-full h-full'
									width={359}
									height={339}
									viewBox='0 0 359 339'
									fill='none'
									preserveAspectRatio='xMidYMid slice'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
										fill='url(#linear2)'
										fillOpacity='.1'
									/>
									<defs>
										<linearGradient
											id='linear2'
											x1='192.553'
											y1='28.553'
											x2='899.66'
											y2='735.66'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#fff' />
											<stop offset={1} stopColor='#fff' stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div
								className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
								aria-hidden='true'
							>
								<svg
									className='absolute inset-0 w-full h-full'
									width={160}
									height={678}
									viewBox='0 0 160 678'
									fill='none'
									preserveAspectRatio='xMidYMid slice'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
										fill='url(#linear3)'
										fillOpacity='.1'
									/>
									<defs>
										<linearGradient
											id='linear3'
											x1='192.553'
											y1='325.553'
											x2='899.66'
											y2='1032.66'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#fff' />
											<stop offset={1} stopColor='#fff' stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<h3 className='text-lg font-medium text-white'>Reach Out</h3>
							<p className='mt-6 text-base text-indigo-50 max-w-3xl'>
								Let's Create Something Awesome Together!
							</p>
							<dl className='mt-8 space-y-6'>
								<dt>
									<span className='sr-only'>Email</span>
								</dt>
								<dd className='flex text-base text-indigo-50'>
									<MailIcon
										className='flex-shrink-0 w-6 h-6 text-indigo-200'
										aria-hidden='true'
									/>
									<span className='ml-3'>
										webdevelopment@kellenwiltshire.com
									</span>
								</dd>
							</dl>
							<ul role='list' className='mt-8 flex space-x-12'>
								<li>
									<a
										className='text-indigo-200 hover:text-indigo-100'
										href='https://www.linkedin.com/in/kellenwiltshire/'
									>
										<span className='sr-only'>LinkedIn</span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											class='icon icon-tabler icon-tabler-brand-linkedin'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='#ffffff'
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
									</a>
								</li>

								<li>
									<a
										className='text-indigo-200 hover:text-indigo-100'
										href='https://github.com/kellenwiltshire'
									>
										<span className='sr-only'>GitHub</span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='icon icon-tabler icon-tabler-brand-github'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='#ffffff'
											fill='none'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path stroke='none' d='M0 0h24v24H0z' fill='none' />
											<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
										</svg>
									</a>
								</li>
							</ul>
						</div>

						{/* Contact form */}
						<div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
							<h3 className='text-lg font-medium text-gray-900'>
								Send us a message
							</h3>
							<form
								action='#'
								method='POST'
								className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
							>
								<div>
									<label
										htmlFor='first-name'
										className='block text-sm font-medium text-gray-900'
									>
										First name
									</label>
									<div className='mt-1'>
										<input
											type='text'
											name='first-name'
											id='first-name'
											autoComplete='given-name'
											className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor='last-name'
										className='block text-sm font-medium text-gray-900'
									>
										Last name
									</label>
									<div className='mt-1'>
										<input
											type='text'
											name='last-name'
											id='last-name'
											autoComplete='family-name'
											className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-900'
									>
										Email
									</label>
									<div className='mt-1'>
										<input
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
										/>
									</div>
								</div>
								<div>
									<div className='flex justify-between'>
										<label
											htmlFor='phone'
											className='block text-sm font-medium text-gray-900'
										>
											Phone
										</label>
										<span id='phone-optional' className='text-sm text-gray-500'>
											Optional
										</span>
									</div>
									<div className='mt-1'>
										<input
											type='text'
											name='phone'
											id='phone'
											autoComplete='tel'
											className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
											aria-describedby='phone-optional'
										/>
									</div>
								</div>
								<div className='sm:col-span-2'>
									<label
										htmlFor='subject'
										className='block text-sm font-medium text-gray-900'
									>
										Subject
									</label>
									<div className='mt-1'>
										<input
											type='text'
											name='subject'
											id='subject'
											className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
										/>
									</div>
								</div>
								<div className='sm:col-span-2'>
									<div className='flex justify-between'>
										<label
											htmlFor='message'
											className='block text-sm font-medium text-gray-900'
										>
											Message
										</label>
										<span id='message-max' className='text-sm text-gray-500'>
											Max. 500 characters
										</span>
									</div>
									<div className='mt-1'>
										<textarea
											id='message'
											name='message'
											rows={4}
											className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
											aria-describedby='message-max'
											defaultValue={''}
										/>
									</div>
								</div>
								<div className='sm:col-span-2 sm:flex sm:justify-end'>
									<button
										type='submit'
										className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
