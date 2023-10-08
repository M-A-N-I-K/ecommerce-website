import { ReactElement, ChangeEvent } from "react";

type PropsType = {
	toggleFilters: boolean;
	setCheckedCategory: React.Dispatch<
		React.SetStateAction<(EventTarget & HTMLInputElement) | undefined>
	>;
	setCheckedRating: React.Dispatch<
		React.SetStateAction<(EventTarget & HTMLInputElement) | undefined>
	>;
	setToggleFilters: React.Dispatch<React.SetStateAction<boolean>>;
	setMinPrice: React.Dispatch<React.SetStateAction<number>>;
	setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};

const SideBar = ({
	toggleFilters,
	setCheckedCategory,
	setCheckedRating,
	setToggleFilters,
	setMinPrice,
	setMaxPrice,
}: PropsType): ReactElement => {
	const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
		setCheckedCategory(e.target);
		setToggleFilters(!toggleFilters);
	};
	const handleChangeRating = (e: ChangeEvent<HTMLInputElement>) => {
		setCheckedRating(e.target);
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
				 mt-16 z-10 left-2 md:left-32 bg-gray-700 shadow-lg p-8 animate-scaleFromTopLeft`}
			>
				<div>
					<h3 className="text-xl text-white mb-3 uppercase font-medium">
						Categories
					</h3>
					<div className="space-y-2">
						<div className="flex items-center">
							<input
								type="checkbox"
								onChange={handleChangeCategory}
								name="cat-1"
								id="cat-1"
								value="Bedroom"
								className="text-gray-50 focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-1"
								className="text-gray-50 ml-3 cusror-pointer"
							>
								Bedroom
							</label>
						</div>
						<div className="flex items-center">
							<input
								onChange={handleChangeCategory}
								type="checkbox"
								name="cat-2"
								id="cat-2"
								value="Sofa"
								className="text-gray-100 focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-2"
								className="text-gray-50 ml-3 cusror-pointer"
							>
								Sofa
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								onChange={handleChangeCategory}
								name="cat-3"
								id="cat-3"
								value="Office"
								className="text-gray-100 focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-3"
								className="text-gray-50 ml-3 cusror-pointer"
							>
								Office
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								onChange={handleChangeCategory}
								name="cat-4"
								id="cat-4"
								value="Outdoor"
								className="text-gray-100 focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-4"
								className="text-gray-50 ml-3 cusror-pointer"
							>
								Outdoor
							</label>
						</div>
					</div>
				</div>

				<div className="pt-4">
					<h3 className="text-xl text-white mb-3 uppercase font-medium">
						Price
					</h3>
					<div className="mt-4 flex items-center">
						<input
							type="number"
							onChange={(e) => setMinPrice(JSON.parse(e.target.value))}
							id="min"
							placeholder="0"
							className="w-full border-gray-300 focus:border-gray-100 rounded focus:ring-0 px-3 py-1 text-gray-50 shadow-sm"
						/>
						<span className="mx-3 text-gray-500">-</span>
						<input
							type="number"
							onChange={(e) => setMaxPrice(JSON.parse(e.target.value))}
							name="max"
							id="max"
							placeholder="20000"
							className="w-full border-gray-300 focus:border-gray-100 rounded focus:ring-0 px-3 py-1 text-gray-50 shadow-sm"
						/>
					</div>
				</div>
				<div>
					<h3 className="mt-2 text-xl text-white mb-3 uppercase font-medium">
						Ratings
					</h3>
					<div className="space-y-2">
						<div className="flex items-center">
							<input
								type="checkbox"
								onChange={handleChangeCategory}
								id="cat-1"
								value="0"
								className="text-gray-100 focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-1"
								className="text-gray-50 ml-3 cusror-pointer"
							>
								&#60; 1.0
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								onChange={handleChangeRating}
								id="cat-1"
								value="1.0"
								className="text-gray-100 focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-1"
								className="text-gray-50 ml-3 cusror-pointer"
							>
								1.0 - 2.0
							</label>
						</div>
						<div className="flex items-center">
							<input
								onChange={handleChangeRating}
								type="checkbox"
								id="cat-2"
								value="2.0"
								className="text-gray-100 focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-2"
								className="text-gray-50 ml-3 cusror-pointer"
							>
								2.0 - 3.0
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								onChange={handleChangeRating}
								id="cat-3"
								value="3.0"
								className="text-gray-100 focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-3"
								className="text-gray-50 ml-3 cusror-pointer"
							>
								3.0 - 4.0
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								onChange={handleChangeRating}
								id="cat-4"
								value="4.0"
								className="text-gray-100 focus:ring-0 rounded-sm cursor-pointer"
							/>
							<label
								htmlFor="cat-4"
								className="text-gray-50 ml-3 cusror-pointer"
							>
								&gt; 4.0
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideBar;
