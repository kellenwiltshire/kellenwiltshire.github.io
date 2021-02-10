export const projects = [
	{
		id: 1,
		name: 'The Knotty Island',
		description:
			"Website created for The Knotty Island, an online handmade Macrame Etsy store. The site was designed and created using NextJS utilizing the Etsy API. There is a small server created with NodeJS and Express to manage the API requests. The website was built and functions according the Client's Request and within the limitation of the API. This was the first website I created without the help of a course or tutorial and was a major learing experience along the way. Instead of using Create React App, I used NextJS as it allowed for better page creation along with better performance for Search Engines. The back-end is hosted with Heroku and functions as a way to securely call Etsy API. The front-end is hosted with Vercel.",
		tools: 'NextJs, NodeJS, Heroku, Vercel',
		link: 'https://theknottyisland.com/',
		git: 'https://github.com/kellenwiltshire/the-knotty-island',
		img: 'TheKnottyIsland',
	},
	{
		id: 2,
		name: 'Smartbrain',
		description:
			'Smartbrain is a fully functional image recogniton website. It utilizes the ClarifAI API to determine where the faces are in the picture and if they are any celebrities. This was created during the Zero-to-Mastery Udemy course but I expanded it to have the functionality to determine if there is a Celebrity in the photo. I also added a profile page (with deletion) and a session search history. The website is also fully functional on mobile. Everything is secure with users being stored in a PostreSQL database and passwords are hashed with BCrypt. The site is fully hosted on Heroku.',
		tools: 'Create React App, NodeJS, ExpressJS, PostgreSQL, Heroku',
		link: 'https://kw-smartbrain.herokuapp.com/',
		git: 'https://github.com/kellenwiltshire/smartbrain-ztm',
		img: 'Smartbrain',
	},
	{
		id: 3,
		name: 'Robofriends',
		description:
			'Robofriends was the first website I created with React. It is relatively simple and was very helpful for learning how to intereact with API as well as the freedom and functionality that React has. The website is responsive to searches which will sort through the Robots to find who you are looking for. It was great introduction into the React world.',
		tools: 'Create React App',
		link: 'https://kellenwiltshire.github.io/RoboFriends-ztm/',
		git: 'https://github.com/kellenwiltshire/RoboFriends-ztm',
		img: 'Robofriends',
	},
];
