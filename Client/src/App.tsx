import { HashRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import BreadCrumb from "./Components/BreadCrumb";
import Shop from "./Pages/Shop";
import Checkout from "./Pages/Checkout";
import "./app.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

function App() {
	const content = (
		<>
			<HashRouter>
				<Header />
				<Navbar />
				<BreadCrumb />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/home" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
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
