import React from 'react';
import Navigation from './Navigation';

function PageTitles({ title }) {
	return (
		<div className='splash flex flex-col items-center justify-center bg-blue-600 w-screen'>
			<div className='text-6xl text-white p-32 font-headers'>
				<h1>{title}</h1>
				<Navigation />
			</div>
		</div>
	);
}

export default PageTitles;
