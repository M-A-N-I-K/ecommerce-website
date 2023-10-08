import useCart from "../Hooks/useCart";
import { Link } from "react-router-dom";

const Header = () => {
	const { totalItems } = useCart();

	const logo: string = new URL(`../Images/logo.svg`, import.meta.url).href;

	const content = (
		<header className="py-4 shadow-sm bg-black">
			<div className="container flex items-center justify-between">
				<Link to="/">
					<img src={logo} alt="Logo" className="w-32" />
				</Link>

				<div className="w-full max-w-xl relative flex">
					<span className="absolute left-4 top-3 text-lg text-gray-400">
						<i className="fa-solid fa-magnifying-glass"></i>
					</span>
					<input
						type="text"
						name="search"
						id="search"
						className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md hidden md:flex focus:outline-none"
						placeholder="search"
					/>
					<button className="hover:bg-primary border border-primary text-white px-8 rounded-r-md bg-transparent transition md:flex items-center hidden">
						Search
					</button>
				</div>

				<div className="flex justify-center items-center space-x-4">
					<Link
						to="/cart"
						className="text-center text-gray-700 hover:text-primary transition relative"
					>
						<svg
							className="flex-1 w-8 h-8 fill-current"
							viewBox="0 0 24 24"
						>
							<path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
						</svg>
						<span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
							{totalItems}
						</span>
					</Link>
					<a
						href="#"
						className="text-center mb-[1px] text-gray-700 hover:text-gray-600 transition relative"
					>
						<svg
							className="w-6 h-6 fill-current"
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 60.671 60.671"
							xmlSpace="preserve"
						>
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								strokeLinecap="round"
								strokeLinejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								{" "}
								<g>
									{" "}
									<g>
										{" "}
										<ellipse
											cx="30.336"
											cy="12.097"
											rx="11.997"
											ry="12.097"
										></ellipse>{" "}
										<path d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z"></path>{" "}
									</g>{" "}
								</g>{" "}
							</g>
						</svg>
					</a>
				</div>
			</div>
		</header>
	);

	return content;
};

export default Header;
