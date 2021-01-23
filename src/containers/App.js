import React, { useRef, useEffect } from 'react';
import './App.css';
import Splash from '../components/Splash.js';
import Footer from '../components/Footer.js';
import About from '../components/About.js';
import PortfolioList from '../components/PortfolioList.js';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';
import { projects } from '../assets/projects.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

	useEffect(() => {
		const element = ref.current;
		gsap.fromTo(
			element.querySelectorAll('#component'),
			{
				opacity: 0,
				x: -50,
			},
			{
				opacity: 1,
				x: 0,
				duration: 2,
				ease: 'expo',
				scrollTrigger: {
					start: 'center bottom',
					scrub: false,
				},
			},
		);
	}, []);

	return (
		<div ref={ref} className='flex flex-col max-w-10/12'>
			{/* <Navbar></Navbar> */}
			<Splash></Splash>
			<About></About>
			<PortfolioList projects={projects}></PortfolioList>
			<Pricing></Pricing>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
}

export default App;
