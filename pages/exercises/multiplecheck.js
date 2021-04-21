import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

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
		<Layout title='Multiple Check ToDo List'>
			<Link href='/jsexercises'>
				<a>
					<div className='max-w-md py-8 px-4 flex flex-wrap flex-row justify-center items-center bg-blue-700 hover:text-white'>
						<p className='text-xl w-full text-center'>Back to JS Exercises</p>
					</div>
				</a>
			</Link>
			<div className='multipleCheckBackground h-full w-full flex justify-center flex-row flex-wrap'>
				<div className='w-full flex flex-row justify-center container'>
					<form className='w-1/2 mt-10'>
						<input
							id='textInput'
							type='text'
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
							onChange={change}
							placeholder='Add item'
						/>
						<button
							onClick={addItem}
							className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
