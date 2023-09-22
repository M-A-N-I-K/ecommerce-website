import { ReactElement, ChangeEvent } from "react";

type PropsType = {
	toggleFilters: boolean;
	setChecked: React.Dispatch<
		React.SetStateAction<(EventTarget & HTMLInputElement) | undefined>
	>;
	setToggleFilters: React.Dispatch<React.SetStateAction<boolean>>;
	setMinPrice: React.Dispatch<React.SetStateAction<number>>;
	setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};

const SideBar = ({
	toggleFilters,
	setChecked,
	setToggleFilters,
	setMinPrice,
	setMaxPrice,
}: PropsType): ReactElement => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target);
		setToggleFilters(!toggleFilters);
	};
	return (
		<>
			<div
				className={`${
					toggleFilters
						? "scale-100 opacity-100 transform-none transition-transform ease-in-out duration-500"
						: "scale-0 opacity-0 transform-none transition-transform ease-in-out duration-500 hidden"
				} origin-top-left absolute
				 mt-16 z-10 left-2 md:left-32 bg-white shadow-lg p-12 animate-scaleFromTopLeft`}
			>
				<div>
					<h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
						Categories
					</h3>
					<div className="space-y-2">
						<div className="flex items-center">
							<input
								type="checkbox"
								onChange={handleChange}
								name="cat-1"
								id="cat-1"
								value="Bedroom"
								className="text-primary focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-1"
								className="text-gray-600 ml-3 cusror-pointer"
							>
								Bedroom
							</label>
						</div>
						<div className="flex items-center">
							<input
								onChange={handleChange}
								type="checkbox"
								name="cat-2"
								id="cat-2"
								value="Sofa"
								className="text-primary focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-2"
								className="text-gray-600 ml-3 cusror-pointer"
							>
								Sofa
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								onChange={handleChange}
								name="cat-3"
								id="cat-3"
								value="Office"
								className="text-primary focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-3"
								className="text-gray-600 ml-3 cusror-pointer"
							>
								Office
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								onChange={handleChange}
								name="cat-4"
								id="cat-4"
								value="Outdoor"
								className="text-primary focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-4"
								className="text-gray-600 ml-3 cusror-pointer"
							>
								Outdoor
							</label>
						</div>
					</div>
				</div>

				<div className="pt-4">
					<h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
						Price
					</h3>
					<div className="mt-4 flex items-center">
						<input
							type="number"
							onChange={(e) => setMinPrice(JSON.parse(e.target.value))}
							id="min"
							placeholder="0"
							className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
						/>
						<span className="mx-3 text-gray-500">-</span>
						<input
							type="number"
							onChange={(e) => setMaxPrice(JSON.parse(e.target.value))}
							name="max"
							id="max"
							placeholder="20000"
							className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideBar;
