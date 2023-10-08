import { ProductType } from "../Context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../Context/CartProvider";
import { ReactElement, memo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type PropsType = {
	product: ProductType;
	dispatch: React.Dispatch<ReducerAction>;
	REDUCER_ACTIONS: ReducerActionType;
	inCart: boolean;
};

const Product2 = ({
	product,
	dispatch,
	REDUCER_ACTIONS,
	inCart,
}: PropsType): ReactElement => {
	const img: string = new URL(
		`../Images/products/${product.sku}.jpg`,
		import.meta.url
	).href;

	const starSvg = (
		<svg
			className="w-4 h-4"
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 47.94 47.94"
			xmlSpace="preserve"
			fill="#000000"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					style={{ fill: "#ED8A19" }}
					d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
				></path>{" "}
			</g>
		</svg>
	);

	const onAddToCart = () => {
		dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
		if (!inCart) {
			toast("Item added in cart ✅", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};

	return (
		<div className="bg-gray-800 flex flex-col justify-between shadow rounded overflow-hidden group">
			<div className="relative">
				<img src={img} alt={product.name} className="w-full" />
				<div
					className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
				>
					<a
						href="#"
						className="text-gray-100 text-lg w-9 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-800 transition"
						title="view product"
					>
						<i className="fa-solid fa-magnifying-glass"></i>
					</a>
					<a
						href="#"
						className="text-gray-100 text-lg w-9 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-800 transition"
						title="add to wishlist"
					>
						<i className="fa-solid fa-heart"></i>
					</a>
				</div>
			</div>
			<div className="pt-4 pb-3 px-4">
				<a href="#">
					<h4 className="uppercase font-medium text-sm md:text-xl mb-2 text-gray-800 hover:text-gray-100 transition">
						{product.name}
					</h4>
				</a>
				<div className="flex items-baseline mb-1 space-x-2">
					<p className="text-sm md:text-xl text-gray-100 font-semibold">
						{new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
						}).format(product.price)}{" "}
					</p>
					<p className="text-sm text-gray-400 line-through">
						{new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
						}).format(product.price + 10)}{" "}
					</p>
				</div>
				<div className="flex items-center">
					<div className="flex gap-1 text-sm text-yellow-400">
						<span>{starSvg}</span>
						<span>{starSvg}</span>
						<span>{starSvg}</span>
						<span>{starSvg}</span>
						<span>{starSvg}</span>
					</div>
					<div className="text-xs text-gray-500 ml-3">
						({product.rating})
					</div>
				</div>
			</div>
			<button
				onClick={onAddToCart}
				className="block w-full py-1 text-center hover:bg-gray-200 border border-gray-100 rounded-b bg-gray-50 text-gray-800 transition"
			>
				Add to cart
			</button>
			<ToastContainer
				position="top-center"
				autoClose={33000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</div>
	);
};

function areProductsEqual(
	{ product: prevProduct, inCart: prevInCart }: PropsType,
	{ product: nextProduct, inCart: nextInCart }: PropsType
) {
	return (
		Object.keys(prevProduct).every((key) => {
			return (
				prevProduct[key as keyof ProductType] ===
				nextProduct[key as keyof ProductType]
			);
		}) && prevInCart === nextInCart
	);
}

const MemoizedProduct = memo<typeof Product2>(Product2, areProductsEqual);

export default MemoizedProduct;
