const Footer = () => {
	const year: number = new Date().getFullYear();

	const pageContent = (
		<>
			<div className="w-[100vw] bg-gray-800 flex items-center justify-center py-4">
				<p className="text-white">Shopping Cart &copy; {year}</p>
			</div>
		</>
	);

	const content = <footer>{pageContent}</footer>;

	return content;
};

export default Footer;
