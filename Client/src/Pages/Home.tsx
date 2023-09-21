import { ReactElement } from "react";
import Banner from "../Utils/Banner";
import Features from "../Utils/Features";
import Categories from "../Utils/Categories";

const Home = (): ReactElement => {
	return (
		<>
			<Banner />
			<Features />
			<Categories />
		</>
	);
};

export default Home;
