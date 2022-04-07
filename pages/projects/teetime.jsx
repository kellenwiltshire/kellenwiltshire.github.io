import ReadMe from '../../Markdowns/teetime.mdx';
import React from 'react';
import MDXComponents from '../../Markdowns/MDXComponents';
import Projects from '../../components/Projects/Projects';

function teeTime({ isDarkMode, setIsDarkMode }) {
	const title = 'Tee Time Generator';
	const description = `A Vue webapp to generate a completely random and properly organized list of Foursome's in seconds that is ready to print and send to a User's Golf Group or League.`;
	const webType = 'Web App';
	const image = '/teetime.webp';
	const link = 'https://teetimegenerator.netlify.app/';
	const github = 'https://github.com/kellenwiltshire/teetime';
	return (
		<Projects
			projectTitle={title}
			projectDescription={description}
			isDarkMode={isDarkMode}
			setIsDarkMode={setIsDarkMode}
			webType={webType}
			link={link}
			image={image}
			github={github}
		>
			<ReadMe components={MDXComponents} />
		</Projects>
	);
}

export default teeTime;
