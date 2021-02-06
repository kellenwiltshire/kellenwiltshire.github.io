import React from 'react';
import Image from 'next/image';

const about = () => {
	return (
		<div
			id='component'
			className='w-screen flex flex-col align-middle bg-white justify-center items-center p-10'
		>
			<h1 className='text-gray-600 text-4xl sm:text-6xl border-b-2 w-full text-center'>
				A Little About Me
			</h1>
			<div className='flex w-64 justify-center items-center text-center p-5 rounded-none m-8 shadow'>
				<div class='tc'>
					<Image
						src='/profile.png'
						className='flex text-white rounded-full'
						title='Profile'
						alt='profile'
						height={500}
						width={500}
					/>
					<h1 class='text-black'>Kellen Wiltshire</h1>
					<h2 class='text-black'>Kingston, Ontario, Canada</h2>
				</div>
			</div>
			<div className='text-black text-center w-full text-xs sm:text-base xl:w-6/12 space-y-3'>
				<p>
					During this COVID-19 Pandemic, I have taught myself two new things.
					First, I can make bread like nobody's business. Second, I learned how
					to build sweet websites. Though I am still starting out, I am eager to
					learn more and dive deeper into the world of Web Development
				</p>

				<p>
					Although I have a fulfilling career helping people seek justice in the
					Legal System, I was missing using my brain in a technical role. With
					the extra time working from home I decided to start teaching myself
					Web Development with the help of the Udemy course Zero-to-Mastery.
				</p>

				<p>
					Now I build kick-ass websites and projects to hone my skills to one
					day make the jump completely into Web Development. Contact me now if
					you have any inquries!
				</p>
			</div>
		</div>
	);
};

export default about;
