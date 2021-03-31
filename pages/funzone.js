import Layout from '../components/Layout';
import PageTitles from '../components/PageTitles';
import { jsexercises } from '../components/jsexerciselist';

export default function Funzone() {
	return (
		<Layout title='Fun Zone'>
			<PageTitles title='Fun Zone' height='small' />

			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 250'>
				<path
					fill='#2563eb'
					fill-opacity='1'
					d='M0,32L60,64C120,96,240,160,360,197.3C480,235,600,245,720,208C840,171,960,85,1080,64C1200,43,1320,85,1380,106.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
				></path>
			</svg>
			<div>
				<ul>
					{jsexercises.map((item, i) => {
						return <li>{jsexercises[i].name}</li>;
					})}
				</ul>
			</div>
		</Layout>
	);
}