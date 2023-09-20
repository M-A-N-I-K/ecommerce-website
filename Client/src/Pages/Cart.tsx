import { Link } from "react-router-dom";
import useCart from "../Hooks/useCart";
import CartLineItem from "../Components/CartLineItem";

const Cart = () => {
	const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } =
		useCart();
	return (
		<div className="container mx-auto px-4 md:px-0">
			<div className="flex flex-col lg:flex-row shadow-md my-10">
				<div className="w-full lg:w-3/4 bg-white px-4 lg:px-10 py-2">
					<div className="flex justify-between border-b pb-4">
						<h1 className="font-semibold text-lg md:text-2xl">
							Shopping Cart
						</h1>
						<h2 className="font-semibold text-lg md:text-2xl">
							{totalItems} Items
						</h2>
					</div>
					<div className="flex mt-10 mb-5">
						<h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
							Product Details
						</h3>
						<h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
							Quantity
						</h3>
						<h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
							Price
						</h3>
						<h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
							Total
						</h3>
					</div>
					<div className="w-full h-[50vh] lg:h-[75vh] overflow-x-hidden overflow-y-scroll">
						{cart.map((item, key: number) => {
							return (
								<CartLineItem
									key={key}
									item={item}
									dispatch={dispatch}
									REDUCER_ACTIONS={REDUCER_ACTIONS}
								/>
							);
						})}
					</div>
				</div>

				<div id="summary" className="w-full lg:w-1/4 px-4 md:px-8 py-10">
					<h1 className="font-semibold text-2xl border-b pb-8">
						Order Summary
					</h1>
					<div className="flex justify-between mt-10 mb-5">
						<span className="font-semibold text-sm uppercase">
							Items {totalItems}
						</span>
						<span className="font-semibold text-sm">{totalPrice}</span>
					</div>
					<div>
						<label className="font-medium inline-block mb-3 text-sm uppercase">
							Shipping
						</label>
						<select className="block p-2 text-gray-600 w-full text-sm">
							<option>Standard shipping - $10.00</option>
						</select>
					</div>
					<div className="py-10">
						<label
							htmlFor="promo"
							className="font-semibold inline-block mb-3 text-sm uppercase"
						>
							Promo Code
						</label>
						<input
							type="text"
							id="promo"
							placeholder="Enter your code"
							className="p-2 text-sm w-full"
						/>
					</div>
					<button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
						Apply
					</button>
					<div className="border-t mt-8">
						<div className="flex font-semibold justify-between py-6 text-sm uppercase">
							<span>Total cost</span>
							<span>{totalPrice}</span>
						</div>
						<Link
							to="/checkout"
							className="bg-indigo-500 font-semibold hover:bg-indigo-600 px-4 py-3 text-sm text-white uppercase w-full"
						>
							Checkout
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
