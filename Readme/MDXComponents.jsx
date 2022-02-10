const H1 = ({ children }) => {
	return <h1 className='text-2xl font-bold'>{children}</h1>;
};

const H2 = ({ children }) => {
	return <h2 className='text-lg font-bold'>{children}</h2>;
};

const MDXComponents = {
	h1: H1,
	h2: H2,
};

export default MDXComponents;
