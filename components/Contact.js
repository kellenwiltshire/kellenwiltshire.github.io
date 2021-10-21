import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
	const showSubmitSuccess = () => {
		document.getElementById('success').style.visibility = 'visible';
	};
	const [state, handleSubmit] = useForm('xvoveere');
	if (state.succeeded) {
		return (
			<div className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 items-center justify-center flex-col'>
					<div className='text-center lg:w-2/3 w-full'>
						<h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
							Thank you for your message!
						</h1>
						<p className='mb-8 leading-relaxed'>
							You can also contact me at webdevelopment@kellenwiltshire.com!
						</p>
					</div>
				</div>
			</div>
		);
	}
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
						<div className='text-center sm:text-left'>
							<h2 className='text-lg leading-6 font-semibold text-black dark:text-white uppercase tracking-wider'>
								Let's work together
							</h2>
							<p className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl lg:text-5xl'>
								I'd Love to Hear From You!
							</p>
						</div>
						<form
							onSubmit={handleSubmit}
							className='mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
						>
							<div>
								<label
									htmlFor='first-name'
									className='block text-sm font-medium text-gray-700 dark:text-gray-100'
								>
									First name
								</label>
								<div className='mt-1'>
									<input
										type='text'
										name='first-name'
										id='first-name'
										autoComplete='given-name'
										className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='last-name'
									className='block text-sm font-medium text-gray-700 dark:text-gray-100'
								>
									Last name
								</label>
								<div className='mt-1'>
									<input
										type='text'
										name='last-name'
										id='last-name'
										autoComplete='family-name'
										className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700 dark:text-gray-100'
								>
									Email
								</label>
								<div className='mt-1'>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
									/>
								</div>
							</div>

							<div className='sm:col-span-2'>
								<div className='flex justify-between'>
									<label
										htmlFor='phone'
										className='block text-sm font-medium text-gray-700 dark:text-gray-100'
									>
										Phone
									</label>
									<span
										id='phone-description'
										className='text-sm text-gray-500 dark:text-gray-200'
									>
										Optional
									</span>
								</div>
								<div className='mt-1'>
									<input
										type='text'
										name='phone'
										id='phone'
										autoComplete='tel'
										aria-describedby='phone-description'
										className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<div className='flex justify-between'>
									<label
										htmlFor='how-can-we-help'
										className='block text-sm font-medium text-gray-700 dark:text-gray-100'
									>
										What are you looking for?
									</label>
								</div>
								<div className='mt-1'>
									<textarea
										id='how-can-we-help'
										name='how-can-we-help'
										aria-describedby='how-can-we-help-description'
										rows={4}
										className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
										defaultValue={''}
									/>
								</div>
							</div>

							<div className='sm:col-span-2'>
								<label
									htmlFor='how-did-you-hear-about-us'
									className='block text-sm font-medium text-gray-700 dark:text-gray-100'
								>
									How did you hear about me?
								</label>
								<div className='mt-1'>
									<input
										type='text'
										name='how-did-you-hear-about-us'
										id='how-did-you-hear-about-us'
										className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
									/>
								</div>
							</div>
							<div className='text-right sm:col-span-2'>
								<button
									type='submit'
									className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
