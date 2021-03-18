import React from 'react';
import Layout from '../components/Layout';
import PageTitles from '../components/PageTitles';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';

function Portfolio() {
	return (
		<Layout title='Kellen Wiltshire Web Development || Contact Me'>
			<PageTitles title='Contact Me' />
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#2563eb'
					fill-opacity='1'
					d='M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,160C672,139,768,85,864,101.3C960,117,1056,203,1152,240C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
				></path>
			</svg>
			<Contact />
		</Layout>
	);
}

export default Portfolio;
