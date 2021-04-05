import Layout from '../components/Layout';
import PageTitles from '../components/PageTitles';
import { jsexercises } from '../components/jsexerciselist';
import Link from 'next/link';

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
			<div className='flex flex-row flex-wrap justify-center m-10'>
				<div className='w-full text-center text-blue-600'>
					Please note, not all of these exercises have been adjusted for mobile
					use!
				</div>
				{jsexercises.map((item, i) => {
					return (
						<Link href={jsexercises[i].link}>
							<a>
								<div className='max-w-md py-8 px-4 flex flex-wrap flex-row justify-center items-center hover:bg-blue-700 hover:text-white'>
									<p className='text-xl w-full text-center'>
										{jsexercises[i].name}
									</p>
									<p className='text-center'>{jsexercises[i].description}</p>
								</div>
							</a>
						</Link>
					);
				})}
			</div>
		</Layout>
	);
}
