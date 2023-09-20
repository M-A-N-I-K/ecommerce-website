import { ReactElement, useState } from "react";
import useCart from "../Hooks/useCart";

const Checkout = (): ReactElement => {
	const [confirm, setConfirm] = useState(false);
	const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } =
		useCart();

	const onSubmitOrder = () => {
		dispatch({ type: REDUCER_ACTIONS.SUBMIT });
		setConfirm(true);
	};
	return (
		<div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
			<div className="col-span-12 md:col-span-7 lg:col-span-8 border border-gray-200 p-4 rounded">
				<h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
				<div className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<label htmlFor="first-name" className="text-gray-600">
								First Name <span className="text-primary">*</span>
							</label>
							<input
								type="text"
								name="first-name"
								id="first-name"
								className="input-box"
							/>
						</div>
						<div>
							<label htmlFor="last-name" className="text-gray-600">
								Last Name <span className="text-primary">*</span>
							</label>
							<input
								type="text"
								name="last-name"
								id="last-name"
								className="input-box"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="region" className="text-gray-600">
							Country/Region <span className="text-primary">*</span>
						</label>
						<input
							type="text"
							name="region"
							id="region"
							className="input-box"
						/>
					</div>
					<div>
						<label htmlFor="address" className="text-gray-600">
							Street address <span className="text-primary">*</span>
						</label>
						<input
							type="text"
							name="address"
							id="address"
							className="input-box"
						/>
					</div>
					<div>
						<label htmlFor="city" className="text-gray-600">
							City <span className="text-primary">*</span>
						</label>
						<input
							type="text"
							name="city"
							id="city"
							className="input-box"
						/>
					</div>
					<div>
						<label htmlFor="phone" className="text-gray-600">
							Phone number <span className="text-primary">*</span>
						</label>
						<input
							type="text"
							name="phone"
							id="phone"
							className="input-box"
						/>
					</div>
					<div>
						<label htmlFor="email" className="text-gray-600">
							Email address <span className="text-primary">*</span>
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="input-box"
						/>
					</div>
				</div>
			</div>

			<div className="col-span-12 md:col-span-5   lg:col-span-4 border border-gray-200 p-4 rounded">
				<h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
					Order summary
				</h4>
				<div className="space-y-2">
					{cart.map((item) => {
						return (
							<div key={item.sku} className="flex justify-between">
								<div className="flex w-1/2 justify-between">
									<h5 className="text-gray-800 font-medium">
										{item.name}
									</h5>
									<p className="text-gray-600">x{item.qty}</p>
								</div>
								<p className="text-gray-800 font-medium">
									{new Intl.NumberFormat("en-US", {
										style: "currency",
										currency: "USD",
									}).format(item.price)}{" "}
								</p>
							</div>
						);
					})}
				</div>

				<div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
					<p>Subtotal</p>
					<p>{totalPrice}</p>
				</div>

				<div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
					<p>shipping</p>
					<p>Free</p>
				</div>

				<div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
					<p className="font-semibold">Total</p>
					<p>{totalPrice}</p>
				</div>

				<div className="flex items-center mb-4 mt-2">
					<input
						type="checkbox"
						name="aggrement"
						id="aggrement"
						className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
					/>
					<label
						htmlFor="aggrement"
						className="text-gray-600 ml-3 cursor-pointer text-sm"
					>
						I agree to the{" "}
						<a href="#" className="text-primary">
							terms & conditions
						</a>
					</label>
				</div>

				<a
					href="#"
					className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
				>
					Place order
				</a>
			</div>
		</div>
	);
};

export default Checkout;
