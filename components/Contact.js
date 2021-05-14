import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const contact = () => {
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
		<div className='w-screen flex justify-center flex-wrap mx-auto'>
			<h1 className='text-4xl sm:text-6xl text-blue-600 w-full text-center mb-0 sm:mb-10'>
				Reach Out
			</h1>
			<div class='container mx-auto'>
				<div class='max-w-2xl mx-auto my-10 bg-white p-5'>
					<div class='m-7'>
						<form onSubmit={handleSubmit}>
							<div class='mb-6'>
								<label
									for='name'
									class='block mb-2 text-sm text-gray-600 dark:text-gray-400'
								>
									Full Name
								</label>
								<input
									type='text'
									name='name'
									id='name'
									placeholder='John Doe'
									required
									class='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
								/>
							</div>
							<div class='mb-6'>
								<label
									for='email'
									class='block mb-2 text-sm text-gray-600 dark:text-gray-400'
								>
									Email Address
								</label>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='you@company.com'
									required
									class='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
								/>
							</div>
							<div class='mb-6'>
								<label
									for='phone'
									class='text-sm text-gray-600 dark:text-gray-400'
								>
									Phone Number
								</label>
								<input
									type='text'
									name='phone'
									id='phone'
									placeholder='+1 (555) 1234-567'
									required
									class='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
								/>
							</div>
							<div class='mb-6'>
								<label
									for='message'
									class='block mb-2 text-sm text-gray-600 dark:text-gray-400'
								>
									Your Message
								</label>

								<textarea
									rows='5'
									name='message'
									id='message'
									placeholder='Your Message'
									class='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
									required
								></textarea>
							</div>
							<div class='mb-6'>
								<button
									type='submit'
									class='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default contact;
