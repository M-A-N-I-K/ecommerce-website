import Product2 from "./Product";
import { ReactElement, useState, useEffect } from "react";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";

type PropsType = {
	toggleFilters: boolean;
	setToggleFilters: React.Dispatch<React.SetStateAction<boolean>>;
};

const Products2 = ({
	toggleFilters,
	setToggleFilters,
}: PropsType): ReactElement => {
	const { dispatch, REDUCER_ACTIONS, cart } = useCart();
	const { products } = useProducts();
	let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;
	const [sortingOption, setSortingOption] = useState<string>("");

	useEffect(() => {
		if (sortingOption === "price-low-to-high") {
			products.sort((a, b) => b.price - a.price);
		} else if (sortingOption === "price-high-to-low") {
			products.sort((a, b) => a.price - b.price);
		}
	}, [sortingOption, products]);

	if (products?.length) {
		pageContent = products.map((product) => {
			const inCart: boolean = cart.some((item) => item.sku === product.sku);

			return (
				<Product2
					key={product.sku}
					product={product}
					dispatch={dispatch}
					REDUCER_ACTIONS={REDUCER_ACTIONS}
					inCart={inCart}
				/>
			);
		});
	}
	return (
		<div className="z-0 col-span-3">
			<div className="flex items-center mb-4">
				<select
					name="sort"
					id="sort"
					className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
					onChange={(e) => setSortingOption(e.target.value)}
				>
					<option value="">Default sorting</option>
					<option value="price-low-to-high">Price low to high</option>
					<option value="price-high-to-low">Price high to low</option>
				</select>

				<div className="flex gap-2 ml-auto">
					<button
						onClick={() => {
							console.log("toggle called"),
								setToggleFilters(!toggleFilters);
						}}
						className="border border-primary flex items-center justify-center text-white bg-primary rounded cursor-pointer px-4 py-2"
					>
						Filters
					</button>
				</div>
			</div>

			<div className="grid md:grid-cols-3 grid-cols-2 gap-6">
				{pageContent}
			</div>
		</div>
	);
};

export default Products2;
