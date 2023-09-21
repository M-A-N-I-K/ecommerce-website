import { ReactElement } from "react";
import Banner from "../Utils/Banner";
import Features from "../Utils/Features";
import Categories from "../Utils/Categories";
import { Link } from "react-router-dom";

const Home = (): ReactElement => {
	const offer: string = new URL(`../Images/offer.jpg`, import.meta.url).href;
	return (
		<>
			<Banner />
			<Features />
			<Categories />
			<div className="container pb-16">
				<Link to="/home">
					<img src={offer} alt="ads" className="w-full" />
				</Link>
			</div>
		</>
	);
};

export default Home;
