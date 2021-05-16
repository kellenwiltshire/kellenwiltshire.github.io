import React from 'react';
import { motion } from 'framer-motion';
import Github from '../../components/icons/Github';

function ProjectsPage({ image, type, name, description, weblink, gitlink }) {
	return (
		<div className='container px-5 py-24 mx-auto h-auto'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className='lg:w-4/5 mx-auto flex flex-wrap'
			>
				<img
					alt='ecommerce'
					className='lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded'
					src={image}
				/>
				<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
					<h2 className='text-sm title-font text-gray-500 tracking-widest'>
						{type}
					</h2>
					<h1 className='text-gray-900 text-3xl title-font font-medium mb-2'>
						{name}
					</h1>

					<p className='leading-relaxed pb-5 border-b-2 border-gray-100 mb-5'>
						{description}
					</p>

					<div className='flex'>
						<a
							href={weblink}
							alt='View in Action'
							target='_blank'
							className='flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'
						>
							View Site
						</a>
						<a
							href={gitlink}
							alt='View on Github'
							target='_blank'
							className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'
						>
							<Github />
						</a>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default ProjectsPage;
