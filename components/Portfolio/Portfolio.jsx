import PortfolioCards from './PortfolioCards';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Portfolio({ projects }) {
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

	const titleVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<div id='portfolio' className='bg-blue-900'>
			<div className='pt-12 sm:pt-16 lg:pt-24'>
				<div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
					<motion.div
						ref={ref}
						animate={controls}
						variants={titleVariants}
						className='mx-auto max-w-3xl space-y-2 lg:max-w-none'
					>
						<h2 className='text-lg font-semibold uppercase leading-6 tracking-wider text-gray-300 dark:text-gray-100'>
							Portfolio
						</h2>
						<p className='text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl'>What I Have Created</p>
					</motion.div>
				</div>
			</div>
			<div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Projects</h2>

				<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{projects.map((project) => (
						<PortfolioCards key={project.name} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}
