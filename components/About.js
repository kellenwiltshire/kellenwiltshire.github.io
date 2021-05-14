import React from 'react';

const about = () => {
	return (
		<div className='container sm:px-6 pb-32 pt-20 w-screen'>
			<div className='flex flex-row flex-wrap justify-center lg:justify-between items-center'>
				<div className='lg:w-6/12 lg:p-0 p-7'>
					<h1 className='text-3xl sm:text-6xl text-center mb-5 sm:mb-10 font-headers text-blue-600'>
						Kellen Wiltshire
					</h1>
					<p className='text-sm sm:text-xl leading-relaxed font-body pb-5'>
						During this COVID-19 Pandemic, I have taught myself two new things.
						First, I can now make bread like nobody's business. Second, I
						learned how to build sweet websites. Though I am still starting out,
						I am eager to learn more and dive deeper into the world of Web
						Development
					</p>

					<p className='text-sm sm:text-xl pb-5 leading-relaxed font-body'>
						Although I have a fulfilling career helping people seek justice in
						the Legal System, I was missing using my brain in a technical role.
						With the extra time working from home I decided to start teaching
						myself Web Development with the help of the Udemy course
						Zero-to-Mastery.
					</p>

					<p className='text-sm sm:text-xl pb-5 leading-relaxed font-body'>
						Now I build kick-ass websites and projects to hone my skills to one
						day make the jump completely into Web Development. Contact me now if
						you have any inquries!
					</p>
				</div>

				<div className='flex flex-row w-96 justify-center items-center text-center p-5 rounded-none m-20 shadow'>
					<div>
						<img
							className='rounded-full'
							src='https://avatars.githubusercontent.com/u/31140634?v=4'
							alt='Profile Image'
						/>
						<h1 className='text-black'>Kellen Wiltshire</h1>
						<h2 className='text-black'>Kingston, Ontario, Canada</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;
