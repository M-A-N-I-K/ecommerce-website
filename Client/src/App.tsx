import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const Cart = lazy(() => import("./Pages/Cart"));
const Shop = lazy(() => import("./Pages/Shop"));
const Checkout = lazy(() => import("./Pages/Checkout"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import BreadCrumb from "./Components/BreadCrumb";
import Loader from "./Utils/Loader";
import "./app.css";

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
					<Route
						path="/home"
						element={
							<Suspense fallback={<Loader />}>
								<Home />
							</Suspense>
						}
					/>
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
					<Route
						path="/login"
						element={
							<Suspense fallback={<Loader />}>
								<Login />
							</Suspense>
						}
					/>
					<Route
						path="/register"
						element={
							<Suspense fallback={<Loader />}>
								<Register />
							</Suspense>
						}
					/>
				</Routes>
				<Footer />
			</HashRouter>
		</>
	);

	return content;
}

export default App;
