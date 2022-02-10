import About from '../components/About';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import Services from '../components/Services';
import { projects } from '../utils/projects';

export default function Home({ setIsDarkMode, isDarkMode }) {
	return (
		<>
			<Hero setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
			<About isDarkMode={isDarkMode} />
			<Portfolio projects={projects} isDarkMode={isDarkMode} />
			<Services isDarkMode={isDarkMode} />
			<Contact isDarkMode={isDarkMode} />
		</>
	);
}
