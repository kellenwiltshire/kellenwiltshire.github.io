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
	let textInput;
	let lastChecked;
	let checkboxes;
	let test;
	const change = (e) => {
		e.preventDefault();
		newItem = e.target.value;
	};
	const addItem = (e) => {
		e.preventDefault();
		if (!newItem) return;
		setItems([...items, newItem]);
		textInput.value = '';
	};

	const handleCheck = (e) => {
		let inBetween = false;
		if (e.shiftKey && e.target.checked) {
			checkboxes.forEach((checkbox) => {
				if (checkbox === e.target || checkbox === lastChecked) {
					inBetween = !inBetween;
				}
				if (inBetween) {
					checkbox.checked = true;
				}
			});
		}
		lastChecked = e.target;
	};

	const deleteItem = (i) => {
		const newList = items;
		items.splice(i, 1);
		setItems([...items]);
	};

	useEffect(() => {
		textInput = document.querySelector('#textInput');
		checkboxes = document.querySelectorAll(
			'.checkinbox input[type="checkbox"]',
		);
		checkboxes.forEach((checkbox) =>
			checkbox.addEventListener('click', handleCheck),
		);
	});

	return (
		<Layout>
			<div className='multipleCheckBackground h-full w-full'>
				<div>
					<form className='search-form'>
						<input
							id='textInput'
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
							<div key={i} className='checkitem'>
								<input type='checkbox' className='checkinput' />
								<p className='checkp'>{items[i]}</p>
								<button onClick={() => deleteItem(i)} className='p-5'>
									Delete
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default multiplecheck;
