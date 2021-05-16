import React from 'react';
import Layout from '../../components/Layout';
import PageTitles from '../../components/PageTitles';
import ProjectsPage from '../../components/Projects/ProjectsPage';
import { projects } from '../../components/projects';

function project({ project }) {
	return (
		<Layout title={`Kellen Wiltshire Web Development || ${project.name}`}>
			<PageTitles title={project.name} height='small' />
			<ProjectsPage
				image={project.img}
				type={project.type}
				name={project.name}
				description={project.description}
				weblink={project.link}
				gitlink={project.git}
			/>
		</Layout>
	);
}

export default project;

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
