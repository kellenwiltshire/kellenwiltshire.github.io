import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import PortfolioProjectCard from './PortfolioProjectCard';
import PortfolioProjectExpand from './PortfolioProjectExpand';

const portfolioProjects = ({
	id,
	name,
	description,
	tools,
	link,
	git,
	img,
}) => {
	const [open, setOpen] = useState(false);
	return (
		<AnimateSharedLayout>
			{open ? (
				/* EXPANDED CARD */
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { duration: 0.15 } }}
						transition={{ duration: 0.2 }}
						onClick={() => setOpen(false)}
						className='absolute w-screen h-screen z-10 flex place-items-center justify-center'
					>
						<div className='bg-white flex justify-center rounded shadow-2xl lg:mx-72'>
							<PortfolioProjectExpand
								name={name}
								description={description}
								tools={tools}
								link={link}
								git={git}
								img={img}
							/>
						</div>
					</motion.div>
				</AnimatePresence>
			) : (
				/* NORMAL CARD */
				<motion.div
					onClick={() => setOpen(true)}
					className='w-auto h-auto grid place-items-end m-10 cursor-pointer'
				>
					<PortfolioProjectCard img={img} />
					Expand
				</motion.div>
			)}
		</AnimateSharedLayout>
	);
};

export default portfolioProjects;
