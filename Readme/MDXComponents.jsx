const H1 = ({ children }) => {
	return <h1 className='text-2xl font-bold'>{children}</h1>;
};

const H2 = ({ children }) => {
	return <h2 className='text-2xl font-bold'>{children}</h2>;
};

const H3 = ({ children }) => {
	return <h3 className='text-xl font-bold'>{children}</h3>;
};

const H4 = ({ children }) => {
	return <h4 className='text-lg font-bold'>{children}</h4>;
};

const MDXComponents = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H4,
};

export default MDXComponents;
