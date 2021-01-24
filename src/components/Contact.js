import React from 'react';
import { userID, templateID, serviceID } from '../emailAPI/emailAPI';
import emailjs from 'emailjs-com';

const contact = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.init(userID);

		if (e.input !== '') {
			emailjs.sendForm(serviceID, templateID, '#contact').then(
				(response) => {
					console.log(response.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
		}
		showSubmitSuccess();
	}

	const showSubmitSuccess = () => {
		document.getElementById('success').style.visibility = 'visible';
	};
	return (
		<div
			id='component'
			className='flex flex-col justify-center w-screen items-center mb-10'
		>
			<h1 className='text-4xl sm:text-6xl text-gray-600 border-b-2 w-full text-center mb-0 sm:mb-10'>
				Reach Out
			</h1>
			<div class='mt-5 sm:mt-0 shadow xl:w-2/5 w-11/12'>
				<div class='md:grid md:grid-cols-1 md:gap-6'>
					<div class='mt-5 md:mt-0 md:col-span-2'>
						<form id='contact' onSubmit={sendEmail}>
							<div class='shadow overflow-hidden sm:rounded-md'>
								<div class='px-4 py-5 bg-white sm:p-6'>
									<div class='grid grid-cols-6 gap-6'>
										<div class='col-span-6 sm:col-span-3'>
											<label
												for='first_name'
												class='block text-sm font-medium text-black'
											>
												First name
											</label>
											<input
												type='text'
												name='first_name'
												id='first_name'
												autocomplete='given-name'
												class='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
												required
											/>
										</div>

										<div class='col-span-6 sm:col-span-3'>
											<label
												for='last_name'
												class='block text-sm font-medium text-black'
											>
												Last name
											</label>
											<input
												type='text'
												name='last_name'
												id='last_name'
												autocomplete='family-name'
												class='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
												required
											/>
										</div>

										<div class='col-span-6 sm:col-span-5'>
											<label
												for='email_address'
												class='block text-sm font-medium text-black'
											>
												Email address
											</label>
											<input
												type='text'
												name='email_address'
												id='email_address'
												autocomplete='email'
												class='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
												required
											/>
										</div>

										<div class='col-span-6 sm:col-span-3'>
											<label
												for='product'
												class='block text-sm font-medium text-black'
											>
												Inquiring About
											</label>
											<select
												id='product'
												name='product'
												autocomplete='product'
												class='mt-1 block w-full py-2 px-3 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
											>
												<option>5 Page Site with 12 Month Support</option>
												<option>Standard 5 Page Site</option>
												<option>5 Page Site with 6 Month Support</option>
												<option>General Inquiry</option>
											</select>
										</div>

										<div class='col-span-6'>
											<label
												for='about'
												class='block text-sm font-medium text-black'
											>
												Brief Description About Your Project
											</label>
											<div class='mt-1'>
												<textarea
													id='description'
													name='description'
													rows='3'
													class='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-500 rounded-md'
													placeholder='Description'
													required
												></textarea>
											</div>
										</div>
									</div>
								</div>
								<div class='px-4 py-3 bg-gray-50 text-right sm:px-6'>
									<button
										type='submit'
										class='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									>
										Submit
									</button>
								</div>
								<div
									id='success'
									style={{ visibility: 'hidden' }}
									className='text-center justify-center align-middle'
								>
									<h1>Request Sent!</h1>
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
