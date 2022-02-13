import ReadMe from '../../Markdowns/fliptheshow.mdx';
import React from 'react';
import MDXComponents from '../../Markdowns/MDXComponents';
import Projects from '../../components/Projects/Projects';

function fliptheshow({ isDarkMode, setIsDarkMode }) {
	const title = 'Flip The Show';
	const description = 'Website created for flipping cards in the game MLB The Show 21';
	const webType = 'Personal';
	const image = '/fliptheshow.webp';
	const link = 'https://flipthe.show';
	const github = 'https://github.com/kellenwiltshire/fliptheshow';
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

export default fliptheshow;
