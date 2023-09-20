import { ReactElement, createContext, useState } from "react";

export type ProductType = {
	sku: string;
	name: string;
	price: number;
	Category: string;
};

const initState: ProductType[] = [
	{
		sku: "product1",
		name: "Sofa",
		price: 9.99,
		Category: "Sofa",
	},
	{
		sku: "product2",
		name: "Premium Sofa",
		price: 19.99,
		Category: "Sofa",
	},
	{
		sku: "product3",
		name: "Deluxe Mattress",
		price: 29.99,
		Category: "Bedroom",
	},
	{
		sku: "product4",
		name: "Deluxe Bed",
		price: 9.99,
		Category: "Bedroom",
	},
	{
		sku: "product5",
		name: "Table Chair",
		price: 19.99,
		Category: "Office",
	},
	{
		sku: "product6",
		name: "Single Chair",
		price: 29.99,
		Category: "Office",
	},
];

export type useProductContextType = { products: ProductType[] };

const initContextState: useProductContextType = { products: [] };

const ProductsContext = createContext<useProductContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
	const [products, setProducts] = useState<ProductType[]>(initState);
	return (
		<ProductsContext.Provider value={{ products }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContext;
