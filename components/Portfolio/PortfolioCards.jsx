import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PortfolioCards({ project }) {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
		if (!inView) {
			controls.start('hidden');
		}
	}, [controls, inView]);
	const projectVariants = {
		hidden: { scale: 0 },
		visible: {
			scale: 1,
			transition: {
				duration: 0.5,
			},
		},
	};
	return (
		<Link href={project.link}>
			<a key={project.id} className='group'>
				<motion.div ref={ref} animate={controls} variants={projectVariants}>
					<div className='aspect-w-5 aspect-h-3 xl:aspect-w-10 xl:aspect-h-6 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700'>
						<img
							src={project.image}
							alt={project.description}
							className='h-full w-full object-cover object-center group-hover:opacity-75'
						/>
					</div>
					<h3 className='mt-4 text-lg text-white'>{project.name}</h3>
					<p className=' text-xs text-gray-100'>{project.type}</p>
					<p className='mt-1 text-sm font-medium text-gray-100'>
						{project.description}
					</p>
				</motion.div>
			</a>
		</Link>
	);
}
