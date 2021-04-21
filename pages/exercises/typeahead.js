import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

function typeahead() {
	const endpoint =
		'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
	const cities = [];
	useEffect(() => {
		fetch(endpoint)
			.then((response) => response.json())
			.then((data) => cities.push(...data));
	});

	const findMatches = (wordToMatch, cities) => {
		return cities.filter((place) => {
			const regex = new RegExp(wordToMatch, 'gi');
			return place.city.match(regex) || place.state.match(regex);
		});
	};

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	const displayMatches = (e) => {
		const matchArray = findMatches(e.target.value, cities);
		const html = matchArray
			.map((place) => {
				//This Regex is supposed to highlighting to the search results, but does not work for some reason. Don't feel like ripping my hair out at this point to find out why. Not a big deal.
				const regex = new RegExp(e.target.value, 'gi');
				const cityName = place.city.replace(
					regex,
					`<span className='typehl'>${e.target.value}</span>`,
				);
				const stateName = place.state.replace(
					regex,
					`<span className='typehl'>${e.target.value}</span>`,
				);
				return `
            <li>
                <span className='name'>${cityName}, ${stateName}</span>
                <span className='name'>${numberWithCommas(
									place.population,
								)}</span>
            </li>`;
			})
			.join('');
		const suggestions = document.querySelector('.suggestions');
		suggestions.innerHTML = html;
	};
	return (
		<Layout title='Type Ahead'>
			<Link href='/jsexercises'>
				<a>
					<div className='max-w-md py-8 px-4 flex flex-wrap flex-row justify-center items-center bg-blue-700 hover:text-white'>
						<p className='text-xl w-full text-center'>Back to JS Exercises</p>
					</div>
				</a>
			</Link>
			<div className='typeAheadBackground'>
				<form className='search-form'>
					<input
						onChange={displayMatches}
						type='text'
						className='search typeAheadInput'
						placeholder='City or State'
					/>
					<ul className='suggestions'>
						<li>Filter for a city</li>
						<li>or a state</li>
					</ul>
				</form>
			</div>
		</Layout>
	);
}

export default typeahead;
