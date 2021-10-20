import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import { projects } from '../../utils/projects';

export default function project({ project, isDarkMode, setIsDarkMode }) {
	console.log(project);
	return (
		<div>
			<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
