import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

function multiplecheck() {
	const [items, setItems] = useState([
		'This is an inbox layout.',
		'Check one item',
		'Hold down your Shift key',
		'Check a lower item',
		'Everything in between should also be set to checked',
	]);
	let newItem;
	const change = (e) => {
		e.preventDefault();
		newItem = e.target.value;
		console.log(newItem);
	};
	const addItem = (e) => {
		e.preventDefault();
		if (!newItem) return;
		console.log('New Item: ', newItem);
		setItems([...items, newItem]);
	};
	return (
		<Layout>
			<div className='multipleCheckBackground h-full w-full'>
				<div>
					<form className='search-form'>
						<input
							type='text'
							className='w-full'
							onChange={change}
							placeholder='Add item'
						/>
						<button
							onClick={addItem}
							className='no-underline text-black uppercase tracking-wide font-bold text-base p-3 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600'
						>
							Submit
						</button>
					</form>
				</div>
				<div className='checkinbox'>
					{items.map((item, i) => {
						return (
							<div className='checkitem'>
								<input type='checkbox checkinput' />
								<p className='checkp'>{items[i]}</p>
							</div>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default multiplecheck;
