import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import Services from '../components/Services';
import { projects } from '../utils/projects';

export default function Home({ setIsDarkMode, isDarkMode }) {
	return (
		<>
			<Hero setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
			<About isDarkMode={isDarkMode} />
			<Services />
			<Portfolio projects={projects} />
			<Contact />
		</>
	);
}
