import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import BreadCrumb from "./Components/BreadCrumb";
import Shop from "./Pages/Shop";
import Checkout from "./Pages/Checkout";
import "./app.css";

function App() {
	const content = (
		<>
			<HashRouter>
				<Header />
				<Navbar />
				<BreadCrumb />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
				<Footer />
			</HashRouter>
		</>
	);

	return content;
}

export default App;
