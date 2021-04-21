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
		<div
			id='component'
			className='flex flex-col justify-center w-screen items-center mb-10'
		>
			<h1 className='text-4xl sm:text-6xl text-blue-600 w-full text-center mb-0 sm:mb-10'>
				Reach Out
			</h1>
			<div className='mt-5 sm:mt-0 rounded-lg border-2 border-gray-300 xl:w-2/5 w-11/12'>
				<div className='md:grid md:grid-cols-1 md:gap-6'>
					<div className='mt-5 md:mt-0 md:col-span-2'>
						<form id='contact' onSubmit={handleSubmit}>
							<div className='shadow overflow-hidden sm:rounded-md'>
								<div className='px-4 py-5 bg-white sm:p-6'>
									<div className='grid grid-cols-6 gap-6'>
										<div className='col-span-6 sm:col-span-3 m-2'>
											<label
												for='first_name'
												className='block text-sm font-medium text-black'
											>
												First name
											</label>
											<input
												type='text'
												name='first_name'
												id='first_name'
												autocomplete='given-name'
												className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
												required
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 m-2'>
											<label
												for='last_name'
												className='block text-sm font-medium text-black'
											>
												Last name
											</label>
											<input
												type='text'
												name='last_name'
												id='last_name'
												autocomplete='family-name'
												className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
												required
											/>
										</div>

										<div className='col-span-6 sm:col-span-5 m-2'>
											<label
												for='email_address'
												className='block text-sm font-medium text-black'
											>
												Email address
											</label>
											<input
												type='text'
												name='email_address'
												id='email_address'
												autocomplete='email'
												className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
												required
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 m-2'>
											<label
												for='product'
												className='block text-sm font-medium text-black'
											>
												Inquiring About
											</label>
											<select
												id='product'
												name='product'
												autocomplete='product'
												className='mt-1 block w-full py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
											>
												<option>Standard 5 Page Site</option>
												<option>Square/Shopify Site</option>
												<option>General Inquiry</option>
											</select>
										</div>

										<div className='col-span-6 m-2'>
											<label
												for='about'
												className='block text-sm font-medium text-black'
											>
												Brief Description About Your Project
											</label>
											<div className='mt-1'>
												<textarea
													id='description'
													name='description'
													rows='3'
													className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-500 rounded-md'
													placeholder='Description'
													required
												></textarea>
											</div>
										</div>
									</div>
								</div>
								<div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
									<button
										type='submit'
										className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default contact;
