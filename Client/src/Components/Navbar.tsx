import { Link } from "react-router-dom";

const Navbar = () => {
	const sofa: string = new URL(`../Images/icons/sofa.svg`, import.meta.url)
		.href;
	const terrace: string = new URL(
		`../Images/icons/terrace.svg`,
		import.meta.url
	).href;
	const bed: string = new URL(`../Images/icons/bed.svg`, import.meta.url).href;
	const office: string = new URL(`../Images/icons/office.svg`, import.meta.url)
		.href;
	const outdoor: string = new URL(
		`../Images/icons/outdoor-cafe.svg`,
		import.meta.url
	).href;
	const mattress: string = new URL(
		`../Images/icons/bed-2.svg`,
		import.meta.url
	).href;

	return (
		<nav className="bg-gray-800">
			<div className="container flex">
				<div className="px-8 py-4 z-20 bg-white md:flex items-center cursor-pointer relative group hidden">
					<span className="text-gray-700">
						<svg
							version="1.1"
							id="Capa_1"
							className="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 283.426 283.426"
							xmlSpace="preserve"
							fill="#000000"
						>
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								{" "}
								<g>
									{" "}
									<rect
										x="0"
										y="40.84"
										style={{ fill: "currentColor" }}
										width="283.426"
										height="47.735"
									></rect>{" "}
									<rect
										x="0"
										y="117.282"
										style={{ fill: "currentColor" }}
										width="283.426"
										height="47.735"
									></rect>{" "}
									<rect
										x="0"
										y="194.851"
										style={{ fill: "currentColor" }}
										width="283.426"
										height="47.735"
									></rect>{" "}
								</g>{" "}
							</g>
						</svg>
					</span>

					<span className="capitalize ml-2 text-gray-700 hidden">
						All Categories
					</span>
					<div className="absolute w-full left-0 top-full bg-gray-700 shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={sofa}
								alt="sofa"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-white text-sm">Sofa</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={terrace}
								alt="terrace"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-white text-sm">Terrace</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={bed}
								alt="bed"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-white text-sm">Bed</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={office}
								alt="office"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-white text-sm">Office</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={outdoor}
								alt="outdoor"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-white text-sm">Outdoor</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
						>
							<img
								src={mattress}
								alt="Mattress"
								className="w-5 h-5 object-contain"
							/>
							<span className="ml-6 text-white text-sm">Mattress</span>
						</a>
					</div>
				</div>

				<div className="flex items-center justify-between flex-grow md:pl-12 py-5">
					<div className="flex items-center space-x-6 capitalize">
						<Link
							to="/home"
							className="text-gray-200 text-xs md:text-base hover:text-gray-700 transition"
						>
							Home
						</Link>
						<Link
							to="/"
							className="text-gray-200 text-xs md:text-base hover:text-gray-700 transition"
						>
							Shop
						</Link>
						<Link
							to="/"
							className="text-gray-200 text-xs md:text-base hover:text-gray-700 transition"
						>
							About us
						</Link>
						<Link
							to="/"
							className="text-gray-200 text-xs md:text-base hover:text-gray-700 transition"
						>
							Contact us
						</Link>
					</div>
					<Link
						to="/login"
						className="text-gray-200 text-xs md:text-base hover:text-gray-700 transition"
					>
						Login/Register
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
