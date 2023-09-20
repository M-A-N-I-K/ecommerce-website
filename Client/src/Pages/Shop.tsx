import SideBar from "../Components/SideBar";
import ProductsList from "../Components/ProductList";
import { useState } from "react";

const Shop = () => {
	const [toggleFilters, setToggleFilters] = useState(false);
	return (
		<div className="container grid md:grid-cols-3 grid-cols-2 gap-6 pt-4 pb-16 items-start">
			<SideBar toggleFilters={toggleFilters} />
			<ProductsList
				toggleFilters={toggleFilters}
				setToggleFilters={setToggleFilters}
			/>
		</div>
	);
};

export default Shop;
