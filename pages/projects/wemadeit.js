import React from 'react';
import Layout from '../../components/Layout';

function wemadeit() {
	return (
		<Layout title='Kellen Wiltshire Web Development || We Made It'>
			<div class='container px-5 py-24 mx-auto h-screen'>
				<div class='lg:w-4/5 mx-auto flex flex-wrap'>
					<img
						alt='ecommerce'
						class='lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded'
						src='https://dummyimage.com/400x400'
					/>
					<div class='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
						<h2 class='text-sm title-font text-gray-500 tracking-widest'>
							Square Site
						</h2>
						<h1 class='text-gray-900 text-3xl title-font font-medium mb-1'>
							We Made It
						</h1>

						<p class='leading-relaxed pb-5 border-b-2 border-gray-100 mb-5'>
							We Made It is a Handmade Boutique retailer with an online
							presence. The site integrates with the Square API to show products
							and allow for searching of those products. The site is created
							with NextJS with a NodeJS backend to mange API requests. The
							Website allows users to browse the stores selection and make
							purchases through Square. This site was created to allow the owner
							to make sure their online store reflected their in-person store.
							Whenever they add an item to their Square inventory, that item
							immediately shows up on the website as well allowing for an
							up-to-date experience for the user.
						</p>

						<div class='flex'>
							<button class='flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
								Button
							</button>
							<button class='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
								Button
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default wemadeit;
