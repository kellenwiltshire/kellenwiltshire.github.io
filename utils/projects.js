export const projects = [
	{
		id: '1',
		name: 'We Made It',
		description:
			'We Made It is a Handmade Boutique retailer with an online presence.',
		lessons:
			'This was the first site I made for a Client. The site was originally a store front for a Merchant Servicer called Square. It has since moved from Square to Shopify which allowed me to learn GraphQL. The project is built with NextJS and utilizies both ISR and SSR to make sure that the site is fast and responsive while maintaining great SEO. This project is ongoing as the needs of the Client change and grow.',
		tech: {
			client: 'NextJS, TailwindCSS',
		},

		link: 'https://we-made-it.ca/',
		git: 'https://github.com/kellenwiltshire/we-made-it',
		image: '/wemadeit.png',
		type: 'Shopify',
	},
	{
		id: '2',
		name: 'The Knotty Island',
		description:
			'Website created for The Knotty Island, an online handmade Macrame Etsy store.',
		lessons: `The site was designed and created using NextJS utilizing the Etsy API. There is a small server created with NodeJS and Express to manage the API requests. The website was built and functions according the Client's Request and within the limitation of the API. The API has a limit on requests that can be made per limit, but the limit seems arbitrary and can be frustrating because seperate requests need to be made to get the product details and pictures.`,
		tech: {
			client: 'NextJS, TailwindCSS, Vercel',
			server: 'Heroku',
		},

		link: 'https://theknottyisland.com/',
		git: 'https://github.com/kellenwiltshire/the-knotty-island',
		image: '/theknottyisland.png',
		type: 'Etsy',
	},
	{
		id: '3',
		name: 'Flip The Show',
		description:
			'Website created for flipping cards in the game MLB The Show 21',
		lessons:
			'The site was designed with NextJS and TailwindCSS. The site was a good lesson on how to format tables with lots of information to look good on multiple screen sizes. Unfortunately, the Players section is currently broken due a change in information relayed by API and I have had a chance to fix it yet...',
		tech: {
			client: 'NextJS, TailwindCSS, Digital Ocean',
		},

		link: 'https://flipthe.show/',
		git: 'https://github.com/kellenwiltshire/fliptheshow',
		image: '/fliptheshow.png',
		type: 'Personal',
	},
	{
		id: '4',
		name: 'Smartbrain',
		description:
			'This App was created as part of the Zero-to-Mastery Udemy Course. This is my first full stack web app creation.',
		lessons:
			'Smartbrain is a fully functional image recogniton website. It utilizes the ClarifAI API to determine where the faces are in the picture and if they are any celebrities. This was created during the Zero-to-Mastery Udemy course but I expanded it to have the functionality to determine if there is a Celebrity in the photo. I also added a profile page (with deletion) and a session search history. The website is also fully functional on mobile. Everything is secure with users being stored in a PostreSQL database and passwords are hashed with BCrypt. The site is fully hosted on Heroku.',
		tech: {
			client: 'React(CRA), TailwindCSS',
			server: 'NodeJS, ExpressJS, BCrypt, PostgreSQL',
		},

		link: 'https://kw-smartbrain.herokuapp.com/',
		git: 'https://github.com/kellenwiltshire/smartbrain-ztm',
		image: '/smartbrain.png',
		type: 'Web App',
	},
	{
		id: '5',
		name: 'Frontend Assessment',
		description: 'Coding Challenge',
		lessons:
			'The goal was to fetch information from an API and then display that information in a way that is searchable. Then, you must be able to add "tags" to each "student" that is also searchable. Each "student" card is also expandable showing their recent grades.',
		tech: {
			client: 'NextJS, TailwindCSS',
		},

		link: 'https://frontend-assessment.vercel.app',
		git: 'https://github.com/kellenwiltshire/frontend-assessment',
		image: '/frontendassessment.png',
		type: 'Assessment',
	},
];
