import { ReactElement } from "react";

const Categories = (): ReactElement => {
	const category1: string = new URL(
		`../Images/category/category-1.jpg`,
		import.meta.url
	).href;
	const category2: string = new URL(
		`../Images/category/category-2.jpg`,
		import.meta.url
	).href;
	const category3: string = new URL(
		`../Images/category/category-3.jpg`,
		import.meta.url
	).href;
	const category4: string = new URL(
		`../Images/category/category-4.jpg`,
		import.meta.url
	).href;
	const category5: string = new URL(
		`../Images/category/category-5.jpg`,
		import.meta.url
	).href;
	const category6: string = new URL(
		`../Images/category/category-6.jpg`,
		import.meta.url
	).href;
	return (
		<div className="container py-16">
			<h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
				shop by category
			</h2>
			<div className="grid grid-cols-3 gap-3">
				<div className="relative rounded-sm overflow-hidden group">
					<img src={category1} alt="Bedroom" className="w-full" />
					<a
						href="#"
						className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
					>
						Bedroom
					</a>
				</div>
				<div className="relative rounded-sm overflow-hidden group">
					<img src={category2} alt="Mattress" className="w-full" />
					<a
						href="#"
						className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
					>
						Mattress
					</a>
				</div>
				<div className="relative rounded-sm overflow-hidden group">
					<img src={category3} alt="outdoor" className="w-full" />
					<a
						href="#"
						className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
					>
						Outdoor
					</a>
				</div>
				<div className="relative rounded-sm overflow-hidden group">
					<img src={category4} alt="Sofa" className="w-full" />
					<a
						href="#"
						className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
					>
						Sofa
					</a>
				</div>
				<div className="relative rounded-sm overflow-hidden group">
					<img src={category5} alt="category 1" className="w-full" />
					<a
						href="#"
						className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
					>
						Living Room
					</a>
				</div>
				<div className="relative rounded-sm overflow-hidden group">
					<img src={category6} alt="category 1" className="w-full" />
					<a
						href="#"
						className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
					>
						Kitchen
					</a>
				</div>
			</div>
		</div>
	);
};

export default Categories;
