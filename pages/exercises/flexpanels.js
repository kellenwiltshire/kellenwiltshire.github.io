import React, { useEffect } from 'react';
import Layout from '../../components/Layout';

function flexpanels() {
	useEffect(() => {
		const panels = document.querySelectorAll('.panel');
		panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
		panels.forEach((panel) =>
			panel.addEventListener('transitionend', toggleActive),
		);
	});

	const toggleActive = (e) => {
		if (e.propertyName.includes('flex')) {
			e.target.classList.toggle('open-active');
		}
	};

	const toggleOpen = (e) => {
		if (e.target.parentNode.classList.contains('panel')) {
			e.target.parentNode.classList.toggle('open');
		} else {
			e.target.classList.toggle('open');
		}
	};

	return (
		<Layout title='Flex Panels Exercise'>
			<div className='flexBackground'>
				<div className='panels'>
					<div className='panel panel1'>
						<p>Hey</p>
						<p>Let's</p>
						<p>Dance</p>
					</div>
					<div className='panel panel2'>
						<p>Give</p>
						<p>Take</p>
						<p>Receive</p>
					</div>
					<div className='panel panel3'>
						<p>Experience</p>
						<p>It</p>
						<p>Today</p>
					</div>
					<div className='panel panel4'>
						<p>Give</p>
						<p>All</p>
						<p>You can</p>
					</div>
					<div className='panel panel5'>
						<p>Life</p>
						<p>In</p>
						<p>Motion</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default flexpanels;
