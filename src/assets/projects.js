import Robofriends from './img/robofriends.png';
import Smartbrain from './img/smartbrain.png';

export const projects = [
	{
		id: 1,
		name: 'Smartbrain',
		description:
			'This App utilizes the ClarifAI API to determine where the faces are in the picture and if they are any celebrities. You can also securely register a profile to keep track of the number of images you have checked and allows for Profile deletion.',
		tools: ['React', 'ExpressJS', 'PostgreSQL', 'NodeJS'],
		link: 'https://kw-smartbrain.herokuapp.com/',
		git: 'https://github.com/kellenwiltshire/smartbrain-ztm',
		img: Smartbrain,
	},
	{
		id: 2,
		name: 'Robofriends',
		description:
			'Robofriends is a React App that utilizes HTML, CSS, and React to create a responsive interface to search your robot friends.',
		tools: ['React'],
		link: 'https://kellenwiltshire.github.io/RoboFriends-ztm/',
		git: 'https://github.com/kellenwiltshire/RoboFriends-ztm',
		img: Robofriends,
	},
];
