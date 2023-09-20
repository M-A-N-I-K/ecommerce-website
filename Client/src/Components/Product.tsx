import { ProductType } from "../Context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../Context/CartProvider";
import { ReactElement, memo } from "react";

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

	const onAddToCart = () =>
		dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

	const itemInCart = inCart ? ` -> Item in Cart: ✅` : null;
	return (
		<div className="bg-white shadow rounded overflow-hidden group">
			<div className="relative">
				<img src={img} alt={product.name} className="w-full" />
				<div
					className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
				>
					<a
						href="#"
						className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
						title="view product"
					>
						<i className="fa-solid fa-magnifying-glass"></i>
					</a>
					<a
						href="#"
						className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
						title="add to wishlist"
					>
						<i className="fa-solid fa-heart"></i>
					</a>
				</div>
			</div>
			<div className="pt-4 pb-3 px-4">
				<a href="#">
					<h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
						{product.name}
					</h4>
				</a>
				<div className="flex items-baseline mb-1 space-x-2">
					<p className="text-xl text-primary font-semibold">
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
						<span>
							<i className="fa-solid fa-star"></i>
						</span>
						<span>
							<i className="fa-solid fa-star"></i>
						</span>
						<span>
							<i className="fa-solid fa-star"></i>
						</span>
						<span>
							<i className="fa-solid fa-star"></i>
						</span>
						<span>
							<i className="fa-solid fa-star"></i>
						</span>
					</div>
					<div className="text-xs text-gray-500 ml-3">(150)</div>
				</div>
			</div>
			<button
				onClick={onAddToCart}
				className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
			>
				Add to cart
			</button>
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
