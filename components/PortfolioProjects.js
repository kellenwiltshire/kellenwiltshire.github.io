import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
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
				<motion.div
					onClick={() => setOpen(false)}
					className='absolute top-0 left-0 w-full h-full z-10 flex place-items-center bg-white bg-opacity-50 justify-center'
				>
					<div className='bg-white flex justify-center rounded shadow-2xl m-20'>
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
			) : (
				/* NORMAL CARD */
				<motion.div
					onClick={() => setOpen(true)}
					className='w-auto h-auto grid place-items-end m-10'
				>
					<PortfolioProjectCard img={img} />
				</motion.div>
			)}
		</AnimateSharedLayout>
	);
};

export default portfolioProjects;
