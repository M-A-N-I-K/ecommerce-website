import { ReactElement } from "react";

const Features = (): ReactElement => {
	const deliveryVan: string = new URL(
		`../Images/icons/delivery-van.svg`,
		import.meta.url
	).href;
	const moneyBack: string = new URL(
		`../Images/icons/money-back.svg`,
		import.meta.url
	).href;
	const serviceHours: string = new URL(
		`../Images/icons/service-hours.svg`,
		import.meta.url
	).href;
	return (
		<div className="container py-16">
			<div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center text-gray-100">
				<div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
					<img
						src={deliveryVan}
						alt="Delivery"
						className="w-12 h-12 object-contain"
					/>
					<div>
						<h4 className="font-medium capitalize text-lg">
							Free Shipping
						</h4>
						<p className="text-gray-50 text-sm">Order over $200</p>
					</div>
				</div>
				<div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
					<img
						src={moneyBack}
						alt="Money Back"
						className="w-12 h-12 object-contain"
					/>
					<div>
						<h4 className="font-medium capitalize text-lg">
							Money returns
						</h4>
						<p className="text-gray-50 text-sm">30 days money returs</p>
					</div>
				</div>
				<div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
					<img
						src={serviceHours}
						alt="Service Hours"
						className="w-12 h-12 object-contain"
					/>
					<div>
						<h4 className="font-medium capitalize text-lg">
							24/7 Support
						</h4>
						<p className="text-gray-50 text-sm">Customer support</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
