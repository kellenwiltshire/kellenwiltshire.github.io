import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import PortfolioProjectCard from './PortfolioProjectCard';
import Link from 'next/link';

const portfolioProjects = ({ id, img }) => {
	return (
		<Link
			href={{
				pathname: '/projects/[project]',
				query: {
					project: id,
				},
			}}
		>
			<a>
				<PortfolioProjectCard img={img} />
			</a>
		</Link>
	);
};

export default portfolioProjects;
