export const projects = [
	{
		id: '1',
		name: 'We Made It',
		description:
			'This was the first site I made for a Client. The site was originally a store front for a Merchant Servicer called Square. It has since moved from Square to Shopify which allowed me to learn GraphQL. The project is built with NextJS and utilizies both ISR and SSR to make sure that the site is fast and responsive while maintaining great SEO. This project is ongoing as the needs of the Client change and grow.',
		tools: 'NextJs, NodeJS, Heroku, Vercel',
		link: 'https://we-made-it.ca/',
		git: 'https://github.com/kellenwiltshire/we-made-it',
		img: '/wemadeit.png',
		type: 'Shopify',
	},
	{
		id: '2',
		name: 'The Knotty Island',
		description:
			"Website created for The Knotty Island, an online handmade Macrame Etsy store. The site was designed and created using NextJS utilizing the Etsy API. There is a small server created with NodeJS and Express to manage the API requests. The website was built and functions according the Client's Request and within the limitation of the API. This was the first website I created without the help of a course or tutorial and was a major learing experience along the way. Instead of using Create React App, I used NextJS as it allowed for better page creation along with better performance for Search Engines. The back-end is hosted with Heroku and functions as a way to securely call Etsy API. The front-end is hosted with Vercel.",
		tools: 'NextJs, NodeJS, Heroku, Vercel',
		link: 'https://theknottyisland.com/',
		git: 'https://github.com/kellenwiltshire/the-knotty-island',
		img: '/theknottyisland.png',
		type: 'Etsy',
	},
	{
		id: '3',
		name: 'Flip The Show',
		description:
			'This site uses the data from the video game marketplace of MLB The Show 21 to show current baseball card prices. Users can use this information to maximize their in-game profits when buying and selling cards in the games marketplace. The site is completely built with NextJS and uses TailwindCSS along with some custom CSS. The data can be sorted and filtered to the users preference.',
		tools: 'NextJs',
		link: 'https://flipthe.show/',
		git: 'https://github.com/kellenwiltshire/fliptheshow',
		img: '/fliptheshow.png',
		type: 'Personal',
	},
	{
		id: '4',
		name: 'Smartbrain',
		description:
			'Smartbrain is a fully functional image recogniton website. It utilizes the ClarifAI API to determine where the faces are in the picture and if they are any celebrities. This was created during the Zero-to-Mastery Udemy course but I expanded it to have the functionality to determine if there is a Celebrity in the photo. I also added a profile page (with deletion) and a session search history. The website is also fully functional on mobile. Everything is secure with users being stored in a PostreSQL database and passwords are hashed with BCrypt. The site is fully hosted on Heroku.',
		tools: 'Create React App, NodeJS, ExpressJS, PostgreSQL, Heroku',
		link: 'https://kw-smartbrain.herokuapp.com/',
		git: 'https://github.com/kellenwiltshire/smartbrain-ztm',
		img: '/smartbrain.png',
		type: 'Personal',
	},
	{
		id: '5',
		name: 'Author Website',
		description:
			'A Mock website I made for an Author. Utilizes NextJS. Relatively simple website created to demonstrate a real-world product of a static website. Ultimately the website is not functional as the Author already has a website but it was a good project to learn how I might go redesigning a website for someone that already has an online presence.',
		tools: 'NextJS',
		link: 'https://wmwiltshirecom-19lxbq7de.vercel.app/',
		git: 'https://github.com/kellenwiltshire/wmwiltshirecom/',
		img: '/WMWiltshire.jpg',
		type: 'Personal',
	},
	{
		id: '6',
		name: 'Frontend Assessment',
		description:
			'This was a Frontend Assessment I completed. The goal was to fetch information from an API and then display that information in a way that is searchable. Then, you must be able to add "tags" to each "student" that is also searchable. Each "student" card is also expandable showing their recent grades.',
		tools: 'NextJS',
		link: 'https://frontend-assessment.vercel.app',
		git: 'https://github.com/kellenwiltshire/frontend-assessment',
		img: '/frontendassessment.png',
		type: 'Assessment',
	},
];
