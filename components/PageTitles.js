import React from 'react';

function PageTitles({ title }) {
	return (
		<div className='splash flex flex-col items-center justify-center bg-blue-600 w-screen'>
			<div className='text-6xl text-white p-32'>
				<h1>{title}</h1>
			</div>
		</div>
	);
}

export default PageTitles;
