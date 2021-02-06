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
			<About />
			<PortfolioList projects={projects} />
			<Pricing />
			<Contact />
		</Layout>
	);
}
