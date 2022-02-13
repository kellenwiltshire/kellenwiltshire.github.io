import GolfleagueReadMe from '../../Markdowns/golfleague.mdx';
import React from 'react';
import MDXComponents from '../../Markdowns/MDXComponents';
import Projects from '../../components/Projects/Projects';

function golfleague({ isDarkMode, setIsDarkMode }) {
	const title = 'Women On Par';
	const description = 'Golf League Tracker app for Scores and Attendance';
	const webType = 'Web App';
	const image = '/golfleague.webp';
	const link = 'https://golfleague.vercel.app';
	const github = 'https://github.com/kellenwiltshire/golfleague';
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
			<GolfleagueReadMe components={MDXComponents} />
		</Projects>
	);
}

export default golfleague;
