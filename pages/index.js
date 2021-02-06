import Layout from '../components/Layout';
import Splash from '../components/Splash.js';
import About from '../components/About.js';
import PortfolioList from '../components/PortfolioList.js';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';
import { projects } from '../components/projects';

export default function Home() {
	return (
		<Layout title='Kellen Wiltshire Web Development'>
			<Splash />
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#2563eb'
					fillOpacity='1'
					d='M0,32L48,26.7C96,21,192,11,288,48C384,85,480,171,576,197.3C672,224,768,192,864,181.3C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
				></path>
			</svg>
			<About />
			<PortfolioList projects={projects} />
			<Pricing />
			<Contact />
		</Layout>
	);
}
