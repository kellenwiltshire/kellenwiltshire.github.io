import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Projects from '../../components/Projects/Projects';
import { projects } from '../../utils/projects';

export default function project({ project, isDarkMode, setIsDarkMode }) {
	console.log(project);
	return (
		<div className='bg-white dark:bg-gray-700'>
			<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			<Projects isDarkMode={isDarkMode} project={project} />
		</div>
	);
}

export async function getStaticPaths() {
	const projectList = projects;
	const projID = projectList.map((project) => {
		return project.id;
	});
	const paths = projID.map((proj) => ({
		params: {
			project: proj,
		},
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const projectID = params.project;
	const currentProject = projects.filter((item) => item.id === projectID);
	const project = currentProject[0];
	return {
		props: { project },
	};
}
