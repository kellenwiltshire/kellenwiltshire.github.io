export const projects = [
	{
		id: 1,
		name: 'We Made It',
		description:
			'We Made It is a Handmade Boutique retailer with an online presence. The site integrates with the Square API to show products and allow for searching of those products. The site is created with NextJS with a NodeJS backend to mange API requests. The Website allows users to browse the stores selection and make purchases through Square. This site was created to allow the owner to make sure their online store reflected their in-person store. Whenever they add an item to their Square inventory, that item immediately shows up on the website as well allowing for an up-to-date experience for the user.',
		tools: 'NextJs, NodeJS, Heroku, Vercel',
		link: 'https://we-made-it.ca/',
		git: 'https://github.com/kellenwiltshire/we-made-it',
		img: 'wemadeit',
	},
	{
		id: 2,
		name: 'The Knotty Island',
		description:
			"Website created for The Knotty Island, an online handmade Macrame Etsy store. The site was designed and created using NextJS utilizing the Etsy API. There is a small server created with NodeJS and Express to manage the API requests. The website was built and functions according the Client's Request and within the limitation of the API. This was the first website I created without the help of a course or tutorial and was a major learing experience along the way. Instead of using Create React App, I used NextJS as it allowed for better page creation along with better performance for Search Engines. The back-end is hosted with Heroku and functions as a way to securely call Etsy API. The front-end is hosted with Vercel.",
		tools: 'NextJs, NodeJS, Heroku, Vercel',
		link: 'https://theknottyisland.com/',
		git: 'https://github.com/kellenwiltshire/the-knotty-island',
		img: 'TheKnottyIsland',
	},
	{
		id: 3,
		name: 'Smartbrain',
		description:
			'Smartbrain is a fully functional image recogniton website. It utilizes the ClarifAI API to determine where the faces are in the picture and if they are any celebrities. This was created during the Zero-to-Mastery Udemy course but I expanded it to have the functionality to determine if there is a Celebrity in the photo. I also added a profile page (with deletion) and a session search history. The website is also fully functional on mobile. Everything is secure with users being stored in a PostreSQL database and passwords are hashed with BCrypt. The site is fully hosted on Heroku.',
		tools: 'Create React App, NodeJS, ExpressJS, PostgreSQL, Heroku',
		link: 'https://kw-smartbrain.herokuapp.com/',
		git: 'https://github.com/kellenwiltshire/smartbrain-ztm',
		img: 'Smartbrain',
	},
	{
		id: 4,
		name: 'Author Website',
		description:
			'A Mock website I made for an Author. Utilizes NextJS. Relatively simple website created to demonstrate a real-world product of a static website. Ultimately the website is not functional as the Author already has a website but it was a good project to learn how I might go redesigning a website for someone that already has an online presence.',
		tools: 'NextJS',
		link: 'https://wmwiltshirecom-19lxbq7de.vercel.app/',
		git: 'https://github.com/kellenwiltshire/wmwiltshirecom/',
		img: 'WMWiltshire',
	},
	{
		id: 5,
		name: 'Frontend Assessment',
		description:
			'This was a Frontend Assessment I completed. The goal was to fetch information from an API and then display that information in a way that is searchable. Then, you must be able to add "tags" to each "student" that is also searchable. Each "student" card is also expandable showing their recent grades.',
		tools: 'NextJS',
		link: 'https://frontend-assessment.vercel.app',
		git: 'https://github.com/kellenwiltshire/frontend-assessment',
		img: 'frontendassessment',
	},
];
