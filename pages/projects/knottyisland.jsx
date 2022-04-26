import ReadMe from '../../Markdowns/knottyisland.mdx';
import React from 'react';
import MDXComponents from '../../Markdowns/MDXComponents';
import Projects from '../../components/Projects/Projects';

function knottyisland({ isDarkMode, setIsDarkMode }) {
	const title = 'The Knotty Island';
	const description =
		'Website created for The Knotty Island, an online handmade Macrame Etsy store.';
	const webType = 'Etsy';
	const image = '/theknottyisland.webp';
	const link = 'https://theknottyisland.com';
	const github = 'https://github.com/kellenwiltshire/the-knotty-island';
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

export default knottyisland;
