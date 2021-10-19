const people = [
	{
		name: 'Kellen Wiltshire',
		role: 'Web Developer',
		imageUrl: 'https://avatars.githubusercontent.com/u/31140634?v=4',
		bio: `During this COVID-19 Pandemic, I have taught myself two new things. First, I can now make bread like nobody's business. Second, I learned how to build sweet websites. Though I am still starting out, I am eager to learn more and dive deeper into the world of Web Development

        Although I have a fulfilling career helping people seek justice in the Legal System, I was missing using my brain in a technical role. With the extra time working from home I decided to start teaching myself Web Development with the help of the Udemy course Zero-to-Mastery.`,
		githubUrl: 'https://github.com/kellenwiltshire',
		linkedinUrl: 'https://www.linkedin.com/in/kellenwiltshire/',
	},
];

export default function About() {
	return (
		<div id='about' className='bg-gray-50'>
			<div className='pt-12 sm:pt-16 lg:pt-24'>
				<div className='max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
					<div className='max-w-3xl mx-auto space-y-2 lg:max-w-none'>
						<h2 className='text-lg leading-6 font-semibold text-black uppercase tracking-wider'>
							About Me
						</h2>
						<p className='text-3xl font-extrabold text-black sm:text-4xl lg:text-5xl'>
							Who Am I?
						</p>
					</div>
				</div>
			</div>
			<div className='mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<ul
						role='list'
						className='space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0'
					>
						{people.map((person) => (
							<li key={person.name} className='sm:py-8'>
								<div className='space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0'>
									<div className='aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'>
										<img
											className='object-cover shadow-lg rounded-lg'
											src={person.imageUrl}
											alt=''
										/>
									</div>
									<div className='sm:col-span-2'>
										<div className='space-y-4'>
											<div className='text-lg leading-6 font-medium space-y-1'>
												<h3>{person.name}</h3>
												<p className='text-indigo-600'>{person.role}</p>
											</div>
											<div className='text-lg'>
												<p className='text-gray-500'>{person.bio}</p>
											</div>
											<ul role='list' className='flex space-x-5'>
												<li>
													<a
														href={person.twitterUrl}
														className='text-gray-400 hover:text-gray-500'
													>
														<span className='sr-only'>Twitter</span>
														<svg
															className='w-5 h-5'
															aria-hidden='true'
															fill='currentColor'
															viewBox='0 0 20 20'
														>
															<path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
														</svg>
													</a>
												</li>
												<li>
													<a
														href={person.linkedinUrl}
														className='text-gray-400 hover:text-gray-500'
													>
														<span className='sr-only'>LinkedIn</span>
														<svg
															className='w-5 h-5'
															aria-hidden='true'
															fill='currentColor'
															viewBox='0 0 20 20'
														>
															<path
																fillRule='evenodd'
																d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
																clipRule='evenodd'
															/>
														</svg>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
