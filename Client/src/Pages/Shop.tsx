import SideBar from "../Components/SideBar";
import ProductsList from "../Components/ProductList";
import { useState } from "react";

const Shop = () => {
	const [toggleFilters, setToggleFilters] = useState(false);
	const [checked, setChecked] = useState<EventTarget & HTMLInputElement>();
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(20000);
	return (
		<div className="container md:[95vw] lg:w-[85vw] grid md:grid-cols-3 grid-cols-2 gap-6 pt-4 pb-16 items-start">
			<SideBar
				setChecked={setChecked}
				toggleFilters={toggleFilters}
				setToggleFilters={setToggleFilters}
				setMinPrice={setMinPrice}
				setMaxPrice={setMaxPrice}
			/>
			<ProductsList
				checked={checked}
				toggleFilters={toggleFilters}
				setToggleFilters={setToggleFilters}
				minPrice={minPrice}
				maxPrice={maxPrice}
			/>
		</div>
	);
};

export default Shop;
