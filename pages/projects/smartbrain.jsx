import ReadMe from '../../Markdowns/smartbrain.mdx';
import React from 'react';
import MDXComponents from '../../Markdowns/MDXComponents';
import Projects from '../../components/Projects/Projects';

function smartbrain({ isDarkMode, setIsDarkMode }) {
	const title = 'Smartbrain';
	const description =
		'This App was created as part of the Zero-to-Mastery Udemy Course. This is my first full stack web app creation.';
	const webType = 'Web App';
	const image = '/smartbrain.webp';
	const link = 'https://kw-smartbrain.herokuapp.com/';
	const github = 'https://github.com/kellenwiltshire/smartbrain-ztm';
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

export default smartbrain;
