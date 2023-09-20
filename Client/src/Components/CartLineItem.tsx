import {
	CartItemType,
	ReducerAction,
	ReducerActionType,
} from "../Context/CartProvider";
import { ReactElement, ChangeEvent, memo } from "react";

type PropsType = {
	item: CartItemType;
	dispatch: React.Dispatch<ReducerAction>;
	REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({
	item,
	dispatch,
	REDUCER_ACTIONS,
}: PropsType): ReactElement => {
	const img: string = new URL(
		`../Images/products/${item.sku}.jpg`,
		import.meta.url
	).href;

	const lineTotal: number = item.price * item.qty;

	const onChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: REDUCER_ACTIONS.QUANTITY,
			payload: { ...item, qty: Number(e.target.value) },
		});
	};

	const onRemoveFromCart = () =>
		dispatch({
			type: REDUCER_ACTIONS.REMOVE,
			payload: item,
		});

	return (
		<div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
			<div className="flex w-2/5">
				{/* <!-- product --> */}
				<div className="w-20">
					<img className="h-24" src={img} alt={item.name} />
				</div>
				<div className="flex flex-col justify-between ml-4 flex-grow">
					<span className="font-bold text-sm">{item.name}</span>
					<span className="text-red-500 text-xs">{item.name}</span>
					<button
						onClick={onRemoveFromCart}
						className="font-semibold hover:text-red-500 text-gray-500 text-xs"
					>
						Remove
					</button>
				</div>
			</div>
			<div className="flex justify-center w-1/5">
				<svg
					className="fill-current text-gray-600 w-3"
					viewBox="0 0 448 512"
				>
					<path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
				</svg>
				<input
					onChange={onChangeQuantity}
					className="mx-2 border text-center w-12"
					type="text"
					value={item.qty}
				/>

				<svg
					className="fill-current text-gray-600 w-3"
					viewBox="0 0 448 512"
				>
					<path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
				</svg>
			</div>
			<span className="text-center w-1/5 font-semibold text-sm">
				{new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD",
				}).format(item.price)}{" "}
			</span>
			<span className="text-center w-1/5 font-semibold text-sm">
				{lineTotal}
			</span>
		</div>
	);
};

function areItemsEqual(
	{ item: prevItem }: PropsType,
	{ item: nextItem }: PropsType
) {
	return Object.keys(prevItem).every((key) => {
		return (
			prevItem[key as keyof CartItemType] ===
			nextItem[key as keyof CartItemType]
		);
	});
}

const MemoizedCartItem = memo<typeof CartLineItem>(CartLineItem, areItemsEqual);

export default MemoizedCartItem;
