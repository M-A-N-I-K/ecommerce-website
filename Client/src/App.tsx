import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Cart = lazy(() => import("./Pages/Cart"));
const Shop = lazy(() => import("./Pages/Shop"));
const Checkout = lazy(() => import("./Pages/Checkout"));

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import BreadCrumb from "./Components/BreadCrumb";
import "./app.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Loader from "./Utils/Loader";

function App() {
	const content = (
		<>
			<HashRouter>
				<Header />
				<Navbar />
				<BreadCrumb />
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback={<Loader />}>
								<Shop />
							</Suspense>
						}
					/>
					<Route path="/home" element={<Home />} />
					<Route
						path="/cart"
						element={
							<Suspense fallback={<Loader />}>
								<Cart />
							</Suspense>
						}
					/>
					<Route
						path="/checkout"
						element={
							<Suspense fallback={<Loader />}>
								<Checkout />
							</Suspense>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
				<Footer />
			</HashRouter>
		</>
	);

	return content;
}

export default App;
