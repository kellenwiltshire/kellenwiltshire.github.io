import About from '../components/About';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import Services from '../components/Services';
import { projects } from '../utils/projects';
import { NextSeo } from 'next-seo';

export default function Home({ setIsDarkMode, isDarkMode }) {
	return (
		<>
			<NextSeo
				title='Kellen Wiltshire Web Development'
				description='Web Development Services for Brochure and Shopify sites as well as Web Apps.'
				canonical='https://kellenwiltshire.com'
				openGraph={{
					url: 'https://kellenwiltshire.com',
					title: 'Kellen Wiltshire Web Development',
					description: 'Custom Web Development Services',
					images: [
						{
							url: 'https://avatars.githubusercontent.com/u/31140634?v=4',
							width: 800,
							height: 800,
							alt: 'Profile Image',
							type: 'image/jpeg',
						},
					],
				}}
			/>
			<Hero setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
			<About isDarkMode={isDarkMode} />
			<Services isDarkMode={isDarkMode} />
			<Portfolio projects={projects} isDarkMode={isDarkMode} />
			<Contact isDarkMode={isDarkMode} />
		</>
	);
}
